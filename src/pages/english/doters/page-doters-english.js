/*--------------IMPORT COMPONENTS FROM DOTERS PAGE -----------------*/
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-destinations-grid.js";
import "../../../components/app-list-destinations.js";
import "../../../components/app-tickets-sales-locations.js";
import "../../../components/app-other-services.js";
import "../../../components/app-blog.js";
import "../../../components/app-img-shop-left.js";
import "../../../components/app-section-title.js";
import "../../../components/app-card-doters.js";
import "../../../components/app-card-left-description.js";
import "../../../components/app-card-right-description.js";
import "../../../components/app-carousel-banners.js";
import "../../../js/slick.js?v=1.0.2";

class PageDotersEnglish extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza lang="en"></app-cotiza>

                        <app-modal-doters></app-modal-doters>

            
            <app-banner-slider
					slides-data='[
					{"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-viaja-con-puntos-doters.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-con-puntos-doters.webp", "smallImage": "../../src/assets/img/banner/movil/banner-doters.webp", "link": "#index.html/banner1"}]'
			>
			</app-banner-slider>
            <section class="__section__taquilla-exclusiva__ask">
              <h2 class="__section__taquilla-exclusiva__title">¿How to use your Doters points without complications?</h2>
              <h2 class="__section__taquilla-exclusiva__title"> In only 3 steps:</h2>
               
            </section>
            
            
            <section class="__section__taquilla-exclusiva__cards">
                <div class="__section__taquilla-exclusiva__cards__items">
                <app-card-doters card-doters-src="../../src/data/english/doters/card-doters-data-english.json"></app-card-doters>
                </div>
                <div class="__section__taquilla-exclusiva__cards__bg"></div>
            </section>

            <section class="__sections__cards">
                <app-card-left-description cards='[
                {
                    "imageSrc": "../../src/assets/img/doters/doter-autobus.webp",
                    "imageAlt": "Reclining seats",
                    "title": "Make every point a memorable trip",
                    "description": "Turn your <strong>Doters Points</strong> into unforgettable adventures that will take you to discover new destinations, live unique experiences and create memories that will last forever. Every point you accumulate is an opportunity to get closer to your next trip, to that getaway you dream of or the experience you always wanted to enjoy.",
                    "buttonText": "Doters Ticket",
                    "buttonLink": "./boleto-doters/",
                    "buttonIcon": "../../src/assets/img/doters/doter-green.webp"
                }
                ]'></app-card-left-description>
            </section>
            <section class="__sections__cards">
                <app-card-right-description cards='[
                {
                    "imageSrc": "../../src/assets/img/doters/doter-pareja.webp",
                    "imageAlt": "Reclining seats",
                    "title": "Make every point a memorable trip",
                    "description": "Level up with Doters and discover a world designed just for you: exclusive benefits, priority access, and surprises that will make every step more exciting. Turn your travels and everyday life into memorable experiences, where every moment counts. Because with Doters, each point is much more than a number: it&#39;s the key that unlocks a universe of possibilities, rewards, and emotions that will always be with you.",
                    "buttonText": "Log In",
                    "buttonLink": "https://auth.doters.com/v2/login",
                    "buttonIcon": "../../src/assets/img/doters/doter-green.webp"
                }
                ]'></app-card-right-description>
            </section>

            <section class="__section__taquilla-exclusiva__ask">
              <h2 class="__section__taquilla-exclusiva__title">Collect Doters Points on every trip</h2>
                <p class="__paragraph__xl">
                     Enjoy many exclusive benefits in</br>
                   Costa Line.
                </p>
            </section>

            <section class="__sections__cards">
              <app-carousel-banners
                cards='[
                    {
                    "level": "Nivel Verde",
                    "pointsTitle": "Points per trip",
                    "pointsText": "1 Doters Point for every $1 MXN.",
                    "benefitsTitle": "Benefits",
                    "benefits": [
                        "Access to Reward Ticket.",
                        "10% on baggage.",
                        "Preferential Boarding."
                    ],
                    "avatar": "../../src/assets/img/doters/doter-verde.webp"
                    },
                    {
                    "level": "Nivel Plata",
                    "pointsTitle": "Points per trip",
                    "pointsText": "4 Doters Points for every $1 MXN.",
                    "benefitsTitle": "Benefits",
                    "benefits": [
                        "Access to Reward Ticket.",
                        "15% on baggage.",
                        "Preferential Boarding.",
                        "Up to 10KG additional in luggage."
                    ],
                    "avatar": "../../src/assets/img/doters/doter-plata.webp"
                    },
                    {
                    "level": "Nivel Oro",
                    "pointsTitle": "Points per trip",
                    "pointsText": "6 Doters Points for every $1 MXN.",
                    "benefitsTitle": "Benefits",
                    "benefits": [
                        "Access to Reward Ticket.",
                        "20% on baggage.",
                        "Preferential Boarding.",
                        "Up to 20KG additional in luggage."
                    ],
                    "avatar": "../../src/assets/img/doters/doter-oro.webp"
                    }
                ]'>
                </app-carousel-banners>
            </section>

            


             <section class="__section__taquilla-exclusiva__explication">
                <p class="__section__taquilla-exclusiva__explication__text">
                  Being part of Doters means more than just collecting points. 
                  It's traveling with exclusive advantages, receiving personalized 
                  assistance and enjoying preferential rates. 
                  Our exclusive ticket office is here to make every trip
                  easier, faster and more rewarding.
                </p>
                <img class="__section__taquilla-exclusiva__explication__img" src="../../src/assets/img/doters/doter-mujer-maleta.webp" alt="Taquilla exclusiva Doters"/>

            </section>
            
            
    
        `;
	}
}
customElements.define("page-doters-english", PageDotersEnglish);
