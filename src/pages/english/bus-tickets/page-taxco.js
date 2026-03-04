/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-card-open-modal.js";
import "../../../components/app-dropdown.js";
import "../../../components/app-card-destination-opacity.js";
import "../../../components/app-slider-opacity.js";
import "../../../components/app-modal-multi-image.js";
import "../../../components/app-modal-image.js";

/*-------------------------SCRIPTS---------------------------*/

class PageTaxcoEnglish extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
           <app-cotiza></app-cotiza>

<app-banner-slider
  slides-data='[
    {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp", "smallImage": "../../src/assets/img/banner/movil/banner-3-clics.webp", "link": "#index.html/banner1"},
    {"id": "slide2", "title": "Banner 2", "image": "../../src/assets/img/banner/web/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp", "mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp","smallImage": "../../src/assets/img/banner/movil/banner-aca-diamante.webp", "link": "#index.html/banner2"},
    {"id": "slide3", "title": "Banner 3", "image": "../../src/assets/img/banner/web/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp", "mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp","smallImage": "../../src/assets/img/banner/movil/banner-chil-aca.webp", "link": "#index.html/banner3"}
  ]'
></app-banner-slider>

<app-payments></app-payments>

<!-- HERO -->
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Buses to Taxco with Costaline</h1>
    <p class="hero__subtitle">Discover the city of silver, one of the most beautiful Magical Towns in Mexico, traveling comfortably and safely.</p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">Why travel with Costaline to Taxco?</h2>

    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comfort</h3>
        <p class="feature-card__description">Air-conditioned units and reclining seats ideal for a short and pleasant trip.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Affordable prices</h3>
        <p class="feature-card__description">Competitive fares to visit one of the most iconic destinations in Guerrero.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Safety</h3>
        <p class="feature-card__description">Certified drivers and units with integrated security systems.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Unmissable destination</h3>
        <p class="feature-card__description">Cobblestone streets, colonial architecture, and unique traditions on an unforgettable trip.</p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Featured Route: Mexico City → Taxco</h2>

    <div class="route-info__card">

      <div class="route-info__timeline">
        <div class="route-info__line"></div>

        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon">
              <span class="icon-bus material-symbols-outlined"></span>
            </div>
            <span class="route-info__stop-name">Mexico City (South Terminal)</span>
          </div>

          <div class="route-info__stop">
            <span class="route-info__stop-name">Taxco</span>
            <div class="route-info__stop-icon">
              <span class="icon-place material-symbols-outlined"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="route-info__details-grid">
        <div class="detail-item">
          <p class="detail-item__label">Duration</p>
          <p class="detail-item__value">2 h 45 min – 3 h 15 min</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Frequency</p>
          <p class="detail-item__value">Departures every few hours</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Bus type</p>
          <p class="detail-item__value">First · Plus</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Places to visit in Taxco</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/taxco/museo-de-plateria.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Silver Museum</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/taxco/grutas-cacahuamilpa.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Cacahuamilpa Caves</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/taxco/mirador-cristo-monumental.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Christ the Redeemer Viewpoint</h3>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="container faq__container">
    <h2 class="section-title">Frequently Asked Questions</h2>

    <div class="faq__list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">How much is the ticket to Taxco?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">The price varies by season and bus type. Check the current fare when choosing your date.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What are the schedules from CDMX?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">There are frequent departures during the day from the South Terminal.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What services does the bus include?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">Air conditioning, reclining seats, and trained drivers.</p>
      </details>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">Travel to Taxco with Costaline</h2>
    <p class="cta__subtitle">Book your ticket and discover one of the most beautiful Magical Towns in Mexico.</p>
    <a href="../destinations/bus-to-taxco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      See more about the destination
    </a>
  </div>
</section>

<app-cookies-policy></app-cookies-policy>

<app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-taxco-english", PageTaxcoEnglish);
