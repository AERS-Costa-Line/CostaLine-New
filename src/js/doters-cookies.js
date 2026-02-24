/**
 * Este script ahora espera a que el componente 'app-header' esté listo
 * antes de ejecutarse. Esto soluciona el problema de que el script
 * no encuentre los botones del header a tiempo.
 */
customElements.whenDefined('app-header').then(() => {

    // Helper function to get an element safely.
    const getEl = (id) => document.getElementById(id);

    // --- Funciones de tu script original, mantenidas para consistencia ---

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
        console.log("Intentando cerrar sesión...");
        const domains = [".etn.com.mx", ".costaline.com.mx", window.location.hostname];
        domains.forEach(domain => {
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
        });
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.href = "https://auth.doters.com/v2/logout?post_logout_redirect_uri=https://viaje.etn.com.mx/sso/logout&client_id=etn-web";
    }

    // --- Lógica Principal Corregida ---

    /**
     * Esta es la nueva función clave. Obtiene los datos del perfil y
     * modifica DIRECTAMENTE los botones correctos del header.
     */
    function fetchAndRenderUserProfile() {
        // IDs reales de los botones en tu app-header.js
        const dotersButtonDesktop = getEl("openDotersModal");
        const dotersButtonMobile = getEl("openDotersModalMovil");

        if (!dotersButtonDesktop || !dotersButtonMobile) {
            console.error("No se encontraron los botones de Doters en el header.");
            return;
        }

        const token = getCookie("token");
        if (!token) {
            // Estado SIN sesión: Asegurarse de que ambos botones muestren el logo.
            dotersButtonDesktop.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
            dotersButtonMobile.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
            return;
        }

        // Estado CON sesión: Buscar perfil y actualizar los botones.
        fetch("https://one-api.etn.com.mx/api/v2/doters/profile", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
            if (!response.ok) {
                // Si el token es inválido, borra la cookie y refresca la página para mostrar el estado de logout.
                document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                window.location.reload();
                throw new Error('Token inválido');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.first_name) {
                // Construir el HTML del saludo
                const welcomeHTML = `
                    <div style="display: flex; align-items: center; text-decoration: none; color: inherit; white-space: nowrap;">
                        <i class="icon-user-info doters-basic doters-bigger" style="margin-right: 8px;"></i> 
                        Bienvenido, <strong style="margin-left: 4px;">${data.first_name}</strong>
                    </div>`;

                // Reemplazar el contenido de AMBOS botones con el saludo
                dotersButtonDesktop.innerHTML = welcomeHTML;
                dotersButtonMobile.innerHTML = welcomeHTML;

                // Añadir evento de clic a los botones para abrir el modal de perfil
                dotersButtonDesktop.onclick = (e) => { e.preventDefault(); openProfileModal(); };
                dotersButtonMobile.onclick = (e) => { e.preventDefault(); openProfileModal(); };
                
                // Rellenar los datos del modal de perfil
                const usernameSpan = getEl("modalDoters-username");
                const dotersIdSpan = getEl("modalDoters-dotersId");
                const pointsSpan = getEl("modalDoters-availablePoints");
                const logoutButton = getEl("modalDoters-logoutButton");

                if (usernameSpan) usernameSpan.innerText = data.first_name;
                if (dotersIdSpan) dotersIdSpan.innerText = data.doters_id;
                if (pointsSpan) pointsSpan.innerText = data.available_points;
                if (logoutButton) {
                    logoutButton.style.display = "inline-block";
                    logoutButton.onclick = logoutDoters;
                }
            } else {
                throw new Error("Datos de perfil inválidos");
            }
        })
        .catch(error => {
            console.error("Error al obtener el perfil de Doters:", error);
            // Si algo falla, se asegura de mostrar el estado de logout.
            dotersButtonDesktop.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
            dotersButtonMobile.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
        });
    }

    // --- Punto de Entrada ---
    // Esta es la única línea que se ejecuta al inicio.
    fetchAndRenderUserProfile();

});
