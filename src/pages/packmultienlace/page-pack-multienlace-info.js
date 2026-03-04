/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza-pack.js";
import "../../components/app-banner-slider.js";
import "../../components/app-section-title.js";
import "../../components/app-card-bg-primary.js";
import "../../components/app-card-small-list.js";
import "../../components/app-header-pack-multienlace.js";

/*-------------------------SCRIPTS---------------------------*/

import "../../js/slick.js?v=1.0.2";

class PagePackMultienlaceInfo extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
            slides-data='[
              {"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/paqueteria/banner/web/pack-pack-web.webp","mediumImage": "../../../src/assets/img/paqueteria/banner/tablet/pack-pack-tablet.webp", "smallImage": "../../../src/assets/img/paqueteria/banner/movil/pack-pack-mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
            <section class="__section__pack-description">
                <app-section-title section-title="Pack Multienlace"></app-section-title>
                <h3 class="__subtitle">Tu Paquetería Más Rápida y Confiable</h3>
                <p class="__paragraph">En el mundo actual, donde la rapidez y la seguridad son esenciales para los envíos, Pack Multienlace se presenta como la solución perfecta para tus necesidades de paquetería. Ya sea que necesites enviar algo urgente o enviar paquetes para tu negocio, nuestro servicio cubre más de 150 destinos a nivel nacional, asegurando que tus envíos lleguen a su destino en tiempo récord. Aquí te contamos todo lo que necesitas saber sobre cómo funciona este servicio y cómo puedes aprovecharlo al máximo.</p>
                <article class="__article-grid">
                    <div class="__grid-row">
                        <div class="__grid-row__text">
                            <h3 class="__title-grid">Cobertura Nacional Amplia</h3>
                            <p class="__content">Con Pack Multienlace, puedes enviar tus paquetes a más de 150 destinos en todo México. Esto significa que, sin importar si estás en una gran ciudad o en un pueblo más pequeño, puedes confiar en que tu paquete llegará rápidamente a su destino. Nuestra cobertura amplia asegura que puedas contar con un servicio de calidad, sin importar a dónde necesites enviar algo.</p>
                        </div>
                        <div class="__grid-row__img">
                            <img src="../../../src/assets/img/paqueteria/150corridas.webp" alt="banner 1" class="__img__grid">
                        </div>
                    </div>
                    <div class="__grid-row">
                        <div class="__grid-row__img">
                            <img src="../../../src/assets/img/paqueteria/entrega.webp" alt="banner 1" class="__img__grid">
                        </div>
                        <div class="__grid-row__text">
                            <h3 class="__title-grid">Entrega Extra Urgente: Envía y Recibe sin Esperas</h3>
                            <p class="__content">Si tienes un paquete urgente, Pack Multienlace tiene la solución ideal. Nuestro servicio ofrece entrega urgente, lo que significa que tu paquete se enviará en la siguiente corrida disponible, garantizando una entrega rápida y sin complicaciones. Además, tu paquete viajará de forma segura y con monitoreo constante, lo que te da la tranquilidad de saber que está en buenas manos.</p>
                        </div>
                    </div>
                </article>
            </section>

            <section class="__section__pack-restriction">
                <app-section-title section-title="Restricciones de Envío: Qué No Puedes Mandar"></app-section-title>
                <div class="__grid-row-restriction">
                    <p class="__content-text">
                        Es importante tener en cuenta las restricciones de envío para asegurarnos
                        de que tu paquete viaje sin inconvenientes.  Algunos artículos no pueden
                        ser transportados.<br><br>
                        
                        Te recomendamos revisar las restricciones completas antes
                        de hacer tu envío para evitar contratiempos.
                    </p>
                    <ul class="__content-list">
                        <p>No permitidos</p><br>
                        <li>Dinero en efectivo</li>
                        <li>Joyas</li>
                        <li>Artículos electrónicos</li>
                        <li>Piezas de arte</li>
                        <li>Sustancias peligrosas</li>
                        <li>Entre otros</li>
                    </ul>
                </div>
            </section>

             <section class="__section__pack-options">
                <app-section-title section-title="Precios Accesibles y Opciones de Prepago"></app-section-title>
                <div class="__grid-row-options">
                    <p class="__options-content-text">
                        Una de las principales ventajas de <strong>Pack Multienlace</strong> es que ofrecemos tarifas competitivas para todos los tipos de envío. Además, contamos con opciones de prepago, lo que facilita el proceso y te permite gestionar tus envíos de manera más eficiente. Ya sea que necesites enviar algo urgentemente o de manera regular.
                    </p>
                    <p class="__options-content-text">
                        <strong>Pack Multienlace</strong> tiene precios accesibles para ti. No esperes más y empieza a disfrutar de la facilidad y confianza que ofrece <strong>Pack Multienlace</strong> para todos tus envíos.<br> <strong>¡Envía tu paquete hoy mismo</strong> y haz que llegue a su destino de la manera más rápida y segura posible!
                    </p>
                </div>
            </section>


        `;
	}
}
customElements.define("page-pack-multienlace-info", PagePackMultienlaceInfo);
