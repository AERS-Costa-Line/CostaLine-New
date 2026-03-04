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

class CdmxAchilpancingo extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Chilpancingo"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Chilpancingo en autobús es una opción cómoda y accesible. Con múltiples salidas diarias desde la terminal México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $305, ofreciendo una excelente relación calidad-precio para quienes buscan explorar Chilpancingo.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Chilpancingo parten principalmente desde la terminal México Sur - Taxqueña. Esta terminal es conocida por su fácil acceso y por ofrecer una amplia gama de servicios para los viajeros, lo que la convierte en un punto de partida ideal para tu viaje.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Chilpancingo tienen una frecuencia de salida cada hora, con un total de 19 horarios disponibles a lo largo del día. Esta flexibilidad permite a los viajeros elegir el horario que mejor se adapte a sus necesidades, asegurando que siempre haya una opción conveniente para todos.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Chilpancingo comienza desde $305. Este costo competitivo incluye un servicio de alta calidad, con autobuses equipados para garantizar un viaje cómodo y seguro durante todo el trayecto.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Chilpancingo?</p>
    <p class="__paragraph">
        Chilpancingo, la capital del estado de Guerrero, ofrece una variedad de atractivos. Entre los puntos de interés se encuentran el Museo Regional de Guerrero, donde se aprende sobre la historia local; el Parque Nacional El Veladero, ideal para los amantes de la naturaleza con sus vistas panorámicas; y la Catedral de Santa María de la Asunción, un hermoso ejemplo de arquitectura colonial.
    </p>

    <p class="__subtitle__destinos">Ventajas de viajar con Costaline</p>
    <p class="__paragraph">
        Al elegir Costaline, disfrutarás de una experiencia superior. Los autobuses están equipados con asientos reclinables, aire acondicionado y entretenimiento a bordo. Además, la puntualidad y el excelente servicio al cliente son características que distinguen a la línea, haciendo que tu viaje sea aún más agradable.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Chilpancingo?</p>
    <p class="__paragraph">El tiempo estimado de viaje es de aproximadamente 4 a 5 horas, dependiendo del tráfico y las condiciones de la carretera.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar con anticipación, especialmente durante temporadas altas o fines de semana, para asegurar tu lugar en el horario deseado.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Ofrecen servicios como asientos reclinables, aire acondicionado, baños a bordo y entretenimiento, garantizando un viaje cómodo y seguro.</p>

    <p class="__subtitle__destinos">¿Puedo cambiar mi boleto si surge un imprevisto?</p>
    <p class="__paragraph">Costaline permite cambios en los boletos, sujeto a términos y condiciones. Es recomendable contactar directamente con el servicio al cliente para más detalles.</p>

    <p class="__subtitle__destinos">¿Dónde puedo comprar los boletos de autobús?</p>
    <p class="__paragraph">Los boletos se pueden adquirir en línea a través del sitio web oficial o directamente en las taquillas de la terminal México Sur - Taxqueña.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-cdmx-a-chilpancingo", CdmxAchilpancingo);
