/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header-pack-multienlace.js";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-footer-pack-multienlace.js";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza-pack.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-section-title.js";
import "../../../components/app-card-bg-primary.js";
import "../../../components/app-card-small-list.js";
import "../../../components/app-header-pack-multienlace.js";
import "../../../components/app-card-bg-secondary.js";

/*-------------------------SCRIPTS---------------------------*/

class PageServiciosCorporativosPack extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>
            <div class="cotiza-pack-space"></div>

            <app-banner-slider
            slides-data='[
              {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/paqueteria/banner/web/pack-corporativos-web.webp","mediumImage": "../../src/assets/img/paqueteria/banner/tablet/pack-corporativos-tablet.webp", "smallImage": "../../src/assets/img/paqueteria/banner/movil/pack-corporativos-mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
            <section class="__section__pack-description">
                <app-section-title section-title="Paquetería para negocios: rápida y efectiva"></app-section-title>
                <h3 class="__subtitle">Ofrecemos servicios especiales de envíos de paquetería para empresas:</h3>
                <app-card-bg-secondary cards-data-src="../../src/data/pack-multienlace/servicios-corporativos.json"></app-card-bg-secondary>
               
            </section>

        `;
	}
}
customElements.define(
	"page-servicios-corporativos-pack",
	PageServiciosCorporativosPack,
);
