class AppCardDoters extends HTMLElement {
  static get observedAttributes() {
    return ["card-doters-src"];
  }

  constructor() {
    super();
    // No se utiliza Shadow DOM para que los estilos externos de _app-card-doters.scss apliquen directamente.
  }

  async connectedCallback() {
    if (this.hasAttribute("card-doters-src")) {
      await this._loadAndRenderCards();
    } else {
      this.innerHTML =
        "<p>Error: El atributo card-doters-src es requerido para cargar las tarjetas.</p>";
    }
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (name === "card-doters-src" && oldValue !== newValue && newValue) {
      await this._loadAndRenderCards();
    }
  }

  async _loadAndRenderCards() {
    const src = this.getAttribute("card-doters-src");
    if (!src) {
      this.innerHTML =
        "<p>Error: El atributo card-doters-src es requerido y no puede estar vacío.</p>";
      return;
    }

    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error(
          `Error al cargar el archivo JSON: ${response.status} ${response.statusText}`
        );
      }
      const cardsData = await response.json();
      this._renderCards(cardsData);
    } catch (error) {
      console.error(
        "Error al cargar o parsear el JSON para app-card-doters:",
        error
      );
      this.innerHTML = `<p>Error al cargar la información de las tarjetas: ${error.message}</p>`;
    }
  }

  _renderCards(cardsData) {
    if (!cardsData || !Array.isArray(cardsData)) {
      this.innerHTML =
        "<p>Los datos recibidos para las tarjetas no son válidos (se esperaba un array).</p>";
      return;
    }
    if (cardsData.length === 0) {
      this.innerHTML = "<p>No hay tarjetas para mostrar.</p>";
      return;
    }

    const cardsHTML = cardsData
      .map(
        (card) => `
          <div class="card-doters">
            <div class="__card-doters__img">
              <img src="${
                card.imageSrc || "../src/assets/img/doters/doters-default.webp"
              }" alt="${card.imageAlt || "Imagen Doters"}">
            </div>
            <p class="__card-doters__number"> ${card.number || "00"} </p>
            <div class="__card-doters__content">
              <h3 class="__card-doters__title">${
                card.title || "Título no disponible"
              }</h3>
              <p class="__card-doters__text">${
                card.text || "Contenido no disponible."
              }</p>
            </div>
            <img class="__card-doters__logo" src="${
              card.logoSrc || "../src/assets/img/doters/doter-default.webp"
            }" alt="${card.logoAlt || "Logo Doters"}">
          </div>
        `
      )
      .join("");

    this.innerHTML = cardsHTML; // Renderiza directamente en el Light DOM
  }
}

// Corrected custom element name for consistency
customElements.define("app-card-doters", AppCardDoters);
