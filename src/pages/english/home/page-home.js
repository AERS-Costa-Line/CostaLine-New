/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-destinations-grid-english.js";
import "../../../components/app-banner-promotional.js";
import "../../../components/app-card-left-description.js";
import "../../../components/app-grid-text.js";

class AppHomeEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <div class="__first-section">
        <app-payments></app-payments>
      </div>
      <section class="__section">
        <app-section-title section-title="Welcome aboard Costa Line. Let us take you to the heart of Mexico."></app-section-title>
        <!-- Grid here -->
        <app-destinations-grid-english
          destinations='[
            {"id": "destination1", "title": "Acapulco", "content": "Where the ocean and excitement never sleep.", "image": "../../src/assets/img/destinos-img/grid-english/acapulco-background.webp", "link": "../english/destinations/bus-to-acapulco.html"},

            {"id": "destination2", "title": "Chilpancingo", "content": "Living tradition in the heart of Guerrero", "image": "../../src/assets/img/destinos-img/grid-english/chilpancingo-background.webp", "link": "../english/destinations/bus-to-chilpancingo.html"},

            {"id": "destination3", "title": "Taxco", "content": "Where silver shines and legends live on.", "image": "../../src/assets/img/destinos-img/grid-english/taxco-background.webp", "link": "../english/destinations/bus-to-taxco.html"},

            {"id": "destination4", "title": "Cuernavaca", "content": "A year-round haven of sun and serenity.", "image": "../../src/assets/img/destinos-img/grid-english/cuernavaca-background.webp", "link": "../english/destinations/bus-to-cuernavaca.html"},

            {"id": "destination5", "title": "Ixtapa Zihuatanejo", "content": "Two souls, one paradise by the sea.", "image": "../../src/assets/img/destinos-img/grid-english/zihuatanejo-background.webp", "link": "../english/destinations/bus-to-zihuatanejo.html"},

            {"id": "destination6", "title": "Iguala", "content": "Where Mexico’s history comes to life.", "image": "../../src/assets/img/destinos-img/grid-english/iguala-background.webp", "link": "../english/destinations/bus-to-iguala.html"}
            ]'
        ></app-destinations-grid-english>
      </section>

      <section class="__section">
        <app-section-title section-title="Benefits from your very first trip."></app-section-title>
        <!-- Banner promotional "viajero protegido" here-->
        
        <app-banner-promotional
          link-href="#"
          image-alt="Banner promocional de Viajero Protegido"
          image-src="../../src/assets/img/banner/english/viajero/web/banner-viajero-protegido.webp"
          image-src-tablet="../../src/assets/img/banner/english/viajero/tablet/banner-viajero-protegido.webp"
          image-src-mobile="../../src/assets/img/banner/english/viajero/mobile/banner-viajero-protegido.webp"
        ></app-banner-promotional>
      </section>

      <section class="__section">
        <app-section-title section-title="Your comfort is our top priority."></app-section-title>
        <article class="description_text">Costa Line welcomes you to Mexico from the very first kilometer.Travel in comfort, with safety—and views that already tell stories.        </article>
        <article class="subtitle_text">
          These are just some of the services that make your journey special:
        </article>
        <app-card-left-description src="../../src/data/special-services-data.json"></app-card-left-description>
      </section>

      <section class="__section">
        <app-section-title section-title="Discover Mexico with the comfort and confidence of Costa Line"></app-section-title>
        <article class="subtitle_text">
          At Costa Line, every journey is a way to discover Mexico. Your adventure starts here.
        </article>
        <app-grid-text src="../../src/data/english/grid-text-data.json"></app-grid-text>
      </section>

    `;
	}
}
customElements.define("app-home-english", AppHomeEnglish);
