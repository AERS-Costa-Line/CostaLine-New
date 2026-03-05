/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header-pack-multienlace.js";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-footer-pack-multienlace.js";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-section-title.js";
import "../../../components/app-cotizador-pack.js";
import "../../../components/app-header-pack-multienlace.js";
import "../../../components/app-footer-pack-multienlace.js";
import "../../../components/app-time-line-packm.js";

/*-------------------------SCRIPTS---------------------------*/

class PageProcesoEnvio extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-banner-slider
            slides-data='[
              {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/paqueteria/banner/web/pack-proceso-web.webp","mediumImage": "../../src/assets/img/paqueteria/banner/tablet/pack-proceso-tablet.webp", "smallImage": "../../src/assets/img/paqueteria/banner/movil/pack-proceso-mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
            <app-section-title section-title="Proceso de envío."></app-section-title>

            <section class="__description">
              <p class="__description-text">
                En <b>Pack Multienclace</b>, hemos simplificado el proceso de envío de paquetes para que sea rápido y sin complicaciones. Sigue estos sencillos pasos para asegurarte de que tu paquete llegue a su destino de manera eficiente y segura:
              </p>
              <article class="__cards-image">
                <app-time-line-packm></app-time-line-packm>
              </article>
            </section>
    `;
	}
}

customElements.define("page-proceso-envio", PageProcesoEnvio);
