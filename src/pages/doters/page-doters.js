/*--------------IMPORT COMPONENTS FROM DOTERS PAGE -----------------*/
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-destinations-grid.js";
import "../../components/app-list-destinations.js";
import "../../components/app-tickets-sales-locations.js";
import "../../components/app-other-services.js";
import "../../components/app-blog.js";
import "../../components/app-img-shop-left.js";
import "../../components/app-section-title.js";
import "../../components/app-card-doters.js";
import "../../components/app-card-left-description.js";
import "../../components/app-card-right-description.js";
import "../../components/app-carousel-banners.js";
import "../../js/slick.js?v=1.0.2";

class PageDoters extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>
            
            <app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/doters-web.webp","mediumImage": "../../src/assets/img/banner/tablet/doters-tablet.webp", "smallImage": "../../src/assets/img/banner/movil/doters-mobile.webp", "link": "#index.html/banner1"}]'
			>
			</app-banner-slider>
            <section class="__section__taquilla-exclusiva__ask">
              <h2 class="__section__taquilla-exclusiva__title">¿Cómo usar tus puntos Doters sin complicaciones?</h2>
              <h2 class="__section__taquilla-exclusiva__title"> Solo sigue 3 pasos:</h2>
               
            </section>
            
            
            <section class="__section__taquilla-exclusiva__cards">
                <div class="__section__taquilla-exclusiva__cards__items">
                <app-card-doters card-doters-src="../src/data/card-doters-data.json"></app-card-doters>
                </div>
                <div class="__section__taquilla-exclusiva__cards__bg"></div>
            </section>

            <section class="__sections__cards">
                <app-card-left-description cards='[
                {
                    "imageSrc": "../src/assets/img/doters/doter-autobus.webp",
                    "imageAlt": "Asientos reclinables",
                    "title": "Haz de cada punto un viaje inolvidable",
                    "description": "Convierte tus <strong>Puntos Doters</strong> en aventuras inolvidables que te llevarán a descubrir nuevos destinos, vivir experiencias únicas y crear recuerdos que durarán para siempre. Cada punto que acumulas es una oportunidad para acercarte a tu próximo viaje, a esa escapada que tanto sueñas o a la experiencia que siempre quisiste disfrutar.",
                    "buttonText": "Boleto Doters",
                    "buttonLink": "./boleto-doters/",
                    "buttonIcon": "../../src/assets/img/doters/doter-green.webp"
                }
                ]'></app-card-left-description>
            </section>
            <section class="__sections__cards">
                <app-card-right-description cards='[
                {
                    "imageSrc": "../src/assets/img/doters/doter-pareja.webp",
                    "imageAlt": "Asientos reclinables",
                    "title": "Haz de cada punto un viaje inolvidable",
                    "description": "Sube de nivel con Doters y descubre un mundo diseñado para ti: beneficios exclusivos, acceso preferente y sorpresas que harán cada paso más emocionante. Convierte tus viajes y tu día a día en experiencias memorables, donde cada momento cuenta. Porque con Doters, cada punto es mucho más que un número: es la llave que abre la puerta a un universo de posibilidades, recompensas y emociones que te acompañan siempre.",
                    "buttonText": "Iniciar Sesión",
                    "buttonLink": "https://auth.doters.com/v2/login",
                    "buttonIcon": "../../src/assets/img/doters/doter-green.webp"
                }
                ]'></app-card-right-description>
            </section>

            <section class="__section__taquilla-exclusiva__ask">
              <h2 class="__section__taquilla-exclusiva__title">Acumula Puntos Doters en cada uno de tus viajes</h2>
                <p class="__paragraph__xl">
                     Disfruta de muchos beneficios únicos en</br>
                   Costa Line.
                </p>
            </section>

            <section class="__sections__cards">
              <app-carousel-banners
                cards='[
                    {
                    "level": "Nivel Verde",
                    "pointsTitle": "Puntos por viajes",
                    "pointsText": "1 Punto Doters por cada $1 MXN.",
                    "benefits": [
                        "Acceso a Boleto Recompensa.",
                        "10% en paquetería.",
                        "Abordaje Preferencial."
                    ],
                    "avatar": "../src/assets/img/doters/doter-verde.webp"
                    },
                    {
                    "level": "Nivel Plata",
                    "pointsTitle": "Puntos por viajes",
                    "pointsText": "4 Puntos Doters por cada $1 MXN.",
                    "benefits": [
                        "Acceso a Boleto Recompensa.",
                        "15% en paquetería.",
                        "Abordaje Preferencial.",
                        "Hasta 10KG adicionales en la maleta."
                    ],
                    "avatar": "../src/assets/img/doters/doter-plata.webp"
                    },
                    {
                    "level": "Nivel Oro",
                    "pointsTitle": "Puntos por viajes",
                    "pointsText": "6 Puntos Doters por cada $1 MXN.",
                    "benefits": [
                        "Acceso a Boleto Recompensa.",
                        "20% en paquetería.",
                        "Abordaje Preferencial.",
                        "Hasta 20KG adicionales en la maleta."
                    ],
                    "avatar": "../src/assets/img/doters/doter-oro.webp"
                    }
                ]'>
                </app-carousel-banners>
            </section>

            


             <section class="__section__taquilla-exclusiva__explication">
                <p class="__section__taquilla-exclusiva__explication__text">
                  Ser parte de Doters significa más que acumular puntos. 
                  Es viajar con ventajas exclusivas, recibir asistencia 
                  personalizada y disfrutar de tarifas preferenciales. 
                  Nuestra taquilla está aquí para hacer que cada viaje
                  sea más fácil, rápido y gratificante.
                </p>
                <img class="__section__taquilla-exclusiva__explication__img" src="../src/assets/img/doters/doter-mujer-maleta.webp" alt="Taquilla exclusiva Doters"/>

            </section>
            
            
    
        `;
  }
}
customElements.define("page-doters", PageDoters);
