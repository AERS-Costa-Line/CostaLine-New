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

class AutobusAIguala extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-iguala.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-iguala.webp", "smallImage": "../../src/assets/img/banner/movil/banner-iguala.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Iguala en autobús con Costa Line"></app-section-title>
          <p class="__subtitle__destinos">Iguala</p>
          <p class="__paragraph">Iguala, ubicada en Guerrero, es conocida por su historia y tradición artesanal, especialmente en la producción de banderas y plata. Costa Line te conecta con Iguala mediante un servicio de autobús cómodo y seguro desde distintos puntos, ideal para turismo, negocios o visitas familiares.</p>
          <p class="__subtitle__destinos">¿Qué lugares visitar en Iguala?</p>
          <p class="__paragraph">Visita el Centro Histórico, la Parroquia de San Francisco, el Museo de la Bandera y descubre la cultura local a través de mercados y talleres artesanales. Iguala combina tradición, historia y cultura en cada rincón.</p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/iguala/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__iguala__food">
          <p class="__paragraph__xl">Iguala ofrece una gastronomía tradicional de Guerrero, con platillos como tamales, pozole y especialidades locales que reflejan la riqueza cultural de la región. Restaurantes y fondas locales permiten disfrutar de sabores auténticos.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/iguala/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Iguala con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para conocer la ciudad histórica de Guerrero. Tu viaje está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/iguala.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/iguala/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__iguala__other">
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
customElements.define("page-autobus-a-iguala", AutobusAIguala);
