/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-header-pack-multienlace.js";
import "../../components/app-cotiza-pack.js";
import "../../components/app-banner-slider.js";
import "../../components/app-section-title.js";
import "../../components/app-map-pack.js";
import "../../components/app-footer-pack-multienlace.js";

/*-------------------------SCRIPTS---------------------------*/

class PageTerminalesPack extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
                slides-data='[
                  {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/paqueteria/banner/web/pack-entrega-web.webp","mediumImage": "../../src/assets/img/paqueteria/banner/tablet/pack-entrega-tablet.webp", "smallImage": "../../src/assets/img/paqueteria/banner/movil/pack-entrega-mobile.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>
            <app-section-title section-title="Cotiza tu paquete"></app-section-title>

        <app-map-pack></app-map-pack>
    `;
	}
}

customElements.define("page-terminales-pack", PageTerminalesPack);
