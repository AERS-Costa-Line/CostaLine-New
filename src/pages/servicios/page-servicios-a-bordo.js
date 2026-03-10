/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza.js";
import "../../components/app-card-image.js";
import "../../components/app-banner-slider.js";
import "../../components/app-payments.js";
import "../../components/app-section-title.js";
import "../../components/app-card-text.js";
import "../../components/app-cards-text-image.js";
import "../../components/app-card-text-bg-blue-gray.js";

/*-------------------------SCRIPTS---------------------------*/

class PageServiciosABordo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <app-cotiza></app-cotiza>

            <section class="__section __section__servicio-autobus">
                <app-section-title section-title="Servicios a bordo: Autobus de doble piso Marco Polo"></app-section-title>
                <p class="__paragraph">Los autobuses de dos pisos se han convertido en una opción popular para el transporte de pasajeros, ofreciendo una combinación de capacidad, comodidad y vistas panorámicas únicas.</p>
							 <p class="__paragraph">El confort es clave para una experiencia de viaje excepcional, y nuestro diseño de asientos lo refleja.</p> 
								<article class="__grid-cards-container__travel">
								 <img class="__aside-img" src="../../src/assets/img/autobuses/bus-costa.webp" alt="servicios a bordo">
                    <div class="services-container__comodidad">
                    <h3 class="__subtitle-center-xl">Comodidad</h3>
                        <div class="services-container-comodidad" id="comodidad-cards-container">
                            <!-- Las tarjetas de tiendas se cargarán aquí -->
                        </div>     
                    </div>
                    <div class="services-container__asientos">
                    <h3 class="__subtitle-center-xl">Asientos</h3>
                        <div class="services-container-asientos" id="asientos-cards-container">
                            <!-- Las tarjetas de tiendas se cargarán aquí -->
                        </div>     
                    </div>                    
                </article>
                <article class="__scroll-bar-container" id="scroll-bar-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>
            </section>
            <section class="__section __section__aplicaciones">

                <app-section-title section-title="Aplicaciones y usos de los autobuses de dos pisos"></app-section-title>
                <h3 class="__subtitle-center-xl">Servicios Disponibles</h3>
                <p class="__paragraph">Los autobuses de dos pisos han evolucionado para convertirse en una solución versátil en el transporte moderno. Desde su papel fundamental en las ciudades hasta su atractivo en el sector turístico y los trayectos interurbanos, estos vehículos ofrecen ventajas significativas en comodidad, eficiencia y capacidad.</p>
                <article class="__cards-container" id="services-cards-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>
                
                <hr class="__line"/>
                
                <h3 class="__subtitle-center-xl">Tecnologías y características de los autobuses de dos pisos</h3>
                <p class="__paragraph">La evolución del transporte no se detiene, y los autobuses de dos pisos están en el centro de esta transformación. Innovaciones tecnológicas, diseños sostenibles y mejoras en la experiencia del pasajero están redefiniendo estos vehículos para hacerlos más eficientes, cómodos y amigables con el medio ambiente.</p>
                <article class="__cards-container" id="tech-cards-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>

                <hr class="__line"/>
                
                <h3 class="__subtitle-center-xl">Futuro de los autobuses de dos pisos</h3>
                <p class="__paragraph">Los autobuses de dos pisos han revolucionado el transporte al combinar comodidad, capacidad y tecnología avanzada. No solo optimizan el espacio, sino que también incorporan mejoras significativas en seguridad, eficiencia energética y accesibilidad.</p>
                <article class="__cards-container" id="future-cards-container">
                    <!-- app-card-image elements will be inserted here by loadAndRenderImageCards -->
                </article>

                <p class="__paragraph">Los autobuses de dos pisos representan una solución efectiva y eficiente para el transporte de pasajeros en diversas aplicaciones, desde el transporte urbano hasta el turismo y las rutas interurbanas. Con su capacidad aumentada, vistas panorámicas y comodidades modernas, estos autobuses ofrecen una experiencia de viaje superior. Además, con las innovaciones tecnológicas y el enfoque en la sostenibilidad, el futuro de los autobuses de dos pisos parece prometedor.</p>
            </section>
        `;

    this.loadAndRenderCardsText();
    // Mapper para app-cards-text-image
    const textImageMapper = (element, data) => {
      if (data.title) {
        element.setAttribute("title-text", data.title);
      }
      if (data.iconSrc) {
        element.setAttribute("icon-src", data.iconSrc);
      }
    };

    this.loadAndRenderComponentList(
      "../../src/data/cards-text-image-comodidad.json",
      "#comodidad-cards-container",
      "app-cards-text-image",
      textImageMapper,
    );
    this.loadAndRenderComponentList(
      "../../src/data/cards-text-image-asientos.json",
      "#asientos-cards-container",
      "app-cards-text-image",
      textImageMapper,
    );

    // Call the specific methods to load cards for each section
    this.loadServicesCards();
    this.loadTechCards();
    this.loadFutureCards();
  }
  async loadAndRenderCardsText() {
    const cardsContainer = this.querySelector("#scroll-bar-container");
    if (!cardsContainer) {
      console.error(
        'El contenedor con ID "grid-cards-container" no fue encontrado.',
      );
      return;
    }
    try {
      const responseCardsText = await fetch(
        "../../src/data/card-text-servicios-abordo-data.json",
      );
      if (!responseCardsText.ok) {
        throw new Error(
          `Error HTTP al cargar card-text-data.json: ${responseCardsText.status}`,
        );
      }
      const cardsTextData = await responseCardsText.json();
      this.renderCardsText(cardsTextData, cardsContainer);
      console.log("Datos de tarjetas cargados y renderizados correctamente.");
    } catch (error) {
      console.error(
        "Error al cargar o renderizar los datos de tarjetas:",
        error,
      );
      cardsContainer.innerHTML =
        "<p>Error al cargar la información de las tarjetas.</p>";
    }
  }

  renderCardsText(cardsTextData, targetContainer) {
    if (!targetContainer) {
      console.error(
        "Error en renderCardsText: El contenedor de destino no es válido o no fue proporcionado.",
      );
      return;
    }
    if (
      !cardsTextData ||
      !Array.isArray(cardsTextData) ||
      cardsTextData.length === 0
    ) {
      console.error(
        "No se pudieron cargar los datos para las cards, están vacíos o el formato es incorrecto.",
      );
      targetContainer.innerHTML =
        "<p>No hay datos disponibles para mostrar las cards.</p>";
      return;
    }

    cardsTextData.forEach((data) => {
      const cardElement = document.createElement("app-card-text");
      if (data.title) {
        cardElement.setAttribute("title", data.title);
      }
      if (data.description) {
        cardElement.setAttribute("description", data.description);
      }
      if (data.width) {
        cardElement.setAttribute("card-width", data.width);
      }
      if (data.height) {
        cardElement.setAttribute("card-height", data.height);
      }
      targetContainer.appendChild(cardElement);
    });
  }
  async loadAndRenderComponentList(
    jsonPath,
    containerSelector,
    componentTag,
    dataToAttributesMapper,
  ) {
    const container = this.querySelector(containerSelector);
    if (!container) {
      console.error(`El contenedor ${containerSelector} no fue encontrado.`);
      return;
    }
    container.innerHTML = "";

    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(
          `Error HTTP! status: ${response.status} al cargar ${jsonPath}`,
        );
      }
      const itemsData = await response.json();

      if (!itemsData || !Array.isArray(itemsData) || itemsData.length === 0) {
        console.warn(
          `No hay datos en ${jsonPath}, están vacíos o el formato es incorrecto.`,
        );
        container.innerHTML = "<p>No hay datos disponibles para mostrar.</p>";
        return;
      }

      itemsData.forEach((data) => {
        const element = document.createElement(componentTag);
        dataToAttributesMapper(element, data);
        container.appendChild(element);
      });
    } catch (error) {
      console.error(
        `Error al cargar o renderizar desde ${jsonPath} en ${containerSelector}:`,
        error,
      );
      if (container) {
        container.innerHTML = `<p>Error al cargar la información desde ${jsonPath}.</p>`;
      }
    }
  }

  async loadServicesCards() {
    try {
      // Construye la URL al archivo JSON de forma robusta usando import.meta.url
      const jsonFileUrl = new URL(
        "../../data/card-servicios-disponibles-data.json",
        import.meta.url,
      );
      const response = await fetch(jsonFileUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();

      const container = this.querySelector("#services-cards-container");
      if (container) {
        cardsData.forEach((cardInfo) => {
          const cardElement = document.createElement(
            "app-card-text-bg-blue-gray",
          );
          cardElement.setAttribute("card-title", cardInfo.title);
          cardElement.setAttribute("card-description", cardInfo.description);
          container.appendChild(cardElement);
        });
      } else {
        console.error("El contenedor #grid-cards-container no fue encontrado.");
      }
    } catch (error) {
      console.error(
        "Error al cargar los datos de las tarjetas de salidas charters:",
        error,
      );
    }
  }
  async loadTechCards() {
    try {
      // Construye la URL al archivo JSON de forma robusta usando import.meta.url
      const jsonFileUrl = new URL(
        "../../data/card-tech-data.json",
        import.meta.url,
      );
      const response = await fetch(jsonFileUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();

      const container = this.querySelector("#tech-cards-container"); // Corrected selector
      if (container) {
        cardsData.forEach((cardInfo) => {
          const cardElement = document.createElement(
            "app-card-text-bg-blue-gray",
          );
          cardElement.setAttribute("card-title", cardInfo.title);
          cardElement.setAttribute("card-description", cardInfo.description);
          container.appendChild(cardElement);
        });
      } else {
        console.error("El contenedor #grid-cards-container no fue encontrado.");
      }
    } catch (error) {
      console.error(
        "Error al cargar los datos de las tarjetas de salidas charters:",
        error,
      );
    }
  }
  async loadFutureCards() {
    try {
      // Construye la URL al archivo JSON de forma robusta usando import.meta.url
      const jsonFileUrl = new URL(
        "../../data/card-futuro-autobuses-data.json",
        import.meta.url,
      );
      const response = await fetch(jsonFileUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();

      const container = this.querySelector("#future-cards-container"); // Corrected selector
      if (container) {
        cardsData.forEach((cardInfo) => {
          const cardElement = document.createElement(
            "app-card-text-bg-blue-gray",
          );
          cardElement.setAttribute("card-title", cardInfo.title);
          cardElement.setAttribute("card-description", cardInfo.description);
          container.appendChild(cardElement);
        });
      } else {
        console.error("El contenedor #grid-cards-container no fue encontrado.");
      }
    } catch (error) {
      console.error(
        "Error al cargar los datos de las tarjetas de salidas charters:",
        error,
      );
    }
  }
}
customElements.define("page-servicios-a-bordo", PageServiciosABordo);
