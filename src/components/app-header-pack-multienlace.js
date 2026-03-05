class AppHeaderPackMultienlace extends HTMLElement {
	connectedCallback() {
		const logoData = JSON.parse(this.getAttribute("logo"));
		const { src, alt, href } = logoData;

		this.innerHTML = `
        <header aria-label="Encabezado Costa Line" >
            <a href="${href}" class="main-header__container-logo" aria-label="Costa Line" tabindex="0">
            <img src="${src}"
              alt="${alt}" 
              class="header__logo" width="922" height="143" loading="lazy"/>
          </a>
            
            <nav aria-label="Menu de navegacion" >
                
                    <ul>
                        <li><a href="../../../../" aria-label="Ir a inicio" tabindex="0">Costa Line</a></li>
                        <li><a href="../../servicios/pack-multienlace/terminales-paqueteria.html" aria-label="Imprimir pase de abordar" tabindex="0">Terminales</a></li> 
                        <li class="submenu">
                          <a href="#" role="button" aria-label="Facturar su viaje" tabindex="0" aria-haspopup="true" aria-expanded="false">Detalles del servicio <span class="icon-arrow-down"></span></a>
                          <ul>
                                <li><a href="../../servicios/pack-multienlace/servicios-corporativos-paqueteria.html" tabindex="0">Servicios Corporativos</a></li>
                                <li><a href="../../servicios/pack-multienlace/restricciones-paqueteria.html" tabindex="0">Restricciones de envíos</a></li>
                                <li><a href="../../servicios/pack-multienlace/proceso-de-envio.html" tabindex="0">Proceso de envío</a></li>
                                <li><a href="../../servicios/pack-multienlace/como-funciona-paqueteria.html" tabindex="0">¿Cómo funciona?</a></li>
                                <li><a href="../../servicios/pack-multienlace/pack-multienlace.html" tabindex="0">Pack Multienlace</a></li>
                            </ul>
                        </li>
                        <li><a href="../../servicios/pack-multienlace/cotizador-paqueteria.html" aria-label="Modificar itinerario" tabindex="0">Cotizador</a></li>
                        <li><a href="../../servicios/facturacion.html" aria-label="Modificar itinerario" tabindex="0">Facturación</a></li>

                        </ul>
            </nav>  
            <button class="container-menu-hamburguer" aria-label="Menu" id="hamburger-icon" aria-label="Abrir menu desplegable">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 72 72">
                    <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
                </svg>
            </button>
  
            <!-- Menú desplegable -->
            
            <div id="dropdown-menu" class="show">
                <ul>
                    <li><a href="../../../../" aria-label="Ir a inicio">COSTA LINE</a></li>
                    <li class="submenu__media-queries">
                        <a href="#" aria-label="Facturar su viaje" aria-haspopup="true" aria-expanded="false">DETAILS DEL SERVICIO <span class="icon-arrow-down"></span></a>
                        <ul>
                            <li><a href="../../servicios/pack-multienlace/servicios-corporativos-paqueteria.html" tabindex="0">Servicios Corporativos</a></li>
                            <li><a href="../../servicios/pack-multienlace/restricciones-paqueteria.html" tabindex="0">Restricciones de envíos</a></li>
                            <li><a href="../../servicios/pack-multienlace/proceso-de-envio.html" tabindex="0">Proceso de envío</a></li>
                            <li><a href="../../servicios/pack-multienlace/como-funciona-paqueteria.html" tabindex="0">¿Cómo funciona?</a></li>
                            <li><a href="../../servicios/pack-multienlace/pack-multienlace.html" tabindex="0">Pack Multienlace</a></li>
                        </ul>
                    </li>
                    <li><a href="../../servicios/pack-multienlace/cotizador-paqueteria.html" aria-label="Modificar itinerario" tabindex="0">Cotizador</a></li>
                    <li><a href="../../servicios/pack-multienlace/politicas-de-envio.html" aria-label="Modificar itinerario" tabindex="0">Facturación</a></li>

                </ul>
            </div>
        </header>
      `;

		this.openDesktopSubmenuInstance = null;
		this.desktopSubmenuHideTimeout = null;

		this._initDesktopSubmenus();
		this._initMobileMenu();
		this._initScrollBehavior();
	}

	_initMobileMenu() {
		const hamburgerIcon = this.querySelector("#hamburger-icon");
		const dropdownMenu = this.querySelector("#dropdown-menu");

		// Guardar el SVG original del ícono de hamburguesa
		const originalSvg = hamburgerIcon.innerHTML;
		// Crear el SVG de "X"
		const closeSvg = `
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
			submenuList.style.display = "none";

			trigger.addEventListener("click", (event) => {
				event.preventDefault();
				const isOpen = submenuList.style.display === "block";
				this.querySelectorAll(".submenu__media-queries > ul").forEach((ul) => {
					if (ul !== submenuList && ul.style.display === "block") {
						ul.style.display = "none";
						ul.previousElementSibling.setAttribute("aria-expanded", "false");
					}
				});

				if (isOpen) {
					submenuList.style.display = "none";
					trigger.setAttribute("aria-expanded", "false");
				} else {
					submenuList.style.display = "block";
					trigger.setAttribute("aria-expanded", "true");
				}
				event.stopPropagation();
			});

			trigger.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					trigger.click();
					if (submenuList.style.display === "block") {
						submenuList.querySelector("a")?.focus();
					}
				}
			});

			const mobileSubmenuItems = Array.from(submenuList.querySelectorAll("a"));
			mobileSubmenuItems.forEach((subItem) => {
				subItem.addEventListener("keydown", (e) => {
					if (e.key === "Escape") {
						e.preventDefault();
						submenuList.style.display = "none";
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
customElements.define("app-header-pack-multienlace", AppHeaderPackMultienlace);
