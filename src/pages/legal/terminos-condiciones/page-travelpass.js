/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-modal-travelpass.js?v=1.0.2";
import "../../../components/app-button-whats.js?v=1.0.2";
import "../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../components/app-destinations-table.js";

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PageTravelpass extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/web/banner-viaja-con-monedero-electronico-de-acapulco-a-chilpancingo.webp","mediumImage": "../src/assets/img/banner/promociones/tablet/banner-buen-fin-55-descuento.webp", "smallImage": "../src/assets/img/banner/promociones/movil/banner-buen-fin-descunto-55.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__sections">
    <app-section-title section-title="Términos y condiciones"></app-section-title>
</section>

<section class="__sections __section-img">
    <img src="../../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Travelpass" class="img-logo">
</section>

<section class="__sections">
    <article class="__bg-blue">
        <ul class="__terms-purchase-list">
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Es un monedero electrónico que te dará más dinero de acuerdo a la cantidad que abones. Con este monedero electrónico podrás pagar tu boleto de autobús en Costa Line para la ruta Chilpancingo-Acapulco, Acapulco-Chilpancingo.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Solo aplica en servicio de Primera y Plus.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Es importante tomar en cuenta que el Monedero Electrónico en ningún caso y bajo ninguna circunstancia puede canjearse por dinero en efectivo y única y exclusivamente podrán canjearse en la adquisición de un boleto de autobús en Costa Line.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    El monedero electrónico Monedero Electrónico no puede venderse o transferirse.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Al afiliarte al monedero electrónico recibirás un correo de confirmación con tu Número de registro único.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Podrán darse de alta todas las personas mayores de 18 años.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Personas morales como empresas, entidades gubernamentales, fundaciones, etc. No podrán adquirir el monedero electrónico Monedero Electrónico.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Se da por hecho que una vez adquirido el monedero electrónico Monedero Electrónico, el pasajero acepta todas las condiciones y restricciones del mismo.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Para adquirir tu monedero electrónico, puede hacerlo directo en las taquillas de Costa Line o desde nuestra web 
                    <a class="__link-text" href="https://costaline.com.mx/">https://costaline.com.mx/</a>
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Los datos a proporcionar serán los siguientes:
                </p>
                <ul class="__terms-purchase-list">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Nombre completo
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Correo electrónico
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Número telefónico del contacto
                        </p>
                    </li>
                </ul>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Podrás consultar tu saldo desde la página web o directamente en las taquillas de Costa Line.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    El titular de la Cuenta de Monedero Electrónico deberá estar incluido en la Reserva para poder adquirir un Boleto con monedero.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Los beneficios con Monedero Electrónico aplican de acuerdo a la recarga que realices en el monedero:
                </p>
                <ul class="__terms-purchase-list">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Recarga de $100 a $199 pesos y te abonamos el 20% de tu recarga
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Recarga de $200 a $399 pesos y te abonamos el 25% de tu recarga
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Recarga de $400 pesos o más y te abonamos el 30% de tu recarga
                        </p>
                    </li>
                </ul>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    El beneficio tendrá una vigencia de 30 días contando a partir de la fecha en que se realiza la recarga.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    El saldo es válido únicamente para adquirir boletos de autobús para viajar a:
                </p>
                <ul class="__terms-purchase-list">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Chilpancingo-Acapulco Papagayo</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Chilpancingo-Acapulco Centro</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Chilpancingo-Las Cruces</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Chilpancingo-Acapulco Ejido</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Acapulco Papagayo-Chilpancingo</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Acapulco Centro-Chilpancingo</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Las Cruces-Chilpancingo</p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">Acapulco Ejido-Chilpancingo</p>
                    </li>
                </ul>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Sólo aplica en servicio de primera.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Puedes adquirir con tu monedero cualquier tipo de boleto (Adulto, Niño, INAPAM, Estudiante, Maestro o Viajero Anticipado).
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    El uso del monedero aplica solo en web o taquillas Costa Line de Chilpancingo y Acapulco.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Aplica la tarifa vigente al momento de la compra.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Puede aplicar pago mixto, es decir una parte con monedero y otra en efectivo o tarjeta bancaria.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    El cliente puede realizar cambios de fecha y horario. No aplica cambio de nombre de pasajero, no aplica cambio de tramo ni de clase de servicio. El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.costaline.com.mx) en la sección “modifique su itinerario” o también podrán ser realizados en las taquillas Costa Line de Chilpancingo y Acapulco.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Si el cliente adquiere más de un boleto utilizando Monedero Electrónico (pago completo o mixto) en una sola transacción y desea realizar un intercambio, este se podrá realizar siempre y cuando se realice para todos los boletos adquiridos en dicha compra.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la tarifa adquirida, el cliente deberá pagar la diferencia entre la tarifa pagada y tarifa vigente al momento del cambio de la corrida original, dicho pago podrá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la tarifa original pagada, no habrá devoluciones.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Para dudas y comentarios, comunícate a nuestro centro de atención a clientes al 800 0037 635. O puedes ir directo a nuestras taquillas en Costa Line.
                </p>
            </li>
            <li class="__terms-purchase-item">
                <p class="__terms-purchase-text">
                    Solo se podrán facturar boletos confirmados (no aplica factura por bonificación) dentro del lapso de 30 días naturales, contados a partir de la fecha del viaje. Una vez generada la factura, ya no se podrá hacer ningún cambio o cancelación en el documento emitido.
                </p>
            </li>
        </ul>
    </article>
</section>

    `;
	}
}

customElements.define("page-travelpass", PageTravelpass);
