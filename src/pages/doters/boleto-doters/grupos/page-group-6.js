/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../../components/app-header.js?v=1.1.3";
import "../../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

/*-------------------------SCRIPTS---------------------------*/

class PageGroupSix extends HTMLElement {
  connectedCallback() {
    // 1. Definimos todas las rutas en un array de strings.
    const routes = [
      "Acapulco Diamante a Chilpancingo",
      "Chilpancingo a Acapulco Diamante",
      "Acapulco Papagayo a Chilpancingo",
      "Chilpancingo a Acapulco Papagayo",
      "Acapulco Centro a Chilpancingo",
      "Chilpancingo a Acapulco Centro",
      "Chilpancingo a Acapulco Ejido",
      "Acapulco Ejido a Chilpancingo",
      "Chilpancingo a Las Cruces",
      "Las Cruces a Chilpancingo",
      "Iguala a Teloloapan",
      "Teloloapan a Iguala",
      "Petatlán a San Luis San Pedro",
      "San Luis San Pedro a Petatlán",
      "Petatlán a San Luis La Loma",
      "San Luis La Loma a Petatlán",
      "Coyuca de Benítez a Técpan de Galeana",
      "Técpan de Galeana a Coyuca de Benítez",
      "Acapulco Papagayo a Coyuca de Benítez",
      "Coyuca de Benítez a Acapulco Papagayo",
      "Acapulco Centro a Coyuca de Benítez",
      "Coyuca de Benítez a Acapulco Centro",
      "Coyuca de Benítez a Acapulco Ejido",
      "Acapulco Ejido a Coyuca de Benítez",
      "Iguala a Puente de Ixtla",
      "Puente de Ixtla a Iguala",
      "Coyuca de Benítez a San Jerónimo",
      "San Jerónimo a Coyuca de Benítez",
      "San Jerónimo a San Luis La Loma",
      "San Luis La Loma a San Jerónimo",
      "San Luis La Loma a Técpan de Galeana",
      "Técpan de Galeana a San Luis La Loma",
      "Ciudad Altamirano a Arcelia",
      "Arcelia a Ciudad Altamirano",
      "Cuernavaca a Puente de Ixtla",
      "Puente de Ixtla a Cuernavaca",
      "Petatlán a Zihuatanejo",
      "Zihuatanejo a Petatlán",
      "San Jerónimo a San Luis San Pedro",
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
            <h1>Grupo 6 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 6.</p>
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
customElements.define("page-group-six", PageGroupSix);
