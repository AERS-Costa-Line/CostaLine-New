class AppCardRightDescription extends HTMLElement {
  static get observedAttributes() {
    return ["src", "cards"];
  }

  connectedCallback() {
    const src = this.getAttribute("src");
    const cards = this.getAttribute("cards");
    if (cards) {
      this._render(JSON.parse(cards));
    } else if (src) {
      this._loadAndRenderCards(src);
    } else {
      this.innerHTML = this._getCardHTML({
        imageSrc: "../src/assets/img/autobuses/pantalla-autobus.webp",
        imageAlt: "Pantallas individuales",
        title: "Individual screens",
        description:
          "Individual screens with onboard entertainment to keep you company along the way.",
      });
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src" && oldValue !== newValue) {
      this._loadAndRenderCards(newValue);
    } else if (name === "cards" && oldValue !== newValue) {
      this._render(JSON.parse(newValue));
    }
  }

  async _loadAndRenderCards(jsonPath) {
    this.innerHTML = `<div class="card-right-container"><p>Loading special services...</p></div>`;

    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const cardsData = await response.json();

      if (!cardsData || !Array.isArray(cardsData)) {
        throw new Error("Invalid data format. Expected an array of cards.");
      }

      this._render(cardsData);
    } catch (error) {
      console.error(`Error loading cards from ${jsonPath}:`, error);
      this.innerHTML =
        '<div class="card-right-container"><p>Error loading special services.</p></div>';
    }
  }

  _render(cardsData) {
    this.innerHTML = `<div class="card-right-container">${cardsData.map((card) => this._getCardHTML(card)).join("")}</div>`;
  }

  _getCardHTML(card) {
    const {
      imageSrc,
      imageAlt,
      title,
      description,
      buttonText,
      buttonLink,
      buttonIcon,
    } = card;

    let buttonHtml = "";
    if (buttonText && buttonLink) {
      buttonHtml = `
        <a href="${buttonLink}" class="btn-card">
          ${buttonIcon ? `<img src="${buttonIcon}" alt="Button icon" class="btn-icon">` : ""}
          ${buttonText}
        </a>
      `;
    }

    return `
      <section class="card-right">
          <article class="card-content">
              <h2 class="title-card">${title || "No title"}</h2>
              <p class="text-card">${description || "No description"}</p>
              ${buttonHtml}
          </article>
          <figure class="card-image">
              <img src="${imageSrc || ""}" alt="${imageAlt || ""}">
          </figure>
      </section>
    `;
  }
}
customElements.define("app-card-right-description", AppCardRightDescription);
