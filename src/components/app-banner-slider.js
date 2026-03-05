class AppBannerSlider extends HTMLElement {
  connectedCallback() {
    const slidesData = JSON.parse(this.getAttribute("slides-data") || "[]");

    // Genera dinámicamente las diapositivas
    const slidesHTML = slidesData
      .map(
        (slide) => `
                  <div class="slide" aria-label="${slide.title}" role="group">
                    <a href="${slide.link}" target="_blank" rel="noopener noreferrer" class="banner-slider-link" aria-label="Enlace del banner ${slide.title}">
                        <picture>
                            <source srcset="${slide.mediumImage}" media="(min-width: 30.125rem) and (max-width: 61.875rem)"> <!-- 482px and 990px to rem -->
                            <source srcset="${slide.smallImage}" media="(max-width: 30rem)"> <!-- 480px to rem -->
                            <img src="${slide.image}" alt="${slide.title}">
                        </picture>
                    </a>
                  </div>
                `,
      )
      .join("");

    let prevButtonHTML = "";
    let nextButtonHTML = "";
    let indicatorsContainerHTML = "";
    let ariaLiveValue = "off"; // Por defecto 'off' si no hay slides o solo hay uno

    if (slidesData.length > 1) {
      ariaLiveValue = "polite"; // El carrusel es interactivo y cambia

      // Genera dinámicamente los indicadores solo si hay más de una diapositiva
      const indicatorsHTML = slidesData
        .map(
          (_, index) => `
        <div class="indicator" data-index="${index}" role="button" tabindex="0" aria-label="Ir a la diapositiva ${
          index + 1
        }"></div>
    `,
        )
        .join("");

      prevButtonHTML = `
                <div class="muesca__prev">
                    <button class="prev-slide" title="Anterior" aria-label="Ir a la imagen anterior" role="button" tabindex="0">
                        <svg height="10.5rem" width="5rem" xmlns="http://www.w3.org/2000/svg"> <!-- 168px and 80px to rem -->
                            <path d="M0 168V0c0 47.41 24 47.41 24 84S0 120.59 0 168z" fill="#fff" fill-rule="evenodd" />
                        </svg>
                        <div class="arrow__prev">
                            &#10094;
                        </div>
                    </button>
                </div>`;

      nextButtonHTML = `
                <div class="muesca__next">
                    <button class="next-slide" title="Siguiente" aria-label="Ir a la imagen siguiente" role="button" tabindex="0">
                        <svg height="10.5rem" width="5rem" xmlns="http://www.w3.org/2000/svg"> <!-- 168px and 80px to rem -->
                            <path d="M0 168V0c0 47.41 24 47.41 24 84S0 120.59 0 168z" fill="#fff" fill-rule="evenodd" />
                        </svg>
                        <div class="arrow__next">
                            &#10094;
                        </div>
                    </button>
                </div>`;

      indicatorsContainerHTML = `
        <div class="indicators" role="group" aria-label="Indicadores de la imagen actual">
            ${indicatorsHTML}
        </div>`;
    }

    this.innerHTML = `
            <div class="container__carousel">
                <div class="carousel" aria-live="${ariaLiveValue}" role="region" aria-label="Carrusel de promociones">
                    <div class="carousel-container">
                        ${slidesHTML}
                    </div>
                    ${prevButtonHTML}
                    ${nextButtonHTML}
                </div>
                ${indicatorsContainerHTML}
            </div>
        `;

    // Lógica del carrusel
    if (slidesData.length > 1) {
      let currentIndex = 0;
      const slides = this.querySelectorAll(".slide");
      const indicators = this.querySelectorAll(".indicator");
      const carouselContainer = this.querySelector(".carousel-container");
      let autoSlideInterval;

      const updateCarousel = () => {
        if (carouselContainer) {
          carouselContainer.style.transform = `translateX(-${
            currentIndex * 100
          }%)`;
        }
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentIndex);
        });
      };

      const moveSlide = (direction) => {
        currentIndex += direction;
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
        updateCarousel();
        resetAutoSlide();
      };

      const setSlide = (index) => {
        currentIndex = index;
        updateCarousel();
        resetAutoSlide();
      };

      const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
          moveSlide(1);
        }, 4000);
      };

      const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
      };

      // Agrega eventos a las muescas
      const prevMuesca = this.querySelector(".muesca__prev");
      const nextMuesca = this.querySelector(".muesca__next");

      if (prevMuesca) {
        prevMuesca.addEventListener("click", () => moveSlide(-1));
      }
      if (nextMuesca) {
        nextMuesca.addEventListener("click", () => moveSlide(1));
      }

      // Agrega eventos a los indicadores
      indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
          const index = parseInt(indicator.getAttribute("data-index"), 10);
          setSlide(index);
        });
      });

      // Inicializa el carrusel
      updateCarousel();
      startAutoSlide();
    } else if (slidesData.length === 1) {
      // Asegura que el único slide se muestre correctamente sin transformación.
      const carouselContainer = this.querySelector(".carousel-container");
      if (carouselContainer) {
        carouselContainer.style.transform = "translateX(0%)";
      }
      // Agrega un margen inferior si solo hay un banner
      const mainContainer = this.querySelector(".container__carousel");
      if (mainContainer) {
        mainContainer.style.marginBottom = "2rem";
        mainContainer.style.cursor = "normal"; // Puedes ajustar este valor según necesites
      }

      // Selecciona el único enlace <a> dentro del slide
      const singleBannerLink = this.querySelector(".banner-slider-link");
      if (singleBannerLink) {
        singleBannerLink.style.cursor = "default"; // Cambia el cursor a normal
        // Bloquea el redireccionamiento del enlace
        singleBannerLink.addEventListener("click", function (event) {
          event.preventDefault();
        });
      }
    }

    // Lógica para ajustar el margen superior si app-cotiza no existe
    const containerCarousel = this.querySelector(".container__carousel");
    if (containerCarousel) {
      // Esperar un ciclo para asegurar que todo el DOM esté listo
      setTimeout(() => {
        const cotizaElement = document.querySelector("app-cotiza");
        if (!cotizaElement) {
          containerCarousel.classList.add("no-cotiza-presente");
        }
      }, 0);
    }

    // Lógica de scroll para el contenedor del carrusel
    const carouselWrapper = this.querySelector(".container__carousel");
    if (carouselWrapper) {
      let lastScrollY = window.scrollY;

      window.addEventListener("scroll", () => {
        if (window.innerWidth >= 990) {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY) {
            // Scroll hacia abajo: ocultar el elemento
            carouselWrapper.classList.remove("visible");
            carouselWrapper.classList.add("hidden");
          } else {
            // Scroll hacia arriba: mostrar el elemento
            carouselWrapper.classList.remove("hidden");
            carouselWrapper.classList.add("visible");
          }
          lastScrollY = currentScrollY;
        }
      });
    }
  }
}

customElements.define("app-banner-slider", AppBannerSlider);
