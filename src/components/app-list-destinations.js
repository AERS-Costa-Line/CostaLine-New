class AppListDestinations extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="main-container">
        <h2 class="accordion-title">
          Destinos con Costa Line
          <button id="accordion-button" aria-expanded="false" aria-controls="accordion-panel" aria-label="Botón para expandir o contraer la seccion del acordeón de destinos" class="accordion-button" type="button"></button>
        </h2>
        <section id="accordion-panel" class="destinations-list panel" aria-labelledby="accordion-button">
          <article class="region_column" role="region">
            <h3 id="region-bajio">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              CDMX y Zona Metropólitana
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús al aeropuerto de la Ciudad de México"
                  title="Boletos de Autobús al aeropuerto de la Ciudad de México"
                  >Boletos de Autobús al AICM</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a El Ángel Río Tiber"
                  title="Boletos de Autobús a El Ángel Río Tiber"
                  >Boletos de Autobús a Río Tiber</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Hotel Benidorm"
                  title="Boletos de Autobús a Hotel Benidorm"
                  >Boletos de Autobús a Hotel Benidorm</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Norte"
                  title="Boletos de Autobús a México Norte"
                  >Boletos de Autobús a México Norte</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Poniente"
                  title="Boletos de Autobús a México Poniente"
                  >Boletos de Autobús a México Poniente</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Sur"
                  title="Boletos de Autobús a México Sur"
                  >Boletos de Autobús a México Sur</a>
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-centro">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Corredor Guerrero
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús al aeropuerto de la Ciudad de México"
                  title="Boletos de Autobús al aeropuerto de la Ciudad de México"
                  >Boletos de Autobús al AICM</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a El Ángel Río Tiber"
                  title="Boletos de Autobús a El Ángel Río Tiber"
                  >Boletos de Autobús a Río Tiber</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Hotel Benidorm"
                  title="Boletos de Autobús a Hotel Benidorm"
                  >Boletos de Autobús a Hotel Benidorm</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Norte"
                  title="Boletos de Autobús a México Norte"
                  >Boletos de Autobús a México Norte</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Poniente"
                  title="Boletos de Autobús a México Poniente"
                  >Boletos de Autobús a México Poniente</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Sur"
                  title="Boletos de Autobús a México Sur"
                  >Boletos de Autobús a México Sur</a>
              </li>
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-centro">
              <img src="./src/assets/img/destinos-img/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Rutas regionales
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cuautla"
                  title="Boletos de Autobús a Cuautla"
                  >Boletos de Autobús a Cuautla</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cuernavaca"
                  title="Boletos de Autobús a Cuernavaca"
                  >Boletos de Autobús a Cuernavaca</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Las Américas Ecatepec"
                  title="Boletos de Autobús a Las Américas Ecatepec"
                  >Boletos de Autobús a Las Américas Ecatepec</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tepotzotlán"
                  title="Boletos de Autobús a Tepotzotlán"
                  >Boletos de Autobús a Tepotzotlán</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Puente de Ixtla"
                  title="Boletos de Autobús a Puente de Ixtla"
                  >Boletos de Autobús a Puente de Ixtla</a>
              </li>
              <li>
                <a
                  href="#"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Toluca"
                  title="Boletos de Autobús a Toluca"
                  >Boletos de Autobús a Toluca</a>
              </li>
            </ul>
          </article>

          
        </section>
      </div>
    `;

    let acc = this.querySelectorAll(".accordion-title");
    let button = this.querySelectorAll("#accordion-button");

    function checkWindowsSize(acc) {
      const w = window.innerWidth;
      let firstPanel = acc[0].nextElementSibling;

      if (w >= 835) {
        firstPanel.classList.add("open");
        button[0].setAttribute("aria-expanded", "true");
      } else {
        firstPanel.classList.remove("open");
        button[0].setAttribute("aria-expanded", "false");
      }
    }

    checkWindowsSize(acc);

    window.addEventListener("resize", () => checkWindowsSize(acc));

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active-item");
        let panel = this.nextElementSibling;
        panel.classList.toggle("open");
        const isExpanded = panel.classList.contains("open");
        button[i].setAttribute("aria-expanded", isExpanded.toString());
      });
    }
  }
}
customElements.define("app-list-destinations", AppListDestinations);
