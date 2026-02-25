// =====================================================
// DOTERS - Cookie + UI (Desktop y Mobile)
// URLs fijas (tal como las proporcionaste)
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
  // Mostrar botones Doters (logo)
  setDisplay("openDotersModal", "inline-block");
  setDisplay("openDotersModalMovil", "inline-block");

  // Ocultar username
  setDisplay("modalDoters-welcomeMessage", "none");
  setDisplay("modalDoters-welcomeMessageMovil", "none");
}

function showLoggedInUI(firstName) {
  // Ocultar botones completos
  setDisplay("openDotersModal", "none");
  setDisplay("openDotersModalMovil", "none");

  // Desktop
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

  // Mobile
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

// ---------- Modal perfil open/close ----------
function ensureProfileComponentExists() {
  let profileModal = document.querySelector("modal-doters-profile");
  if (!profileModal) {
    profileModal = document.createElement("modal-doters-profile");
    document.body.appendChild(profileModal);
  }
  return profileModal;
}

function wireLogoutButton() {
  // Intenta dentro del componente
  const profileModal = document.querySelector("modal-doters-profile");
  const logoutBtn =
    profileModal?.querySelector?.("#modalDoters-logoutButton") ||
    byId("modalDoters-logoutButton");

  if (logoutBtn) {
    logoutBtn.style.display = "block";
    logoutBtn.onclick = logoutDoters;
  }
}

function openProfileModal() {
  // Asegura que existe el componente
  const profileModal = ensureProfileComponentExists();

  // Asegura que el botón logout quede funcional
  wireLogoutButton();

  // Si el modal se abre y los datos aún no están, intentamos refrescar profile
  if (typeof fetchUserProfile === "function") {
    fetchUserProfile();
  }

  if (profileModal && typeof profileModal.open === "function") {
    profileModal.open();
  } else {
    setDisplay("modalDoters-profileModal", "block");
  }
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

// ---------- Logout ----------
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
    // si hay error de red/cors, no tumbes la UI, pero tampoco ocultes
    showLoggedOutUI();
    return;
  }

  if (!res.ok) {
    console.warn("[DOTERS] profile status:", res.status);
    // token inválido -> limpia y vuelve a logged out
    deleteTokenCookie();
    showLoggedOutUI();
    return;
  }

  const data = await res.json();

  // UI logged in (username)
  showLoggedInUI(data.first_name || "");

  // Pinta datos en modal de perfil
  setText("modalDoters-username", data.first_name || "");
  setText("modalDoters-dotersId", data.doters_id || "");
  setText("modalDoters-availablePoints", data.available_points ?? "");

  // Asegura logout button
  wireLogoutButton();
}

window.fetchUserProfile = window.fetchUserProfile || fetchUserProfile;

// ---------- Delegación de click (clave) ----------
document.addEventListener("click", (e) => {
  const t = e.target;

  // Click username desktop/mobile
  if (
    t?.id === "modalDoters-welcomeUsernameSpan" ||
    t?.id === "modalDoters-welcomeUsernameSpanMovil"
  ) {
    e.preventDefault();
    openProfileModal();
  }

  // Click en el contenedor (por si clican fuera del span)
  if (
    t?.id === "modalDoters-welcomeMessage" ||
    t?.id === "modalDoters-welcomeMessageMovil"
  ) {
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

// Safari / BFCache (regreso del login)
window.addEventListener("pageshow", () => initDoters());

// Watch corto por si token aparece después del render del header
let ticks = 0;
const watcher = setInterval(() => {
  ticks++;
  if (getCookie("token")) {
    clearInterval(watcher);
    initDoters();
  }
  if (ticks >= 25) clearInterval(watcher); // ~5s
}, 200);