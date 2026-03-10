/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-section-title.js";
import "../../components/app-dropdown.js"; // Importar el componente dropdown

/*-------------------------SCRIPTS---------------------------*/

class PagePreguntasFrecuentes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

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
