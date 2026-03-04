/*-------------COMPONENTES PRINCIPALES ------------------------- */

import "../../../components/app-header.js?v=1.1.3";
import "../../../components/app-cookies-policy.js?v=1.0.3";
import "../../../components/app-button-whats.js?v=1.0.2";
import "../../../components/app-button-eva-trip.js?v=1.0.2";
import "../../../components/app-footer.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../components/app-destinations-table.js";

/*-------------------------SCRIPTS---------------------------*/

class PageViajeroProtegido extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
            <app-cotiza></app-cotiza>


            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../src/assets/img/banner/promociones/web/banner-viajero-protegido-seguro-de-viaje.webp","mediumImage": "../src/assets/img/banner/promociones/tablet/viajero-protegido-tablet.webp", "smallImage": "../src/assets/img/banner/promociones/movil/viajero-protegido-mobile.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section">
                <app-section-title section-title="Términos y condiciones"></app-section-title>
            </section>

            <section class="__sections __btn-group-pages">
                <div>
                    <a class="__btn btn-enable" href="../../../servicios/viajero-protegido-plus.html">Servicio Plus</a>
                    <a class="__btn btn-disable">Servicio Basico</a> 
                    <a class="__btn btn-enable" href="../../../servicios/viajero-protegido-lujo.html">Servicio de Lujo</a> 
                </div>

                <h3 class="__subtitle-section">Condiciones Generales IAMSA Básico</h3>
            </section>



            <section class="__sections">
                <article class="__bg-blue">


                    <h3 class="__subtitle-section">SEGUROS</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>
                    <h3 class="__subtitle-section">ROBO DE EQUIPAJE DE MANO</h3>
                    <p class="__terms-purchase-text">
                        Se indemnizará mediante reembolso y hasta por el total de la suma asegurada contratada, en caso de un robo del equipaje de mano, incluyendo equipo electrónico y/o de cómputo, dispositivos electrónicos identificados como «gadgets», «wearables», «pocket» o de bolsillo y sus accesorios como celulares, tabletas, laptops, videojuegos, entre otros dentro de su equipaje de mano.
                    </p>
                    <p class="__terms-purchase-text">
                        Requisitos: Carta responsiva de la línea de autobús, acta ratificada presentada ante el MP.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>
                    <h3 class="__subtitle-section">Exclusiones:</h3>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pasaportes, visa, documentos de identidad personal, boletos de transporte, actas y otros documentos como escrituras, dinero en efectivo, tarjetas de crédito, tarjetas de débito, tarjetas de pago, valores negociables, oro, plata, sellos y llaves.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Derivados de cualquier delito que cuente con la participación directa del Asegurado, alguno de sus ascendientes o descendientes hasta el segundo grado y/o parientes por afinidad hasta el segundo grado, así como de un empleado, dependiente o sirviente del Asegurado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                A consecuencia de atentados, motines, desórdenes populares o de otros hechos que las leyes califican como delitos contra el orden público.
                            </p>
                        </li>
                    </ol>


                    <h3 class="__subtitle-section">TRASLADO DE CUERPO POR MUERTE ACCIDENTAL</h3>
                    <p class="__terms-purchase-text">
                        En caso de muerte accidental del pasajero durante el viaje, se cubrirá hasta el límite de la suma asegurada:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los trámites para el transporte o repatriación del cadáver, se cubrirán los gastos de traslado hasta su inhumación.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La inhumación en el lugar de deceso o el traslado de cenizas al lugar de residencia permanente del pasajero, a petición de los deudos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los gastos de traslado de los acompañantes del pasajero hasta su respectivo domicilio o al lugar de inhumación, siempre y cuando dicho traslado no pueda efectuarse en el medio de transporte previsto con motivo del viaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los gastos de traslado de los acompañantes del pasajero hasta su respectivo domicilio o al lugar de inhumación, siempre y cuando dicho traslado no pueda efectuarse en el medio de transporte previsto con motivo del viaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El pago de un boleto redondo en la misma clase en que viajo el titular para un familiar, en el medio de transporte más conveniente, desde su lugar de residencia hasta el lugar de deceso, solo en caso de que el pasajero fallecido hubiera viajado sin acompañante adulto y que las autoridades locales competentes requieran de algún familiar o representante. Dentro de la misma aseguradora establecida en el plan.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Requisitos: El pago se cubrirá mediante reembolso al pasajero con la presentación de copia del acta de defunción y la(s) factura(s), comprobante(s) y/o recibos requeridos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                            </p>
                        </li>
                    </ol>


                    <h3 class="__subtitle-section">GASTOS MÉDICOS POR ACCIDENTE O ENFERMEDAD</h3>
                    <p class="__terms-purchase-text">
                        En caso de que el pasajero sufra un accidente dentro de los 7 días siguientes a la ocurrencia de este, o enfermedad grave o emergencia médica o cirugía de emergencia, o la aparición de una enfermedad no preexistente al viaje y se tuviera que someter a tratamiento médico, intervención quirúrgica, hospitalizarse o hacer uso de ambulancia, medicinas, estudios de laboratorio y de gabinete hasta el Gasto Usual y Acostumbrado; se reembolsará el monto de los gastos médicos cubiertos. Los gastos erogados por servicios médicos durante un viaje pasajero se cubrirán preferentemente como pago directo al prestador de servicios en convenio con la Compañía con excepción en caso de una emergencia.
                    </p>
                    <p class="__terms-purchase-text">
                        Los gastos cubiertos consideran:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslado Médico de Emergencia al centro hospitalario más cercano y su regreso al lugar de hospedaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Gastos médicos y de hospitalización por urgencia médica, incluye la primera cita de atención y los gastos del recién nacido para embarazos hasta el 7º mes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslado y estancia de un acompañante del pasajero en hospitalizaciones mayores a 5 días.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslado y acompañamiento de menores a 16 años en hospitalizaciones mayores a 5 días o fallecimiento.
                            </p>
                        </li>
                    </ol>
                    <p class="__terms-purchase-text">
                        La relación entre el pasajero amparado bajo esta cobertura y los proveedores médicos queda bajo su responsabilidad, por lo que la Compañía no asume responsabilidad alguna por el servicio recibido o pago de daños y perjuicios.
                    </p>
                    <p class="__terms-purchase-text">
                        Requisitos: El pago se cubrirá mediante reembolso al pasajero con la presentación del informe médico, los estudios realizados y la(s) factura(s), comprobante(s) y/o recibos requeridos.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>


                    <h3 class="__subtitle-section">GASTOS MÉDICOS POR ACCIDENTE O ENFERMEDAD</h3>
                    <h3 class="__subtitle-section">Exclusiones:</h3>
                    <p class="__terms-purchase-text">
                        La póliza de seguro en ningún caso cubrirá los gastos originados por cualquiera de los supuestos que a continuación se mencionan:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslado Médico de Emergencia al centro hospitalario más cercano y su regreso al lugar de hospedaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Gastos médicos y de hospitalización por urgencia médica, incluye la primera cita de atención y los gastos del recién nacido para embarazos hasta el 7º mes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslado y estancia de un acompañante del pasajero en hospitalizaciones mayores a 5 días.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslado y acompañamiento de menores a 16 años en hospitalizaciones mayores a 5 días o fallecimiento.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si la enfermedad es de origen y manifestación sintomática anterior «preexistente» al inicio de la vigencia del seguro contratado por el Asegurado, así como también sus consecuencias y agudizaciones. Salvo en el caso especificado en el inciso B punto 5 de esta sección.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Afecciones, lesiones y sus consecuencias o complicaciones producto de tratamientos por atenciones no brindadas por profesionales médicos en la materia.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cualquier reposición y/o reparación de prótesis u órtesis, artículos de ortopedia, audífonos, anteojos y lentes de contacto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Por enfermedades derivadas de padecimientos crónicos o diagnosticadas con anterioridad al viaje, siempre y cuando no estén controladas medicamente, en caso de emergencia solo se reembolsará el primer gasto para estabilizar al paciente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los trasplantes de cualquier tipo de órganos o tejidos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las enfermedades mentales, trastornos psiquiátricos, depresiones o por cualquier tipo de enfermedad mental o nerviosa, a excepción de lo estipulado del inciso J. Asistencia psicológica de esta sección.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los gastos médicos u hospitalarios que se lleven a cabo sin una prescripción médica.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Los chequeos o exámenes médicos de rutina, es decir los gastos médicos sin que exista un dictamen de alguna enfermedad o accidente cubierto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Tratamientos de rehabilitación o terapia de recuperación física que no sean derivados de una asistencia médica prestada durante el viaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Enfermedades de transmisión sexual (ETS).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Hipertensión arterial y todas sus consecuencias y derivaciones, así como los controles de tensión arterial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las lesiones que sean consecuencia de intervenciones quirúrgicas o tratamientos médicos que no sean causados por una asistencia médica cubierta y prestada durante el viaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cualquier gasto adicional no relacionado con el tratamiento médico como: pañuelos desechables, peluquería, lociones corporales, cremas y cosméticos, alimentos de acompañante, caja fuerte, concepto de fianza, dulcería, estacionamiento, florista, servicio telefónico, renta de servicios de entretenimiento, control de televisión, servicio de librería, periódicos, servicio de restaurante y cafetería. (La anterior enunciación es enunciativa, más no limitativa).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si el destino al que se viaja cuenta con alertas de viaje ya sea por temas de salud, seguridad, climática entre otras, por parte de las autoridades locales o internacionales.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">DESCRIPCIÓN DE LAS ASISTENCIAS.</h3>
                    <h3 class="__subtitle-section">ASISTENCIAS MÉDICAS</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_2_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">ENVIÓ DE MÉDICO A DOMICILIO POR EMERGENCIA.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que el pasajero requiera la asistencia para la atención de un padecimiento no urgente, se coordinará el envío de un médico general a domicilio de acuerdo con la disponibilidad en cada estado, hasta el número de eventos contratados en cada plan.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Eventos subsecuentes a costo preferencial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El médico general realiza la auscultación general con fines de diagnóstico físico, esto sin realizar algún tipo de procedimiento que implique equipamiento quirúrgico como curación, inyección, sonda, cateterismo o suturar. Este servicio deberá ser coordinado desde un inicio por SSIST. No aplican reembolsos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El cliente referido podrá cancelar la cita con el médico general con anticipación a la cita coordinada. En el caso de que el cliente referido no cancele la cita o no acuda a la cita coordinada por SSIST, se considerará como un servicio prestado y se aplicará el número de eventos a que tenga derecho.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        NO TOME LA INFORMACIÓN DE LOS SERVICIOS COMO CONSEJOS MÉDICOS Y/O DE SALUD. NINGUNA INFORMACIÓN SUMINISTRADA POR LOS SERVICIOS PRETENDE SER UN SUSTITUTO DE LA ATENCIÓN ADECUADA DE LOS PROFESIONALES DE LA SALUD, INCLUYENDO EL DIAGNÓSTICO Y TRATAMIENTO DE CONDICIONES MÉDICAS. NO DEJE DE BUSCAR AL PROFESIONAL MÉDICO, NI DESMIENTA ALGÚN CONSEJO RECIBIDO ANTERIORMENTE POR INFORMACIÓN OBTENIDA POR MEDIO DE LOS SERVICIOS. EN CASO DE QUE UN ACREDITADO UTILICE LA INFORMACIÓN DE ALGÚN SERVICIO, LO HACE EXPRESAMENTE BAJO SU PROPIO RIESGO Y RESPONSABILIDAD.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">ASISTENCIA MEDICA TELEFÓNICA.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se le brindará asesoría telefónica a través de un médico general cuando el acreditado requiera orientación médica por un padecimiento no urgente (embarazo, COVID, planificación familiar y anticonceptivos, alcoholismo y farmacodependencia, así como del uso de medicamentos prescritos por un médico tratante, efectos secundarios de medicamentos, y dosis recomendadas).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El servicio no cubre ningún gasto médico generado. Con el fin de respetar las buenas prácticas de la medicina, el médico de cabina en ningún caso y por ningún motivo recetará medicamentos ni podrá dar diagnostico alguno. No aplica reembolso.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El personal que atiende esta asistencia son únicamente médicos titulados con cédula profesional, con experiencia en atención médica de primer contacto, normas éticas en medicina y con experiencia en identificación de situaciones que requieren otro nivel de atención.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Este servicio estará disponible las 24 horas del día, los 365 días del año. La llamada tendrá una duración máxima de treinta minutos, transcurrido dicho término se cortará la comunicación sin responsabilidad para SSIST.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        NO TOME LA INFORMACIÓN DE LOS SERVICIOS COMO CONSEJOS MÉDICOS Y/O DE SALUD. NINGUNA INFORMACIÓN SUMINISTRADA POR LOS SERVICIOS PRETENDE SER UN SUSTITUTO DE LA ATENCIÓN ADECUADA DE LOS PROFESIONALES DE LA SALUD, INCLUYENDO EL DIAGNÓSTICO Y TRATAMIENTO DE CONDICIONES MÉDICAS. NO DEJE DE BUSCAR AL PROFESIONAL MÉDICO, NI DESMIENTA ALGÚN CONSEJO RECIBIDO ANTERIORMENTE POR INFORMACIÓN OBTENIDA POR MEDIO DE LOS SERVICIOS. EN CASO DE QUE UN ACREDITADO UTILICE LA INFORMACIÓN DE ALGÚN SERVICIO, LO HACE EXPRESAMENTE BAJO SU PROPIO RIESGO Y RESPONSABILIDAD.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">REFERENCIAS Y RED DE DESCUENTOS MÉDICOS.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El acreditado tendrá acceso a la red de proveedores médicos en convenio con SSIST quienes le otorgarán descuentos en farmacias, clínicas, laboratorios y hospitales, que van desde un 5% (cinco por ciento) hasta un 30% (treinta por ciento). Servicio disponible las 24 horas del día los 365 días del año, sin límite de eventos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El servicio deberá ser coordinado desde un inicio por SSIST para hacer válido el beneficio. No aplica reembolso.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia.</strong>
                            </p>
                    </ul>

                    <h3 class="__subtitle-section">TELEMEDICINA CON MEDICO GENERAL O ESPECIALISTA (INTERNISTA,GINECÓLOGO, PEDIATRA Y GASTRO).</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de enfermedad o emergencia médica, el acreditado podrá tener contacto inmediato, mediante video conferencia con médicos generales, de manera personalizada virtualmente, quienes ayudarán a tomar las medidas necesarias para estabilizar al acreditado y ayudarlo con su malestar. El servicio deberá ser coordinado desde un inicio por SSIST para hacer válido el beneficio. El servicio no cubre ningún gasto médico generado. En ningún caso, el médico podrá dar un diagnóstico o recetar medicamentos. No aplica reembolso.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El personal que atiende esta asistencia son únicamente médicos titulados con cédula profesional, con experiencia en atención médica de primer contacto, normas éticas en medicina y con experiencia en identificación de situaciones que requieren otro nivel de atención.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                            </p>
                        </li>
                    </ul>

                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">SERVICIOS DE EMERGENCIA</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_3_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">ENVIO DE AMBULANCIA POR EMERGENCIA.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que el acreditado o algún familiar directo sufra un accidente o enfermedad, y/o requiera ser trasladado a un centro hospitalario por emergencia, se coordinará el envío de una ambulancia básica terrestre para ser trasladado al nosocomio más cercano de su elección.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que el cliente solicite una ambulancia especial (traslado, COVID, especializada) se cotizará y se brindará el costo al Acreditado. Servicio disponible las 24 horas del día los 365 días del año. El servicio deberá ser coordinado desde un inicio por SSIST para hacer válido el beneficio se entenderá por emergencia: Situación que pone en peligro la vida, la viabilidad de alguno de los órganos o la integridad corporal del beneficiario, para la cual requiere una atención médica inmediata.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El servicio de ambulancia por emergencia consistirá en una unidad móvil de urgencias básicas, contará con un conductor y un técnico en urgencias médicas a bordo y equipamiento necesario que marca la NOM34.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El personal técnico en urgencias médicas, del nivel básico, contará con conocimientos de reanimación cardiopulmonar básica, anatomía y fisiología elemental, levantamientos, movilizaciones, inmovilización y empaquetamiento del paciente, manejo básico de la vía aérea, evaluación y exploración, identificación y manejo de problemas de trauma (hemorragias, estado de choque, tejidos blandos, sistema muscular y esquelético, cabeza y columna vertebral), farmacología elemental, identificación y manejo de problemas médico clínicos (urgencias respiratorias, cardiovasculares, diabéticas, alérgicas, ambientales, obstétricas, conductuales y envenenamientos), vías de administración de medicamentos bajo supervisión médica (subcutánea, oral, inhalación), operación general de ambulancias, sistemas de comunicación, manejo inicial de incidentes con materiales peligrosos, técnicas básicas de rescate, selección y clasificación de los beneficiarios, e interacción con aeronaves.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                De la unidad: La Ambulancia de urgencias básicas, será la unidad móvil, terrestre, destinada al servicio de pacientes que requieren atención médica prehospitalaria, mediante soporte básico de vida.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST, no será responsable de cualquier complicación que se pueda presentar con el traslado médico, ni de resultado alguno, sin embargo, SSIST, coadyuvará con el beneficiario, a fin de reclamar la responsabilidad del tercero que deba asumir la responsabilidad.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se considera únicamente un traslado al hospital más cercano, en caso de que no exista disponibilidad y el beneficiario tenga que ser trasladado a otro hospital, se considerará como un segundo evento y el costo adicional será cubierto por el beneficiario.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que el servicio de ambulancia tenga que esperar a que el paciente sea ingresado o esté en esperando a que se le dé de alta para el egreso del hospital, o por cualquier circunstancia ajena al proveedor del servicio, el beneficiario tendrá que pagar directamente al proveedor la hora adicional por cada hora de espera, costo que se le comunicará en el momento a el beneficiario.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que el beneficiario cuente con sobrepeso y por tanto requiera para su traslado de una ambulancia de dimensiones mayores a las comunes deberá pagar directamente al proveedor de los servicios de ambulancia, el cargo adicional generado por este requerimiento especial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El servicio de asistencia de ambulancia no aplica para casos por la enfermedad pandémica por COVID-19, fiebre del mono o cualquier otra enfermedad pandémica, la cual se cotizará por aparte al beneficiario y tendrá que ser cubierta de conformidad con la cotización que se realice en el momento.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El personal que atiende esta asistencia son únicamente médicos titulados con cédula profesional, con experiencia en atención médica de primer contacto, normas éticas en medicina y con experiencia en identificación de situaciones que requieren otro nivel de atención.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST, no es responsable de los servicios proporcionados por los proveedores, ni de las funciones realizadas por estos, siendo el proveedor de servicio el responsable directo, en caso de cualquier queja, reclamación o demanda, siendo que el servicio que presta SSIST es únicamente de coordinación y gestión de envío de los proveedores, por lo que SSIST, coadyuvará en todo momento al acreditado para la solución ante el proveedor.
                            </p>
                        </li>
                        
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                            </p>
                        </li>
                    </ul>


                    <h3 class="__subtitle-section">Exclusiones:</h3>

                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El acreditado es quien se encargará de cubrir el costo de dicha hospitalización, así como cualquier costo de medicamentos, material quirúrgico y honorarios médicos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si el acreditado requiere una ambulancia especializada será bajo cotización y con costo para el acreditado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rescate o aquellas situaciones en las que el Acreditado se encuentre bajo circunstancias que le obstaculicen o impidan el acceso o que pongan en peligro la vida de las personas que pudiesen proporcionarle los servicios de asistencia, por encontrarse en lugares o zonas remotos, inaccesibles, de muy difícil y peligroso acceso, o muy lejanos a una población o vía donde pueda circular con seguridad y adecuadamente una ambulancia, así como cualquier lugar o terreno cuya morfología o circunstancias exijan el concurso de especialistas en rescate de cualquier tipo. A continuación, se expresan de forma enunciativa más no limitativa, algunos ejemplos: bosques, selvas, caminos, desiertos, montañas, mares, lagos, presas, ríos, playas, etc., sitios alejados de carreteras y poblaciones, así como barrancos, cuevas, laderas, picos y cimas de cerros, montañas, sierras, plataformas petroleras, barcos, yates y demás Accidentes del terreno o lugar. La falta de la autorización expresa para el traslado del Acreditado, en servicios programados por parte del Médico tratante, que certifique su estabilidad clínica.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST no será responsable de que el hospital o clínica a la que se pretenda trasladar al acreditado se reserve el derecho de admisión.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de emergencias sanitarias se sujetará a las disposiciones emitidas por la autoridad competente.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">ASISTENCIA FUNERARIA</h3>

                    <p class="__terms-purchase-text">
                        En caso de deceso, se ampara al acreditado, por causas naturales o derivado de un accidente, en las agencias de inhumaciones o agencias integrantes de la red de asistencia funeraria de SSIST la cual comprende los siguientes servicios:
                    </p>

                    <ol type="1" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Atención personalizada las 24 horas los 365 del año, a través del Centro De Atención Telefónica
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Atención y asesoría personalizada ante el Ministerio Público para la recuperación del finado en el territorio nacional.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslados:
                            </p>
                            <br><ol type="a" class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Primer traslado del finado del lugar del fallecimiento hacia cualquiera de las agencias de inhumaciones, en el caso de la Ciudad de México, y área metropolitana, a las sucursales J. García López como Casa Observatorio, Casa Satélite, Casa Iztapalapa, Casa Coyoacán y Casa Tlalpan o a la agencia funeraria corresponsal en el Interior de la República Mexicana.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Segundo traslado del lugar de velación al panteón que designe el familiar responsable o bien al crematorio (según disponibilidad).
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Los traslados entre punto y punto abarcarán un máximo de 60 KM, los cuales siempre serán dentro de la misma localidad, municipio o área conurbada. En caso de exceder la distancia de 30 km, (treinta kilómetros) el Acreditado cubrirá el costo por los kilómetros excedentes a razón de $30.00 (Treinta pesos 00/100 M.N.) por cada kilómetro, más el pago y trámite de cualquier costo o SERVICIO por internación o derechos que deban cubrirse al momento de prestar los SERVICIOS.
                                    </p>
                                </li>
                            </ol>

                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Arreglo estético del cuerpo (maquillar y vestir).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Embalsamamiento (aplica a petición del Acreditado).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Ataúd metálico básico.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Ataúd metálico básico (en derecho de uso para cremación).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sala para el funeral o capilla de velación básica/estándar con capacidad para 20 (veinte) personas en circulación o en caso de requerirlo, equipo de velación a domicilio. (Siempre y cuando la autoridad lo permita).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Facilidades para celebrar Servicios religiosos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cremación y entrega de urna básica (en caso de contar con los SERVICIOS en el área correspondiente del interior de la República Mexicana). (Siempre y cuando la autoridad lo permita).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se cubre hijos menores de 21 años y hasta 69 años. Se cubren familiares de acuerdo con lo pactado en cada financiera.
                            </p>
                        </li>
                    </ol>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusiones:</h3>

                    <ol type="I" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Trámites y traslados por casos de muerte médico Legal (Ministerio Público y Servicio Médico Forense).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cualquier gasto o costo originado por trámites ante el ministerio público y Servicio médico forense.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Exhumación de restos áridos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Arreglos florales.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Honorarios y maniobras del panteón.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslados foráneos (trámites, fletes terrestres o aéreos).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Costos y trámites de internación.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Repatriación.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslados Internacionales.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Servicio de Cafetería.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Nicho, fosa, cripta, gaveta.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pullman para acompañantes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Por no haber solicitado el SERVICIO al Centro De Atención Telefónica. (No existe reembolso).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si el Acreditado al momento de solicitar el servicio, ya hubiese contratado por su cuenta con otro proveedor, No se aplicará reembolso.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si se comprueba que existen falsas declaraciones en la edad de los contratantes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Causas de fuerza mayor o casos fortuitos que imposibiliten material y humanamente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El acceso al lugar del Esquelas en los periódicos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El peso máximo soportado por un ataúd básico para esta cobertura es de 100 kg, en caso de que el acreditado exceda dicho peso, se buscará un ataúd de diferente para proporcionar el servicio siempre y cuando no rebase el costo cubierto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Suicidio.
                            </p>
                        </li>
                    </ol>


                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">SERVICIOS DE EMERGENCIA</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TRASLADO DE UN FAMILIAR POR CONVALECENCIA</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que el pasajero viaje sin compañía y fuese hospitalizado por más de cinco días continuos, a consecuencia de algún padecimiento o enfermedad no excluida en estas condiciones generales, la Compañía reembolsará el costo de un boleto terrestre en clase económica de ida y vuelta, hasta el límite máximo de responsabilidad contratado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Es indispensable que el pasajero si su salud lo permite, o algún familiar o representante de él, de aviso de esta situación sin rebasar del plazo de 7 días.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">CONCIERGE Y ASESORIA EN VIAJES, RESERVACIONES EN HOTEL Y REDES DE DESCUENTO CON RELACION A VIAJES.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST le proporcionará referencia e información telefónica, acerca de: agencias de viajes, clima, exhibiciones, tipos de cambio, centros comerciales, exhibiciones, hoteles, restaurantes, museos, galerías, Información de consulados en el extranjero, reservaciones, espectáculos, carteleras, teatros, conciertos, vida nocturna, Orientación en la reposición de pasaporte en caso de robo o pérdida, entre otros. Atención telefónica las 24 horas, los 365 días del año. Ilimitado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Acceso ilimitado a nuestra red de descuentos en renta de automóviles, agencias de viajes, hoteles, y muchos otros servicios más. Servicio disponible las 24 horas del día los 365 días del año. Sin límite de eventos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">ASISTENCIA LEGAL TELEFÓNICA.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En caso de que el acreditado requiera de los servicios de un abogado, SSIST brindará asesoría telefónica con abogados titulados especialistas en las diferentes ramas del Derecho, las 24 horas del día, los 365 días del año.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El personal que atiende esta asistencia son únicamente abogados titulados con cédula profesional, con experiencia en su ramo, y con experiencia en identificación de situaciones que requieren otro nivel de atención y actúan de forma independiente a SSIST.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST, no proporciona opiniones legales, consejos jurídicos y/o de otra índole. El abogado únicamente se limitará a brindar una orientación legal en el momento, y ningún contacto con SSIST puede ser usado para hacer preguntas legales y/o jurídicas. Además, SSIST, no actúa como asesor legal, y/o abogado, por lo que no es responsable de la información transmitida entre el beneficiario o proveedor.
                            </p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                NO TOME LA INFORMACIÓN DE LOS SERVICIOS COMO CONSEJOS LEGALES Y/O JURÍDICOS. NINGUNA INFORMACIÓN SUMINISTRADA POR LOS SERVICIOS PRETENDE SER UN SUSTITUTO DE LA ATENCIÓN ADECUADA DE LOS PROFESIONALES, INCLUYENDO EL ESTUDIO U OPINIÓN, REVISIONES DE EXPEDIENTES DE POSIBLES INICIOS DE INDAGATORIAS PENALES Y/O CIVILES, O ADMINISTRATIVAS. NO DEJE DE BUSCAR UN CONSEJO PROFESIONAL, NI DESMIENTA ALGÚN CONSEJO RECIBIDO ANTERIORMENTE POR INFORMACIÓN OBTENIDA POR MEDIO DE LOS SERVICIOS DE ASISTENCIA. EN CASO DE QUE EL ACREDITADO UTILICE LA INFORMACIÓN DE ALGÚN SERVICIO DE ASISTENCIA, LO HACE EXPRESAMENTE BAJO SU PROPIO RIESGO Y RESPONSABILIDAD.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">Exclusiones:</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El presente SERVICIO queda limitado únicamente al acreditado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El personal que atiende esta asistencia son únicamente abogados titulados con cédula profesional, con experiencia en su ramo, y con experiencia en identificación de situaciones que requieren otro nivel de atención y actúan de forma independiente a SSIST.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Elaboración de documentos y/o escritos que requieran ser presentados en cualquier tipo de juicio, denuncia, procedimiento, controversia, iniciado por el acreditado; tampoco comprende la elaboración de documentos y/o escritos en cualquier juicio, denuncia, procedimiento, controversia en el cual hubiera sido emplazado, demandado o llamado a juicio bajo cualquier figura procesal el acreditado.
                            </p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Actos, hechos u omisiones que sean contrarios al Derecho, a las buenas prácticas profesionales o comerciales, a la moral o las buenas costumbres.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Todo aquello sin limitación alguna que sea contrario a derecho, no se encuentre estrictamente apagado a las legislaciones, disposiciones o normativas aplicables y vigentes en territorio Nacional.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cuando no se proporcione información veraz y oportuna para atender debidamente el asunto, o bien, por incurrir en información falsa.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Representación legal presencial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cualquier acto tendiente a la comisión de cualquier tipo de fraude.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cualquier acto, hecho u omisión que requiera alguno de los servicios que se detallan en el condicionado de este documento en el extranjero.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El presente SERVICIO queda limitado únicamente al acreditado titular de la membresía cuando se trate de asuntos relacionados con temas de divorcio, alimentos, guarda y custodia cuando el cónyuge sea parte contraria en estos asuntos.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cualquier gasto, gratificación, pago judicial o extrajudicial diferente al pago de honorarios del abogado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cualquier orientación legal sobre materias no especificadas en este documento.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Por tratarse de un tema de conflicto de intereses, entre el titular de la membresía y los posibles acreditados, la asesoría y representación en materia familiar para el caso de divorcio, pensión alimenticia, guardia y custodia, el servicio únicamente será proporcionado para el titular de la membresía.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        Este servicio estará disponible las 24 horas del día, los 365 días del año. La llamada o video conferencia tendrá una duración máxima de treinta minutos.
                    </p>
                    <p class="__terms-purchase-text">
                        La video-consulta puede realizarse desde cualquier dispositivo móvil (celular, Tablet) o PC que cuente con una cámara frontal y conexión de datos (preferentemente Wi-Fi) por medio la plataforma digital que opera SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        El acreditado deberá de comunicarse a la línea de atención y en caso de requerir video consulta médica, se le hará llegar a su correo o a su celular una liga de la plataforma que opera SSIST con los datos para acceder a la video consulta.
                    </p>

                </article>
            </section> 
    `;
	}
}

customElements.define("page-viajero-protegido", PageViajeroProtegido);
