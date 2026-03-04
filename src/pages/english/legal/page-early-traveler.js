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

class PageEarlyTraveler extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../../../src/assets/img/banner/promociones/web/banner-viajero-anticipado-descuento-35+5.webp","mediumImage": "../../../../src/assets/img/banner/promociones/tablet/35+5-tablet.webp", "smallImage": "../../../../src/assets/img/banner/promociones/movil/35+5-mobile.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section">
                <app-section-title section-title="Terms and Conditions – Early Traveler"></app-section-title>
            </section>

            <img src="../../src/assets/img/logos/viajero-anticipado-costa.webp" alt="Travelpass" class="img-logo">

            <section class="__sections">
                <article class="__bg-blue">
                    
                    <p class="__terms-purchase-text">
                        Early Traveler applies to purchases made on the website, ticket offices, AERS-owned sales points, telephone contact center, and can be paid with any payment method.
                    </p>
                    <p class="__terms-purchase-text">
                        Not valid for external channels or points of sale.
                    </p>
                    <p class="__terms-purchase-text">
                        When purchasing your ticket online, via the app, or Call Center, you will receive an Early Traveler discount of up to 35%, plus an additional 5% discount on the Early Traveler fare. Discount subject to availability.
                    </p>

                    <p class="__terms-purchase-text">
                        When purchasing your tickets at the ticket office, you will receive an Early Traveler discount of up to 35%. Discount subject to availability. On the routes defined for Early Traveler, Open Tickets cannot be sold, only confirmed ones. Open tickets may be sold but at the full adult fare.
                    </p>
                    <p class="__terms-purchase-text">
                        Early Traveler fares do not apply nor can they be combined with other types of discounts or promotions.
                    </p>
                    <p class="__terms-purchase-text">
                        Early Traveler fares are personal and non-transferable. To validate them, the customer must present an official ID before boarding the bus. If the requirement is not met, the Full Fare must be paid.
                    </p>

                    <p class="__terms-purchase-text">
                        The period to purchase bus tickets and obtain the Early Traveler fare begins at the first minute of the day following the inquiry and up to two months later, available online, at ticket offices, and through the telephone center. If the early fare is NOT available, a 5% discount applies for round trips purchased online, or a 5% discount for round trips purchased at the ticket office.
                    </p>
                    <p class="__terms-purchase-text">
                        The fare and discounts are always subject to availability.
                    </p>
                    <p class="__terms-purchase-text">
                        The 50% discount promotion for Viva Aerobús passengers applies only to the adult fare. The Early Traveler fare does not apply to tickets with INAPAM, children, students, teachers, or open tickets.
                    </p>
                    <p class="__terms-purchase-text">
                        Passengers who miss their trip and arrive at the terminal within the next 30 minutes after their scheduled departure will be rescheduled free of charge on the next available departure. If they arrive after 30 minutes of their scheduled departure or wish to travel later or another day, 50% of the adult fare will be charged.
                    </p>
                </article>
            </section>


            <section class="__sections">
                <article class="__bg-white">

                    <h3 class="__subtitle-section">Referenced Payment Policies – Early Traveler:</h3>

                    <p class="__terms-purchase-text">
                        For references generated by the system for Early Traveler operations, the customer will have 24 hours to make the corresponding payment.
                    </p>
                    <p class="__terms-purchase-text">
                        Payment for Full Fare travel reservations may be made up to 24 hours before the bus departure.
                    </p>
                    <p class="__terms-purchase-text">
                        For reservations involving both Early Traveler and Full Fare operations, the customer will have 24 hours to make the corresponding payment.
                    </p>

                    <p class="__terms-purchase-text">
                        After the specified timeframes, without exception, the reservation will be automatically canceled by the system and the seat will be released for sale.
                    </p>
                    <p class="__terms-purchase-text">
                        Early Traveler fares are personal and non-transferable. To validate them, the customer must present an official ID before boarding the bus. If the requirement is not met, the Full Fare must be paid.
                    </p>
                    <p class="__terms-purchase-text">
                        Customers may request a change of date and time. For Festival de Viajes fares, name changes are not allowed; the customer must pay the fare difference with the current ticket office fare at the time of travel.
                    </p>
                    
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">Ticket Exchange Policies:</h3>

                    <p class="__terms-purchase-text">
                        For Early Traveler fares, passenger name changes are not allowed.
                    </p>
                    <p class="__terms-purchase-text">
                        Travel itinerary changes (date or time) can be made directly on the website (www.costaline.com.mx) in the “Modify your itinerary” section, or at Costa Line ticket offices and/or sales points by presenting the boarding pass and valid official identification. Each ticket is limited to a maximum of two changes.
                    </p>
                    <p class="__terms-purchase-text">
                        If the current fare at the time of the change is higher than the Early Traveler fare paid, the customer must pay the difference between the fare paid and the current fare at the time of changing the original trip. The payment must be made using the same payment method previously used. Applies to all payment methods.
                    </p>

                    <p class="__terms-purchase-text">
                        If the current fare at the time of the change is lower than the Early Traveler fare paid, no refunds will be issued.
                    </p>
                    <p class="__terms-purchase-text">
                        The electronic wallet is accepted as a form of payment.
                    </p>
                    <p class="__terms-purchase-text">
                        With the Early Traveler fare, cancellations are not accepted.
                    </p>
                    <p class="__terms-purchase-text">
                        All payment methods apply at the ticket office and on the website.
                    </p>

                </article>
            </section>

           <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">Participating Brands:</h3>

                    <p class="__terms-purchase-text">
                        <strong>Costaline AERS.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Seats subject to availability, check them at <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> and at ticket offices.
                    </p>
                    <p class="__terms-purchase-text">
                        For questions and comments, please contact our customer service center at 800 0037 635 and 800 2490 460.
                    </p>

                </article>
            </section>
                        
            <h3 class="__title__section">Routes</h3>

            <section class="__sections __destinations-table-section">
                <app-destinations-table src="../../../src/data/destinos-cl.json" language="en"></app-destinations-table>
            </section>

    `;
	}
}

customElements.define("page-early-traveler", PageEarlyTraveler);
