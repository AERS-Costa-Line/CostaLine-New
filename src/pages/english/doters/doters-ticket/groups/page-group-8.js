/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../../../components/english/app-header-english.js?v=1.0.2";
import "../../../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageGroupEightEnglish extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"San Jerónimo a Técpan de Galeana",
			"Técpan de Galeana a San Jerónimo",
			"Atoyac de Álvarez a San Jerónimo",
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
            <h1>Group Eight Doters Tickets</h1>
            <p class="subtitle">These are the routes available for redeeming points in Group Eight.</p>
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

customElements.define("page-group-eight-english", PageGroupEightEnglish);
