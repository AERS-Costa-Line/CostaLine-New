/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../../components/app-modal-travelpass.js?v=1.0.2";
import "../../../../components/app-button-whats.js?v=1.0.2";
import "../../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageGroupSeven extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"San Luis San Pedro a Técpan de Galeana",
			"Técpan de Galeana a San Luis San Pedro",
			"Atoyac de Álvarez a Coyuca de Benítez",
			"Coyuca de Benítez a Atoyac de Álvarez",
			"Apaxtla a Teloloapan",
			"Teloloapan a Apaxtla",
			"Atoyac de Álvarez a San Luis San Pedro",
			"San Luis San Pedro a Atoyac de Álvarez",
			"Arcelia a San Miguel Totolapan",
			"San Miguel Totolapan a Arcelia",
			"Arcelia a Tlapehuala",
			"Tlapehuala a Arcelia",
			"Ciudad Altamirano a Tlapehuala",
			"Tlapehuala a Ciudad Altamirano",
			"Alpuyeca a Puente de Ixtla",
			"Puente de Ixtla a Alpuyeca",
			"Atoyac de Álvarez a Técpan de Galeana",
			"Técpan de Galeana a Atoyac de Álvarez",
			"Alpuyeca a Cuernavaca",
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
      <div class="main-container">
        <div class="content-header">
            <h1>Grupo 7 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 7.</p>
        </div>
        
        <section class="content-section">
            <div class="routes-grid">
                ${routesHtml}
            </div>
        </section>

        <div class="footer-nav">
            <a href="../" class="btn-route btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Regresar
            </a>
        </div>
      </div>
    `;
	}
}
customElements.define("page-group-seven", PageGroupSeven);
