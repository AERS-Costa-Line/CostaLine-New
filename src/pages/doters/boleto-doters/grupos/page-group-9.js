class PageGroupNine extends HTMLElement {
	connectedCallback() {
		// 1. Definimos todas las rutas en un array de strings.
		const routes = [
			"México Central Norte a Pochutla",
			"Pochutla a México Central Norte",
			"México Central Sur a Pochutla",
			"Pochutla a México Central Sur",
			"Puerto Escondido a México Central Norte",
			"México Central Norte a Puerto Escondido",
			"México Central Sur a Puerto Escondido",
			"Puerto Escondido a México Central Sur",
			"Lázaro Cárdenas a México Central Norte",
			"México Central Norte a Lázaro Cárdenas",
			"Lázaro Cárdenas a México Central Sur",
			"México Central Sur a Lázaro Cárdenas",
			"México Central Norte a Zihuatanejo",
			"Zihuatanejo a México Central Norte",
			"México Central Sur a Zihuatanejo",
			"Zihuatanejo a México Central Sur",
			"México Central Norte a Pinotepa Nacional",
			"Pinotepa Nacional a México Central Norte",
			"México Central Sur a Pinotepa Nacional",
			"Pinotepa Nacional a México Central Sur",
			"Lázaro Cárdenas a El Polvorín",
			"México Central Norte a Petatlán",
			"Petatlán a México Central Norte",
			"México Central Sur a Petatlán",
			"Petatlán a México Central Sur",
			"México Central Sur a San Luis La Loma",
			"San Luis La Loma a México Central Sur",
			"Zihuatanejo a El Polvorín",
			"Atoyac de Álvarez a México Central Sur",
			"México Central Sur a Atoyac de Álvarez",
			"Atoyac de Álvarez a México Central Norte",
			"México Central Norte a Atoyac de Álvarez",
			"México Central Norte a San Luis San Pedro",
			"San Luis San Pedro a México Central Norte",
			"México Central Sur a San Luis San Pedro",
			"San Luis San Pedro a México Central Sur",
			"Petatlán a El Polvorín",
			"Petacalco a El Polvorín",
			"México Central Norte a Técpan de Galeana",
			"Técpan de Galeana a México Central Norte",
			"México Central Sur a Técpan de Galeana",
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
            <h1>Grupo 1 Boleto Doters</h1>
            <p class="subtitle">Estas son las rutas disponibles para el canje de puntos del Grupo 1.</p>
        </div>
        
        <section class="content-section">
            <div class="routes-grid">
                ${routesHtml}
            </div>
        </section>

        <div class="footer-nav">
            <a href="/boleto-doters" class="btn-route btn-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Regresar
            </a>
        </div>
      </div>
    `;
	}
}
customElements.define("page-group-nine", PageGroupNine);
