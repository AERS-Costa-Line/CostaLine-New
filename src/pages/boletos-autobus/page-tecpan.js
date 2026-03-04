/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageTecpan extends HTMLElement {
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
    <h1 class="hero__title">Autobuses a Tecpan con Costaline</h1>
    <p class="hero__subtitle">
      Viaja cómodo y seguro a la Costa Grande de Guerrero y descubre un destino auténtico y lleno de tradiciones.
    </p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">¿Por qué viajar con Costaline a Tecpan?</h2>

    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comodidad</h3>
        <p class="feature-card__description">
          Unidades modernas con aire acondicionado y asientos reclinables para un viaje placentero.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Precios accesibles</h3>
        <p class="feature-card__description">
          Tarifas competitivas para viajar de forma económica por la Costa Grande.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Seguridad</h3>
        <p class="feature-card__description">
          Operadores capacitados y unidades que cumplen con estándares de seguridad.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Destino tranquilo</h3>
        <p class="feature-card__description">
          Disfruta un ambiente relajado, gastronomía local y la esencia de la Costa Grande.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Ruta destacada: Ciudad de México → Tecpan</h2>

    <div class="route-info__card">

      <div class="route-info__timeline">
        <div class="route-info__line"></div>

        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon">
              <span class="icon-bus material-symbols-outlined"></span>
            </div>
            <span class="route-info__stop-name">Ciudad de México (Terminal Sur)</span>
          </div>

          <div class="route-info__stop">
            <span class="route-info__stop-name">Tecpan de Galeana</span>
            <div class="route-info__stop-icon">
              <span class="icon-place material-symbols-outlined"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="route-info__details-grid">
        <div class="detail-item">
          <p class="detail-item__label">Duración</p>
          <p class="detail-item__value">6 h 30 min – 8 h 00 min</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Frecuencia</p>
          <p class="detail-item__value">Todos los dias</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Tipo de autobús</p>
          <p class="detail-item__value">Primera / Plus</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Lugares para visitar en Tecpan</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/tecpan/plaza-civica-1.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Plaza Civica de Tecpan</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/tecpan/rio-tecpan-1.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Rio Tecpan</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/tecpan/laguna-mitla-1.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Laguna de Mitla</h3>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="container faq__container">
    <h2 class="section-title">Preguntas frecuentes</h2>

    <div class="faq__list">

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Cuánto cuesta el boleto a Tecpan?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">
          El precio puede variar según la fecha y el tipo de servicio. Consulta el costo actual al seleccionar tu horario.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué horarios hay desde CDMX?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">
          Hay salidas programadas a lo largo del día desde la Terminal Sur.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué servicios incluye el autobús?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">
          Aire acondicionado, asientos reclinables y operadores capacitados.
        </p>
      </details>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">Viaja a Tecpan con Costaline</h2>
    <p class="cta__subtitle">Reserva tu boleto y disfruta un viaje cómodo por la Costa Grande.</p>
    <a href="../destinos/autobus-a-tecpan.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      Ver más sobre el destino
    </a>
  </div>
</section>

<app-cookies-policy></app-cookies-policy>

<app-button-eva-trip></app-button-eva-trip>


        `;
	}
}
customElements.define("page-tecpan", PageTecpan);
