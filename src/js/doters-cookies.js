// ... tus helpers y funciones tal cual ...

function fetchUserProfile() {
  safeSetStyleDisplay("modalDoters-logo", "none");
  safeSetStyleDisplay("modalDoters-logoMovil", "none");

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

      const welcomeMessageMovil = document.getElementById("modalDoters-welcomeMessageMovil");
      if (welcomeMessageMovil) {
        welcomeMessageMovil.innerHTML =
          `<i class="icon-user-info doters-basic doters-bigger"></i> ` +
          `<span id="modalDoters-welcomeUsernameSpanMovil" style="cursor:pointer; font-weight:700;">${data.first_name}</span>`;
        welcomeMessageMovil.style.display = "block";
        safeSetOnClick("modalDoters-welcomeUsernameSpanMovil", openProfileModal);
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
      safeSetStyleDisplay("modalDoters-logoMovil", "block");
      safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
      safeSetStyleDisplay("modalDoters-welcomeMessageMovil", "none");
    });
}

// --- INIT ROBUSTO: espera a que exista el header ---
function initDoters(tries = 30) {
  const hasHeaderTargets =
    document.getElementById("modalDoters-logo") &&
    document.getElementById("modalDoters-welcomeMessage");

  if (!hasHeaderTargets && tries > 0) {
    setTimeout(() => initDoters(tries - 1), 50);
    return;
  }

  if (getCookie("token")) {
    safeSetStyleDisplay("modalDoters-logo", "none");
    safeSetStyleDisplay("modalDoters-logoMovil", "none");
    fetchUserProfile();
  } else {
    safeSetStyleDisplay("modalDoters-logo", "block");
    safeSetStyleDisplay("modalDoters-logoMovil", "block");
    safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
    safeSetStyleDisplay("modalDoters-welcomeMessageMovil", "none");
  }
}

document.addEventListener("DOMContentLoaded", () => initDoters());