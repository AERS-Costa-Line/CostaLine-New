/**
 * Este script se asegura de ejecutarse solo después de que el componente 'app-header'
 * esté completamente listo en la página, evitando errores de "elemento no encontrado".
 */
customElements.whenDefined('app-header').then(() => {

    // Helper para no repetir document.getElementById
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
        console.log("Cerrando sesión de Doters...");
        const domains = [".etn.com.mx", ".costaline.com.mx", window.location.hostname];
        domains.forEach(domain => {
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
        });
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        
        // Simplemente recargamos la página. Como la cookie ya no existe,
        // la UI se renderizará en su estado de "logout".
        window.location.reload(); 
    }

    // --- Lógica Principal Corregida y Centralizada ---

    /**
     * Esta es la nueva función clave. Obtiene los datos del perfil y
     * modifica DIRECTAMENTE los botones correctos del header.
     */
    function checkSessionAndRenderUI() {
        // IDs REALES de los botones en tu app-header.js
        const dotersButtonDesktop = getEl("openDotersModal");
        const dotersButtonMobile = getEl("openDotersModalMovil");

        if (!dotersButtonDesktop || !dotersButtonMobile) {
            console.error("Error Crítico: No se encontraron los botones de Doters en el header.");
            return;
        }

        const token = getCookie("token");

        if (!token) {
            // --- ESTADO SIN SESIÓN ---
            // Asegurarse de que ambos botones muestren el logo y abran el modal de login.
            dotersButtonDesktop.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
            dotersButtonMobile.innerHTML = `<img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">`;
            
            // Re-asignamos el evento por si fue modificado
            const dotersModalElement = document.querySelector("app-modal-doters");
            if(dotersModalElement) {
                const openAction = () => dotersModalElement.open();
                dotersButtonDesktop.onclick = openAction;
                dotersButtonMobile.onclick = openAction;
            }
            return;
        }

        // --- ESTADO CON SESIÓN ---
        // Hay un token, así que buscamos el perfil y actualizamos la UI.
        fetch("https://one-api.etn.com.mx/api/v2/doters/profile", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
            if (!response.ok) {
                // Si el token es inválido, lo borramos y refrescamos.
                throw new Error('Token inválido');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.first_name) {
                // Si tenemos datos, construimos y mostramos el saludo.
                const welcomeHTML = `
                    <div style="display: flex; align-items: center; text-decoration: none; color: inherit; white-space: nowrap;">
                        <i class="icon-user-info doters-basic doters-bigger" style="margin-right: 8px;"></i> 
                        Bienvenido, <strong style="margin-left: 4px;">${data.first_name}</strong>
                    </div>`;

                // Reemplazamos el contenido de AMBOS botones con el saludo.
                dotersButtonDesktop.innerHTML = welcomeHTML;
                dotersButtonMobile.innerHTML = welcomeHTML;

                // Cambiamos el evento de los botones para que abran el MODAL DE PERFIL.
                dotersButtonDesktop.onclick = (e) => { e.preventDefault(); openProfileModal(); };
                dotersButtonMobile.onclick = (e) => { e.preventDefault(); openProfileModal(); };
                
                // Rellenamos los datos del modal de perfil.
                const usernameSpan = getEl("modalDoters-username");
                const dotersIdSpan = getEl("modalDoters-dotersId");
                const pointsSpan = getEl("modalDoters-availablePoints");
                const logoutButton = getEl("modalDoters-logoutButton");
                const closeProfileButton = document.querySelector('#modalDoters-profileModal button[onclick="closeProfileModal()"]');

                if (usernameSpan) usernameSpan.innerText = data.first_name;
                if (dotersIdSpan) dotersIdSpan.innerText = data.doters_id;
                if (pointsSpan) pointsSpan.innerText = data.available_points;
                if (logoutButton) {
                    logoutButton.style.display = "inline-block";
                    logoutButton.onclick = logoutDoters;
                }
                 if (closeProfileButton) { // Aseguramos que el botón de cerrar del perfil también funcione.
                    closeProfileButton.onclick = (e) => { e.preventDefault(); openProfileModal(false); };
                }

            } else {
                throw new Error("Datos de perfil inválidos desde la API");
            }
        })
        .catch(error => {
            console.error("Fallo al procesar sesión de Doters:", error);
            // Si algo falla, borramos la cookie corrupta y recargamos la página
            // para que se muestre limpiamente el estado de "sin sesión".
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            window.location.reload();
        });
    }

    // --- Punto de Entrada del Script ---
    // Esta es la única línea que se ejecuta al inicio para arrancar todo el proceso.
    checkSessionAndRenderUI();
});
