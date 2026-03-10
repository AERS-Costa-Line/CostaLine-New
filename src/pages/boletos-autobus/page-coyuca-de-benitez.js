/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageCoyucaDeBenitez extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-banner-slider
          slides-data='[
              {
                  "id": "slide1", 
                  "title": "Banner 1", 
                  "image": "../../src/assets/img/home/banners/web/banner-viaja-en-semana-santa-en-3-clics-descuento-10-de-regreso.webp",
                  "mediumImage": "../../src/assets/img/home/banners/tablet/banner-viaja-en-semana-santa-en-3-clics-descuento-10-de-regreso.webp", 
                  "smallImage": "../../src/assets/img/home/banners/mobile/banner-viaja-en-semana-santa-en-3-clics-descuento-10-de-regreso.webp", 
                  "link": "./descuentos/temporada-semana-santa.html"
              },

              {
                  "id": "slide2", 
                  "title": "Banner 2", 
                  "image": "../../src/assets/img/banner/web/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp", 
                  "mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp",
                  "smallImage": "../../src/assets/img/banner/movil/banner-aca-diamante.webp", 
                  "link": "./boletos-autobus/acapulco-diamante.html"
              },
              
              {
                  "id": "slide3", 
                  "title": "Banner 3", 
                  "image": "../../src/assets/img/home/banners/web/banner-nuevas-rutas-viaj-desde-taxco-a-acapulco.webp",
                  "mediumImage": "../../src/assets/img/home/banners/tablet/banner-nuevas-rutas-viaj-desde-taxco-a-acapulco.webp", 
                  "smallImage": "../../src/assets/img/home/banners/mobile/banner-nuevas-rutas-viaj-desde-taxco-a-acapulco.webp", 
                  "link": "./boletos-autobus/acapulco.html"
              }
          ]'
      >
      </app-banner-slider>

      <app-payments></app-payments>

      <!-- HERO -->
      <section class="hero">
        <div class="hero__content">
          <h1 class="hero__title">Autobuses a Coyuca de Benítez con Costaline</h1>
          <p class="hero__subtitle">
            Viaja cómodo y seguro a Coyuca de Benítez. Disfruta unidades modernas, operadores profesionales y salidas diarias desde varios puntos del país.
          </p>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="features">
        <div class="container">
          <h2 class="section-title">¿Por qué viajar con Costaline a Coyuca de Benítez?</h2>
          <div class="features__grid">

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-armchair material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Confort garantizado</h3>
              <p class="feature-card__description">
                Autobuses cómodos con aire acondicionado, asientos reclinables y servicios pensados para tu descanso.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-pig material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Precios accesibles</h3>
              <p class="feature-card__description">
                Tarifas competitivas y promociones disponibles al comprar en línea.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-travel-security material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Seguridad en tu viaje</h3>
              <p class="feature-card__description">
                Operadores capacitados y protocolos confiables para un trayecto seguro.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-montain material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Cercanía con la costa</h3>
              <p class="feature-card__description">
                Coyuca de Benítez es un destino atractivo por su laguna, playas y naturaleza tropical.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- ROUTES 3 DESTACADAS -->
      <section class="route-info">
        <div class="container route-info__container">
          <h2 class="section-title">Rutas destacadas hacia Coyuca de Benítez</h2>

          <!-- CARD 1 -->
          <div class="route-info__card">
            <h3 class="route-info__subtitle">Ciudad de México Sur → Coyuca de Benítez</h3>

            <div class="route-info__timeline">
              <div class="route-info__line"></div>
              <div class="route-info__stops">
                <div class="route-info__stop">
                  <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
                  <span class="route-info__stop-name">Ciudad de México</span>
                </div>
                <div class="route-info__stop">
                  <span class="route-info__stop-name">Coyuca de Benítez</span>
                  <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
                </div>
              </div>
            </div>

            <div class="route-info__details-grid">
              <div class="detail-item">
                <p class="detail-item__label">Duración</p>
                <p class="detail-item__value">7 h – 7 h 30 min</p>
              </div>
              <div class="detail-item">
                <p class="detail-item__label">Frecuencia</p>
                <p class="detail-item__value">Salidas diarias</p>
              </div>
              <div class="detail-item">
                <p class="detail-item__label">Servicio</p>
                <p class="detail-item__value">Primera / Plus</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ATTRACTIONS -->
      <section class="attractions">
        <div class="container">
          <h2 class="section-title">Descubre Coyuca de Benítez</h2>

          <div class="attractions__grid">

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/coyuca-de-benitez/laguna-coyuca.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Laguna de Coyuca</h3>
              </div>
            </div>

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/coyuca-de-benitez/cascada-el-salto.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Casacda el Salto</h3>
              </div>
            </div>

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/coyuca-de-benitez/el-carrizal.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">El Carrizal</h3>
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
                <span class="faq-item__question">¿Cuánto cuesta el boleto a Coyuca de Benítez?</span>
                <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
              </summary>
              <p class="faq-item__answer">
                El precio puede variar según temporada y servicio. Consulta el costo actualizado al seleccionar tu fecha en la plataforma de Costaline.
              </p>
            </details>

            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">¿Qué horarios hay?</span>
                <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
              </summary>
              <p class="faq-item__answer">
                Contamos con salidas desde Acapulco, Chilpancingo y CDMX. Los horarios dependen del día y disponibilidad.
              </p>
            </details>

            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">¿Qué servicios incluye el autobús?</span>
                <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
              </summary>
              <p class="faq-item__answer">
                Autobuses climatizados, asientos cómodos y operadores certificados.
              </p>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta">
        <div class="container">
          <h2 class="cta__title">¡Viaja a Coyuca de Benítez con Costaline!</h2>
          <p class="cta__subtitle">Reserva tu boleto y disfruta un viaje seguro hacia este destino costero.</p>
          <a href="../destinos/autobus-a-coyuca-de-benitez.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">
            Ver más sobre el destino
          </a>
        </div>
      </section>

    `;
  }
}
customElements.define("page-coyuca-de-benitez", PageCoyucaDeBenitez);
