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
                <li><a href="../../../boletos-autobus/">Boletos</a></li>
                <li><a href="../../../descuentos/">Descuentos</a></li>
                <li><a href="../../../boletos-autobus/donde-comprar-costa.html">¿Dónde comprar?</a></li>
                <li><a href="../../../terminales-taquillas/">Terminales y Taquillas</a></li>
                <li><a href="../../../servicios/salas-de-espera.html">Salas de Espera</a></li>
                <li><a href="../../../servicios/servicio-a-bordo.html">Servicios a bordo</a></li>
                <li><a href="../../../promociones/">Promociones</a></li>
                <li><a href="https://ventas.costaline.com.mx/request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AAG,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES&_ga=2.70363408.1421465980.1688335622-27413750.1682467979&_gl=1*5d35ok*_gcl_au*MTE5NTUxODc1MS4xNzY5MDMwOTg3">Agencias</a></li>
                <li><a href="../../../servicios/pago-referenciado-oxxo.html">OXXO Pay</a></li>
                <li><a href="../../../servicios/compra-con-kueski-pay.html">Keski Pay</a></li>
                <li><a href="../../../servicios/viajero-protegido.html">Viajero protegido</a></li>
                <li><a href="https://costaline.com.mx/blog/">Blog</a></li>
                <li><a href="../../../servicios/atencion-a-clientes.html">Atención a clientes</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <button id="login-icon" class="btn-travelpass desktop-travelpass js-open-travelpass-login-modal" aria-label="Iniciar sesión TravelPass">
          <img src="../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Monedero Electrónico" loading="lazy">
        </button>

        <!-- DOTERS DESKTOP -->
        <button id="openDotersModal" class="btn btn-doters desktop-doters" aria-label="Iniciar sesión Doters">
          <img id="modalDoters-logo" src='../../src/assets/img/logos/doters.svg' alt="Doters" loading="lazy">
        </button>

        <!-- CONTENEDOR PARA USERNAME (DESKTOP) -->
        <div id="modalDoters-welcomeMessage" class="doters-welcome" style="display:none;"></div>

        <a class="li__languaje desktop-languaje" href="../../../english/" aria-label="Cambiar idioma">
          <img src='../../src/assets/img/icons-img/USA_Flag.webp' alt="English" loading="lazy">
        </a>

        <button class="container-menu-hamburguer" id="hamburger-icon" aria-label="Abrir menú">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 72 72">
            <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
          </svg>
        </button>

        <div id="dropdown-menu">
          <ul>
            <li class="lili__languaje">
              <a class="a__languaje" href="../../../../english/" aria-label="Cambiar idioma">
                <img src='../../src/assets/img/icons-img/USA_Flag.webp' alt="English" loading="lazy">
              </a>
            </li>
            <li><a href="../../../">Inicio</a></li>
            <li><a href="../../../servicios/pack-multienlace">Pack Multienlace</a></li>

            <li class="submenu__media-queries">
              <a href="#" aria-haspopup="true" aria-expanded="false">Mi viaje <span class="icon-arrow-down"></span></a>
              <ul>
                <li><a href="../../../servicios/facturacion.html">Facturación</a></li>
                <li><a href="https://viaje.costaline.com.mx/download-tickets">Pase de abordar</a></li>
                <li><a href="https://viaje.costaline.com.mx/exchange/itinerary">Modificar itinerario</a></li>
              </ul>
            </li>

            <li><a href="../../../servicios/mas-komodo.html">Más Komodo</a></li>
            <li><a href="../../../servicios/monedero-electronico.html">Monedero</a></li>
            <li><a href="../../../destinos/">Destinos</a></li>

            <li class="submenu__media-queries">
              <a href="#" aria-haspopup="true" aria-expanded="false">Más <span class="icon-arrow-down"></span></a>
              <ul>
                <li><a href="../../../Doters/">Doters</a></li>
                <li><a href="../../../boletos-autobus/">Boletos</a></li>
                <li><a href="../../../descuentos/">Descuentos</a></li>
                <li><a href="../../../boletos-autobus/donde-comprar-costa.html">¿Dónde comprar?</a></li>
                <li><a href="../../../terminales-taquillas/">Terminales y Taquillas</a></li>
                <li><a href="../../../servicios/salas-de-espera.html">Salas de Espera</a></li>
                <li><a href="../../../servicios/servicio-a-bordo.html">Servicios a bordo</a></li>
                <li><a href="../../../promociones/">Promociones</a></li>
                <li><a href="https://ventas.costaline.com.mx/request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AAG,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES&_ga=2.70363408.1421465980.1688335622-27413750.1682467979&_gl=1*5d35ok*_gcl_au*MTE5NTUxODc1MS4xNzY5MDMwOTg3">Agencias</a></li>
                <li><a href="../../../servicios/pago-referenciado-oxxo.html">OXXO Pay</a></li>
                <li><a href="../../../servicios/compra-con-kueski-pay.html">Kueski Pay</a></li>
                <li><a href="../../../servicios/viajero-protegido.html">Viajero protegido</a></li>
                <li><a href="https://costaline.com.mx/blog/">Blog</a></li>
                <li><a href="../../../servicios/atencion-a-clientes.html">Atención a clientes</a></li>
              </ul>
            </li>

            <li class="li__login">
              <button id="login-icon" class="btn-travelpass btn-travelpass__submenu js-open-travelpass-login-modal" aria-label="Iniciar sesión TravelPass">
                <img src="../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Monedero Electrónico" loading="lazy">
              </button>

              <!-- DOTERS MOBILE -->
              <button id="openDotersModalMovil" class="btn-doters" aria-label="Iniciar sesión Doters">
                <img id="modalDoters-logoMovil" src="../../src/assets/img/logos/doters.svg" alt="Doters" loading="lazy">
              </button>

              <!-- CONTENEDOR PARA USERNAME (MÓVIL) -->
              <div id="modalDoters-welcomeMessageMovil" class="doters-welcome" style="display:none;"></div>
            </li>
          </ul>
        </div>
      </header>
    `;

    this.openDesktopSubmenuInstance = null;
    this.desktopSubmenuHideTimeout = null;

    this._initDesktopSubmenus();
    this._initMobileMenu();
    this._initDotersModals();
    this._initScrollBehavior();
  }

  // ... TODO tu código igual ...

  _initDotersModals() {
    const openModalButtonDesktop = this.querySelector("#openDotersModal");
    const openModalButtonMovil = this.querySelector("#openDotersModalMovil");

    const loginModal = document.querySelector("app-modal-doters");
    const profileModal = document.querySelector("modal-doters-profile");

    const openAction = () => {
      const hasToken = typeof getCookie === "function" && !!getCookie("token");

      if (hasToken) {
        // abrir perfil
        if (profileModal && typeof profileModal.open === "function") {
          profileModal.open();
        } else {
          // fallback por id
          const el = document.getElementById("modalDoters-profileModal");
          if (el) el.style.display = "block";
        }
      } else {
        // abrir login
        if (loginModal && typeof loginModal.open === "function") {
          loginModal.open();
        } else {
          const el = document.getElementById("modalDoters-loginModal");
          if (el) el.style.display = "flex";
        }
      }
    };

    openModalButtonDesktop?.addEventListener("click", openAction);
    openModalButtonMovil?.addEventListener("click", openAction);

    // Reaplica estado al terminar de renderizar header
    if (typeof fetchUserProfile === "function" && typeof getCookie === "function") {
      if (getCookie("token")) fetchUserProfile();
    }
  }
}

customElements.define("app-header", AppHeader);