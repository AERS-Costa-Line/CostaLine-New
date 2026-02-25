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

class AutobusAChilpancingo extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-chilpancingo.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-chilpancingo.webp", "smallImage": "../../src/assets/img/banner/movil/banner-chilpancingo.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Chilpancingo en autobús con Costa Line"></app-section-title>
          <p class="__subtitle__destinos">Chilpancingo</p>
          <p class="__paragraph">Chilpancingo, capital del estado de Guerrero, combina historia, cultura y naturaleza. Costa Line te conecta con Chilpancingo mediante un servicio de autobús cómodo y seguro desde diferentes puntos de la región. Ya sea por trabajo, turismo o visitas familiares, tu viaje será fácil y placentero.</p>
          <p class="__subtitle__destinos">¿Qué lugares visitar en Chilpancingo?</p>
          <p class="__paragraph">En Chilpancingo puedes explorar plazas y mercados locales, parques y sitios históricos que reflejan la riqueza cultural de la región. La ciudad es un punto de encuentro entre tradición y modernidad, ofreciendo experiencias auténticas a todos sus visitantes.</p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/chilpancingo/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__chilpancingo__food">
          <p class="__paragraph__xl">Chilpancingo ofrece una gastronomía rica y variada, con platillos tradicionales de Guerrero y especialidades locales que reflejan la cultura de la región. Restaurantes y fondas locales permiten disfrutar de sabores auténticos y experiencias culinarias memorables.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/chilpancingo/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Chilpancingo con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para conocer la capital cultural de Guerrero. Tu viaje está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/chilpancingo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/chilpancingo/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__chilpancingo__other">
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
customElements.define("page-autobus-a-chilpancingo", AutobusAChilpancingo);
