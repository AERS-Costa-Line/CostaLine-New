class AppDestinationsTable extends HTMLElement {
  constructor() {
    super();
    this.chunkSize = 62;
    this.language = "es"; // valor por defecto
  }

  static get observedAttributes() {
    return ["src", "language"];
  }

  async connectedCallback() {
    this.language = this.getAttribute("language") || "es";
    this.innerHTML = `
      <div class="destinations-tables-container" id="destinations-tables-container">
          <p>Cargando rutas...</p>
      </div>
    `;
    const src = this.getAttribute("src");
    if (src) {
      await this.loadAndRenderDestinations(src);
    }
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (name === "language" && oldValue !== newValue) {
      this.language = newValue || "es";
      const src = this.getAttribute("src");
      if (src) {
        await this.loadAndRenderDestinations(src);
      }
    }

    if (name === "src" && oldValue !== newValue && newValue) {
      await this.loadAndRenderDestinations(newValue);
    }
  }

  async loadAndRenderDestinations(src) {
    const container = this.querySelector("#destinations-tables-container");
    if (!container) {
      console.error("El contenedor de tablas de destinos no fue encontrado.");
      return;
    }

    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const destinations = await response.json();
      container.innerHTML = "";

      // Traducción de encabezados según idioma
      const headers = {
        es: { origen: "Origen", destino: "Destino" },
        en: { origen: "Origin", destino: "Destination" },
      };

      for (let i = 0; i < destinations.length; i += this.chunkSize) {
        const chunk = destinations.slice(i, i + this.chunkSize);

        const tableWrapper = document.createElement("div");
        tableWrapper.classList.add("destinations-table-wrapper");

        const table = document.createElement("table");
        table.classList.add("destinations-table");

        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        headerRow.setAttribute("role", "button");
        headerRow.setAttribute("tabindex", "0");
        headerRow.setAttribute("aria-expanded", "false"); // Por defecto cerrado en móvil
        headerRow.setAttribute("aria-controls", `table-body-${i}`);

        const th1 = document.createElement("th");
        th1.textContent = headers[this.language].origen;
        headerRow.appendChild(th1);

        const th2 = document.createElement("th");
        th2.innerHTML = `${headers[this.language].destino} <span class="accordion-icon"></span>`;
        headerRow.appendChild(th2);

        const tbody = table.createTBody();
        tbody.id = `table-body-${i}`;
        tbody.classList.add("destinations-table-body"); // El CSS se encargará de mostrarlo

        chunk.forEach((dest) => {
          const row = tbody.insertRow();
          row.insertCell().textContent = dest.origen;
          row.insertCell().textContent = dest.destino;
        });

        tableWrapper.appendChild(table);
        container.appendChild(tableWrapper);

        // Lógica del acordeón (funcional principalmente en móvil gracias al CSS)
        const toggleAccordion = () => {
          const isExpanded = headerRow.getAttribute("aria-expanded") === "true";

          // Alternar estado
          headerRow.setAttribute("aria-expanded", !isExpanded);
          tbody.classList.toggle("active");
        };

        headerRow.addEventListener("click", toggleAccordion);
        headerRow.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleAccordion();
          }
        });
      }
    } catch (error) {
      console.error("Error al cargar o renderizar los destinos:", error);
      container.innerHTML = "<p>Error al cargar las rutas.</p>";
    }
  }
}

customElements.define("app-destinations-table", AppDestinationsTable);
