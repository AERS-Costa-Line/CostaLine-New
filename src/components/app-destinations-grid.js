/*-------------------------SCRIPTS---------------------------*/

import "../js/slick.js?v=1.0.2";

class AppDestinationsGrid extends HTMLElement {
  static #instanceCounter = 0;

  connectedCallback() {
    this.instanceId = AppDestinationsGrid.#instanceCounter++;
    const destinationsData = this.getAttribute("destinations") || "[]";
    const destinations = JSON.parse(destinationsData);
    const titleTextData = this.getAttribute("titlesText") || "[]";
    const titleTexts = JSON.parse(titleTextData);
    const gridClass = this.getGridClass(destinations.length);
    const wrapperId = `destinations-wrapper-${this.instanceId}`;
    const containerId = `destinations-container-${this.instanceId}`;

    this.innerHTML = `
      <section class="section__destinations" loading="lazy">
          <div class="section__destinations-container">
              ${this.renderText(titleTexts)}
              
              <div id="${containerId}">
                <button class="slider-btn prev icon-next-button" aria-label="Anterior" aria-controls="${wrapperId}" tabindex="0" style="display: none;"></button>
                <div id="${wrapperId}" class="section__destinations__container__grid ${gridClass}" role="group">
                  ${this.renderDestinations(destinations)}
                </div>
                <button class="slider-btn next icon-next-button" aria-label="Siguiente" aria-controls="${wrapperId}" tabindex="0" style="display: none;"></button>
              </div>
          </div>
      </section>
    `;

    this.actualizarClases = this.actualizarClases.bind(this);
    window.addEventListener("resize", this.actualizarClases);

    // Se difiere la inicialización hasta que el documento esté listo.
    // Esto asegura que jQuery y el plugin Slick estén disponibles,
    // replicando el comportamiento del componente app-payments que sí funciona.
    $(document).ready(() => {
      this.actualizarClases();
    });
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.actualizarClases);
  }

  getGridClass(count) {
    return `grid-${Math.min(count, 5)}`;
  }

  renderText(titleTexts) {
    return titleTexts
      .map(
        (titleText) => `
        <h2 class="section__destinatons__container__title">${
          titleText.title || "Conoce mas de nuestros destinos"
        }</h2>
        <p class="section__destinations__text">${
          titleText.text || "Elije el destino que mas te agrade para viajar"
        }</p>
      `,
      )
      .join("");
  }

  renderDestinations(destinations) {
    return destinations
      .map(
        (destination, index) => `
          <div class="destinations__item slide"
              style="background-image: url('${destination.image}'); grid-area: item${index + 1};">
            <a href="${destination.link || "./#"}"
              class="destinations__item__text destination__item__text--slide"
              rel="noopener noreferrer"
              aria-label="Ir a ${destination.title}"
              title="Ir a ${destination.title}">
              <h3 class="destinations__item__text__title">${destination.title}</h3>
              <p class="destinations__item__text__content">${destination.content}</p>
            </a>
          </div>
      `,
      )
      .join("");
  }

  actualizarClases() {
    const containerId = `destinations-container-${this.instanceId}`;
    const wrapperId = `destinations-wrapper-${this.instanceId}`;
    const destinationsContainer = this.querySelector(`#${containerId}`);
    const destinationsWrapper = this.querySelector(`#${wrapperId}`);
    const prevButton = this.querySelector(".prev");
    const nextButton = this.querySelector(".next");

    if (
      !destinationsContainer ||
      !destinationsWrapper ||
      !prevButton ||
      !nextButton
    )
      return;

    const isMobile = window.innerWidth <= 440;
    const isMobileLandScape =
      window.innerWidth <= 1024 && window.innerWidth > window.innerHeight;

    // ✅ Guard: obtenemos jQuery y verificamos slick
    const $ = window.jQuery;
    const hasSlick = !!$?.fn?.slick;

    if (isMobile || isMobileLandScape) {
      destinationsContainer.classList.add("slider-container");
      destinationsWrapper.classList.remove(
        "section__destinations__container__grid",
      );
      destinationsWrapper.classList.add("slider");

      // Si slick NO existe, no inicializamos slider (evita el error)
      if (!hasSlick) {
        console.warn(
          "Slick no está disponible. Falta cargar slick.min.js o el orden de scripts está mal.",
        );
        prevButton.style.display = "none";
        nextButton.style.display = "none";
        return;
      }

      prevButton.style.display = "block";
      nextButton.style.display = "block";

      // ✅ Ya es seguro usar $
      if (!$(destinationsWrapper).hasClass("slick-initialized")) {
        $(destinationsWrapper).slick({
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        });

        prevButton.onclick = () => $(destinationsWrapper).slick("slickPrev");
        nextButton.onclick = () => $(destinationsWrapper).slick("slickNext");

        const updateSlideTabindex = () => {
          $(destinationsWrapper)
            .find(
              '.slick-slide[aria-hidden="true"] a, .slick-cloned[aria-hidden="true"] a',
            )
            .attr("tabindex", -1);

          $(destinationsWrapper)
            .find(
              '.slick-slide[aria-hidden="false"] a, .slick-cloned[aria-hidden="false"] a',
            )
            .attr("tabindex", 0);
        };

        $(destinationsWrapper).on(
          "afterChange init reInit",
          updateSlideTabindex,
        );
        setTimeout(updateSlideTabindex, 100);
      }
    } else {
      // Desktop / grid

      // ✅ Solo si slick existe hacemos unslick y usamos $
      if (hasSlick && $(destinationsWrapper).hasClass("slick-initialized")) {
        $(destinationsWrapper).slick("unslick");
      }

      // Limpia tabindex residual (si hay jQuery úsalo, si no, hazlo en vanilla)
      if ($) {
        $(destinationsWrapper).find("a").attr("tabindex", 0);
      } else {
        destinationsWrapper
          .querySelectorAll("a")
          .forEach((a) => a.setAttribute("tabindex", "0"));
      }

      destinationsContainer.classList.remove("slider-container");
      destinationsWrapper.classList.remove("slider");

      const destinationsData = this.getAttribute("destinations") || "[]";
      const destinations = JSON.parse(destinationsData);
      const gridClass = this.getGridClass(destinations.length);

      destinationsWrapper.classList.add(
        "section__destinations__container__grid",
        gridClass,
      );
      destinationsWrapper.innerHTML = this.renderDestinations(destinations);

      prevButton.style.display = "none";
      nextButton.style.display = "none";
    }
  }
}

customElements.define("app-destinations-grid", AppDestinationsGrid);
