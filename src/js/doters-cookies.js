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

// Hacemos accesibles estas funciones si el header las usa
window.getCookie = window.getCookie || getCookie;

// ---------- UI states ----------
function showLoggedOutUI() {
  // Mostrar botones Doters
  setDisplay("openDotersModal", "inline-block");
  setDisplay("openDotersModalMovil", "inline-block");

  // Ocultar username
  setDisplay("modalDoters-welcomeMessage", "none");
  setDisplay("modalDoters-welcomeMessageMovil", "none");
}

function showLoggedInUI(firstName) {
  // Ocultar botones Doters completos (desktop + mobile)
  setDisplay("openDotersModal", "none");
  setDisplay("openDotersModalMovil", "none");

  // Pintar username desktop
  const desktop = byId("modalDoters-welcomeMessage");
  if (desktop) {
    desktop.innerHTML =
      `<i class="icon-user-info doters-basic doters-bigger"></i> Bienvenido, ` +
      `<span id="modalDoters-welcomeUsernameSpan" style="cursor:pointer;font-weight:700;">${firstName}</span>`;
    desktop.style.display = "block";
    const span = byId("modalDoters-welcomeUsernameSpan");
    if (span) span.onclick = openProfileModal;
  }

  // Pintar username mobile
  const mobile = byId("modalDoters-welcomeMessageMovil");
  if (mobile) {
    mobile.innerHTML =
      `<i class="icon-user-info doters-basic doters-bigger"></i> ` +
      `<span id="modalDoters-welcomeUsernameSpanMovil" style="cursor:pointer;font-weight:700;">${firstName}</span>`;
    mobile.style.display = "block";
    const spanM = byId("modalDoters-welcomeUsernameSpanMovil");
    if (spanM) spanM.onclick = openProfileModal;
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

function openProfileModal() {
  const profileModal = ensureProfileComponentExists();
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
  // Borrar en dominio y fallback sin dominio
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

  try {
    const res = await fetch(DOTERS_URL_PROFILE, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      // Token inválido/expirado
      deleteTokenCookie();
      showLoggedOutUI();
      return;
    }

    const data = await res.json();

    // Header (desktop + mobile)
    showLoggedInUI(data.first_name || "");

    // Modal perfil
    setText("modalDoters-username", data.first_name || "");
    setText("modalDoters-dotersId", data.doters_id || "");
    setText("modalDoters-availablePoints", data.available_points ?? "");

    const logoutButton = byId("modalDoters-logoutButton");
    if (logoutButton) {
      logoutButton.style.display = "block";
      logoutButton.onclick = logoutDoters;
    }
  } catch (e) {
    // CORS/red/etc.
    showLoggedOutUI();
  }
}

window.fetchUserProfile = window.fetchUserProfile || fetchUserProfile;

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

// Importante para Safari / BFCache (regreso del login)
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