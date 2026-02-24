class AppModalDoters extends HTMLElement {
  constructor() {
    super();
    this.modalElement = null;
    this.closeButtonElement = null;
    this.loginButton = null;
    this.registerButton = null;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="modalDoters-loginModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:1000; align-items:center; justify-content:center;">
        <div style="background:white; padding:20px; width:420px; border-radius:8px; text-align:center; position:relative;">
          <button class="modalDoters-close" aria-label="Cerrar" style="position:absolute; top:10px; right:10px; border:none; background:transparent; font-size:22px; cursor:pointer;">×</button>

          <h2>Únete a Doters</h2>

          <div style="display:flex; gap:12px; justify-content:center; margin-top:16px;">
            <button id="loginButtonDoters">Iniciar sesión</button>
            <button id="registerButtonDoters">Únete gratis</button>
          </div>
        </div>
      </div>
    `;

    this.modalElement = this.querySelector("#modalDoters-loginModal");
    this.closeButtonElement = this.querySelector(".modalDoters-close");
    this.loginButton = this.querySelector("#loginButtonDoters");
    this.registerButton = this.querySelector("#registerButtonDoters");

    this.closeButtonElement?.addEventListener("click", this.close);

    this.modalElement?.addEventListener("click", (e) => {
      if (e.target === this.modalElement) this.close();
    });

    this.loginButton?.addEventListener("click", () => this.redirectToLogin());
    this.registerButton?.addEventListener("click", () => this.redirectToRegister());
  }

  open() {
    if (!this.modalElement) return;
    this.modalElement.style.display = "flex";
    document.addEventListener("keydown", this._handleKeyDown);
  }

  close() {
    if (!this.modalElement) return;
    this.modalElement.style.display = "none";
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown(e) {
    if (e.key === "Escape") this.close();
  }

  redirectToLogin() {
    window.location.href =
      "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineInicioSesi%C3%B3n";
  }

  redirectToRegister() {
    window.location.href =
      "https://auth.doters.com/v2/?clientId=costaline-web&clientSecret=CLST1zy9845x&language=es-MX&redirectUri=https://one-api.costaline.com.mx/api/v2/doters/providers-login/costaline&register=1&utm_source=WebCostaline&utm_medium=Modal2Doters&utm_campaign=RegistroDoters&utm_term=DotersRegistroModal2&utm_content=DotersCostalineRegistro";
  }
}

customElements.define("app-modal-doters", AppModalDoters);