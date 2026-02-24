/**
 * Este script espera a que el componente 'app-header' esté completamente listo y renderizado
 * antes de ejecutarse, para garantizar que los botones del header existan.
 */
customElements.whenDefined('app-header').then(() => {

    // Helper para no repetir document.getElementById
    const getEl = (id) => document.getElementById(id);

    // ========================================================================
    // URLs CORRECTAS (Extraídas de tu código antiguo)
    // ========================================================================
    const API_URLS = {
        profile: "https://one-api.costaline.com.mx/api/v2/doters/profile",
        logout: "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.costaline.com.mx/sso/logout&client_id=costaline-web"
    };

    // ========================================================================
    // FUNCIONES BÁSICAS
    // ========================================================================

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift() || null;
        return null;
    }

    function openProfileModal() {
        const profileModal = getEl("modalDoters-profileModal");
        if (profileModal) profileModal.style.display = "flex";
    }

    function logoutDoters() {
        console.log("Cerrando sesión de Doters...");
        // Borramos la cookie del dominio principal para asegurar que se elimina.
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;`;
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        // Redirigimos a la URL de logout correcta.
        window.location.href = API_URLS.logout;
    }

    // ========================================================================
    // LÓGICA PRINCIPAL (Ahora sí, bien enfocada)
    // ========================================================================

    function checkSessionAndRenderUI() {
        // IDs REALES de los botones en tu app-header.js
        const dotersBtnDesktop = getEl("openDotersModal");
        const dotersBtnMobile = getEl("openDotersModalMovil");

        if (!dotersBtnDesktop || !dotersBtnMobile) {
            console.error("Error Crítico: No se encontraron los botones de Doters en el header. El script no puede continuar.");
            return;
        }

        const token = getCookie("token");

        if (!token) {
            // --- ESTADO SIN SESIÓN ---
            console.log("Doters: No se encontró token. Mostrando estado de logout.");
            // La lógica para abrir el modal ya está en tu _initDotersModals() del header,
            // así que no necesitamos hacer nada más aquí. El logo ya se muestra por defecto.
            return;
        }

        // --- ESTADO CON SESIÓN ---
        console.log("Doters: Token encontrado. Buscando perfil de usuario...");

        fetch(API_URLS.profile, { // <-- USANDO LA URL CORRECTA
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`El token es inválido o la API falló (Status: ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.first_name) {
                // ¡ÉXITO! Se encontraron los datos del usuario.
                console.log(`Doters: Perfil cargado para ${data.first_name}. Actualizando UI.`);

                const welcomeHTML = `
                    <div style="display: flex; align-items: center; text-decoration: none; color: inherit; white-space: nowrap;">
                        <i class="icon-user-info doters-basic doters-bigger" style="margin-right: 8px;"></i> 
                        Bienvenido, <strong style="margin-left: 4px;">${data.first_name}</strong>
                    </div>`;

                // 1. Reemplazamos el contenido de los botones en el header.
                dotersBtnDesktop.innerHTML = welcomeHTML;
                dotersBtnMobile.innerHTML = welcomeHTML;

                // 2. Cambiamos la acción de los botones para que abran el modal de PERFIL.
                dotersBtnDesktop.onclick = (e) => { e.preventDefault(); openProfileModal(); };
                dotersBtnMobile.onclick = (e) => { e.preventDefault(); openProfileModal(); };

                // 3. Rellenamos la información en el modal de perfil.
                const usernameSpan = getEl("modalDoters-username");
                const dotersIdSpan = getEl("modalDoters-dotersId");
                const pointsSpan = getEl("modalDoters-availablePoints");
                const logoutButton = getEl("modalDoters-logoutButton");

                if (usernameSpan) usernameSpan.innerText = data.first_name;
                if (dotersIdSpan) dotersIdSpan.innerText = data.doters_id;
                if (pointsSpan) pointsSpan.innerText = data.available_points;

                if (logoutButton) {
                    logoutButton.style.display = "block";
                    logoutButton.onclick = logoutDoters;
                }
            } else {
                throw new Error("La API respondió pero los datos del perfil están incompletos.");
            }
        })
        .catch(error => {
            console.error("Doters: Fallo en el proceso de sesión. Limpiando cookie corrupta.", error);
            // Si algo sale mal (token expirado, etc.), borramos la cookie para evitar reintentos.
            // La próxima vez que el usuario visite la página, el estado será de "sin sesión".
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;`;
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    }

    // --- PUNTO DE ENTRADA ---
    checkSessionAndRenderUI();
});
