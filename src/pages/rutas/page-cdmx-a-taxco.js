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

class CdmxAtaxco extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Taxco"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Taxco es una experiencia enriquecedora y cómoda gracias a las opciones de autobús disponibles. Con salidas frecuentes desde la terminal de México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles a partir de $140, ofreciendo una opción accesible para todos los viajeros.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Taxco parten principalmente desde la terminal de México Sur - Taxqueña. Esta terminal es conocida por su accesibilidad y por ofrecer una amplia gama de servicios para los viajeros, lo que la convierte en un punto de partida ideal para quienes desean visitar Taxco.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Taxco tienen una frecuencia de salida cada dos horas, lo que permite a los viajeros elegir el horario que mejor se adapte a sus necesidades. Con un total de 8 horarios disponibles a lo largo del día, es fácil encontrar una opción que se ajuste a tu itinerario.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Taxco comienza desde $140. Este costo competitivo asegura que los viajeros puedan disfrutar de un viaje cómodo y seguro sin comprometer su presupuesto.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Taxco?</p>
    <p class="__paragraph">
        Taxco es un destino turístico famoso por su arquitectura colonial y su rica historia minera. Entre los puntos de interés más destacados se encuentran: la Parroquia de Santa Prisca, un impresionante ejemplo de arquitectura barroca; el Teleférico de Taxco, que ofrece vistas panorámicas de la ciudad y sus alrededores; el Museo de la Platería, ideal para conocer la historia de la minería de plata en la región; y el Zócalo, un lugar perfecto para disfrutar de la gastronomía local y el ambiente cultural.
    </p>

    <p class="__subtitle__destinos">Ventajas de viajar con Costaline</p>
    <p class="__paragraph">
        Comprar tus boletos de autobús en Costaline te garantiza un viaje de calidad y confort. Sus autobuses están equipados con tecnología de punta y ofrecen un servicio al cliente excepcional. Además, la facilidad de compra en línea y la variedad de horarios disponibles hacen que planificar tu viaje a Taxco sea una experiencia sencilla y agradable. No esperes más para disfrutar de un viaje inolvidable con Costaline.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Taxco?</p>
    <p class="__paragraph">El viaje en autobús de CDMX a Taxco suele durar aproximadamente 3 horas, dependiendo del tráfico y las condiciones del camino.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar los boletos con anticipación, especialmente durante temporadas altas, para asegurar tu lugar en el autobús y elegir el horario que prefieras.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses?</p>
    <p class="__paragraph">Los autobuses que cubren esta ruta suelen ofrecer servicios como aire acondicionado, asientos reclinables y entretenimiento a bordo para garantizar un viaje cómodo.</p>

    <p class="__subtitle__destinos">¿Puedo llevar equipaje adicional?</p>
    <p class="__paragraph">La mayoría de las líneas de autobuses permiten llevar equipaje adicional, aunque puede haber restricciones de peso y tamaño. Es recomendable verificar las políticas específicas de la compañía antes de viajar.</p>

    <p class="__subtitle__destinos">¿Hay descuentos para estudiantes o personas mayores?</p>
    <p class="__paragraph">Algunas compañías ofrecen descuentos para estudiantes y personas mayores. Es aconsejable consultar directamente con la empresa de autobuses para obtener información sobre tarifas especiales.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-ruta-cdmx-a-taxco", CdmxAtaxco);
