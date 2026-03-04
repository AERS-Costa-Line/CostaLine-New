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

class ChilpancingoAacapulco extends HTMLElement {
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
    <app-section-title section-title="EJE Boletos de autobús de Chilpancingo a Acapulco"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Chilpancingo y Acapulco en autobús es una opción cómoda y accesible. Con salidas frecuentes desde la Terminal de Autobuses de México Norte, puedes disfrutar de un viaje seguro y confortable. Descubre los horarios, precios y todo lo que necesitas saber para planificar tu viaje.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Chilpancingo - Acapulco parten desde la Terminal de Autobuses de México Norte. Esta terminal es una de las más importantes de la ciudad, ofreciendo múltiples servicios para los viajeros, como áreas de espera, restaurantes y tiendas.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Chilpancingo y Acapulco tienen 9 horarios con una frecuencia de salida cada dos horas, asegurando que siempre haya una opción que se ajuste a tus necesidades. Con un total de 9 horarios disponibles a lo largo del día, puedes elegir el que mejor se adapte a tu itinerario.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Chilpancingo - Acapulco comienza desde $400. Este costo puede variar dependiendo de la temporada y la anticipación con la que compres tus boletos. Es recomendable adquirir tus boletos con anticipación para asegurar el mejor precio y disponibilidad.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Chilpancingo - Acapulco?</p>
    <p class="__paragraph">
        Chilpancingo y Acapulco son destinos llenos de historia y belleza natural. En Chilpancingo, puedes visitar el Museo Regional de Guerrero y el Parque Nacional El Veladero. Acapulco, por su parte, es famoso por sus playas como La Quebrada, donde puedes disfrutar de espectaculares saltos de clavadistas, y la Playa de Caleta, ideal para relajarse bajo el sol.
    </p>

    <p class="__subtitle__destinos">Explora los encantos de Chilpancingo - Acapulco</p>
    <p class="__paragraph">
        Además de sus playas, Acapulco ofrece una vibrante vida nocturna y una rica oferta gastronómica. No te pierdas el Fuerte de San Diego, un sitio histórico que ofrece vistas impresionantes de la bahía. En Chilpancingo, el Zócalo es un lugar perfecto para disfrutar de la cultura local y probar la deliciosa comida guerrerense.
    </p>

    <p class="__subtitle__destinos">Compra tus boletos de autobús en Costaline</p>
    <p class="__paragraph">
        Adquirir tus boletos de autobús a Chilpancingo - Acapulco con Costaline te garantiza un viaje cómodo y seguro. Sus autobuses están equipados con asientos reclinables, aire acondicionado y entretenimiento a bordo, asegurando una experiencia de viaje placentera. No esperes más y reserva tus boletos con Costaline para disfrutar de un servicio de calidad.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Chilpancingo - Acapulco?</p>
    <p class="__paragraph">El tiempo de viaje promedio es de aproximadamente 5 a 6 horas, dependiendo del tráfico y las condiciones del camino.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar con anticipación, especialmente en temporadas altas, para asegurar disponibilidad y mejores precios.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Los autobuses de Costaline ofrecen servicios como asientos reclinables, aire acondicionado, baños a bordo y entretenimiento durante el viaje.</p>

    <p class="__subtitle__destinos">¿Puedo llevar equipaje adicional?</p>
    <p class="__paragraph">Costaline permite llevar equipaje adicional, pero es importante verificar las políticas específicas de equipaje al momento de la compra.</p>

    <p class="__subtitle__destinos">¿Hay descuentos para estudiantes o personas mayores?</p>
    <p class="__paragraph">Costaline ofrece descuentos especiales para estudiantes y personas mayores, por lo que es recomendable consultar las condiciones al momento de adquirir los boletos.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define(
	"page-eje-chilpancingo-a-acapulco",
	ChilpancingoAacapulco,
);
