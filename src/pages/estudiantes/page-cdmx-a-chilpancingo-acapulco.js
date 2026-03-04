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

class CdmxChilpancingoAcapulco extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Chilpancingo - Acapulco"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Chilpancingo y Acapulco en autobús es una opción cómoda y accesible. Con salidas frecuentes desde la Terminal de Autobuses de México Norte, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $400, ofreciendo una excelente relación calidad-precio para quienes buscan explorar estos destinos turísticos.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Chilpancingo y Acapulco parten principalmente desde la Terminal de Autobuses de México Norte. Esta terminal es una de las más importantes de la ciudad, ofreciendo múltiples servicios y comodidades para los viajeros. Asegúrate de llegar con tiempo suficiente para abordar tu autobús sin contratiempos.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Chilpancingo y Acapulco tienen una frecuencia de salida cada dos horas, lo que permite a los viajeros elegir el horario que mejor se adapte a sus necesidades. Con un total de nueve horarios disponibles a lo largo del día, es fácil encontrar una opción que se ajuste a tu itinerario de viaje.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Chilpancingo y Acapulco comienza desde $400. Este costo puede variar dependiendo de la temporada y la demanda, por lo que se recomienda adquirir los boletos con anticipación para asegurar el mejor precio posible.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Chilpancingo y Acapulco?</p>
    <p class="__paragraph">
        Chilpancingo ofrece una rica historia con lugares como el Museo Regional de Guerrero y la Catedral de Santa María de la Asunción. Acapulco es famoso por sus playas paradisíacas, como la Playa Condesa y la Quebrada. Ambos destinos ofrecen una variedad de actividades para todos los gustos, desde historia local hasta una vibrante vida nocturna.
    </p>

    <p class="__subtitle__destinos">¿Por qué elegir Costaline para tu viaje?</p>
    <p class="__paragraph">
        Costaline se destaca por ofrecer un servicio de alta calidad, garantizando un viaje cómodo y seguro. Sus unidades están equipadas con asientos reclinables, aire acondicionado y entretenimiento a bordo. Además, la facilidad de compra en línea y la variedad de horarios hacen de esta la opción ideal para tu viaje.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Chilpancingo?</p>
    <p class="__paragraph">El tiempo estimado de viaje en autobús de CDMX a Chilpancingo es de aproximadamente 4 a 5 horas, dependiendo del tráfico y las condiciones del camino.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar los boletos con anticipación, especialmente en temporadas altas, para asegurar disponibilidad y obtener el mejor precio posible.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Los autobuses de Costaline ofrecen servicios como asientos reclinables, aire acondicionado, baños a bordo y entretenimiento, asegurando un viaje cómodo y agradable.</p>

    <p class="__subtitle__destinos">¿Puedo cambiar mi boleto si surge un imprevisto?</p>
    <p class="__paragraph">Costaline permite cambios en los boletos, pero es importante revisar las políticas específicas de cambios y cancelaciones al momento de la compra.</p>

    <p class="__subtitle__destinos">¿Hay descuentos para estudiantes o personas mayores?</p>
    <p class="__paragraph">Costaline ofrece descuentos especiales para estudiantes y personas mayores, por lo que es recomendable consultar las condiciones y presentar la documentación necesaria al comprar.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define(
	"page-cdmx-a-chilpancingo-acapulco",
	CdmxChilpancingoAcapulco,
);
