/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-modal-doters.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-dropdown.js"; // Importar el componente dropdown

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageTerminalsTicketsOffices extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza lang="en"></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <div class="__panthom_space"></div>

            <section class="__section __section__encuentra-taquilla">
                <app-section-title section-title="Find your Costa Line ticket office: locations and hours"></app-section-title>
                 <p class="__paragraph">The bus rental sector in Mexico City has experienced significant growth, reflecting the increasing demand for comfortable and secure transportation solutions for groups. From school trips to corporate travel, bus rental has become an ideal option to facilitate the mobility of large groups, offering a balance of efficiency, safety, and comfort.</p> 
                <article class="__grid-cards-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>
                <p class="__section-paragraph-xl">Explore more routes and destinations of Costa Line to plan your trip.</p>
            </section>

            <section class="__section __section__FATQs">
                <app-section-title section-title="Frequently Asked Questions about Costa Line ticket offices"></app-section-title>
                <h3 class="__subtitle-center-xl">Why buy at Costa Line ticket offices?</h3>
                <p class="__paragraph-left">Buying your tickets at Costa Line ticket offices offers multiple advantages. In addition to fast and efficient service, our offices are strategically located to make access easy from any point in the city. When you purchase at the ticket office, you have the opportunity to receive personalized advice, resolve any questions about your trip, and ensure all details are perfectly organized before departure. Also, at our offices you can access exclusive promotions and obtain up-to-date information about Costa Line schedules and the most popular destinations. Whether you're looking for "Costa Line near me" or prefer to buy your tickets directly at a Costa Line terminal, our ticket offices are the most reliable and convenient option.</p>
                <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <!-- Contenedor para los dropdowns -->
                </article>
            </section>
        `;

		this.loadAndRenderImageCards();
		this.loadAndRenderDropdowns();
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
			const response = await fetch(
				"../../src/data/english/card-image-term-tickets.json",
			);
			if (!response.ok) {
				throw new Error(
					`HTTP error! status: ${response.status} al cargar card-image-term-tickets.json`,
				);
			}
			const cardsData = await response.json();

			if (!cardsData || !Array.isArray(cardsData)) {
				throw new Error(
					"Formato de datos incorrecto o vacío para card-image-term-taqui.json",
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
			centerButtonDiv.innerHTML =
				"<p>Costa Line bus ticket offices: main locations</p>";
			imageCardContainer.appendChild(centerButtonDiv);
		} catch (error) {
			console.error("Error al cargar o renderizar app-card-image:", error);
			if (imageCardContainer) {
				imageCardContainer.innerHTML =
					"<p>Error al cargar la información de las tarjetas de imagen.</p>";
			}
		}
	}

	async loadAndRenderDropdowns() {
		try {
			const response = await fetch(
				"../../src/data/english/dropdown-ask-term-tickets.json",
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const dropdownsData = await response.json();
			this.renderDropdowns(dropdownsData);
		} catch (error) {
			console.error("Error al cargar o parsear dropdown-data.json:", error);
			const container = this.querySelector("#dropdowns-container");
			if (container) {
				container.innerHTML =
					"<p>Error al cargar las preguntas frecuentes.</p>";
			}
		}
	}

	renderDropdowns(dropdownsData) {
		const container = this.querySelector("#dropdowns-container");
		if (!container) {
			console.error("El contenedor #dropdowns-container no fue encontrado.");
			return;
		}
		container.innerHTML = ""; // Limpiar contenido previo

		dropdownsData.forEach((data) => {
			const dropdownElement = document.createElement("app-dropdown");
			dropdownElement.setAttribute("title-dropdown", data["title-dropdown"]);
			dropdownElement.setAttribute(
				"content-dropdown",
				data["content-dropdown"],
			);
			container.appendChild(dropdownElement);
		});
	}
}
customElements.define(
	"page-terminals-tickets-offices",
	PageTerminalsTicketsOffices,
);
