import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageTaxco extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
           <app-cotiza></app-cotiza>

<app-banner-slider
  slides-data='[
    {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/3-clics-web.webp","mediumImage": "../../src/assets/img/banner/tablet/3-clics-tablet.webp", "smallImage": "../../src/assets/img/banner/movil/3-clics-mobile.webp", "link": "#index.html/banner1"},
    {"id": "slide2", "title": "Banner 2", "image": "../../src/assets/img/banner/web/aca-diamante-web.webp", "mediumImage": "../../src/assets/img/banner/tablet/aca-diamante-tablet.webp","smallImage": "../../src/assets/img/banner/movil/aca-diamante-mobile.webp", "link": "#index.html/banner2"},
    {"id": "slide3", "title": "Banner 3", "image": "../../src/assets/img/banner/web/chil-aca-web.webp", "mediumImage": "../../src/assets/img/banner/tablet/chil-aca-tablet.webp","smallImage": "../../src/assets/img/banner/movil/chil-aca-mobile.webp", "link": "#index.html/banner3"}
  ]'
></app-banner-slider>

<app-payments></app-payments>

<!-- HERO -->
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Autobuses a Taxco con Costaline</h1>
    <p class="hero__subtitle">
      Descubre la ciudad de la plata, uno de los Pueblos Mágicos más hermosos de México, viajando cómodo y seguro.
    </p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">¿Por qué viajar con Costaline a Taxco?</h2>

    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comodidad</h3>
        <p class="feature-card__description">
          Unidades con aire acondicionado y asientos reclinables ideales para un viaje corto y placentero.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Precios accesibles</h3>
        <p class="feature-card__description">
          Tarifas competitivas para visitar uno de los destinos más icónicos de Guerrero.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Seguridad</h3>
        <p class="feature-card__description">
          Operadores certificados y unidades con sistemas de seguridad integrados.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Destino imperdible</h3>
        <p class="feature-card__description">
          Calles empedradas, arquitectura colonial y tradiciones únicas en un viaje inolvidable.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Ruta destacada: Ciudad de México → Taxco</h2>

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
            <span class="route-info__stop-name">Taxco</span>
            <div class="route-info__stop-icon">
              <span class="icon-place material-symbols-outlined"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="route-info__details-grid">
        <div class="detail-item">
          <p class="detail-item__label">Duración</p>
          <p class="detail-item__value">2 h 45 min – 3 h 15 min</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Frecuencia</p>
          <p class="detail-item__value">Salidas cada pocas horas</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Tipo de autobús</p>
          <p class="detail-item__value">Primera · Plus</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Lugares para visitar en Taxco</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/taxco/museo-de-plateria.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Museo de la Platería</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/taxco/grutas-cacahuamilpa.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Grutas de Cacahuamilpa</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/taxco/mirador-cristo-monumental.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Mirador del Cristo Monumental</h3>
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
          <span class="faq-item__question">¿Cuánto cuesta el boleto a Taxco?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">
          El precio varía por temporada y tipo de autobús. Consulta la tarifa actual al elegir tu fecha.
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
          Hay salidas frecuentes durante el día desde la Terminal Sur.
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
          Aire acondicionado, asientos reclinables y conductores capacitados.
        </p>
      </details>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">Viaja a Taxco con Costaline</h2>
    <p class="cta__subtitle">Reserva tu boleto y descubre uno de los Pueblos Mágicos más hermosos de México.</p>
    <a href="../destinos/autobus-a-taxco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      Ver más sobre el destino
    </a>
  </div>
</section>

<app-cookies-policy></app-cookies-policy>

<app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-taxco", PageTaxco);
