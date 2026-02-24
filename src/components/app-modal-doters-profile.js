class ModalDotersProfile extends HTMLElement {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="modalDoters-profileModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:1000;">
        <div style="background:white; margin:10% auto; padding:20px; width:50%; border-radius:8px; text-align:center; position:relative;">
          <button id="modalDoters-profileCloseX" aria-label="Cerrar" style="position:absolute; top:10px; right:10px; border:none; background:transparent; font-size:22px; cursor:pointer;">×</button>

          <h2>Perfil de Usuario</h2>
          <p><strong>Nombre:</strong> <span id="modalDoters-username"></span></p>
          <p><strong>ID Doters:</strong> <span id="modalDoters-dotersId"></span></p>
          <p><strong>Puntos Disponibles:</strong> <span id="modalDoters-availablePoints"></span></p>

          <button id="modalDoters-logoutButton" style="display:none; padding:10px 20px; background-color:red; color:white; border:none; border-radius:5px; cursor:pointer;">
            Cerrar Sesión
          </button>

          <button id="modalDoters-profileCloseBtn" style="padding:10px 20px; background-color:gray; color:white; border:none; border-radius:5px; cursor:pointer;">
            Cerrar
          </button>
        </div>
      </div>
    `;

    const overlay = this.querySelector("#modalDoters-profileModal");
    const closeX = this.querySelector("#modalDoters-profileCloseX");
    const closeBtn = this.querySelector("#modalDoters-profileCloseBtn");

    closeX?.addEventListener("click", this.close);
    closeBtn?.addEventListener("click", this.close);

    // Cerrar al dar click fuera del modal
    overlay?.addEventListener("click", (e) => {
      if (e.target === overlay) this.close();
    });

    // Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay?.style.display !== "none") {
        this.close();
      }
    });
  }

  open() {
    const overlay = this.querySelector("#modalDoters-profileModal");
    if (overlay) overlay.style.display = "block";
  }

  close() {
    const overlay = this.querySelector("#modalDoters-profileModal");
    if (overlay) overlay.style.display = "none";
  }
}

customElements.define("modal-doters-profile", ModalDotersProfile);