/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../components/app-destinations-table.js";

class PageAboutUs extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp", "smallImage": "../../src/assets/img/banner/movil/banner-3-clics.webp", "link": "#index.html/banner1"},
            {"id": "slide2", "title": "Banner 2", "image": "../../src/assets/img/banner/web/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp", "mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp","smallImage": "../../src/assets/img/banner/movil/banner-aca-diamante.webp", "link": "#index.html/banner2"},
            {"id": "slide3", "title": "Banner 3", "image": "../../src/assets/img/banner/web/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp", "mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp","smallImage": "../../src/assets/img/banner/movil/banner-chil-aca.webp", "link": "#index.html/banner3"}
            ]'
        >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section">
                <app-section-title section-title="About Us"></app-section-title>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">MISSION</h3>

                    <p class="__terms-purchase-text">
                        Always safe, always reliable, always low prices.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">VISION</h3>

                    <p class="__terms-purchase-text">
                        To be the number one passenger connectivity company with the best customer service at the lowest cost.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">QUALITY POLICY</h3>

                    <p class="__terms-purchase-text">
                        At Autotransportes Estrella Roja del Sur, we are committed to the mobility of people and their belongings with safety, comfort, and personalized attention through continuous improvement, efficiency, and transparency in our processes, meeting customer requirements with the best operational practices at lower cost.
                    </p>
                
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">VALUES</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Customer first
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Teamwork and respect
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Continuous improvement
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Lower cost
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Honesty
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transparency
                            </p>
                        </li>
                    </ul>
                    <p class="__terms-purchase-text-center">
                        Autotransportes Estrella Roja del Sur S.A. de C.V. Av.<br>
                        Taxqueña No.1320 Colonia Campestre Churubusco; Mexico City<br>
                        Check our destinations and other services on this site.<br>
                        Tel.: 01 800 0037 635 / 01 800 249 0460
                    </p>
                </article>
            </section> 
    `;
	}
}

customElements.define("page-about-us", PageAboutUs);
