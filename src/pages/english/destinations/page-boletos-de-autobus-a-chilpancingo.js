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

class PageBusTicketsToChilpancingo extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/chilpancingo/banners/banner-bienvenido-a-chilpancingo.webp"
              image-alt="Promotional banner for Chilpancingo"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Chilpancingo is waiting. Costa Line will take you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/chilpancingo/chilpancingo-1.webp", "alt": "Bahias de Chilpancingo"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/chilpancingo/chilpancingo-2.webp", "alt": "Letrero de Chilpancingo"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/chilpancingo/chilpancingo-3.webp", "alt": "Panoramica Chilpancingo"}
              ]'
              paragraph-text="Chilpancingo is the vibrant capital of Guerrero, known for its rich history, cultural landmarks, and lively city life. Visitors can explore the bustling Zócalo, enjoy green spaces like Parque Margarita, and discover the region’s heritage at the Guerrero Regional Museum. With its local markets, festivals, and warm community spirit, Chilpancingo offers an authentic and unforgettable experience in the heart of Guerrero."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Chilpancingo"></app-section-title>
            <app-explore-section></app-explore-section>
            
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">Chilpancingo’s cuisine reflects the heart of Guerrero through its bold flavors, fresh ingredients, and traditional recipes passed down through generations. From hearty stews and tamales to savory street snacks and local beverages, the city offers a culinary experience that blends history, community, and creativity. Each meal tells a story of the region’s culture, festivals, and daily life, inviting visitors to taste the authentic flavors of Chilpancingo while enjoying the warmth and hospitality of its people.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/chilpancingo/chilpancingo-food.json"></app-card-image-tag-text>
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
				"../../src/data/english/destinations/chilpancingo/cards-explore-section.json",
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
	"page-boletos-de-autobus-a-chilpancingo",
	PageBusTicketsToChilpancingo,
);
