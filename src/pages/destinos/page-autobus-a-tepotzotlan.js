/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";
import "../../components/app-destiny-grid.js";

class AutobusATepotzotlan extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner Tepotzotlán", "image": "../../src/assets/img/banner/web/banner-tepotzotlan.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-tepotzotlan.webp", "smallImage": "../../src/assets/img/banner/movil/banner-tepotzotlan.webp", "link": "#index.html/banner1"}]'
      ></app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Tepotzotlán en autobús con Costa Line"></app-section-title>
          
          <p class="__subtitle__destinos">Tepotzotlán</p>

          <p class="__paragraph">
            Tepotzotlán, Pueblo Mágico del Estado de México, es un destino ideal para quienes disfrutan la historia, 
            la arquitectura colonial y la gastronomía tradicional. Su famoso Museo Nacional del Virreinato y la 
            Parroquia de San Pedro Apóstol convierten este destino en una experiencia cultural única.
          </p>

          <p class="__paragraph">
            Costa Line te conecta con Tepotzotlán mediante autobuses cómodos y seguros, perfectos para escapadas de fin de semana, visitas familiares o recorridos turísticos.
          </p>

          <p class="__subtitle__destinos">¿Qué lugares visitar en Tepotzotlán?</p>

          <p class="__paragraph">
            Visita el Museo Nacional del Virreinato, la Parroquia de San Pedro, la Plaza de las Artesanías, el Mercado 
            Tradicional, el Arco del Sitio y los miradores naturales que rodean al pueblo.  
            Caminando por sus calles encontrarás antojitos, artesanía y espacios llenos de historia.
          </p>
      </section>

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/tepotzotlan/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>

      <section class="__section __section__tepotzotlan__food">
          <p class="__paragraph__xl">
            Tepotzotlán ofrece una gastronomía llena de tradición: barbacoa, mole, quesadillas de comal, tamales, atole, 
            dulces regionales y cocina típica del Estado de México. Restaurantes y fondas del centro ofrecen experiencias 
            culinarias auténticas para todos los visitantes.
          </p>

          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/tepotzotlan/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Tepotzotlán con Costa Line!</h2>
              <p class="cta__subtitle">
                Disfruta historia, cultura y sabor en uno de los Pueblos Mágicos más importantes del Estado de México.
              </p>
              <a href="../../boletos-autobus/tepotzotlan.html" 
                 class="btn btn--primary btn--large" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Comprar boletos" 
                 tabindex="0">
                 Consulta horarios y compra tu boleto
              </a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/tepotzotlan/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__tepotzotlan__other">
          <app-section-title section-title="Otros destinos"></app-section-title>
          <article class="container-slider-other">
              <app-slider-opacity destinations-src="../../src/data/destinos/card-opacity-destinations.json"></app-slider-opacity>
          </article>
      </section>

      <app-modal-multi-image></app-modal-multi-image>
      <app-modal-image></app-modal-image>

      <app-cookies-policy></app-cookies-policy>
      
      <app-button-eva-trip></app-button-eva-trip>
    `;
	}
}

customElements.define("page-autobus-a-tepotzotlan", AutobusATepotzotlan);
