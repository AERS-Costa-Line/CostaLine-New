/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-button-whats.js?v=1.0.2";
import "../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
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
                {"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/banner/promociones/web/banner-mas-komodo-descuento-85-desde-mexico-sur-a-acapulco-papagayo.webp","mediumImage": "../../src/assets/img/banner/promociones/tablet/banner-ofertas-en-un-click-50-descuento.webp", "smallImage": "../src/assets/img/banner/promociones/movil/banner-ofertas-en-un-click-50-descuento.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section">
                <p style="width: 90%; margin: auto; text-align: left; color: #003a5d; font-size: 20px; ">
                    +Komodo es el servicio exclusivo de <strong>Costa Line </strong>que te permite viajar con mayor comodidad asegurando el asiento de al lado, podrá adquirirse con un 85% de descuento aplicable sobre la tarifa de adulto. Perfecto para disfrutar de más espacio personal, privacidad y confort durante tu trayecto.
                </p>
            </section>
            
            <section class="__section">
                <app-section-title section-title="Términos y Condiciones"></app-section-title>
            </section>

            <section class="__sections">
                <article class="__bg-blue">

                    <p>
                        <strong>El servicio +KOMODO es un beneficio adicional que permite al pasajero adquirir el asiento junto al suyo o también denominado asiento contiguo para mayor comodidad y espacio personal durante el viaje.</strong>
                    </p>
                    
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Este asiento podrá adquirirse con un 85% de descuento aplicable sobre la tarifa de adulto.</strong>
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>El servicio +KOMODO está sujeto a disponibilidad.</strong>
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>El servicio +KOMODO está disponible en COSTA LINE únicamente en Servicio Plus, en la ruta México Sur Taxqueña – Acapulco Papagayo y Acapulco Papagayo - México Sur Taxqueña.</strong>
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>El descuento puede variar dependiendo de la ruta participante, horario, temporada y demanda, y se mostrará al momento de la compra.</strong>
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Condiciones de uso</h3>

                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El servicio +KOMODO adquirido no podrá ser ocupado por otra persona ni por una mascota durante el viaje.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El beneficio +KOMODO con descuento está limitado a 4 asientos por autobús.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El boleto del beneficio +KOMODO es para uso exclusivo del comprador y para los fines establecidos del mismo; no podrá ser cambiado de forma independiente, cualquier cambio debe realizarse en conjunto con el boleto principal.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de no utilizarse, no se otorgará reembolso ni compensación alguna.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El asiento contiguo debe ser adquirido junto con el boleto principal o desde una reservación activa.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Disponible únicamente en la ruta seleccionada y sujeto a la disponibilidad de cada autobús.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Aplica para compras realizadas en taquilla, sitio web oficial y aplicación móvil de Costa Line.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El servicio no aplica en boletos abiertos, únicamente en boletos confirmados.
                        </p>
                    </li>

                   
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Restricciones</h3>

                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            El asiento contiguo no es reembolsable, transferible ni canjeable por otro servicio, fecha o destino.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            No aplica cambio de nombre de pasajero.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            No es acumulable con otros descuentos o promociones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            La disponibilidad del asiento de junto está sujeta al inventario al momento de la compra, sin garantía de existencia en todos los horarios o rutas.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            No se permiten cancelaciones en la compra del asiento de junto (+KOMODO).
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            No aplica para viajar en periodos vacacionales (temporada alta), puentes o días feriados establecidos por la Ley Federal del Trabajo y/o la Secretaría de Educación Pública.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Los viajes perdidos por no abordar el autobús en tiempo y forma no serán reembolsables; los reembolsos que procedan de acuerdo con la Ley serán realizados en la misma forma en que se efectuó el pago.
                        </p>
                    </li>

                </article>
            </section>


            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Cambios y cancelaciones</h3>

                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de cancelación del boleto principal, el asiento contiguo se pierde automáticamente sin derecho a reembolso.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de cambio de hora o día del boleto principal, la compra del asiento contiguo quedará sujeta a disponibilidad en la nueva corrida.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Si no existe disponibilidad, el asiento contiguo se pierde sin derecho a reembolso.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Cada operación está limitada a 2 cambios por internet y 1 en taquilla (pendiente de confirmación).
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            En caso de que la tarifa vigente al momento del cambio sea menor a la tarifa original pagada, no habrá devoluciones.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Si la tarifa vigente al momento del cambio es mayor a la tarifa original pagada, el cliente deberá cubrir la diferencia entre la tarifa pagada y la vigente.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Aplica con todas las formas de pago.
                        </p>
                    </li>

                </article>
            </section>


            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Aceptación de condiciones</h3>

                    <p>
                        <strong>Al adquirir el servicio +KOMODO el usuario reconoce haber leído, entendido y aceptado todos los términos y condiciones aquí descritos. Costa Line se reserva el derecho de modificar los presentes términos y condiciones sin previo aviso.</strong>
                    </p>
                </article>
            </section>

            <section class="__section __section__FATQs">
                <app-section-title section-title="Preguntas frecuentes sobre +Komodo"></app-section-title>
               <article class="__grid-cards-container__dropdown" id="dropdowns-container">
                    <app-dropdown items-src="../src/data/dropdown-preguntas-mas-komodo.json"></app-dropdown>
                </article>
            </section>

        `;
	}
}
customElements.define("page-anticipado", PageAnticipado);
