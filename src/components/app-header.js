class AppHeader extends HTMLElement {
    connectedCallback() {
        const logoData = JSON.parse(this.getAttribute("logo"));
        const { src, alt, href } = logoData;
        this.innerHTML = `
            <header aria-label="Encabezado Costa Line">
                <a href="${href}" class="main-header__container-logo" aria-label="Costa Line">
                    <img src="${src}" alt="${alt}" class="header__logo" width="160" height="32" loading="lazy"/>
                </a>
                <nav aria-label="Menú principal">
                    <!-- ... Tu menú de navegación completo ... -->
                    <ul>
                        <li><a href="../../../">Inicio</a></li>
                        <li><a href="../../../servicios/pack-multienlace/">Pack Multienlace</a></li>
                        <li class="submenu">
                            <a href="#" role="button" aria-haspopup="true" aria-expanded="false">Mi viaje<span class="icon-arrow-down"></span></a>
                            <ul>
                                <li><a href="../../../servicios/facturacion.html">Facturación</a></li>
                                <li><a href="https://viaje.costaline.com.mx/download-tickets">Pase de abordar</a></li>
                                <li><a href="https://viaje.costaline.com.mx/exchange/itinerary">Modificar itinerario</a></li>
                            </ul>
                        </li>
                        <li><a href="../../../servicios/mas-komodo.html">Mas Komodo</a></li>
                        <li><a href="../../../servicios/monedero-electronico.html">Monedero</a></li>
                        <li><a href="../../../destinos/">Destinos</a></li>
                        <li class="submenu">
                             <a href="#" role="button" aria-haspopup="true" aria-expanded="false">Más <span class="icon-arrow-down"></span></a>
                            <ul>
                                <li><a href="../../../doters/">Doters</a></li>
                                <!-- etc... -->
                            </ul>
                        </li>
                    </ul>
                </nav>
                <button id="login-icon" class="btn-travelpass desktop-travelpass js-open-travelpass-login-modal" aria-label="Iniciar sesión TravelPass">
                    <img src="../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Monedero Electrónico" loading="lazy">
                </button>
                <button id="openDotersModal" class="btn btn-doters desktop-doters" aria-label="Iniciar sesión Doters">
                    <img src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">
                </button>
                <a class="li__languaje desktop-languaje" href="../../../english/" aria-label="Cambiar idioma">
                    <img src='../../src/assets/img/icons-img/USA_Flag.webp' alt="English" loading="lazy">
                </a>
                <button class="container-menu-hamburguer" id="hamburger-icon" aria-label="Abrir menú">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 72"><path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path></svg>
                </button>
                <div id="dropdown-menu">
                    <ul>
                        <!-- ... tu menú desplegable ... -->
                        <li class="li__login">
                            <button id="login-icon-mobile" class="btn-travelpass btn-travelpass__submenu js-open-travelpass-login-modal" aria-label="Iniciar sesión TravelPass">
                                <img src="../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Monedero Electrónico" loading="lazy">
                            </button>
                            <button id="openDotersModalMovil" class="btn-doters" aria-label="Iniciar sesión Doters">
                                <img src="../../src/assets/img/logos/doters.svg" alt="Doters" loading="lazy">
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        `;
        this.openDesktopSubmenuInstance = null;
        this.desktopSubmenuHideTimeout = null;
        this._initDesktopSubmenus();
        this._initMobileMenu();
        this._initDotersModals(); // Esta línea se queda, pero el método de abajo estará vacío.
        this._initScrollBehavior();
    }

    // ... Aquí van todos tus otros métodos como _initMobileMenu, _animateSubmenu, etc. ...
    // ... Déjalos exactamente como están ...

    // ***** EL CAMBIO MÁS IMPORTANTE ESTÁ AQUÍ *****
    // Esta función se deja vacía a propósito para que no asigne ningún evento
    // de clic a los botones de Doters. El control total se cede a 'doters-cookie.js'.
    _initDotersModals() {
        // NO HACER NADA AQUÍ.
    }

    // ... Aquí continúan el resto de tus métodos como _initScrollBehavior ...
}

customElements.define("app-header", AppHeader);
