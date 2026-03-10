/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

class PageMexicoSur extends HTMLElement {
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
          <h1 class="hero__title">Autobuses desde y hacia la Terminal de Autobuses México Sur (Taxqueña) con Costaline</h1>
          <p class="hero__subtitle">Viaja desde Taxqueña de forma cómoda, segura y accesible. Conecta con CDMX y destinos clave del sur en autobuses modernos y climatizados.</p>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="features">
        <div class="container">
          <h2 class="section-title">¿Por qué viajar desde México Sur (Taxqueña) con Costaline?</h2>
          <div class="features__grid">

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-armchair material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Comodidad desde el inicio</h3>
              <p class="feature-card__description">Unidades modernas, asientos confortables y climatización para que tu viaje comience con una experiencia agradable desde Taxqueña.</p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-pig material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Compra fácil y precios accesibles</h3>
              <p class="feature-card__description">Consulta horarios y compra tus boletos en línea en pocos pasos. Aprovecha tarifas competitivas según ruta y temporada.</p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-travel-security material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Viaje seguro</h3>
              <p class="feature-card__description">Operadores capacitados y protocolos de seguridad para que viajes con tranquilidad desde CDMX hacia tu destino.</p>
            </div>

            <div class="feature-card">
              <div class="feature-card__icon-wrapper">
                <span class="icon-montain material-symbols-outlined"></span>
              </div>
              <h3 class="feature-card__title">Ubicación y conectividad</h3>
              <p class="feature-card__description">Taxqueña es una terminal clave al sur de la ciudad, con acceso práctico desde metro y transporte público.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- ROUTE INFO -->
      <section class="route-info">
        <div class="container route-info__container">
          <h2 class="section-title">Ruta destacada: México Sur (Taxqueña) → Destinos Costaline</h2>

          <div class="route-info__card">
            <div class="route-info__timeline">
              <div class="route-info__line"></div>
              <div class="route-info__stops">
                <div class="route-info__stop">
                  <div class="route-info__stop-icon"><span class="icon-bus material-symbols-outlined"></span></div>
                  <span class="route-info__stop-name">México Sur</span>
                </div>

                <div class="route-info__stop">
                  <span class="route-info__stop-name">Tu destino</span>
                  <div class="route-info__stop-icon"><span class="icon-place material-symbols-outlined"></span></div>
                </div>
              </div>
            </div>

            <div class="route-info__details-grid">
              <div class="detail-item">
                <p class="detail-item__label">Duración</p>
                <p class="detail-item__value">Depende del destino</p>
              </div>

              <div class="detail-item">
                <p class="detail-item__label">Frecuencia</p>
                <p class="detail-item__value">Salidas diarias</p>
              </div>

              <div class="detail-item">
                <p class="detail-item__label">Tipo de autobús</p>
                <p class="detail-item__value">Servicio ejecutivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ATTRACTIONS -->
      <section class="attractions">
        <div class="container">
          <h2 class="section-title">Terminal Taxqueña: lo que debes saber</h2>

          <div class="attractions__grid">

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/quebrada-acapulco.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Acceso en metro y transporte público</h3>
              </div>
            </div>

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/playa-condesa.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Zona de abordaje y salas de espera</h3>
              </div>
            </div>

            <div class="attraction-card">
              <div class="attraction-card__image" style='background-image: url("../src/assets/img/destinos-img/acapulco/costera-miguel-aleman.webp")'></div>
              <div class="attraction-card__content">
                <h3 class="attraction-card__title">Servicios para viajeros</h3>
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
                <span class="faq-item__question">¿Cómo llegar a la Terminal México Sur (Taxqueña)?</span>
                <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
              </summary>
              <p class="faq-item__answer">Puedes llegar fácilmente en metro, taxi o transporte público. Taxqueña es una terminal con excelente conectividad al sur de CDMX.</p>
            </details>

            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">¿Puedo comprar boletos de Costaline en línea?</span>
                <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
              </summary>
              <p class="faq-item__answer">Sí. Puedes consultar horarios y comprar tus boletos en línea para asegurar tu lugar antes de llegar a la terminal.</p>
            </details>

            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">¿Con cuánta anticipación debo llegar a Taxqueña?</span>
                <span class="faq-item__icon"><span class="icon-arrow-down material-symbols-outlined"></span></span>
              </summary>
              <p class="faq-item__answer">Te recomendamos llegar al menos 30 a 45 minutos antes de tu salida para ubicar tu sala de abordaje y viajar sin contratiempos.</p>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta">
        <div class="container">
          <h2 class="cta__title">¡Viaja desde México Sur con Costaline!</h2>
          <p class="cta__subtitle">Compra tus boletos en línea y disfruta un viaje cómodo, seguro y accesible desde la Terminal Taxqueña.</p>
          <a href="../destinos/autobus-a-mexico-sur.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Ver más sobre el destino</a>
        </div>
      </section>
      
    `;
  }
}
customElements.define("page-mexico-sur", PageMexicoSur);
