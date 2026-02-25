class Page404 extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-modal-travelpass></app-modal-travelpass>
            <app-modal-doters></app-modal-doters>
            <section class="page-404-section">
                <div class="container">
                    <h1 class="title-404">404</h1>
                    <h2 class="subtitle-404">Página No Encontrada</h2>
                    <p class="description-404">
                        Lo sentimos, la página que estás buscando no existe o ha sido movida.
                    </p>
                    <a href="/" class="button-primary">Volver al Inicio</a>
                </div>
            </section>
			<app-cookies-policy></app-cookies-policy>
			
			<app-button-eva-trip></app-button-eva-trip>
        `;
	}
}
customElements.define("page-404", Page404);
