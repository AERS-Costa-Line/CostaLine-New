/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-section-title.js";
import "../../../components/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageBusTicketsToToluca extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/toluca/banners/banner-bienvenido-a-toluca.webp"
              image-alt="Promotional banner for Toluca"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Discover Toluca. Costa Line takes you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/toluca/toluca-1.webp", "alt": "Cosmovitral Botanical Garden"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/toluca/toluca-2.webp", "alt": "Toluca Cathedral"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/toluca/toluca-3.webp", "alt": "Main Square of Toluca"}
              ]'
              paragraph-text="Toluca, the capital of the State of Mexico, is a city rich in history, culture, and natural beauty. Famous for the Cosmovitral Botanical Garden, Toluca Cathedral, and its vibrant city center, it combines colonial architecture with modern attractions. Visitors can enjoy museums, local markets, culinary delights, and the nearby Nevado de Toluca volcano for outdoor adventures."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Toluca"></app-section-title>
            <app-explore-section></app-explore-section>
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">Toluca’s gastronomy features regional dishes like chorizo, sopa de hongos, tamales, and traditional desserts. Visitors can savor authentic flavors while exploring the city’s historic streets and cultural landmarks.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/toluca/toluca-food.json"></app-card-image-tag-text>
          </section>
            
          <section class="__section">
            <app-section-title section-title="Travel Mexico with Costa Line — comfort, safety, and punctuality every mile of the way"></app-section-title>
            <p class="text-description-list">
                With Costa Line, every journey becomes part of the experience: more than travel, it’s peace of mind, comfort, and reliable connection across Mexico.
            </p>

            <ul class="text-list">
                <li class="item-list">🛋️ <strong>Executive comfort</strong>: choose from Economy, Primera, Plus, or Luxury services with reclining seats, individual screens, air conditioning, and more.</li>
                <li class="item-list">🛡️ <strong>Safety and professional service</strong>: highly trained staff and well-maintained coaches ensure your well-being throughout the trip.</li>
                <li class="item-list">📶 <strong>Connectivity and entertainment</strong>: enjoy personal screens, air conditioning, power outlets, and on Plus or Luxury services, complimentary drinks and snacks.</li>
            </ul>
          </section>

          <section class="__section">
            <app-section-title section-title="Explore more destinations with Costa Line. Mexico is waiting for you."></app-section-title>
            <app-destiny-slider src="../../src/data/english/destiny-slider-data.json"></app-destiny-slider>
          </section>
        `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/toluca/cards-explore-section.json",
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const cardsData = await response.json();
			const exploreSection = this.querySelector("app-explore-section");
			if (exploreSection) {
				exploreSection.setAttribute("cards-data", JSON.stringify(cardsData));
			}
		} catch (error) {
			console.error("Could not load explore section data:", error);
		}
	}
}
customElements.define(
	"page-boletos-de-autobus-a-toluca",
	PageBusTicketsToToluca,
);
