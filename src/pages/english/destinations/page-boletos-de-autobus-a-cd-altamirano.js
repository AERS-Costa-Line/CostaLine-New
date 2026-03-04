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

class PageBusTicketsToCdAltamirano extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/ciudad-altamirano/banner-ciudad-altamirano-e.webp"
              image-alt="Promotional banner for Ciudad Altamirano"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Ciudad Altamirano is waiting. Costa Line will take you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/ciudad-altamirano/cd-altamirano-1.webp", "alt": "Bahias de Ciudad Altamirano"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/ciudad-altamirano/cd-altamirano-2.webp", "alt": "Letrero de Ciudad Altamirano"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/ciudad-altamirano/cd-altamirano-3.webp", "alt": "Panoramica Ciudad Altamirano"}
              ]'
              paragraph-text="Ciudad Altamirano is a charming town in the heart of Guerrero. Known for its rivers, local markets, and lively community events, this destination offers visitors a glimpse into authentic Mexican life. From the bustling Zócalo to scenic spots along the Balsas River and traditional cultural celebrations, Ciudad Altamirano provides an unforgettable mix of relaxation, exploration, and local heritage — all within the warm and welcoming spirit of Guerrero."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Ciudad Altamirano"></app-section-title>
            <app-explore-section></app-explore-section>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">The cuisine of Ciudad Altamirano is a vibrant reflection of its local traditions, community, and heritage. Influenced by the flavors of Guerrero, its gastronomy highlights fresh ingredients, regional spices, and time-honored cooking techniques that delight every palate. Each dish embodies the warmth and spirit of the town, offering not only unforgettable flavors but also a cultural journey that celebrates Ciudad Altamirano’s identity, hospitality, and festive essence in every meal.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/ciudad-altamirano/ciudad-altamirano-food.json"></app-card-image-tag-text>
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
				"../../src/data/english/destinations/ciudad-altamirano/cards-explore-section.json",
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
	"page-boletos-de-autobus-a-cd-altamirano",
	PageBusTicketsToCdAltamirano,
);
