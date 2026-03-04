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

class AutobusAToluca extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner Toluca", "image": "../../src/assets/img/banner/web/banner-toluca.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-toluca.webp", "smallImage": "../../src/assets/img/banner/movil/banner-toluca.webp", "link": "#index.html/banner1"}]'
      ></app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Toluca en autobús con Costa Line"></app-section-title>
          
          <p class="__subtitle__destinos">Toluca</p>

          <p class="__paragraph">
            Toluca de Lerdo, capital del Estado de México, es un destino que combina modernidad, tradición y paisajes 
            sorprendentes. Su céntrico Cosmovitral, el imponente Volcán Nevado de Toluca y sus museos hacen de esta ciudad 
            un punto ideal para turismo cultural y de naturaleza.
          </p>

          <p class="__paragraph">
            Costa Line te lleva a Toluca con autobuses seguros y cómodos, perfectos para viajes de trabajo, estudios o 
            recorridos turísticos por la capital mexiquense.
          </p>

          <p class="__subtitle__destinos">¿Qué lugares visitar en Toluca?</p>

          <p class="__paragraph">
            Recorre el Cosmovitral Jardín Botánico, la Catedral de Toluca, el Museo de Bellas Artes, la Plaza González 
            Arratia, los Portales y el Mercado 16 de Septiembre.  
            Si buscas aventura, el Nevado de Toluca ofrece paisajes únicos y rutas ideales para senderismo y fotografía.
          </p>
      </section>

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/toluca/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>

      <section class="__section __section__toluca__food">
          <p class="__paragraph__xl">
            Toluca es famosa por sus chorizos verdes y rojos, la sopa de médula, las carnitas, el tradicional taco placero, 
            dulces típicos, nieves artesanales y una amplia variedad de antojitos mexiquenses. Restaurantes y fondas del 
            centro ofrecen auténticos sabores locales.
          </p>

          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/toluca/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Toluca con Costa Line!</h2>
              <p class="cta__subtitle">
                Descubre cultura, naturaleza y tradición en la capital del Estado de México.
              </p>
              <a href="../../boletos-autobus/toluca.html" 
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
              <app-dropdown items-src="../../src/data/destinos/toluca/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__toluca__other">
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

customElements.define("page-autobus-a-toluca", AutobusAToluca);
