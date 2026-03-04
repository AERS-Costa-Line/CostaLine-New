/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
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

class AutobusATecpan extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner Tecpan", "image": "../../src/assets/img/banner/web/banner-tecpan.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-tecpan.webp", "smallImage": "../../src/assets/img/banner/movil/banner-tecpan.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Tecpan en autobús con Costa Line"></app-section-title>

          <p class="__subtitle__destinos">Tecpan de Galeana</p>

          <p class="__paragraph">
            Tecpan de Galeana, en la región Costa Grande de Guerrero, es un destino que combina naturaleza, cultura e historia. 
            Rodeado de montañas, ríos y zonas arqueológicas, Tecpan es ideal para quienes buscan un viaje tranquilo, gastronómico y con esencia tradicional.
            Costa Line te conecta con este destino mediante un servicio de autobús cómodo, accesible y seguro.
          </p>

          <p class="__subtitle__destinos">¿Qué lugares visitar en Tecpan?</p>

          <p class="__paragraph">
            Recorre la Zona Arqueológica de La Soledad de Maciel (La Chole), conoce la Laguna de Nuxco, el Río Tecpan y disfruta de sus playas 
            poco concurridas en la costa. También puedes visitar plazas, mercados y restaurantes para vivir la cultura local.
          </p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/tecpan/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>

      <section class="__section __section__tecpan__food">
          <p class="__paragraph__xl">
            La gastronomía de Tecpan se distingue por sus mariscos frescos, pozole guerrerense, pescado a la talla, tamales tradicionales 
            y una amplia variedad de antojitos locales. Fondas y restaurantes familiares ofrecen auténticos sabores de la Costa Grande.
          </p>

          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/tecpan/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Tecpan con Costa Line!</h2>
              <p class="cta__subtitle">
                Descubre cultura, naturaleza e historia en el corazón de la Costa Grande. ¡Tu próxima aventura está a un clic!
              </p>
              <a href="../../boletos-autobus/tecpan.html" 
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
              <app-dropdown items-src="../../src/data/destinos/tecpan/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__tecpan__other">
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

customElements.define("page-autobus-a-tecpan", AutobusATecpan);
