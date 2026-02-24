document.addEventListener("DOMContentLoaded", function () {
    // --- 1. SELECCIÓN DE ELEMENTOS Y CONFIGURACIÓN ---
    const loginModal = document.getElementById("modalTravelPass");
    const profileModal = document.getElementById("modalTravelPassLogueado");
    const loginForm = document.getElementById("login-form");

    if (!loginModal || !profileModal || !loginForm) {
        console.error("Faltan elementos del modal. El script se detendrá.");
        return;
    }

    // El contenedor del ícono que cambia. Es nuestro elemento "estable".
    const loginIconDesktop = document.getElementById("login-icon"); 
    // Los otros botones estáticos en la página que también abren el modal.
    const staticTriggers = document.querySelectorAll(".js-open-travelpass-login-modal");

    // Elementos de la UI
    const message = document.getElementById("message");
    const userNameElement = document.getElementById("user-name");
    const userBalanceElement = document.getElementById("user-balance");
    const logoutLink = document.getElementById("logout-link");
    const brandInput = document.getElementById("brand");
    const miCuentaBtn = document.getElementById("miCuentaBtn");

    const loginUrl = "https://one-api.costaline.com.mx/api/v2/ewallet/login";
    const profileUrl = "https://one-api.costaline.com.mx/api/v2/ewallet/profile";

    // --- 2. FUNCIONES DE COOKIES (Sin cambios) ---
    function setCookie(name, value, days = 7) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; domain=costaline.com.mx; SameSite=None; Secure`;
    }
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=costaline.com.mx; SameSite=None; Secure`;
    }
    const getToken = () => getCookie("costapassToken");
    const setToken = (token) => setCookie("costapassToken", token, 7);
    const removeToken = () => deleteCookie("costapassToken");

    // --- 3. FUNCIONES PARA MANEJAR LA UI ---

    // **NUEVO:** Función para actualizar los botones estáticos
    function updateStaticTriggers(isLoggedIn) {
        const openAction = isLoggedIn ? openProfileModal : openLoginModal;
        const removeAction = isLoggedIn ? openLoginModal : openProfileModal;
        
        staticTriggers.forEach(trigger => {
            // Nos aseguramos de no añadir listeners duplicados
            trigger.removeEventListener('click', removeAction);
            trigger.addEventListener('click', openAction);
        });
    }
    
    // Simplificamos estas funciones. Ahora solo actualizan el HTML.
    function renderLoggedOutState() {
        if (loginIconDesktop) {
            loginIconDesktop.innerHTML = `<a href="#" data-action="open-login"><img src="../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Iniciar sesión" title="Ingresa a Monedero Electrónico" width="100" height="32" style="cursor: pointer;"></a>`;
        }
        updateStaticTriggers(false); // Actualiza los otros botones
    }

    function renderLoggedInState(profileData) {
        if (loginIconDesktop) {
            loginIconDesktop.innerHTML = `<a href="#" data-action="open-profile" class="nombre-monedero"><img src="../../src/assets/img/logos/logo-monedero-electronico.webp" class="icono-travel" alt="Monedero Electrónico" title="Perfil"> Hola, ${profileData.name}</a>`;
        }
        userNameElement.textContent = `Nombre: ${profileData.name}`;
        userBalanceElement.textContent = `Saldo: ${profileData.balance ?? "N/A"} MXN`;
        updateStaticTriggers(true); // Actualiza los otros botones
    }

    // --- 4. MANEJADORES DE MODALES ---
    const closeModals = () => {
        loginModal.style.display = "none";
        profileModal.style.display = "none";
    };

    const openLoginModal = (event) => {
        event.preventDefault();
        closeModals();
        loginModal.style.display = "flex";
    };

    const openProfileModal = (event) => {
        event.preventDefault();
        closeModals();
        profileModal.style.display = "flex";
    };

    // --- 5. LÓGICA PRINCIPAL DE SESIÓN ---
    function checkSession() {
        const token = getToken();
        if (!token) {
            renderLoggedOutState();
            return;
        }

        fetch(profileUrl, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => res.ok ? res.json() : Promise.reject('Token inválido'))
            .then(data => data.name ? renderLoggedInState(data) : Promise.reject('Datos de perfil incompletos'))
            .catch(() => {
                removeToken();
                renderLoggedOutState();
            });
    }
    
    // --- 6. ASIGNACIÓN DE EVENTOS ---
    
    // **LA MAGIA ESTÁ AQUÍ: Delegación de Eventos**
    // Un solo listener en el contenedor que NUNCA cambia.
    if (loginIconDesktop) {
        loginIconDesktop.addEventListener('click', (event) => {
            const link = event.target.closest('a'); // Busca el enlace 'a' más cercano al clic
            if (!link) return; // Si no se hizo clic en un enlace, no hace nada

            event.preventDefault();
            const action = link.dataset.action; // Leemos el 'data-action' que pusimos

            if (action === 'open-login') {
                openLoginModal(event);
            } else if (action === 'open-profile') {
                openProfileModal(event);
            }
        });
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const body = {
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim(),
            brand: brandInput.value
        };

        fetch(loginUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                setToken(data.token);
                localStorage.setItem("userBrand", body.brand);
                closeModals();
                checkSession(); // Revalida para actualizar toda la UI
            } else {
                throw new Error(data.message || "Credenciales incorrectas.");
            }
        })
        .catch(err => {
            message.textContent = err.message;
            message.style.color = "red";
        });
    });

    logoutLink.addEventListener("click", (event) => {
        event.preventDefault();
        removeToken();
        localStorage.removeItem("userBrand");
        closeModals();
        renderLoggedOutState(); // Restaura el estado de "sesión no iniciada"
    });
    
    // Eventos para cerrar los modales y "Mi Cuenta"
    miCuentaBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("https://travelpass.costaline.com.mx/dashboard", "_blank");
    });
    document.getElementById("close-login-modal")?.addEventListener("click", closeModals);
    document.getElementById("close-profile-modal")?.addEventListener("click", closeModals);

    // --- 7. INICIO ---
    checkSession();
});
