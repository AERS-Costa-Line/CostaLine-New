/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.1.3";
import "../components/app-cookies-policy.js?v=1.0.3";
import "../components/app-modal-travelpass.js?v=1.0.2";
import "../components/app-button-whats.js?v=1.0.2";
import "../components/app-button-eva-trip.js?v=1.0.2";
import "../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

import "../components/app-cotiza.js";
import "../components/app-section-title.js";

/*-------------------------SCRIPTS---------------------------*/


class PageSiteMap extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>
      <app-modal-doters></app-modal-doters>
      <div class="space"></div>
      <section class="__section">
        <app-section-title section-title="Site Map | Costa Line AERS"></app-section-title>
        <div id="site-map-listas">Cargando...</div>
      </section>
    `;

		try {
			const resp = await fetch("/src/data/sitemap.json");
			const data = await resp.json();

			const listasHTML = data
				.map(
					(cat) => `
      <div class="site-map-category">
        <h3>${cat.categoria}</h3>
        <hr class="site-map-divider" />
        <ul>
          ${cat.landings
						.map(
							(landing) => `
            <li><a href="${landing.url}">${landing.nombre}</a></li>
          `,
						)
						.join("")}
        </ul>
      </div>
    `,
				)
				.join("");

			this.querySelector("#site-map-listas").innerHTML = listasHTML;
		} catch (e) {
			this.querySelector("#site-map-listas").innerHTML =
				"No se pudo cargar el mapa del sitio.";
		}
	}
}
customElements.define("page-site-map", PageSiteMap);
