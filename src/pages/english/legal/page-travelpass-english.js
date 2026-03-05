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
import "../../../components/app-destinations-table.js";

/*-------------------------SCRIPTS---------------------------*/

class PageTravelpassEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-viaja-con-monedero-electronico-de-acapulco-a-chilpancingo.webp","mediumImage": "../../../src/assets/img/banner/promociones/tablet/banner-buen-fin-55-descuento.webp", "smallImage": "../../../src/assets/img/banner/promociones/movil/banner-buen-fin-descunto-55.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

           <section class="__section">
                <app-section-title section-title="Terms and Conditions"></app-section-title>
            </section>

            <img src="../../src/assets/img/logos/logo-monedero-electronico.webp" alt="Travelpass" class="img-logo">

            <section class="__sections">
                <article class="__bg-blue">
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                It is an electronic wallet that gives you extra credit according to the amount you deposit. With this wallet, you can pay for your Costa Line bus ticket on the Chilpancingo-Acapulco and Acapulco-Chilpancingo routes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Applies only to Primera and Plus services.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Please note that the Monedero Electrónico electronic wallet cannot be redeemed for cash under any circumstances and can only be used to purchase Costa Line bus tickets.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The Monedero Electrónico electronic wallet cannot be sold or transferred.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Upon registering the electronic wallet, you will receive a confirmation email with your unique registration number.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Only persons over 18 years old can register.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Legal entities such as companies, government entities, foundations, etc., cannot acquire the Monedero Electrónico electronic wallet.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                By acquiring the Monedero Electrónico electronic wallet, the passenger agrees to all conditions and restrictions.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                You can acquire your electronic wallet directly at Costa Line ticket offices or on our website 
                                <a class="__link-text" href="../../../../">www.costaline.com.mx</a>
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Required information:
                            </p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">Full name</p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">Email</p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">Contact phone number</p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                You can check your balance on the website or directly at Costa Line ticket offices.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Monedero Electrónico benefits depend on the amount you load:
                            </p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Load $100 to $199 MXN (≈ $5.55 - $11 USD) and we add 15% bonus to your balance
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Load $200 to $399 MXN (≈ $11.11 - $22.17 USD) and we add 20% bonus to your balance
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Load $400 MXN or more (≈ $22.22 USD) and we add 30% bonus to your balance
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Bonuses are valid for 7 days from the recharge date.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Balance can only be used to buy bus tickets for:
                            </p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Chilpancingo-Acapulco Papagayo</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Chilpancingo-Acapulco Centro</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Chilpancingo-Las Cruces</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Chilpancingo-Acapulco Ejido</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Acapulco Papagayo-Chilpancingo</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Acapulco Centro-Chilpancingo</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Las Cruces-Chilpancingo</p></li>
                                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Acapulco Ejido-Chilpancingo</p></li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Applies only to Primera service.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">You can buy any type of ticket with your wallet (Adult, Child, INAPAM, Student, Teacher, or Advance Traveler).</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">The wallet can only be used on the website or at Costa Line ticket offices in Chilpancingo and Acapulco.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Current fare applies at the time of purchase.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Partial payment is allowed (wallet + cash or card).</p></li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Customers can change date and time. Name changes, route changes, and service class changes are not allowed. Changes can be made online (<a class="__link-text" href="../../../../">www.costaline.com.mx</a>) or at Costa Line offices in Chilpancingo and Acapulco.
                            </p>
                        </li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">If multiple tickets are purchased in one transaction with Monedero Electrónico (full or partial payment), exchanges must be made for all tickets in that purchase.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">If the current fare at the time of exchange is higher than the original fare, the customer must pay the difference using the same payment method. Applies to all payment methods.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">If the current fare at the time of exchange is lower than the original fare, no refunds will be issued.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">For questions, call our customer service center at 800 0037 635 or visit Costa Line offices.</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Only confirmed tickets can be invoiced (no invoices for bonuses) within 30 days from the travel date. Once issued, the invoice cannot be changed or canceled.</p></li>
                    </ul>
                </article>
            </section>
            <footer>
                <p>© 2023 Costa Line. All rights reserved.</p>
            </footer>
    `;
	}
}

customElements.define("page-travelpass-english", PageTravelpassEnglish);
