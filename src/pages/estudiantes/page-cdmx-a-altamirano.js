/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
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

class CdmxAaltamirano extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Altamirano"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Altamirano es una experiencia cómoda y accesible gracias a las diversas opciones de autobuses disponibles. Con salidas frecuentes desde la terminal México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $395, ofreciendo una excelente relación calidad-precio para quienes buscan explorar Altamirano.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Altamirano parten principalmente desde la terminal México Sur - Taxqueña. Esta terminal es conocida por su accesibilidad y por ofrecer una amplia gama de servicios para los viajeros, lo que la convierte en una opción conveniente para quienes desean iniciar su viaje hacia Altamirano.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Altamirano tienen una frecuencia de salida cada dos horas, lo que permite a los viajeros elegir el horario que mejor se adapte a sus necesidades. Con un total de 9 horarios disponibles a lo largo del día, es fácil encontrar una opción que se ajuste a tu itinerario, asegurando que puedas planificar tu viaje con flexibilidad.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Altamirano comienza desde $395. Este costo refleja la calidad del servicio y la comodidad que ofrecen las líneas de autobuses, asegurando que los pasajeros disfruten de un viaje placentero y sin contratiempos.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Altamirano?</p>
    <p class="__paragraph">
        Altamirano es un destino lleno de encanto y cultura. Entre los puntos de interés que no te puedes perder se encuentran el Parque Central, donde puedes disfrutar de un ambiente relajado y familiar, y la Iglesia de San Francisco de Asís, un hermoso ejemplo de arquitectura colonial. Además, los alrededores ofrecen paisajes naturales impresionantes, ideales para los amantes de la naturaleza.
    </p>

    <p class="__subtitle__destinos">Ventajas de comprar boletos de autobús en Costaline</p>
    <p class="__paragraph">
        Comprar tus boletos en Costaline te garantiza un viaje de calidad y confort. Sus autobuses están equipados con modernas comodidades que aseguran una experiencia placentera. Además, se ofrece un servicio al cliente excepcional, asegurando que cada aspecto de tu viaje sea atendido con profesionalismo.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Altamirano?</p>
    <p class="__paragraph">El tiempo estimado de viaje en autobús desde la Ciudad de México a Altamirano es de aproximadamente 6 a 7 horas, dependiendo del tráfico y las condiciones del camino.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar los boletos con anticipación, especialmente durante temporadas altas o fines de semana, para asegurar tu lugar y elegir el horario que mejor te convenga.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses?</p>
    <p class="__paragraph">Los autobuses que cubren esta ruta suelen ofrecer servicios como asientos reclinables, aire acondicionado, baños a bordo y entretenimiento, garantizando un viaje cómodo y agradable.</p>

    <p class="__subtitle__destinos">¿Hay descuentos disponibles para estudiantes o personas mayores?</p>
    <p class="__paragraph">Algunas líneas de autobuses ofrecen descuentos para estudiantes y personas mayores. Es recomendable verificar con la empresa al momento de la compra para conocer las promociones vigentes.</p>

    <p class="__subtitle__destinos">¿Se puede llevar equipaje adicional?</p>
    <p class="__paragraph">La mayoría de las líneas de autobuses permiten llevar equipaje adicional, aunque puede estar sujeto a cargos extra. Es importante consultar las políticas de equipaje antes de viajar.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-cdmx-a-altamirano", CdmxAaltamirano);
