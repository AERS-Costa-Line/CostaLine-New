class AppFaqs extends HTMLElement {
	connectedCallback() {
		const escapeHTML = (str) => {
			if (str === null || str === undefined) {
				return "";
			}
			const div = document.createElement("div");
			div.textContent = str;
			return div.innerHTML;
		};

		const title = this.getAttribute("title") || "Preguntas Frecuentes";
		const faqsData = this.getAttribute("faqs");
		let faqs = [];

		try {
			if (faqsData) {
				faqs = JSON.parse(faqsData);
			}
		} catch (e) {
			console.error("Error parsing FAQs:", e);
		}

		this.innerHTML = `
      <section class="faq-section">
        <h2 class="__section-title">${escapeHTML(title)}</h2>
        <article class="faq-list">
          ${faqs
						.map(
							(faq) => `
            <details class="faq-item">
              <summary class="faq-item__summary">
                <span class="faq-item__question">${escapeHTML(faq.question)}</span>
                <span class="icon-arrow-down faq-item__icon material-symbols-outlined"></span>
              </summary>
              <div class="faq-item__answer">${faq.answer}</div>
            </details>
          `,
						)
						.join("")}
        </article>
      </section>
    `;
	}
}
customElements.define("app-faqs", AppFaqs);
