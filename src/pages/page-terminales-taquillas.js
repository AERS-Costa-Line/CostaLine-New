/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.1.3";
import "../components/app-cookies-policy.js?v=1.0.3";
import "../components/app-modal-travelpass.js?v=1.0.2";
import "../components/app-button-whats.js?v=1.0.2";
import "../components/app-button-eva-trip.js?v=1.0.2";
import "../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-dropdown.js"; // Importar el componente dropdown

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageTerminalesTaquillas extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <div class="__panthom_space"></div>

            <section class="__section __section__encuentra-taquilla">
                <app-section-title section-title="Encuentra tu taquilla Costa Line: ubicaciones y horarios"></app-section-title>
                 <p class="__paragraph">El sector de renta de autobuses en la Ciudad de México ha experimentado un crecimiento significativo, reflejando la creciente demanda de soluciones de transporte cómodas y seguras para grupos. Desde excursiones escolares hasta viajes corporativos, la renta de autobuses se ha consolidado como una opción ideal para facilitar la movilidad de grupos grandes, ofreciendo un equilibrio entre eficiencia, seguridad y confort.</p> 
                <article class="__grid-cards-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>
                <p class="__section-paragraph-xl">Explora más rutas y destinos de Costa Line para planificar tu viaje.</p>
            </section>

            <section class="__section __section__FATQs">
                <app-section-title section-title="Preguntas frecuentes sobre las taquillas Costa Line"></app-section-title>
                <h3 class="__subtitle-center-xl">¿Por qué comprar en las taquillas Costa Line?</h3>
                <p class="__paragraph-left">Comprar tus boletos en las taquillas de Costa Line ofrece múltiples ventajas. Además de contar con un servicio rápido y eficiente, nuestras taquillas están estratégicamente ubicadas para facilitarte el acceso desde cualquier punto de la ciudad. Al comprar en la taquilla, tienes la posibilidad de recibir asesoría personalizada, resolver cualquier duda sobre tu viaje y asegurarte de que todos los detalles están perfectamente organizados antes de tu salida. Además, en nuestras taquillas también puedes acceder a promociones exclusivas y obtener información actualizada sobre los horarios de Costa Line y los destinos más populares. Ya sea que estés buscando Costa Line cerca de mí o prefieras comprar tus boletos directamente en una terminal de Costa Line, nuestras taquillas son la opción más confiable y conveniente.</p>
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
			const response = await fetch("../src/data/card-image-term-taqui.json");
			if (!response.ok) {
				throw new Error(
					`HTTP error! status: ${response.status} al cargar card-image-term-taqui.json`,
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
				"<p>Taquillas de autobuses Costa Line: ubicaciones principales</p>";
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
				"../src/data/dropdown-preguntas-frecuentes.json",
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
customElements.define("page-terminales-taquillas", PageTerminalesTaquillas);
