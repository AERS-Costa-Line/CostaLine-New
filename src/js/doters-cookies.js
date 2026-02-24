// Esperamos a que TODOS los componentes estén listos en la página.
customElements.whenDefined('app-header').then(() => {

    // --- ELEMENTOS Y CONFIGURACIÓN ---
    const getEl = (id) => document.getElementById(id);
    const API_URLS = {
        profile: "https://one-api.costaline.com.mx/api/v2/doters/profile",
        logout: "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.costaline.com.mx/sso/logout&client_id=costaline-web"
    };
    const dotersBtnDesktop = getEl("openDotersModal");
    const dotersBtnMobile = getEl("openDotersModalMovil");
    const loginModalComponent = document.querySelector("app-modal-doters");
    const profileModal = getEl("modalDoters-profileModal");
    
    if (!dotersBtnDesktop || !dotersBtnMobile || !loginModalComponent || !profileModal) {
        console.error("Error Crítico de Doters: Faltan elementos esenciales. La funcionalidad no se activará.");
        return;
    }

    // --- FUNCIONES DE ACCIÓN ---
    const openLoginModal = (e) => { e.preventDefault(); loginModalComponent.open(); };
    const openProfileModal = (e) => { e.preventDefault(); profileModal.style.display = "flex"; };
    const closeProfileModal = () => { profileModal.style.display = "none"; };
    
    function logoutDoters() {
        console.log("Cerrando sesión de Doters...");
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.costaline.com.mx; path=/;`;
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.href = API_URLS.logout;
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift() || null;
        return null;
    }

    // --- FUNCIONES PARA RENDERIZAR LA UI ---
    
    // Función para el estado SIN SESIÓN
    function renderLogoutState() {
        dotersBtnDesktop.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
        dotersBtnMobile.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
        dotersBtnDesktop.onclick = openLoginModal;
        dotersBtnMobile.onclick = openLoginModal;
        // Hacemos visibles los botones
        dotersBtnDesktop.style.visibility = 'visible';
        dotersBtnMobile.style.visibility = 'visible';
    }

    // Función para el estado CON SESIÓN
    function renderLoginState(userData) {
        const welcomeHTML = `<div style="display: flex; align-items: center; text-decoration: none; color: inherit; white-space: nowrap;"><i class="icon-user-info doters-basic doters-bigger" style="margin-right: 8px;"></i> Bienvenido, <strong style="margin-left: 4px;">${userData.first_name}</strong></div>`;
        dotersBtnDesktop.innerHTML = welcomeHTML;
        dotersBtnMobile.innerHTML = welcomeHTML;
        dotersBtnDesktop.onclick = openProfileModal;
        dotersBtnMobile.onclick = openProfileModal;

        getEl("modalDoters-username").innerText = userData.first_name;
        getEl("modalDoters-dotersId").innerText = userData.doters_id;
        getEl("modalDoters-availablePoints").innerText = userData.available_points;

        const logoutButton = getEl("modalDoters-logoutButton");
        const closeButton = profileModal.querySelector('button[onclick="closeProfileModal()"]');
        if (logoutButton) {
            logoutButton.style.display = "inline-block";
            logoutButton.onclick = logoutDoters;
        }
        if (closeButton) {
            closeButton.onclick = closeProfileModal;
        }
        // Hacemos visibles los botones
        dotersBtnDesktop.style.visibility = 'visible';
        dotersBtnMobile.style.visibility = 'visible';
    }

    // ========================================================================
    // PUNTO DE ENTRADA Y LÓGICA PRINCIPAL
    // ========================================================================
    
    const token = getCookie("token");

    if (!token) {
        // No hay token, renderiza el estado de logout inmediatamente. Sin delay.
        console.log("Doters: No hay sesión.");
        renderLogoutState();
    } else {
        // Hay token, intenta obtener el perfil.
        console.log("Doters: Token encontrado, buscando perfil...");
        fetch(API_URLS.profile, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            if (!response.ok) throw new Error(`Token inválido (Status: ${response.status})`);
            return response.json();
        })
        .then(data => {
            if (data && data.first_name) {
                // Éxito, renderiza el estado de login.
                renderLoginState(data);
            } else {
                throw new Error("Datos del perfil incompletos.");
            }
        })
        .catch(error => {
            // El token era inválido o hubo un error. Limpia la cookie y renderiza el estado de logout.
            console.error("Doters: Fallo al procesar sesión.", error);
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            renderLogoutState();
        });
    }
});
