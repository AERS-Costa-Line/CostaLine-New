/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-modal-travelpass.js?v=1.0.2";
import "../../../components/app-button-whats.js?v=1.0.2";
import "../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-modal-doters.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PageTerminosHotSale extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

        <app-modal-doters></app-modal-doters>

        <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/promociones/web/banner-hot-sale-descuento-50.webp","mediumImage": "../src/assets/img/banner/promociones/tablet/banner-hot-sale-50-descuento.webp", "smallImage": "../src/assets/img/banner/promociones/movil/banner-hot-sale-50-descuento.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
                
        <app-payments></app-payments>
                    
        <section class="__section">
            <app-section-title section-title="Términos y Condiciones Hot Sale"></app-section-title>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Hot Sale aplica para venta en línea (App Costa Line y sitio web) y centro de contacto telefónico y se puede realizar la compra con cualquier forma de pago.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            No aplica venta en taquillas, puntos de venta propios AERS Costa Line ni canales o puntos de venta externos.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En las rutas definidas para Hot Sale no se podrán vender boletos abiertos, solo confirmados. Se podrán vender boletos abiertos pero con una tarifa a precio de adulto.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Las tarifas de Hot Sale no aplican ni son acumulables con otro tipo de descuentos o promociones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Las Tarifas de Hot Sale son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El periodo para comprar boletos de autobús y obtener la tarifa de Hot Sale es a partir del primer minuto del día siguiente a la consulta y hasta un mes posterior. En caso de NO contar con tarifa anticipada, aplica el descuento del 15% por viaje redondo comprando en línea o bien aplica el 10% por viaje redondo comprando en taquilla.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La tarifa y los descuentos siempre estarán sujetos a disponibilidad.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La tarifa de Hot Sale no aplica en la compra de boletos con beneficios de INAPAM, menores, estudiantes, maestros y boletos abiertos.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La acumulación de puntos Doters de un boleto con tarifa de Hot Sale, deberá calcularse sobre la tarifa que pagó el cliente en efectivo o tarjeta bancaria y/o cualquier otra forma de pago (Pagos referenciados, exceptuando los puntos). Los puntos Doters generados pueden ser utilizados como forma de pago y se apegaran las mismas políticas y restricciones de Pago con puntos de Doters.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Se reubicará sin costo a la próxima salida disponible al pasajero que haya perdido su viaje y llegue a la terminal dentro de los próximos 30 minutos a su hora de salida. Si llega después de los 30 minutos a su hora de salida o requiere salir después u otro día se cobrará 50% de la tarifa adulto.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Políticas de Pagos Referenciados Hot Sale:</h3>
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para las referencias que genere el sistema por operaciones de Hot Sale el cliente tendrá 24 horas para realizar el pago correspondiente.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El pago de las reservación de viaje de operaciones de Tarifa Completa podrán efectuarse 24 hrs. antes de la salida del autobús.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En las reservaciones que involucren operaciones de Hot Sale y Tarifas Completas el cliente tendrá 24 horas para realizar el pago correspondiente.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Pasado los tiempos mencionados, sin excepción alguna la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Las Tarifas de Hot Sale son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El cliente puede realizar cambios de clases de servicio, fecha y horario. Para Tarifas de Viajero Anticipado no aplica cambio de nombre de pasajero, teniendo que pagar el cliente la diferencia con la tarifa vigente en taquilla al momento de realizar el viaje.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Políticas de Intercambio de Boletos:</h3>
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para tarifas de Hot Sale no aplica cambio de nombre de pasajero.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.etn.com.mx) en la sección “modifique su itinerario” o también podrán ser realizados en taquillas y/o puntos de venta Costa Line presentando el pase de abordar y una identificación oficial vigente. Cada operación está limitada a un máximo de dos cambios por boleto.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la tarifa Hot Sale pagada, el cliente deberá pagar la diferencia entre la tarifa pagada y tarifa vigente al momento del cambio de la corrida original, dicho pago podrá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la tarifa de Hot Sale pagada, no habrá devoluciones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Con la tarifa de Hot Sale no se aceptan cancelaciones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Aplica todas las formas de pago en sitio web.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Asientos sujetos a disponibilidad, consúltalos en www.costaline.com.mx y App AERS Costa Line
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para dudas y comentarios, comunícate a nuestro centro de atención a clientes al 800 0037 635 Opción 1.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Rutas Participantes:</h3>
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Vigencia de compra del 26 de mayo al 3 de junio de 2025
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Para viajar del 27 mayo al 15 de agosto de 2025
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Descuentos sujeto a disponibilidad.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <h3 class="__title__section">Rutas</h3>

            <section class="__sections __destinations-table-section">
                <app-destinations-table src="../src/data/destinos-cl.json"></app-destinations-table>
            </section>
    `;
	}
}
customElements.define("page-terminos-hot-sale", PageTerminosHotSale);
