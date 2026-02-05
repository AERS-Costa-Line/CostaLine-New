/*--------------IMPORT COMPONENTS FROM HOME PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-destinations-grid.js";
import "../../components/app-list-destinations.js";
import "../../components/app-tickets-sales-locations.js";
import "../../components/app-other-services.js";
import "../../components/app-blog.js";
import "../../components/app-img-shop-left.js";
import "../../components/app-section-title.js";

class PageHome extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>
            <app-modal-doters></app-modal-doters>
             <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/3-clics-web.webp","mediumImage": "../../src/assets/img/banner/tablet/3-clics-tablet.webp", "smallImage": "../../src/assets/img/banner/movil/3-clics-mobile.webp", "link": "#index.html/banner1"},

                {"id": "slide2", "title": "Banner 2", "image": "../../src/assets/img/banner/web/aca-diamante-web.webp", "mediumImage": "../../src/assets/img/banner/tablet/aca-diamante-tablet.webp","smallImage": "../../src/assets/img/banner/movil/aca-diamante-mobile.webp", "link": "#index.html/banner2"},
                
                {"id": "slide3", "title": "Banner 3", "image": "../../src/assets/img/banner/web/chil-aca-web.webp", "mediumImage": "../../src/assets/img/banner/tablet/chil-aca-tablet.webp","smallImage": "../../src/assets/img/banner/movil/chil-aca-mobile.webp", "link": "#index.html/banner3"}
                ]'
            >
            </app-banner-slider>
            <app-payments></app-payments>
            <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "¿Aún no sabes a dónde viajar?", "text": "Conoce nuestros destinos Costa Line y elige tu lugar favorito"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Acapulco", "content": "Disfruta de sus playas doradas, noches llenas de vida y la magia de la Quebrada.", "image": "./src/assets/img/destinos-img/acapulco.webp", "link": "./boletos-autobus/acapulco.html"},
        
                {"id": "destination2", "title": "Chilpancingo", "content": "Visita esta Joya colonial llena de historia, sabores y magia.", "image": "./src/assets/img/destinos-img/morelia.webp", "link": "./boletos-autobus/chilpancingo.html"},
        
                {"id": "destination3", "title": "Taxco", "content": "Sumergete en este laberinto de plata y encanto colonial.", "image": "./src/assets/img/destinos-img/taxco.webp", "link": "./boletos-autobus/taxco.html"},
                
                {"id": "destination5", "title": "Cuernavaca", "content": "Cuernavaca: La ciudad de la eterna primavera, donde el sol abraza y la historia inspira.", "image": "./src/assets/img/destinos-img/cuernavaca.webp", "link": "./boletos-autobus/cuernavaca.html"},
        
                {"id": "destination4", "title": "Ixtapa Zihuatanejo", "content": "Déjate cautivar por la magia colonial de Guanajuato.", "image": "./src/assets/img/destinos-img/ixtapa.webp", "link": "./boletos-autobus/ixtapa-zihuatanejo.html"}
                ]'
            >
            </app-destinations-grid>
            <app-list-destinations></app-list-destinations>
            
            <app-destinations-grid
                titlesText='[{"id": "title1", "title": "Mas destinos Costa Line", "text": "Prepara tu proxima aventura"}]'
                destinations='[
                    {"id": "destination5", "title": "Tecpan", "content": "Conecta con la naturaleza entre playas tranquilas, ríos y montañas de la Costa Grande.", "image": "./src/assets/img/destinos-img/tecpan/tecpan-m.webp", "link": "../../destinos/autobus-a-tecpan.html"},
                    {"id": "destination3", "title": "Coyuca de Benítez", "content": "Relájate entre lagunas, playas vírgenes y paisajes tropicales llenos de vida.", "image": "./src/assets/img/destinos-img/coyuca-de-benitez/coyuca-m.webp", "link": "../../destinos/autobus-a-coyuca-de-benitez.html"},
                    {"id": "destination4", "title": "Iguala", "content": "Conoce la cuna de la Bandera Nacional y disfruta su historia y joyería de plata.", "image": "./src/assets/img/destinos-img/iguala/iguala-m.webp", "link": "../../destinos/autobus-a-iguala.html"},
                    {"id": "destination1", "title": "Ciudad de México", "content": "Vive la mezcla perfecta entre historia, modernidad y cultura en la capital del país.", "image": "./src/assets/img/destinos-img/cdmx/cdmx-m.webp", "link": "../../destinos/autobus-a-ciudad-de-mexico.html"},
                    {"id": "destination2", "title": "Ciudad Altamirano", "content": "Descubre el corazón cálido de la Tierra Caliente, con tradiciones y paisajes únicos.", "image": "./src/assets/img/destinos-img/cd-altamirano/cd-altamirano-m.webp", "link": "../../destinos/autobus-a-cd-altamirano.html"}
                    ]'>
            </app-destinations-grid>

            <app-other-services
                section-title-id="other-programs-section"
                title-data-src="../../src/data/other-services-loyalty-titles.json"
                cards-data-src="../../src/data/other-services-loyalty-cards.json"
            >
            </app-other-services>
            <app-other-services
                title-data-src="../../src/data/other-services-general-titles.json"
                cards-data-src="../../src/data/other-services-general-cards.json"
            >
            </app-other-services>
            <app-blog></app-blog>
        `;
	}
}
customElements.define("page-home", PageHome);
