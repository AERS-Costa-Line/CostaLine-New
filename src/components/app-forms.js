class AppForms extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="__section__form-cotiza"> 
                <form class="dynamic-form">
                    <p>Cargando formulario...</p>
                </form>
                <div class="form-status-message"></div> 
            </div>
        `;
    }

    setFormData(formDataJson) {
        const formContainer = this.querySelector('.dynamic-form');
        if (!formContainer) {
            console.error("Contenedor de formulario '.dynamic-form' no encontrado en app-forms.");
            return;
        }

        if (formDataJson) {
            this.renderForm(formDataJson);
        } else {
            console.error("No se proporcionaron datos para el formulario en setFormData.");
            if (formContainer) {
                formContainer.innerHTML = '<p class="error-message">No se proporcionaron datos para generar el formulario.</p>';
            }
        }
    }

    renderForm(formDataJson) {
        const form = this.querySelector('.dynamic-form');
        const statusMessage = this.querySelector('.form-status-message');
        if (!form) return;

        if (!Array.isArray(formDataJson) || formDataJson.length === 0) {
            console.error("Datos del formulario no válidos o vacíos:", formDataJson);
            form.innerHTML = '<p class="error-message">No hay campos de formulario para mostrar o los datos son incorrectos.</p>';
            return;
        }

        form.innerHTML = ''; // Limpiar mensaje de carga

        formDataJson.forEach((field, index) => {
            const fieldWrapper = document.createElement('div');
            fieldWrapper.classList.add('form-field-group');

            const label = document.createElement('label');
            const inputId = `field-${field.name || index}`;
            label.setAttribute('for', inputId);
            label.textContent = field.pregunta;
            fieldWrapper.appendChild(label);

            let inputElement;
            if (field.tipo === 'textarea') {
                inputElement = document.createElement('textarea');
            } else if (field.tipo === 'select') {
                inputElement = document.createElement('select');
                if (field.opciones && Array.isArray(field.opciones)) {
                    if (field.ejemplo && field.ejemplo.toLowerCase().includes('selecciona')) {
                        const defaultOption = document.createElement('option');
                        defaultOption.value = "";
                        defaultOption.textContent = field.ejemplo;
                        defaultOption.disabled = true;
                        defaultOption.selected = true;
                        inputElement.appendChild(defaultOption);
                    }
                    field.opciones.forEach(opcion => {
                        const optionElement = document.createElement('option');
                        optionElement.value = opcion;
                        optionElement.textContent = opcion;
                        inputElement.appendChild(optionElement);
                    });
                }
            } else {
                inputElement = document.createElement('input');
                inputElement.type = field.tipo;
                if (field.tipo === 'file' && field.accept) {
                    inputElement.setAttribute('accept', field.accept);
                }
            }

            inputElement.id = inputId;
            inputElement.name = field.name || `input_${index}`;
            if (field.ejemplo && field.tipo !== 'select' && field.tipo !== 'file') {
                inputElement.placeholder = field.ejemplo;
            }
            if (field.requerido) {
                inputElement.required = true;
            }

            fieldWrapper.appendChild(inputElement);
            form.appendChild(fieldWrapper);
        });

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Enviar';
        submitButton.classList.add('submit-button');
        form.appendChild(submitButton);

        // --- INICIO DE LA NUEVA FUNCIONALIDAD ---
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue
            statusMessage.textContent = 'Enviando...';
            statusMessage.style.color = 'gray';

            const formData = new FormData(form);

            fetch('enviar_formulario.php', { // El script PHP que crearemos
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    statusMessage.textContent = '¡Mensaje enviado con éxito!';
                    statusMessage.style.color = 'green';
                    form.reset(); // Limpia el formulario
                } else {
                    statusMessage.textContent = 'Error al enviar: ' + data.message;
                    statusMessage.style.color = 'red';
                }
            })
            .catch(error => {
                console.error('Error en la conexión:', error);
                statusMessage.textContent = 'Error de conexión. Por favor, inténtalo de nuevo.';
                statusMessage.style.color = 'red';
            });
        });
        // --- FIN DE LA NUEVA FUNCIONALIDAD ---
    }
}

customElements.define("app-forms", AppForms);
