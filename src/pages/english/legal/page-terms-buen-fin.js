/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../js/slick.js?v=1.0.2";
import "../../../components/app-destinations-table.js";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageTermsBuenFin extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
           <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../../../src/assets/img/banner/promociones/web/banner-buen-fin-descuento-55.webp","mediumImage": "../../../../src/assets/img/banner/promociones/tablet/banner-buen-fin-55-descuento.webp", "smallImage": "../../../../src/assets/img/banner/promociones/movil/banner-buen-fin-descunto-55.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>


            <app-payments></app-payments>

              
            <section class="__section">
                <app-section-title section-title="Terms and Conditions BUEN FIN"></app-section-title>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                       <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                BUEN FIN applies to online sales (Costa Line App and website) and telephone contact center, and the purchase can be made with any form of payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Does not apply to sales at ticket offices, AERS Costa Line’s own points of sale, or external sales channels/points of sale.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                On the routes defined for BUEN FIN, open tickets cannot be sold, only confirmed tickets. Open tickets may be sold but with an adult fare price.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                BUEN FIN fares do not apply nor can they be combined with other types of discounts or promotions.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                BUEN FIN fares are personal and non-transferable. To make them valid, the customer must present an official ID before boarding the bus; if this requirement is not met, the Full Fare must be paid.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The period to purchase bus tickets and obtain the BUEN FIN fare is from the first minute of the day after the consultation and up to one month later. In case of NOT having an advance fare, a 10% discount applies for round trips purchased online, or a 10% discount applies for round trips purchased at the ticket office.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Fares and discounts will always be subject to availability.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The BUEN FIN fare does not apply to the purchase of tickets with INAPAM benefits, children, students, teachers, and open tickets.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The accumulation of Doters points for a ticket with BUEN FIN fare must be calculated on the fare paid by the customer in cash, bank card, and/or any other form of payment (referenced payments, except points). Doters points generated can be used as a form of payment and will be subject to the same policies and restrictions of Payment with Doters points.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                A passenger who missed their trip and arrives at the terminal within the next 30 minutes of their departure time will be reassigned at no cost to the next available departure. If they arrive after 30 minutes from their departure time or need to depart later or on another day, 50% of the adult fare will be charged.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">BUEN FIN Referenced Payment Policies:</h3>
                     <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For references generated by the system for BUEN FIN operations, the customer will have 24 hours to make the corresponding payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Payment for Full Fare travel reservations can be made up to 24 hours before the bus departure.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For reservations involving both BUEN FIN operations and Full Fares, the customer will have 24 hours to make the corresponding payment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                After the mentioned times, without exception, the reservation will be automatically canceled by the system and the seat will be released for sale.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                BUEN FIN fares are personal and non-transferable. To make them valid, the customer must present an official ID before boarding the bus; if this requirement is not met, the Full Fare must be paid.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The customer can make changes to service class, date, and time. For Advance Traveler Fares, name changes do not apply; the customer must pay the difference with the current fare at the ticket office at the time of travel.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Ticket Exchange Policies:</h3>
                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For BUEN FIN fares, passenger name changes do not apply.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Travel itinerary changes (date or time) can be made directly from the website (www.costaline.com.mx) in the "modify your itinerary" section or at Costa Line ticket counters and/or sales points by presenting the boarding pass and a valid official ID. Each ticket is limited to a maximum of two changes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the current fare at the time of the schedule change is higher than the BUEN FIN fare paid, the customer must pay the difference between the fare paid and the current fare at the time of the original schedule change. This payment can be made using the same payment method used previously. Applies to all payment methods.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the current fare at the time of the schedule change is lower than the BUEN FIN fare paid, no refunds will be issued.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                BUEN FIN fares do not allow cancellations.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                All payment methods apply on the website.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Seats subject to availability, check them at <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> and AERS Costa Line App.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For questions and comments, contact our customer service center at 800 0037 635 Option 1.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Participating Routes:</h3>
                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Purchase valid from November 15-18, 2024.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For travel from November 6 to December 17, 2024, and from January 9 to February 15, 2025.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Discounts subject to availability.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <h3 class="__title__section">Routes</h3>

            <section class="__sections __destinations-table-section">
                <app-destinations-table src="../../../src/data/destinos-cl.json" language="en" /></app-destinations-table>
            </section>

    `;
	}
}

customElements.define("page-terms-buen-fin", PageTermsBuenFin);
