class AppCotiza extends HTMLElement {
  static get observedAttributes() {
    return ["lang"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "lang" && oldValue !== newValue) {
      // rebuild with new language
      this.connectedCallback();
    }
  }

  addPageSpacingAfterCotiza() {
    // Usamos un timeout para permitir que el DOM se renderice completamente, asegurando que otros componentes estén disponibles para su selección.
    setTimeout(() => {
      // Si el carrusel de banners existe, este manejará su propio espaciado, por lo que no hacemos nada.
      const bannerExists = document.querySelector("app-banner-slider");
      if (bannerExists) {
        return;
      }

      // Si no hay banner, buscamos el primer elemento de contenido que sigue a app-cotiza.
      let nextElement = this.nextElementSibling;
      while (nextElement) {
        // Ignoramos etiquetas de script u otros elementos no visibles.
        const tagName = nextElement.tagName.toLowerCase();
        if (tagName !== "script" && tagName !== "style") {
          break; // Encontramos un elemento de contenido.
        }
        nextElement = nextElement.nextElementSibling;
      }

      // Agregamos una clase a este elemento para poder estilizarlo con CSS.
      if (nextElement) {
        nextElement.classList.add("content-after-cotiza");
      }
    }, 10);
  }

  connectedCallback() {
    // determine language; default to Spanish
    const lang = (this.getAttribute("lang") || "es").toLowerCase();
    const isEn = lang.startsWith("en");

    const titleText = isEn
      ? "Your new adventure starts here! 🚍 Buy your bus tickets"
      : "¡Tu nueva aventura comienza aquí! 🚍 Compra tus boletos de autobús";

    this.innerHTML = `
      <div class="cotiza">
      <p class="titulo-widget">${titleText}</p>
        <!-- Widget Ventas Reservamos -->
        <div class="espaciado-widget"
          style="display: flex; background-color: #eee; justify-content:center; margin: 10px 0 10px 0; border-radius: 12px;">
          <div style="max-width: 1430px; margin: 0; width: 100%; padding: 10px 15px"
            data-prop-widget-title="Nos hemos renovado para ti, conoce nuestra nueva experiencia de compra"
            data-widget-host="habitat" 
            data-prop-source-url="one-api.costaline.com.mx/api/v2/places"
            data-prop-funnel-url="viajes.costaline.com.mx" 
            data-prop-primary-color="#0087ca"
            data-prop-accent-color="#003b73" 
            data-prop-max-days-search="360" 
            data-prop-show-open-ticket="false"
            data-prop-autocomplete-type="select" 
            data-prop-display-type="state" 
            data-prop-multi-open-ticket="true"
            class="funnel_reservamos" 
            data-prop-allow-hybrid-trip="true" 
            data-prop-calendar-open="true"
            data-prop-growthbook="https://api-growthbook.reservamos.tech/api/features/prod_bSAl41VNFv0FE1NMDLSPR0i7wo9VZXPqWV1XEE9czk?project=prj_405gzo1olcq7g1af"
            data-prop-growthbook-standalone="true" 
            data-prop-growthbook-dev="false"
            data-prop-growthbook-features="show_open_ticket_cta"
            data-prop-departure-date-picker-text="Compra tu boleto de regreso con hasta 5% de descuento"
            data-prop-return-date-picker-text="Compra tu boleto de regreso con hasta 5% de descuento"
            data-prop-opt-in-return="false" 
            data-prop-profile-url="https://core-api.reservamossaas.com/api/v1"
            data-prop-profile-enabled="true" 
            data-prop-profile-autocomplete="true" 
            data-prop-group-places="true"
            data-prop-compact-height="false" 
            data-prop-interest-event="Interest In Home" 
            data-prop-brand="costaline"
            data-prop-passengers-dropdown="true"
            data-prop-passengers-options="general,minor,older,wheelchair_handicap,pet_friendly,student,teacher"
            data-prop-max-passengers="10" 
            data-prop-allow-fetch="true">

          </div>
        </div>
        <!-- Fin Widget Ventas Reservamos -->

      </div>
          `;

    this.addPageSpacingAfterCotiza();

    document.addEventListener("DOMContentLoaded", () => {
      const buy = document.querySelector(".cotiza");
      const searchButton = document.createElement("button");
      searchButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 250 250" fill="currentColor">
                <path class="bbvaicn" d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"></path>
              </svg>
            `;
      searchButton.setAttribute("role", "button");
      searchButton.setAttribute(
        "aria-label",
        isEn ? "Go to the quote tool" : "Ir al cotizador",
      );
      searchButton.setAttribute("tabindex", "0");
      searchButton.classList.add("search-button");
      searchButton.style.display = "none";
      searchButton.style.position = "fixed";
      // start with top just under the header; we'll update when showing
      searchButton.style.top = `${buy.getBoundingClientRect().bottom}px`;
      searchButton.style.right = "1.25rem";
      searchButton.style.zIndex = "9999";
      searchButton.style.padding = "0.2125rem";
      searchButton.style.backgroundImage =
        "radial-gradient( #3a6ea5 40%, #15395a 100%)";
      searchButton.style.color = "#fff";
      searchButton.style.border = "none";
      searchButton.style.borderRadius = "100%";
      searchButton.style.cursor = "pointer";
      searchButton.style.transform = "translateY(-6.25rem) scale(0.5)";
      searchButton.style.opacity = "0";
      searchButton.style.transition = "transform 0.8s ease, opacity 0.8s ease";
      document.body.appendChild(searchButton);

      // Evento para desplazar la página hacia el elemento "buy"
      searchButton.addEventListener("click", () => {
        buy.scrollIntoView({ behavior: "smooth", block: "center" });
      });

      // Detectar cuando "buy" sale de la vista
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              // Si "buy" no está visible, reposicionar debajo y mostrar el botón
              searchButton.style.top = `${buy.getBoundingClientRect().bottom}px`;
              searchButton.style.display = "block";
              setTimeout(() => {
                searchButton.style.transform = "translateY(0) scale(1)";
                searchButton.style.opacity = "1";
              }, 10);
            } else {
              // Si "buy" está visible, ocultar el botón con animación
              searchButton.style.transform = "translateY(-5.25rem) scale(0.5)";
              searchButton.style.opacity = "0";
              setTimeout(() => {
                searchButton.style.display = "none";
              }, 800);
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(buy);
    });

    const header = document.querySelector(".cotiza");
    let lastScrollY = window.scrollY;

    // Evento para manejar el scroll
    window.addEventListener("scroll", () => {
      if (window.innerWidth >= 990) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          // Scroll hacia abajo: ocultar el header
          header.classList.remove("visible");
          header.classList.add("hidden");
        } else {
          // Scroll hacia arriba: mostrar el header
          header.classList.remove("hidden");
          header.classList.add("visible");
        }

        lastScrollY = currentScrollY;
      }
    });
  }
}
customElements.define("app-cotiza", AppCotiza);

/**
 * Lógica global para gestionar el espaciado de la página.
 * Se asegura de que el contenido principal no quede oculto debajo de elementos fijos como el encabezado,
 * especialmente en páginas que no incluyen los componentes `app-cotiza` o `app-banner-slider`.
 */
function addPageSpacingForHeader() {
  const hasCotiza = document.querySelector("app-cotiza");
  const hasBanner = document.querySelector("app-banner-slider");

  // Esta lógica se aplica solo si ni el cotizador ni el banner están presentes.
  // Los otros casos son manejados por la lógica interna de esos componentes.
  if (!hasCotiza && !hasBanner) {
    const header = document.querySelector("header");
    if (!header) return;

    let nextElement = header.nextElementSibling;
    while (nextElement) {
      const tagName = nextElement.tagName.toLowerCase();
      if (tagName !== "script" && tagName !== "style") {
        break; // Se encontró un elemento de contenido visible.
      }
      nextElement = nextElement.nextElementSibling;
    }

    if (nextElement) {
      nextElement.classList.add("content-after-header");
    }
  }
}

// Se ejecuta después de que el DOM esté completamente cargado para asegurar que todos los elementos estén disponibles.
document.addEventListener("DOMContentLoaded", () => {
  // Un pequeño retardo puede ayudar a evitar conflictos con otros scripts que se ejecutan al cargar.
  setTimeout(addPageSpacingForHeader, 100);
});
