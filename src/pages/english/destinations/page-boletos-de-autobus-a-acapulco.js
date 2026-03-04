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

class PageBusTicketsToAcapulco extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/acapulco/banners/banner-bienvenido-a-acapulco.webp"
              image-alt="Promotional banner for Acapulco"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Acapulco is waiting. Costa Line will take you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/acapulco/acapulco-1.webp", "alt": "Bahias de Acapulco"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/acapulco/acapulco-2.webp", "alt": "Letrero de Acapulco"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/acapulco/acapulco-3.webp", "alt": "Panoramica Acapulco"}
              ]'
              paragraph-text="Acapulco is a legendary jewel on Mexico’s Pacific coast. Famous for its golden beaches, lively nightlife, and breathtaking cliffs, this destination perfectly combines natural beauty with vibrant culture. From the iconic La Quebrada cliff divers to its bays, resorts, and traditional markets, Acapulco offers visitors an unforgettable mix of relaxation, adventure, and history — all within the warm spirit of Guerrero’s hospitality."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Acapulco"></app-section-title>
            <app-explore-section></app-explore-section>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">The cuisine of Acapulco is a vibrant reflection of its coastal spirit, its traditions, and its people. Influenced by the Pacific Ocean and the richness of Guerrero, its gastronomy highlights fresh seafood, regional flavors, and time-honored techniques that captivate every palate. Each dish embodies the warmth and energy of the port, offering not only unforgettable flavors but also a cultural journey that celebrates Acapulco’s identity, hospitality, and festive essence in every meal.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/acapulco/acapulco-food.json"></app-card-image-tag-text>
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
            <app-section-title section-title="Explore more destinations with Costa Line Mexico is waiting for you."></app-section-title>
            <app-destiny-slider src="../../src/data/english/destiny-slider-data.json"></app-destiny-slider>
          </section>
        `;
		this._loadExploreSectionData();
	}

	async _loadExploreSectionData() {
		try {
			const response = await fetch(
				"../../src/data/english/destinations/acapulco/cards-explore-section.json",
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
	"page-boletos-de-autobus-a-acapulco",
	PageBusTicketsToAcapulco,
);
