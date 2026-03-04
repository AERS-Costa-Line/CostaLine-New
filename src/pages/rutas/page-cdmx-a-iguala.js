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

class CdmxAiguala extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Iguala"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Iguala en autobús es una opción cómoda y accesible. Con múltiples salidas diarias desde la terminal México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $195, ofreciendo una excelente relación calidad-precio para quienes buscan explorar Iguala.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Iguala parten principalmente desde la terminal México Sur - Taxqueña. Esta terminal es una de las más importantes de la Ciudad de México, ofreciendo una amplia gama de servicios para los viajeros, como áreas de espera cómodas, opciones de comida y tiendas. La ubicación estratégica de la terminal facilita el acceso desde diferentes puntos de la ciudad, lo que la convierte en una opción conveniente para quienes planean su viaje a Iguala.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Iguala tienen una frecuencia de salida cada hora, lo que permite a los viajeros elegir el horario que mejor se adapte a sus necesidades. Con 18 horarios disponibles a lo largo del día, los pasajeros pueden planificar su viaje con flexibilidad, asegurando que lleguen a su destino a tiempo y sin contratiempos.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Iguala comienza desde $195. Este costo competitivo incluye un servicio de calidad, con autobuses equipados con comodidades modernas para garantizar un viaje placentero. Los pasajeros pueden disfrutar de asientos reclinables, aire acondicionado y entretenimiento a bordo, haciendo que el trayecto sea una experiencia agradable.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Iguala?</p>
    <p class="__paragraph">
        Iguala es una ciudad rica en historia y cultura, ofreciendo una variedad de puntos de interés para los visitantes. Entre los lugares más destacados se encuentra el famoso Santuario de la Bandera, un monumento emblemático que celebra la creación de la bandera mexicana. Además, los viajeros pueden explorar el Zócalo de Iguala, un lugar vibrante lleno de vida local, tiendas y restaurantes. Para los amantes de la naturaleza, el Parque Nacional Grutas de Cacahuamilpa es una visita obligada, con impresionantes formaciones de estalactitas y estalagmitas.
    </p>

    <p class="__subtitle__destinos">Ventajas de comprar boletos de autobús en Costaline</p>
    <p class="__paragraph">
        Adquirir boletos de autobús a Iguala con Costaline ofrece múltiples beneficios. La empresa es reconocida por su compromiso con la seguridad y el confort de sus pasajeros, brindando un servicio de alta calidad. Los autobuses de Costaline están equipados con tecnología de punta, asegurando un viaje tranquilo y sin preocupaciones. Además, la facilidad de compra en línea permite a los viajeros adquirir sus boletos de manera rápida y sencilla, garantizando una experiencia de viaje sin complicaciones.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Iguala en autobús?</p>
    <p class="__paragraph">El tiempo estimado de viaje en autobús de CDMX a Iguala es de aproximadamente 3 a 4 horas, dependiendo del tráfico y las condiciones de la carretera.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar los boletos con anticipación, especialmente durante temporadas altas o fines de semana, para asegurar disponibilidad y elegir el horario que mejor se adapte a sus necesidades.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Los autobuses de Costaline ofrecen servicios como asientos reclinables, aire acondicionado, entretenimiento a bordo y sanitarios, garantizando un viaje cómodo y placentero.</p>

    <p class="__subtitle__destinos">¿Dónde puedo comprar boletos de autobús a Iguala?</p>
    <p class="__paragraph">Los boletos de autobús a Iguala se pueden comprar en línea a través del sitio web de Costaline, en la terminal México Sur - Taxqueña, o en puntos de venta autorizados.</p>

    <p class="__subtitle__destinos">¿Hay descuentos disponibles para estudiantes o personas mayores?</p>
    <p class="__paragraph">Costaline ofrece descuentos especiales para estudiantes y personas mayores, presentando una identificación válida al momento de la compra del boleto.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-ruta-cdmx-a-iguala", CdmxAiguala);
