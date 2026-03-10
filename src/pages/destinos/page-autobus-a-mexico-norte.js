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

class AutobusAMexicoNorte extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-ciudad-de-mexico.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-ciudad-de-mexico.webp", "smallImage": "../../src/assets/img/banner/movil/banner-ciudad-de-mexico.webp", "link": "#index.html/banner1"}]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <section class="__section __section__destiny__destinations">
  <app-section-title section-title="Viaja a México Norte en autobús con Costa Line"></app-section-title>
  <p class="__subtitle__destinos">Terminal de Autobuses México Norte</p>
  <p class="__paragraph">La Terminal de Autobuses México Norte, también conocida como Central del Norte, es una de las terminales más importantes de la Ciudad de México por su conectividad y ubicación estratégica. Costa Line te permite viajar desde y hacia México Norte en autobús con un servicio cómodo y seguro, ideal para quienes buscan una opción práctica para trasladarse dentro y fuera de CDMX. Ya sea que viajes por trabajo, turismo o visitas familiares, esta terminal facilita el acceso a múltiples rutas y conexiones.</p>
  <p class="__subtitle__destinos">¿Qué debes considerar al viajar desde México Norte?</p>
  <p class="__paragraph">Te recomendamos llegar con anticipación para ubicar tu sala de abordaje, andén y salida correspondiente. La terminal cuenta con accesos desde transporte público, lo que facilita la llegada desde diferentes zonas de la ciudad. Si viajas con equipaje, considera tiempo adicional para moverte dentro de la central y ubicar tu punto de salida. Comprar tus boletos en línea también te ayuda a planear tu viaje con mayor tranquilidad.</p>
</section>


      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/mexico-norte/lugares.json"></app-destiny-grid>
      </section>

      <p class="__subtitle__destinos">Gastronomía</p>
      <section class="__section __section__cdmx__food">
          <p class="__paragraph__xl">CDMX ofrece una gastronomía única que mezcla tradición y modernidad, desde tacos callejeros hasta alta cocina. Restaurantes y fondas locales permiten experimentar los sabores más representativos de la capital mexicana.</p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/mexico-norte/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Ciudad de México desde y hacia México Norte, con Costa Line!</h2>
              <p class="cta__subtitle">No esperes más para descubrir la capital del país. Tu aventura urbana está a solo un clic de distancia.</p>
              <a href="../../boletos-autobus/mexico-norte.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/mexico-norte/dropdown-preguntas-frecuentes.json"></app-dropdown>
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
customElements.define("page-autobus-a-mexico-norte", AutobusAMexicoNorte);
