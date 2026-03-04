/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../components/app-header.js?v=1.1.3";
import "../../components/app-cookies-policy.js?v=1.0.3";
import "../../components/app-modal-travelpass.js?v=1.0.2";
import "../../components/app-button-whats.js?v=1.0.2";
import "../../components/app-button-eva-trip.js?v=1.0.2";
import "../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../components/app-cotiza-pack.js";
import "../../components/app-banner-slider.js";
import "../../components/app-section-title.js";
import "../../components/app-card-bg-primary.js";
import "../../components/app-card-small-list.js";
import "../../components/app-header-pack-multienlace.js";

/*-------------------------SCRIPTS---------------------------*/

class PageFacturacionPack extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza-pack></app-cotiza-pack>

            <app-banner-slider
            slides-data='[
              {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/paqueteria/banner/web/pack-facturacion-web.webp","mediumImage": "../../src/assets/img/paqueteria/banner/tablet/pack-facturacion-tablet.webp", "smallImage": "../../../src/assets/img/paqueteria/banner/movil/pack-facturacion-mobile.webp", "link": "#index.html/banner1"}
            ]'
        >
        </app-banner-slider>
        <app-section-title section-title="Políticas de envío, entrega y facturación  "></app-section-title>

        <section class="envio-info">
            <h2 class="empresa">Costa Line</h2>

            <h3>FACTURACIÓN</h3>
            <p>Para facturación de sus envíos y de acuerdo a la versión de <strong>4.0</strong> del SAT, deberá proporcionar la siguiente información:</p>

            <h4>CÉDULA FISCAL<br>CORREO ELECTRÓNICO PARA RECEPCIÓN DE SU FACTURA</h4>
            <p>La factura se deberá solicitar al momento de realizar su envío.<br>
            En caso de algún error en el sistema al generar su factura puede solicitar la corrección al correo: <strong>facturacionpack@costaline.com.mx</strong></p>

            <h3>POLÍTICAS Y RESTRICCIONES</h3>
            <p>Estimado cliente, le informamos que no es posible la documentación y transportación de los siguientes elementos:</p>
            <ul>
                <li>Dinero en efectivo</li>
                <li>Joyería</li>
                <li>Artículos electrónicos de cualquier tipo (celulares, laptops, pantallas, etc.)</li>
                <li>Cheques de caja de viajero</li>
                <li>Giros</li>
                <li>Sellos (timbres postales)</li>
                <li>Piezas de arte o arqueológicas</li>
                <li>Explosivos</li>
                <li>Sustancias tóxicas o peligrosas</li>
                <li>Instrumentos o títulos negociables al portador</li>
                <li>Materiales obscenos o pornográficos</li>
                <li>Animales vivos</li>
                <li>Alimentos y objetos de fácil descomposición y mal olor (carne, mariscos y todo tipo de perecederos)</li>
                <li>Productos químicos en cualquier presentación (sólido, líquido o gaseoso), con mediana o alta peligrosidad</li>
                <li>Aquellos que legalmente solo pueden ser transportados por correo</li>
                <li>Envíos que requieran declaración aduanal o permiso de importación o transportación</li>
                <li>Insumos para la salud que requieran condiciones especiales para su conservación</li>
            </ul>
            <p>No se pueden documentar ni enviar paquetes que excedan los <strong>50 kg de peso</strong>, salvo en excepciones autorizadas por el gerente de oficina, jefe de turno o coordinador de paquetería.<br>
            Cualquier duda de su envío puede consultarla al correo: <strong>logisticapack@costaline.com.mx</strong> o al número telefónico: <strong>5541262347</strong>.</p>

            <h3>REQUISITOS PARA LA ENTREGA DE ENVÍOS</h3>
            <p>Estimado cliente para poder entregarle su envío deberá presentar cualquiera de estos documentos oficiales:</p>
            <ul>
                <li>INE</li>
                <li>Pasaporte</li>
                <li>Cédula Profesional</li>
            </ul>
            <p><strong>*</strong>En caso de que se presente otra persona diferente al destinatario original, deberá mostrar:</p>
            <ul>
                <li>Carta poder emitida por el destinatario con vigencia de dos días</li>
                <li>Copia de la credencial de la persona que recibió originalmente el envío</li>
                <li>Copia de la credencial oficial de la persona que recibe el envío</li>
            </ul>
            <p>En caso de que su envío venga a nombre de su empresa, deberá presentar identificación vigente que lo acredite como trabajador.</p>
        </section>

        <app-section-title section-title="Políticas de envío, entrega y facturación  "></app-section-title>
        <section class="envio-info">
                <h2 class="empresa">AERS</h2>

                <h3>FACTURACIÓN</h3>
                <p>Para facturación de sus envíos y de acuerdo a la versión de <strong>4.0</strong> del SAT, deberá proporcionar la siguiente información:</p>

                <h4>CÉDULA FISCAL<br>CORREO ELECTRÓNICO PARA RECEPCIÓN DE SU FACTURA</h4>
                <p>La factura se deberá solicitar al momento de realizar su envío.<br>
                En caso de algún error en el sistema al generar su factura puede solicitar la corrección al correo:<br>
                <strong>facturacionpackers@grupoaers.com.mx</strong></p>

                <h3>POLÍTICAS Y RESTRICCIONES</h3>
                <p>Estimado cliente, le informamos que no es posible la documentación y transportación de los siguientes elementos:</p>
                <ul>
                    <li>Dinero en efectivo</li>
                    <li>Joyería</li>
                    <li>Artículos electrónicos de cualquier tipo (celulares, laptops, pantallas, etc.)</li>
                    <li>Cheques de caja de viajero</li>
                    <li>Giros</li>
                    <li>Sellos (timbres postales)</li>
                    <li>Piezas de arte o arqueológicas</li>
                    <li>Explosivos</li>
                    <li>Sustancias tóxicas o peligrosas</li>
                    <li>Instrumentos o títulos negociables al portador</li>
                    <li>Materiales obscenos o pornográficos</li>
                    <li>Animales vivos</li>
                    <li>Alimentos y objetos de fácil descomposición y mal olor (carne, mariscos y perecederos)</li>
                    <li>Productos químicos en cualquier presentación (sólido, líquido o gaseoso), con mediana o alta peligrosidad</li>
                    <li>Envíos que requieran declaración aduanal o permiso de importación</li>
                    <li>Insumos para la salud que requieran condiciones especiales para su conservación</li>
                </ul>
                <p>No se pueden documentar ni enviar paquetes que excedan los <strong>50 kg de peso</strong>, salvo en casos autorizados por el gerente de oficina.<br>
                Cualquier duda del envío puede consultarla al correo: <strong>logisticapack@etn.com.mx</strong>; o al teléfono: <strong>5541262347</strong>.</p>

                <h3>REQUISITOS PARA LA ENTREGA DE ENVÍOS</h3>
                <p>Estimado cliente para poder entregarle su envío deberá presentar cualquiera de estos documentos oficiales:</p>
                <ul>
                    <li>INE</li>
                    <li>Pasaporte</li>
                    <li>Cédula Profesional</li>
                </ul>
                <p><strong>*</strong>En caso de que se presente otra persona diferente al destinatario original, deberá mostrar:</p>
                <ul>
                    <li>Carta poder emitida por el destinatario con vigencia de dos días</li>
                    <li>Copia de la credencial de la persona que recibió originalmente el envío</li>
                    <li>Copia de la credencial oficial de la persona que recibe el envío</li>
                </ul>
                <p>En caso de que su envío venga a nombre de su empresa, deberá presentar identificación vigente que lo acredite como trabajador.</p>
        </section>
        
        <app-section-title section-title="Políticas de envío, entrega y facturación  "></app-section-title>
        <section class="envio-info">
                <h2 class="empresa">GHO</h2>

                <h3>FACTURACIÓN</h3>
                <p>Para facturación de sus envíos y de acuerdo a la versión de <strong>4.0</strong> del SAT, deberá proporcionar la siguiente información:</p>

                <h4>CÉDULA FISCAL<br>CORREO ELECTRÓNICO PARA RECEPCIÓN DE SU FACTURA</h4>
                <p>La factura se deberá solicitar al momento de realizar su envío.<br>
                En caso de algún error en el sistema al generar su factura puede solicitar la corrección al correo.</p>

                <h3>POLÍTICAS Y RESTRICCIONES</h3>
                <p>Estimado cliente, le informamos que no es posible la documentación y transportación de los siguientes elementos:</p>
                <ul>
                    <li>Dinero en efectivo</li>
                    <li>Joyería</li>
                    <li>Artículos electrónicos de cualquier tipo (celulares, laptops, pantallas, etc.)</li>
                    <li>Cheques de caja de viajero</li>
                    <li>Giros</li>
                    <li>Sellos (timbres postales)</li>
                    <li>Piezas de arte o arqueológicas</li>
                    <li>Explosivos</li>
                    <li>Sustancias tóxicas o peligrosas</li>
                    <li>Instrumentos o títulos negociables al portador</li>
                    <li>Materiales obscenos o pornográficos</li>
                    <li>Animales vivos</li>
                    <li>Alimentos y objetos de fácil descomposición y mal olor (carne, mariscos y perecederos)</li>
                    <li>Productos químicos en cualquier presentación (sólido, líquido o gaseoso), con mediana o alta peligrosidad</li>
                    <li>Envíos que requieran declaración aduanal o permiso de importación</li>
                    <li>Insumos para la salud que requieran condiciones especiales para su conservación</li>
                </ul>
                <p>No se pueden documentar ni enviar paquetes que excedan los <strong>50 kg de peso</strong>, salvo en casos autorizados por el gerente de oficina.<br>
                Cualquier duda del envío puede consultarla al correo.</p>

                <h3>REQUISITOS PARA LA ENTREGA DE ENVÍOS</h3>
                <p>Estimado cliente para poder entregarle su envío deberá presentar cualquiera de estos documentos oficiales:</p>
                <ul>
                    <li>INE</li>
                    <li>Pasaporte</li>
                    <li>Cédula Profesional</li>
                </ul>
                <p><strong>*</strong>En caso de que se presente otra persona diferente al destinatario original, deberá mostrar:</p>
                <ul>
                    <li>Carta poder emitida por el destinatario con vigencia de dos días</li>
                    <li>Copia de la credencial de la persona que recibió originalmente el envío</li>
                    <li>Copia de la credencial oficial de la persona que recibe el envío</li>
                </ul>
                <p>En caso de que su envío venga a nombre de su empresa, deberá presentar identificación vigente que lo acredite como trabajador.</p>
        </section>

        `;
	}
}
customElements.define("page-facturacion-pack", PageFacturacionPack);
