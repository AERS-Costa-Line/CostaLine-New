/*----------------------------- Imports Components ------------------------------*/

import "../components/app-modal-travelpass.js?v=1.0.2";
import "../components/app-modal-doters.js?v=1.0.2";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";
import "../js/doters-cookies.js?v=1.2.8";


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
					<img src="../../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Monedero Electrónico" width="60px" height="21px" loading="lazy">
				</button>
				<button id="openDotersModal" class="btn btn-doters desktop-doters" aria-label="Iniciar sesión Doters">
					<img id="modalDoters-logo" src='../../../src/assets/img/logos/doters.svg' alt="Doters" width="66px" height="21px" loading="lazy">
				</button>

				<!-- Username desktop (se muestra cuando hay token) -->
				<div id="modalDoters-welcomeMessage" class="doters-welcome" style="display:none;"></div>
				<a class="li__languaje desktop-languaje" href="../../../english/" aria-label="Cambiar idioma">
					<img src='../../../src/assets/icons/icons-img/USA_Flag.webp' alt="English" loading="lazy">
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
								<img src='../../../src/assets/icons/icons-img/USA_Flag.webp' alt="English" loading="lazy">
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
								<img src="../../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Monedero Electrónico" width="60px" height="21px" loading="lazy">
							</button>
							<button id="openDotersModalMovil" class="btn-doters" aria-label="Iniciar sesión Doters">
								<img id="modalDoters-logoMovil" src="../../../src/assets/img/logos/doters.svg" alt="Doters" width="66px" height="21px" loading="lazy">
							</button>
							<!-- Username mobile (se muestra cuando hay token) -->
							<div id="modalDoters-welcomeMessageMovil" class="doters-welcome" style="display:none;"></div>
						</li>
					</ul>
				</div>
			</header>
				
			<app-modal-travelpass></app-modal-travelpass>
			<app-modal-doters></app-modal-doters>
		`;

		this.openDesktopSubmenuInstance = null;
		this.desktopSubmenuHideTimeout = null;

		this._initDesktopSubmenus();
		this._initMobileMenu();
		this._initDotersModals();
		this._initScrollBehavior();
	}

	_initMobileMenu() {
		const hamburgerIcon = this.querySelector("#hamburger-icon");
		const dropdownMenu = this.querySelector("#dropdown-menu");

		// Guardar el SVG original del ícono de hamburguesa
		const originalSvg = hamburgerIcon.innerHTML;
		// Crear el SVG de "X"
		const closeSvg = `
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0e385a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
     </svg>
      `;

		dropdownMenu.classList.remove("show");
		hamburgerIcon.addEventListener("click", (event) => {
			dropdownMenu.classList.toggle("show");
			const isMenuOpen = dropdownMenu.classList.contains("show");

			if (isMenuOpen) {
				hamburgerIcon.innerHTML = closeSvg; // Cambiar al ícono de "X"
				this.dispatchEvent(
					new CustomEvent("mobile-menu-opened", {
						bubbles: true,
						composed: true,
					}),
				);
			} else {
				hamburgerIcon.innerHTML = originalSvg; // Volver al ícono de hamburguesa
				this.dispatchEvent(
					new CustomEvent("mobile-menu-closed", {
						bubbles: true,
						composed: true,
					}),
				);
			}
			event.stopPropagation();
		});

		// Mobile submenus
		const mobileSubmenuTriggers = this.querySelectorAll(
			".submenu__media-queries > a",
		);

		mobileSubmenuTriggers.forEach((trigger) => {
			const submenuList = trigger.nextElementSibling;
			if (!submenuList || submenuList.tagName !== "UL") return;

			trigger.setAttribute("aria-expanded", "false");

			trigger.addEventListener("click", (event) => {
				event.preventDefault();
				const isOpen = submenuList.classList.contains("is-open");

				// Cierra otros submenús que estén abiertos
				this.querySelectorAll(".submenu__media-queries > ul").forEach((ul) => {
					if (ul !== submenuList && ul.classList.contains("is-open")) {
						ul.classList.remove("is-open");
						ul.previousElementSibling.setAttribute("aria-expanded", "false");
					}
				});

				// Alterna el estado del submenú actual
				submenuList.classList.toggle("is-open");
				trigger.setAttribute("aria-expanded", String(!isOpen));

				event.stopPropagation();
			});

			trigger.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					trigger.click();
					if (submenuList.classList.contains("is-open")) {
						submenuList.querySelector("a")?.focus();
					}
				}
			});

			const mobileSubmenuItems = Array.from(submenuList.querySelectorAll("a"));
			mobileSubmenuItems.forEach((subItem) => {
				subItem.addEventListener("keydown", (e) => {
					if (e.key === "Escape") {
						e.preventDefault();
						submenuList.classList.remove("is-open");
						trigger.setAttribute("aria-expanded", "false");
						trigger.focus();
					}
				});
			});
		});
	}

	_animateSubmenu(submenuList, show) {
		if (show) {
			submenuList.style.display = "block";
			submenuList.style.overflow = "hidden";
			submenuList.style.maxHeight = "0";
			submenuList.style.opacity = "0";
			submenuList.style.transition =
				"max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s";
			setTimeout(() => {
				submenuList.style.maxHeight = submenuList.scrollHeight + "px";
				submenuList.style.opacity = "1";
			}, 10);
		} else {
			submenuList.style.overflow = "hidden";
			submenuList.style.maxHeight = submenuList.scrollHeight + "px";
			submenuList.style.opacity = "1";
			submenuList.style.transition =
				"max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s";
			setTimeout(() => {
				submenuList.style.maxHeight = "0";
				submenuList.style.opacity = "0";
			}, 10);
			setTimeout(() => {
				submenuList.style.display = "none";
			}, 410);
		}
	}

	_isDesktopSubmenuOpen(submenuList) {
		return (
			submenuList.style.display === "block" &&
			submenuList.style.maxHeight !== "0px" &&
			parseFloat(submenuList.style.opacity) === 1
		);
	}

	_openDesktopSubmenu(submenuList, triggerLink) {
		if (this._isDesktopSubmenuOpen(submenuList)) return;
		this._animateSubmenu(submenuList, true);
		triggerLink.setAttribute("aria-expanded", "true");
	}

	_closeDesktopSubmenu(submenuList, triggerLink) {
		if (!this._isDesktopSubmenuOpen(submenuList)) return;
		this._animateSubmenu(submenuList, false);
		if (triggerLink) triggerLink.setAttribute("aria-expanded", "false");
	}

	_toggleDesktopSubmenu(submenuList, triggerLink) {
		if (this._isDesktopSubmenuOpen(submenuList)) {
			this._closeDesktopSubmenu(submenuList, triggerLink);
			if (this.openDesktopSubmenuInstance === submenuList) {
				this.openDesktopSubmenuInstance = null;
			}
		} else {
			if (
				this.openDesktopSubmenuInstance &&
				this.openDesktopSubmenuInstance !== submenuList
			) {
				const prevTrigger =
					this.openDesktopSubmenuInstance.previousElementSibling;
				this._closeDesktopSubmenu(
					this.openDesktopSubmenuInstance,
					prevTrigger && prevTrigger.matches("a") ? prevTrigger : null,
				);
			}
			this._openDesktopSubmenu(submenuList, triggerLink);
			this.openDesktopSubmenuInstance = submenuList;
		}
	}

	_initDesktopSubmenus() {
		const submenuContainers = this.querySelectorAll(".submenu");

		submenuContainers.forEach((container) => {
			const link = container.querySelector("a");
			const list = container.querySelector("ul");

			if (!link || !list) return;

			link.setAttribute("aria-expanded", "false");
			list.style.display = "none";
			list.style.overflow = "hidden";
			list.style.maxHeight = "0";
			list.style.opacity = "0";

			link.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					this._toggleDesktopSubmenu(list, link);
					if (this._isDesktopSubmenuOpen(list)) {
						list.querySelector("a")?.focus();
					}
				} else if (event.key === "ArrowDown") {
					event.preventDefault();
					if (!this._isDesktopSubmenuOpen(list)) {
						this._toggleDesktopSubmenu(list, link); // Opens it
					}
					list.querySelector("a")?.focus();
				} else if (event.key === "Escape") {
					if (this._isDesktopSubmenuOpen(list)) {
						event.preventDefault();
						this._closeDesktopSubmenu(list, link);
						link.focus();
						this.openDesktopSubmenuInstance = null;
					}
				}
			});

			container.addEventListener("mouseenter", () => {
				if (this.desktopSubmenuHideTimeout)
					clearTimeout(this.desktopSubmenuHideTimeout);
				if (
					this.openDesktopSubmenuInstance &&
					this.openDesktopSubmenuInstance !== list
				) {
					const prevTrigger =
						this.openDesktopSubmenuInstance.previousElementSibling;
					this._closeDesktopSubmenu(
						this.openDesktopSubmenuInstance,
						prevTrigger && prevTrigger.matches("a") ? prevTrigger : null,
					);
				}
				this._openDesktopSubmenu(list, link);
				this.openDesktopSubmenuInstance = list;
			});

			container.addEventListener("mouseleave", () => {
				this.desktopSubmenuHideTimeout = setTimeout(() => {
					this._closeDesktopSubmenu(list, link);
					if (this.openDesktopSubmenuInstance === list) {
						this.openDesktopSubmenuInstance = null;
					}
				}, 300);
			});

			link.addEventListener("click", (event) => {
				event.preventDefault();
				this._toggleDesktopSubmenu(list, link);
				event.stopPropagation();
			});

			const submenuItems = Array.from(list.querySelectorAll("a"));
			submenuItems.forEach((subItem, index) => {
				subItem.addEventListener("keydown", (e) => {
					if (e.key === "Escape") {
						e.preventDefault();
						this._closeDesktopSubmenu(list, link);
						link.focus();
						this.openDesktopSubmenuInstance = null;
					} else if (
						e.key === "Tab" &&
						!e.shiftKey &&
						index === submenuItems.length - 1
					) {
						this._closeDesktopSubmenu(list, link);
						this.openDesktopSubmenuInstance = null;
					} else if (e.key === "Tab" && e.shiftKey && index === 0) {
						this._closeDesktopSubmenu(list, link);
						this.openDesktopSubmenuInstance = null;
					}
				});
			});
		});

		document.addEventListener("click", (event) => {
			if (
				this.openDesktopSubmenuInstance &&
				!this.openDesktopSubmenuInstance.parentElement.contains(event.target)
			) {
				const trigger = this.openDesktopSubmenuInstance.previousElementSibling;
				this._closeDesktopSubmenu(
					this.openDesktopSubmenuInstance,
					trigger && trigger.matches("a") ? trigger : null,
				);
				this.openDesktopSubmenuInstance = null;
			}
		});
	}

	// Ejemplo conceptual de cómo se usaría en app-header.js
	_initDotersModals() {
		const openModalButtonDesktop = this.querySelector("#openDotersModal");
		const openModalButtonMovil = this.querySelector("#openDotersModalMovil");

		const ensureLogin = () => {
			let el = document.querySelector("app-modal-doters");
			if (!el) {
				el = document.createElement("app-modal-doters");
				document.body.appendChild(el);
			}
			return el;
		};

		const openAction = () => {
			const hasToken =
				typeof window.getCookie === "function" && !!window.getCookie("token");

			if (hasToken) {
				// CLAVE: usa el open robusto
				if (typeof window.openProfileModal === "function") {
					window.openProfileModal();
				}
				return;
			}

			const login = ensureLogin();
			login?.open?.();
		};

		openModalButtonDesktop?.addEventListener("click", openAction);
		openModalButtonMovil?.addEventListener("click", openAction);

		// refresca UI si hay token
		if (
			typeof window.fetchUserProfile === "function" &&
			typeof window.getCookie === "function"
		) {
			if (window.getCookie("token")) window.fetchUserProfile();
		}
	}

	_initScrollBehavior() {
		window.addEventListener("scroll", function (event) {
			// Detectar si se está en el tope superior o inferior
			if (window.scrollY < 0) {
				// Evitar el rebote (ejemplo: deteniendo el scroll)
				window.scrollTo(0, 0);
			}
		});

		// Evento para manejar el scroll
		const header = this.querySelector("header");
		let lastScrollY = window.scrollY;

		// Evento para manejar el scroll
		window.addEventListener("scroll", () => {
			if (window.innerWidth >= 990) {
				const currentScrollY = window.scrollY;

				if (currentScrollY > lastScrollY) {
					// Scroll hacia abajo: ocultar el header
					header.classList.add("hidden");
				} else {
					// Scroll hacia arriba: mostrar el header
					header.classList.remove("hidden");
				}

				lastScrollY = currentScrollY;
			}
		});
	}
}
customElements.define("app-header", AppHeader);
