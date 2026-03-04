/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../../../components/english/app-header-english.js?v=1.0.2";
import "../../../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PageGroupFiveEnglish extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"San Luis La Loma a Zihuatanejo",
			"Zihuatanejo a San Luis La Loma",
			"Iguala a El Polvorín",
			"San Miguel Totolapan a Teloloapan",
			"Teloloapan a San Miguel Totolapan",
			"Acapulco Papagayo a San Luis San Pedro",
			"San Luis San Pedro a Acapulco Papagayo",
			"Acapulco Centro a San Luis San Pedro",
			"San Luis San Pedro a Acapulco Centro",
			"San Luis San Pedro a Acapulco Ejido",
			"Coyuca de Benítez a San Luis San Pedro",
			"San Luis San Pedro a Coyuca de Benítez",
			"Teloloapan a Tlapehuala",
			"Tlapehuala a Teloloapan",
			"Atoyac de Álvarez a Petatlán",
			"Petatlán a Atoyac de Álvarez",
			"Lázaro Cárdenas a Zihuatanejo",
			"Zihuatanejo a Lázaro Cárdenas",
			"Cuernavaca a México Central Norte",
			"México Central Norte a Cuernavaca",
			"Cuernavaca a México Central Sur",
			"México Central Sur a Cuernavaca",
			"San Luis San Pedro a Zihuatanejo",
			"Zihuatanejo a San Luis San Pedro",
			"Cuernavaca a Reforma Tíber",
			"Reforma Tíber a Cuernavaca",
			"Cuautla a Puente de Ixtla",
			"Puente de Ixtla a Cuautla",
			"Petatlán a San Jerónimo",
			"San Jerónimo a Petatlán",
			"Cuernavaca a Iguala",
			"Iguala a Cuernavaca",
			"Apaxtla a Iguala",
			"Iguala a Apaxtla",
			"Alpuyeca a Taxco",
			"Taxco a Alpuyeca",
			"Chilpancingo a Iguala",
			"Iguala a Chilpancingo",
			"Cuernavaca a Taxco",
			"Taxco a Cuernavaca",
			"Petatlán a Técpan de Galeana",
			"Técpan de Galeana a Petatlán",
			"Acapulco Papagayo a Técpan de Galeana",
			"Técpan de Galeana a Acapulco Papagayo",
			"Acapulco Centro a Técpan de Galeana",
			"Técpan de Galeana a Acapulco Centro",
			"Acapulco Ejido a Técpan de Galeana",
			"Técpan de Galeana a Acapulco Ejido",
			"Alpuyeca a Iguala",
			"Iguala a Alpuyeca",
			"Acapulco Papagayo a Chilpancingo",
			"Chilpancingo a Acapulco Papagayo",
			"Acapulco Diamante a Chilpancingo",
			"Chilpancingo a Acapulco Diamante",
			"Acapulco Papagayo a San Jerónimo",
			"San Jerónimo a Acapulco Papagayo",
			"Acapulco Centro a San Jerónimo",
			"San Jerónimo a Acapulco Centro",
			"Acapulco Ejido a San Jerónimo",
			"San Jerónimo a Acapulco Ejido",
			"Arcelia a Teloloapan",
		];

		// 2. Usamos .map() para transformar cada string del array en un bloque de HTML.
		//    .join('') une todos los bloques en un solo string.
		const routesHtml = routes
			.map(
				(route) => `
      <div class="route-item">
          <span>${route}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    `,
			)
			.join("");

		// 3. Inyectamos el HTML generado dinámicamente en la plantilla principal.
		this.innerHTML = `
      <app-modal-doters></app-modal-doters>

      <div class="main-container">
        <div class="content-header">
            <h1>Group Five Doters Tickets</h1>
            <p class="subtitle">These are the routes available for redeeming points in Group Five.</p>
        </div>
        
        <section class="content-section">
            <div class="routes-grid">
                ${routesHtml}
            </div>
        </section>

        <div class="footer-nav">
            <a href="../" class="btn-route btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Go Back
            </a>
        </div>
      </div>
    `;
	}
}

customElements.define("page-group-five-english", PageGroupFiveEnglish);
