class AppCotiza extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="cotiza">
      <p>¡Tu nueva aventura comienza aquí! 🚍 Compra tus boletos de autobús</p>
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
          document.addEventListener("DOMContentLoaded", () => {
            const buy = document.querySelector(".cotiza");
            const searchButton = document.createElement("button");
            searchButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 250 250" fill="currentColor">
                <path class="bbvaicn" d="M182.85 162.85a90 90 0 1 0-20 20L220 240l20-20zM150 110a40 40 0 0 0-40-40V50a60 60 0 0 1 60 60z"></path>
              </svg>
            `;
            searchButton.setAttribute("role", "button");
            searchButton.setAttribute("aria-label", "Ir al cotizador");
            searchButton.setAttribute("tabindex", "0");
            searchButton.classList.add("search-button");
            searchButton.style.display = "none";
            searchButton.style.position = "fixed";
            searchButton.style.bottom = "5.45rem";
            searchButton.style.right = "1.25rem";
            searchButton.style.zIndex = "9999";
            searchButton.style.padding = "0.2125rem";
            searchButton.style.backgroundImage = "radial-gradient( #3a6ea5 40%, #15395a 100%)";
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
                    // Si "buy" no está visible, mostrar el botón con animación
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
              { threshold: 0.1 }
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
