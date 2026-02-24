// ========================================================================
// TUS FUNCIONES ORIGINALES (SIN CAMBIOS)
// ========================================================================

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

function openLoginModal() {
    safeSetStyleDisplay("modalDoters-loginModal", "flex");
}

function closeLoginModal() {
    safeSetStyleDisplay("modalDoters-loginModal", "none");
}

function closeProfileModal() {
    safeSetStyleDisplay("modalDoters-profileModal", "none");
}

function redirectToLogin() {
    window.location.href = "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineInicioSesi%C3%B3n";
}

function redirectToRegister() {
    window.location.href = "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&register=1&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineRegistro";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift() || null;
    return null;
}

function logoutDoters() {
    console.log("Intentando cerrar sesión...");
    const domains = [".etn.com.mx", ".costaline.com.mx", window.location.hostname];
    domains.forEach(domain => {
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
    });
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload(); // Recargar para limpiar el estado es correcto aquí
}


// ========================================================================
// BLOQUE DE LÓGICA PRINCIPAL (COMPLETAMENTE CORREGIDO)
// ========================================================================

/**
 * Esta función se ejecutará DESPUÉS de que el custom element 'app-header'
 * haya sido completamente definido y renderizado en la página.
 */
customElements.whenDefined('app-header').then(() => {

    const token = getCookie("token");

    // Seleccionamos los botones REALES que existen en tu header
    const dotersBtnDesktop = document.getElementById("openDotersModal");
    const dotersBtnMobile = document.getElementById("openDotersModalMovil");

    if (!dotersBtnDesktop || !dotersBtnMobile) {
        console.error("Error Crítico: Botones de Doters no encontrados en el header.");
        return;
    }

    if (!token) {
        // SIN SESIÓN: No hacemos nada, los botones ya muestran el logo por defecto
        // y la lógica para abrir el modal ya está en _initDotersModals de app-header.js.
        console.log("Doters: No se encontró token, mostrando estado de logout.");
        return;
    }

    // CON SESIÓN: Si hay un token, procedemos a buscar el perfil.
    console.log("Doters: Token encontrado, buscando perfil de usuario...");

    fetch("https://one-api.etn.com.mx/api/v2/doters/profile", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
    })
    .then(response => {
        if (!response.ok) {
            // Si el token es inválido (ej. 401 Unauthorized), lanzamos un error para ir al .catch
            throw new Error(`Respuesta de red inválida: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data && data.first_name) {
            // ¡ÉXITO! Tenemos los datos del usuario.
            console.log("Doters: Perfil de usuario cargado:", data.first_name);

            // 1. Construir el HTML del saludo
            const welcomeHTML = `
                <div style="display: flex; align-items: center; text-decoration: none; color: inherit; white-space: nowrap;">
                    <i class="icon-user-info doters-basic doters-bigger" style="margin-right: 8px;"></i> 
                    Bienvenido, <strong style="margin-left: 4px;">${data.first_name}</strong>
                </div>`;
            
            // 2. Reemplazar el contenido de AMBOS botones con el saludo
            dotersBtnDesktop.innerHTML = welcomeHTML;
            dotersBtnMobile.innerHTML = welcomeHTML;

            // 3. Cambiar la acción de los botones para que ahora abran el MODAL DE PERFIL
            dotersBtnDesktop.onclick = (e) => { e.preventDefault(); openProfileModal(); };
            dotersBtnMobile.onclick = (e) => { e.preventDefault(); openProfileModal(); };

            // 4. Rellenar los datos del modal de perfil (usando tus funciones helper)
            safeSetTextContent("modalDoters-username", data.first_name);
            safeSetTextContent("modalDoters-dotersId", data.doters_id);
            safeSetTextContent("modalDoters-availablePoints", data.available_points);
            
            const logoutButton = document.getElementById("modalDoters-logoutButton");
            if (logoutButton) {
                logoutButton.style.display = "block";
                logoutButton.onclick = logoutDoters;
            }

        } else {
            // La respuesta de la API fue exitosa pero no trajo los datos esperados.
            throw new Error("Los datos del perfil del usuario están incompletos.");
        }
    })
    .catch(error => {
        // ERROR: El fetch falló (token inválido, red, etc.)
        console.error("Doters: Falla al obtener perfil. Limpiando token corrupto.", error);
        
        // Limpiamos la cookie que causó el error para no volver a intentarlo.
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        
        // NO RECARGAMOS LA PÁGINA para evitar el bucle.
        // Simplemente dejamos el logo como está. El usuario puede volver a intentar el login si quiere.
    });
});
