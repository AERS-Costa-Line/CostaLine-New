/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.1.3";
import "../components/app-cookies-policy.js?v=1.0.3";
import "../components/app-modal-travelpass.js?v=1.0.2";
import "../components/app-button-whats.js?v=1.0.2";
import "../components/app-button-eva-trip.js?v=1.0.2";
import "../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-modal-doters.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-dropdown.js"; // Importar el componente dropdown

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";
import "../js/slick.js?v=1.0.2";

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PagePreguntasFrecuentes extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <div class="__panthom_space"></div>


            <section class="__section __section__FATQs">
                <app-section-title section-title="Preguntas frecuentes"></app-section-title>
               <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-costa-line.json"></app-dropdown>
                </article>
            </section>
        `;
	}
}
customElements.define("page-preguntas-frecuentes", PagePreguntasFrecuentes);
