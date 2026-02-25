document.addEventListener("DOMContentLoaded", function () {
    // --- 1. SELECCIÓN DE ELEMENTOS Y CONFIGURACIÓN ---
    const loginModal = document.getElementById("modalTravelPass");
    const profileModal = document.getElementById("modalTravelPassLogueado");
    const loginForm = document.getElementById("login-form");

    // Si los modales principales no existen, detenemos la ejecución para evitar errores.
    if (!loginModal || !profileModal || !loginForm) {
        console.error("No se encontraron los elementos esenciales del modal. El script no se ejecutará.");
        return;
    }

    const openLoginModalTriggers = document.querySelectorAll(".js-open-travelpass-login-modal");
    const loginIconDesktop = document.getElementById("login-icon");
    const message = document.getElementById("message");
    const userNameElement = document.getElementById("user-name");
    const userBalanceElement = document.getElementById("user-balance");
    const logoutLink = document.getElementById("logout-link");
    const brandInput = document.getElementById("brand");
    const miCuentaBtn = document.getElementById("miCuentaBtn");

    const loginUrl = "https://one-api.costaline.com.mx/api/v2/ewallet/login";
    const profileUrl = "https://one-api.costaline.com.mx/api/v2/ewallet/profile";

    // --- 2. FUNCIONES DE MANEJO DE COOKIES ---
    // (Estas funciones estaban bien, no requerían cambios mayores)
    function setCookie(name, value, days = 7) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
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

    // --- 3. FUNCIONES PARA MANEJAR EL ESTADO DE LA UI ---
    // (Hemos centralizado la lógica de la UI en estas funciones)

    /**
     * Configura la UI para el estado "sesión no iniciada".
     * Muestra el ícono de login y asigna el evento para abrir el modal de inicio de sesión.
     */
    function renderLoggedOutState() {
        if (loginIconDesktop) {
            loginIconDesktop.innerHTML = `<a href="#" class="open-login-modal-link"><img src="../../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Iniciar sesión en Monedero Electrónico" title="Ingresa a Monedero Electrónico" width="100" height="32" style="cursor: pointer;"></a>`;
        }
        openLoginModalTriggers.forEach(trigger => {
            trigger.removeEventListener("click", openProfileModal);
            trigger.addEventListener("click", openLoginModal);
        });
    }

    /**
     * Configura la UI para el estado "sesión iniciada".
     * Muestra el saludo al usuario, rellena sus datos y asigna el evento para abrir el modal de perfil.
     */
    function renderLoggedInState(profileData) {
        if (loginIconDesktop) {
            loginIconDesktop.innerHTML = `<a href="#" class="nombre-monedero"><img src="../../../src/assets/img/logos/logo-monedero-electronico.webp" class="icono-travel" alt="Monedero Electrónico" title="Perfil Monedero Electrónico"> Hola, ${profileData.name}</a>`;
        }
        userNameElement.textContent = `Nombre: ${profileData.name}`;
        userBalanceElement.textContent = `Saldo: ${profileData.balance !== undefined ? profileData.balance : "N/A"} MXN`;

        openLoginModalTriggers.forEach(trigger => {
            trigger.removeEventListener("click", openLoginModal);
            trigger.addEventListener("click", openProfileModal);
        });
    }
    
    // --- 4. MANEJADORES DE EVENTOS PARA MODALES ---
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
    
    /**
     * Revisa si existe un token, lo valida contra la API
     * y llama a la función correspondiente para renderizar la UI.
     */
    function checkSession() {
        const token = getToken();
        if (!token) {
            renderLoggedOutState();
            return;
        }

        fetch(profileUrl, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
            if (!response.ok) throw new Error('Token inválido o error de red');
            return response.json();
        })
        .then(data => {
            if (data && data.name) {
                renderLoggedInState(data);
            } else {
                removeToken();
                renderLoggedOutState();
            }
        })
        .catch(() => {
            removeToken();
            renderLoggedOutState();
        });
    }

    // --- 6. ASIGNACIÓN DE EVENTOS INICIALES ---

    // Evento para el formulario de login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const brand = brandInput.value;

        fetch(loginUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, brand }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                setToken(data.token);
                localStorage.setItem("userBrand", brand);
                closeModals();
                checkSession(); // Re-validamos la sesión para actualizar toda la UI.
            } else {
                message.textContent = data.message || "Inicio de sesión fallido. Verifica tus credenciales.";
                message.style.color = "red";
            }
        })
        .catch(() => {
            message.textContent = "Ocurrió un error al iniciar sesión.";
            message.style.color = "red";
        });
    });

    // Evento para el botón de logout
    logoutLink.addEventListener("click", function (event) {
        event.preventDefault();
        removeToken();
        localStorage.removeItem("userBrand"); // Limpiamos también el localStorage
        closeModals();
        renderLoggedOutState(); // ¡LA SOLUCIÓN! Restaura el estado de "sesión no iniciada"
    });

    // Otros eventos (cerrar modales, "Mi Cuenta")
    if (miCuentaBtn) {
        miCuentaBtn.addEventListener("click", (event) => {
            event.preventDefault();
            window.open("https://travelpass.costaline.com.mx/dashboard", "_blank");
        });
    }

    document.getElementById("close-login-modal")?.addEventListener("click", closeModals);
    document.getElementById("close-profile-modal")?.addEventListener("click", closeModals);

    // --- 7. INICIO ---
    // Comprobar la sesión al cargar la página
    checkSession();
});
