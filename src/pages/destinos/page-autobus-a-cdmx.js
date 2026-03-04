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

class AutobusACDMX extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-ciudad-de-mexico.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-ciudad-de-mexico.webp", "smallImage": "../../src/assets/img/banner/movil/banner-ciudad-de-mexico.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Ciudad de México en autobús con Costa Line"></app-section-title>
          <p class="__subtitle__destinos">Ciudad de México</p>
          <p class="__paragraph">La Ciudad de México, capital del país, es un destino vibrante que combina historia, cultura, gastronomía y entretenimiento. Costa Line te conecta con CDMX mediante un servicio de autobús seguro y cómodo desde distintos puntos. Ya sea por turismo, negocios o eventos, tu llegada a la capital será fácil y placentera.</p>
          <p class="__subtitle__destinos">¿Qué lugares visitar en CDMX?</p>
          <p class="__paragraph">Explora lugares emblemáticos como el Zócalo, el Museo Nacional de Antropología, Chapultepec y los barrios históricos. La ciudad también ofrece mercados tradicionales, gastronomía diversa y una vida cultural intensa que no puedes dejar de vivir.</p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/cdmx/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__cdmx__food">
          <p class="__paragraph__xl">CDMX ofrece una gastronomía única que mezcla tradición y modernidad, desde tacos callejeros hasta alta cocina. Restaurantes y fondas locales permiten experimentar los sabores más representativos de la capital mexicana.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/cdmx/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Ciudad de México con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para descubrir la capital del país. Tu aventura urbana está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/ciudad-de-mexico.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/cdmx/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__cdmx__other">
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
customElements.define("page-autobus-a-cdmx", AutobusACDMX);
