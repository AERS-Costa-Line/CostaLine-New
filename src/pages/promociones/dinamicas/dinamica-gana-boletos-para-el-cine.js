/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-button-whats.js?v=1.0.2";
import "../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-image.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-slider-opacity.js";
import "../../../components/app-faqs.js";

class DinamicaDescuentoCine extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza></app-cotiza>


      <div class="__first-section">
        <app-payments></app-payments>
      </div>

      <app-banner-image
        image-src="../../../src/assets/img/banner/promociones/web/banner-desctuentos-temporada-navideña-estudiantes-50-profesores-25.webp"
        image-alt="Banner promocional de descuento de temporada para estudiantes y profesores"
      ></app-banner-image>
      
      <section class="__sections">
        <app-section-title section-title="Términos y Condiciones - Dinámica “¡GANA BOLETOS PARA EL CINE!”"></app-section-title>
      </section>

      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">1. Organizador:</h3>
          
          <p>
            La presente dinámica es organizada por <b>Costa Line</b> (en adelante “el Organizador”).
          </p>
        </article>
      </section>

      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-section">2. Vigencia: </h3>

          <p>
            La dinámica estará vigente hasta el 23 de octubre del 2025 a las 17:00 hrs.
          </p>
          
        </article>
      </section>

      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">3. Participantes:</h3>
          
          <p>
            Podrán participar todas las personas mayores de 18 años que residan en la República Mexicana y cuenten con un perfil público en Facebook.
          </p>
        </article>
      </section>

      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-section">4. Mecánica de participación:</h3>

          <p>
            Para participar, deberás:
          </p>

          <ol class="__terms-purchase-list">
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Compartir en los comentarios de la publicación oficial tu <b>foto favorita viajando con Costa Line</b>, usando el hashtag <b>#CostaLine</b> y donde aparezcas tú.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Dar <b>“Me gusta”</b> a la publicación oficial de la dinámica.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                <b>Compartir la publicación</b> en tu perfil.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Tener tu perfil en <b>modo público</b> durante la vigencia de la dinámica para validar tu participación.
              </p>
            </li>
          </ol>
          
        </article>
      </section>
      
      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">5. Premios:</h3>
          
          <p>
            Las primeras <b>25 personas</b> que cumplan correctamente con todos los pasos recibirán <b>1 pase doble para el cine</b>.
          </p>
        </article>
      </section>

      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-section">6. Entrega del premio:</h3>
          
          <ul class="__terms-purchase-list">
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Los ganadores serán contactados por mensaje directo desde la cuenta oficial de <b>Costa Line</b>.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Los boletos serán entregados en formato digital, según indique el Organizador.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Los premios son intransferibles y <b>no canjeables por dinero en efectivo u otros beneficios</b>.
              </p>
            </li>

          </ul>
          
        </article>
      </section>

      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">7. Restricciones:</h3>

          <ul class="__terms-purchase-list">
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Solo se tomará en cuenta <b>una participación por persona</b>.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                No podrán participar cuentas falsas, duplicadas o que utilicen contenido que no les pertenezca.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                La dinámica <b>no aplica para colaboradores o familiares directos del Organizador</b>.
              </p>
            </li>

            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Los boletos son válidos únicamente en <b>salas tradicionales</b> y para funciones de <b>lunes a viernes</b>.
              </p>
            </li>
            
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                <b>No aplica en fines de semana ni en otras salas de cine.</b>
              </p>
            </li>
            
            <li class="__terms-purchase-item">
              <p class="__terms-purchase-text">
                Los boletos podrán canjearse directamente en taquillas; el canje en app o web depende de la disponibilidad del sistema.
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section class="__sections">
        <article class="__bg-blue">
          <h3 class="__subtitle-section">8. Aviso importante:</h3>

          <p>
            El Organizador <b>no solicita datos bancarios, contraseñas ni realiza cobros</b> para la entrega del premio. En caso de recibir mensajes sospechosos, se recomienda no proporcionar información personal.
          </p>
          
        </article>
      </section>

      <section class="__sections">
        <article class="__bg-white">
          <h3 class="__subtitle-section">9. Aceptación de términos:</h3>
          
          <p>
            La participación en esta dinámica implica <b>la aceptación total de los presentes términos y condiciones</b>, así como de las decisiones del Organizador, que serán inapelables.
          </p>
        </article>
      </section>
            
      <section class="__section">
        <app-section-title section-title="Otros destinos"></app-section-title>

        <article class="container-slider-other">
          <app-slider-opacity destinations-src="../../src/data/destinos/card-opacity-destinations.json"></app-slider-opacity>
        </article>
      </section>
    `;
	}
}
customElements.define("page-deinamica-descuento-cine", DinamicaDescuentoCine);
