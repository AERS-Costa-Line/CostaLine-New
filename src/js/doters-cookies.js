// Helper function to safely set style.display
function safeSetStyleDisplay(elementId, displayValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = displayValue;
  } else {
    // console.warn(`Element with ID '${elementId}' not found. Cannot set display to '${displayValue}'.`);
  }
}

// Helper function to safely set innerHTML
function safeSetInnerHTML(elementId, htmlValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = htmlValue;
  }
}

// Helper function to safely set textContent (using innerText as per original, though textContent is often preferred)
function safeSetTextContent(elementId, textValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = textValue;
  }
}

// Helper function to safely attach onclick
function safeSetOnClick(elementId, handler) {
  const element = document.getElementById(elementId);
  if (element) {
    element.onclick = handler;
  }
}

// Función para abrir el modal de inicio de sesión
function openLoginModal() {
  safeSetStyleDisplay("modalDoters-loginModal", "flex"); // app-modal-doters uses 'flex'
}

// Función para cerrar el modal de inicio de sesión
function closeLoginModal() {
  safeSetStyleDisplay("modalDoters-loginModal", "none");
}

// Función para cerrar el modal de perfil
function closeProfileModal() {
  safeSetStyleDisplay("modalDoters-profileModal", "none");
}

// Función para redireccionar al iniciar sesión
function redirectToLogin() {
  safeSetStyleDisplay("modalDoters-logo", "none");
  window.location.href =
    "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineInicioSesi%C3%B3n";
}

// Función para redireccionar al unirse
function redirectToRegister() {
  safeSetStyleDisplay("modalDoters-logo", "none");
  window.location.href =
    "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&register=1&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineRegistro";
}

// Función para obtener la información del perfil del usuario
function fetchUserProfile() {
  safeSetStyleDisplay("modalDoters-logo", "none");

  fetch("https://one-api.costaline.com.mx/api/v2/doters/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCookie("token")}`, // Obtén el token de la cookie
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const welcomeMessage = document.getElementById(
        "modalDoters-welcomeMessage"
      );
      if (welcomeMessage) {
        // Use a unique ID for the span to avoid conflict with the one in the profile modal
        welcomeMessage.innerHTML = `<i class="icon-user-info doters-basic doters-bigger"></i> Bienvenido, <span id="modalDoters-welcomeUsernameSpan" style="cursor: pointer; font-weight: 700;">${data.first_name}</span>`;
        welcomeMessage.style.display = "block";
        safeSetOnClick("modalDoters-welcomeUsernameSpan", openProfileModal);
      }

      // Asignar los datos al modal de perfil
      safeSetTextContent("modalDoters-username", `${data.first_name}`); // Targets span in profile modal
      safeSetTextContent("modalDoters-dotersId", data.doters_id);
      safeSetTextContent("modalDoters-availablePoints", data.available_points);

      // Mostrar el botón de cerrar sesión
      const logoutButton = document.getElementById("modalDoters-logoutButton");
      if (logoutButton) {
        logoutButton.style.display = "block";
        logoutButton.onclick = logoutDoters;
      }
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);
      // If profile fetch fails, show the logo again and hide welcome message
      safeSetStyleDisplay("modalDoters-logo", "block");
      safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
    });
}

// Función para abrir el modal de perfil del usuario
function openProfileModal() {
  safeSetStyleDisplay("modalDoters-profileModal", "block"); // Original was 'block', component uses 'block'
}

// Función para cerrar sesión y redirigir
function logoutDoters() {
  console.log("Intentando cerrar sesión...");

  // Eliminar la cookie
  // Asegúrate de que el dominio y la ruta coincidan con cómo se estableció la cookie.
  // Si la cookie se estableció para .costaline.com.mx (como en travelpass-cookie.js), usa ese dominio.
  // Si se estableció para .etn.com.mx, el código original está bien.
  // Por ahora, mantendré el dominio original del script, pero verifica esto.
  const domain = ".etn.com.mx"; // o ".costaline.com.mx" si es el caso
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/; SameSite=None; Secure`;
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/; SameSite=None; Secure`; // Fallback for localhost or different domains
  document.cookie =
    "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure"; // Fallback without domain

  // Redirigir al usuario después del cierre de sesión
  window.location.href =
    "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.etn.com.mx/sso/logout&client_id=etn-web";
}

// Función para obtener la cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift() || null;
  return null;
}

// Llamar a la función fetchUserProfile si ya hay una cookie válida
if (getCookie("token")) {
  safeSetStyleDisplay("modalDoters-logo", "none");
  fetchUserProfile();
} else {
  safeSetStyleDisplay("modalDoters-logo", "block");
  safeSetStyleDisplay("modalDoters-welcomeMessage", "none");
}
