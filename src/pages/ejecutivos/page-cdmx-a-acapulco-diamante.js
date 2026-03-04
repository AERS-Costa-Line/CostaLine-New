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

class CdmxAacapulcoDiamante extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Acapulco Diamante"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Acapulco Diamante en autobús es una opción cómoda y accesible. Con salidas frecuentes desde la terminal México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $385, ofreciendo una excelente relación calidad-precio para quienes buscan disfrutar de las playas y el ambiente de Acapulco Diamante.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que conectan la Ciudad de México con Acapulco Diamante parten principalmente desde la terminal México Sur - Taxqueña. Esta terminal es conocida por su fácil acceso y por ofrecer una variedad de servicios para los viajeros, incluyendo áreas de espera cómodas y opciones de comida. Al elegir esta terminal, los pasajeros pueden disfrutar de un inicio de viaje sin complicaciones.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Acapulco Diamante tienen 4 horarios con salidas programadas cada 3 horas, lo que permite a los viajeros elegir el horario que mejor se adapte a sus necesidades. Esta frecuencia de salidas asegura que siempre haya una opción conveniente para quienes desean viajar a este popular destino turístico. Es recomendable verificar los horarios específicos con antelación para planificar el viaje de manera eficiente.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Acapulco Diamante comienza desde $385. Este costo competitivo incluye un viaje en autobuses modernos y bien equipados, que garantizan una experiencia de viaje placentera. Los pasajeros pueden disfrutar de asientos cómodos, aire acondicionado y entretenimiento a bordo, lo que hace que el trayecto sea relajante y agradable.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Acapulco Diamante?</p>
    <p class="__paragraph">
        Acapulco Diamante es un destino turístico de renombre, conocido por sus impresionantes playas y vibrante vida nocturna. Entre los puntos de interés más destacados se encuentran la Playa Revolcadero, ideal para surfistas y amantes del sol, y el famoso centro comercial La Isla, que ofrece una experiencia de compras de lujo. Además, los visitantes pueden explorar la Laguna de Tres Palos, un lugar perfecto para actividades acuáticas y observación de aves.
    </p>

    <p class="__subtitle__destinos">Explorando Acapulco Diamante</p>
    <p class="__paragraph">
        Acapulco Diamante no solo es famoso por sus playas, sino también por su oferta cultural y gastronómica. Los turistas pueden disfrutar de una amplia variedad de restaurantes que ofrecen desde mariscos frescos hasta cocina internacional. Además, el área cuenta con campos de golf de clase mundial y spas de lujo, perfectos para quienes buscan relajarse y disfrutar de unas vacaciones inolvidables.
    </p>

    <p class="__subtitle__destinos">¿Por qué elegir Costaline para tu viaje?</p>
    <p class="__paragraph">
        Al considerar la compra de boletos de autobús a Acapulco Diamante, Costaline se destaca como una opción confiable y de alta calidad. Sus autobuses están equipados con tecnología de punta, asientos reclinables y servicios a bordo que garantizan un viaje cómodo y seguro. Además, Costaline ofrece un servicio al cliente excepcional, asegurando que cada pasajero tenga una experiencia de viaje satisfactoria desde el momento de la compra hasta la llegada a su destino.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Acapulco Diamante?</p>
    <p class="__paragraph">El viaje en autobús desde la Ciudad de México a Acapulco Diamante generalmente dura entre 5 y 6 horas, dependiendo del tráfico y las condiciones de la carretera.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar los boletos con anticipación, especialmente durante temporadas altas o fines de semana, para asegurar disponibilidad y elegir los mejores horarios.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Los autobuses de Costaline ofrecen servicios como aire acondicionado, asientos reclinables, entretenimiento a bordo y sanitarios, asegurando un viaje cómodo y placentero.</p>

    <p class="__subtitle__destinos">¿Puedo llevar equipaje adicional?</p>
    <p class="__paragraph">Costaline permite llevar equipaje adicional, pero es importante verificar las políticas específicas de equipaje al momento de la compra del boleto para evitar inconvenientes.</p>

    <p class="__subtitle__destinos">¿Hay descuentos disponibles para estudiantes o personas mayores?</p>
    <p class="__paragraph">Costaline ofrece descuentos especiales para estudiantes y personas mayores. Se recomienda consultar las condiciones y presentar la identificación correspondiente al momento de la compra.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define(
	"page-eje-cdmx-a-acapulco-diamante",
	CdmxAacapulcoDiamante,
);
