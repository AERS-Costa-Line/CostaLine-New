/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
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

class AutobusAAcapulco extends HTMLElement {
	async connectedCallback() {
		this.innerHTML = `
			
            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-acapulco.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-acapulco.webp", "smallImage": "../../src/assets/img/banner/movil/banner-acapulco.webp", "link": "#index.html/banner1"}]'
            >
            </app-banner-slider>
            <app-payments></app-payments>

            <section class="__section __section__destiny__destinations">
                <app-section-title section-title="Viaja a Acapulco en autobús con Costa Line"></app-section-title>
                <p class="__subtitle__destinos">Acapulco</p>
                <p class="__paragraph">Acapulco, uno de los destinos turísticos más emblemáticos de México, combina playas paradisíacas, vida nocturna vibrante y una rica historia cultural. Costa Line te conecta con Acapulco a través de su servicio de autobús, garantizando un viaje cómodo y seguro desde distintos puntos. Ya sea que viajes por vacaciones, eventos familiares o para explorar la belleza del Pacífico mexicano, Costa Line hace que tu llegada a Acapulco sea placentera y sin complicaciones.</p>
                <p class="__subtitle__destinos">¿Qué lugares visitar en Acapulco?</p>
                <p class="__paragraph">Acapulco ofrece una combinación única de sol, mar y tradición. Desde la famosa Playa Condesa y la icónica Quebrada, hasta la zona histórica con la Catedral y el Fuerte de San Diego, cada rincón tiene algo especial. Además, los mercados, restaurantes y malecón ofrecen experiencias auténticas que reflejan la cultura y hospitalidad de la región.</p>
            </section>    

            <section class="__section__grid" id="destiny-grid-section">
                            <app-destiny-grid grid-src="../../../src/data/destinos/acapulco/lugares.json"></app-destiny-grid>
                        </section>

            <p class="__subtitle__destinos">Gastronomía</p>
            <section class="__section __section__monterrey__food">
                <p class="__paragraph__xl">Acapulco es famoso por su gastronomía costeña, con una mezcla de sabores del mar y la tradición local. Prueba los camarones al mojo de ajo, ceviches frescos, pescado a la talla y exquisitos mariscos, acompañados de una vista privilegiada del Pacífico. Los restaurantes, fondas y puestos locales ofrecen una experiencia culinaria que captura la esencia del puerto.</p>
                <article class="container-cards__food">
                                <app-card-open-modal cards-data-src="../../src/data/destinos/acapulco/platillos.json"></app-card-open-modal>
                </article>
            </section>

            <section class="cta">
                <div class="container">
                    <h2 class="cta__title">¡Viaja a Acapulco con Costa Line!</h2>
                    <p class="cta__subtitle">No esperes más para vivir unas vacaciones inolvidables en el puerto más famoso de México. Tu aventura está a solo un clic de distancia.</p>
                    <a href="../../boletos-autobus/acapulco.html" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer" aria-label="Comprar boletos" tabindex="0">Consulta horarios y compra tu boleto</a>
                </div>
            </section>

            <section class="__section __section__destiny__ask">
            <app-section-title section-title="Preguntas Frecuentes"></app-section-title>
            <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                <app-dropdown items-src="../../src/data/destinos/acapulco/dropdown-preguntas-frecuentes.json"></app-dropdown>
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
customElements.define("autobus-a-acapulco", AutobusAAcapulco);
