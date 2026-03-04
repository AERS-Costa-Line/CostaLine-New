/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageCiudadDeMexico extends HTMLElement {
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
    <h1 class="hero__title">Autobuses a Ciudad de México con Costaline</h1>
    <p class="hero__subtitle">
      Llega a la capital del país con comodidad, seguridad y excelentes horarios. Costaline conecta CDMX con los principales destinos de Guerrero y Morelos.
    </p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">¿Por qué viajar con Costaline a Ciudad de México?</h2>
    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comodidad garantizada</h3>
        <p class="feature-card__description">
          Unidades modernas, asientos reclinables y aire acondicionado en todos los servicios.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Tarifas accesibles</h3>
        <p class="feature-card__description">
          Precios competitivos y promociones al comprar tus boletos en línea.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Viaje seguro</h3>
        <p class="feature-card__description">
          Operadores capacitados y protocolos que garantizan un traslado confiable.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Conexiones estratégicas</h3>
        <p class="feature-card__description">
          CDMX es un punto clave para conectar con destinos en todo México.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTES INFO (3 rutas destacadas) -->
<section class="route-info">
  <div class="container route-info__container">

    <h2 class="section-title">Rutas destacadas hacia Ciudad de México</h2>

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
              <span class="route-info__stop-name">CDMX Sur (Taxqueña)</span>
              <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
            </div>
          </div>
        </div>

        <div class="route-info__details-grid">
          <div class="detail-item">
            <p class="detail-item__label">Duración</p>
            <p class="detail-item__value">5 h – 6 h</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Frecuencia</p>
            <p class="detail-item__value">Salidas diarias</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Tipo de autobús</p>
            <p class="detail-item__value">Primera / Plus</p>
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
              <span class="route-info__stop-name">CDMX Sur (Taxqueña)</span>
              <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
            </div>
          </div>
        </div>

        <div class="route-info__details-grid">
          <div class="detail-item">
            <p class="detail-item__label">Duración</p>
            <p class="detail-item__value">3 h 15 min – 4 h</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Frecuencia</p>
            <p class="detail-item__value">Salidas diarias</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Tipo de autobús</p>
            <p class="detail-item__value">Económico / Plus</p>
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
              <span class="route-info__stop-name">CDMX Sur (Taxqueña)</span>
              <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
            </div>
          </div>
        </div>

        <div class="route-info__details-grid">
          <div class="detail-item">
            <p class="detail-item__label">Duración</p>
            <p class="detail-item__value">1 h 20 min – 1 h 40 min</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Frecuencia</p>
            <p class="detail-item__value">Salidas constantes</p>
          </div>
          <div class="detail-item">
            <p class="detail-item__label">Tipo de autobús</p>
            <p class="detail-item__value">Primera / Plus / Lujo</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Descubre Ciudad de México</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cdmx/plaza-de-la-constitucion.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Centro Histórico</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cdmx/palacio-de-bellas-artes.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Palacio de Bellas Artes</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cdmx/bosque-chapultepec.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Bosque de Chapultepec</h3>
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
          <span class="faq-item__question">¿Cuánto cuesta el boleto a Ciudad de México?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          El costo varía según origen, temporada y tipo de servicio. Consulta la tarifa actualizada en la plataforma de compra.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué horarios hay disponibles?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          Las rutas hacia CDMX cuentan con salidas diarias y, en algunos casos, salidas constantes durante el día.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué servicios incluye el autobús?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          Dependiendo del servicio: aire acondicionado, asientos reclinables, descansapiernas y entretenimiento a bordo.
        </p>
      </details>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">¡Viaja a Ciudad de México con Costaline!</h2>
    <p class="cta__subtitle">
      Reserva tu boleto y disfruta un viaje seguro y cómodo hacia la capital del país.
    </p>
    <a href="../destinos/autobus-a-ciudad-de-mexico.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      Ver más sobre el destino
    </a>
  </div>
</section>



        `;
	}
}
customElements.define("page-ciudad-de-mexico", PageCiudadDeMexico);
