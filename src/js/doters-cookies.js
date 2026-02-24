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

function openProfileModal() {
  const wc = document.querySelector("modal-doters-profile");
  if (wc && typeof wc.open === "function") {
    wc.open();
    return;
  }
  safeSetStyleDisplay("modalDoters-profileModal", "block");
}

function closeProfileModal() {
  const wc = document.querySelector("modal-doters-profile");
  if (wc && typeof wc.close === "function") {
    wc.close();
    return;
  }
  safeSetStyleDisplay("modalDoters-profileModal", "none");
}

function logoutDoters() {
  const domain = ".etn.com.mx"; // AJUSTA si realmente se setea en otro dominio
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/; SameSite=None; Secure`;
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/; SameSite=None; Secure`;
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure";

  closeProfileModal();

  window.location.href =
    "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.etn.com.mx/sso/logout&client_id=etn-web";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift() || null;
  return null;
}

function fetchUserProfile() {
  safeSetStyleDisplay("modalDoters-logo", "none");

  fetch("https://one-api.etn.com.mx/api/v2/doters/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const welcomeMessage = document.getElementById("modalDoters-welcomeMessage");
      if (welcomeMessage) {
        welcomeMessage.innerHTML =
          `<i class="icon-user-info doters-basic doters-bigger"></i> Bienvenido, ` +
          `<span id="modalDoters-welcomeUsernameSpan" style="cursor:pointer; font-weight:700;">${data.first_name}</span>`;
        welcomeMessage.style.display = "block";
        safeSetOnClick("modalDoters-welcomeUsernameSpan", openProfileModal);
      }

      safeSetTextContent("modalDoters-username", `${data.first_name}`);
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
      safeSetStyleDisplay("modalDoters-logo", "block");
      safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
    });
}

// Init robusto: espera a que el DOM (y tu header) existan
function initDoters() {
  if (getCookie("token")) {
    safeSetStyleDisplay("modalDoters-logo", "none");
    fetchUserProfile();
  } else {
    safeSetStyleDisplay("modalDoters-logo", "block");
    safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
  }
}

// Reintento corto: por si app-header aún no pintó el welcomeMessage cuando carga el script
function initDotersWithRetry(tries = 20) {
  const hasHeaderTargets =
    document.getElementById("modalDoters-welcomeMessage") &&
    document.getElementById("modalDoters-logo");

  if (hasHeaderTargets || tries <= 0) {
    initDoters();
    return;
  }
  setTimeout(() => initDotersWithRetry(tries - 1), 50);
}

document.addEventListener("DOMContentLoaded", () => initDotersWithRetry());