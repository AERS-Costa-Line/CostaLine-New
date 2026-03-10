/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
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

class AutobusACoyucaDeBenitez extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-coyuca-de-benitez.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-coyuca-de-benitez.webp", "smallImage": "../../src/assets/img/banner/movil/banner-coyuca-de-benitez.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Coyuca de Benítez en autobús con Costa Line"></app-section-title>
          <p class="__subtitle__destinos">Coyuca de Benítez</p>
          <p class="__paragraph">Coyuca de Benítez, en la costa de Guerrero, ofrece playas tranquilas, manglares y una rica tradición local. Costa Line te conecta con Coyuca de Benítez con un servicio de autobús seguro y cómodo desde diferentes puntos de la región, ideal para turismo, descanso o visitas familiares.</p>
          <p class="__subtitle__destinos">¿Qué lugares visitar en Coyuca de Benítez?</p>
          <p class="__paragraph">Disfruta de la Laguna de Coyuca, playas vírgenes, zonas de manglares y pueblos cercanos con encanto. La región combina naturaleza, cultura y gastronomía, brindando experiencias auténticas a todos sus visitantes.</p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/coyuca-de-benitez/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__coyuca__food">
          <p class="__paragraph__xl">Coyuca de Benítez destaca por su gastronomía costera, incluyendo pescados, mariscos y platillos locales tradicionales. Restaurantes y fondas locales ofrecen experiencias culinarias auténticas que reflejan la cultura de la región.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/coyuca-de-benitez/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Coyuca de Benítez con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para descubrir este paraíso costero de Guerrero. Tu viaje está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/coyuca-de-benitez.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/coyuca-de-benitez/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__coyuca__other">
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
customElements.define(
  "page-autobus-a-coyuca-de-benitez",
  AutobusACoyucaDeBenitez,
);
