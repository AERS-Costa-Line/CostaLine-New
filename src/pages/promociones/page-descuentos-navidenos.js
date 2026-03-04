/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-modal-doters.js";
import "../../components/app-banner-image.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-right-description.js";
import "../../components/app-faqs.js";

class DescuentosNavideños extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>

      <app-modal-doters></app-modal-doters>

      <div class="__first-section">
        <app-payments></app-payments>
      </div>

      <section class="__sections">
        <h2 class="__first-title">Que esta temporada sea un viaje lleno de alegría, felicidad, conexión y momentos inolvidables. Costa Line te acompaña con descuentos especiales para que disfrutes cada instante junto a tus seres queridos.</h2>
      </section>

      <app-banner-image
        image-src="../src/assets/img/banner/promociones/web/banner-desctuentos-temporada-navideña-estudiantes-50-profesores-25.webp"
        image-alt="Banner promocional de descuento de temporada para estudiantes y profesores"
      ></app-banner-image>
      
      <section class="__sections">
        <app-card-right-description cards='[
          {
            "imageSrc": "../src/assets/img/promociones/desc-temp/navidad/playa-con-arbol.webp",
            "imageAlt": "Asientos reclinables",
            "title": "¡Los descuentos llegaron a Costa Line!",
            "description": "En esta temporada, Costa Line tiene descuentos increíbles para que planees tu viaje. Los estudiantes obtienen un 50% de descuento, mientras que los profesores disfrutan de un 25% de descuento. Compra a partir del 10 de diciembre para viajar del 18 de  diciembre al 12 de enero de 2026. No olvides que estos descuentos están sujetos a disponibilidad por autobús (6 de estudiante y 2 de profesor) no acumulables con otras promociones o descuentos."
          }
        ]'></app-card-right-description>
      </section>
      
   

      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">Viaja con Costa Line</h3>
          
          <p>
            En Costa Line, valoramos el esfuerzo y dedicación de los estudiantes y profesores, por eso, en estas fechas queremos hacer tu viaje aún más especial con descuentos exclusivos:
          </p>

          <ul class="__terms-purchase-list">
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Estudiantes: 50% de descuento
              </p>
            </li>
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Profesores: 25% de descuento
              </p>
            </li>
          </ul>
          
          <p>
            Planifica tus vacaciones y asegura tu lugar comprando a partir del 10 de diciembre para viajar del 18 de diciembre al 12 de enero de 2026. Recuerda: los descuentos están sujetos a disponibilidad por autobús (6 de estudiante y 2 de profesor) y no son acumulables con otras promociones o descuentos. Consulta términos y condiciones en: costaline.com.mx
          </p>
        </article>
      </section>

      <section class="__sections">
        <app-faqs
          title="Recomendaciones Turísticas"
          faqs='[
            {
              "question": "Aventuras Playeras",
              "answer": "En Acapulco Papagayo e Ixtapa Zihuatanejo, disfruta del sol y las olas en las impresionantes playas."
            },
            {
              "question": "Exploración Cultural",
              "answer": "En Acapulco Centro, Taxco y Cuernavaca, sumérgete en la historia y cultura de cada lugar visitando sus museos y monumentos."
            },
            {
              "question": "Arte y Plata",
              "answer": "Descubre la artesanía de plata en Taxco, donde encontrarás joyas únicas y tradicionales."
            },
            {
              "question": "Gastronomía Local",
              "answer": "No te pierdas la oportunidad de probar la deliciosa gastronomía local en cada destino. Desde mariscos frescos hasta platillos tradicionales, cada lugar tiene algo especial que ofrecer."
            }
          ]'
        ></app-faqs>

        <p>
          ¡Prepárate para vivir momentos inolvidables con Costa Line! Compra tu boleto de autobús y déjanos llevarte a explorar los destinos más increíbles de México. ¡Te esperamos a bordo!
        </p>
      </section>

    `;
	}
}
customElements.define("page-descuentos-navideños", DescuentosNavideños);
