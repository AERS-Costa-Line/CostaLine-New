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

import "../../js/slick.js?v=1.0.2";

class PageBusTicketsToCoyucaDeBenitez extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/coyuca-de-benitez/banners/banner-bienvenido-a-coyuca-de-benitez.webp"
              image-alt="Promotional banner for Coyuca de Benitez"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Coyuca de Benitez is waiting. Costa Line will take you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/coyuca-de-benitez/coyuca-de-benitez-1.webp", "alt": "Bahias de Coyuca de Benitez"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/coyuca-de-benitez/coyuca-de-benitez-2.webp", "alt": "Letrero de Coyuca de Benitez"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/coyuca-de-benitez/coyuca-de-benitez-3.webp", "alt": "Panoramica Coyuca de Benitez"}
              ]'
              paragraph-text="Coyuca de Benítez is a picturesque town in Guerrero, known for its natural beauty, rich traditions, and vibrant community life. Visitors can explore the scenic Coyuca Lagoon, relax at nearby beaches, and experience local culture at markets and festivals. With its rivers, mangroves, and warm community spirit, Coyuca de Benítez offers an authentic and unforgettable experience in the heart of Guerrero."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Chilpancingo"></app-section-title>
            <app-explore-section></app-explore-section>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">Coyuca de Benítez’s cuisine reflects the rich flavors of Guerrero through fresh ingredients, traditional recipes, and local culinary traditions. From seafood specialties and tamales to savory street foods and refreshing beverages, the town offers a gastronomic experience that combines history, community, and creativity. Each meal tells a story of the region’s culture, festivals, and daily life, inviting visitors to savor the authentic flavors of Coyuca de Benítez while enjoying the warmth and hospitality of its people.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/coyuca-de-benitez/coyuca-de-benitez-food.json"></app-card-image-tag-text>
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
				"../../src/data/english/destinations/coyuca-de-benitez/cards-explore-section.json",
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
	"page-boletos-de-autobus-a-coyuca-de-benitez",
	PageBusTicketsToCoyucaDeBenitez,
);
