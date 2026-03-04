/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../components/app-header.js?v=1.1.3";
import "../components/app-cookies-policy.js?v=1.0.3";
import "../components/app-modal-travelpass.js?v=1.0.2";
import "../components/app-button-whats.js?v=1.0.2";
import "../components/app-button-eva-trip.js?v=1.0.2";
import "../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../components/app-cotiza.js";
import "../components/app-banner-slider.js";
import "../components/app-payments.js";
import "../components/app-section-title.js";
import "../components/app-table-pets.js";
import "../components/app-destinations-table.js";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";
import "../js/slick.js?v=1.0.2";

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PageAcercaDeNosotros extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <section class="__first-section">
                <app-payments></app-payments>
            </section>

            <section class="__sections">
                <app-section-title section-title="Acerca de nosotros"></app-section-title>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">MISIÓN</h3>

                    <p class="__terms-purchase-text">
                        Siempre seguros, siempre confiables, siempre precios bajos.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">VISIÓN</h3>

                    <p class="__terms-purchase-text">
                        Ser la empresa número uno de conectividad de pasajeros con el mejor servicio al cliente y al menor costo
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">POLÍTICA DE CALIDAD</h3>

                    <p class="__terms-purchase-text">
                        En Autotransportes Estrella Roja del Sur estamos comprometidos en la movilidad de personas y sus pertenencias con seguridad, comodidad y atención personalizada a través de la mejora continua, eficacia y transparencia en nuestros procesos cumpliendo con los requisitos del cliente con las mejores prácticas de operación a menor costo.
                    </p>
                
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">VALORES</h3>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El cliente es primero
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Trabajo en equipo y con respeto
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Mejora continua
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Menor Costo
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Honestidad
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transparencia
                            </p>
                        </li>
                    </ul>
                    <p class="__terms-purchase-text-center">
                        Autotransportes Estrella Roja del Sur S.A. de C.V. Av.<br>
                        Taxqueña No.1320 Colonia Campestre Churubusco; México, D.F.<br>
                        Consulta nuestros destinos y demás servicios en este sitio.<br>
                        Tel.: 01 800 0037 635 / 01 800 249 0460
                    </p>
                </article>
            </section> 
    `;
	}
}

customElements.define("page-acerca-de-nosotros", PageAcercaDeNosotros);
