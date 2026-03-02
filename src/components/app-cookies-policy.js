class AppCookiesPolicy extends HTMLElement {
  connectedCallback() {
    if (localStorage.getItem("allow-cookie") === "true") {
      return;
    }

    this.innerHTML = `
      <section id="cookies-policy-baner" class="cookies-policy d-block">
          <div class="main-container policy-info">
            <div class="policy-info__text">
              <h2>Acepta el uso de cookies.</h2>

              <p>
                Utilizamos cookies para mejorar tu experiencia de navegación, ofrecer contenido personalizado y analizar nuestro tráfico.
              </p>
              <p>
                Al hacer clic en <span>Aceptar todas las cookies</span>, aceptas que se guarden en tu dispositivo.
              </p>
              <p>
                Puedes personalizar tu configuración haciendo clic en Administrar preferencias.

              </p>
            </div>
            <div class="policy-info__btns">
              <button id="allow-get-cookies" role="button" aria-label="Aceptar todas las cookies" tabindex="0">Aceptar todas las cookies</button>
            </div>
          </div>
        </section>
    `;

    const allowCookiesBtn = document.getElementById("allow-get-cookies");
    const banerCookies = document.getElementById("cookies-policy-baner");
    
    function action() {
        localStorage.setItem("allow-cookie", "true");
        banerCookies.classList.remove("d-block");
    }

    allowCookiesBtn.addEventListener("click", action);
  }
}
customElements.define("app-cookies-policy", AppCookiesPolicy);
