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

class PageAeropuertoAIFAEnglish extends HTMLElement {
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
    <h1 class="hero__title">Buses to and from Felipe Ángeles International Airport (AIFA) with Costaline</h1>
    <p class="hero__subtitle">Connect to AIFA quickly, safely, and comfortably. Travel from CDMX and the State of Mexico in modern, air-conditioned buses.</p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">Why travel with Costaline to AIFA?</h2>
    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comfort on the journey</h3>
        <p class="feature-card__description">Modern units, reclining seats, and air conditioning to get to the airport in total comfort.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Easy purchase and competitive fares</h3>
        <p class="feature-card__description">Purchase your tickets online easily and take advantage of affordable prices depending on your route and schedule.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Safe travel</h3>
        <p class="feature-card__description">Trained drivers and safety protocols so you can arrive at your flight with peace of mind.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Direct connection to the airport</h3>
        <p class="feature-card__description">Optimize your transfers with a comfortable alternative to get to and from AIFA without complications.</p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Featured Route: CDMX → AIFA</h2>

    <div class="route-info__card">
      <div class="route-info__timeline">
        <div class="route-info__line"></div>
        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
            <span class="route-info__stop-name">Mexico City</span>
          </div>

          <div class="route-info__stop">
            <span class="route-info__stop-name">AIFA Airport</span>
            <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
          </div>
        </div>
      </div>

      <div class="route-info__details-grid">
        <div class="detail-item">
          <p class="detail-item__label">Duration</p>
          <p class="detail-item__value">Check schedules</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Frequency</p>
          <p class="detail-item__value">Daily departures</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Bus Type</p>
          <p class="detail-item__value">Single-decker</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">What you should know about AIFA</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/acapulco/quebrada-acapulco.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Affordable transfers</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/acapulco/playa-condesa.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Greater security</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/acapulco/costera-miguel-aleman.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Comfortable and accessible</h3>
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
          <span class="faq-item__question">How much is the ticket to AIFA with Costaline?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">The fare depends on the origin, date, and availability. We recommend checking the updated price when purchasing online.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What are the schedules to AIFA?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">We have daily departures from different points. Check the available schedules when selecting your date and origin.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What services do the buses include?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">Air-conditioned units, comfortable seats, and service from trained staff for a safe and practical transfer to the airport.</p>
      </details>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">Travel to AIFA with Costaline!</h2>
    <p class="cta__subtitle">Buy your tickets online and make sure you arrive on time for your flight with a comfortable and reliable transfer.</p>
    <a href="../destinos/autobus-a-aeropuerto-aifa.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">See more about the destination</a>
  </div>
</section>


      <app-cookies-policy></app-cookies-policy>
      
      <app-button-eva-trip></app-button-eva-trip>
    `;
	}
}

customElements.define(
	"page-aeropuerto-aifa-english",
	PageAeropuertoAIFAEnglish,
);
