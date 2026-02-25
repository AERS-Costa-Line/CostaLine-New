/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";
import "../../js/slick.js?v=1.0.0";

class PageAcapulcoMaxitunel extends HTMLElement {
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
    <h1 class="hero__title">Autobuses a Acapulco por Maxitúnel con Costaline</h1>
    <p class="hero__subtitle">Llega a Acapulco de forma cómoda, segura y eficiente. Viaja con Costaline utilizando la ruta por Maxitúnel, una de las principales vías de acceso a la zona turística.</p>
  </div>
</section>

<!-- FEATURES -->
<section class="features">
  <div class="container">
    <h2 class="section-title">¿Por qué viajar a Acapulco por Maxitúnel con Costaline?</h2>
    <div class="features__grid">

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-armchair material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Viaje cómodo y sin complicaciones</h3>
        <p class="feature-card__description">Disfruta unidades modernas, asientos confortables y climatización para llegar a Acapulco con una experiencia más relajada.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-pig material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Compra fácil y tarifas accesibles</h3>
        <p class="feature-card__description">Consulta horarios y compra tus boletos en línea. Encuentra opciones ideales según tu fecha de viaje y disponibilidad.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-travel-security material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Traslado seguro</h3>
        <p class="feature-card__description">Operadores capacitados y protocolos de seguridad para un viaje confiable hacia uno de los destinos más visitados de México.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card__icon-wrapper">
          <span class="icon-montain material-symbols-outlined"></span>
        </div>
        <h3 class="feature-card__title">Acceso eficiente por Maxitúnel</h3>
        <p class="feature-card__description">El Maxitúnel es una de las rutas más utilizadas para ingresar a Acapulco y conectar de forma práctica con la zona turística.</p>
      </div>

    </div>
  </div>
</section>

<!-- ROUTE INFO -->
<section class="route-info">
  <div class="container route-info__container">
    <h2 class="section-title">Ruta destacada: CDMX → Acapulco (Acceso por Maxitúnel)</h2>

    <div class="route-info__card">
      <div class="route-info__timeline">
        <div class="route-info__line"></div>
        <div class="route-info__stops">
          <div class="route-info__stop">
            <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
            <span class="route-info__stop-name">Ciudad de México</span>
          </div>

          <div class="route-info__stop">
            <span class="route-info__stop-name">Acapulco</span>
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
          <p class="detail-item__value">2 pisos</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ATTRACTIONS -->
<section class="attractions">
  <div class="container">
    <h2 class="section-title">Disfruta Acapulco</h2>

    <div class="attractions__grid">

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/quebrada-acapulco.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">La Quebrada</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/playa-condesa.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Playa Condesa</h3>
        </div>
      </div>

      <div class="attraction-card">
        <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/costera-miguel-aleman.webp")'></div>
        <div class="attraction-card__content">
          <h3 class="attraction-card__title">Costera Miguel Alemán</h3>
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
          <span class="faq-item__question">¿Qué es el Maxitúnel y por qué es una ruta importante para llegar a Acapulco?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">El Maxitúnel es una vía de acceso que conecta puntos clave de entrada a Acapulco y facilita la llegada hacia la zona turística. Es una de las rutas más utilizadas para ingresar a la ciudad.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Costaline viaja a Acapulco utilizando la ruta por Maxitúnel?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">En distintos servicios, la ruta de acceso puede considerar el paso por Maxitúnel como una vía práctica para llegar a Acapulco. Te recomendamos consultar los detalles de tu viaje al momento de comprar.</p>
      </details>

      <details class="faq-item">
        <summary class="faq-item__summary">
          <span class="faq-item__question">¿Qué servicios incluye el autobús?</span>
          <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
        </summary>
        <p class="faq-item__answer">Unidades climatizadas, asientos confortables y operadores capacitados para un viaje seguro y agradable hacia Acapulco.</p>
      </details>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="container">
    <h2 class="cta__title">¡Viaja a Acapulco por Maxitúnel con Costaline!</h2>
    <p class="cta__subtitle">Reserva hoy mismo y disfruta un viaje cómodo y confiable hacia Acapulco, con acceso práctico a la zona turística.</p>
    <a href="../destinos/autobus-a-acapulco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
  </div>
</section>



      <app-cookies-policy></app-cookies-policy>
      
      <app-button-eva-trip></app-button-eva-trip>
    `;
	}
}

customElements.define("page-acapulco-maxitunel", PageAcapulcoMaxitunel);
