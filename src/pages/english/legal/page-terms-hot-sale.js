/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-modal-doters.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../js/slick.js?v=1.0.2";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageTermsHotSale extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

        <app-modal-doters></app-modal-doters>

        <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/banner/promociones/web/banner-hot-sale-descuento-50.webp","mediumImage": "../../../src/assets/img/banner/promociones/tablet/banner-hot-sale-50-descuento.webp", "smallImage": "../../../src/assets/img/banner/promociones/movil/banner-hot-sale-50-descuento.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
                
        <app-payments></app-payments>
                    
        <section class="__section">
            <app-section-title section-title="Hot Sale Terms and Conditions"></app-section-title>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Hot Sale applies to online sales (Costa Line App and website) and the telephone contact center, and purchases can be made with any payment method.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Not valid for sales at ticket offices, AERS Costa Line-owned points of sale, or external sales channels or outlets.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            On routes defined for Hot Sale, open tickets cannot be sold, only confirmed tickets. Open tickets may be sold but at the regular adult fare.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Hot Sale fares do not apply and cannot be combined with other discounts or promotions.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Hot Sale fares are personal and non-transferable. To validate them, the customer must present an official ID before boarding the bus; otherwise, they must pay the full fare.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The period to purchase bus tickets and obtain the Hot Sale fare begins at the first minute of the day following the inquiry and lasts up to one month afterward. If there is NO advance fare available, a 15% round-trip discount applies when buying online, or a 10% round-trip discount applies when buying at the ticket office.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Fares and discounts are always subject to availability.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The Hot Sale fare does not apply to the purchase of tickets with INAPAM, children, students, teachers, or open tickets benefits.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The accumulation of Doters points for a ticket purchased at a Hot Sale fare must be calculated based on the amount paid by the customer in cash, bank card, or any other form of payment (referenced payments, except points). The Doters points generated may be used as a payment method and will be subject to the same policies and restrictions for paying with Doters points.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            A passenger who misses their trip and arrives at the terminal within 30 minutes after their departure time will be reassigned at no cost to the next available departure. If they arrive more than 30 minutes after their departure time, or request to travel later or on another day, a 50% adult fare will be charged.
                        </p>
                    </li>
                </ol>
            </article>
        </section>


        <section class="__sections">
            <article class="__bg-white">
                <h3 class="__subtitle-section">Referenced Payment Policies Hot Sale:</h3>
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For references generated by the system for Hot Sale operations, the customer will have 24 hours to make the corresponding payment.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Payment for Full Fare travel reservations may be made up to 24 hours before the bus departure.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For reservations involving both Hot Sale and Full Fare operations, the customer will have 24 hours to make the corresponding payment.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            After the mentioned timeframes, without exception, the reservation will be automatically canceled by the system and the seat will be released for sale.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Hot Sale Fares are personal and non-transferable. To validate them, the customer must present an official ID before boarding the bus; if the requirement is not met, the Full Fare must be paid.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            The customer may make changes to service class, date, and time. For Advance Traveler Fares, passenger name changes do not apply, and the customer must pay the difference with the current fare at the ticket office at the time of travel.
                        </p>
                    </li>
                </ol>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-blue">
                <h3 class="__subtitle-section">Ticket Exchange Policies:</h3>
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            For Hot Sale fares, passenger name changes do not apply.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Travel itinerary changes (date or time) can be made directly from the website (www.costaline.com.mx) in the “modify your itinerary” section, or at Costa Line ticket offices and/or points of sale by presenting the boarding pass and a valid official ID. Each operation is limited to a maximum of two changes per ticket.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            If the current fare at the time of the schedule change is higher than the Hot Sale fare paid, the customer must pay the difference between the fare paid and the current fare at the time of the change of the original trip. This payment may be made using the same payment method previously used. Applies to all forms of payment.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            If the current fare at the time of the schedule change is lower than the Hot Sale fare paid, no refunds will be issued.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Cancellations are not accepted with Hot Sale fares.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            All forms of payment apply on the website.
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Seats subject to availability, check them at www.costaline.com.mx and the AERS Costa Line App.
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
                <ol type="numeric" class="__order-list-column">
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            Purchase validity from May 26 to June 3, 2025
                        </p>
                    </li>
                    <li class="__terms-purchase-item">
                        <p class="__terms-purchase-text">
                            To travel from May 27 to August 15, 2025
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
            <app-destinations-table src="../../../src/data/destinos-cl.json" language="en"></app-destinations-table>
        </section>

    `;
	}
}
customElements.define("page-terms-hot-sale", PageTermsHotSale);
