class AppSectionTitle extends HTMLElement {
    connectedCallback() {
      const sectionTitle = this.getAttribute('section-title');
      this.innerHTML = `
        <h1 class="__title">${sectionTitle}</h1>     
      `;
    }
  }
  
  customElements.define("app-section-title", AppSectionTitle);
  