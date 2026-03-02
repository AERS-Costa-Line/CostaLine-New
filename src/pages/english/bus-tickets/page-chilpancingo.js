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

class PageChilpancingoEnglish extends HTMLElement {
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
    <h1 class="hero__title">Buses to Chilpancingo with Costaline</h1>
    <p class="hero__subtitle">
      Travel to the capital of Guerrero safely, quickly, and reliably. Costaline takes you from CDMX, Morelos, and different cities in the state with modern, air-conditioned units.
    </p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">Why travel with Costaline to Chilpancingo?</h2>

    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comfort and good service</h3>
        <p class="feature-card__description">
          Air-conditioned units, reclining seats, and a stable journey so you can enjoy a comfortable trip to Chilpancingo.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Affordable prices</h3>
        <p class="feature-card__description">
          Costaline offers economical fares to travel to Chilpancingo, in addition to discounts available when purchasing online.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Safety on your way</h3>
        <p class="feature-card__description">
          Certified drivers and safety protocols to guarantee a peaceful trip on every journey.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Strategic connection</h3>
        <p class="feature-card__description">
          Travel directly to the capital of Guerrero and easily connect with routes to Acapulco, Iguala, and more regional destinations.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Featured Route: CDMX Taxqueña → Chilpancingo</h2>

    <div class="route-info__card">

      <div class="route-info__timeline">
        <div class="route-info__line"></div>

        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon">
              <span class="icon-bus material-symbols-outlined"></span>
            </div>
            <span class="route-info__stop-name">CDMX – South Terminal (Taxqueña)</span>
          </div>

          <div class="route-info__stop">
            <span class="route-info__stop-name">Chilpancingo</span>
            <div class="route-info__stop-icon">
              <span class="icon-place material-symbols-outlined"></span>
            </div>
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
          <p class="detail-item__label">Bus Type</p>
          <p class="detail-item__value">Economy / Plus Service</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Places to visit in Chilpancingo</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/chilpancingo/museo-regional-guerrero.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Regional Museum of Guerrero</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/chilpancingo/zoo-zoochilpan.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Zoo Zoochilpan</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/chilpancingo/rio-verde.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Rio Verde</h3>
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
          <span class="faq-item__question">How much is the ticket to Chilpancingo with Costaline?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          The price varies depending on the season and the departure point. Check the current fare on our purchasing platform.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What are the schedules to Chilpancingo?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          We have daily departures from CDMX, Cuernavaca, and other terminals. Check the schedules when choosing your travel date.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">What services does the bus include?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          Air-conditioned units, reclining seats, and trained drivers to offer you a safe trip.
        </p>
      </details>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">Travel to Chilpancingo with Costaline!</h2>
    <p class="cta__subtitle">Buy your ticket today and enjoy a safe, economical, and accessible trip.</p>
    <a href="../destinations/bus-to-chilpancingo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      See more about the destination
    </a>
  </div>
</section>

<app-cookies-policy></app-cookies-policy>

<app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-chilpancingo-english", PageChilpancingoEnglish);
