// ===============================
// Helpers
// ===============================

function safeSetStyleDisplay(elementId, displayValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = displayValue;
  }
}

function safeSetInnerHTML(elementId, htmlValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = htmlValue;
  }
}

function safeSetTextContent(elementId, textValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = textValue;
  }
}

function safeSetOnClick(elementId, handler) {
  const element = document.getElementById(elementId);
  if (element) {
    element.onclick = handler;
  }
}

// ===============================
// Cookie
// ===============================

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift() || null;
  return null;
}

// ===============================
// Logout
// ===============================

function logoutDoters() {
  console.log("Intentando cerrar sesión...");

  const domain = ".costaline.com.mx";

  // Eliminar cookie
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Redirigir a logout oficial
  window.location.href =
    "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.costaline.com.mx/sso/logout&client_id=costaline-web";
}

// ===============================
// Abrir / cerrar modal perfil
// ===============================

function openProfileModal() {
  const profileModal = document.querySelector("modal-doters-profile");
  if (profileModal && typeof profileModal.open === "function") {
    profileModal.open();
  } else {
    safeSetStyleDisplay("modalDoters-profileModal", "block");
  }
}

function closeProfileModal() {
  const profileModal = document.querySelector("modal-doters-profile");
  if (profileModal && typeof profileModal.close === "function") {
    profileModal.close();
  } else {
    safeSetStyleDisplay("modalDoters-profileModal", "none");
  }
}

// ===============================
// Fetch perfil usuario
// ===============================

function fetchUserProfile() {
  const token = getCookie("token");

  console.log("[DOTERS] origin:", location.origin);
console.log("[DOTERS] cookie raw:", document.cookie);
console.log("[DOTERS] token:", token);

  if (!token) {
    console.log("No existe token en cookies");
    return;
  }

  safeSetStyleDisplay("modalDoters-logo", "none");
  safeSetStyleDisplay("modalDoters-logoMovil", "none");

  fetch("https://one-api.costaline.com.mx/api/v2/doters/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log("Perfil Doters:", data);

      // Desktop
      const welcomeMessage = document.getElementById("modalDoters-welcomeMessage");
      if (welcomeMessage) {
        welcomeMessage.innerHTML =
          `<i class="icon-user-info doters-basic doters-bigger"></i> Bienvenido, ` +
          `<span id="modalDoters-welcomeUsernameSpan" style="cursor:pointer; font-weight:700;">${data.first_name}</span>`;
        welcomeMessage.style.display = "block";
        safeSetOnClick("modalDoters-welcomeUsernameSpan", openProfileModal);
      }

      // Mobile
      const welcomeMessageMovil = document.getElementById("modalDoters-welcomeMessageMovil");
      if (welcomeMessageMovil) {
        welcomeMessageMovil.innerHTML =
          `<i class="icon-user-info doters-basic doters-bigger"></i> ` +
          `<span id="modalDoters-welcomeUsernameSpanMovil" style="cursor:pointer; font-weight:700;">${data.first_name}</span>`;
        welcomeMessageMovil.style.display = "block";
        safeSetOnClick("modalDoters-welcomeUsernameSpanMovil", openProfileModal);
      }

      // Modal datos
      safeSetTextContent("modalDoters-username", data.first_name);
      safeSetTextContent("modalDoters-dotersId", data.doters_id);
      safeSetTextContent("modalDoters-availablePoints", data.available_points);

      const logoutButton = document.getElementById("modalDoters-logoutButton");
      if (logoutButton) {
        logoutButton.style.display = "block";
        logoutButton.onclick = logoutDoters;
      }
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);

      // Mostrar logo nuevamente
      safeSetStyleDisplay("modalDoters-logo", "block");
      safeSetStyleDisplay("modalDoters-logoMovil", "block");

      safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
      safeSetStyleDisplay("modalDoters-welcomeMessageMovil", "none");

      // Limpiar cookie si está inválida
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;";
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
}

// ===============================
// Init robusto (espera header)
// ===============================

function initDoters(tries = 30) {
  const headerReady =
    document.getElementById("modalDoters-logo") &&
    document.getElementById("modalDoters-welcomeMessage");

  if (!headerReady && tries > 0) {
    setTimeout(() => initDoters(tries - 1), 50);
    return;
  }

  if (getCookie("token")) {
    fetchUserProfile();
  } else {
    safeSetStyleDisplay("modalDoters-logo", "block");
    safeSetStyleDisplay("modalDoters-logoMovil", "block");
    safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
    safeSetStyleDisplay("modalDoters-welcomeMessageMovil", "none");
  }
}

document.addEventListener("DOMContentLoaded", () => initDoters());