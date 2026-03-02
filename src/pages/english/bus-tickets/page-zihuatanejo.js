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

class PageZihuatanejoEnglish extends HTMLElement {
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
          <h1 class="hero__title">Buses to Zihuatanejo with Costaline</h1>
          <p class="hero__subtitle">Travel to one of the most beautiful beach destinations in Guerrero with modern units, comfortable seats, and certified drivers.</p>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="features">
        <div class="container">
          <h2 class="section-title">Why travel with Costaline to Zihuatanejo?</h2>

          <div class="features__grid">

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-armchair material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Guaranteed comfort</h3>
              <p class="feature-card__description">Units with air conditioning, reclining seats, and spaces designed for a relaxed trip.</p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-pig material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Competitive fares</h3>
              <p class="feature-card__description">Affordable prices and exclusive promotions when buying online.</p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-travel-security material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Safe travel</h3>
              <p class="feature-card__description">Qualified drivers and safety systems in each unit.</p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-montain material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Paradise destination</h3>
              <p class="feature-card__description">Enjoy clean beaches, spectacular bays, and a quiet vibe ideal for vacationing.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- ROUTE INFO -->
      <section class="route-info">
        <div class="container route-info__container">
          <h2 class="section-title">Featured Route: Mexico City → Zihuatanejo</h2>

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
                  <span class="route-info__stop-name">Zihuatanejo</span>
                  <div class="route-info__stop-icon">
                    <span class="icon-place material-symbols-outlined"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="route-info__details-grid">
              <div class="detail-item">
                <p class="detail-item__label">Duration</p>
                <p class="detail-item__value">8 h – 9 h</p>
              </div>

              <div class="detail-item">
                <p class="detail-item__label">Frequency</p>
                <p class="detail-item__value">Daily departures in the morning and evening</p>
              </div>

              <div class="detail-item">
                <p class="detail-item__label">Bus type</p>
                <p class="detail-item__value">First / Plus</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ATTRACTIONS -->
      <section class="attractions">
        <div class="container">
          <h2 class="section-title">Places to visit in Zihuatanejo</h2>

          <div class="attractions__grid">

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/ixtapa/playa-el-palmar.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">El Palmar Beach</h3>
              </div>
            </div>

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/ixtapa/playa-la-ropa.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">La Ropa Beach</h3>
              </div>
            </div>

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../../src/assets/img/destinos-img/ixtapa/isla-ixtapa.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Ixtapa Island</h3>
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
                <span class="faq-item__question">How much is the ticket to Zihuatanejo?</span>
                <span class="faq-item__icon">
                  <span class="icon-arrow-down material-symbols-outlined"></span>
                </span>
              </summary>
              <p class="faq-item__answer">The price varies by season and bus type. Check the updated cost when choosing your date.</p>
            </details>

            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">What are the schedules from CDMX?</span>
                <span class="faq-item__icon">
                  <span class="icon-arrow-down material-symbols-outlined"></span>
                </span>
              </summary>
              <p class="faq-item__answer">There are daily departures, mainly in the morning and at night.</p>
            </details>

            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">What services does the bus include?</span>
                <span class="faq-item__icon">
                  <span class="icon-arrow-down material-symbols-outlined"></span>
                </span>
              </summary>
              <p class="faq-item__answer">Air conditioning, reclining seats, a restroom, and trained drivers for your safety.</p>
            </details>

          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta">
        <div class="container">
          <h2 class="cta__title">Travel to Zihuatanejo with Costaline</h2>
          <p class="cta__subtitle">Book your ticket and enjoy one of the best beach destinations in the Pacific.</p>
          <a href="../destinations/bus-to-zihuatanejo.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
            See more about the destination
          </a>
        </div>
      </section>

      <app-cookies-policy></app-cookies-policy>

      <app-button-eva-trip></app-button-eva-trip>

    `;
	}
}
customElements.define("page-zihuatanejo-english", PageZihuatanejoEnglish);
