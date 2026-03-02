/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-section-title.js";
import "../../../components/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";

class PageBusTicketsToZihuatanejo extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/zihuatanejo/banners/banner-bienvenido-a-zihuatanejo.webp"
              image-alt="Promotional banner for Iguala"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Zihuatanejo is waiting. Costa Line will take you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/zihuatanejo/zihuatanejo-1.webp", "alt": "Bahias de Zihuatanejo"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/zihuatanejo/zihuatanejo-2.webp", "alt": "Letrero de Zihuatanejo"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/zihuatanejo/zihuatanejo-3.webp", "alt": "Panoramica Zihuatanejo"}
              ]'
              paragraph-text="Zihuatanejo is a picturesque coastal city in Guerrero, known for its charming beaches, fishing traditions, and warm hospitality. Visitors can stroll through the vibrant waterfront promenade, explore the artisanal markets, and enjoy the local seafood that reflects the town’s maritime heritage. Surrounded by scenic bays and a relaxed atmosphere, Zihuatanejo blends natural beauty, culture, and tradition, offering travelers an authentic seaside experience on Mexico’s Pacific coast."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Zihuatanejo"></app-section-title>
            <app-explore-section></app-explore-section>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">Zihuatanejo’s cuisine reflects the rich flavors of Guerrero’s coast through fresh ingredients, traditional recipes, and local culinary traditions. Its gastronomy blends the bounty of the sea with regional creativity, offering a unique experience that highlights culture, community, and history. Each meal tells a story of maritime heritage and festive spirit, inviting visitors to savor the authentic coastal flavors of Zihuatanejo while enjoying the warmth and hospitality of its people.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/zihuatanejo/zihuatanejo-food.json"></app-card-image-tag-text>
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
				"../../src/data/english/destinations/zihuatanejo/cards-explore-section.json",
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
	"page-boletos-de-autobus-a-zihuatanejo",
	PageBusTicketsToZihuatanejo,
);
