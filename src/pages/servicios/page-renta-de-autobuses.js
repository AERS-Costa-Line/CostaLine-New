/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-cards-icons.js";
import "../../components/app-cards-contact-whats.js";
import "../../components/app-section-title.js";
import "../../components/app-card-image.js";
import "../../components/app-hover-card.js";
import "../../components/app-forms.js";

/*-------------------------SCRIPTS---------------------------*/

class PageRentaDeAutobuses extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `

            <app-modal-doters></app-modal-doters>

             <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp","mediumImage": "../src/assets/img/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp", "smallImage": "../src/assets/img/banner/movil/banner-3-clics.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/web/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp", "mediumImage": "../src/assets/img/banner/tablet/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp","smallImage": "../src/assets/img/banner/movil/banner-aca-diamante.webp", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/web/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp", "mediumImage": "../src/assets/img/banner/tablet/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp","smallImage": "../src/assets/img/banner/movil/banner-chil-aca.webp", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>


            <section class="__section__renta-autobuses">
                <app-section-title section-title="Renta de autobuses: soluciones para viajes y turismo en CDMX"></app-section-title>
                <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
                <article class="__grid-cards-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>
            </section>


            <section class="__section__learn-more">
                <app-section-title section-title="Más información"></app-section-title>
                <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p>
                <article class="__icons-cards-container" id="icons-cards-container">
                    <!-- Las cards se insertarán aquí dinámicamente -->
                </article>
                <p class="__paragraph">El servicio de Turismo Gran Clase de ETN y Turistar, cuenta con dos opciones de capacidad para su comodidad y necesidades de transporte.</p>
            </section>


            <section class="__section__seats">
                <app-section-title section-title="Asientos"></app-section-title>
                <div class="seats-grid-container">
                  <div class="seat-image-container">
                      <h3 class="__subtitle-seats">24 asientos</h3>
                      <img class="__image" src="../../../src/assets/img/autobuses/plano-bus-24.webp" alt="Autobús de 24 asientos">
                  </div>
                  <div class="hover-cards-grid-container hover-cards-24-seats">
                  </div>
                  <div class="hover-cards-grid-container hover-cards-44-seats">
                  </div>
                  <div class="seat-image-container">
                      <h3 class="__subtitle-seats">44 asientos</h3>
                      <img class="__image" src="../../../src/assets/img/autobuses/plano-bus-44.webp" alt="44 asientos">
                  </div>
                </div>
            </section>


            <section class="__section__quote-bus-rental">
                <app-section-title section-title="Cotiza la renta de autobús"></app-section-title>
                <p class="__paragraph">¡Cotiza tu autobús con Costa Line y viaja con comodidad y exclusividad!</p>
                <p class="__paragraph">Encuentra la mejor opción para tu grupo, ajusta detalles a tu medida y disfruta de un viaje con el servicio exclusivo de Costa Line.</p>
                <div class="__quote-contact-container">
                    <div class="__form-container">
                       <app-forms></app-forms>
                    </div>
                    <aside class="__cards-contact-container">
                        <h3 class="__subtitle">Contácanos por WhatsApp</h3>
                        <div class="__cards-whats-container" id="cards-whats-container">
                            <!-- Las cards se insertarán aquí dinámicamente -->
                        </div>
                    </aside>   
              
                </div>
            </section>

            <section class="__section__info">
                <app-section-title section-title="Más información"></app-section-title>
                <article class="__info-container">
                    <div class="__card-location">
                        <h3 class="__subtitle">MÉXICO:</h3>
                        <p class="__paragraph">Saturno núm. 39 Nueva Industrial Vallejo, Gustavo A. Madero. C.P. 07700, CDMX.</p>
                        <p class="__paragraph-tel">TEL. (01 55) 57 54 83 39</p>
                    </div>
                    <div class="__card-location">
                        <h3 class="__subtitle">MONTERREY:</h3>
                        <p class="__paragraph">Churubusco núm. 300, Col. Fierro C.P. 64590</p>
                        <p class="__paragraph-tel">TEL. (01 55) 50 90 39 00</p>
                    </div>
                    <div class="__card-location">
                        <h3 class="__subtitle">GUADALAJARA:</h3>
                        <p class="__paragraph">Salvador Hinojosa núm. 4, Colonia Nueva Central de Autobuses, Tlaquepaque. C.P. 45625 Guadalajara, Jalisco.</p>
                        <p class="__paragraph-tel">TEL. (01 33) 37 70 38 05</p>
                    </div>
                </article>
            </section>
        `;
		this.loadAndRenderCards();
		this.loadAndRenderCardsWhats();
		this.loadAndRenderHoverCards();
		this.loadAndRenderImageCards();
		this.loadAndSetFormDataToAppForms();
	}
	async loadAndRenderHoverCards() {
		// Select both containers
		const hoverCardContainer24Seats = this.querySelector(
			".hover-cards-24-seats",
		);
		const hoverCardContainer44Seats = this.querySelector(
			".hover-cards-44-seats",
		);

		if (!hoverCardContainer24Seats || !hoverCardContainer44Seats) {
			console.error(
				"Uno o ambos contenedores '.hover-cards-24-seats' o '.hover-cards-44-seats' para app-hover-card no fueron encontrados.",
			);
			if (hoverCardContainer24Seats)
				hoverCardContainer24Seats.innerHTML =
					"<p>Error al cargar contenedor.</p>";
			if (hoverCardContainer44Seats)
				hoverCardContainer44Seats.innerHTML =
					"<p>Error al cargar contenedor.</p>";
			return;
		}
		try {
			const response = await fetch("../src/data/card-hover-sits.json");
			if (!response.ok) {
				throw new Error(
					`HTTP error! status: ${response.status} al cargar hover-cards-data.json`,
				);
			}
			const cardsData = await response.json();

			if (!cardsData || !Array.isArray(cardsData)) {
				throw new Error(
					"Formato de datos incorrecto o vacío para hover-cards-data.json",
				);
			}

			// Populate the first 9 cards into the 24-seats container
			cardsData.slice(0, 9).forEach((data) => {
				const hoverCardElement = document.createElement("app-hover-card");
				hoverCardElement.setAttribute("card-title", data.title);
				hoverCardElement.setAttribute("icon-src", data.iconSrc);
				hoverCardContainer24Seats.appendChild(hoverCardElement);
			});

			// Populate the rest of the cards into the 44-seats container
			cardsData.slice(9).forEach((data) => {
				const hoverCardElement = document.createElement("app-hover-card");
				hoverCardElement.setAttribute("card-title", data.title);
				hoverCardElement.setAttribute("icon-src", data.iconSrc);
				hoverCardContainer44Seats.appendChild(hoverCardElement);
			});
		} catch (error) {
			console.error("Error al cargar o renderizar app-hover-card:", error);
			if (hoverCardContainer24Seats)
				hoverCardContainer24Seats.innerHTML =
					"<p>Error al cargar la información de las tarjetas hover.</p>";
			if (hoverCardContainer44Seats)
				hoverCardContainer44Seats.innerHTML =
					"<p>Error al cargar la información de las tarjetas hover.</p>";
		}
	}

	async loadAndRenderImageCards() {
		const imageCardContainer = this.querySelector(".__grid-cards-container");
		if (!imageCardContainer) {
			console.error(
				"El contenedor '.__grid-cards-container' para app-card-image no fue encontrado.",
			);
			return;
		}

		try {
			const response = await fetch("../src/data/card-image-rent.json");
			if (!response.ok) {
				throw new Error(
					`HTTP error! status: ${response.status} al cargar card-image-rent.json`,
				);
			}
			const cardsData = await response.json();

			if (!cardsData || !Array.isArray(cardsData)) {
				throw new Error(
					"Formato de datos incorrecto o vacío para card-image-rent.json",
				);
			}

			cardsData.forEach((data) => {
				const cardElement = document.createElement("app-card-image");
				imageCardContainer.appendChild(cardElement);
				cardElement.populateCard(data);
			});

			// Añadir el div "center-botton" después de las tarjetas
			const centerButtonDiv = document.createElement("div");
			centerButtonDiv.classList.add("center-botton");
			centerButtonDiv.innerHTML = "<p>Renta</p>";
			imageCardContainer.appendChild(centerButtonDiv);
		} catch (error) {
			console.error("Error al cargar o renderizar app-card-image:", error);
			if (imageCardContainer) {
				imageCardContainer.innerHTML =
					"<p>Error al cargar la información de las tarjetas de imagen.</p>";
			}
		}
	}
	// ...

	async loadAndRenderCards() {
		try {
			const responseIconsCards = await fetch(
				"../src/data/cards-icons-data.json",
			); // Ruta ajustada
			if (!responseIconsCards.ok) {
				throw new Error(`HTTP error! status: ${responseIconsCards.status}`);
			}
			const cardsIconsData = await responseIconsCards.json();
			this.renderCards(cardsIconsData);
		} catch (error) {
			console.error("Error al cargar o parsear cards-icons-data.json:", error);
			const container = this.querySelector("#icons-cards-container");
			if (container) {
				container.innerHTML =
					"<p>Error al cargar la información de las cards.</p>";
			}
		}
	}

	renderCards(cardsIconsData) {
		const container = this.querySelector("#icons-cards-container");
		if (!container) {
			console.error("El contenedor de cards no fue encontrado.");
			return;
		}

		if (
			!cardsIconsData ||
			!Array.isArray(cardsIconsData) ||
			cardsIconsData.length === 0 // Corregido: usar cardsIconsData en lugar de cardsData
		) {
			console.error(
				"No se pudieron cargar los datos para las cards o el formato es incorrecto.",
			);
			container.innerHTML =
				"<p>No hay datos disponibles para mostrar las cards.</p>";
			return;
		}

		cardsIconsData.forEach((data) => {
			// Corregido: usar cardsIconsData en lugar de cardsData
			const cardElement = document.createElement("app-cards-icons");
			container.appendChild(cardElement); // Es importante añadir al DOM antes para que connectedCallback de app-cards-icons se ejecute.
			cardElement.contentCardsIcons(data); // Luego se configura el contenido.
		});
	}

	async loadAndRenderCardsWhats() {
		try {
			const responseWhats = await fetch("../src/data/cards-whats-data.json"); // Ajusta la ruta si es necesario
			if (!responseWhats.ok) {
				// Corregido: usar responseWhats
				throw new Error(`HTTP error! status: ${responseWhats.status}`);
			}
			const cardsWhatsData = await responseWhats.json();
			this.renderWhatsCards(cardsWhatsData);
		} catch (error) {
			console.error("Error al cargar o parsear cards-whats-data.json:", error); // Corregido el nombre del archivo en el mensaje
			const container = this.querySelector("#cards-whats-container");
			if (container) {
				container.innerHTML =
					"<p>Error al cargar la información de las cards.</p>";
			}
		}
	}

	renderWhatsCards(cardsWhatsData) {
		const container = this.querySelector("#cards-whats-container"); // Corregido: selector del contenedor correcto
		if (!container) {
			console.error("El contenedor de cards no fue encontrado.");
			return;
		}

		if (
			!cardsWhatsData ||
			!Array.isArray(cardsWhatsData) ||
			cardsWhatsData.length === 0
		) {
			console.error(
				"No se pudieron cargar los datos para las cards o el formato es incorrecto.",
			);
			container.innerHTML =
				"<p>No hay datos disponibles para mostrar las cards.</p>";
			return;
		}

		cardsWhatsData.forEach((data) => {
			// Corregido: iterar sobre cardsWhatsData
			const cardElement = document.createElement("app-cards-contact-whats");
			container.appendChild(cardElement); // Es importante añadir al DOM antes para que connectedCallback de app-cards-icons se ejecute.
			cardElement.contentCardsWhats(data); // Luego se configura el contenido.
		});
	}

	async loadAndSetFormDataToAppForms() {
		const appFormsElement = this.querySelector("app-forms");
		if (!appFormsElement) {
			console.error("Elemento app-forms no encontrado en el layout.");
			return;
		}

		try {
			const response = await fetch("../src/data/forms-cotiza.json");
			if (!response.ok) {
				throw new Error(
					`Error HTTP: ${response.status} al cargar forms-cotiza.json`,
				);
			}
			const formData = await response.json();

			if (typeof appFormsElement.setFormData === "function") {
				appFormsElement.setFormData(formData);
			} else {
				console.error(
					"El método setFormData no existe en el elemento app-forms. Asegúrate de que el componente app-forms esté definido y cargado correctamente.",
				);

				appFormsElement.innerHTML =
					'<p class="error-message">Error al inicializar el componente de formulario.</p>';
			}
		} catch (error) {
			console.error(
				"No se pudo cargar o procesar los datos del formulario para app-forms:",
				error,
			);
			const formContainer = appFormsElement.querySelector(".dynamic-form");
			if (formContainer) {
				formContainer.innerHTML =
					'<p class="error-message">Error al cargar la configuración del formulario. Por favor, inténtelo más tarde.</p>';
			} else {
				appFormsElement.innerHTML =
					'<p class="error-message">Error crítico al cargar la configuración del formulario.</p>';
			}
		}
	}
}
customElements.define("page-renta-de-autobuses", PageRentaDeAutobuses);
