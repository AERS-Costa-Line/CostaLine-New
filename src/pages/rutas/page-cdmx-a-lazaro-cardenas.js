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

class CdmxAlazaroC extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Lázaro Cárdenas"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Lázaro Cárdenas en autobús es una option cómoda y conveniente. Con salidas desde la terminal México Sur - Taxqueña, los pasajeros pueden elegir entre dos horarios disponibles. Los boletos están disponibles desde $670, ofreciendo una experiencia de viaje segura y confortable.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Lázaro Cárdenas parten desde la terminal México Sur - Taxqueña. Esta terminal es una de las más importantes de la Ciudad de México, ofreciendo múltiples servicios y comodidades para los viajeros. Asegúrate de llegar con tiempo suficiente para abordar tu autobús sin contratiempos.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Para quienes planean su viaje de CDMX a Lázaro Cárdenas, existen dos horarios de salida disponibles. Estos horarios están diseñados para ofrecer flexibilidad a los pasajeros, permitiéndoles elegir el que mejor se adapte a sus necesidades de viaje. Es recomendable verificar los horarios específicos al momento de comprar tus boletos para asegurar disponibilidad.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Lázaro Cárdenas comienza desde $670. Este costo refleja la calidad del servicio y las comodidades ofrecidas a bordo. Los autobuses están equipados con asientos reclinables, aire acondicionado y entretenimiento a bordo, garantizando un viaje placentero.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Lázaro Cárdenas?</p>
    <p class="__paragraph">
        Lázaro Cárdenas es un destino que ofrece una variedad de atractivos turísticos. Entre los puntos de interés se encuentran sus hermosas playas, ideales para disfrutar del sol y el mar. Además, puedes explorar el puerto, uno de los más importantes de México, y disfrutar de la gastronomía local, rica en mariscos frescos y platillos tradicionales.
    </p>

    <p class="__subtitle__destinos">Ventajas de comprar boletos de autobús en Costaline</p>
    <p class="__paragraph">
        Adquirir boletos de autobús a Lázaro Cárdenas con Costaline garantiza una experiencia de viaje de alta calidad. Sus autobuses están equipados con modernas comodidades, asegurando un trayecto seguro y confortable. Además, Costaline ofrece un servicio al cliente excepcional, facilitando el proceso de compra y brindando asistencia en todo momento.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Lázaro Cárdenas?</p>
    <p class="__paragraph">El tiempo de viaje en autobús desde la Ciudad de México a Lázaro Cárdenas suele ser de aproximadamente 10 horas, dependiendo del tráfico y las condiciones de la carretera.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar los boletos con anticipación, especialmente durante temporadas altas, para asegurar disponibilidad y elegir el horario que mejor se adapte a tus necesidades.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Los autobuses de Costaline están equipados con asientos reclinables, aire acondicionado, baños a bordo y sistemas de entretenimiento, proporcionando un viaje cómodo y agradable.</p>

    <p class="__subtitle__destinos">¿Puedo llevar equipaje adicional?</p>
    <p class="__paragraph">Costaline permite llevar equipaje adicional, pero es importante verificar las políticas específicas de equipaje al momento de la compra para evitar inconvenientes.</p>

    <p class="__subtitle__destinos">¿Hay descuentos disponibles para estudiantes o personas mayores?</p>
    <p class="__paragraph">Costaline ofrece descuentos especiales para estudiantes y personas mayores. Es recomendable consultar las condiciones y presentar la documentación necesaria al momento de la compra.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            <app-button-whats></app-button-whats>
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-ruta-cdmx-a-lazaro-cardenas", CdmxAlazaroC);
