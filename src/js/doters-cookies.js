// =====================================================
// DOTERS - Cookie + UI (Desktop y Mobile)
// =====================================================

// ---------- URLs oficiales ----------
const DOTERS_URL_PROFILE =
  "https://one-api.costaline.com.mx/api/v2/doters/profile";

const DOTERS_URL_LOGIN =
  "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineInicioSesi%C3%B3n";

const DOTERS_URL_REGISTER =
  "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&register=1&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineRegistro";

const DOTERS_URL_LOGOUT =
  "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.costaline.com.mx/sso/logout&client_id=costaline-web";

// ---------- Helpers DOM ----------
function byId(id) {
  return document.getElementById(id);
}
function setDisplay(id, value) {
  const el = byId(id);
  if (el) el.style.display = value;
}
function setText(id, value) {
  const el = byId(id);
  if (el) el.innerText = value ?? "";
}

// ---------- Cookie ----------
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift() || null;
  return null;
}
window.getCookie = window.getCookie || getCookie;

// ---------- UI states ----------
function showLoggedOutUI() {
  setDisplay("openDotersModal", "inline-block");
  setDisplay("openDotersModalMovil", "inline-block");
  setDisplay("modalDoters-welcomeMessage", "none");
  setDisplay("modalDoters-welcomeMessageMovil", "none");
}

function showLoggedInUI(firstName) {
  setDisplay("openDotersModal", "none");
  setDisplay("openDotersModalMovil", "none");

  const desktop = byId("modalDoters-welcomeMessage");
  if (desktop) {
    desktop.style.display = "inline-flex";
    desktop.style.alignItems = "center";
    desktop.style.gap = "8px";
    desktop.style.cursor = "pointer";
    desktop.innerHTML =
      `<i class="icon-user-info doters-basic doters-bigger"></i>` +
      `Bienvenido, <span id="modalDoters-welcomeUsernameSpan" style="font-weight:700; cursor:pointer;">${firstName || ""}</span>`;
  }

  const mobile = byId("modalDoters-welcomeMessageMovil");
  if (mobile) {
    mobile.style.display = "inline-flex";
    mobile.style.alignItems = "center";
    mobile.style.gap = "8px";
    mobile.style.cursor = "pointer";
    mobile.innerHTML =
      `<i class="icon-user-info doters-basic doters-bigger"></i>` +
      `<span id="modalDoters-welcomeUsernameSpanMovil" style="font-weight:700; cursor:pointer;">${firstName || ""}</span>`;
  }
}

// ---------- Modal perfil ----------
function ensureProfileComponentExists() {
  let profileModal = document.querySelector("modal-doters-profile");
  if (!profileModal) {
    profileModal = document.createElement("modal-doters-profile");
    document.body.appendChild(profileModal);
  }
  return profileModal;
}

// Asegura que el modal interno tenga z-index alto (por si algo lo tapa)
function bumpProfileZIndex() {
  const profileModal = document.querySelector("modal-doters-profile");
  const inner = profileModal?.querySelector?.("#modalDoters-profileModal") || byId("modalDoters-profileModal");
  if (inner) inner.style.zIndex = "99999";
}

function deleteTokenCookie() {
  document.cookie =
    "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;";
  document.cookie =
    "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function logoutDoters() {
  deleteTokenCookie();
  closeProfileModal();
  window.location.href = DOTERS_URL_LOGOUT;
}
window.logoutDoters = window.logoutDoters || logoutDoters;

function wireLogoutButton() {
  const profileModal = document.querySelector("modal-doters-profile");
  const logoutBtn =
    profileModal?.querySelector?.("#modalDoters-logoutButton") ||
    byId("modalDoters-logoutButton");

  if (logoutBtn) {
    logoutBtn.style.display = "block";
    logoutBtn.onclick = logoutDoters;
  }
}

async function openProfileModal() {
  // 1) Crea/asegura tag
  ensureProfileComponentExists();

  // 2) Espera a que el custom element esté definido (CLAVE)
  if (window.customElements?.whenDefined) {
    try {
      await window.customElements.whenDefined("modal-doters-profile");
    } catch (e) {
      // no-op
    }
  }

  // 3) Ahora ya debería estar upgradeado y tener connectedCallback + open()
  const profileModal = ensureProfileComponentExists();

  // 4) refresca datos por si acaso
  if (typeof fetchUserProfile === "function") {
    fetchUserProfile();
  }

  // 5) conecta logout
  wireLogoutButton();

  // 6) abre modal
  if (profileModal && typeof profileModal.open === "function") {
    profileModal.open();
  } else {
    // fallback: si por algo no existe open(), abre por id (si ya fue renderizado)
    setDisplay("modalDoters-profileModal", "block");
  }

  bumpProfileZIndex();
}

function closeProfileModal() {
  const profileModal = document.querySelector("modal-doters-profile");
  if (profileModal && typeof profileModal.close === "function") {
    profileModal.close();
  } else {
    setDisplay("modalDoters-profileModal", "none");
  }
}

window.openProfileModal = window.openProfileModal || openProfileModal;
window.closeProfileModal = window.closeProfileModal || closeProfileModal;

// ---------- Profile fetch ----------
async function fetchUserProfile() {
  const token = getCookie("token");

  if (!token) {
    showLoggedOutUI();
    return;
  }

  let res;
  try {
    res = await fetch(DOTERS_URL_PROFILE, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.error("[DOTERS] fetch error:", e);
    showLoggedOutUI();
    return;
  }

  if (!res.ok) {
    console.warn("[DOTERS] profile status:", res.status);
    deleteTokenCookie();
    showLoggedOutUI();
    return;
  }

  const data = await res.json();

  showLoggedInUI(data.first_name || "");

  // Pinta datos en modal de perfil
  setText("modalDoters-username", data.first_name || "");
  setText("modalDoters-dotersId", data.doters_id || "");
  setText("modalDoters-availablePoints", data.available_points ?? "");

  wireLogoutButton();
}

window.fetchUserProfile = window.fetchUserProfile || fetchUserProfile;

// ---------- Delegación de click (CORREGIDA con closest) ----------
document.addEventListener("click", (e) => {
  const target = e.target;

  const hit = target?.closest?.(
    "#modalDoters-welcomeMessage, #modalDoters-welcomeMessageMovil, #modalDoters-welcomeUsernameSpan, #modalDoters-welcomeUsernameSpanMovil"
  );

  if (hit) {
    e.preventDefault();
    openProfileModal();
  }
});

// ---------- Init robusto ----------
function initDoters(tries = 60) {
  const ready =
    byId("openDotersModal") &&
    byId("openDotersModalMovil") &&
    byId("modalDoters-welcomeMessage") &&
    byId("modalDoters-welcomeMessageMovil");

  if (!ready && tries > 0) {
    setTimeout(() => initDoters(tries - 1), 50);
    return;
  }

  fetchUserProfile();
}

document.addEventListener("DOMContentLoaded", () => initDoters());
window.addEventListener("pageshow", () => initDoters());

// Watch corto por si token aparece después del render del header
let ticks = 0;
const watcher = setInterval(() => {
  ticks++;
  if (getCookie("token")) {
    clearInterval(watcher);
    initDoters();
  }
  if (ticks >= 25) clearInterval(watcher);
}, 200);