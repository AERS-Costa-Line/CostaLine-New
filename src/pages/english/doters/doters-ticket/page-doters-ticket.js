/*--------------IMPORT COMPONENTS FROM BOLETO DOTERS PAGE -----------------*/
import "../../../../components/app-section-title.js";

class PageDotersTicket extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                    <app-modal-doters></app-modal-doters>

      <div class="main-container">
        <div class="content-header">
            <h1>Doters</h1>
        </div>
        <section class="content-section">
            <ol>
                <li>The Doters Ticket will only be issued by COSTA LINE and Doters, no travel agent or travel agency will be able to issue or grant the Doters Ticket.</li>
                <li>The required Doters Points for purchasing a Doters Ticket will depend on the fare group to which it belongs. The Doters Ticket must be purchased entirely with Doters Points. The required Doters Points for purchasing a ticket with a Doters Ticket are as follows:</li>
            </ol>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>GROUP</th>
                            <th>Required Doters Points for<br>Doters Ticket (One Way Trip)</th>
                            <th>Participating Routes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>12,038</td>
                            <td><a href="./group-1" class="btn-route">See Routes</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>7,231</td>
                            <td><a href="./group-2" class="btn-route">See Routes</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>7,231</td>
                            <td><a href="./group-3" class="btn-route">See Routes</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>4,308</td>
                            <td><a href="./group-4" class="btn-route">See Routes</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2,577</td>
                            <td><a href="./group-5" class="btn-route">See Routes</a></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>1,538</td>
                            <td><a href="./group-6" class="btn-route">See Routes</a></td>
                        </tr>
                          <tr>
                            <td>7</td>
                            <td>923</td>
                            <td><a href="./group-7" class="btn-route">See Routes</a></td>
                        </tr>
                          <tr>
                            <td>8</td>
                            <td>538</td>
                            <td><a href="./group-8" class="btn-route">See Routes</a></td>
                        </tr>
                          <tr>
                            <td>9</td>
                            <td>308</td>
                            <td><a href="./group-9" class="btn-route">See Routes</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ol start="3">
               <li>You can consult the routes for each fare group at the following link: <a href="#">Click here</a>.</li>
                <li>The Doters Ticket can only be purchased through Sales Channels and is not applicable to Open Tickets.</li>
                <li>Members cannot combine cash or any payment method other than Doters Points to purchase a Doters Ticket.</li>
                <li>The price of the Doters Ticket will fluctuate according to the pricing mechanism agreed upon between Doters and COSTA LINE.</li>
                <li>All Doters Tickets can be booked as a round trip or one-way.</li>
                <li>The Doters Account Holder must be included in the Reservation to purchase a Doters Ticket.</li>
                <li>The Doters Ticket is subject to seat availability depending on how far in advance the purchase is made, according to the following table:</li>
            </ol>

            <div class="table-wrapper">
                  <table>
                    <thead>
                        <tr>
                            <th>Advance notice of the trip (days)</th>
                            <th>Available Doters Tickets</th>
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
            <p class="note">Independently of the advance notice with which the Doters Ticket is purchased, once the availability of the Doters Ticket is exhausted, it will no longer be available for purchase and a different trip must be consulted.</p>

            <ol start="10">
                <li>The Doters Ticket cannot be purchased to travel during high season. For purposes of these Terms and Conditions, high season refers to any holiday established in the Federal Labor Law or during vacation periods published by the Ministry of Education.</li>
                <li>Once a Doters Ticket is issued, only 1 (one) change of schedule or date will be allowed; no further changes will be permitted for that ticket.</li>
                <li>In case a member has purchased a Doters Ticket and the trip that supports said Doters Ticket is modified, suspended, cut short or canceled by COSTA LINE and as a consequence the member cannot use their Doters Ticket, the Doters Points redeemed for purchasing said Doters Ticket will be restored to the member's account.</li>
            </ol>
        </section>

        <section class="content-section">
            <h2>Benefits</h2>
            <ul>
                <li>The benefits are subject to availability and must be selected by the member at the time of purchasing their tickets on the <a href="https://www.doters.com/aliados/costaline">https://www.doters.com/aliados/costaline</a> website and mobile application of Costa Line.</li>
                <li>Benefits can be consulted at <a href="https://www.doters.com/niveles-y-beneficios">https://www.doters.com/niveles-y-beneficios</a>.</li>
            </ul>
        </section>
      </div>
    `;
  }
}
customElements.define("page-doters-ticket", PageDotersTicket);
