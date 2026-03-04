/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";
import "../../../components/app-banner-multi-image.js?v=1.0.2";
import "../../../components/app-card-image-tag-text.js?v=1.0.2";
import "../../../components/app-destiny-slider.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../js/slick.js?v=1.0.2";
import "../../../components/app-destinations-table.js";

/*-------------------------SCRIPTS---------------------------*/

import "../js/travelpass-cookie.js?v=1.2.8";

class PageProtectedTraveler extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/banner/promociones/web/banner-viajero-protegido-seguro-de-viaje.webp","mediumImage": "../../../src/assets/img/banner/promociones/tablet/viajero-protegido-tablet.webp", "smallImage": "../../../src/assets/img/banner/promociones/movil/viajero-protegido-mobile.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

            <section class="__section">
                <app-section-title section-title="Térms and conditions Protected Traveler (Viajero protegido)"></app-section-title>
            </section>

            <div class="btn-group-pages">
                <a class="btn-enable __btn" href="./protected-traveler-plus.html">Plus Service</a>
                <a class="btn-disable __btn">Basic Service</a>
                <a class="btn-enable __btn" href="./protected-traveler-luxury.html">Luxury Service</a>
            </div>


            <h3 class="__title__section">General Conditions IAMSA Basic</h3>

            <section class="__sections">
            <article class="__bg-blue">

                <h3 class="__subtitle-section">INSURANCE</h3>
                <div class="__img-viajero-protegido-group">
                <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                </div>

                <h3 class="__subtitle-section">HAND LUGGAGE THEFT</h3>
                <p class="__terms-purchase-text">
                Compensation will be made through reimbursement up to the total of the contracted insured amount, in case of theft of hand luggage, including electronic and/or computer equipment, electronic devices identified as “gadgets”, “wearables”, “pocket” devices and their accessories such as cell phones, tablets, laptops, video games, among others, within your hand luggage.
                </p>
                <p class="__terms-purchase-text">
                Requirements: Liability letter from the bus line, notarized report presented to the Public Prosecutor.
                </p>
                <p class="__terms-purchase-text">
                <strong>Coverage applies only if the incident occurs during the trip.</strong>
                </p>

                <h3 class="__subtitle-section">Exclusions:</h3>
                <ol type="A" class="__terms-purchase-list">
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Passports, visas, personal identification documents, transport tickets, certificates and other documents such as deeds, cash, credit cards, debit cards, payment cards, negotiable securities, gold, silver, stamps, and keys.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Losses arising from any crime involving the direct participation of the Insured, any of their ascendants or descendants up to the second degree and/or relatives by affinity up to the second degree, as well as any employee, dependent, or servant of the Insured.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    As a consequence of attacks, riots, civil disturbances, or other acts that the law qualifies as crimes against public order.
                    </p>
                </li>
                </ol>

                <h3 class="__subtitle-section">TRANSPORT OF BODY IN CASE OF ACCIDENTAL DEATH</h3>
                <p class="__terms-purchase-text">
                In case of accidental death of the passenger during the trip, expenses will be covered up to the insured limit:
                </p>
                <ol type="A" class="__terms-purchase-list">
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    The procedures for the transportation or repatriation of the body; transportation costs will be covered up to burial.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Burial at the place of death or transport of ashes to the passenger’s permanent residence, at the request of relatives.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Transportation expenses for the passenger’s companions to their respective residence or the burial place, provided such transportation cannot be made using the originally planned means of travel.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Transportation expenses for the passenger’s companions to their respective residence or the burial place, provided such transportation cannot be made using the originally planned means of travel.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Payment of a round-trip ticket in the same class as the insured for a family member, in the most convenient means of transportation, from their residence to the place of death, only if the deceased passenger traveled without an adult companion and local authorities require a relative or representative. Within the same insurance provider established in the plan.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Requirements: Payment will be covered by reimbursement to the passenger upon presentation of a copy of the death certificate and the required invoices, receipts, and/or supporting documents.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    <strong>Coverage applies only if the incident occurs during the trip.</strong>
                    </p>
                </li>
                </ol>

                <h3 class="__subtitle-section">MEDICAL EXPENSES FOR ACCIDENT OR ILLNESS</h3>
                <p class="__terms-purchase-text">
                In the event that the passenger suffers an accident within 7 days after its occurrence, or serious illness, medical emergency, emergency surgery, or the onset of a non-pre-existing illness during the trip requiring medical treatment, surgery, hospitalization, ambulance use, medications, laboratory and imaging studies up to the Usual and Customary Expense; the amount of covered medical expenses will be reimbursed. Medical expenses incurred during a passenger’s trip will preferably be paid directly to the service provider contracted with the Company, except in an emergency.
                </p>
                <p class="__terms-purchase-text">
                Covered expenses include:
                </p>
                <ol type="A" class="__terms-purchase-list">
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Emergency Medical Transport to the nearest hospital and return to the place of lodging.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Medical and hospitalization expenses due to medical emergency, including the first consultation and newborn expenses for pregnancies up to the 7th month.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Transport and stay of a passenger’s companion in hospitalizations longer than 5 days.
                    </p>
                </li>
                <li class="__terms-purchase-item">
                    <p class="__terms-purchase-text">
                    Transport and accompaniment of minors under 16 years old in hospitalizations longer than 5 days or in case of death.
                    </p>
                </li>
                </ol>
                <p class="__terms-purchase-text">
                The relationship between the passenger covered under this policy and the medical providers remains under their responsibility; the Company assumes no liability for the service received or payment of damages.
                </p>
                <p class="__terms-purchase-text">
                Requirements: Payment will be covered by reimbursement to the passenger upon presentation of the medical report, studies performed, and the required invoices, receipts, and/or supporting documents.
                </p>
                <p class="__terms-purchase-text">
                <strong>Coverage applies only if the incident occurs during the trip.</strong>
                </p>

                <h3 class="__subtitle-section">MEDICAL EXPENSES FOR ACCIDENT OR ILLNESS</h3>
                <h3 class="__subtitle-section">Exclusions:</h3>
                <p class="__terms-purchase-text">
                The insurance policy will in no case cover expenses arising from the following:
                </p>
                <ol type="A" class="__terms-purchase-list">
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Emergency Medical Transport to the nearest hospital and return to the place of lodging.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Medical and hospitalization expenses due to medical emergency, including the first consultation and newborn expenses for pregnancies up to the 7th month.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Transport and stay of a passenger’s companion in hospitalizations longer than 5 days.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Transport and accompaniment of minors under 16 years old in hospitalizations longer than 5 days or in case of death.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">If the illness is of origin and symptomatic manifestation prior (“pre-existing”) to the start date of the contracted insurance coverage, as well as its consequences and aggravations, except as specified in section B point 5 of this section.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Conditions, injuries, and their consequences or complications resulting from treatments not provided by qualified medical professionals.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Any replacement and/or repair of prostheses or orthoses, orthopedic articles, hearing aids, eyeglasses, and contact lenses.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">For illnesses derived from chronic conditions or diagnosed prior to the trip, provided they are not medically controlled; in emergencies only the first expense to stabilize the patient will be reimbursed.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Organ or tissue transplants of any type.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Mental illnesses, psychiatric disorders, depression, or any type of mental or nervous illness, except as stipulated in section J. Psychological Assistance.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Medical or hospital expenses carried out without a medical prescription.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Routine checkups or medical exams, i.e., expenses without a diagnosis of an illness or accident covered.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Rehabilitation treatments or physical recovery therapy not derived from medical assistance provided during the trip.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Sexually transmitted diseases (STDs).</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">High blood pressure and all its consequences and derivations, as well as blood pressure control.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Injuries resulting from surgical interventions or medical treatments not caused by covered medical assistance provided during the trip.</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">Any additional expenses not related to medical treatment such as: tissues, hairdressing, body lotions, creams and cosmetics, companion meals, safe deposit box, bond fee, candy store, parking, florist, telephone service, rental of entertainment services, TV control, library service, newspapers, restaurant, and cafeteria service. (The above list is illustrative, not exhaustive).</p></li>
                <li class="__terms-purchase-item"><p class="__terms-purchase-text">If the travel destination has travel alerts due to health, safety, weather, or other issues issued by local or international authorities.</p></li>
                </ol>
            </article>
            </section>

           <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">DESCRIPTION OF ASSISTANCE SERVICES.</h3>
                    <h3 class="__subtitle-section">MEDICAL ASSISTANCE</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_2_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">DISPATCH OF DOCTOR TO HOME IN CASE OF EMERGENCY.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In the event that the passenger requires assistance for the care of a non-urgent condition, the dispatch of a general practitioner to the residence will be coordinated according to availability in each state, up to the number of events contracted in each plan.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Subsequent events at preferential cost.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The general practitioner carries out a general examination for the purposes of physical diagnosis, without performing any type of procedure that involves surgical equipment such as wound care, injections, catheterization, probes, or suturing. This service must be coordinated from the beginning by SSIST. No refunds apply.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The referred client may cancel the appointment with the general practitioner in advance of the coordinated appointment. In the event that the referred client does not cancel or does not attend the appointment coordinated by SSIST, it will be considered as a service rendered and the number of entitled events will be applied.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE INFORMATION FROM THESE SERVICES AS MEDICAL AND/OR HEALTH ADVICE. NO INFORMATION PROVIDED BY THESE SERVICES IS INTENDED TO BE A SUBSTITUTE FOR APPROPRIATE CARE FROM HEALTHCARE PROFESSIONALS, INCLUDING THE DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. DO NOT DISREGARD MEDICAL ADVICE OR DELAY SEEKING PROFESSIONAL CARE BECAUSE OF INFORMATION OBTAINED THROUGH THESE SERVICES. IN THE EVENT THAT A BENEFICIARY USES THE INFORMATION FROM ANY SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as the passenger is not at their place of residence, during the trip, and up to 6 days after arrival back at their place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">TELEPHONE MEDICAL ASSISTANCE.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Telephone advice will be provided by a general practitioner when the beneficiary requires medical guidance for a non-urgent condition (pregnancy, COVID, family planning and contraceptives, alcoholism and drug dependency, as well as the use of medications prescribed by a treating physician, side effects of medications, and recommended dosages).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The service does not cover any medical expenses incurred. In order to respect good medical practices, the call center physician will under no circumstances prescribe medications or provide any diagnosis. No refunds apply.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The staff providing this assistance are licensed physicians with professional credentials, experienced in primary medical care, ethical standards in medicine, and trained in identifying situations that require a higher level of care.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                This service will be available 24 hours a day, 365 days a year. The call will have a maximum duration of thirty minutes; once this time has elapsed, the communication will be terminated without liability for SSIST.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE INFORMATION FROM THESE SERVICES AS MEDICAL AND/OR HEALTH ADVICE. NO INFORMATION PROVIDED BY THESE SERVICES IS INTENDED TO BE A SUBSTITUTE FOR APPROPRIATE CARE FROM HEALTHCARE PROFESSIONALS, INCLUDING THE DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. DO NOT DISREGARD MEDICAL ADVICE OR DELAY SEEKING PROFESSIONAL CARE BECAUSE OF INFORMATION OBTAINED THROUGH THESE SERVICES. IN THE EVENT THAT A BENEFICIARY USES THE INFORMATION FROM ANY SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as the passenger is not at their place of residence, during the trip, and up to 6 days after arrival back at their place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">MEDICAL REFERRALS AND DISCOUNT NETWORK.</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The beneficiary will have access to SSIST’s network of affiliated medical providers who will offer discounts at pharmacies, clinics, laboratories, and hospitals, ranging from 5% (five percent) to 30% (thirty percent). Service available 24 hours a day, 365 days a year, with no event limit.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The service must be coordinated from the beginning by SSIST in order to make the benefit valid. No refunds apply.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage: 24 hours before the start of the trip, as long as the passenger is not at their place of residence, during the trip, and up to 6 days after arrival back at their place of residence.</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">TELEMEDICINE WITH GENERAL PRACTITIONER OR SPECIALIST (INTERNAL MEDICINE, GYNECOLOGY, PEDIATRICS, AND GASTROENTEROLOGY).</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In the event of illness or medical emergency, the beneficiary may have immediate contact through video conference with general practitioners, virtually and personally, who will help take the necessary measures to stabilize the beneficiary and assist with their discomfort. The service must be coordinated from the beginning by SSIST in order to make the benefit valid. The service does not cover any medical expenses incurred. Under no circumstances will the physician provide a diagnosis or prescribe medications. No refunds apply.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The staff providing this assistance are licensed physicians with professional credentials, experienced in primary medical care, ethical standards in medicine, and trained in identifying situations that require a higher level of care.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage: 24 hours before the start of the trip, as long as the passenger is not at their place of residence, during the trip, and up to 6 days after arrival back at their place of residence.</strong>
                            </p>
                        </li>
                    </ul>

                </article>
            </section>


           <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">EMERGENCY SERVICES</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_3_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">EMERGENCY AMBULANCE DISPATCH</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In the event that the beneficiary or an immediate family member suffers an accident or illness, and/or requires transport to a hospital due to an emergency, a basic ground ambulance will be coordinated to transfer the patient to the nearest hospital of their choice.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the client requests a specialized ambulance (transfer, COVID, or specialized), a quotation will be provided to the beneficiary. Service is available 24/7, 365 days a year. The service must be coordinated from the beginning by SSIST to make the benefit valid. An emergency is understood as a situation that endangers life, organ viability, or bodily integrity of the beneficiary, requiring immediate medical attention.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The emergency ambulance service consists of a basic emergency mobile unit with a driver and a medical technician on board, equipped according to NOM34 standards.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic level medical emergency personnel will have knowledge of basic CPR, elementary anatomy and physiology, patient lifting and mobilization, immobilization and packaging, basic airway management, assessment and examination, trauma identification and management (bleeding, shock, soft tissue, musculoskeletal, head and spine), basic pharmacology, medical clinical problem management (respiratory, cardiovascular, diabetic, allergic, environmental, obstetric, behavioral, and poisoning emergencies), medication administration under medical supervision (subcutaneous, oral, inhalation), ambulance operation, communication systems, initial handling of hazardous material incidents, basic rescue techniques, triage and classification of beneficiaries, and interaction with aircraft.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Regarding the unit: The basic emergency ambulance is a ground mobile unit intended for patients requiring prehospital medical care with basic life support.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST will not be responsible for any complications arising during medical transport or any outcome, but will assist the beneficiary in claiming responsibility from the third party liable.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Only transport to the nearest hospital is covered. If availability is lacking and the beneficiary must be taken to another hospital, this counts as a second event and any additional cost must be borne by the beneficiary.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the ambulance service must wait for the patient to be admitted or discharged, or due to any circumstance beyond the service provider’s control, the beneficiary must pay the provider directly for each additional hour of waiting. The cost will be communicated at the time.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the beneficiary is overweight and requires a larger ambulance for transport, the additional charge for this special requirement will be paid directly to the ambulance service provider.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Ambulance assistance does not cover pandemic-related illnesses such as COVID-19, monkeypox, or any other pandemic disease. These cases will be quoted separately and the cost borne by the beneficiary.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The personnel providing this service are licensed physicians experienced in primary care, medical ethics, and identifying situations requiring higher-level care.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST is not responsible for the services provided by the suppliers or their actions; the service provider is directly responsible. SSIST provides coordination and management only and will assist the beneficiary with any issues with the supplier.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage: 24 hours before the start of the trip, as long as the beneficiary is not at their residence, during the trip, and up to 6 days after arrival at their residence.</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The beneficiary is responsible for covering hospitalization costs, medications, surgical materials, and medical fees.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If a specialized ambulance is required, it will be quoted and charged to the beneficiary.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rescue or situations where the beneficiary is in locations that obstruct or endanger access, including remote, inaccessible, or dangerous areas (forests, deserts, mountains, rivers, seas, isolated roads, cliffs, caves, platforms, boats, etc.). Lack of explicit authorization for transfer from the treating physician certifying clinical stability.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST is not responsible if the hospital or clinic reserves the right of admission.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Emergency services will comply with applicable government regulations.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">FUNERAL ASSISTANCE</h3>

                    <p class="__terms-purchase-text">
                        In case of death, coverage applies for natural causes or accidents, through SSIST’s funeral assistance network, which includes the following services:
                    </p>

                    <ol type="1" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Personalized assistance 24/7 through the Call Center.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Assistance and guidance with authorities for recovering the deceased within national territory.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfers:
                            </p>
                            <br>
                            <ol type="a" class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        First transfer from the place of death to any funeral home agency; in Mexico City and metropolitan area, to J. García López branches or correspondent funeral agencies elsewhere.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Second transfer from the wake location to the cemetery designated by the responsible family member or to the crematorium (subject to availability).
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Transfers between points cover up to 60 KM within the same locality. If exceeding 30 km, the beneficiary covers the additional cost at $30.00 MXN per km, plus any administrative or interment fees.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Body preparation (makeup and dressing).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Embalming (upon beneficiary request).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic metal coffin.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic metal coffin for cremation use.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic wake room or chapel for 20 people, or home wake setup if allowed by authorities.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Support for religious services.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cremation and delivery of a basic urn (if service is available in the area), subject to authority permission.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Coverage includes children under 21 years and adults up to 69 years. Family members covered per financial agreement.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as the beneficiary is not at their residence, during the trip, and up to 6 days after arrival at their residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ol type="I" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Procedures and transfers for medico-legal death cases (Public Prosecutor and Forensic Medical Services).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any cost arising from procedures with Public Prosecutor or Forensic Medical Services.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Exhumation of remains.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Floral arrangements.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cemetery fees and labor.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Out-of-town transfers (land or air freight).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Interment fees and procedures.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Repatriation.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                International transfers.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cafeteria services.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Niches, graves, crypts.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transportation for companions.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the service was not requested through the Call Center (no refund).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the beneficiary already contracted a service independently, no refund applies.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                False statements regarding the age of the insured.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Force majeure or unforeseen circumstances making service provision impossible.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Access to obituary publications in newspapers.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Maximum coffin weight for coverage is 100 kg. If exceeded, a different coffin will be used if it does not surpass covered costs.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Suicide.
                            </p>
                        </li>
                    </ol>

                </article>
            </section>


            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">EMERGENCY SERVICES</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TRANSPORT OF A FAMILY MEMBER FOR CONVALESCENCE</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the passenger travels alone and is hospitalized for more than five consecutive days due to a covered illness or condition, the Company will reimburse the cost of a round-trip economy class ground ticket, up to the maximum coverage limit contracted.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                It is essential that the passenger, if their health allows, or a family member/representative, notify SSIST of this situation within 7 days.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage: 24 hours before the start of the trip, as long as the passenger is not at their residence, during the trip, and up to 6 days after arriving at their residence.</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">CONCIERGE AND TRAVEL ADVISORY, HOTEL RESERVATIONS, AND DISCOUNT NETWORKS RELATED TO TRAVEL</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST will provide telephone references and information about: travel agencies, weather, exhibitions, exchange rates, shopping centers, hotels, restaurants, museums, galleries, consular information abroad, reservations, shows, theaters, concerts, nightlife, guidance for passport replacement in case of loss or theft, among others. Telephone support is available 24/7, 365 days a year, with unlimited access.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Unlimited access to our discount network for car rentals, travel agencies, hotels, and many other services. Available 24/7, 365 days a year, with no limit on events.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage: 24 hours before the start of the trip, as long as the passenger is not at their residence, during the trip, and up to 6 days after arriving at their residence.</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">TELEPHONE LEGAL ASSISTANCE</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the beneficiary requires legal services, SSIST will provide telephone advice with licensed lawyers specialized in different branches of law, available 24/7, 365 days a year.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Personnel providing this service are only licensed attorneys with experience in their field and in identifying situations requiring higher-level attention. They act independently of SSIST.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST does not provide legal opinions, advice, or guidance. The attorney will only provide legal orientation at the time, and no contact with SSIST should be used for legal questions. SSIST is not responsible for information exchanged between the beneficiary and the attorney.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                DO NOT CONSIDER INFORMATION FROM THE SERVICES AS LEGAL ADVICE. None of the information is a substitute for professional attention, including review of legal files, civil or criminal investigations, or administrative matters. Always seek professional advice. Using the information is at the beneficiary’s own risk.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage: 24 hours before the start of the trip, as long as the passenger is not at their residence, during the trip, and up to 6 days after arriving at their residence.</strong>
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                This service is limited to the beneficiary only.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Personnel providing this service act independently of SSIST.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Preparation of documents for legal proceedings, complaints, or disputes initiated by or against the beneficiary is excluded.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Acts contrary to law, professional ethics, morality, or good practices.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any action contrary to applicable legislation and regulations in the national territory.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Failure to provide truthful or timely information, or providing false information.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In-person legal representation.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any act related to committing fraud.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any service required outside the country.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Services related to divorce, alimony, or custody are limited to the membership holder only.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any expenses other than attorney fees.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Legal guidance on matters not specified in this document.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Due to conflicts of interest, family legal advice for divorce, alimony, or custody applies only to the membership holder.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        This service is available 24/7, 365 days a year. Calls or video conferences last a maximum of thirty minutes.
                    </p>
                    <p class="__terms-purchase-text">
                        Video consultations can be performed on any mobile device or PC with a front camera and internet connection (preferably Wi-Fi) via SSIST’s digital platform.
                    </p>
                    <p class="__terms-purchase-text">
                        The beneficiary must contact the support line, and if a video consultation is required, a link with access credentials will be sent via email or mobile.
                    </p>
                </article>
            </section>

    `;
	}
}

customElements.define("page-protected-traveler", PageProtectedTraveler);
