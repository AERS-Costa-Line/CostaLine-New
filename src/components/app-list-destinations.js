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
              <img src="./src/assets/icons/svgs/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              CDMX y Zona Metropólitana
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="../../boletos-autobus/aeropuerto-aifa.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús al aeropuerto Felipe Ángeles"
                  title="Boletos de Autobús al aeropuerto Internacional Felipe Ángeles"
                  >Boletos de Autobús al AIFA</a
                >
              </li>
              <li>
                <a
                  href="../../boletos-autobus/ciudad-de-mexico.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a la Ciudad de México"
                  title="Boletos de Autobús a la Ciudad de México"
                  >Boletos de Autobús a la Ciudad de México</a
                >
              </li>
              <li>
                <a
                  href="../../boletos-autobus/mexico-norte.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Norte"
                  title="Boletos de Autobús a México Norte"
                  >Boletos de Autobús a México Norte</a>
              </li>
              <li>
                <a
                  href="../../boletos-autobus/mexico-poniente.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Poniente"
                  title="Boletos de Autobús a México Poniente"
                  >Boletos de Autobús a México Poniente</a>
              </li>
              <li>
                <a
                  href="../../boletos-autobus/mexico-sur.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a México Sur"
                  title="Boletos de Autobús a México Sur"
                  >Boletos de Autobús a México Sur</a>
              </li>
              <li>
                <a
                  href="../../boletos-autobus/toluca.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Toluca"
                  title="Boletos de Autobús a Toluca"
                  >Boletos de Autobús a Toluca</a>
              </li>
             
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-centro">
              <img src="./src/assets/icons/svgs/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Corredor Guerrero
            </h3>
            <ul class="region_column__list-cities">
              <li>
                <a
                  href="../../boletos-autobus/acapulco.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco"
                  title="Boletos de Autobús a Acapulco"
                  >Boletos de Autobús a Acapulco</a
                >
              </li>
              <li>
                <a
                  href="../../boletos-autobus/acapulco-diamante.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Acapulco Diamante"
                  title="Boletos de Autobús a Acapulco Diamante"
                  >Boletos de Autobús a Acapulco Diamante</a>
              </li>
              <li>
                <a
                  href="../../boletos-autobus/chilpancingo.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Chilpancingo"
                  title="Boletos de Autobús a Chilpancingo"
                  >Boletos de Autobús a Chilpancingo</a>
              </li>
             

               <li>
                <a
                  href="../../boletos-autobus/acapulco-maxitunel.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús por el maxitunel"
                  title="Boletos de Autobús por maxitunel"
                  >Boletos de Autobús por Maxitunel</a>
              </li>

               <li>
                <a
                  href="../../boletos-autobus/taxco.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Taxco"
                  title="Boletos de Autobús a Taxco"
                  >Boletos de Autobús a Taxco</a>
              </li>

               <li>
                <a
                  href="../../boletos-autobus/iguala.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Iguala"
                  title="Boletos de Autobús a Iguala"
                  >Boletos de Autobús a Iguala</a>
              </li>

               <li>
                <a
                  href="../../boletos-autobus/zihuatanejo.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Zihuatanejo"
                  title="Boletos de Autobús a Zihuatanejo"
                  >Boletos de Autobús a Zihuatanejo</a>
              </li>
             
            </ul>
          </article>

          <article class="region_column" role="region">
            <h3 id="region-centro">
              <img src="./src/assets/icons/svgs/pin.svg" alt="" width="1" height="1" loading="lazy"/>
              Rutas regionales
            </h3>
            <ul class="region_column__list-cities">

              <li>
                <a
                  href="../../boletos-autobus/ciudad-altamirano.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Ciudad Altamirano"
                  title="Boletos de Autobús a Ciudad Altamirano"
                  >Boletos de Autobús a Ciudad Altamirano</a>
              </li>
              <li>
                <a
                  href="../../boletos-autobus/coyuca-de-benitez.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Coyuca de Benitez"
                  title="Boletos de Autobús a Coyuca de Benitez"
                  >Boletos de Autobús a Coyuca de Benitez</a>
              </li>
              
              <li>
                <a
                  href="../../boletos-autobus/cuernavaca.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Cuernavaca"
                  title="Boletos de Autobús a Cuernavaca"
                  >Boletos de Autobús a Cuernavaca</a>
              </li>
             
              <li>
                <a
                  href="../../boletos-autobus/tecpan.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tecpan"
                  title="Boletos de Autobús a Tecpan"
                  >Boletos de Autobús a Tecpan</a>
              </li>
               <li>
                <a
                  href="../../boletos-autobus/tepotzotlan.html"
                  class="region_column__city"
                  rel="noopener noreferrer"
                  aria-label="Boletos de Autobús a Tepotzotlán"
                  title="Boletos de Autobús a Tepotzotlán"
                  >Boletos de Autobús a Tepotzotlán</a>
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
