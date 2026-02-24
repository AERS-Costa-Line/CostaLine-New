class ModalDotersProfile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Modal de perfil de usuario -->
            <div id="modalDoters-profileModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1000;">
                <div style="background: white; margin: 10% auto; padding: 20px; width: 50%; border-radius: 8px; text-align: center;">
                    <h2>Perfil de Usuario</h2>
                    <p><strong>Nombre:</strong> <span id="modalDoters-username"></span></p>
                    <p><strong>ID Doters:</strong> <span id="modalDoters-dotersId"></span></p>
                    <p><strong>Puntos Disponibles:</strong> <span id="modalDoters-availablePoints"></span></p>
                    <button id="modalDoters-logoutButton" style="display: none; padding: 10px 20px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">Cerrar Sesión</button>
                    <button onclick="closeProfileModal()" style="padding: 10px 20px; background-color: gray; color: white; border: none; border-radius: 5px; cursor: pointer;">Cerrar</button>
                </div>
            </div>
        `;
    }
}

// Cambiar el nombre del custom element
customElements.define("modal-doters-profile", ModalDotersProfile);