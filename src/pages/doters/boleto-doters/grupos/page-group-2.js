/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../../components/app-modal-travelpass.js?v=1.0.2";
import "../../../../components/app-button-whats.js?v=1.0.2";
import "../../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupTwo extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"México Central Norte a San Jerónimo",
			"San Jerónimo a México Central Norte",
			"México Central Sur a San Jerónimo",
			"San Jerónimo a México Central Sur",
			"Acapulco Papagayo a México Central Norte",
			"México Central Norte a Acapulco Papagayo",
			"Acapulco Papagayo a México Central Sur",
			"México Central Sur a Acapulco Papagayo",
			"Acapulco Papagayo a AIFA",
			"AIFA a Acapulco Papagayo",
			"Atoyac de Álvarez a El Polvorín",
			"El Polvorín a Atoyac de Álvarez",
			"San Luis San Pedro a El Polvorín",
			"Acapulco Diamante a México Central Sur",
			"México Central Sur a Acapulco Diamante",
			"Acapulco Diamante a México Central Norte",
			"México Central Norte a Acapulco Diamante",
			"Coyuca de Benítez a México Central Norte",
			"México Central Norte a Coyuca de Benítez",
			"Coyuca de Benítez a México Central Sur",
			"México Central Sur a Coyuca de Benítez",
			"Chilpancingo a Lázaro Cárdenas",
			"Lázaro Cárdenas a Chilpancingo",
			"Acapulco Papagayo a México Tepotzotlán",
			"México Tepotzotlán a Acapulco Papagayo",
			"Técpan de Galeana a El Polvorín",
			"Acapulco Papagayo a Aeropuerto AICM",
			"Aeropuerto AICM a Acapulco Papagayo",
			"Coyuca de Benítez a El Polvorín",
			"Acapulco Papagayo a Reforma Tíber",
			"Reforma Tíber a Acapulco Papagayo",
			"Acapulco Papagayo a Ciudad Altamirano",
			"Ciudad Altamirano a Acapulco Papagayo",
			"Acapulco Centro a Ciudad Altamirano",
			"Ciudad Altamirano a Acapulco Centro",
			"Ciudad Altamirano a Acapulco Ejido",
			"Acapulco Ejido a Ciudad Altamirano",
			"Ciudad Altamirano a Las Cruces",
			"Las Cruces a Ciudad Altamirano",
			"San Jerónimo a El Polvorín",
			"Acapulco Papagayo a Tlapehuala",
			"Tlapehuala a Acapulco Papagayo",
			"Acapulco Centro a Tlapehuala",
			"Tlapehuala a Acapulco Centro",
			"Acapulco Ejido a Tlapehuala",
			"Tlapehuala a Acapulco Ejido",
			"Las Cruces a Tlapehuala",
			"Tlapehuala a Las Cruces",
			"Acapulco Papagayo a Cuautla",
			"Cuautla a Acapulco Papagayo",
			"Acapulco Centro a Cuautla",
			"Cuautla a Acapulco Centro",
			"Cuautla a Acapulco Ejido",
			"Acapulco Ejido a Cuautla",
			"Cuautla a Las Cruces",
			"Las Cruces a Cuautla",
			"Acapulco Papagayo a Arcelia",
			"Arcelia a Acapulco Papagayo",
			"Acapulco Centro a Arcelia",
			"Arcelia a Acapulco Centro",
			"Arcelia a Acapulco Ejido",
			"Acapulco Ejido a Arcelia",
			"Arcelia a Las Cruces",
			"Las Cruces a Arcelia",
			"México Central Sur a San Miguel Totolapan",
			"San Miguel Totolapan a México Central Sur",
			"Ciudad Altamirano a México Central Sur",
			"México Central Sur a Ciudad Altamirano",
			"México Central Sur a Tlapehuala",
			"Tlapehuala a México Central Sur",
			"AIFA a Chilpancingo",
			"Chilpancingo a AIFA",
			"Alpuyeca a Acapulco Papagayo",
			"Acapulco Centro a Alpuyeca",
			"Alpuyeca a Acapulco Centro",
			"Alpuyeca a Acapulco Ejido",
			"Acapulco Ejido a Alpuyeca",
			"Alpuyeca a Las Cruces",
			"Las Cruces a Alpuyeca",
			"Chilpancingo a Zihuatanejo",
			"Zihuatanejo a Chilpancingo",
			"Acapulco Papagayo a Cuernavaca",
			"Cuernavaca a Acapulco Papagayo",
			"Acapulco Centro a Cuernavaca",
			"Cuernavaca a Acapulco Centro",
			"Cuernavaca a Acapulco Ejido",
			"Cuernavaca a Las Cruces",
			"Las Cruces a Cuernavaca",
			"Apaxtla a México Central Sur",
			"México Central Sur a Apaxtla",
			"Arcelia a México Central Sur",
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
            <h1>Grupo 2 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 2.</p>
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
customElements.define("page-group-two", PageGroupTwo);
