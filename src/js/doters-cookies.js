// ===============================
// Helpers
// ===============================
function safeSetStyleDisplay(elementId, displayValue) {
  const element = document.getElementById(elementId);
  if (element) element.style.display = displayValue;
}

function safeSetTextContent(elementId, textValue) {
  const element = document.getElementById(elementId);
  if (element) element.innerText = textValue;
}

function safeSetOnClick(elementId, handler) {
  const element = document.getElementById(elementId);
  if (element) element.onclick = handler;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift() || null;
  return null;
}

// ===============================
// UI helpers (LO QUE TE FALTABA)
// ===============================
function setLoggedOutUI() {
  // Mostrar botones Doters
  safeSetStyleDisplay("openDotersModal", "inline-block");
  safeSetStyleDisplay("openDotersModalMovil", "inline-block");

  // Mostrar logos (por si acaso)
  safeSetStyleDisplay("modalDoters-logo", "block");
  safeSetStyleDisplay("modalDoters-logoMovil", "block");

  // Ocultar username
  safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
  safeSetStyleDisplay("modalDoters-welcomeMessageMovil", "none");
}

function setLoggedInUI(firstName) {
  // Ocultar botones completos (no solo el <img>)
  safeSetStyleDisplay("openDotersModal", "none");
  safeSetStyleDisplay("openDotersModalMovil", "none");

  // Pintar username
  const welcome = document.getElementById("modalDoters-welcomeMessage");
  if (welcome) {
    welcome.innerHTML =
      `<i class="icon-user-info doters-basic doters-bigger"></i> Bienvenido, ` +
      `<span id="modalDoters-welcomeUsernameSpan" style="cursor:pointer; font-weight:700;">${firstName}</span>`;
    welcome.style.display = "block";
    safeSetOnClick("modalDoters-welcomeUsernameSpan", openProfileModal);
  }

  const welcomeMovil = document.getElementById("modalDoters-welcomeMessageMovil");
  if (welcomeMovil) {
    welcomeMovil.innerHTML =
      `<i class="icon-user-info doters-basic doters-bigger"></i> ` +
      `<span id="modalDoters-welcomeUsernameSpanMovil" style="cursor:pointer; font-weight:700;">${firstName}</span>`;
    welcomeMovil.style.display = "block";
    safeSetOnClick("modalDoters-welcomeUsernameSpanMovil", openProfileModal);
  }
}

// ===============================
// Modal perfil (open/close)
// ===============================
function openProfileModal() {
  const wc = document.querySelector("modal-doters-profile");
  if (wc && typeof wc.open === "function") return wc.open();
  safeSetStyleDisplay("modalDoters-profileModal", "block");
}

function closeProfileModal() {
  const wc = document.querySelector("modal-doters-profile");
  if (wc && typeof wc.close === "function") return wc.close();
  safeSetStyleDisplay("modalDoters-profileModal", "none");
}

// ===============================
// Logout
// ===============================
function logoutDoters() {
  const domain = ".costaline.com.mx";

  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  window.location.href =
    "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.costaline.com.mx/sso/logout&client_id=costaline-web";
}

// ===============================
// Fetch perfil usuario
// ===============================
async function fetchUserProfile() {
  const token = getCookie("token");

  // Debug útil (déjalo mientras pruebas)
  console.log("[DOTERS] origin:", location.origin);
  console.log("[DOTERS] has token:", !!token);
  // console.log("[DOTERS] cookie:", document.cookie); // si quieres ver todo

  if (!token) {
    setLoggedOutUI();
    return;
  }

  try {
    const res = await fetch("https://one-api.costaline.com.mx/api/v2/doters/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("[DOTERS] profile status:", res.status);

    if (!res.ok) {
      // Token inválido / expirado / CORS / etc.
      setLoggedOutUI();
      // opcional: limpiar cookie si el backend ya no lo acepta
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;";
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      return;
    }

    const data = await res.json();

    // Reflejar en header
    setLoggedInUI(data.first_name || "");

    // Pintar datos en modal perfil
    safeSetTextContent("modalDoters-username", data.first_name || "");
    safeSetTextContent("modalDoters-dotersId", data.doters_id || "");
    safeSetTextContent("modalDoters-availablePoints", data.available_points ?? "");

    const logoutButton = document.getElementById("modalDoters-logoutButton");
    if (logoutButton) {
      logoutButton.style.display = "block";
      logoutButton.onclick = logoutDoters;
    }
  } catch (e) {
    console.error("[DOTERS] profile fetch error:", e);
    setLoggedOutUI();
  }
}

// ===============================
// Init robusto
// ===============================
function initDoters(tries = 40) {
  // Espera a que el web component header ya haya pintado los targets
  const ready =
    document.getElementById("openDotersModal") &&
    document.getElementById("modalDoters-welcomeMessage") &&
    document.getElementById("openDotersModalMovil") &&
    document.getElementById("modalDoters-welcomeMessageMovil");

  if (!ready && tries > 0) {
    setTimeout(() => initDoters(tries - 1), 50);
    return;
  }

  fetchUserProfile();
}

// Carga normal
document.addEventListener("DOMContentLoaded", () => initDoters());

// MUY importante para Safari/iOS y navegación back/forward cache
window.addEventListener("pageshow", () => initDoters());

// Watch corto: por si el token aparece “tarde” (redirecciones/headers/cache)
let watchCount = 0;
const watch = setInterval(() => {
  watchCount++;
  if (getCookie("token")) {
    clearInterval(watch);
    initDoters();
  }
  if (watchCount >= 20) clearInterval(watch); // ~4s
}, 200);