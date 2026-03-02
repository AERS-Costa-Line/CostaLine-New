/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-section-title.js";
import "../../../components/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";

class PageBusTicketsToCuernavaca extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/cuernavaca/banners/banner-bienvenido-a-coyuca-de-benitez.webp"
              image-alt="Promotional banner for Cuernavaca"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Cuernavaca is waiting. Costa Line will take you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/cuernavaca/cuernavaca-1.webp", "alt": "Bahias de Cuernavaca"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/cuernavaca/cuernavaca-2.webp", "alt": "Letrero de Cuernavaca"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/cuernavaca/cuernavaca-3.webp", "alt": "Panoramica Cuernavaca"}
              ]'
              paragraph-text="Cuernavaca is a charming city in Morelos, known for its pleasant climate, beautiful gardens, and rich history. Visitors can explore the historic downtown area, relax in the lush Borda Garden, and discover the fascinating murals at the Palace of Cortés. With its vibrant culture and welcoming atmosphere, Cuernavaca offers a delightful escape for travelers seeking to experience the heart of Mexico."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Cuernavaca"></app-section-title>
            <app-explore-section></app-explore-section>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">Cuernavaca’s cuisine reflects the rich flavors of Morelos through its fresh ingredients, traditional recipes, and diverse culinary traditions. From the famous cecina of Yecapixtla and squash blossom quesadillas to creative desserts like tepoznieves, the city offers a gastronomic experience that blends history, community, and creativity. Each dish tells a story of the region’s culture, festivals, and daily life, inviting visitors to savor the authentic flavors of Cuernavaca while enjoying the warmth and hospitality of its people.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/cuernavaca/cuernavaca-food.json"></app-card-image-tag-text>
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
				"../../src/data/english/destinations/cuernavaca/cards-explore-section.json",
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
	"page-boletos-de-autobus-a-cuernavaca",
	PageBusTicketsToCuernavaca,
);
