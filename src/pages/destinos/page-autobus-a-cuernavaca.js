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
import "../../js/slick.js?v=1.0.0";

class AutobusACuernavaca extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-cuernavaca.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-cuernavaca.webp", "smallImage": "../../src/assets/img/banner/movil/banner-cuernavaca.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Cuernavaca en autobús con Costa Line"></app-section-title>
          <p class="__subtitle__destinos">Cuernavaca</p>
          <p class="__paragraph">Cuernavaca, conocida como la “Ciudad de la Eterna Primavera”, combina clima agradable, jardines, historia y cultura. Costa Line te conecta con Cuernavaca mediante un servicio de autobús cómodo y seguro desde distintos puntos. Ideal para turismo, descanso o visitas familiares.</p>
          <p class="__subtitle__destinos">¿Qué lugares visitar en Cuernavaca?</p>
          <p class="__paragraph">Explora el Palacio de Cortés, la Catedral, los Jardines de México y sus calles llenas de historia. Cuernavaca también ofrece mercados, gastronomía local y actividades culturales que reflejan la tradición de la región.</p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/cuernavaca/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__cuernavaca__food">
          <p class="__paragraph__xl">Cuernavaca ofrece una gastronomía variada que mezcla platillos tradicionales con sabores modernos. Restaurantes y fondas locales permiten disfrutar de la esencia culinaria de Morelos en cada bocado.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/cuernavaca/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Cuernavaca con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para disfrutar de la Ciudad de la Eterna Primavera. Tu viaje está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/cuernavaca.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/cuernavaca/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__cuernavaca__other">
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
customElements.define("page-autobus-a-cuernavaca", AutobusACuernavaca);
