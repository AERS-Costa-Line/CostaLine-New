class AppSectionTitle extends HTMLElement {
    connectedCallback() {
      const sectionTitle = this.getAttribute('section-title');
      this.innerHTML = `
        <h2 class="__title">${sectionTitle}</h2>     
      `;
    }
  }
  
  customElements.define("app-section-title", AppSectionTitle);
  