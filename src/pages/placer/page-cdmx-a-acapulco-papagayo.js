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

class CdmxAacapulcoPapagayo extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Acapulco Papagayo"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Acapulco Diamante en autobús es una opción cómoda y accesible. Con salidas frecuentes desde la terminal México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $385, ofreciendo una excelente relación calidad-precio para disfrutar de las playas y el ambiente de Acapulco Diamante.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que conectan la Ciudad de México con Acapulco Diamante parten principalmente desde la terminal México Sur - Taxqueña. Esta terminal es conocida por su fácil acceso y por ofrecer una variedad de servicios para los viajeros, incluyendo áreas de espera cómodas y opciones de comida, garantizando un inicio de viaje sin complicaciones.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Acapulco Diamante tienen 4 horarios con salidas programadas cada 3 horas, lo que permite a los viajeros elegir el horario que mejor se adapte a sus necesidades. Esta frecuencia asegura que siempre haya una opción conveniente. Es recomendable verificar los horarios específicos con antelación para planificar de manera eficiente.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos comienza desde $385. Este costo competitivo incluye un viaje en autobuses modernos y bien equipados, con asientos cómodos, aire acondicionado y entretenimiento a bordo, lo que hace que el trayecto sea relajante y agradable.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Acapulco Diamante?</p>
    <p class="__paragraph">
        Acapulco Diamante es un destino de renombre. Entre los puntos más destacados están la Playa Revolcadero, ideal para surfistas, y el centro comercial La Isla para compras de lujo. Además, puedes explorar la Laguna de Tres Palos, un lugar perfecto para actividades acuáticas y observación de aves.
    </p>

    <p class="__subtitle__destinos">Explorando Acapulco Diamante</p>
    <p class="__paragraph">
        Además de sus playas, ofrece una gran oferta cultural y gastronómica. Los turistas pueden disfrutar de restaurantes de mariscos frescos, cocina internacional, campos de golf de clase mundial y spas de lujo, perfectos para unas vacaciones inolvidables.
    </p>

    <p class="__subtitle__destinos">¿Por qué elegir Costaline para tu viaje?</p>
    <p class="__paragraph">
        Costaline se destaca por su alta calidad. Sus autobuses cuentan con tecnología de punta, asientos reclinables y un servicio al cliente excepcional, asegurando una experiencia satisfactoria desde la compra del boleto hasta la llegada a tu destino.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Acapulco Diamante?</p>
    <p class="__paragraph">Generalmente dura entre 5 y 6 horas, dependiendo del tráfico y las condiciones de la carretera.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda hacerlo, especialmente en temporadas altas o fines de semana, para asegurar disponibilidad y mejores horarios.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Ofrecen aire acondicionado, asientos reclinables, entretenimiento a bordo y sanitarios.</p>

    <p class="__subtitle__destinos">¿Puedo llevar equipaje adicional?</p>
    <p class="__paragraph">Sí, pero es importante verificar las políticas específicas al momento de la compra para evitar inconvenientes.</p>

    <p class="__subtitle__destinos">¿Hay descuentos para estudiantes o personas mayores?</p>
    <p class="__paragraph">Sí, Costaline ofrece descuentos especiales presentando la identificación correspondiente al momento de la compra.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            <app-button-whats></app-button-whats>
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-placer-cdmx-a-acapulco-papagayo", CdmxAacapulcoPapagayo);
