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

class CdmxAacapulcoLazaroCardenas extends HTMLElement {
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
    <app-section-title section-title="Boletos de autobús de Acapulco a Lázaro Cárdenas"></app-section-title>

    <p class="__paragraph">
        Viajar de Acapulco a Lázaro Cárdenas en autobús es una opción cómoda y accesible. Los boletos están disponibles desde la Terminal Papagayo, con salidas cada 4 horas. Los precios comienzan desde $365, ofreciendo una experiencia de viaje segura y confortable.
    </p>

    <p class="__subtitle__destinos">¿Desde qué terminales sale?</p>
    <p class="__paragraph">
        Los autobuses que cubren la ruta de Acapulco a Lázaro Cárdenas parten desde la Terminal Papagayo. Esta terminal es conocida por su ubicación céntrica y fácil acceso, lo que la convierte en un punto de partida ideal para los viajeros que buscan comodidad y eficiencia en su viaje.
    </p>

    <p class="__subtitle__destinos">¿En qué horarios sale?</p>
    <p class="__paragraph">
        Los autobuses hacia Lázaro Cárdenas tienen 4 horarios con una frecuencia de salida cada 4 horas, lo que permite a los pasajeros elegir el horario que mejor se adapte a sus necesidades. Esta flexibilidad es ideal para quienes tienen itinerarios ajustados o prefieren viajar en horarios específicos.
    </p>

    <p class="__subtitle__destinos">¿Qué precio tiene?</p>
    <p class="__paragraph">
        El precio de los boletos de autobús de Acapulco a Lázaro Cárdenas comienza desde $365. Este costo refleja la calidad del servicio y la comodidad que ofrecen los autobuses, asegurando un viaje placentero y seguro para todos los pasajeros.
    </p>

    <p class="__subtitle__destinos">¿Qué hacer en Lázaro Cárdenas?</p>
    <p class="__paragraph">
        Lázaro Cárdenas es un destino que ofrece una variedad de atractivos turísticos. Entre los puntos de interés se encuentran sus hermosas playas, ideales para el descanso y la recreación. Además, los visitantes pueden explorar el puerto, disfrutar de la gastronomía local y conocer la rica cultura de la región.
    </p>

    <p class="__subtitle__destinos">Ventajas de comprar boletos de autobús en Costaline</p>
    <p class="__paragraph">
        Adquirir boletos de autobús a Lázaro Cárdenas con Costaline garantiza una experiencia de viaje de alta calidad. Sus autobuses están equipados con comodidades modernas, asientos confortables y un servicio al cliente excepcional. Además, la puntualidad y seguridad son prioridades, asegurando que llegues a tu destino sin contratiempos.
    </p>

    <app-section-title section-title="Preguntas frecuentes"></app-section-title>

    <p class="__subtitle__destinos">¿Cuánto dura el viaje de Acapulco a Lázaro Cárdenas?</p>
    <p class="__paragraph">El tiempo estimado de viaje en autobús es de aproximadamente 8 horas, dependiendo del tráfico y las condiciones de la carretera.</p>

    <p class="__subtitle__destinos">¿Es necesario reservar con anticipación?</p>
    <p class="__paragraph">Se recomienda reservar con anticipación, especialmente en temporadas altas, para asegurar tu lugar y elegir el horario que prefieras.</p>

    <p class="__subtitle__destinos">¿Qué servicios ofrecen los autobuses de Costaline?</p>
    <p class="__paragraph">Los autobuses de Costaline ofrecen servicios como aire acondicionado, asientos reclinables, entretenimiento a bordo y sanitarios, garantizando un viaje cómodo y agradable.</p>

    <p class="__subtitle__destinos">¿Puedo llevar equipaje adicional?</p>
    <p class="__paragraph">Costaline permite llevar equipaje adicional, pero es importante verificar las políticas específicas de equipaje al momento de la compra del boleto.</p>

    <p class="__subtitle__destinos">¿Hay descuentos disponibles para estudiantes o personas mayores?</p>
    <p class="__paragraph">Costaline ofrece descuentos especiales para estudiantes y personas mayores. Se recomienda consultar las condiciones y presentar la identificación correspondiente al momento de la compra.</p>
</section>
            
            <app-modal-multi-image></app-modal-multi-image>
            <app-modal-image></app-modal-image>

            <app-cookies-policy></app-cookies-policy>
            
            <app-button-eva-trip></app-button-eva-trip>

        `;
  }
}
customElements.define(
  "page-ruta-acapulco-a-lazaro-cardenas",
  CdmxAacapulcoLazaroCardenas,
);
