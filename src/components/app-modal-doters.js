class AppModalDoters extends HTMLElement {
	constructor() {
		super();
		this.modalElement = null;
		this.closeButtonElement = null;
		this.loginButton = null;
		this.registerButton = null;
		this.focusableElements = null;
		this.firstFocusableElement = null;
		this.lastFocusableElement = null;
		this.previouslyFocusedElement = null;

		// Bind methods to ensure 'this' context is correct
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
		this._handleKeyDown = this._handleKeyDown.bind(this);
		this._trapFocus = this._trapFocus.bind(this);
	}

	connectedCallback() {
		this.innerHTML = `
        <div id="modalDoters-loginModal" class="modalDoters-modal" style="display: none;" role="dialog" aria-modal="true" aria-labelledby="modalDoters-title">
            <div class="modalDoters-modal-content">
                <div class="modalHeader">
                    <img src="../../src/assets/img/logos/doters.svg" alt="Logotipo Doters" title="Doters" loading="lazy">
                    <button class="modalDoters-close" aria-label="Cerrar modal">×</button>
                </div>
                <div class="modalContenido">
                    <h2 id="modalDoters-title" class="titulo-2 center">Únete a Doters</h2>
                    <hr>
                    <div class="modalContenido__buttons">
                        <button id="loginButtonDoters">Iniciar sesión</button>
                        <button id="registerButtonDoters">Únete gratis</button>
                    </div>
                    <p class="parrafo-espacio">¿Quieres saber más del programa? <a href="https://costaline.com.mx/doters" class="bold" title="Doters">Da clic aquí</a></p>
                </div>
            </div>
        </div>
    `;
		this.modalElement = this.querySelector("#modalDoters-loginModal");
		this.closeButtonElement = this.querySelector(".modalDoters-close");
		this.loginButton = this.querySelector("#loginButtonDoters");
		this.registerButton = this.querySelector("#registerButtonDoters");

		this.closeButtonElement.addEventListener("click", this.close);
		this.loginButton.addEventListener("click", () => this.redirectToLogin());
		this.registerButton.addEventListener("click", () =>
			this.redirectToRegister(),
		);

		// The modal is hidden by default. It needs to be opened by an external trigger
		// calling the .open() method on this component instance.
	}

	_setupFocusTrap() {
		// Find all focusable children
		this.focusableElements = Array.from(
			this.modalElement.querySelectorAll(
				'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
			),
		).filter((el) => el.offsetParent !== null); // Ensure elements are visible

		if (this.focusableElements.length === 0) {
			this.firstFocusableElement = null;
			this.lastFocusableElement = null;
			return;
		}
		this.firstFocusableElement = this.focusableElements[0];
		this.lastFocusableElement =
			this.focusableElements[this.focusableElements.length - 1];
	}

	open() {
		if (!this.modalElement) return;
		this.previouslyFocusedElement = document.activeElement; // Save the element that had focus before opening
		this.modalElement.style.display = "flex";
		this._setupFocusTrap(); // Setup focus trap elements

		if (this.firstFocusableElement) {
			this.firstFocusableElement.focus();
		} else {
			// If no focusable elements, focus the modal itself or close button as a fallback
			this.closeButtonElement.focus();
		}

		document.addEventListener("keydown", this._handleKeyDown);
		this.dispatchEvent(
			new CustomEvent("modal-opened", { bubbles: true, composed: true }),
		);
	}

	close() {
		if (!this.modalElement || this.modalElement.style.display === "none")
			return;
		this.modalElement.style.display = "none";
		document.removeEventListener("keydown", this._handleKeyDown);
		if (this.previouslyFocusedElement) {
			this.previouslyFocusedElement.focus(); // Restore focus to the element that opened the modal
		}
		this.dispatchEvent(
			new CustomEvent("modal-closed", { bubbles: true, composed: true }),
		);
	}

	_handleKeyDown(event) {
		if (event.key === "Escape") {
			this.close();
		}
		if (event.key === "Tab") {
			this._trapFocus(event);
		}
	}

	redirectToLogin() {
  window.location.href =
    "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineInicioSesi%C3%B3n";
}

	redirectToRegister() {
  window.location.href =
    "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&register=1&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineRegistro";
}

	_trapFocus(event) {
		if (!this.focusableElements || this.focusableElements.length === 0) return;

		const isTabPressed = event.key === "Tab";
		if (!isTabPressed) return;

		if (event.shiftKey) {
			// Shift + Tab
			if (document.activeElement === this.firstFocusableElement) {
				this.lastFocusableElement.focus();
				event.preventDefault();
			}
		} else {
			// Tab
			if (document.activeElement === this.lastFocusableElement) {
				this.firstFocusableElement.focus();
				event.preventDefault();
			}
		}
	}

	disconnectedCallback() {
		document.removeEventListener("keydown", this._handleKeyDown);
	}
}

customElements.define("app-modal-doters", AppModalDoters);
