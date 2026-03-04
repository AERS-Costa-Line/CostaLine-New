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
import "../../../js/slick.js?v=1.0.0";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageCiudadDeMexicoEnglish extends HTMLElement {
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
    <h1 class="hero__title">Buses to Mexico City with Costaline</h1>
    <p class="hero__subtitle">Arrive in the nation's capital with comfort, safety, and excellent schedules. Costaline connects CDMX with the main destinations in Guerrero and Morelos.</p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">Why travel with Costaline to Mexico City?</h2>
    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Guaranteed comfort</h3>
        <p class="feature-card__description">Modern units, reclining seats, and air conditioning on all services.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Affordable fares</h3>
        <p class="feature-card__description">Competitive prices and promotions when buying your tickets online.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Safe travel</h3>
        <p class="feature-card__description">Trained drivers and protocols that guarantee a reliable transfer.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Strategic connections</h3>
        <p class="feature-card__description">CDMX is a key point for connecting with destinations throughout Mexico.</p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTES INFO (3 rutas destacadas) -->
<section class="route-info">
  <div class="container route-info__container">

    <h2 class="section-title">Featured routes to Mexico City</h2>

    <div class="route-info__grid">

      <!-- ACAPULCO → CDMX -->
      <div class="route-info__card" style="margin-bottom: 2rem;">
        <div class="route-info__timeline">
          <div class="route-info__line"></div>
          <div class="route-info__stops">
            <div class="route-info__stop">
              <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
              <span class="route-info__stop-name">Acapulco</span>
            </div>
            <div class="route-info__stop">
              <span class="route-info__stop-name">CDMX South (Taxqueña)</span>
              <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
            </div>
          </div>
        </div>

        <div class="route-info__details-grid">
          <div class="detail-item">
            <p class="detail-item__label">Duration</p>
            <p class="detail-item__value">5 h – 6 h</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Frequency</p>
            <p class="detail-item__value">Daily departures</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Bus type</p>
            <p class="detail-item__value">First / Plus</p>
          </div>
        </div>
      </div>

      <!-- CHILPANCINGO → CDMX -->
      <div class="route-info__card" style="margin-bottom: 2rem;">
        <div class="route-info__timeline">
          <div class="route-info__line"></div>
          <div class="route-info__stops">
            <div class="route-info__stop">
              <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
              <span class="route-info__stop-name">Chilpancingo</span>
            </div>
            <div class="route-info__stop">
              <span class="route-info__stop-name">CDMX South (Taxqueña)</span>
              <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
            </div>
          </div>
        </div>

        <div class="route-info__details-grid">
          <div class="detail-item">
            <p class="detail-item__label">Duration</p>
            <p class="detail-item__value">3 h 15 min – 4 h</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Frequency</p>
            <p class="detail-item__value">Daily departures</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Bus type</p>
            <p class="detail-item__value">Economy / Plus</p>
          </div>
        </div>
      </div>

      <!-- CUERNAVACA → CDMX -->
      <div class="route-info__card">
        <div class="route-info__timeline">
          <div class="route-info__line"></div>
          <div class="route-info__stops">
            <div class="route-info__stop">
              <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
              <span class="route-info__stop-name">Cuernavaca</span>
            </div>
            <div class="route-info__stop">
              <span class="route-info__stop-name">CDMX South (Taxqueña)</span>
              <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
            </div>
          </div>
        </div>

        <div class="route-info__details-grid">
          <div class="detail-item">
            <p class="detail-item__label">Duration</p>
            <p class="detail-item__value">1 h 20 min – 1 h 40 min</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Frequency</p>
            <p class="detail-item__value">Constant departures</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Bus type</p>
            <p class="detail-item__value">First / Plus / Luxury</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Discover Mexico City</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/cdmx/plaza-de-la-constitucion.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Historic Center</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/cdmx/palacio-de-bellas-artes.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Palace of Fine Arts</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/cdmx/bosque-chapultepec.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Chapultepec Forest</h3>
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
          <span class="faq-item__question">How much is the ticket to Mexico City?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">The cost varies depending on the origin, season, and type of service. Check the updated fare on the purchasing platform.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What schedules are available?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">The routes to CDMX have daily departures and, in some cases, constant departures throughout the day.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What services does the bus include?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">Depending on the service: air conditioning, reclining seats, leg rests, and onboard entertainment.</p>
      </details>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">Travel to Mexico City with Costaline!</h2>
    <p class="cta__subtitle">Book your ticket and enjoy a safe and comfortable trip to the nation's capital.</p>
    <a href="../destinations/bus-to-ciudad-de-mexico.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      See more about the destination
    </a>
  </div>
</section>



        `;
	}
}
customElements.define(
	"page-ciudad-de-mexico-english",
	PageCiudadDeMexicoEnglish,
);
