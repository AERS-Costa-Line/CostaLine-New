/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/

import "../../../components/app-section-title.js";

/*-------------------------SCRIPTS---------------------------*/

class PageBoletosDoters extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="main-container">
        <div class="content-header">
            <h1>Boleto Doters</h1>
        </div>
        <section class="content-section">
            <ol>
                <li>El Boleto Doters únicamente será emitida por COSTA LINE y Doters, ningún agente de viajes ni Agencia de Viajes podrá emitir u otorgar el Boleto Doters.</li>
                <li>Los Puntos Doters necesarios para la adquisición del Boleto Doters dependerán del grupo tarifario al que pertenezca. El Boleto Doters deberá adquirirse en su totalidad con Puntos Doters. Los Puntos Doters requeridos para la adquisición de un Boleto con Boleto Doters serán, como se indica en la siguiente tabla:</li>
            </ol>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>GRUPO</th>
                            <th>Puntos Doters requeridos para<br>Boleto Doters (Viaje Sencillo)</th>
                            <th>Rutas Participantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>12,038</td>
                            <td><a href="../boleto-doters/grupo-1" class="btn-route">VER RUTAS</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>7,231</td>
                            <td><a href="../boleto-doters/grupo-2" class="btn-route">VER RUTAS</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>7,231</td>
                            <td><a href="../boleto-doters/grupo-3" class="btn-route">VER RUTAS</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>4,308</td>
                            <td><a href="../boleto-doters/grupo-4" class="btn-route">VER RUTAS</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2,577</td>
                            <td><a href="../boleto-doters/grupo-5" class="btn-route">VER RUTAS</a></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>1,538</td>
                            <td><a href="../boleto-doters/grupo-6" class="btn-route">VER RUTAS</a></td>
                        </tr>
                          <tr>
                            <td>7</td>
                            <td>923</td>
                            <td><a href="../boleto-doters/grupo-7" class="btn-route">VER RUTAS</a></td>
                        </tr>
                          <tr>
                            <td>8</td>
                            <td>538</td>
                            <td><a href="../boleto-doters/grupo-8" class="btn-route">VER RUTAS</a></td>
                        </tr>
                          <tr>
                            <td>9</td>
                            <td>308</td>
                            <td><a href="../boleto-doters/grupo-9" class="btn-route">VER RUTAS</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ol start="3">
                <li>Podrás consultar las rutas de cada grupo tarifario en el siguiente link: <a href="#">Clic aquí</a>.</li>
                <li>El Boleto Doters únicamente podrá comprarse en Canales de Venta y no será aplicable para Boleto Abierto.</li>
                <li>El Socio no podrá combinar efectivo u otro método de pago distinto de los Puntos Doters para adquirir el Boleto Doters.</li>
                <li>El precio del Boleto Doters fluctuará según el mecanismo de fijación de precios acordado entre Doters y COSTA LINE.</li>
                <li>Todos los Boletos Doters se podrán reservar como un Viaje redondo o sencillo.</li>
                <li>El Socio titular de la Cuenta Doters deberá estar incluido en la Reserva para poder adquirir el Boleto Doters.</li>
                <li>El Boleto Doters estará sujeta a disponibilidad de asientos dependiendo de la anticipación de la Compra, de conformidad con la siguiente tabla:</li>
            </ol>

            <div class="table-wrapper">
                  <table>
                    <thead>
                        <tr>
                            <th>Anticipación al viaje (días)</th>
                            <th>Boleto Doters disponibles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0-1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>2-7</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>>7</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="note">Con independencia de la anticipación con la que se adquiera el Boleto Doters, una vez se termine la disponibilidad del Boleto Doters, esta ya no podrá ser adquirida y se deberá consultar un Viaje distinto.</p>

            <ol start="10">
                <li>No se podrá adquirir el Boleto Doters para viajar en temporada alta. Para efectos de los presentes Términos y Condiciones, temporada alta ser refiere a cualquier día feriado establecido en la Ley Federal del Trabajo ni durante los periodos vacacionales publicados por la Secretaría de Educación Pública.</li>
                <li>Una vez emitido el Boleto comprado con Boleto Doters, solo se permitirá 1 (un) cambio de horario o fecha, posteriormente no se permitirá ningún cambio en dicho Boleto.</li>
                <li>En caso de que el Socio hubiere adquirido un Boleto Doters y el Viaje que ampare dicho Boleto Doters fuera modificado, suspendido, recortado o cancelado por COSTA LINE y como consecuencia el Socio no pueda hacer uso del Boleto Doters, los Puntos Doters redimidos para la adquisición de dicho Boleto Doters, se restablecerán en la cuenta del Socio.</li>
            </ol>
        </section>

        <section class="content-section">
            <h2>Beneficios</h2>
            <ul>
                <li>Los Beneficios están sujetos a disponibilidad y deberán ser seleccionados por el Socio al momento en el que lleve a cabo la compra de sus Boletos en el sitio <a href="https://www.doters.com/aliados/costaline">https://www.doters.com/aliados/costaline</a> y aplicación móvil de Costa Line.</li>
                <li>Los Beneficios pueden ser consultados en <a href="https://www.doters.com/niveles-y-beneficios">https://www.doters.com/niveles-y-beneficios</a>.</li>
            </ul>
        </section>
      </div>
    `;
  }
}
customElements.define("page-boleto-doters", PageBoletosDoters);
