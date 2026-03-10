/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../components/app-dropdown.js"; // Importar el componente dropdown

/*-------------------------SCRIPTS---------------------------*/

class PageAnticipado extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            
            <app-banner-slider
                slides-data='[
                    {
                        "id": "slide1", 
                        "title": "Banner 1", 
                        "image": "../../../src/assets/img/promociones/viajero-anticipado/banners/web/banner-viajero-anticipado-promocion-40-desc.webp",
                        "mediumImage": "../../../src/assets/img/promociones/viajero-anticipado/banners/tablet/banner-viajero-anticipado-promocion-40-desc.webp", 
                        "smallImage": "../../../src/assets/img/promociones/viajero-anticipado/banners/mobile/banner-viajero-anticipado-promocion-40-desc.webp", 
                        "link": "#index.html/banner1"
                    }
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section">
                <app-section-title section-title="Términos y Condiciones"></app-section-title>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Viajero Anticipado aplica tanto para venta en sitio web, taquillas, puntos de venta propios AERS, centro de contacto telefónico y se puede realizar la compra con cualquier forma de pago.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                No aplica para canales o puntos de venta externos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Al adquirir tu boleto en Web, app o Call Center tendrán un descuento de Viajero Anticipado de hasta el 40%. Descuento sujeto a disponibilidad.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Al adquirir tus boletos en Taquilla tendrán un descuento de Viajero Anticipado de hasta el 40%. Descuento sujeto a disponibilidad. En las rutas definidas para Viajero Anticipado no se podrán vender Boletos Abiertos, solo confirmados. Se podrán vender boletos abiertos pero con una tarifa a precio de adulto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las tarifas de Viajero Anticipado no aplican ni son acumulables con otro tipo de descuentos o promociones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las Tarifas de Viajero Anticipado son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El periodo para comprar boletos de autobús y obtener la tarifa de Viajero Anticipado es a partir del primer minuto del día siguiente a la consulta y hasta dos meses posteriores, disponible en internet, taquillas y centro telefónico. En caso de NO contar con tarifa anticipada, aplica el descuento del 10% por viaje redondo comprando en línea o bien aplica el 10% el cual aplica en el viaje de regreso.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La tarifa y los descuentos siempre estarán sujetos a disponibilidad.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La promoción de 50% de descuento para pasajeros de Viva Aerobús, será únicamente sobre la tarifa adulto La tarifa de Viajero Anticipado no aplica en la compra de boletos con beneficios de INAPAM, menores, estudiantes, maestros y boletos abiertos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se reubicará sin costo a la próxima salida disponible al pasajero que haya perdido su viaje y llegue a la terminal dentro de los próximos 30 minutos a su hora de salida. Si llega después de los 30 minutos a su hora de salida o requiere salir después u otro día se cobrará 50% de la tarifa adulto.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Políticas de Pagos Referenciados Viajero Anticipado</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para las referencias que genere el sistema por operaciones de Viajero Anticipado el cliente tendrá 24 horas para realizar el pago correspondiente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El pago de las reservación de viaje de operaciones de Tarifa Completa podrán efectuarse 24 hrs. antes de la salida del autobús.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En las reservaciones que involucren operaciones de Viajero Anticipado y Tarifas Completas el cliente tendrá 24 horas para realizar el pago correspondiente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pasado los tiempos mencionados, sin excepción alguna la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las Tarifas de Viajero Anticipado son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El cliente puede realizar cambio de fecha y hora. Para tarifas de Festival de Viajes no aplica cambio de nombre de pasajero, teniendo que pagar el cliente la diferencia con la tarifa vigente en taquilla al momento de realizar el viaje.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Políticas de Intercambio de Boletos</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para tarifas Viajero Anticipado no aplica cambio de nombre de pasajero.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.costaline.com.mx) en la sección “modifique su itinerario” o también podrán ser realizados en taquillas y/o puntos de venta ETN presentando el pase de abordar y una identificación oficial vigente. Cada operación está limitada a un máximo de dos cambios por boleto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la tarifa Viajero Anticipado pagada, el cliente deberá pagar la diferencia entre la tarifa pagada y tarifa vigente al momento del cambio de la corrida original, dicho pago deberá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la tarifa Viajero Anticipado pagada, no habrá devoluciones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El Monedero electrónico aplica como forma de pago.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Con la tarifa de Viajero Anticipado no se aceptan cancelaciones.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Aplica todas las formas de pago en taquilla y sitio web.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Marcas participantes: Costaline AERS.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Asientos sujetos a disponibilidad, consúltalos en www.costaline.com.mx y taquillas.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Para dudas y comentarios, comunícate a nuestro centro de atención a clientes a los teléfonos 800 0037 635 y 800 2490 460
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
            
            <section class="__section __section__FATQs">
                <app-section-title section-title="Preguntas frecuentes sobre +Komodo"></app-section-title>
               <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../../src/data/dropdown-preguntas-mas-komodo.json"></app-dropdown>
                </article>
            </section>
        `;
  }
}
customElements.define("page-anticipado", PageAnticipado);
