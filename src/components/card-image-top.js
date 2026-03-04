class CardImageTop extends HTMLElement {
  connectedCallback() {
    const cardsData = this.getAttribute("cards");
    let cards = [];
    try {
      cards = cardsData ? JSON.parse(cardsData) : [];
    } catch (error) {
      console.error("Error al parsear JSON en app-card-image-top:", error);
    }

    this.innerHTML = cards
      .map(
        (card) => `
            <div class="__card-image-top">
                <img src="${card.imageSrc}" alt="${card.imageAlt}" class="__card-image-top-img">
                <div class="__card-image-top-text">
                    <p class="__card-image-top-text-title">${card.title}</p>
                    <p class="__card-image-top-text-content">${card.content}</p>
                </div>
            </div>
        `,
      )
      .join("");
  }
}

customElements.define("app-card-image-top", CardImageTop);
