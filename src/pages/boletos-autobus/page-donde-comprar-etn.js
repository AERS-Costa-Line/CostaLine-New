/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-modal-doters.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-img-shop-left.js";
import "../../components/app-img-shop-right.js";
import "../../components/app-section-title.js";
import "../../components/app-card-image.js";

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PageDondeComprar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
    
        <app-cotiza></app-cotiza>
        <app-modal-doters></app-modal-doters>
            <div class="__panthom_space"></div>


        <app-section-title section-title="¿Dónde puedo comprar Boletos de autobús en Costa Line?"></app-section-title>
       
        <div class="shop-container" id="shop-cards-container">
            <!-- Las tarjetas de tiendas se cargarán aquí -->
        </div>

      
  
`;
		this.loadAndRenderShopCards();
		this.loadAndRenderTitleIconCards();
	}

	async loadAndRenderShopCards() {
		try {
			const response = await fetch("../src/data/cards-buy-options.json"); // Ruta corregida
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const cardsData = await response.json();
			this.renderShopCards(cardsData);
		} catch (error) {
			console.error("Error al cargar o parsear cards-buy-options.json:", error);
			const container = this.querySelector("#shop-cards-container");
			if (container) {
				container.innerHTML =
					"<p>Error al cargar la información de los puntos de venta.</p>";
			}
		}
	}

	renderShopCards(cardsData) {
		const container = this.querySelector("#shop-cards-container");
		if (!container) {
			console.error("El contenedor de shop-cards no fue encontrado.");
			return;
		}
		container.innerHTML = "";

		cardsData.forEach((data) => {
			const cardElement = document.createElement(
				data.type === "left" ? "app-img-shop-left" : "app-img-shop-right",
			);
			cardElement.setAttribute("image-src", data.imageSrc);
			cardElement.setAttribute("alt-text", data.altText);
			cardElement.setAttribute("card-title", data.cardTitle);
			cardElement.setAttribute("card-link", data.linkUrl);
			container.appendChild(cardElement);
		});
	}
}
customElements.define("page-donde-comprar", PageDondeComprar);
