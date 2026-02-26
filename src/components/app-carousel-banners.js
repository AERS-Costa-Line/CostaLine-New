class AppCarouselBanners extends HTMLElement {
  static get observedAttributes() {
    return ["cards"];
  }

  connectedCallback() {
    const cards = this.getAttribute("cards");

    if (cards) {
      this._render(JSON.parse(cards));
    } else {
      this.innerHTML = `<p>No cards provided</p>`;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "cards" && oldValue !== newValue) {
      this._render(JSON.parse(newValue));
    }
  }

  _render(cardsData) {
    this.innerHTML = `
      <section class="carousel-container-doters">
        <button class="carousel__arrow-doters left-doters">&#8592;</button>

        <div class="carousel__viewport-doters">
          <div class="carousel__track-doters">
            ${cardsData.map((card) => this._getCardHTML(card)).join("")}
          </div>
        </div>

        <button class="carousel__arrow-doters right-doters">&#8594;</button>
      </section>
    `;

    this._initCarousel();
  }

  _initCarousel() {
    const track = this.querySelector(".carousel__track-doters");
    const cards = this.querySelectorAll(".carousel__card-doters");
    const prev = this.querySelector(".carousel__arrow-doters.left-doters");
    const next = this.querySelector(".carousel__arrow-doters.right-doters");

    let index = 0;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    next.addEventListener("click", () => {
      index = (index + 1) % cards.length;
      update();
    });

    prev.addEventListener("click", () => {
      index = (index - 1 + cards.length) % cards.length;
      update();
    });
  }

  _getCardHTML(card) {
    const {
      level,
      pointsTitle,
      pointsText,
      benefits = [],
      avatar = null,
      color = "green",
      // allow overriding the label shown above the benefits list
      benefitsTitle = "Beneficios",
    } = card;

    return `
      <article class="carousel__card-doters">
        <div class="card__col-left-doters">
          <p class="card__title-doters">${level}</p>
          ${avatar ? `<img class="card__avatar-doters" src="${avatar}" alt="${level}"/>` : `<div class="card__avatar-doters ${color}-doters"></div>`}
        </div>
        <div class="card__content-doters">
          <p class="subtitle__card-doters">${pointsTitle}</p>
          <p class="paragraph__card-doters">${pointsText}</p>
          ${
            benefits.length
              ? `
              <p class="subtitle__card-doters">${benefitsTitle}</p>
              <ul class="list__card-doters">
                ${benefits.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            `
              : ""
          }
        </div>
      </article>
    `;
  }
}

customElements.define("app-carousel-banners", AppCarouselBanners);
