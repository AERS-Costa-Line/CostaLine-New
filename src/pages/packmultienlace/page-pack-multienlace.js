/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza-pack.js";
import "../../components/app-banner-slider.js";
import "../../components/app-section-title.js";
import "../../components/app-card-bg-primary.js";
import "../../components/app-card-small-list.js";
import "../../components/app-header-pack-multienlace.js";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PagePackMultienlace extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
            slides-data='[
              {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/paqueteria/banner/web/pack-home-web.webp","mediumImage": "../../src/assets/img/paqueteria/banner/tablet/pack-home-tablet.webp", "smallImage": "../../src/assets/img/paqueteria/banner/movil/pack-home-mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
            <section class="__section__pack-services">
                <app-section-title section-title="Entrega tus paquetes en nuestra terminal y recógelos en el destino en tiempo récord."></app-section-title>
                <h3 class="__subtitle">Servicio de envíos </h3>
                <app-card-bg-primary src="../../src/data/pack-multienlace/cards-home.json"></app-card-bg-primary>
            </section>

            <section class="__section__pack-process">
                <app-section-title section-title="Proceso de Envío: Rápido y Fácil"></app-section-title>
                <app-card-small-list src="../../src/data/pack-multienlace/proceso-envio.json"></app-card-small-list>
                <p class="__paragraph">Además, para que puedas hacer un seguimiento en tiempo real de tu envío, te ofrecemos un sistema de rastreo fácil de usar. ¡Nunca perderás de vista tu paquete!</p>
            </section>


        `;
	}
}
customElements.define("page-pack-multienlace", PagePackMultienlace);
