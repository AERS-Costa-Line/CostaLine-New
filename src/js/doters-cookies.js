// ========================================================================
// TUS FUNCIONES ORIGINALES (SIN CAMBIOS)
// ========================================================================

function safeSetStyleDisplay(elementId, displayValue) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = displayValue;
    }
}

function safeSetTextContent(elementId, textValue) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = textValue;
    }
}

function closeProfileModal() {
    safeSetStyleDisplay("modalDoters-profileModal", "none");
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift() || null;
    return null;
}

// ========================================================================
// BLOQUE DE LÓGICA PRINCIPAL (CONTROL TOTAL)
// ========================================================================

customElements.whenDefined('app-header').then(() => {

    const API_URLS = {
        profile: "https://one-api.costaline.com.mx/api/v2/doters/profile",
        logout: "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.costaline.com.mx/sso/logout&client_id=costaline-web"
    };

    function logoutDoters() {
        console.log("Cerrando sesión de Doters...");
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;`;
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.href = API_URLS.logout;
    }

    function openProfileModal() {
        safeSetStyleDisplay("modalDoters-profileModal", "flex");
    }

    const dotersBtnDesktop = document.getElementById("openDotersModal");
    const dotersBtnMobile = document.getElementById("openDotersModalMovil");
    const loginModalComponent = document.querySelector("app-modal-doters");

    if (!dotersBtnDesktop || !dotersBtnMobile || !loginModalComponent) {
        console.error("Error Crítico: Elementos de Doters no encontrados.");
        return;
    }

    const token = getCookie("token");

    if (!token) {
        // --- ESTADO SIN SESIÓN ---
        console.log("Doters: No hay sesión. Asignando acción para abrir modal de login.");
        const openLoginAction = (e) => {
            e.preventDefault();
            loginModalComponent.open();
        };
        dotersBtnDesktop.onclick = openLoginAction;
        dotersBtnMobile.onclick = openLoginAction;
        return;
    }

    // --- ESTADO CON SESIÓN ---
    console.log("Doters: Token encontrado. Buscando perfil...");

    fetch(API_URLS.profile, { headers: { "Authorization": `Bearer ${token}` } })
    .then(response => {
        if (!response.ok) throw new Error(`Token inválido (Status: ${response.status})`);
        return response.json();
    })
    .then(data => {
        if (data && data.first_name) {
            console.log(`Doters: Perfil cargado para ${data.first_name}. Asignando acción para abrir modal de perfil.`);
            const welcomeHTML = `<div style="display: flex; align-items: center; text-decoration: none; color: inherit; white-space: nowrap;"><i class="icon-user-info doters-basic doters-bigger" style="margin-right: 8px;"></i> Bienvenido, <strong style="margin-left: 4px;">${data.first_name}</strong></div>`;

            dotersBtnDesktop.innerHTML = welcomeHTML;
            dotersBtnMobile.innerHTML = welcomeHTML;

            const openProfileAction = (e) => {
                e.preventDefault();
                openProfileModal();
            };
            dotersBtnDesktop.onclick = openProfileAction;
            dotersBtnMobile.onclick = openProfileAction;

            safeSetTextContent("modalDoters-username", data.first_name);
            safeSetTextContent("modalDoters-dotersId", data.doters_id);
            safeSetTextContent("modalDoters-availablePoints", data.available_points);

            const logoutButton = document.getElementById("modalDoters-logoutButton");
            if (logoutButton) {
                logoutButton.style.display = "block";
                logoutButton.onclick = logoutDoters;
            }
        } else {
            throw new Error("Datos del perfil incompletos.");
        }
    })
    .catch(error => {
        console.error("Doters: Falla al procesar sesión. Limpiando cookie.", error);
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
});
