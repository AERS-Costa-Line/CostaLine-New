/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-open-modal.js";
import "../../components/app-dropdown.js";
import "../../components/app-card-destination-opacity.js";
import "../../components/app-slider-opacity.js";
import "../../components/app-modal-multi-image.js";
import "../../components/app-modal-image.js";
import "../../components/app-destiny-grid.js";
import "../../js/slick.js?v=1.0.0";

class AutobusAAIFA extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			<app-cotiza></app-cotiza>
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-acapulco.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-acapulco.webp", "smallImage": "../../src/assets/img/banner/movil/banner-acapulco.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
  <app-section-title section-title="Viaja desde y hacia Aeropuerto AIFA en autobús con Costa Line"></app-section-title>
  <p class="__subtitle__destinos">Aeropuerto Internacional Felipe Ángeles (AIFA)</p>
  <p class="__paragraph">El Aeropuerto Internacional Felipe Ángeles (AIFA) es una alternativa moderna para vuelos nacionales e internacionales, con infraestructura reciente y una experiencia de viaje más ordenada en muchos horarios. Si buscas un traslado práctico para llegar a tu vuelo o regresar a tu ciudad, Costa Line te ayuda a conectar con el AIFA en autobús, con un viaje cómodo y seguro desde puntos estratégicos. Es una opción ideal para quienes prefieren planear su traslado con anticipación, evitar costos variables y viajar con tranquilidad.</p>
  <p class="__subtitle__destinos">¿Qué debes considerar al viajar al AIFA?</p>
  <p class="__paragraph">Antes de salir, confirma tu terminal, horario de vuelo y tiempo recomendado de llegada. Considera un margen adicional por tráfico y por el proceso de documentación, especialmente si viajas con equipaje. Lleva a la mano tu identificación, pase de abordar (digital o impreso) y revisa con anticipación el punto de abordaje. Al llegar, ubica accesos, áreas de documentación y salidas para que tu entrada al aeropuerto sea más sencilla.</p>
</section>


            <section class="__section__grid" id="destiny-grid-section">
                            <app-destiny-grid grid-src="../../../src/data/destinos/aifa/lugares.json"></app-destiny-grid>
                        </section>

            <p class="__subtitle__destinos">Gastronomía</p>
            <section class="__section __section__monterrey__food">
                <p class="__paragraph__xl">La zona cercana al Aeropuerto Internacional Felipe Ángeles (AIFA) y su conexión con la CDMX ofrece una gran variedad gastronómica, desde antojitos tradicionales hasta platillos típicos del centro del país. Puedes disfrutar tacos al pastor, barbacoa, quesadillas, tlacoyos y pan dulce con café, opciones ideales para comer antes o después de tu vuelo. Ya sea en puestos locales o restaurantes, la experiencia culinaria refleja la riqueza y tradición de la Ciudad de México y el Estado de México.</p>
                <article class="container-cards__food">
                                <app-card-open-modal cards-data-src="../../src/data/destinos/aifa/platillos.json"></app-card-open-modal>
                </article>
            </section>

            <section class="cta">
                <div class="container">
                   <h2 class="cta__title">¡Viaja al Aeropuerto AIFA con Costa Line!</h2>
                    <p class="cta__subtitle">Planea tu traslado con anticipación y llega al Aeropuerto Internacional Felipe Ángeles de forma cómoda, segura y confiable. Tu viaje comienza con un solo clic.</p>
                    <a href="../../boletos-autobus/aeropuerto-aifa.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
                </div>
            </section>

            <section class="__section __section__destiny__ask">
            <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
            <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                <app-dropdown items-src="../../src/data/destinos/aifa/dropdown-preguntas-frecuentes.json"></app-dropdown>
            </article>
            </section>

            <section class="__section __section__monterrey__other">
                <app-section-title section-title="Otros destinos"></app-section-title>
                <article class="container-slider-other">
                    <app-slider-opacity destinations-src="../../src/data/destinos/card-opacity-destinations.json"></app-slider-opacity>
                </article>
            </section>

            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("autobus-a-aeropuerto-aifa", AutobusAAIFA);
