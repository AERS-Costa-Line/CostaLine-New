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

class AutobusACdAltamirano extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-ciudad-altamirano.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-ciudad-altamirano.webp", "smallImage": "../../src/assets/img/banner/movil/banner-ciudad-altamirano.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Ciudad Altamirano en autobús con Costa Line"></app-section-title>
          <p class="__subtitle__destinos">Ciudad Altamirano</p>
          <p class="__paragraph">Ciudad Altamirano, ubicada en el corazón de Guerrero, ofrece un entorno natural lleno de cultura y tradiciones locales. Costa Line te conecta con Ciudad Altamirano con un servicio de autobús cómodo y seguro desde diferentes puntos de la región. Ya sea por negocios, visitas familiares o turismo, llegar a Ciudad Altamirano con Costa Line es sencillo y sin complicaciones.</p>
          <p class="__subtitle__destinos">¿Qué lugares visitar en Ciudad Altamirano?</p>
          <p class="__paragraph">En Ciudad Altamirano puedes disfrutar de su rica gastronomía, plazas y mercados locales, así como de su entorno natural. La ciudad combina historia y tradición, permitiendo conocer la vida cotidiana de sus habitantes y la cultura de la región.</p>
      </section>    

      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/ciudad-altamirano/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__ciudadaltamirano__food">
          <p class="__paragraph__xl">Ciudad Altamirano ofrece sabores tradicionales de Guerrero, desde platillos típicos hasta delicias locales que reflejan la cultura de la región. Descubre la comida local en restaurantes y fondas, donde cada bocado es una experiencia auténtica.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/ciudad-altamirano/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Ciudad Altamirano con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para conocer este destino lleno de tradición y cultura. Tu viaje está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/ciudad-altamirano.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/ciudad-altamirano/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <section class="__section __section__ciudadaltamirano__other">
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
customElements.define("page-autobus-a-cd-altamirano", AutobusACdAltamirano);
