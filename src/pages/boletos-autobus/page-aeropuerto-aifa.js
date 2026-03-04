/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";

class PageAeropuertoAIFA extends HTMLElement {
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
    <h1 class="hero__title">Autobuses desde y hacia el Aeropuerto Internacional Felipe Ángeles (AIFA) con Costaline</h1>
    <p class="hero__subtitle">Conecta con el AIFA de forma rápida, segura y cómoda. Viaja desde CDMX y el Estado de México en autobuses modernos y climatizados.</p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">¿Por qué viajar con Costaline al AIFA?</h2>
    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comodidad en el trayecto</h3>
        <p class="feature-card__description">Unidades modernas, asientos reclinables y climatización para llegar al aeropuerto con total confort.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Compra fácil y tarifas competitivas</h3>
        <p class="feature-card__description">Adquiere tus boletos en línea de forma sencilla y aprovecha precios accesibles según tu ruta y horario.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Viaje seguro</h3>
        <p class="feature-card__description">Operadores capacitados y protocolos de seguridad para que llegues con tranquilidad a tu vuelo.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Conexión directa al aeropuerto</h3>
        <p class="feature-card__description">Optimiza tus traslados con una alternativa cómoda para llegar y salir del AIFA sin complicaciones.</p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Ruta destacada: CDMX → AIFA</h2>

    <div class="route-info__card">
      <div class="route-info__timeline">
        <div class="route-info__line"></div>
        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
            <span class="route-info__stop-name">Ciudad de México</span>
          </div>

          <div class="route-info__stop">
            <span class="route-info__stop-name">Aeropuerto AIFA</span>
            <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
          </div>
        </div>
      </div>

      <div class="route-info__details-grid">
        <div class="detail-item">
          <p class="detail-item__label">Duración</p>
          <p class="detail-item__value">Consulta horarios</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Frecuencia</p>
          <p class="detail-item__value">Salidas diarias</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Tipo de autobús</p>
          <p class="detail-item__value">1 piso</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Lo que debes saber del AIFA</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/quebrada-acapulco.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Traslados económicos</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/playa-condesa.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Mayor seguridad</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/costera-miguel-aleman.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Cómodo y accesible</h3>
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
          <span class="faq-item__question">¿Cuánto cuesta el boleto al AIFA con Costaline?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">La tarifa depende del origen, la fecha y la disponibilidad. Te recomendamos consultar el precio actualizado al momento de comprar en línea.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué horarios hay hacia el AIFA?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">Contamos con salidas diarias desde distintos puntos. Revisa los horarios disponibles al seleccionar tu fecha y origen.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué servicios incluyen los autobuses?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">Unidades climatizadas, asientos cómodos y atención de personal capacitado para un traslado seguro y práctico al aeropuerto.</p>
      </details>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">¡Viaja al AIFA con Costaline!</h2>
    <p class="cta__subtitle">Compra tus boletos en línea y asegúrate de llegar a tiempo a tu vuelo con un traslado cómodo y confiable.</p>
    <a href="../destinos/autobus-a-aeropuerto-aifa.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
  </div>
</section>


      <app-cookies-policy></app-cookies-policy>
      
      <app-button-eva-trip></app-button-eva-trip>
    `;
	}
}

customElements.define("page-aeropuerto-aifa", PageAeropuertoAIFA);
