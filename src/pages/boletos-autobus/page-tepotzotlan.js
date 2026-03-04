import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageTepotzotlan extends HTMLElement {
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
    <h1 class="hero__title">Autobuses a Tepotzotlán con Costaline</h1>
    <p class="hero__subtitle">
      Descubre uno de los Pueblos Mágicos más emblemáticos del Estado de México, lleno de historia, arquitectura y tradición.
    </p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">¿Por qué viajar con Costaline a Tepotzotlán?</h2>

    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Comodidad</h3>
        <p class="feature-card__description">
          Unidades modernas con aire acondicionado y asientos reclinables para disfrutar un viaje agradable.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Precios accesibles</h3>
        <p class="feature-card__description">
          Tarifas económicas para visitar uno de los pueblos más representativos del Estado de México.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Seguridad</h3>
        <p class="feature-card__description">
          Viaja con operadores capacitados y autobuses que cumplen con altos estándares de seguridad.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Destino cultural</h3>
        <p class="feature-card__description">
          Explora sitios históricos, arquitectura virreinal y gastronomía típica dentro de un Pueblo Mágico.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Ruta destacada: Ciudad de México → Tepotzotlán</h2>

    <div class="route-info__card">

      <div class="route-info__timeline">
        <div class="route-info__line"></div>

        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon">
              <span class="icon-bus material-symbols-outlined"></span>
            </div>
            <span class="route-info__stop-name">Ciudad de México (Terminal Norte)</span>
          </div>

          <div class="route-info__stop">
            <span class="route-info__stop-name">Tepotzotlán (Pueblo Mágico)</span>
            <div class="route-info__stop-icon">
              <span class="icon-place material-symbols-outlined"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="route-info__details-grid">
        <div class="detail-item">
          <p class="detail-item__label">Duración</p>
          <p class="detail-item__value">50 min – 1 h 20 min</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Frecuencia</p>
          <p class="detail-item__value">Salidas frecuentes durante el día</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Tipo de autobús</p>
          <p class="detail-item__value">Económico · Primera</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Lugares para visitar en Tepotzotlán</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/tepotzotlan/museo-virreinato-1.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Museo Nacional del Virreinato</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/tepotzotlan/arcos-del-sitio-1.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Arcos del Sitio</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/tepotzotlan/centro-historico-1.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Plaza Principal</h3>
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
          <span class="faq-item__question">¿Cuánto cuesta el boleto a Tepotzotlán?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">
          El precio depende del horario y el tipo de servicio. Consulta el costo actual antes de finalizar tu compra.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Hay salidas desde CDMX?</span>
          <span class="faq-item__icon">
            <span class="icon-arrow-down material-symbols-outlined"></span>
          </span>
        </summary>
        <p class="faq-item__answer">
          Sí, hay salidas frecuentes desde la Terminal Norte a lo largo del día.
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
          Aire acondicionado, asientos reclinables y operadores capacitados para un viaje cómodo.
        </p>
      </details>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">Viaja a Tepotzotlán con Costaline</h2>
    <p class="cta__subtitle">Reserva tu boleto y vive la experiencia de un Pueblo Mágico lleno de historia y encanto.</p>
    <a href="../destinos/autobus-a-tepotzotlan.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      Ver más sobre el destino
    </a>
  </div>
</section>

<app-cookies-policy></app-cookies-policy>

<app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-tepotzotlan", PageTepotzotlan);
