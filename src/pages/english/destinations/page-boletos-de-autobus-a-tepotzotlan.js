/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-section-title.js";
import "../../../components/app-banner-image.js";
import "../../../components/app-description-destination.js";
import "../../../components/app-explore-section.js";

class PageBusTicketsToTepotzotlan extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
          <app-cotiza></app-cotiza>
          <app-modal-doters></app-modal-doters>
          <div class="__first-section">
            <app-banner-image
              image-src="../../src/assets/img/english/destinations/tepotzotlan/banners/banner-bienvenido-a-tepotzotlan.webp"
              image-alt="Promotional banner for Tepotzotlán"
            ></app-banner-image>
          </div>
          <section class="__section">
            <app-description-destination
              title-text="Discover Tepotzotlán. Costa Line takes you there."
              image-data='[
                {"id": "1", "src": "../../src/assets/img/english/destinations/tepotzotlan/tepotzotlan-1.webp", "alt": "Plaza central de Tepotzotlán"},
                {"id": "2", "src": "../../src/assets/img/english/destinations/tepotzotlan/tepotzotlan-2.webp", "alt": "Museo Nacional del Virreinato"},
                {"id": "3", "src": "../../src/assets/img/english/destinations/tepotzotlan/tepotzotlan-3.webp", "alt": "Parroquia de San Francisco Javier"}
              ]'
              paragraph-text="Tepotzotlán, located in the State of Mexico, is a charming town known for its colonial architecture, cobblestone streets, and cultural heritage. Highlights include the National Museum of the Viceroyalty, the beautiful central square, and the Parroquia de San Francisco Javier. Visitors can enjoy historical tours, local gastronomy, and vibrant cultural festivals, making Tepotzotlán a must-visit destination near Mexico City."
            ></app-description-destination>
          </section>
          <section class="__section">
            <app-section-title section-title=" Explore the Highlights of Tepotzotlán"></app-section-title>
            <app-explore-section></app-explore-section>
          </section>
            
          <section class="__section">
            <app-section-title section-title="Hungry for Mexico? Start here."></app-section-title>
            <app-banner-multi-image></app-banner-multi-image>
            <p class="text-description">Tepotzotlán’s cuisine reflects the traditions of central Mexico, with dishes like tamales, mole, carnitas, and sweet treats from local bakeries. Visitors can experience regional flavors while exploring the town’s rich history and cultural offerings.</p>
            <app-card-image-tag-text data-src="../../src/data/english/destinations/tepotzotlan/tepotzotlan-food.json"></app-card-image-tag-text>
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
				"../../src/data/english/destinations/tepotzotlan/cards-explore-section.json",
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
	"page-boletos-de-autobus-a-tepotzotlan",
	PageBusTicketsToTepotzotlan,
);
