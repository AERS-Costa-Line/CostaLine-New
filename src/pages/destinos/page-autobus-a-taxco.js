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

class AutobusATaxco extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
          {"id": "slide1", "title": "Taxco", "image": "../../src/assets/img/banner/web/banner-taxco.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-taxco.webp", "smallImage": "../../src/assets/img/banner/movil/banner-taxco.webp", "link": "#index.html/banner1"}]'
      ></app-banner-slider>

      <app-payments></app-payments>

      <!-- INTRO -->
      <section class="__section __section__destiny__destinations">
          <app-section-title section-title="Viaja a Taxco en autobús con Costa Line"></app-section-title>
          
          <p class="__subtitle__destinos">Taxco</p>

          <p class="__paragraph">
            Taxco de Alarcón, Pueblo Mágico de Guerrero, es uno de los destinos coloniales más emblemáticos de México. 
            Conocido mundialmente por su tradición platera, sus calles empedradas, arquitectura virreinal y su icónica 
            Parroquia de Santa Prisca, Taxco es perfecto para una escapada cultural, tours familiares y fin de semana.
          </p>

          <p class="__paragraph">
            Costa Line y Costa Line Turistar ofrecen salidas cómodas y accesibles hacia Taxco desde diferentes ciudades. 
            Llega al corazón del pueblo sin complicaciones y disfruta una experiencia única.
          </p>

          <p class="__subtitle__destinos">¿Qué lugares visitar en Taxco?</p>

          <p class="__paragraph">
            Explora la impresionante Parroquia de Santa Prisca, sube al Teleférico para tener vistas panorámicas del valle,
            recorre el Cristo Monumental —uno de los mejores miradores del país— y camina por el Zócalo repleto de tiendas de plata,
            cafés, galerías y arquitectura histórica.
          </p>
      </section>

      <!-- GRID -->
      <section class="__section__grid" id="destiny-grid-section">
          <app-destiny-grid grid-src="../../src/data/destinos/taxco/lugares.json"></app-destiny-grid>
      </section>

      <!-- GASTRONOMÍA -->
      <p class="__subtitle__destinos">Gastronomía</p>

      <section class="__section __section__ixtapa__food">
          <p class="__paragraph__xl">
            La cocina típica de Taxco combina sabores tradicionales guerrerenses y platillos regionales únicos.
            Prueba el famoso mole rosa, el pozole blanco de Guerrero, tamales de frijol, jumiles tostados y la chocolatería artesanal
            que encontrarás en cafeterías alrededor del centro histórico.
          </p>
          <article class="container-cards__food">
              <app-card-open-modal cards-data-src="../../src/data/destinos/taxco/platillos.json"></app-card-open-modal>
          </article>
      </section>

      <!-- CTA -->
      <section class="cta">
          <div class="container">
              <h2 class="cta__title">¡Viaja a Taxco con Costa Line!</h2>
              <p class="cta__subtitle">
                Disfruta uno de los Pueblos Mágicos más hermosos de México, con historia, cultura y tradición platera.
              </p>
              <a href="../../boletos-autobus/taxco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Consulta horarios y compra tu boleto</a>
          </div>
      </section>

      <!-- PREGUNTAS FRECUENTES -->
      <section class="__section __section__destiny__ask">
          <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
          <article class="__grid-cards-container__dropdown" id="dropdowns-container">
              <app-dropdown items-src="../../src/data/destinos/taxco/dropdown-preguntas-frecuentes.json"></app-dropdown>
          </article>
      </section>

      <!-- OTROS DESTINOS -->
      <section class="__section __section__ixtapa__other">
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

customElements.define("page-autobus-a-taxco", AutobusATaxco);
