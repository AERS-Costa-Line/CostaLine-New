/**
 * Este script espera a que el componente 'app-header' esté completamente listo y renderizado
 * antes de ejecutarse, para garantizar que los botones del header existan.
 */
customElements.whenDefined('app-header').then(() => {

    // Helper para no repetir document.getElementById
    const getEl = (id) => document.getElementById(id);

    // ========================================================================
    // URLs CORRECTAS
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
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;`;
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.href = API_URLS.logout;
    }

    // ========================================================================
    // LÓGICA PRINCIPAL (Ahora con control total de los clics)
    // ========================================================================

    function checkSessionAndRenderUI() {
        const dotersBtnDesktop = getEl("openDotersModal");
        const dotersBtnMobile = getEl("openDotersModalMovil");
        const loginModalComponent = document.querySelector("app-modal-doters");

        if (!dotersBtnDesktop || !dotersBtnMobile || !loginModalComponent) {
            console.error("Error Crítico: Elementos de Doters no encontrados. El script no puede continuar.");
            return;
        }

        const token = getCookie("token");

        if (!token) {
            // --- ESTADO SIN SESIÓN ---
            console.log("Doters: No hay sesión. Configurando botones para abrir modal de login.");
            
            // 1. Aseguramos que los botones muestren el logo
            dotersBtnDesktop.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
            dotersBtnMobile.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;

            // 2. ***** ASIGNAMOS LA ACCIÓN CORRECTA: Abrir el modal de LOGIN *****
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
                console.log(`Doters: Perfil cargado para ${data.first_name}. Configurando botones para abrir modal de perfil.`);
                const welcomeHTML = `
                    <div style="display: flex; align-items: center; text-decoration: none; color: inherit; white-space: nowrap;">
                        <i class="icon-user-info doters-basic doters-bigger" style="margin-right: 8px;"></i> 
                        Bienvenido, <strong style="margin-left: 4px;">${data.first_name}</strong>
                    </div>`;

                // 1. Reemplazamos el contenido con el saludo
                dotersBtnDesktop.innerHTML = welcomeHTML;
                dotersBtnMobile.innerHTML = welcomeHTML;

                // 2. ***** ASIGNAMOS LA ACCIÓN CORRECTA: Abrir el modal de PERFIL *****
                const openProfileAction = (e) => {
                    e.preventDefault();
                    openProfileModal();
                };
                dotersBtnDesktop.onclick = openProfileAction;
                dotersBtnMobile.onclick = openProfileAction;

                // 3. Rellenamos la información en el modal de perfil
                const usernameSpan = getEl("modalDoters-username");
                const dotersIdSpan = getEl("modalDoters-dotersId");
                const pointsSpan = getEl("modalDoters-availablePoints");
                const logoutButton = getEl("modalDoters-logoutButton");
                const closeProfileButton = document.querySelector('#modalDoters-profileModal button[onclick="closeProfileModal()"]');

                if (usernameSpan) usernameSpan.innerText = data.first_name;
                if (dotersIdSpan) dotersIdSpan.innerText = data.doters_id;
                if (pointsSpan) pointsSpan.innerText = data.available_points;
                if (logoutButton) {
                    logoutButton.style.display = "block";
                    logoutButton.onclick = logoutDoters;
                }
                 if (closeProfileButton) {
                    closeProfileButton.onclick = (e) => { e.preventDefault(); closeProfileModal(); };
                }

            } else {
                throw new Error("Datos del perfil incompletos.");
            }
        })
        .catch(error => {
            console.error("Doters: Falla al procesar sesión. Limpiando cookie.", error);
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            // Para evitar bucles, forzamos un render del estado de logout sin recargar
            dotersBtnDesktop.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
            dotersBtnMobile.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
        });
    }

    // --- PUNTO DE ENTRADA ---
    checkSessionAndRenderUI();
});
