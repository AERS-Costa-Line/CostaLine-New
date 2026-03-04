/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-modal-travelpass.js?v=1.0.2";
import "../../../components/app-button-whats.js?v=1.0.2";
import "../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-modal-doters.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageTerminosCondiciones extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <div class="__panthom_space"></div>

            
            <section class="__section">
                <app-section-title section-title="Términos y Condiciones"></app-section-title>
                <h3 class="__subtitle">Bienvenido a Costa Line</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">COMPRA DE BOLETOS</h3>

                    <p>
                        PUEDE COMPRAR SUS BOLETOS HASTA UNA HORA ANTES DE LA SALIDA DESEADA.
                    </p>
                    
                    <p>
                       Si durante el proceso de compra usted tiene algún problema o duda, contamos con asistencia personalizada, en el Contact Center marcando al 800 0037 635, al 8002490 460 donde con gusto le atenderemos.
                    </p>
                    
                    <p>
                        Los boletos o pases de abordar son válidos únicamente para la fecha y hora especificada en los mismos, verifíque al adquirirlo y consérvelo hasta el final de su recorrido ya que le da derecho al seguro de viaje.
                    </p>
                    
                    <p>
                        <u>Los viajes perdidos por no abordar el autobús en tiempo y forma no serán reembolsables; los reembolsos que procedan de acuerdo a la Ley serán realizados de la misma forma en que se haya efectuado el pago.</u>
                    </p>
                   
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">FORMAS DE PAGO</h3>

                    <p>
                        TARJETA BANCARIA (AMERICAN EXPRESS, VISA O MASTERCARD).
                    </p>
                    
                    <p>
                        Se aceptan pagos con tarjetas bancarias (débito y crédito) respaldadas por Visa, Mastercard y American Express (aplican restricciones)
                    </p>
                    
                    <p>
                        Pagos Electrónicos con PayPal y Mercado Pago (aplican restricciones, su uso está regido por las normativas que tanto PayPal como Mercado Pago han establecido para su operación).
                    </p>
                    
                    <p>
                        En pagos efectuados por INTERNET NO HAY CANCELACIONES NI DEVOLUCIONES.
                    </p>
                   
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">PAGOS REFERENCIADOS DE OXXO</h3>
                    <p>
                        La referencia generada no es un comprobante de pago, por lo tanto en ningún caso puede ser válida para viajar.
                    </p>
                    
                    <p>
                        Para las referencias que genere el sistema por operaciones de Viajero Anticipado el cliente tendrá 24 horas para realizar el pago correspondiente.
                    </p>
                    
                    <p>
                        El pago de las reservación de viaje de operaciones sin de Tarifa Completa podrán efectuarse 24 hrs. antes de la salida del autobús.
                    </p>
                    
                    <p>
                        En las reservaciones que involucren operaciones de Viajero Anticipado y Tarifas Completas el cliente tendrá 24 horas para realizar el pago correspondiente.
                    </p>
                    <p>
                        Pasado los tiempos mencionados, sin excepción alguna la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                    </p>
                    
                    <p>
                        Las Tarifas de Viajero Anticipado son personales e intransferibles, para hacerla efectiva el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                    </p>
                    
                    <p>
                        El cliente puede realizar cambios de tramos, clases de servicio, fecha y horario. Para Tarifas de Viajero Anticipado no aplica cambio de nombre de pasajero, teniendo que pagar el cliente la diferencia con la tarifa vigente en taquilla al momento de realizar el viaje.
                    </p>
                    
                    <p>
                        El pago de la reservaciones de Oxxo Pay pueden efectuarse en cualquiera de las sucursales de Oxxo presentando en cajas el comprobante impreso con el número de referencia para confirmar su boleto. Los pagos solo serán recibidos en los horarios de servicio del establecimiento.
                    </p>
                    <p>
                        Solo se reciben pagos en efectivo en una sola exhibición.
                    </p>
                    
                    <p>
                        Una vez efectuado el pago correspondiente, el sistema enviará de forma automática al correo electrónico capturado en el registro previo, la confirmación del viaje con el pase de abordar.
                    </p>
                    
                    <p>
                        En caso de tener alguna duda o aclaración con el servicio o con el número de referencia de su reservación comunicarse al al 800 0037 635, al 8002490 460 en donde un ejecutivo lo asesora de manera personalizada.
                    </p>
                    
                    <p>
                        En pagos referenciados NO HAY CANCELACIONES NI DEVOLUCIONES.
                    </p>
                    <p>
                        En pagos referenciados de Oxxo Pay solo se recibirán pagos por un monto máximo de compra de 10,000 pesos.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">TIEMPO MÍNIMO DE PRESENTACIÓN Y ABORDAJE</h3>

                    <p>
                        Al término de su compra deberá imprimir su pase de abordar o descargarlo en su dispositivo móvil; con él, tendrá que presentarse directamente en la sala de espera (donde aplique) o en el área de andenes, de preferencia media hora antes de su salida para documentar su equipaje y abordar el autobús sin necesidad de canje.
                    </p>
                    
                    <p>
                        Si no cuenta con el pase de abordar impreso, deberá proporcionar al momento de abordar el autobús el número de operación.
                    </p>
                    
                    <p>
                        Las compras de boletos efectuadas a través del Contact Center, deberán en todo momento ser recogidos en mostrador por lo menos 30 minutos antes del abordaje del autobús con todos los requisitos necesarios, de lo contrario el pasajero no podrá hacer uso del servicio.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">COMPRA DE BOLETO ABIERTO</h3>
                    <p>
                        Usted podrá adquirir su boleto abierto en viaje sencillo, redondo o con enlace.
                    </p>
                    
                    <p>
                        Este tipo de boleto cuenta con una vigencia de 6 meses a partir de la fecha de su compra y queda sujeto a disponibilidad de asientos y descuentos por autobús.
                    </p>
                    
                    <p>
                        Los boletos abiertos que no hayan sido utilizados dentro del periodo de vigencia perderán toda validez y no podrán ser usados, cancelados o reembolsados.
                    </p>
                    
                    <p>
                        No está permitida la venta de boletos abiertos a pasajeros con descuento de Estudiantes y Profesores.
                    </p>
                    <p>
                        Los boletos abiertos adquiridos por internet solo pueden ser pagados con tarjeta bancaria (débito o crédito) Visa, Mastercard, American Express, Pagos Electrónicos con PayPal Mercado Pago, Transfer Banamex y OXXO. (No aplican pagos en efectivo).
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">CONFIRMACIÓN DE BOLETO ABIERTO</h3>

                    <p>
                        Si su boleto abierto fue adquirido por internet deberá acceder a nuestro sitio web www.costaline.com.mx y en la sección “Boleto Abierto” podrá realizar la confirmación de su viaje con el número de operación y nit hasta dos horas antes de la salida deseada.
                    </p>
                    
                    <p>
                        La confirmación del boleto abierto, también la puede solicitar directamente en taquillas presentando su pase de abordar impreso preferentemente hasta una hora antes de la salida deseada o bien puede hacer su reservación previamente su reservación vía telefónica llamando al 8000037 635, al 800 2490 460.
                    </p>
                    
                    <p>
                        Todo boleto abierto deberá ser confirmado previamente de lo contrario, el pasajero no podrá abordar el autobús.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">CAMBIOS Y CANCELACIONES (MODIFICACIÓN DE ITINERARIO)</h3>
                    <p>
                        En este tipo de compra (Internet) no hay cancelaciones de boletos.
                    </p>
                    
                    <p>
                        Nuestro servicio de cambio no tiene ningún costo adicional y solamente se podrán realizar máximo dos cambios por boleto, incluyendo en el caso de la compra de boleto abierto la confirmación del mismo. El costo adicional solo aplica en caso de que para la fecha seleccionada, la tarifa sea mayor.
                    </p>
                    
                    <p>
                        <strong>Cambios en Internet:</strong> Solo podrá cambiar fechas y horarios. Aplica para aquellas compras que hayan sido realizadas por este medio, si se desea modificar el viaje deberá acceder al sitio web <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> y en la sección “Modifique su Itinerario”, ingresar el número de operación y nit de su boleto. Solo podrá realizar cambio de fecha y hora. no está permitido la modificación de Origen, Destino, nombre o tipo de pasajero y solo lo podrá aplicar 90 min. después de su compra y hasta 90 minutos antes del horario de su salida.
                    </p>
                    
                    <p>
                        En el caso de que requiera cambiar más de un boleto con un itinerario diferente, podrá ingresar tantos números de operación como desee separados por un espacio. Si el viaje incluye boletos de algún Menor, el cambio de itinerario deberá realizarse ingresando el número de operación del boleto del Menor junto con el de un Adulto, de lo contrario el sistema no permitirá la modificación si se realiza de manera independiente.
                    </p>
                    <p>
                        Los cambios de fecha, horario o ruta de boletos adquiridos en internet podrán realizarse en las taquillas o puntos de venta a través de sus líneas comerciales de Autotransportes Estrella Roja del Sur, S.A. de C.V, Costa Line, Futura y Turistar Ejecutivo, siendo indispensable presentar el pase de abordar que le generó el portal y una identificación oficial vigente (sólo se aceptarán: credencial para votar, cédula profesional, licencia de manejo y pasaporte) para solicitar el cambio correspondiente, debiéndose presentar con un tiempo mínimo de una hora antes de la salida.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">VIAJERO ANTICIPADO</h3>
                    <p>
                        La venta de Boletos de Viajero Anticipado aplica tanto para venta en línea (sitio web), taquillas, puntos de venta propios Autotransportes Estrella Roja del Sur, S.A. de C.V a través de sus líneas comerciales de autobuses, Costa Line, Futura y Turistar Ejecutivo,centro de contacto telefónico y se puede realizar la compra con cualquier forma de pago.
                    </p>
                    
                    <p>
                        No aplica para canales o puntos de venta externos.
                    </p>
                    
                    <p>
                        En las rutas definidas para boletos de Viajero Anticipado no se podrán vender Boletos Abiertos, solo confirmados. Se podrán comprar boletos abiertos pero con una tarifa a precio de adulto.
                    </p>

                    <p>
                        Las Boletos con tarifas de Viajero Anticipado no aplican ni son acumulables con otro tipo de descuentos o promociones. Los boletos con tarifas de Viajero Anticipado son personales e intransferibles, para hacerlo efectivo el cliente deberá presentar una identificación oficial antes de abordar el autobús, si no cumple con el requisito deberá pagar la Tarifa Completa.
                    </p>
                    
                    <p>
                        El periodo para comprar boletos de autobús y obtener la tarifa de Viajero Anticipado es a partir del primer minuto del día siguiente a la consulta y hasta dos meses posteriores, disponible en internet, taquillas y centro telefónico. En caso de NO contar con tarifa anticipada, aplica el descuento del 5% por viaje redondo en taquilla, en el boleto de regreso, y 5% de descuento comprando en línea.
                    </p>
                    
                    <p>
                        La tarifa y los descuentos siempre estarán sujetos a disponibilidad.
                    </p>

                    <p>
                        La promoción de 50% de descuento para pasajeros de Viva Aerobús, será únicamente sobre la tarifa adulto. La tarifa de Viajero Anticipado no aplica en la compra de boletos con beneficios de INAPAM, menores, estudiantes, maestros y boletos abiertos.
                    </p>
                    
                    <p>
                        Para las referencias que genere el sistema por operaciones de boletos con tarifa de Viajero Anticipado el cliente tendrá 24 horas a partir de su compra para realizar el pago correspondiente.
                    </p>
                    
                    <p>
                        El pago de la reservación de viaje de operaciones con Tarifa Completa podrá efectuarse 24 horas antes de la salida del autobús.
                    </p>

                    <p>
                        En las reservaciones que involucren operaciones de Tarifas de Viajero Anticipado y Tarifas Completas el cliente tendrá 24 horas a partir de su compra para realizar el pago correspondiente.
                    </p>
                    
                    <p>
                        Pasado los tiempos mencionados, sin excepción alguna la reservación será cancelada automáticamente por el sistema y el asiento será liberado para su venta.
                    </p>
                    
                    <p>
                        Para boletos con Tarifas de Viajero Anticipado no aplica cambio de nombre de pasajero.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">INTERCAMBIO DE BOLETOS CON TARIFA DE VIAJERO ANTICIPADO:</h3>
                    <p>
                        El cambio de itinerario de viaje (fecha u hora) se puede realizar directamente desde la página de internet (www.costaline.com.mx) en la sección “modifique su itinerario” o también podrán ser realizados en taquillas y/o puntos de venta de Autotransportes Estrella Roja del Sur, S.A. de C.V a través de sus líneas comerciales de autobuses, Costa Line, Futura y Turistar Ejecutivo, presentando el pase de abordar y una identificación oficial vigente. Cada operación está limitada a un máximo de tres cambios por boleto.
                    </p>
                    
                    <p>
                        En caso de que la tarifa vigente al momento del cambio de corrida sea mayor a la tarifa Viajero Anticipado pagada, el cliente deberá pagar la diferencia entre la tarifa pagada y tarifa vigente al momento del cambio de la corrida original, dicho pago deberá ser cubierto con la misma forma de pago realizada previamente. Aplica con todas las formas de pago.
                    </p>
                    
                    <p>
                        En caso de que la tarifa vigente al momento del cambio de corrida sea menor a la tarifa Viajero Anticipado pagada, no habrá devoluciones.
                    </p>
                    
                    <p>
                        Con la tarifa de Viajero Anticipado no se aceptan cancelaciones.
                    </p>
                    <p>
                        Para tarifas de boletos de Viajero Anticipado no aplica cambio de nombre de pasajero.
                    </p>

                    <p>
                        Aplica todas las formas de pago en taquilla y sitio web.
                    </p>
                    
                    <p>
                        Asientos sujetos a disponibilidad, consúltalos en <a class="__link-text" href="../.../../../">www.costaline.com.mx</a>, y taquillas.
                    </p>
                    <p>
                        Para dudas y comentarios, comunícate a nuestro centro de atención a clientes al 800 0037 635, al 800 2490 460.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">COSTALINE OFRECE LOS SIGUIENTES DESCUENTOS (SUJETOS A DISPONIBILIDAD):</h3>
                    <p>
                        EnAutotransportes Estrella Roja del Sur, S.A. de C.V a través de sus líneas comerciales de autobuses, Costa Line, Futura y Turistar Ejecutivo,se otorgan los siguientes descuentos (sujetos a disponibilidad):
                    </p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                3 Menores 50% (Todo el año)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                2 INAPAM 50% (Todo el año)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                6 Estudiantes 50% (Solo temporada vacacional)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                2 Profesores 25% (Solo temporada vacacional)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                2 PCD Persona con Discapacidad 50% (Todo el año)
                            </p>
                        </li>
                    </ul>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">RESTRICCIONES</h3>
                    <p>
                        Los pasajeros registrados con descuento de INAPAM, deberán mostrar la credencial expedida por esta institución antes de abordar el autobús para acreditar el descuento, de no presentarla se le cobrará la diferencia del costo total del boleto.
                    </p>
                    
                    <p>
                        Los descuentos de menor solo se aplican si el pasajero tiene entre 3 y 11 años de edad; los niños de menos de 3 años no pagan boleto, viajan en el mismo asiento que el adulto y abordarán con la identificación del adulto que los acompaña. Si el menor representa físicamente una edad mayor de 11 años será necesario acreditar la edad presentando acta de nacimiento o CURP del menor de lo contrario deberá pagar el boleto completo.
                    </p>
                    
                    <p>
                        Los descuentos de Estudiante y de Profesor, solo se otorgan durante los periodos vacacionales publicados por la Secretaría de Educación Pública y se aplican si el interesado presenta al momento de la compra, la credencial con fotografía vigente que lo acredite como Estudiante o Profesor activo, de no cumplir con las condiciones especificadas o no presentarla al momento de abordar se le cobrará la diferencia del costo total del boleto.
                    </p>
                    
                    <p>
                        Estos descuentos solo son aplicables a instituciones educativas que cuenten con reconocimiento de validez oficial o que estén incorporadas a la SEP.
                    </p>
                    <p>
                        Autotransportes Estrella Roja del Sur, S.A. de C.V a través de sus líneas comerciales de autobuses, Costa Line, Futura y Turistar Ejecutivo,no se hace responsable por el mal uso que se haga del pase de abordar, siendo esto obligación exclusivamente de la persona o pasajero que lo imprime.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">DOCUMENTACIÓN DE EQUIPAJE:</h3>
                    <p>
                        Documente su equipaje 30 minutos antes de su salida.
                    </p>
                    <p>
                        La documentación de equipaje se podrá realizar hasta media hora antes de la salida del autobús. Cada pasajero podrá llevar hasta 25 Kilogramos de equipaje libre de cargo (excepto carga). Entiéndase por equipaje: objetos de uso personal, ropa, instrumentos musicales, sillas de ruedas, bicicletas, carriolas, juguetes, herramientas de un arte u oficio, los cuales deberán ser transportados en maletas, bolsas, cajas, etc. solo se permite llevar abordo equipaje de mano como: computadoras portátiles, bolsos pequeños, mochilas y todo artículo que no exceda el tamaño de la gaveta del autobús. En caso de exceder el limite permitido, se cobrará por cada kilo excedente el 1% sobre la tarifa base del costo del boleto (no aplica en tarifas con descuento y/o promociones) .
                    </p>
                    <p>
                        La empresa no se responsabiliza por equipajes sin talón o por bultos u otras pertenencias de mano que el pasajero lleve consigo en el interior del salón del autobús, en caso de pérdida y/o extravió de equipaje documentado, se pagara una indemnización hasta por el equivalente a 20 días de salario mínimo general vigente en la CDMX.
                    </p>
                    <p>
                        Si el pasajero viaja con una mascota, esta deberá ir en su jaula transportadora plástica o rígida (no de tela) y preferentemente sedado; todas las mascotas deberán viajarán en la cajuela de equipaje del autobús.
                    </p>
                    <p>
                        Los únicos animales que podrán viajar en cabina de pasajeros son los perros guías (lazarillos) y de compañía o soporte emocional sin tener que pagar una cuota adicional.
                    </p>
                    <p>
                        En estos casos el dueño deberá acreditar al momento de la compra y abordaje, que cuenta con la documentación completa para viajar, es decir deberá presentar la cartilla de vacunación original, así como el certificado médico donde se indique la enfermedad que padece el pasajero (paciente).
                    </p>
                    <p>
                        Queda prohibida la transportación de animales exóticos o en peligro de extinción (aves, mamíferos, reptiles y peces), en caso de hacerlo deberán presentar los documentos oficiales expedidos por la SEMARNAT, que los acredite para tal efecto.
                    </p>
                    <p>
                        Queda prohibida la transportación en el equipaje documentado y de mano lo siguiente: billetes o anuncios de lotería nacional y extranjera; materiales y residuos peligrosos, psicotrópicos y estupefacientes, salvo que su posesión o traslado sea lícita conforme a las disposiciones legales aplicables; armas de fuego y explosivos; animales o perecederos, cuando no se cumplan las condiciones de higiene y seguridad adecuadas, de acuerdo con la normatividad aplicable; dinero o títulos de crédito al portador o negociables; cualquier otro bien cuyo tránsito requiera de permiso específico o bien lo restrinja alguna ley en particular, sin que se cuente con dicho permiso específico, cualquier otro bien que prohíban las leyes específicas de la materia, así como cualquier otro artículo, material o cosa que ponga en riesgo a los pasajeros y a su equipaje.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">ABORDAJE DE MENORES SOLOS</h3>
                    <p>
                        No se aceptarán, por ninguna circunstancia, menores viajando solos que no hayan alcanzado los 11 años de edad. Todo menor que viaje solo debe presentar la carta responsiva otorgada por los padres o tutores, donde se exime de toda responsabilidad a la Empresa. El menor debe tener la edad de 11 a 17 años. (Toda vez que los niños mayores de 11 años cuentan con la capacidad tanto de hablar, escuchar claramente, así como de reconocer a los padres o tutores y a las personas que los recogerán y de tener la lucidez debida a su edad). El Padre o Tutor del menor, debe permanecer en la central de origen hasta que el autobús salga a su destino.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">MASCOTAS A BORDO:</h3>
                    <p>
                        En nuestra empresa entendemos lo importantes que son sus mascotas para usted y sus seres queridos, por este motivo nos esforzamos por extender nuestro servicio para que puedan acompañarlo en sus viajes, los clientes de la empresa podrán llevar consigo mascotas siempre y cuando se cumpla con las políticas establecidas por la organización.
                    </p>
                    <p>
                        Los clientes de la empresa podrán llevar consigo mascotas (perros y gatos) siempre y cuando se cumpla con las políticas establecidas por la organización, exceptuando las establecidas por el gobierno federal en la NOM-059-SEMARNAT-2010.
                    </p>
                    <p>
                        <strong>** Está prohibido el traslado de mascotas en el compartimiento de equipaje para unidades de Doble Piso, a menos de que adicional a los requisitos establecidos, los clientes firmen la responsiva correspondiente que exime de cualquier responsabilidad a la organización de la integridad de la mascota.</strong>
                    </p>
                    <p>
                        La empresa tiene definidas tres tipos de mascotas y/o animales de servicio:
                    </p>
                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Mascotas Documentadas (Compartimiento Equipaje)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Animales de Apoyo (Discapacidad Visual o Emocional)
                            </p>
                        </li>
                    </ol>
                    <p>
                        <strong>*Perros de servicio y/o animales de compañía no tienen costo</strong>
                    </p>
                    <p>
                        <strong>*Sujeto a disponibilidad</strong>
                    </p>
                    <p>
                        <strong>*Las mascotas de apoyo emocional, apoyo a alguna discapacidad visual o física pueden viajar sin transportadora.</strong>
                    </p>
                    <p class="__terms-button">
                        <a class="btn-link" target="_blank" href="https://costaline.com.mx/docpdf/CARTA-RESPONSIVA-costa.pdf">Descarga</a> y llena tu Documento de Responsabilidad
                    </p>
                    <p>
                        <br><strong>    Mascotas Documentadas</strong>
                    </p>
                    <p>
                        Se podrán llevar consigo mascotas documentadas en el compartimiento de equipaje de la unidades de un piso sin cargo adicional si se cumplen con los siguientes requisitos:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las mascotas deberán viajar dentro de un contenedor o transportadora rígida tipo Kennel que cumpla las siguientes especificaciones:
                            </p><br>
                             <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        El peso máximo de la mascota deberá de ser de 32 kg (incluyendo transportadora), las dimensiones máximas de la transportadora son: 128 cm de largo x 45 cm de ancho x 65 cm de alto. Solo se permite una mascota por transportadora.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                       La transportadora debe contar con espacio suficiente para que tu mascota esté parada, y pueda moverse y girar de forma natural sin tocar las paredes.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        No debe llevar implementos o accesorios (juguetes, golosinas, premios u otros objetos, elaborados con ingredientes de origen rumiante), de lo contrario, serán retirados para su destrucción.
                                    </p>
                                </li>
                               
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En el caso de perros y gatos se deberá presentar Cartilla de vacunación con esquema completo de acuerdo a la edad de la mascota, que especifique la fecha de aplicación de la vacuna contra la rabia y la vigencia de la misma. No es necesario la mascota viaje sedada (Consultar a su médico veterinario).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En el caso de perros y gatos la mascota deberá tener por lo menos ocho semanas de nacido al momento de realizar el viaje y no requerir de su madre para la alimentación. Al momento del viaje la mascota no debe presentar signos de enfermedades infectocontagiosas, que no presenten heridas recientes o en proceso de cicatrización.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La empresa no transportará mascotas en el compartimiento de equipaje de las unidades de doble piso, lo anterior con la intención de velar por la vida de la mascota debido a la posibilidad de desarrollar el síndrome respiratorio o cualquier otra afectación.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En estos casos donde la mascota viaje documentada el cliente deberá llenar la carta responsiva correspondiente que especifique que el viaje de la mascota será bajo entera responsabilidad del pasajero excluyendo a la empresa de cualquier responsabilidad de la salud y vida de la mascota trasladada.
                             </p>
                        </li>
                    </ol>
                <p>
                    <br><strong>    Animales de apoyo</strong>
                </p>
                <p>
                    Las personas con discapacidad física, visual, auditiva, mental o intelectual tienen derecho a viajar con un animal de servicio sin cargo adicional. Los animales de servicio serán aceptados en la cabina de pasajeros junto con la persona con discapacidad sin cargo extra, siempre y cuando cumplan los siguientes requisitos:
                </p>
                <p>
                    Animales de apoyo emocional
                </p>
                <p>
                    Las mascotas de apoyo emocional deberán cumplir todos los requisitos estipulados para las mascotas abordo.
                </p>
                <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Presentar documento emitido al menos doce meses antes del viaje por el médico tratante (psiquiatra, psicólogo) o institución tratante de la persona con discapacidad emocional que avale la necesidad de un animal de apoyo emocional.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los Animales de Apoyo Emocional deberán portar correa, arnés y placa de identificación.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El limite de peso para poder transportar una mascota de apoyo emocional será de 12 kilogramos.
                            </p>
                        </li>
                       
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de no cumplir con alguno de los requisitos aquí señalados, el Animal de Apoyo Emocional será transportado en calidad de mascota en el compartimiento de carga del autobús, bajo las políticas de las mascotas documentadas.
                            </p>
                        </li>
                    </ol>
                    <p>
                        <br><strong>    Animales de apoyo visual</strong>
                    </p>
                    <p>
                        La empresa permite a los pasajeros con discapacidad visual y/o movilidad reducida estar acompañados durante el viaje de un animal de servicio sin costo, cumpliendo las siguientes políticas:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Presentar el documento que avale la condición de Animal de Apoyo Visual:
                            </p><br>
                                <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Identificación del Animal de Servicio emitida por alguna autoridad en materia de sanidad animal y/u organismo reconocido
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Documento del médico y/o de alguna institución de salud tratante del Pasajero con Discapacidad y/o Movilidad Reducida, o
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Algún otro documento que evidencie que el Pasajero con Discapacidad y/o Movilidad Reducida necesita de un Animal de Servicio para su movilidad y/o acompañamiento.
                                    </p>
                                </li>
                               
                            </ul>
                            
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los perros deberán portar collar y correa o arnés en todo momento.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los perros de apoyo visual deberán utilizar preferente los espacios definidos para su traslado en cabina (Asientos 1,2 y 3 en unidades de un piso; y asientos de planta baja en unidades de dos pisos).
                            </p>
                        </li>
                         <p>
                            Los pasajeros y sus animales de apoyo visual tendrán preferencia en el abordaje para ingresar al autobús antes que los demás pasajeros.
                         </p>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cartilla de vacunación con esquema completo de acuerdo a la edad de la mascota, que especifique la fecha de aplicación de la vacuna contra la rabia y la vigencia de la misma.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">COMPROBACIÓN FISCAL (FACTURACIÓN ELECTRÓNICA)</h3>
                    <p>
                        Los pases de abordar emitidos por este tipo de compra no tienen validez fiscal, en caso de requerir el comprobante fiscal, deberá generarlo desde nuestro portal web <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> en el apartado de “Facturación Electrónica” dentro del menú al margen superior derecho, para ello es necesario el número de operación del boleto o pase de abordar, número de asiento y los datos fiscales completos.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">RESTRICCIONES PARA FACTURACIÓN</h3>
                    <p>
                        Sólo se podrán facturar boletos confirmados (no abiertos) dentro del lapso de 30 días naturales, contados a partir de la fecha del viaje. Una vez generada la factura, ya no se podrá hacer ningún cambio o cancelación en el documento emitido. En los casos de boletos pagados de forma mixta (Efectivo y/o Tarjeta Bancaria), solo se podrá facturar el importe pagado con Efectivo y/o Tarjeta Bancaria
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">RECUPERACIÓN DE FACTURA</h3>
                    <p>
                        Si durante el proceso de facturación no recibió en su correo electrónico el archivo PDF y XML de su comprobante fiscal, podrá recuperarlo accediendo a nuestro portal web <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> en el apartado de "Facturación Electrónica" debiendo capturar el RFC y correo electrónico. Una vez que haya ingresado al módulo, deberá seleccionar "Consultar Historial" e identificar el documento que desee recuperar ya sea reenviandolo nuevamente a su correo, a una cuenta diferente o bien, imprimir la factura nuevamente.
                    </p>
                </article>
            </section>
        `;
		this.loadAndSetPetsTableData("#pets-table", "../src/data/table-pets.json");
		this.loadAndSetPetsTableData(
			"#costs-table",
			"../src/data/table-pets-2.json",
		);
	}
	async loadAndSetPetsTableData(tableElementSelector, jsonPath) {
		const tableElement = this.querySelector(tableElementSelector);
		const response = await fetch(jsonPath);
		const data = await response.json();
		tableElement.setTableData(data);
	}
}
customElements.define("page-terminos-condiciones", PageTerminosCondiciones);
