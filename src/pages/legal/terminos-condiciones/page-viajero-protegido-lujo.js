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

class PageViajeroProtegidoLujo extends HTMLElement {
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
                <app-section-title section-title="Términos y condiciones LUJO"></app-section-title>
            </section>

            <section class="__sections __btn-group-pages">
                <div>
                    <a class="btn-enable" href="../../../servicios/viajero-protegido.html" class="__btn">Servicio Basico</a>
                    <a class="btn-disable" class="__btn">Servicio Lujo</a> 
                    <a class="btn-enable" href="../../../servicios/viajero-protegido-plus.html" class="__btn">Servicio de Plus</a> 
                </div>

                <h3 class="__title__section">Condiciones Generales IAMSA Básico</h3>
            </section>

            <section class="__sections">
                <article class="__bg-blue">


                    <h3 class="__subtitle-section">SEGUROS</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>
                    <h3 class="__subtitle-section">MUERTE ACCIDENTAL</h3>
                    <p class="__terms-purchase-text">
                        Fallecimiento a consecuencia de un accidente sufrido por el pasajero durante el viaje y dentro de los noventa (90) días naturales siguientes a la fecha de este, en cuyo caso la compañía pagará el importe de la suma asegurada contratada a los beneficiarios designados.
                    </p>
                    <p class="__terms-purchase-text">
                        De la suma asegurada anterior, se deducirá cualquier cantidad pagada con anterioridad al pasajero por prestaciones amparadas por la cobertura de Pérdidas Orgánicas de esta póliza, cuando dichas pérdidas hayan sido por el mismo accidente que provocó la muerte.
                    </p>
                    <p class="__terms-purchase-text">
                        Edad mínima de aceptación para este beneficio: 12 años.
                    </p>
                    <p class="__terms-purchase-text">
                        Requisitos: Acta de defunción, denuncia ante las autoridades, identificación oficial del pasajero y sus beneficiarios.
                    </p>
                    <p class="__terms-purchase-text">
                        Requisitos: Acta de defunción, denuncia ante las autoridades, identificación oficial del pasajero y sus beneficiarios.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>
                    <h3 class="__subtitle-section">Exclusiones:</h3>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accidentes de tránsito no reportados a las autoridades.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Por culpa o accidente al encontrarse bajo los efectos del alcohol, drogas o medicamentos
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Enfermedades o deficiencias mentales, trastornos de la personalidad.
                            </p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Infección, envenenamiento o por inhalación de humos, gases, excepto por un accidente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Lesiones provocadas intencionalmente por el pasajero, suicidio o su intento.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accidentes, lesiones o muerte que ocurran cuando el pasajero se encuentre como piloto, mecánico o miembro de la tripulación de una línea aérea, marítima o terrestre, que no sea de una empresa concesionada de transporte público de pasajeros sobre una ruta establecida normalmente y sujeta a itinerarios regulares.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accidentes, lesiones o muerte del pasajero cuando esté como ocupante o piloto de algún automóvil o cualquier otro vehículo de carreras, pruebas o contiendas de seguridad, resistencia o velocidad excepto que participe como espectador.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Lesiones sufridas en servicio militar de cualquier clase, en riñas cuando él es el provocador, actos de rebelión, delictivos, de insurrección o manifestaciones violentas en las que participe el pasajero en forma directa
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Lesiones que sufra el pasajero mientras se encuentre realizando actividades de paracaidismo, buceo, futbol americano, alpinismo, montañismo, boxeo, lucha, charrería, esquí, tauromaquia, deporte aéreo, artes marciales, equitación, espeleología, rugby y rapel ya sea de manera amateur o profesional
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Enfermedades preexistentes a la contratación de la póliza.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cuando el pasajero se transporte en motocicleta como conductor o acompañante.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La invalidez total y permanente a consecuencia por cualquier enfermedad.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">PERDIDAS ORGÁNICAS ESCALA “A”</h3>
                    <p class="__terms-purchase-text">
                        En caso de que el pasajero sufra cualquiera de las pérdidas orgánicas estipuladas en la tabla de indemnizaciones contratada, a consecuencia de un accidente cubierto y dentro de los 90 días siguientes a la ocurrencia de este, se indemnizará con base en el porcentaje de suma asegurada indicado en la tabla de indemnizaciones.
                    </p>
                    <p class="__terms-purchase-text">
                        Requisitos: Acta de hechos, identificación oficial del pasajero e informe médico más los estudios practicados
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>

                    <h3 class="__subtitle-section">INVALIDEZ TOTAL Y PERMANENTE POR ACCIDENTE</h3>
                    <p class="__terms-purchase-text">
                        En caso de que el pasajero sufra una invalidez total y permanente a consecuencia de un accidente cubierto, cuyo estado se dictamine dentro de los noventa (90) días naturales siguientes a la fecha de este, la compañía pagará al pasajero el importe de la suma asegurada contratada.
                    </p>
                    <p class="__terms-purchase-text">
                        Los límites de edad que aplican son: mínimo 15 años y máximo 64 años 11 meses Requisitos: Identificación oficial del pasajero, dictamen de invalidez total y permanente emitido por una Institución de Seguridad Social o médico especialista en medicina del trabajo con cédula profesional, certificados y especialistas en la materia, así como todos los exámenes, análisis y documentos que sirvieron de base para determinar su invalidez total y permanente, mismo que será evaluado por un médico especialista en la materia certificado por el Consejo de la Especialidad de Medicina del Trabajo
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Condiciones:
                    </p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El equipaje se haya perdido definitivamente o dañado o haya sido robado en el trayecto y durante el traslado regular.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El equipaje haya sido registrado y despachado por la empresa transportista.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La empresa transportista comercial haya reconocido por escrito la pérdida definitiva o robo del equipaje.
                            </p>
                        </li>
                    </ul>
                    <p class="__terms-purchase-text">
                        Requisitos: Carta por parte de IAMSA/GHO avalando el siniestro.
                    </p>


                    <h3 class="__subtitle-section">PÉRDIDA, ROBO O DAÑO DE EQUIPAJE REGISTRADO</h3>
                    <p class="__terms-purchase-text">
                        En caso de que se sufra robo total, pérdida definitiva o daño del equipaje registrado durante el traslado cubierto, se coordinará el pago al pasajero de la suma asegurada establecida en la póliza
                    </p>
                    <p class="__terms-purchase-text">
                        Condiciones:
                    </p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El equipaje se haya perdido definitivamente o dañado o haya sido robado en el trayecto y durante el traslado regular.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El equipaje haya sido registrado y despachado por la empresa transportista
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La empresa transportista comercial haya reconocido por escrito la pérdida definitiva o robo del equipaje.
                            </p>
                        </li>
                    </ul>
                    <p class="__terms-purchase-text">
                        Requisitos: Contra-ticket de la maleta de viaje cuando va en el maletero del autobús y carta responsiva de la línea de autobús.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Exclusiones:
                    </p>
                    <p class="__terms-purchase-text">
                        La Compañía en ningún caso será responsable por pérdidas y/o daños a los bienes materiales del seguro por:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pérdidas o Robos Parciales
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Daños estéticos o funcionales al equipaje registrado.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Desaparición o extravío. (No se tomará en consideración el valor real del equipaje extraviado.)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las reclamaciones posteriores a 12 horas después de que el Asegurado llegó a su destino.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Equipaje cuando haya sido enviado como: flete o mensajería.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Con anterioridad a la fecha prevista de salida del viaje del Asegurado e indicado en el boleto de transporte emitido por la empresa transportista comercial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pérdida o robo total del equipaje registrado. No tienen cobertura los siguientes bienes (La enumeración es taxativa y no enunciativa):
                            </p>
                        </li>

                        <ol type="a" class="__terms-purchase-list">

                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Arpas, piano, equipo de paintball, alfombras y tapetes, animales de cualquier especie, artículos que se presuman para reventa y/o comercio, salvo prueba en contrario y que no sean de uso personal, audífonos, prótesis auditivas, dientes artificiales, dentaduras, accesorios médicos y dentales y aparatos ortopédicos, anteojos y lentes de contacto, bicicletas, tablas de snowboard y esquís, cheques, cheques de viajero, billetes de banco monedas, títulos, órdenes postales, timbres postales o fiscales letras, pagarés, cupón prepago, boletos de viaje, boletos de entrada a eventos de entretenimiento, obligaciones o documentos de cualquier clase, libros de contabilidad y libros de comercio, así como contenidos en general de cajas fuertes, bóvedas o cajas registradoras, pasaportes, visa, documentos de identidad personal, boletos de transporte, actas y otros documentos como escrituras, dinero en efectivo, tarjetas de crédito, tarjetas de débito, tarjetas de pago, valores negociables, oro, plata, sellos y llaves, sillas de ruedas, carriolas, bastones y otros dispositivos de movilidad, en razón de que se entiende que estos artículos se requieren para la movilidad del Asegurado y no se consideran bienes que deban estar por su naturaleza contenidos en el equipaje registrado, vehículos de locomoción, motocicletas, accesorios de motocicletas y motores, aviones, barcos y en general todo medio de transporte que permita el traslado de un lugar a otro de personas o cosas. Pasaportes, visa, documentos de identidad personal, boletos de transporte, actas y otros documentos como escrituras, dinero en efectivo, tarjetas de crédito, tarjetas de débito, tarjetas de pago, valores negociables, oro, plata, sellos y llaves. Sillas de ruedas, carriolas, bastones y otros dispositivos de movilidad, debido a que se entiende que estos artículos se requieren para la movilidad del Asegurado y no se consideran bienes que deban estar por su naturaleza contenidos en el equipaje registrado. Vehículos de locomoción, motocicletas, accesorios de motocicletas y motores, aviones, barcos y en general todo medio de transporte que permita el traslado de un lugar a otro de personas o cosas.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Las mercancías y el material de uso profesional, la moneda, los billetes de banco, billetes de viaje, colecciones de sellos, títulos de cualquier naturaleza, documentos de identidad y en general, todo documento y valores en papel, tarjetas de crédito, cintas, discos y o portadores de datos o con memoria, documentos registrados en bandas magnéticas o filmados, colecciones y material de carácter profesional, prótesis, animales, plantas, dientes postizos o puentes dentales, equipo deportivo, objetos de arte, equipaje no registrado con la empresa transportista comercial, salvo que se trate de equipaje de mano, conforme al inciso c"" robo de equipaje de mano de la presente sección.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cualquier objeto de valor y/o equipo electrónico y/o de cómputo, dispositivos electrónicos identificados como «gadgets», «wearables», «pocket» o de bolsillo y sus accesorios como celulares, tabletas, laptops, videojuegos o cámara y/o equipo electrónico, salvo que se tenga contratado conforme al inciso "c" robo de equipaje de mano de la presente sección y siempre y cuando se lleve como equipaje de mano. "c" Saqueo del equipaje registrado de la presente sección.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cualquier tipo de robo sin violencia, extravío o demora del equipaje si no se encuentra bajo custodia de la empresa transportista comercial y/o proveedor del hospedaje. Está exclusión no opera para el inciso "c" Robo de equipaje de mano de la presente sección.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    La pérdida, extravío u olvido, robo sin violencia y demora del equipaje causado por cualquier tipo de negligencia del Asegurado.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    La demora del equipaje cuando se produzca en el viaje de regreso al lugar de residencia permanente del Asegurado.
                                </p>
                            </li>
                        </ol>
                    </ol>

                    <h3 class="__subtitle-section">ROBO DE EQUIPAJE DE MANO</h3>
                    <p class="__terms-purchase-text">
                        Se indemnizará mediante reembolso y hasta por el total de la suma asegurada contratada, en caso de un robo del equipaje de mano, incluyendo equipo electrónico y/o de cómputo, dispositivos electrónicos identificados como «gadgets», «wearables», «pocket» o de bolsillo y sus accesorios como celulares, tabletas, laptops, videojuegos, entre otros dentro de su equipaje de mano.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Exclusiones.</strong>
                    </p>

                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pasaportes, visa, documentos de identidad personal, boletos de transporte, actas y otros documentos como escrituras, dinero en efectivo, tarjetas de crédito, tarjetas de débito, tarjetas de pago, valores negociables, oro, plata, sellos y llaves.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                De dinero en efectivo contenido en el Bolso.
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

                    <h3 class="__subtitle-section">Exclusiones:</h3>
                   
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si la enfermedad es de origen y manifestación sintomática anterior «preexistente» al inicio de la vigencia del seguro contratado por el Asegurado, así como también sus consecuencias y agudizaciones. Salvo en el caso especificado en el inciso B de esta sección.
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
                                Las enfermedades mentales, trastornos psiquiátricos, depresiones o por cualquier tipo de enfermedad mental o nerviosa. Asistencia psicológica de esta sección.
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

                    <h3 class="__subtitle-section">RC MASCOTAS</h3>

                    <p class="__terms-purchase-text">
                        Ampara los gastos por los que resulte civilmente responsable el pasajero ante un tercero a consecuencia de hechos realizados sin dolo, ya sea por culpa en el cuidado, vigilancia o por agresividad de la mascota asegurada, siempre y cuando los hechos hayan ocurrido durante el periodo cubierto.
                    </p>
                    <p class="__terms-purchase-text">
                        Requisitos: Carta reclamación emitida por el tercero afectado, carta reclamación del pasajero, ambas debidamente cuantificadas e indicando la fecha del suceso y en caso de haberse presentado la denuncia ante las autoridades.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje. Exclusiones:</strong>
                    </p>
                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Actos del asegurado realizados con la intención de que la mascota produzca un daño a terceros.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Daños no causados por la Mascota. Daño Moral Consecuencial y/o Perjuicio Consecuencial general.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Daños que la Mascota pudiera ocasionar a familiares o personas con las que el Asegurado tenga algún parentesco.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sanciones, multas o cualquier tipo de amonestación que el Asegurado tenga por la falta de vigilancia de la Mascota.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">CANCELACIÓN DE VIAJE</h3>

                    <p class="__terms-purchase-text">
                        Opera desde la compra del pasaje hasta el momento de inicio del viaje para el ticket comprado y cubre:
                    </p>
                    <p class="__terms-purchase-text">
                        Cancelación de viaje, antes de iniciarlo
                    </p>
                    <p class="__terms-purchase-text">
                        Gastos no reembolsables por concepto de cualquier transporte, tour, excursión y/u hospedaje pagado que no hubieren sido utilizados y que sean irrecuperables
                    </p>
                    <p class="__terms-purchase-text">
                        Cancelaciones realizadas por el pasajero el mismo antes de la fecha de inicio del viaje pasajero
                    </p>
                    <p class="__terms-purchase-text">
                        Sujeto a los siguientes motivos que impidan al pasajero realizar el viaje:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Fallecimiento, accidente o enfermedad grave o emergencia médica, o cirugía de emergencia, o la aparición de una enfermedad no preexistente a la contratación de la cobertura.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accidente del pasajero o familiares, que supongan al menos 24 horas de hospitalización o incapacidad temporal durante los diez (10) días previos al viaje y posteriores a la contratación de la cobertura.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cancelaciones que resulten de clima adverso.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Huelgas que afecten el transporte público por más de 72 horas, tales que impidan al pasajero realizar el viaje
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pérdida o Daño a propiedad del pasajero debido a un incendio, explosión, tormenta, granizo, caída de rayo, inundación, avalancha, erupción volcánica, terremoto, deslave o crimen perpetrado por un tercero
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pérdida de empleo del pasajero como resultado de un despido por parte del empleador.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La incorporación del pasajero a un nuevo puesto de trabajo con contrato laboral.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traslado geográfico del puesto de trabajo que implique un cambio de residencia habitual del pasajero.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La aplicación de exámenes escolares que deba presentar el pasajero para avanzar al siguiente año escolar y/u obtener una constancia de estudios.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La declaración oficial de zona catastrófica en su lugar de residencia o en el lugar de destino del viaje o de tránsito al destino.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si antes de iniciar el viaje pasajero y posterior a la contratación de la póliza, el embarazo de la titular, o cónyuge o concubina presenta complicaciones las cuales sean sustentadas con el soporte médico correspondiente.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El robo o extravío dentro de las 48 horas antes de su partida de documentos de identificación oficial necesarios para abordar.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Por error u omisión por parte de las autoridades que emitan visados y permisos para el ingreso al destino correspondiente y que funjan como documento de identidad necesario para realizar el viaje al momento de abordar.
                            </p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Una contraindicación de la vacunación, la secuela de la vacunación o la imposibilidad médica de seguir un tratamiento preventivo necesario para el destino de su viaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Por un accidente del medio de transporte o en su trayecto hacia el aeropuerto, muelle o puerto, estación de ferrocarril o de autobuses, que resulte en una demora de más de 2 horas.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cancelación de la ceremonia religiosa o civil de matrimonio del pasajero.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Entrega en adopción de un menor al pasajero.
                            </p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Requerimiento judicial de comparecencia, como demandado, actor, testigo o jurado del pasajero.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Convocatoria para presentar y/o firmar documentos oficiales a requerimiento de organismos de la Administración Pública.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Convocatoria al pasajero para prestar un servicio médico o público por parte de las autoridades locales competentes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Costos adicionales generados en caso de que algún compañero/a de viaje cancele el viaje por alguno de los riesgos cubiertos, y el pasajero decida realizar el viaje existiendo un costo extra en el precio de alojamiento por persona al contratado.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        <strong>Cobertura aplicable únicamente si el siniestro ocurre durante al viaje.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Exclusiones:
                    </p>

                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si a la fecha de contratación de la cobertura no ha quedado completamente pagado el viaje o por adeudos a la agencia de viajes y/o proveedor de viajes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Si el pasajero y/o su (s) acompañante (s) de viaje presentan:
                            </p>
                        </li>
                        <ol type="a" class="__terms-purchase-list">

                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Una contraindicación médica para realizar el viaje.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Intento de suicidio o participación en cualquier acto delictivo de manera activa.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Estado de embriaguez, drogadicción o encontrarse bajo estupefacientes no recetados bajo la supervisión de un médico.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Prohibiciones legales o por estar privado o limitado de su libertad por parte de las autoridades competentes.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    La realización de tratamientos médicos u odontológicos no catalogados como emergencia médica y tratamientos de rehabilitación de cualquier índole.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Enfermedades o lesiones preexistentes a la contratación de la cobertura siempre y cuando la contratación de esta se haya realizado 48 horas antes de iniciar el viaje.
                                </p>
                            </li>
                        </ol>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">DESCRIPCIÓN DE LAS ASISTENCIAS.</h3>
                    <h3 class="__subtitle-section">ASISTENCIA MUJER SEGURA.</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_2_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">ASISTENCIA LEGAL POR MALTRATO A LA MUJER</h3>

                    <p class="__terms-purchase-text">
                        Se brindará asesoría legal telefónica por maltrato a la mujer a través de un profesional en derecho, cuando se trate de actos, hechos, servicios o productos que se encuentren debidamente comprendidos en las legislaciones y normativas aplicables a las distintas ramas y materias del derecho.
                    </p>
                    <p class="__terms-purchase-text">
                        La asistencia comprenderá entre otras:
                    </p>
                    <p class="__terms-purchase-text">
                        Asesoría sobre documentos legales.
                    </p>
                    <p class="__terms-purchase-text">
                        Procesos de sucesión.
                    </p>
                    <p class="__terms-purchase-text">
                        Derechos de lo familiar.
                    </p>
                    <p class="__terms-purchase-text">
                        Seguros y beneficios.
                    </p>
                    <p class="__terms-purchase-text">
                        Responsabilidades legales.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">BOTÓN DE PÁNICO</h3>

                    <p class="__terms-purchase-text">
                        Esta asistencia se encuentra integrada en una Web App con los siguientes beneficios: Activación Rápida: Un clic o atajo de teclado.
                    </p>
                    <p class="__terms-purchase-text">
                        Envío de Alerta: Notificación con ubicación, datos del usuario y motivo de emergencia. Respuesta Inmediata: Llamada, chat en vivo o mensaje automático.
                    </p>
                    <p class="__terms-purchase-text">
                        Casos de Uso: Seguridad personal en caso de acoso Extras: Contactos de emergencia, monitoreo en tiempo real, función de desactivación segura.
                    </p>
                    <p class="__terms-purchase-text">
                        Sin duda se trata de una solución rápida y efectiva en situaciones críticas.
                    </p>
                    <p class="__terms-purchase-text">
                       <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>         
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">SERVICIOS DE EMERGENCIA.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_3_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">ENVIÓ DE MÉDICO A DOMICILIO POR EMERGENCIA.</h3>

                    <p class="__terms-purchase-text">
                        Coordinación de consulta médica con un médico general; el médico designado por SSIST acudirá al domicilio del acreditado a efecto de realizar la consulta médica. Este servicio estará disponible las 24 horas del día, los 365 días del año.
                    </p>
                    <p class="__terms-purchase-text">
                        El médico general realiza la auscultación general con fines de diagnóstico físico, esto sin realizar algún tipo de procedimiento que implique equipamiento quirúrgico como curación, inyección, sonda, cateterismo o suturar. Este servicio deberá ser coordinado desde un inicio por SSIST. No aplican reembolsos.
                    </p>
                    <p class="__terms-purchase-text">
                        El cliente referido podrá cancelar la cita con el médico general con un mínimo de 48 horas de anticipación a la cita coordinada. En el caso de que el cliente referido no cancele la cita dentro de dicho periodo o no acuda a la cita coordinada por SSIST, se considerará como un servicio prestado y se aplicará el número de eventos a que tenga derecho.
                    </p>
                    <p class="__terms-purchase-text">
                        NO TOME LA INFORMACIÓN DE LOS SERVICIOS COMO CONSEJOS MÉDICOS Y/O DE SALUD. NINGUNA INFORMACIÓN SUMINISTRADA POR LOS SERVICIOS PRETENDE SER UN SUSTITUTO DE LA ATENCIÓN ADECUADA DE LOS PROFESIONALES DE LA SALUD, INCLUYENDO EL DIAGNÓSTICO Y TRATAMIENTO DE CONDICIONES MÉDICAS. NO DEJE DE BUSCAR AL PROFESIONAL MÉDICO, NI DESMIENTA ALGÚN CONSEJO RECIBIDO ANTERIORMENTE POR INFORMACIÓN OBTENIDA POR MEDIO DE LOS SERVICIOS. EN CASO DE QUE UN ACREDITADO UTILICE LA INFORMACIÓN DE ALGÚN SERVICIO, LO HACE EXPRESAMENTE BAJO SU PROPIO RIESGO Y RESPONSABILIDAD.
                    </p>
                    <p class="__terms-purchase-text">
                       <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>     
                    </p>
                    <p class="__terms-purchase-text">
                        La llamada tendrá una duración máxima de treinta minutos, transcurrido dicho término se cortará la comunicación sin responsabilidad para SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        NO TOME LA INFORMACIÓN DE LOS SERVICIOS COMO CONSEJOS MÉDICOS Y/O DE SALUD. NINGUNA INFORMACIÓN SUMINISTRADA POR LOS SERVICIOS PRETENDE SER UN SUSTITUTO DE LA ATENCIÓN ADECUADA DE LOS PROFESIONALES DE LA SALUD, INCLUYENDO EL DIAGNÓSTICO Y TRATAMIENTO DE CONDICIONES MÉDICAS. NO DEJE DE BUSCAR AL PROFESIONAL MÉDICO, NI DESMIENTA ALGÚN CONSEJO RECIBIDO ANTERIORMENTE POR INFORMACIÓN OBTENIDA POR MEDIO DE LOS SERVICIOS. EN CASO DE QUE UN ACREDITADO UTILICE LA INFORMACIÓN DE ALGÚN SERVICIO, LO HACE EXPRESAMENTE BAJO SU PROPIO RIESGO Y RESPONSABILIDAD.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">ENVIÓ DE AMBULANCIA POR EMERGENCIA.</h3>

                    <p class="__terms-purchase-text">
                        En caso de que el acreditado o algún familiar directo sufra un accidente o enfermedad, y/o requiera ser trasladado a un centro hospitalario por emergencia, se coordinará el envío de una ambulancia básica terrestre para ser trasladado al nosocomio más cercano de su elección.
                    </p>
                    <p class="__terms-purchase-text">
                        En caso de que el cliente solicite una ambulancia especial (traslado, COVID, especializada) se cotizará y se brindará el costo al Acreditado. Servicio disponible las 24 horas del día los 365 días del año. El servicio deberá ser coordinado desde un inicio por SSIST para hacer válido el beneficio se entenderá por emergencia: Situación que pone en peligro la vida, la viabilidad de alguno de los órganos o la integridad corporal del beneficiario, para la cual requiere una atención médica inmediata.
                    </p>
                    <p class="__terms-purchase-text">
                        El servicio de ambulancia por emergencia consistirá en una unidad móvil de urgencias básicas, contará con un conductor y un técnico en urgencias médicas a bordo y equipamiento necesario que marca la NOM34.
                    </p>

                    <p class="__terms-purchase-text">
                        El personal técnico en urgencias médicas, del nivel básico, contará con conocimientos de reanimación cardiopulmonar básica, anatomía y fisiología elemental, levantamientos, movilizaciones, inmovilización y empaquetamiento del paciente, manejo básico de la vía aérea, evaluación y exploración, identificación y manejo de problemas de trauma (hemorragias, estado de choque, tejidos blandos, sistema muscular y esquelético, cabeza y columna vertebral), farmacología elemental, identificación y manejo de problemas médico clínicos (urgencias respiratorias, cardiovasculares, diabéticas, alérgicas, ambientales, obstétricas, conductuales y envenenamientos), vías de administración de medicamentos bajo supervisión médica (subcutánea, oral, inhalación), operación general de ambulancias, sistemas de comunicación, manejo inicial de incidentes con materiales peligrosos, técnicas básicas de rescate, selección y clasificación de los beneficiarios, e interacción con aeronaves. De la unidad: La Ambulancia de urgencias básicas, será la unidad móvil, terrestre, destinada al servicio de pacientes que requieren atención médica prehospitalaria, mediante soporte básico de vida.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST, no será responsable de cualquier complicación que se pueda presentar con el traslado médico, ni de resultado alguno, sin embargo, SSIST, coadyuvará con el beneficiario, a fin de reclamar la responsabilidad del tercero que deba asumir la responsabilidad.
                    </p>
                    <p class="__terms-purchase-text">
                        Se considera únicamente un traslado al hospital más cercano, en caso de que no exista disponibilidad y el beneficiario tenga que ser trasladado a otro hospital, se considerará como un segundo evento y el costo adicional será cubierto por el beneficiario.
                    </p>

                    <p class="__terms-purchase-text">
                        En caso de que el servicio de ambulancia tenga que esperar a que el paciente sea ingresado o esté en esperando a que se le dé de alta para el egreso del hospital, o por cualquier circunstancia ajena al proveedor del servicio, el beneficiario tendrá que pagar directamente al proveedor la hora adicional por cada hora de espera, costo que se le comunicará en el momento a el beneficiario.
                    </p>
                    <p class="__terms-purchase-text">
                        En caso de que el beneficiario cuente con sobrepeso y por tanto requiera para su traslado de una ambulancia de dimensiones mayores a las comunes deberá pagar directamente al proveedor de los servicios de ambulancia, el cargo adicional generado por este requerimiento especial.
                    </p>
                    <p class="__terms-purchase-text">
                        El servicio de asistencia de ambulancia no aplica para casos por la enfermedad pandémica por COVID-19, fiebre del mono o cualquier otra enfermedad pandémica, la cual se cotizará por aparte al beneficiario y tendrá que ser cubierta de conformidad con la cotización que se realice en el momento.
                    </p>

                    <p class="__terms-purchase-text">
                        SSIST, no es responsable de los servicios proporcionados por los proveedores, ni de las funciones realizadas por estos, siendo el proveedor de servicio el responsable directo, en caso de cualquier queja, reclamación o demanda, siendo que el servicio que presta SSIST es únicamente de coordinación y gestión de envío de los proveedores, por lo que SSIST, coadyuvará en todo momento al acreditado para la solución ante el proveedor.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                
                    <h3 class="__subtitle-section">Exclusiones:</h3>

                    <ol type="a" class="__terms-purchase-list">
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
                                Rescate o aquellas situaciones en las que el Acreditado se encuentre bajo circunstancias que le obstaculicen o impidan el acceso o que pongan en peligro la vida de las personas que pudiesen proporcionarle los servicios de asistencia, por encontrarse en lugares o zonas remotos, inaccesibles, de muy difícil y peligroso acceso, o muy lejanos a una población o vía donde pueda circular con seguridad y adecuadamente una ambulancia, así como cualquier lugar o terreno cuya morfología o circunstancias exijan el concurso de especialistas en rescate de cualquier tipo.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        A continuación, se expresan de forma enunciativa más no limitativa, algunos ejemplos: bosques, selvas, caminos, desiertos, montañas, mares, lagos, presas, ríos, playas, etc., sitios alejados de carreteras y poblaciones, así como barrancos, cuevas, laderas, picos y cimas de cerros, montañas, sierras, plataformas petroleras, barcos, yates y demás Accidentes del terreno o lugar.
                    </p>
                    <p class="__terms-purchase-text">
                        La falta de la autorización expresa para el traslado del Acreditado, en servicios programados por parte del Médico tratante, que certifique su estabilidad clínica.
                    </p>
                    
                    <ol type="a" class="__terms-purchase-list">
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

                    <h3 class="__subtitle-section">ASISTENCIA ODONTOLÓGICA POR EMERGENCIA</h3>

                    <p class="__terms-purchase-text">
                        En caso de que el usuario sufra un accidente que requiera la intervención inmediata de un médico odontólogo, SSIST coordinará y brindará apoyo económico por hasta $2,500 al usuario para cubrir los gastos derivados de dicho evento. El excedente de tal servicio deberá ser cubierto por el usuario; eventos subsecuentes, se brindarán con precio preferencial. Atención telefónica las 24 horas del día, los 365 días de año.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">ASISTENCIA FUNERARIA.</h3>

                    <p class="__terms-purchase-text">
                        En caso de deceso, se ampara al acreditado, por causas naturales o derivado de un accidente, en las agencias de inhumaciones o agencias integrantes de la red de asistencia funeraria de SSIST la cual comprende los siguientes servicios:
                    </p>

                    <ol type="1" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Atención personalizada las 24 horas los 365 del año, a través del Centro De Atención Telefónica.
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
                            <ol type="a" class="__terms-purchase-list">
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
                                Embalsamamiento (aplica a petición del Acreditado)
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
                                Cremación y entrega de urna básica (en caso de contar con los SERVICIOS en el área correspondiente del interior de la República Mexicana). (Siempre y cuando la autoridad lo permita)
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
                                Exhumación de restos áridos
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
                                Traslados foráneos (trámites, fletes terrestres o aéreos) .
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
                                Traslados Internacionales
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Servicio de Cafetería
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
                                El peso máximo soportado por un ataúd básico para esta cobertura es de 100 kg, en caso de que el acreditado exceda dicho peso, se buscará un ataúd de diferente para proporcionar el servicio siempre y cuando no rebase el costo cubierto
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Suicidio.
                            </p>
                        </li>
                    </ol>
                    <p class="__terms-purchase-text">
                        En caso de fallecimiento derivado de un accidente o muerte natural, dictaminado por un veterinario titulado con firma autógrafa en original, se llevará a cabo la cremación de la mascota, aplicables solo con la red de proveedores de SSIST. El evento deberá de ser coordinado desde un inicio con SSIST. No aplica reembolso.
                    </p>
                    <p class="__terms-purchase-text">
                        Los accidentes cubiertos son: atropellamiento, lesiones por ataques de otras mascotas o animales, traumatismos o lesiones sufridos por accidentes, caídas, y lesiones por acción violenta súbita y externa.
                    </p>
                    <p class="__terms-purchase-text">
                        Al momento de solicitar el servicio de sacrificio de mascota, el usuario deberá contar con la carta emitida por el veterinario donde indique el causal del accidente y cédula profesional.
                    </p>
                    <p class="__terms-purchase-text">
                        El tiempo de atención del servicio estará sujeto a la disponibilidad de los crematorios de mascotas.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">ASISTENCIAS MÉDICAS.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">ASISTENCIA MEDICA TELEFÓNICA.</h3>

                    <p class="__terms-purchase-text">
                        Se le brindará asesoría telefónica a través de un médico general cuando el acreditado y/o familiar directo requiera orientación médica por un padecimiento no urgente (embarazo, COVID, planificación familiar y anticonceptivos, alcoholismo y farmacodependencia, así como del uso de medicamentos prescritos por un médico tratante, efectos secundarios de medicamentos, y dosis recomendadas). Asimismo, se elaborará el expediente clínico del acreditado. Servicio disponible las 24 horas del día, los 365 días del año, sin límite de eventos. El servicio deberá ser coordinado desde un inicio por SSIST para hacer válido el beneficio.
                    </p>
                    <p class="__terms-purchase-text">
                        El servicio no cubre ningún gasto médico generado. Con el fin de respetar las buenas prácticas de la medicina, el médico de cabina en ningún caso y por ningún motivo recetará medicamentos ni podrá dar diagnostico alguno. No aplica reembolso.
                    </p>
                    <p class="__terms-purchase-text">
                        El personal que atiende esta asistencia son únicamente médicos titulados con cédula profesional, con experiencia en atención médica de primer contacto, normas éticas en medicina y con experiencia en identificación de situaciones que requieren otro nivel de atención.
                    </p>
                    <p class="__terms-purchase-text">
                        Este servicio estará disponible las 24 horas del día, los 365 días del año. La llamada tendrá una duración máxima de treinta minutos, transcurrido dicho término se cortará la comunicación sin responsabilidad para SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        NO TOME LA INFORMACIÓN DE LOS SERVICIOS COMO CONSEJOS MÉDICOS Y/O DE SALUD. NINGUNA INFORMACIÓN SUMINISTRADA POR LOS SERVICIOS PRETENDE SER UN SUSTITUTO DE LA ATENCIÓN ADECUADA DE LOS PROFESIONALES DE LA SALUD, INCLUYENDO EL DIAGNÓSTICO Y TRATAMIENTO DE CONDICIONES MÉDICAS.
                    </p>
                    <p class="__terms-purchase-text">
                        NO DEJE DE BUSCAR AL PROFESIONAL MÉDICO, NI DESMIENTA ALGÚN CONSEJO RECIBIDO ANTERIORMENTE POR INFORMACIÓN OBTENIDA POR MEDIO DE LOS SERVICIOS. EN CASO DE QUE UN ACREDITADO UTILICE LA INFORMACIÓN DE ALGÚN SERVICIO, LO HACE EXPRESAMENTE BAJO SU PROPIO RIESGO Y RESPONSABILIDAD.                     </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia.</strong>
                    </p>

                    <h3 class="__subtitle-section">RED DE DESCUENTOS MÉDICOS.</h3>

                    <p class="__terms-purchase-text">
                        El acreditado tendrá acceso a la red de proveedores médicos en convenio con SSIST quienes le otorgarán descuentos en farmacias, clínicas, laboratorios y hospitales, que van desde un 5% (cinco por ciento) hasta un 30% (treinta por ciento). Servicio disponible las 24 horas del día los 365 días del año, sin límite de eventos.
                    </p>
                    <p class="__terms-purchase-text">
                        El servicio deberá ser coordinado desde un inicio por SSIST para hacer válido el beneficio. No aplica reembolso.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">TELEMEDICINA CON MÉDICO GENERAL O ESPECIALISTA (INTERNISTA, GINECÓLOGO, PEDIATRA Y GASTRO)</h3>

                    <p class="__terms-purchase-text">
                        En caso de enfermedad o emergencia médica, el acreditado podrá tener contacto inmediato, mediante video conferencia con médicos generales, de manera personalizada virtualmente, quienes ayudarán a tomar las medidas necesarias para estabilizar al acreditado y ayudarlo con su malestar.
                    </p>
                    <p class="__terms-purchase-text">
                        El servicio deberá ser coordinado desde un inicio por SSIST para hacer válido el beneficio. El servicio no cubre ningún gasto médico generado.
                    </p>
                    <p class="__terms-purchase-text">
                        En ningún caso, el médico podrá dar un diagnóstico o recetar medicamentos. No aplica reembolso.El personal que atiende esta asistencia son únicamente médicos titulados con cédula profesional, con experiencia en atención médica de primer contacto, normas éticas en medicina y con experiencia en identificación de situaciones que requieren otro nivel de atención.                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>
                </article>
            </section>


            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">ASISTENCIA DE VIAJE Y ORIENTACIÓN LEGAL.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TRASLADO DE UN FAMILIAR POR CONVALECENCIA</h3>

                    <p class="__terms-purchase-text">
                        En caso de que el pasajero viaje sin compañía y fuese hospitalizado por más de cinco días continuos, a consecuencia de algún padecimiento o enfermedad no excluida en estas condiciones generales, la Compañía reembolsará el costo de un boleto terrestre en clase económica de ida y vuelta, hasta el límite máximo de responsabilidad contratado. Es indispensable que el pasajero si su salud lo permite, o algún familiar o representante de él, de aviso de esta situación sin rebasar del plazo de 7 días.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">GASTOS DE HOTEL POR CONVALECENCIA</h3>

                    <p class="__terms-purchase-text">
                        SSIST gestionará y cubrirá los gastos necesarios para la prolongación de la estancia en un hotel, inmediatamente después de haber sido dado de alta del hospital, si esta prolongación ha sido prescrita por el médico local y el equipo de SSIST. SSIST gestionará y cubrirá los costos hasta el límite máximo de Hasta $2,500 M.N. y/o hasta 7 días. Atención telefónica las 24 horas, los 365 días del año.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">CONCIERGE Y ASESORIA EN VIAJES, RESERVACIONES EN HOTEL Y REDES DE DESCUENTO CON RELACION A VIAJES.</h3>

                    <p class="__terms-purchase-text">
                        SSIST le proporcionará referencia e información telefónica, acerca de: agencias de viajes, clima, exhibiciones, tipos de cambio, centros comerciales, exhibiciones, hoteles, restaurantes, museos, galerías, Información de consulados en el extranjero, reservaciones, espectáculos, carteleras, teatros, conciertos, vida nocturna, Orientación en la reposición de pasaporte en caso de robo o pérdida, entre otros. Atención telefónica las 24 horas, los 365 días del año. Ilimitado.
                    </p>
                    <p class="__terms-purchase-text">
                        Acceso ilimitado a nuestra red de descuentos en renta de automóviles, agencias de viajes, hoteles, y muchos otros servicios más. Servicio disponible las 24 horas del día los 365 días del año. Sin límite de eventos.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">ASISTENCIA LEGAL TELEFÓNICA.</h3>

                    <p class="__terms-purchase-text">
                        En caso de que el acreditado requiera de los servicios de un abogado, SSIST brindará asesoría telefónica con abogados titulados especialistas en las diferentes ramas del Derecho, las 24 horas del día, los 365 días del año.
                    </p>
                    <p class="__terms-purchase-text">
                        El personal que atiende esta asistencia son únicamente abogados titulados con cédula profesional, con experiencia en su ramo, y con experiencia en identificación de situaciones que requieren otro nivel de atención y actúan de forma independiente a SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST, no proporciona opiniones legales, consejos jurídicos y/o de otra índole. El abogado únicamente se limitará a brindar una orientación legal en el momento, y ningún contacto con SSIST puede ser usado para hacer preguntas legales y/o jurídicas. Además, SSIST, no actúa como asesor legal, y/o abogado, por lo que no es responsable de la información transmitida entre el beneficiario o proveedor.
                    </p>
                    <p class="__terms-purchase-text">
                        NO TOME LA INFORMACIÓN DE LOS SERVICIOS COMO CONSEJOS LEGALES Y/O JURÍDICOS. NINGUNA INFORMACIÓN SUMINISTRADA POR LOS SERVICIOS PRETENDE SER UN SUSTITUTO DE LA ATENCIÓN ADECUADA DE LOS PROFESIONALES, INCLUYENDO EL ESTUDIO U OPINIÓN, REVISIONES DE EXPEDIENTES DE POSIBLES INICIOS DE INDAGATORIAS PENALES Y/O CIVILES, O ADMINISTRATIVAS. NO DEJE DE BUSCAR UN CONSEJO PROFESIONAL, NI DESMIENTA ALGÚN CONSEJO RECIBIDO ANTERIORMENTE POR INFORMACIÓN OBTENIDA POR MEDIO DE LOS SERVICIOS DE ASISTENCIA. EN CASO DE QUE EL ACREDITADO UTILICE LA INFORMACIÓN DE ALGÚN SERVICIO DE ASISTENCIA, LO HACE EXPRESAMENTE BAJO SU PROPIO RIESGO Y RESPONSABILIDAD.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusiones:</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El presente SERVICIO queda limitado únicamente al acreditado.
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
            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">ASISTENCIA MASCOTA.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TELEVETERINARIA (PERRO Y/O GATO)</h3>

                    <p class="__terms-purchase-text">
                        Se brindará a petición del usuario asistencia telefónica de médicos veterinarios de forma ilimitada, para asesorar en diferentes casos, tales como:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Emergencias
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Salud preventiva
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Nutrición
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Educación y conducta
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Plan de vacunación
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Preconsulta veterinaria
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Salud reproductiva
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Orientación en costo de medicamentos
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        Este servicio estará disponible de lunes a viernes de 9:00 a 19:00 hrs. y sábado de 9:00 a 14:00 hrs.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no te encuentres en tu lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">REGLAMENTACION PARA VIAJES CON MASCOTAS Y ANIMALES DE SERVICIO</h3>

                    <h3 class="__subtitle-section">ORIENTACIÓN PARA TRANSPORTAR MASCOTAS A BORDO DEL AUTOBÚS</h3>

                    <p class="__terms-purchase-text">
                        Los clientes podrán llevar consigo mascotas en la cabina de pasajeros: solo se permitirán perros y gatos cumpliendo los siguientes requisitos:
                    </p>

                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Las mascotas deberán viajar dentro de un contenedor o transportadora rígida tipo Kennel o semirrígida que cumpla las siguientes especificaciones:
                            </p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        El peso máximo de la mascota deberá de ser de 15 kg (incluyendo transportadora), las dimensiones máximas de la transportadora son: 71 cm de largo x 52 cm de ancho x 54 cm de alto, solo se permite una mascota por transportadora. Debe contar con espacio suficiente para que tu mascota esté parada, y pueda moverse y girar de forma natural sin tocar las paredes. Nota: si excede de 15 kg de peso, NO PODRÁ VIAJAR.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Debe contar con espacio suficiente para que tu mascota esté parada, y pueda moverse y girar de forma natural sin tocar las paredes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se deberá presentar cartilla de vacunación con esquema completo de acuerdo a la edad de la mascota, que especifique la fecha de aplicación de la vacuna contra la rabia y la vigencia de la misma. No es necesario la mascota viaje sedada (Consultar a su médico veterinario).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Solo se permitirá trasladar una mascota por pasajero, limitado a 2 mascotas por autobús identificados con la imagen o sujeto a disponibilidad.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                El pasajero deberá llevar consigo un kit de limpieza consistente: pañal o tapete absorbente, trapo, bolsa para deshechos. Será responsabilidad del dueño limpiar completamente los desechos de su mascota.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                La empresa transportará Animales Domésticos braquicéfalos en la cabina de pasajeros cumpliendo con las dimensiones, peso y documentos requeridos, en todos los casos el cliente deberá llenar la carta responsiva correspondiente que especifique que el viaje de la mascota será bajo entera responsabilidad del pasajero debido a la posibilidad de desarrollar el síndrome respiratorio propio de dichas razas.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                No se permitirá viajar en la cabina de pasajeros a perros de razas catalogadas como peligrosas: Pit Bull Terrier, Staffordshire Bull Terrier, American Staffordshire Terrier, Rottweiler, Dogo Argentino, Fila Brasileiro, Tosa Inu y Akita Inu. O también, dependiendo de su complexión física, musculatura, altura y peso. Solo se permitirá su transportación documentada en el compartimiento de equipaje.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Se deberá cubrir el monto establecido para el traslado de la mascota de acuerdo con la temporada: Baja el 75% del valor del asiento; Alta el 100% del valor del asiento, ambos tomando de base la tarifa de adulto.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                En todos los casos se deberá llenar la carta responsiva correspondiente para poder trasladar la mascota.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">REGLAMENTACION PARA VIAJES CON MASCOTAS Y ANIMALES DE SERVICIO</h3>

                    <h3 class="__subtitle-section">ASISTENCIA FUNERARIA MASCOTA (RECOLECCIÓN, CREMACIÓN Y ENTREGA DE CENIZAS)</h3>

                    <p class="__terms-purchase-text">
                        En caso de fallecimiento derivado de un accidente o muerte natural, dictaminado por un veterinario titulado con firma autógrafa en original, se llevará a cabo la cremación de la mascota, aplicables solo con la red de proveedores de SSIST. El evento deberá de ser coordinado desde un inicio con SSIST. No aplica reembolso.
                    </p>

                    <p class="__terms-purchase-text">
                        Los accidentes cubiertos son: atropellamiento, lesiones por ataques de otras mascotas o animales, traumatismos o lesiones sufridos por accidentes, caídas, y lesiones por acción violenta súbita y externa.
                    </p>
                    <p class="__terms-purchase-text">
                        Al momento de solicitar el servicio de sacrificio de mascota, el usuario deberá contar con la carta emitida por el veterinario donde indique el causal del accidente y cédula profesional. El tiempo de atención del servicio estará sujeto a la disponibilidad de los crematorios de mascotas.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>

                    <h3 class="__subtitle-section">PIPETA ANTIPULGAS POST-VIAJE EN CASO DE REQUERIRLA.</h3>

                    <p class="__terms-purchase-text">
                        Este beneficio se otorga post viaje en caso de haber adquirido pulgas.
                    </p>

                    <p class="__terms-purchase-text">
                        Para hacer válido el beneficio debe comunicarse el pasajero a nuestra línea de Atención Mascota Murguía para que acuda con un veterinario de nuestra red para recibir el servicio.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Cobertura: 24 horas antes de iniciar el viaje, siempre y cuando no se encuentre en su lugar de residencia, durante el trayecto y 6 días posteriores hasta llegar al lugar de residencia</strong>
                    </p>
                </article>

            </section>
            
            <section class="__sections">

                <h3 class="__subtitle-section">REGLAMENTACIÓN PARA VIAJES CON MASCOTAS Y ANIMALES DE SERVICIO</h3><br>

                <div id="pets-table-container" class="table-container">
                    <app-table-pets id="pets-table"></app-table-pets>
                </div>

            </section>

    `;
		this.loadAndSetPetsTableData(
			"#pets-table",
			"../src/data/table-pets-3.json",
		);
	}
	async loadAndSetPetsTableData(tableElementSelector, jsonPath) {
		const tableElement = this.querySelector(tableElementSelector);
		const response = await fetch(jsonPath);
		const data = await response.json();
		tableElement.setTableData(data);
	}
}

customElements.define("page-viajero-protegido-lujo", PageViajeroProtegidoLujo);
