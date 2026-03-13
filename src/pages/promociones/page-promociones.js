/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-forms.js";

/*-------------------------SCRIPTS---------------------------*/

class PagePromociones extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

            

             <app-banner-slider
                slides-data='[
                    {
                        "id": "slide1", 
                        "title": "Banner 1", 
                        "image": "../../src/assets/img/home/banners/web/banner-viaja-en-semana-santa-en-3-clics-descuento-10-de-regreso.webp",
                        "mediumImage": "../../src/assets/img/home/banners/tablet/banner-viaja-en-semana-santa-en-3-clics-descuento-10-de-regreso.webp", 
                        "smallImage": "../../src/assets/img/home/banners/mobile/banner-viaja-en-semana-santa-en-3-clics-descuento-10-de-regreso-2.webp", 
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

            <section class="__section __section__promo">
                <app-section-title section-title="Conoce nuestras promociones que tenemos para ti"></app-section-title>
                  <div class="__grid-container">
                    <article class="__article__promo">
                        <h3 class="__article-title">Compra con descuento </h3>
                       <a class="__article-link" href="../descuentos/viajero-anticipado/">  <img src="../src/assets/img/promociones/costa-descuentos.webp" alt="Atencion a clientes"> </a>
                    </article>
                    <article class="__article__promo">
                        <h3 class="__article-title">Acumula Puntos Doters</h3>
                       <a class="__article-link" href="../doters/"> <img src="../src/assets/img/promociones/costa-doters.webp" alt="Atencion a clientes">  </a>
                    </article>
                </div>
              <app-section-title section-title="Descuentos de Temporadas"></app-section-title>
                  <article class="__article__banner">
                      <h3 class="__article-title">Buen fin </h3>
                      <a class="__article-banner-link" href="./buen-fin.html">  <img src="../src/assets/img/banner/promociones/web/banner-buen-fin-descuento-55.webp" alt="Atencion a clientes"> </a>
                  </article>
              <app-section-title section-title="Convenios"></app-section-title>
                  <article class="__article__guide">
                      <h3 class="__article-title">Guía de Descuentos</h3>
                      <div class="__article-guide"> </div>
                  </article>
            </section>
        `;
  }
}
customElements.define("page-promociones", PagePromociones);
