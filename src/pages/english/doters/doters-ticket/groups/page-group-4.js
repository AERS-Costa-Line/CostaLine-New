/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../../../components/english/app-header-english.js?v=1.0.2";
import "../../../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/


class PageGroupFourEnglish extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"Lázaro Cárdenas a Técpan de Galeana",
			"Técpan de Galeana a Lázaro Cárdenas",
			"Arcelia a Puente de Ixtla",
			"Puente de Ixtla a Arcelia",
			"Ciudad Altamirano a Iguala",
			"Iguala a Ciudad Altamirano",
			"Lázaro Cárdenas a San Luis San Pedro",
			"San Luis San Pedro a Lázaro Cárdenas",
			"Chilpancingo a Coyuca de Benítez",
			"Coyuca de Benítez a Chilpancingo",
			"Teloloapan a El Polvorín",
			"Iguala a Tlapehuala",
			"Tlapehuala a Iguala",
			"México Central Sur a Puente de Ixtla",
			"Puente de Ixtla a México Central Sur",
			"México Central Sur a Taxco",
			"Taxco a México Central Sur",
			"Cuernavaca a Teloloapan",
			"Teloloapan a Cuernavaca",
			"Chilpancingo a Teloloapan",
			"Teloloapan a Chilpancingo",
			"Acapulco Papagayo a Petatlán",
			"Petatlán a Acapulco Papagayo",
			"Acapulco Centro a Petatlán",
			"Petatlán a Acapulco Centro",
			"Acapulco Ejido a Petatlán",
			"Petatlán a Acapulco Ejido",
			"Coyuca de Benítez a Zihuatanejo",
			"Zihuatanejo a Coyuca de Benítez",
			"Cuautla a Iguala",
			"Iguala a Cuautla",
			"Cuernavaca a Paso Morelos",
			"Ciudad Altamirano a Teloloapan",
			"Teloloapan a Ciudad Altamirano",
			"Arcelia a Iguala",
			"Iguala a Arcelia",
			"Atoyac de Álvarez a Zihuatanejo",
			"Zihuatanejo a Atoyac de Álvarez",
			"San Jerónimo a Zihuatanejo",
			"Zihuatanejo a San Jerónimo",
			"Puente de Ixtla a Teloloapan",
			"Teloloapan a Puente de Ixtla",
			"Paso Morelos a Chilpancingo",
			"Coyuca de Benítez a San Luis La Loma",
			"San Luis La Loma a Coyuca de Benítez",
			"Coyuca de Benítez a Petatlán",
			"Petatlán a Coyuca de Benítez",
			"Lázaro Cárdenas a Petatlán",
			"Petatlán a Lázaro Cárdenas",
			"Alpuyeca a Teloloapan",
			"Teloloapan a Alpuyeca",
			"El Polvorín a México Central Sur",
			"Técpan de Galeana a Zihuatanejo",
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
            <h1>Group Four Doters Tickets</h1>
            <p class="subtitle">These are the routes available for redeeming points in Group Four.</p>
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

customElements.define("page-group-four-english", PageGroupFourEnglish);
