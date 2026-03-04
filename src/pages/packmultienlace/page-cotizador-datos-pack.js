/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-header-pack-multienlace.js";
import "../../components/app-cotiza-pack.js";
import "../../components/app-banner-slider.js";
import "../../components/app-section-title.js";
import "../../components/app-cotizador-pack.js";
import "../../components/app-footer-pack-multienlace.js";

/*-------------------------SCRIPTS---------------------------*/

class PageCotizadorDatosPack extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
            slides-data='[
              {"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/paqueteria/banner/web/pack-cotizador-web.webp","mediumImage": "../../../src/assets/img/paqueteria/banner/tablet/pack-cotizador-tablet.webp", "smallImage": "../../../src/assets/img/paqueteria/banner/movil/pack-cotizador-mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
          <section class="container-cotizador">
      <h2 class="container-section__title">Cotiza tu paquete.</h2>
      <!-- Formulario -->
      <form id="cotizador-form" novalidate>
        <h3 class="subtitle-cotizador">Remitente</h3>
        <div class="remitente-datos">
          <div class="input-group-datos">
            <div><input id="remitente-nombre" class="input-group__input-datos" type="text" placeholder="Nombre(s)..." required /></div>
            <div><input id="remitente-apellido-p" class="input-group__input-datos" type="text" placeholder="Apellido Paterno..." required /></div>
            <div><input id="remitente-apellido-m" class="input-group__input-datos" type="text" placeholder="Apellido Materno..." required /></div>
          </div>
        </div>
        <div class="remitente-datos">
          <div class="input-group-datos">
            <div><input id="remitente-rfc" class="input-group__input-datos" type="text" placeholder="RFC..." required /></div>
            <div><input id="remitente-domicilio" class="input-group__input-datos" type="text" placeholder="Domicilio..." required /></div>
            <div><input id="remitente-colonia" class="input-group__input-datos" type="text" placeholder="Colonia..." required /></div>
          </div>
        </div>
        <div class="remitente-datos">
          <div class="input-group-datos">
            <div><input id="remitente-cp" class="input-group__input-datos" type="text" placeholder="Codigo Postal..." required /></div>
            <div><input id="remitente-estado" class="input-group__input-datos" type="text" placeholder="Estado..." required /></div>
            <div><input id="remitente-poblacion" class="input-group__input-datos" type="text" placeholder="Población..." required /></div>
          </div>
        </div>
        <div class="remitente-datos">
          <div class="input-group-datos">
            <div><input id="remitente-delegacion" class="input-group__input-datos" type="text" placeholder="Delegación/ Municipio..." required /></div>
            <div><input id="remitente-curp" class="input-group__input-datos" type="text" placeholder="CURP..." required /></div>
            <div><input id="remitente-telefono" class="input-group__input-datos" type="tel" placeholder="Teléfono particular..." required /></div>
          </div>
        </div>
        <div class="remitente-datos">
          <div class="input-group-datos">
            <div><input id="remitente-correo" class="input-group__input-datos" type="email" placeholder="Correo..." required /></div>
          </div>
        </div>

        <h3 class="subtitle-cotizador">Destinatario</h3>
        <div class="destinatario-datos">
          <div class="input-group-datos">
            <div><input id="destinatario-nombre" class="input-group__input-datos" type="text" placeholder="Nombre(s)..." required /></div>
            <div><input id="destinatario-apellido-p" class="input-group__input-datos" type="text" placeholder="Apellido Paterno..." required /></div>
            <div><input id="destinatario-apellido-m" class="input-group__input-datos" type="text" placeholder="Apellido Materno..." required /></div>
            <div><input id="destinatario-telefono" class="input-group__input-datos" type="tel" placeholder="Teléfono particular..." required /></div>
          </div>
        </div>

        <button type="submit" class="btn-enviar">Enviar</button>
      </form>
    </section>

    <!-- Modal de Éxito -->
    <div id="success-modal" class="modal">
      <div class="modal-content">
        <span class="modal-close-btn" style="background-color: #0E3A59;"></span>
        <div class="modal-header">
          <img src="../src/assets/img/paqueteria/logo-pack.png" alt="Logo Paqueteria" class="modal-logo" style="background-color: transparent;"/>
        </div>
        <div class="modal-body">
          <h2 class="modal-title-custom">Cotización enviada con éxito</h2>
          <button id="modal-accept-btn" class="btn-enviar" style="width: 100%; margin-top: 15px;">Aceptar</button>
        </div>
      </div>
    </div>

            
        `;
		document.addEventListener("DOMContentLoaded", () => {
			const cotizadorForm = document.getElementById("cotizador-form");
			if (cotizadorForm) {
				cotizadorForm.addEventListener("submit", (event) => {
					event.preventDefault();

					const hiddenInput = document.getElementById("tipo_paquete_input");
					const summary = document.querySelector(".dropdown > summary");

					const isFormValid = cotizadorForm.checkValidity();

					if (hiddenInput.value === "") {
						summary.classList.add("invalid");
					}

					if (isFormValid && hiddenInput.value !== "") {
						window.location.href = "cotizador.html";
					}
				});
			}

			const cotizadorPageForm = document.getElementById("cotizador-form");
			const successModal = document.getElementById("success-modal");

			if (cotizadorPageForm && successModal) {
				const closeModalBtn = successModal.querySelector(".modal-close-btn");
				const acceptAndRedirectBtn =
					document.getElementById("modal-accept-btn");

				const openModal = () => {
					successModal.classList.add("active");
				};

				const closeModal = () => {
					successModal.classList.remove("active");
				};

				cotizadorPageForm.addEventListener("submit", (event) => {
					event.preventDefault();
					cotizadorPageForm.classList.add("form-submitted");

					if (cotizadorPageForm.checkValidity()) {
						openModal();
					} else {
						cotizadorPageForm.querySelector(":invalid").focus();
					}
				});

				closeModalBtn.addEventListener("click", closeModal);
				successModal.addEventListener("click", (event) => {
					if (event.target === successModal) closeModal();
				});

				if (acceptAndRedirectBtn) {
					acceptAndRedirectBtn.addEventListener("click", () => {
						window.location.href =
							"../../packmultienlace/cotizador-paqueteria.html";
					});
				}
			}
		});
	}
}

customElements.define("page-cotizador-datos-pack", PageCotizadorDatosPack);
