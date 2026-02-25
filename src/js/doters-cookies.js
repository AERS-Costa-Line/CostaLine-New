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
  // Desktop button (logo)
  const btnD = byId("openDotersModal");
  if (btnD) {
    btnD.style.display = "inline-block";
    btnD.innerHTML = `
      <img id="modalDoters-logo" src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">
    `;
    btnD.onclick = () => {
      // abre modal login (tu lógica ya la tienes en app-header / ensureLogin)
      const login = document.querySelector("app-modal-doters") || document.createElement("app-modal-doters");
      if (!login.isConnected) document.body.appendChild(login);
      login?.open?.();
    };
  }

  // Mobile button (logo)
  const btnM = byId("openDotersModalMovil");
  if (btnM) {
    btnM.style.display = "inline-block";
    btnM.innerHTML = `
      <img id="modalDoters-logoMovil" src="../../src/assets/img/logos/doters.svg" alt="Doters" loading="lazy">
    `;
    btnM.onclick = () => {
      const login = document.querySelector("app-modal-doters") || document.createElement("app-modal-doters");
      if (!login.isConnected) document.body.appendChild(login);
      login?.open?.();
    };
  }

  // Ya NO usamos los contenedores externos de username
  setDisplay("modalDoters-welcomeMessage", "none");
  setDisplay("modalDoters-welcomeMessageMovil", "none");
}

function showLoggedInUI(firstName) {
  const safeName = firstName || "";

  // Desktop: username dentro del mismo botón
  const btnD = byId("openDotersModal");
  if (btnD) {
    btnD.style.display = "inline-block";
    btnD.innerHTML = `
      <a href="#" class="nombre-doters" style="display:inline-flex; align-items:center; gap:8px; text-decoration:none;">
        <img src='../../src/assets/img/logos/doters.svg' class="icono-doters" alt="Doters" title="Perfil Doters" loading="lazy">
        Hola, <span style="font-weight:700;">${safeName}</span>
      </a>
    `;
    btnD.onclick = (e) => {
      e?.preventDefault?.();
      openProfileModal();
    };
  }

  // Mobile: username dentro del mismo botón
  const btnM = byId("openDotersModalMovil");
  if (btnM) {
    btnM.style.display = "inline-block";
    btnM.innerHTML = `
      <a href="#" class="nombre-doters" style="display:inline-flex; align-items:center; gap:8px; text-decoration:none;">
        <img src='../../src/assets/img/logos/doters.svg' class="icono-doters" alt="Doters" title="Perfil Doters" loading="lazy">
        <span style="font-weight:700;">${safeName}</span>
      </a>
    `;
    btnM.onclick = (e) => {
      e?.preventDefault?.();
      openProfileModal();
    };
  }

  // Oculta los contenedores externos (ya no se usan)
  setDisplay("modalDoters-welcomeMessage", "none");
  setDisplay("modalDoters-welcomeMessageMovil", "none");
}

// ---------- Modal perfil ----------
function ensureProfileFallbackModalExists() {
  // Si el componente ya pintó el modal interno, no hacemos nada
  if (byId("modalDoters-profileModal")) return;

  // Inyecta un modal fallback con los IDs que tu fetchUserProfile() ya rellena
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div id="modalDoters-profileModal"
      style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
             background-color:rgba(0,0,0,0.5); z-index:99999;">
      <div style="background:white; margin:10% auto; padding:20px; width:min(520px, 92%);
                  border-radius:8px; text-align:center;">
        <h2>Perfil de Usuario</h2>
        <p><strong>Nombre:</strong> <span id="modalDoters-username"></span></p>
        <p><strong>ID Doters:</strong> <span id="modalDoters-dotersId"></span></p>
        <p><strong>Puntos Disponibles:</strong> <span id="modalDoters-availablePoints"></span></p>

        <button id="modalDoters-logoutButton"
          style="display:block; padding:10px 20px; background-color:red; color:white;
                 border:none; border-radius:5px; cursor:pointer; margin:10px auto;">
          Cerrar Sesión
        </button>

        <button id="modalDoters-closeProfileBtn"
          style="padding:10px 20px; background-color:gray; color:white;
                 border:none; border-radius:5px; cursor:pointer;">
          Cerrar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(wrap);

  // Cerrar
  byId("modalDoters-closeProfileBtn")?.addEventListener("click", closeProfileModal);

  // Logout
  const logoutBtn = byId("modalDoters-logoutButton");
  if (logoutBtn) logoutBtn.onclick = logoutDoters;
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
  // Siempre intenta refrescar datos por si cambió el token o el profile
  if (typeof fetchUserProfile === "function") {
    fetchUserProfile();
  }

  // Asegura que exista el tag del componente (si tu script sí está)
  let profileModal = document.querySelector("modal-doters-profile");
  if (!profileModal) {
    profileModal = document.createElement("modal-doters-profile");
    document.body.appendChild(profileModal);
  }

  // Espera el define PERO con timeout (para no quedar colgado)
  const waitDefined = (name, ms = 250) => {
    if (!window.customElements?.whenDefined) return Promise.resolve(false);
    return Promise.race([
      window.customElements.whenDefined(name).then(() => true),
      new Promise((resolve) => setTimeout(() => resolve(false), ms)),
    ]);
  };

  const defined = await waitDefined("modal-doters-profile", 250);

  // Si NO está definido (script no cargó), usa fallback real
  if (!defined) {
    ensureProfileFallbackModalExists();
    setDisplay("modalDoters-profileModal", "block");
    // Asegura logout
    byId("modalDoters-logoutButton") && (byId("modalDoters-logoutButton").onclick = logoutDoters);
    return;
  }

  // Si ya está definido, intenta abrir vía método
  profileModal = document.querySelector("modal-doters-profile");
  if (profileModal && typeof profileModal.open === "function") {
    profileModal.open();
    // z-index por seguridad
    const inner = profileModal.querySelector("#modalDoters-profileModal");
    if (inner) inner.style.zIndex = "99999";
    return;
  }

  // Fallback por ID si el componente existe pero no trae open()
  ensureProfileFallbackModalExists();
  setDisplay("modalDoters-profileModal", "block");
}
function closeProfileModal() {
  const profileModal = document.querySelector("modal-doters-profile");
  if (profileModal && typeof profileModal.close === "function") {
    profileModal.close();
  }
  setDisplay("modalDoters-profileModal", "none"); // cierra fallback o el modal interno si existe
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