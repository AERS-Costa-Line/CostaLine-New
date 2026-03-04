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

class PageGroupThree extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"Acapulco Papagayo a Teloloapan",
			"Teloloapan a Acapulco Papagayo",
			"Acapulco Centro a Teloloapan",
			"Teloloapan a Acapulco Centro",
			"Acapulco Ejido a Teloloapan",
			"Teloloapan a Acapulco Ejido",
			"Las Cruces a Teloloapan",
			"Teloloapan a Las Cruces",
			"Chilpancingo a México Central Norte",
			"México Central Norte a Chilpancingo",
			"Chilpancingo a México Central Sur",
			"México Central Sur a Chilpancingo",
			"Chilpancingo a Petatlán",
			"Petatlán a Chilpancingo",
			"Acapulco Papagayo a Puente de Ixtla",
			"Puente de Ixtla a Acapulco Papagayo",
			"Acapulco Centro a Puente de Ixtla",
			"Puente de Ixtla a Acapulco Centro",
			"Acapulco Ejido a Puente de Ixtla",
			"Puente de Ixtla a Acapulco Ejido",
			"Las Cruces a Puente de Ixtla",
			"Puente de Ixtla a Las Cruces",
			"Ciudad Altamirano a El Polvorín",
			"El Polvorín a Ciudad Altamirano",
			"Chilpancingo a San Luis La Loma",
			"San Luis La Loma a Chilpancingo",
			"Chilpancingo a México Tepotzotlán",
			"México Tepotzotlán a Chilpancingo",
			"México Central Sur a Teloloapan",
			"Teloloapan a México Central Sur",
			"Ciudad Altamirano a Chilpancingo",
			"Chilpancingo a Ciudad Altamirano",
			"Acapulco Papagayo a Lázaro Cárdenas",
			"Lázaro Cárdenas a Acapulco Papagayo",
			"Acapulco Centro a Lázaro Cárdenas",
			"Lázaro Cárdenas a Acapulco Centro",
			"Acapulco Ejido a Lázaro Cárdenas",
			"Lázaro Cárdenas a Acapulco Ejido",
			"Ciudad Altamirano a Cuernavaca",
			"Cuernavaca a Ciudad Altamirano",
			"Tlapehuala a El Polvorín",
			"Chilpancingo a Tlapehuala",
			"Tlapehuala a Chilpancingo",
			"Chilpancingo a San Luis San Pedro",
			"San Luis San Pedro a Chilpancingo",
			"Chilpancingo a Reforma Tíber",
			"Reforma Tíber a Chilpancingo",
			"Cuernavaca a Tlapehuala",
			"Tlapehuala a Cuernavaca",
			"México Central Sur a Paso Morelos",
			"Coyuca de Benítez a Lázaro Cárdenas",
			"Lázaro Cárdenas a Coyuca de Benítez",
			"Paso Morelos a Acapulco Papagayo",
			"Paso Morelos a Las Cruces",
			"Chilpancingo a Cuautla",
			"Cuautla a Chilpancingo",
			"Arcelia a El Polvorín",
			"El Polvorín a Arcelia",
			"Alpuyeca a Ciudad Altamirano",
			"Ciudad Altamirano a Alpuyeca",
			"Arcelia a Cuernavaca",
			"Cuernavaca a Arcelia",
			"Arcelia a Chilpancingo",
			"Chilpancingo a Arcelia",
			"Alpuyeca a Chilpancingo",
			"Chilpancingo a Alpuyeca",
			"Lázaro Cárdenas a San Luis La Loma",
			"San Luis La Loma a Lázaro Cárdenas",
			"Ciudad Altamirano a Puente de Ixtla",
			"Puente de Ixtla a Ciudad Altamirano",
			"Chilpancingo a El Polvorín",
			"Chilpancingo a Puente de Ixtla",
			"Puente de Ixtla a Chilpancingo",
			"Atoyac de Álvarez a Lázaro Cárdenas",
			"Lázaro Cárdenas a Atoyac de Álvarez",
			"Acapulco Papagayo a Iguala",
			"Iguala a Acapulco Papagayo",
			"Acapulco Centro a Iguala",
			"Iguala a Acapulco Centro",
			"Acapulco Ejido a Iguala",
			"Iguala a Acapulco Ejido",
			"Iguala a México Central Sur",
			"México Central Sur a Iguala",
			"Iguala a Las Cruces",
			"Las Cruces a Iguala",
			"Atoyac de Álvarez a Chilpancingo",
			"Chilpancingo a Atoyac de Álvarez",
			"San Miguel Totolapan a Puente de Ixtla",
			"Chilpancingo a Cuernavaca",
			"Cuernavaca a Chilpancingo",
			"Alpuyeca a Tlapehuala",
			"Tlapehuala a Alpuyeca",
			"Chilpancingo a Técpan de Galeana",
			"Técpan de Galeana a Chilpancingo",
			"Puente de Ixtla a Tlapehuala",
			"Tlapehuala a Puente de Ixtla",
			"Apaxtla a Cuernavaca",
			"Cuernavaca a Apaxtla",
			"Lázaro Cárdenas a San Jerónimo",
			"San Jerónimo a Lázaro Cárdenas",
			"Iguala a San Miguel Totolapan",
			"San Miguel Totolapan a Iguala",
			"Alpuyeca a Arcelia",
			"Arcelia a Alpuyeca",
			"Chilpancingo a San Jerónimo",
			"San Jerónimo a Chilpancingo",
			"Acapulco Papagayo a Zihuatanejo",
			"Zihuatanejo a Acapulco Papagayo",
			"Acapulco Centro a Zihuatanejo",
			"Zihuatanejo a Acapulco Centro",
			"Acapulco Ejido a Zihuatanejo",
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
            <h1>Grupo 3 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 3.</p>
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
customElements.define("page-group-three", PageGroupThree);
