/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-right-description.js";
import "../../components/app-faqs.js";
import "../../components/card-image-top.js";

class DescuentosSemanaSanta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-modal-doters></app-modal-doters>

      <div class="__first-section">
        <app-payments></app-payments>
      </div>

      <section class="__sections">
        <h2 class="__first-title">¡Descubre y vive la magia de los diferentes destinos que Costa Line tiene para ti!</h2>
      </section>

      <app-banner-image
        image-src="../src/assets/img/banner/promociones/web/banner-semana-santa.webp"
        image-alt="Banner promocional de descuento de temporada para estudiantes y profesores"
      ></app-banner-image>
      
      <section class="__sections">
        <app-card-right-description cards='[
          {
            "imageSrc": "../src/assets/img/promociones/desc-temp/semana-santa/festividades.webp",
            "imageAlt": "Asientos reclinables",
            "title": "Deléitate con los diferentes eventos y festividades que te ofrece los destinos de Costa Line.",
            "description": "Sumérgete a explorar los lugares turísticos que te ofrece cada una de estas hermosas ciudades, contemplando su belleza natural, su gastronomía y sus diferentes festividades con las que cuentan."
          }
        ]'></app-card-right-description>
      </section>

      <section class="__sections">
      <div class="__bg-blue">
        <p class="__section_subtittle">No te pierdas las mejores recomendaciones</p>
       <p class="__section_tittle">Eventos y Festividades de marzo Costa Line</p>
        <article class="__section-cards-image-top">

        <app-card-image-top cards='[
          {"imageSrc":"../src/assets/img/eventos/festival-guitarra-zihuatanejo.webp","imageAlt":"Festival de la guitarra Zihuatanejo","title":"Festival de la guitarra Zihuatanejo","content":"Asiste y disfruta de este evento internacional de clase mundial que se lleva a cabo del 2 al 9 de marzo. ¡No te lo pierdas!"},
          {"imageSrc":"../src/assets/img/eventos/dia-internacional-mujer.webp","imageAlt":"Día Internacional de la Mujer","title":"Día Internacional de la Mujer","content":"Tú eres la protagonista de tu propia vida, celebra cada logro conseguido y cada reto que vendrá. ¡Feliz Día de la Mujer!"},
          {"imageSrc":"../src/assets/img/eventos/carnaval-zihuatanejo.webp","imageAlt":"Carnaval de Zihuatanejo","title":"Carnaval de Zihuatanejo","content":"Asiste al carnaval del 15 al 17 de marzo. Si buscas una experiencia inolvidable, este evento es la combinación perfecta de música, color y alegría."},
          {"imageSrc":"../src/assets/img/eventos/feria-palmera-coyuca.webp","imageAlt":"Feria de la palmera Coyuca de Benítez","title":"Feria de la palmera Coyuca de Benítez","content":"Es una celebración que se vive al son del palmar. Este evento se llevará a cabo del 31 de marzo al 06 de abril, vive una fiesta sin igual."}]'>
        </app-card-image-top>


        </article>
      </div>
      </section>

      <app-destinations-grid
                titlesText='[
                {"id": "title1", "title": "¿Aún no sabes a dónde viajar?", "text": "Conoce nuestros destinos Costa Line y elige tu lugar favorito"}
                ]'
                destinations='[
                {"id": "destination1", "title": "Acapulco", "content": "Disfruta de sus playas doradas, noches llenas de vida y la magia de la Quebrada.", "image": "../src/assets/img/destinos-img/acapulco.webp", "link": "../guia-viaje/viajar-a-acapulco.html"},
        
                {"id": "destination2", "title": "Chilpancingo", "content": "Visita esta Joya colonial llena de historia, sabores y magia.", "image": "../src/assets/img/destinos-img/morelia.webp", "link": "../guia-viaje/viajar-a-chilpancingo.html"},
        
                {"id": "destination3", "title": "Taxco", "content": "Sumergete en este laberinto de plata y encanto colonial.", "image": "../src/assets/img/destinos-img/taxco.webp", "link": "../guia-viaje/viajar-a-taxco.html"},
                
                {"id": "destination5", "title": "Cuernavaca", "content": "Cuernavaca: La ciudad de la eterna primavera, donde el sol abraza y la historia inspira.", "image": "../src/assets/img/destinos-img/cuernavaca.webp", "link": "../guia-viaje/viajar-a-cuernavaca.html"},
        
                {"id": "destination4", "title": "Ixtapa Zihuatanejo", "content": "Déjate cautivar por la magia colonial de Guanajuato.", "image": "../src/assets/img/destinos-img/ixtapa.webp", "link": "../guia-viaje/viajar-a-ixtapa-zihuatanejo.html"}
                ]'
            >
            </app-destinations-grid>

      <section class="__sections">
        <article class="__bg-white">
          <p class="__section_brand">Viaja con Costa Line</p>
          <h2 class="__subtitle-section">¡Aprovecha nuestros descuentos y promociones en esta temporada vacacional!</h2>

          <p class="__terms-purchase-text">
            ¡Maximiza tu experiencia de viaje con nuestros descuentos exclusivos diseñados especialmente para ti!
          </p>

          <ul class="__terms-purchase-list">
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Compra tu boleto durante la vigencia de la promoción y obtén el 50% de descuento para estudiantes y el 25% de descuento para profesores.
              </p>
            </li>
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                También obtén nuestros descuentos del 35% de descuento mas 10% adicional al realizar tu compra anticipada.
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section class="__sections">
        <app-faqs
          title="Recomendaciones Turísticas"
          faqs='[
            {
              "question": "Explora la Gastronomía:",
              "answer": "<ul><li><strong>Pescado a la talla en Acapulco:</strong> Pescado, usualmente huachinango, marinado en adobo de achiote y asado a la parrilla.</li><li><strong>Pozole blanco en Chilpancingo:</strong> A diferencia de su versión verde en Acapulco, este pozole se sirve sin salsa y se acompaña de una variedad de aderezos frescos.</li><li><strong>Jumiles en Taxco:</strong> Pequeños insectos comestibles, a menudo consumidos en tacos o salsas.</li><li><strong>Cecina de Yecapixtla en Cuernavaca:</strong> Carne de res o cerdo secada y curada, típicamente servida con crema, queso y aguacate.</li><li><strong>Tiritas de pescado en Ixtapa:</strong> Delgadas tiras de pescado crudo marinadas en limón, sal, cebolla morada y chiles.</li></ul>"
            },
            {
              "question": "Atracciones Turísticas:",
              "answer": "<ul><li>La Quebrada en Acapulco.</li><li>Las grutas de Cacahuamilpa en Taxco.</li><li>Museo Regional en Chilpancingo.</li><li>Isla Ixtapa en Ixtapa.</li><li>Palacio de Cortes en Cuernavaca.</li><li>Xochimilco en la Ciudad de México.</li></ul>"
            }
          ]'
        ></app-faqs>

        <p class="__terms-purchase-text">
          ¡Anticipa momentos memorables con Costa Line! Compra tu boleto y déjanos ser tu guía en el descubrimiento de la mágica esencia de los atractivos turísticos en estas vacaciones. ¡Esperamos tu presencia a bordo con alegría!
        </p>
      </section>

    `;
  }
}
customElements.define("page-descuentos-semana-santa", DescuentosSemanaSanta);
