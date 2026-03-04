/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-modal-doters.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PagePagoOxxo extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

        <app-modal-doters></app-modal-doters>

         <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp","mediumImage": "../src/assets/img/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp", "smallImage": "../src/assets/img/banner/movil/banner-3-clics.webp", "link": "#index.html/banner1"},
                {"id": "slide2", "title": "Banner 2", "image": "../src/assets/img/banner/web/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp", "mediumImage": "../src/assets/img/banner/tablet/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp","smallImage": "../src/assets/img/banner/movil/banner-aca-diamante.webp", "link": "#index.html/banner2"},
                {"id": "slide3", "title": "Banner 3", "image": "../src/assets/img/banner/web/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp", "mediumImage": "../src/assets/img/banner/tablet/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp","smallImage": "../src/assets/img/banner/movil/banner-chil-aca.webp", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>


        <app-payments></app-payments>

        <section class="__section __section__servicio-autobus">
            <app-section-title section-title="Servicios a bordo: Autobus de doble piso Marco Polo"></app-section-title>
            <div class="__oxxo-img-container">
                <!-- image oxxo payment here -->
            </div>
            <p class="__paragraph">Términos y Condiciones Pagos con OXXO PAY</p>
            <article class="__list-container" id="scroll-bar-container">
                <ol class="__order-list">
                    <li class="__list-item"><p class="__text-list">La referencia generada no es un comprobante de pago, por lo tanto en ningún caso puede ser válida para viajar.</p></li>
                    <li class="__list-item">
                        <p class="__text-list">Para las referencias que genere el sistema por operaciones de Viajero Anticipado el cliente tendrá 24 horas para realizar el pago correspondiente.</p>
                        <ul>
                            <li class="__subitem"><p class="__subtext-list">El pago de las reservación de viaje de operaciones sin de Tarifa Completa podrán efectuarse 24 hrs. antes de la salida del autobús. </p></li>
                            <li class="__subitem"><p class="__subtext-list">En las reservaciones que involucren operaciones de Viajero Anticipado y Tarifas Completas el cliente tendrá 24 horas para realizar el pago correspondiente. de las reservación de viaje de operaciones sin de Tarifa Completa podrán efectuarse 24 hrs. antes de la salida del autobús.</p></li>
                        </ul>
                    </li>
                    <li class="__list-item"><p class="__text-list">Las Tarifas de Viajero Anticipado son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.</p></li>
                    <li class="__list-item"><p class="__text-list">El cliente puede realizar cambios de tramos, clases de servicio, fecha y horario. Para Tarifas de Viajero Anticipado no aplica cambio de nombre de pasajero, teniendo que pagar el cliente la diferencia con la tarifa vigente en taquilla al momento de realizar el viaje.</p></li>
                    <li class="__list-item"><p class="__text-list">El pago de la reservación puede efectuarse en cualquiera de las sucursales de Oxxo presentando en cajas el comprobante impreso con el número de referencia para confirmar su boleto. Los pagos solo serán recibidos en los horarios de servicio del establecimiento.</p></li>
                    <li class="__list-item"><p class="__text-list">Solo se reciben pagos en efectivo en una sola exhibición.</p></li>
                    <li class="__list-item"><p class="__text-list">Una vez efectuado el pago correspondiente, el sistema enviará de forma automática al correo electrónico capturado en el registro previo, la confirmación del viaje con el pase de abordar.</p></li>
                    <li class="__list-item"><p class="__text-list">En caso de tener alguna duda o aclaración con el servicio o con el número de referencia de su reservación comunicarse al 800 8000 386 en donde un ejecutivo lo asesora de manera personalizada.</p></li>
                    <li class="__list-item"><p class="__text-list">En pagos referenciados NO HAY CANCELACIONES NI DEVOLUCIONES.</p></li>
                    <li class="__list-item"><p class="__text-list">Un monto máximo de compra de 10,000 pesos.</p></li>
                </ol>
            </article>
        </section>
    `;
	}
}
customElements.define("page-pago-oxxo", PagePagoOxxo);
