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

class CdmxApinotepa extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de CDMX a Pinotepa - Puerto Escondido"></app-section-title>

    <p class="__paragraph">
        Viajar de la Ciudad de México a Pinotepa - Puerto Escondido en autobús es una opción cómoda y accesible. Con salidas desde la terminal México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $815, ofreciendo una excelente relación calidad-precio para quienes buscan explorar la costa oaxaqueña.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Pinotepa - Puerto Escondido parten desde la terminal México Sur - Taxqueña. Esta terminal es una de las más importantes de la Ciudad de México, ofreciendo múltiples servicios y comodidades para los viajeros. Asegúrate de llegar con tiempo suficiente para abordar tu autobús sin contratiempos.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Pinotepa - Puerto Escondido tienen dos horarios de salida diarios. Estos horarios están diseñados para ofrecer flexibilidad a los viajeros, permitiéndoles elegir el momento que mejor se adapte a sus necesidades. Es recomendable verificar los horarios específicos al momento de comprar tus boletos, ya que pueden variar según la temporada.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de CDMX a Pinotepa - Puerto Escondido comienza desde $815. Este costo refleja la calidad del servicio y las comodidades ofrecidas a bordo. Los autobuses están equipados con asientos reclinables, aire acondicionado y entretenimiento a bordo, asegurando un viaje placentero.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Pinotepa - Puerto Escondido?</p>
    <p class="__paragraph">
        Pinotepa - Puerto Escondido es un destino turístico popular por sus hermosas playas y vibrante cultura. Algunos puntos de interés incluyen: Playa Zicatela, famosa por sus olas e ideal para surfistas; Laguna de Manialtepec, un lugar perfecto para observar aves y disfrutar de paseos en kayak; y el Centro de Puerto Escondido, que ofrece una variedad de restaurantes y tiendas locales.
    </p>

    <p class="__subtitle__destinos">Explora Pinotepa - Puerto Escondido</p>
    <p class="__paragraph">
        Además de sus playas, Pinotepa - Puerto Escondido ofrece una rica experiencia cultural. Puedes visitar mercados locales, disfrutar de la gastronomía oaxaqueña y participar en festivales tradicionales. Este destino es ideal para quienes buscan una mezcla de relajación y aventura.
    </p>

    <p class="__subtitle__destinos">Compra tus boletos de autobús en Costaline</p>
    <p class="__paragraph">
        Adquirir tus boletos de autobús a Pinotepa - Puerto Escondido con Costaline garantiza un viaje de calidad. Sus autobuses están equipados con todas las comodidades necesarias para un trayecto confortable. Además, Costaline ofrece un servicio al cliente excepcional, asegurando que tu experiencia de viaje sea inolvidable.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Pinotepa - Puerto Escondido?</p>
    <p class="__paragraph">El tiempo de viaje puede variar, pero generalmente dura entre 12 y 14 horas, dependiendo del tráfico y las condiciones del camino.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar con anticipación, especialmente durante temporadas altas, para asegurar tu lugar y elegir el horario que mejor te convenga.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Los autobuses de Costaline ofrecen asientos reclinables, aire acondicionado, entretenimiento a bordo y sanitarios, asegurando un viaje cómodo y placentero.</p>

    <p class="__subtitle__destinos">¿Puedo llevar equipaje adicional?</p>
    <p class="__paragraph">Costaline permite llevar equipaje adicional, pero es importante verificar las políticas específicas de equipaje al momento de la compra del boleto.</p>

    <p class="__subtitle__destinos">¿Hay descuentos disponibles para estudiantes o personas mayores?</p>
    <p class="__paragraph">Costaline ofrece descuentos para estudiantes y personas mayores. Es recomendable consultar las condiciones y presentar la documentación necesaria al momento de la compra.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
	}
}
customElements.define("page-ruta-cdmx-a-pinotepa", CdmxApinotepa);
