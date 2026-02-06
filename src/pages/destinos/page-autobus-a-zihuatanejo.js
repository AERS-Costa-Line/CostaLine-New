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

class AutobusAZihuatanejo extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-zihuatanejo.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-zihuatanejo.webp", "smallImage": "../../src/assets/img/banner/movil/banner-zihuatanejo.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Zihuatanejo en autobús con Costa Line"></app-section-title>
          <p class="__subtitle__destinos">Zihuatanejo</p>
          <p class="__paragraph">Zihuatanejo, en la costa de Guerrero, combina playas paradisíacas, resorts modernos y el encanto del tradicional pueblo pesquero de Zihuatanejo. Costa Line te conecta con este destino mediante un servicio de autobús cómodo y seguro desde distintos puntos, ideal para vacaciones y turismo de playa.</p>
          <p class="__subtitle__destinos">¿Qué lugares visitar en Zihuatanejo?</p>
          <p class="__paragraph">Disfruta de la Playa El Palmar, la Playa La Ropa, el Malecón de Zihuatanejo y actividades acuáticas. Explora mercados locales y restaurantes con gastronomía de mariscos frescos que reflejan la cultura costera de la región.</p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/zihuatanejo/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__ixtapa__food">
          <p class="__paragraph__xl">Zihuatanejo es famoso por su gastronomía de mariscos frescos: ceviches, camarones al ajillo, pescado a la talla y platillos típicos de Guerrero. Restaurantes y fondas locales ofrecen experiencias culinarias auténticas frente al mar.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/zihuatanejo/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Zihuatanejo con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para vivir unas vacaciones inolvidables en la costa de Guerrero. Tu viaje está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/zihuatanejo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/zihuatanejo/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__ixtapa__other">
          <app-section-title section-title="Otros destinos"></app-section-title>
          <article class="container-slider-other">
              <app-slider-opacity destinations-src="../../src/data/destinos/card-opacity-destinations.json"></app-slider-opacity>
          </article>
      </section>

      <app-modal-multi-image></app-modal-multi-image>
      <app-modal-image></app-modal-image>

      <app-cookies-policy></app-cookies-policy>
      <app-button-whats></app-button-whats>
      <app-button-eva-trip></app-button-eva-trip>
    `;
	}
}
customElements.define(
	"page-autobus-a-zihuatanejo",
	AutobusAZihuatanejo,
);
