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
        Viajar de la Ciudad de México a Acapulco Papagayo en autobús es una opción cómoda y accesible. Con múltiples salidas diarias desde la terminal México Sur - Taxqueña, los pasajeros pueden disfrutar de un viaje seguro y confortable. Los boletos están disponibles desde $400, ofreciendo una excelente relación calidad-precio para quienes buscan disfrutar de las playas y el ambiente de Acapulco.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de CDMX a Acapulco Papagayo parten principalmente desde la terminal México Sur - Taxqueña. Esta terminal es una de las más importantes de la Ciudad de México, ofreciendo servicios de calidad y una amplia gama de horarios para adaptarse a las necesidades de los viajeros.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Acapulco Papagayo tienen 11 horarios con una frecuencia de salida cada hora y media, lo que permite a los pasajeros elegir el horario que mejor se adapte a sus planes. Esta flexibilidad es ideal para quienes desean aprovechar al máximo su tiempo en Acapulco.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos comienza desde $400. Este costo competitivo incluye un viaje cómodo y seguro, con servicios a bordo que garantizan una experiencia placentera. Se recomienda adquirir los boletos con anticipación para asegurar su lugar.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Acapulco Papagayo?</p>
    <p class="__paragraph">
        Acapulco Papagayo ofrece una variedad de actividades imperdibles: La Quebrada, con sus famosos clavadistas; el Parque Papagayo, ideal para familias con su lago artificial; playas clásicas como Caleta y Caletilla; y una vibrante vida nocturna con una amplia oferta de bares y discotecas.
    </p>

    <p class="__subtitle__destinos">Explora Acapulco Papagayo</p>
    <p class="__paragraph">
        Este destino combina belleza natural y entretenimiento. Desde sus playas hasta sus puntos icónicos, hay algo para todos. No pierdas la oportunidad de disfrutar de la hospitalidad local y los paisajes del Pacífico mexicano.
    </p>

    <p class="__subtitle__destinos">Compra tus boletos de autobús en Costaline</p>
    <p class="__paragraph">
        Adquirir tus boletos con Costaline es una decisión inteligente para quienes buscan calidad. Ofrecemos autobuses modernos y bien equipados, asegurando un viaje placentero con una amplia gama de horarios y precios competitivos.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de CDMX a Acapulco Papagayo?</p>
    <p class="__paragraph">Suele durar aproximadamente de 5 a 6 horas, dependiendo del tráfico y las condiciones de la carretera.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar los boletos con anticipación?</p>
    <p class="__paragraph">Se recomienda hacerlo, especialmente durante temporadas altas, para asegurar disponibilidad en el horario deseado.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Están equipados con asientos reclinables, aire acondicionado, baños a bordo y entretenimiento.</p>

    <p class="__subtitle__destinos">¿Puedo cambiar mi boleto si surge un imprevisto?</p>
    <p class="__paragraph">Costaline permite cambios en los boletos, sujetos a términos y condiciones. Revisa las políticas al momento de la compra.</p>

    <p class="__subtitle__destinos">¿Hay descuentos para estudiantes o personas mayores?</p>
    <p class="__paragraph">Sí, se ofrecen descuentos especiales presentando una identificación válida al momento de la compra y al abordar.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define("page-cdmx-a-acapulco-papagayo", CdmxAacapulcoPapagayo);
