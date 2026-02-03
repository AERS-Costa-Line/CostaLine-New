import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageCiudadAltamirano extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-banner-slider
            slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/3-clics-web.webp","mediumImage": "../../src/assets/img/banner/tablet/3-clics-tablet.webp", "smallImage": "../../src/assets/img/banner/movil/3-clics-mobile.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../../src/assets/img/banner/web/aca-diamante-web.webp", "mediumImage": "../../src/assets/img/banner/tablet/aca-diamante-tablet.webp","smallImage": "../../src/assets/img/banner/movil/aca-diamante-mobile.webp", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../../src/assets/img/banner/web/chil-aca-web.webp", "mediumImage": "../../src/assets/img/banner/tablet/chil-aca-tablet.webp","smallImage": "../../src/assets/img/banner/movil/chil-aca-mobile.webp", "link": "#index.html/banner3"}
            ]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <!-- HERO -->
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Autobuses a Ciudad Altamirano con Costaline</h1>
    <p class="hero__subtitle">
      Viaja seguro y cómodo hacia Ciudad Altamirano, Guerrero. Disfruta unidades modernas, operadores capacitados y salidas diarias desde CDMX y otros puntos del país.
    </p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">¿Por qué viajar con Costaline a Ciudad Altamirano?</h2>
    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Viaje cómodo</h3>
        <p class="feature-card__description">
          Unidades climatizadas, asientos amplios y servicios que hacen más agradable tu trayecto.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Precios accesibles</h3>
        <p class="feature-card__description">
          Tarifas competitivas y descuentos disponibles al comprar en línea.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Seguridad garantizada</h3>
        <p class="feature-card__description">
          Personal capacitado y protocolos que cuidan tu tranquilidad en cada viaje.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Conectividad regional</h3>
        <p class="feature-card__description">
          Ciudad Altamirano es un punto estratégico para conectar con otros destinos de la región.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Ruta destacada: CDMX Sur → Ciudad Altamirano</h2>

    <div class="route-info__card">
      <div class="route-info__timeline">
        <div class="route-info__line"></div>
        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon">
              <span class="icon-bus material-symbols-outlined"></span>
            </div>
            <span class="route-info__stop-name">Ciudad de México</span>
          </div>
          <div class="route-info__stop">
            <span class="route-info__stop-name">Ciudad Altamirano</span>
            <div class="route-info__stop-icon">
              <span class="icon-place material-symbols-outlined"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="route-info__details-grid">
        <div class="detail-item">
          <p class="detail-item__label">Duración</p>
          <p class="detail-item__value">6 h 30 min – 7 h</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Frecuencia</p>
          <p class="detail-item__value">Salidas diarias</p>
        </div>

        <div class="detail-item">
          <p class="detail-item__label">Tipo de autobús</p>
          <p class="detail-item__value">Servicio Primera / Plus</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Descubre Ciudad Altamirano</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cd-altamirano/zocalo-cd-altamirano.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Centro de Ciudad Altamirano</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cd-altamirano/rio-cutzamala.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Río Balsas</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/cd-altamirano/catedral-cd-altamirano.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Catedral de Ciudad Altamirano</h3>
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
          <span class="faq-item__question">¿Cuánto cuesta el boleto a Ciudad Altamirano?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          Los precios varían según temporada y tipo de servicio. Consulta el costo actualizado directamente en la plataforma de compra de Costaline.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué horarios hay?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          Contamos con salidas diarias desde CDMX y otros orígenes. Revisa los horarios disponibles al seleccionar tu fecha de viaje.
        </p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué servicios incluye el autobús?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">
          Autobuses climatizados, asientos confortables y operadores con experiencia.
        </p>
      </details>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">¡Viaja a Ciudad Altamirano con Costaline!</h2>
    <p class="cta__subtitle">Reserva tu boleto y disfruta un viaje seguro y cómodo hacia Guerrero.</p>
    <a href="../destinos/autobus-a-cd-altamirano.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
      Ver más sobre el destino
    </a>
  </div>
</section>


        `;
	}
}
customElements.define("page-ciudad-altamirano", PageCiudadAltamirano);
