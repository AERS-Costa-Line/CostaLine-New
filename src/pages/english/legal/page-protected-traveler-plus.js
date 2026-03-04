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

class PageProtectedTravelerPlus extends HTMLElement {
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
                <app-section-title section-title="PLUS Terms and Conditions"></app-section-title>
            </section>

            <div class="btn-group-pages">
                <a class="btn-enable __btn" href="./protected-traveler.html">Basic Service</a>
                <a class="btn-disable __btn">Plus Service</a> 
                <a class="btn-enable __btn" href="./protected-traveler-luxury.html">Luxury Service</a> 
            </div>

            <h3 class="__title__section">IAMSA Plus General Conditions</h3>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">INSURANCE</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>
                    <h3 class="__subtitle-section">ACCIDENTAL DEATH</h3>
                    <p class="__terms-purchase-text">
                        Death resulting from an accident suffered by the passenger during the trip and within ninety (90) calendar days following the date of the incident, in which case the company will pay the insured sum contracted to the designated beneficiaries.
                    </p>
                    <p class="__terms-purchase-text">
                        From the aforementioned insured sum, any amount previously paid to the passenger for benefits covered under the Organic Loss coverage of this policy will be deducted, when such losses were caused by the same accident that resulted in death.
                    </p>
                    <p class="__terms-purchase-text">
                        Minimum age for acceptance of this benefit: 12 years.
                    </p>
                    <p class="__terms-purchase-text">
                        Beneficiaries: The passenger’s spouse and children, and in the absence of these, the parents; if none of the above, the legal heirs of the passenger.
                    </p>
                    <p class="__terms-purchase-text">
                        Requirements: Death certificate, report to authorities, official identification of the passenger and beneficiaries.
                    </p>
                    <p class="__terms-purchase-text">
                        The maximum insured sum payable for the occurrence of more than one death in a single event under this policy will be $500,000 MXN, covering the number of lives involved; if the amount is exceeded in a single event, the insured sum will be distributed proportionally among those affected.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                    </p>
                    <h3 class="__subtitle-section">Exclusions:</h3>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Traffic accidents not reported to the authorities.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Due to fault or accident while under the influence of alcohol, drugs, or medications.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Mental illnesses, personality disorders.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Infection, poisoning, or inhalation of smoke or gases, except in case of an accident.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Injuries intentionally caused by the passenger, suicide or attempted suicide.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accidents, injuries, or death occurring when the passenger is a pilot, mechanic, or crew member of an airline, maritime, or land transportation company, unless it is a licensed public passenger transport company on an established route with regular schedules.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accidents, injuries, or death of the passenger when acting as occupant or driver of any racing, test, or competitive vehicle, except as a spectator.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Injuries sustained during military service, brawls where the passenger is the instigator, acts of rebellion, criminal acts, insurrections, or violent demonstrations in which the passenger participates directly.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Injuries suffered while engaging in activities such as skydiving, diving, American football, mountaineering, boxing, wrestling, charreada, skiing, bullfighting, aerial sports, martial arts, horseback riding, spelunking, rugby, and rappelling, whether amateur or professional.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pre-existing conditions at the time of policy purchase.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                When the passenger is transported on a motorcycle as driver or passenger.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Total and permanent disability due to any illness.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">ORGANIC LOSSES SCALE “A”</h3>
                    <p class="__terms-purchase-text">
                        If the passenger suffers any of the organic losses specified in the contracted indemnity table as a result of a covered accident and within 90 days following its occurrence, compensation will be paid based on the percentage of the insured sum indicated in the indemnity table.
                    </p>
                    <p class="__terms-purchase-text">
                        Requirements: Incident report, official identification of the passenger, and medical report along with performed tests.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                    </p>

                    <h3 class="__subtitle-section">TOTAL AND PERMANENT DISABILITY DUE TO ACCIDENT</h3>
                    <p class="__terms-purchase-text">
                        If the passenger suffers total and permanent disability as a result of a covered accident, with the condition determined within ninety (90) calendar days following the date of the incident, the company will pay the passenger the contracted insured sum.
                    </p>
                    <p class="__terms-purchase-text">
                        Applicable age limits: minimum 15 years and maximum 64 years 11 months. Requirements: Official identification of the passenger, total and permanent disability report issued by a Social Security Institution or specialist occupational physician with professional license, certificates and experts in the field, along with all exams, analyses, and documents used to determine total and permanent disability, which will be evaluated by a certified specialist physician in the field.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Conditions:
                    </p>
                    <ul class="__terms-purchase-list">
                    
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The luggage has been permanently lost, damaged, or stolen during the trip and regular transport.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The luggage has been checked in and dispatched by the carrier.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The commercial carrier has acknowledged in writing the permanent loss or theft of the luggage.
                            </p>
                        </li>
                    </ul>
                    <p class="__terms-purchase-text">
                        Requirements: Letter from IAMSA/GHO validating the claim.
                    </p>

                    <h3 class="__subtitle-section">LOSS, THEFT, OR DAMAGE OF CHECKED LUGGAGE</h3>
                    <p class="__terms-purchase-text">
                        In case of total theft, permanent loss, or damage of checked luggage during covered transport, payment of the insured sum established in the policy will be coordinated to the passenger.
                    </p>
                    <p class="__terms-purchase-text">
                        Conditions:
                    </p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The luggage has been permanently lost, damaged, or stolen during the trip and regular transport.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The luggage has been checked in and dispatched by the carrier.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The commercial carrier has acknowledged in writing the permanent loss or theft of the luggage.
                            </p>
                        </li>
                    </ul>
                    <p class="__terms-purchase-text">
                        Requirements: Luggage ticket when stored in the bus luggage compartment and a letter of responsibility from the bus company.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Exclusions:
                    </p>
                    <p class="__terms-purchase-text">
                        The Company shall not be responsible for loss and/or damage to insured property under the following circumstances:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Partial losses or thefts.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Aesthetic or functional damage to checked luggage.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Disappearance or misplacement. (The actual value of lost luggage will not be considered.)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Claims submitted more than 12 hours after the Insured has arrived at the destination.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Luggage sent as freight or courier.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Prior to the scheduled departure date of the trip indicated on the transportation ticket issued by the commercial carrier.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Total loss or theft of checked luggage. The following items are not covered (the enumeration is exhaustive, not illustrative):
                            </p>
                        </li>

                        <ol type="a" class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Harps, piano, paintball equipment, rugs and carpets, animals of any kind, items presumed for resale and/or commercial use (unless proven otherwise and not for personal use), headphones, hearing aids, artificial teeth, dentures, medical and dental accessories, orthopedic devices, eyeglasses and contact lenses, bicycles, snowboards and skis, checks, travelers’ checks, banknotes, coins, bonds, postal or fiscal stamps, promissory notes, prepaid coupons, travel tickets, event tickets, obligations or documents of any kind, accounting and commercial books, contents of safes, vaults or cash registers, passports, visas, personal ID documents, transportation tickets, deeds, cash, credit, debit and payment cards, negotiable securities, gold, silver, stamps, keys, wheelchairs, strollers, canes and other mobility devices, vehicles, motorcycles, motorcycle accessories and engines, airplanes, boats and generally any means of transport for people or goods. Passports, visas, ID documents, transportation tickets, deeds, cash, credit, debit and payment cards, negotiable securities, gold, silver, stamps, and keys. Wheelchairs, strollers, canes, and other mobility devices, as they are required for the mobility of the Insured and are not considered belongings that should be in checked luggage by nature. Vehicles, motorcycles, motorcycle accessories and engines, airplanes, boats, and any other means of transport for people or goods.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Goods and professional materials, money, banknotes, travel tickets, stamp collections, titles of any kind, identity documents, and in general all documents and paper securities, credit cards, tapes, discs, or data carriers with memory, magnetic banded or filmed documents, collections and professional material, prostheses, animals, plants, false teeth or dental bridges, sports equipment, art objects, luggage not registered with the commercial carrier, except hand luggage under section "c" Hand luggage theft in this section.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Any valuable object and/or electronic or computing equipment, electronic devices identified as "gadgets," "wearables," "pocket," or portable devices and accessories such as cellphones, tablets, laptops, video games, cameras, or electronic equipment, unless contracted under section "c" Hand luggage theft in this section and carried as hand luggage.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Any type of non-violent theft, loss, or delay of luggage if not under the custody of the commercial carrier and/or lodging provider. This exclusion does not apply to section "c" Hand luggage theft of this section.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Loss, misplacement, forgetting, non-violent theft, or delay of luggage caused by any negligence of the Insured.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Delay of luggage when returning to the Insured's permanent residence.
                                </p>
                            </li>
                        </ol>
                    </ol>

                    <h3 class="__subtitle-section">HAND LUGGAGE THEFT</h3>
                    <p class="__terms-purchase-text">
                        Reimbursement up to the total insured sum will be provided in case of hand luggage theft, including electronic and/or computing devices, gadgets, wearables, pocket devices, and accessories such as cellphones, tablets, laptops, and video games within hand luggage.
                    </p>
                    <p class="__terms-purchase-text">
                        Requirements: Letter of responsibility from the bus line, notarized report filed with the public prosecutor.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                    </p>

                    <h3 class="__subtitle-section">TRANSPORTATION OF BODY DUE TO ACCIDENTAL DEATH</h3>
                    <p class="__terms-purchase-text">
                        In case of accidental death of the passenger during the trip, coverage will apply up to the insured sum:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Arrangements for transport or repatriation of the body, covering transportation costs until burial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Burial at the place of death or transportation of ashes to the passenger's permanent residence, at the request of the relatives.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transportation costs for the passenger's companions to their residence or burial site, if transport cannot be done using the planned travel means.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Payment for a round-trip ticket in the same class the Insured traveled for a relative, using the most convenient transport from their residence to the place of death, only if the deceased passenger traveled alone and local authorities require a family member or representative. Within the same insurer established in the plan.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Requirements: Payment will be reimbursed to the passenger upon presenting a copy of the death certificate and invoices, receipts, or proofs required.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">MEDICAL EXPENSES DUE TO ACCIDENT OR ILLNESS</h3>
                    <p class="__terms-purchase-text">
                        In case the passenger suffers an accident within 7 days following its occurrence, or serious illness, medical emergency, or emergency surgery, or the onset of a non-preexisting illness requiring treatment, surgery, hospitalization, ambulance, medication, lab tests, or imaging up to the Usual and Customary Expense, the covered medical expenses will be reimbursed. Medical services expenses during the trip will preferably be paid directly to providers in agreement with the Company, except in emergencies.
                    </p>
                    <p class="__terms-purchase-text">
                        Covered expenses include:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Emergency medical transfer to the nearest hospital and return to lodging.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Medical and hospitalization expenses for medical emergencies, including first consultation and newborn expenses for pregnancies up to the 7th month.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfer and stay of a companion during hospitalizations over 5 days.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfer and accompaniment of minors under 16 during hospitalizations over 5 days or in case of death.
                            </p>
                        </li>
                    </ol>
                    <p class="__terms-purchase-text">
                        The relationship between the covered passenger and medical providers is the passenger’s responsibility; the Company assumes no liability for the service received or damages.
                    </p>
                    <p class="__terms-purchase-text">
                        Requirements: Payment will be reimbursed to the passenger upon presenting medical report, conducted tests, and invoices, receipts, or proofs required.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                    </p>


                    <h3 class="__subtitle-section">MEDICAL EXPENSES DUE TO ACCIDENT OR ILLNESS</h3>
                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <p class="__terms-purchase-text">
                        The insurance policy will under no circumstances cover expenses arising from any of the situations listed below:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Emergency medical transfer to the nearest hospital and return to lodging.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Medical and hospitalization expenses for medical emergencies, including the first consultation and newborn expenses for pregnancies up to the 7th month.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfer and stay of a companion for hospitalizations longer than 5 days.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfer and accompaniment of minors under 16 for hospitalizations longer than 5 days or in case of death.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Illnesses of preexisting origin and symptomatic manifestation prior to the start of the insurance coverage, including consequences and aggravations, except as specified in section B point 5 of this section.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Conditions, injuries, and their consequences or complications resulting from treatments not provided by qualified medical professionals.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Replacement and/or repair of prostheses or orthoses, orthopedic items, hearing aids, eyeglasses, and contact lenses.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Illnesses derived from chronic conditions or diagnosed prior to the trip, unless medically controlled; in emergencies, only the first expense to stabilize the patient will be reimbursed.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transplants of any type of organs or tissues.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Mental illnesses, psychiatric disorders, depression, or any type of mental or nervous condition, except as stipulated in section J. Psychological Assistance of this section.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Medical or hospital expenses incurred without a medical prescription.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Routine check-ups or medical exams, i.e., medical expenses without a diagnosis of a covered illness or accident.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rehabilitation or physical recovery therapy not resulting from medical care provided during the trip.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sexually transmitted diseases (STDs).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Hypertension and all its consequences and derivations, including blood pressure monitoring.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Injuries resulting from surgical interventions or medical treatments not caused by covered medical assistance provided during the trip.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any additional expenses not related to medical treatment such as: tissues, hairdressing, body lotions, creams and cosmetics, companion meals, safe, bond concept, candy, parking, florist, phone service, entertainment rental, TV control, stationery service, newspapers, restaurant and cafeteria services. (The above list is illustrative, not limiting.)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the travel destination has alerts due to health, safety, climate, or other issues from local or international authorities.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">PET LIABILITY (RC MASCOTAS)</h3>
                    <p class="__terms-purchase-text">
                        Covers expenses for which the passenger is civilly liable to a third party due to acts performed without intent, whether by negligence in care, supervision, or aggressiveness of the insured pet, provided the events occurred during the covered period.
                    </p>
                    <p class="__terms-purchase-text">
                        Requirements: Claim letter from the affected third party, claim letter from the passenger, both quantified and indicating the date of the event, and if reported to authorities.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip. Exclusions:</strong>
                    </p>
                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Acts by the insured intended for the pet to cause harm to third parties.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Damage not caused by the pet, including moral or consequential damages.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Damage the pet may cause to family members or persons related to the insured.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Penalties, fines, or any reprimands for lack of supervision of the pet.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">TRIP CANCELLATION AND INTERRUPTION</h3>
                    <p class="__terms-purchase-text">
                        Applies from ticket purchase until the start of the trip and covers:
                    </p>
                    <p class="__terms-purchase-text">
                        Trip cancellation before starting.
                    </p>
                    <p class="__terms-purchase-text">
                        Non-refundable expenses for any transportation, tour, excursion, and/or lodging paid but not used and unrecoverable. Cancellations made by the passenger before the trip start date.
                    </p>
                    <p class="__terms-purchase-text">
                        Requirements:
                    </p>
                    <p class="__terms-purchase-text">
                        Invoices or proof of full payment for the trip. Compensation proofs from the commercial carrier and/or travel agency or similar. Documentation proving trip cancellation. Passenger or companion ID. Passenger report of events and any necessary information in accordance with Article 69 of the Insurance Contract Law.
                    </p>
                    <p class="__terms-purchase-text">
                        Subject to the following reasons preventing the passenger from traveling:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Death, accident, serious illness, medical emergency, emergency surgery, or the onset of a non-preexisting illness.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accident of the passenger or family requiring at least 24 hours of hospitalization or temporary incapacity within ten (10) days prior to the trip and after coverage purchase.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cancellations due to adverse weather.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Strikes affecting public transport for more than 72 hours preventing the passenger from traveling.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Loss or damage to passenger property due to fire, explosion, storm, hail, lightning, flood, avalanche, volcanic eruption, earthquake, landslide, or crime by a third party.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Official declaration of a disaster zone in the residence or travel destination or transit to the destination.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pregnancy complications of the insured, spouse, or partner after policy purchase and before travel, supported by medical documentation.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Theft or loss of official ID within 48 hours prior to departure.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Errors or omissions by authorities issuing visas or permits required for travel.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Contraindication of vaccination, vaccination sequelae, or medical impossibility to follow required preventive treatment for the destination.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Accident involving the transportation means or en route to airport, port, train, or bus station causing a delay over 2 hours.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Adoption delivery of a minor to the passenger.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Judicial requirement to appear as defendant, plaintiff, witness, or juror.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Summons to present or sign official documents requested by public authorities.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Summons to provide medical or public service by competent local authorities.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Additional costs if a travel companion cancels for covered risks and the passenger decides to continue the trip, incurring extra lodging costs per person.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the claim occurs during the trip.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Exclusions:
                    </p>

                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the trip has not been fully paid at coverage purchase or there are debts to the travel agency or provider.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the passenger or travel companions present:
                            </p>
                        </li>
                        <ol type="a" class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    A medical contraindication for travel.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Suicide attempt or participation in any criminal act.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Intoxication, drug addiction, or use of non-prescribed substances not under medical supervision.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Legal prohibitions or deprivation of liberty by competent authorities.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Medical or dental treatments not classified as medical emergencies and any rehabilitation treatments.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Preexisting illnesses or injuries if the coverage was purchased less than 48 hours before the trip.
                                </p>
                            </li>
                        </ol>
                    </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">DESCRIPTION OF ASSISTANCE.</h3>
                    <h3 class="__subtitle-section">EMERGENCY SERVICES.</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_2_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">HOME VISIT BY EMERGENCY DOCTOR.</h3>

                    <p class="__terms-purchase-text">
                        Coordination of a medical consultation with a general practitioner; the doctor designated by SSIST will visit the accredited person at their residence to carry out the medical consultation. This service is available 24 hours a day, 365 days a year.
                    </p>
                    <p class="__terms-purchase-text">
                        The general practitioner performs a general examination for physical diagnosis purposes, without carrying out any procedure involving surgical equipment such as dressing, injection, catheterization, or suturing. This service must be coordinated from the beginning by SSIST. No reimbursements apply.
                    </p>
                    <p class="__terms-purchase-text">
                        The referred client may cancel the appointment with the general practitioner at least 48 hours in advance. If the client does not cancel within this period or does not attend the coordinated appointment, it will be considered as a service rendered, and the number of events they are entitled to will be applied.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE INFORMATION PROVIDED BY THE SERVICES AS MEDICAL AND/OR HEALTH ADVICE. NONE OF THE INFORMATION PROVIDED IS INTENDED AS A SUBSTITUTE FOR PROPER CARE BY HEALTH PROFESSIONALS, INCLUDING DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. DO NOT STOP SEEKING PROFESSIONAL MEDICAL HELP OR CONTRADICT ANY PREVIOUS ADVICE RECEIVED. IF AN ACCREDITED PERSON USES ANY SERVICE INFORMATION, IT IS EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the person is not at their residence, during travel, and up to 6 days after returning to their residence</strong>
                    </p>

                    <h3 class="__subtitle-section">EMERGENCY AMBULANCE SERVICE.</h3>

                    <p class="__terms-purchase-text">
                        If the accredited person or an immediate family member suffers an accident or illness and/or needs to be transported to a hospital due to an emergency, a basic ground ambulance will be arranged to transport them to the nearest hospital of their choice.
                    </p>
                    <p class="__terms-purchase-text">
                        If the client requests a special ambulance (transfer, COVID, specialized), the cost will be quoted to the accredited person. Service is available 24/7, 365 days a year. The service must be coordinated from the beginning by SSIST. An emergency is understood as a situation that threatens the life, viability of organs, or physical integrity of the beneficiary, requiring immediate medical attention.
                    </p>
                    <p class="__terms-purchase-text">
                        The emergency ambulance service will consist of a basic emergency mobile unit, with a driver and a basic emergency medical technician onboard, equipped according to NOM34 standards.
                    </p>
                    <p class="__terms-purchase-text">
                        The emergency medical technician will have knowledge of basic CPR, elementary anatomy and physiology, lifting, mobilization, immobilization, patient packaging, basic airway management, assessment and exploration, trauma identification and management (bleeding, shock, soft tissue, muscular and skeletal system, head and spine), elementary pharmacology, management of medical emergencies (respiratory, cardiovascular, diabetic, allergic, environmental, obstetric, behavioral, poisoning), medication administration under medical supervision (subcutaneous, oral, inhalation), general ambulance operation, communication systems, initial hazardous materials incident management, basic rescue techniques, beneficiary selection and classification, and interaction with aircraft. The ambulance will be a ground mobile unit providing pre-hospital care with basic life support.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST is not responsible for any complications during medical transport or outcomes; however, SSIST will assist the beneficiary in claiming responsibility from a third party. Only transport to the nearest hospital is covered. If no availability exists and the beneficiary must be transported to another hospital, it will count as a second event, and additional costs will be borne by the beneficiary. Any waiting time for admission or discharge will be charged directly to the beneficiary at the provider's rate.
                    </p>
                    <p class="__terms-purchase-text">
                        If the beneficiary is overweight and requires a larger ambulance, additional costs must be paid directly to the ambulance provider.
                    </p>
                    <p class="__terms-purchase-text">
                        Ambulance assistance does not apply for pandemic diseases like COVID-19, monkeypox, or any other pandemic; these will be quoted separately and must be paid according to the quotation at that time.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST is not responsible for services provided by suppliers. The supplier is directly responsible for any complaints or claims. SSIST only coordinates and manages provider dispatch and will assist the accredited person in resolving issues with the provider.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the person is not at their residence, during travel, and up to 6 days after returning to their residence</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The accredited person is responsible for covering the cost of hospitalization, as well as any medication, surgical material, and medical fees.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the accredited person requires a specialized ambulance, it will be subject to quotation and at their own cost.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rescue or situations where the accredited person is in circumstances that hinder or prevent access or endanger the life of people who could provide assistance, due to being in remote, inaccessible, very difficult or dangerous areas, or far from populations or roads suitable for ambulance access, as well as any terrain requiring rescue specialists.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        The following are examples, not limiting: forests, jungles, roads, deserts, mountains, seas, lakes, dams, rivers, beaches, etc., remote areas from roads and towns, as well as ravines, caves, slopes, peaks, mountain summits, offshore platforms, ships, yachts, and other terrain accidents. Lack of express authorization for transfer by the treating doctor certifying clinical stability.
                    </p>

                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST is not responsible if the hospital or clinic reserves the right of admission.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In case of health emergencies, applicable regulations by the competent authority will be followed.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">EMERGENCY DENTAL ASSISTANCE.</h3>

                    <p class="__terms-purchase-text">
                        If the user suffers an accident requiring immediate intervention by a dentist, SSIST will coordinate and provide financial support up to $2,500 to cover expenses. Any excess must be paid by the user. Subsequent events will be offered at a preferential rate. Telephone assistance is available 24/7, 365 days a year.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the person is not at their residence, during travel, and up to 6 days after returning to their residence</strong>
                    </p>

                    <h3 class="__subtitle-section">FUNERAL ASSISTANCE.</h3>

                    <p class="__terms-purchase-text">
                        In the event of death, the accredited person is covered, whether due to natural causes or accident, through SSIST's funeral network agencies, which include the following services:
                    </p>

                    <ol type="1" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Personalized attention 24/7, 365 days a year, through the Call Center.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Personalized attention and guidance with the Public Prosecutor's Office for recovery of the deceased within national territory.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfers:
                            </p>

                            <ol type="a" class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        First transfer of the deceased from the place of death to any of the funeral agencies, in Mexico City and metropolitan area, to J. García López branches such as Casa Observatorio, Casa Satélite, Casa Iztapalapa, Casa Coyoacán, Casa Tlalpan, or to the corresponding funeral agency in other regions of Mexico.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Second transfer from the wake location to the cemetery designated by the responsible family member, or to the crematory (subject to availability).
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Transfers point-to-point cover a maximum of 60 KM within the same locality, municipality, or metropolitan area. If exceeding 30 KM, the accredited person will cover the cost of additional kilometers at $30.00 MXN per kilometer, plus any costs or fees required at the time of service.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cosmetic body preparation (makeup and dressing).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Embalming (applies upon request by the accredited person)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic metal coffin.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic metal coffin (for cremation rights).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Room for funeral or standard wake chapel with capacity for 20 (twenty) people in circulation, or if required, home wake equipment. (As long as authorities allow it)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Facilities to hold religious services.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cremation and delivery of basic urn (if services are available in the corresponding area of the interior of Mexico). (As long as authorities allow it)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Covers children under 21 years and up to 69 years. Family members are covered according to what is agreed with each financial institution.
                            </p>
                        </li>
                        </ol>

                        <p class="__terms-purchase-text">
                            <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                        </p>

                        <h3 class="__subtitle-section">Exclusions:</h3>

                        <ol type="I" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Procedures and transfers for medical-legal death cases (Public Ministry and Forensic Medical Service).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any expense or cost incurred for procedures before the Public Ministry and Forensic Medical Service.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Exhumation of dry remains.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Floral arrangements.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cemetery fees and handling.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Long-distance transfers (procedures, land or air freight).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Hospitalization costs and procedures.
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
                                Cafeteria service.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Niche, grave, crypt, drawer.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Bus for companions.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                For not requesting the SERVICE from the Telephone Assistance Center. (No refund exists).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If the user had already hired another provider when requesting the service, no refund will apply.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If false declarations regarding the age of the contractors are found.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Force majeure or unforeseen events that make it materially or humanly impossible.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Access to the obituary section in newspapers.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The maximum weight supported by a basic coffin for this coverage is 100 kg. If the user exceeds this weight, a different coffin will be sought to provide the service as long as it does not exceed the covered cost.
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
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">MEDICAL ASSISTANCES</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_3_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TELEPHONE MEDICAL ASSISTANCE.</h3>

                    <p class="__terms-purchase-text">
                        Telephone advice will be provided by a general practitioner when the user and/or direct family member requires medical guidance for a non-urgent condition (pregnancy, COVID, family planning and contraceptives, alcoholism and drug dependence, as well as the use of medications prescribed by a treating physician, side effects of medications, and recommended doses).
                    </p>
                    <p class="__terms-purchase-text">
                        Additionally, the user's medical record will be prepared. Service available 24 hours a day, 365 days a year, with no limit on events. The service must be coordinated from the beginning by SSIST to validate the benefit.
                    </p>
                    <p class="__terms-purchase-text">
                        The service does not cover any medical expenses incurred. To respect good medical practices, the cabin doctor will under no circumstances prescribe medications or provide any diagnosis. No refund applies.
                    </p>
                    <p class="__terms-purchase-text">
                        The personnel providing this assistance are only licensed physicians, with experience in primary medical care, ethical standards in medicine, and expertise in identifying situations that require another level of care.
                    </p>
                    <p class="__terms-purchase-text">
                        This service is available 24 hours a day, 365 days a year.
                    </p>
                    <p class="__terms-purchase-text">
                        The call will have a maximum duration of thirty minutes; after this period, the communication will be cut off without SSIST liability.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE SERVICE INFORMATION AS MEDICAL AND/OR HEALTH ADVICE. NO INFORMATION PROVIDED BY THE SERVICES INTENDS TO SUBSTITUTE THE PROPER CARE OF HEALTH PROFESSIONALS, INCLUDING DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. DO NOT STOP SEEKING A MEDICAL PROFESSIONAL, NOR DISREGARD ANY PREVIOUS ADVICE RECEIVED FROM INFORMATION OBTAINED THROUGH THE SERVICES. IF A USER USES THE INFORMATION FROM ANY SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">MEDICAL DISCOUNT NETWORK.</h3>

                    <p class="__terms-purchase-text">
                        The user will have access to the network of medical providers affiliated with SSIST, which will grant discounts at pharmacies, clinics, laboratories, and hospitals ranging from 5% (five percent) to 30% (thirty percent). Service available 24 hours a day, 365 days a year, with no limit on events.
                    </p>
                    <p class="__terms-purchase-text">
                        The service must be coordinated from the beginning by SSIST to validate the benefit. No refund applies.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">TELEMEDICINE WITH GENERAL OR SPECIALIST DOCTOR (INTERNIST, GYNECOLOGIST, PEDIATRICIAN, AND GASTROENTEROLOGIST)</h3>

                    <p class="__terms-purchase-text">
                        In case of illness or medical emergency, the user may have immediate contact via video conference with general practitioners, virtually personalized, who will help take the necessary measures to stabilize the user and assist with their discomfort. The service must be coordinated from the beginning by SSIST to validate the benefit. The service does not cover any medical expenses incurred. Under no circumstances may the doctor provide a diagnosis or prescribe medications. No refund applies.
                    </p>
                    <p class="__terms-purchase-text">
                        The personnel providing this assistance are only licensed physicians, with experience in primary medical care, ethical standards in medicine, and expertise in identifying situations that require another level of care.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                    </p>

                </article>
            </section>


            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">TRAVEL ASSISTANCE AND LEGAL GUIDANCE.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TRANSPORTATION OF A FAMILY MEMBER FOR RECOVERY</h3>

                    <p class="__terms-purchase-text">
                        If the passenger travels alone and is hospitalized for more than five consecutive days due to a condition or illness not excluded in these general conditions, the Company will reimburse the cost of a round-trip ground ticket in economy class, up to the maximum contracted liability limit. It is essential that the passenger, if their health permits, or a family member or representative, notify this situation within a period of 7 days.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">TRANSPORTATION OF A FAMILY MEMBER FOR RECOVERY</h3>

                    <p class="__terms-purchase-text">
                        SSIST will manage and cover the necessary expenses for extending a hotel stay immediately after hospital discharge if this extension is prescribed by the local doctor and the SSIST team. SSIST will manage and cover costs up to a maximum of $2,500 M.N. and/or up to 7 days. Telephone assistance 24 hours a day, 365 days a year.
                    </p>
                    <p class="__terms-purchase-text">
                        Important: Hotel expenses are understood exclusively as simple lodging, not including supermarket expenses, convenience store purchases, food ordered through any application or digital platform, alcoholic beverages, laundry, phone calls, transportation, Internet access, personal expenses, among others. (The previous enumeration is illustrative, not limiting).
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">CONCIERGE AND TRAVEL ADVICE, HOTEL RESERVATIONS AND TRAVEL-RELATED DISCOUNT NETWORKS.</h3>

                    <p class="__terms-purchase-text">
                        SSIST will provide telephone references and information about: travel agencies, weather, exhibitions, exchange rates, shopping centers, exhibitions, hotels, restaurants, museums, galleries, foreign consulate information, reservations, shows, listings, theaters, concerts, nightlife, guidance on passport replacement in case of theft or loss, among others. Telephone service available 24 hours a day, 365 days a year. Unlimited.
                    </p>
                    <p class="__terms-purchase-text">
                        Unlimited access to our discount network for car rentals, travel agencies, hotels, and many other services. Service available 24 hours a day, 365 days a year. No limit on events.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">TELEPHONE LEGAL ASSISTANCE.</h3>

                    <p class="__terms-purchase-text">
                        If the user requires the services of a lawyer, SSIST will provide telephone advice with licensed attorneys specialized in different branches of Law, 24 hours a day, 365 days a year.
                    </p>
                    <p class="__terms-purchase-text">
                        The personnel providing this assistance are only licensed lawyers, experienced in their field, with expertise in identifying situations that require another level of attention and act independently from SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST does not provide legal opinions, advice, or any other type. The lawyer will only provide legal guidance at the moment, and no contact with SSIST can be used to ask legal questions. Additionally, SSIST does not act as a legal advisor or lawyer and is not responsible for information exchanged between the beneficiary and provider.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE SERVICE INFORMATION AS LEGAL AND/OR JURIDICAL ADVICE. NO INFORMATION PROVIDED BY THE SERVICES INTENDS TO SUBSTITUTE THE PROPER CARE OF PROFESSIONALS, INCLUDING THE STUDY OR OPINION, REVIEW OF CASE FILES OF POSSIBLE CRIMINAL AND/OR CIVIL, OR ADMINISTRATIVE INVESTIGATIONS. Do not fail to seek professional advice, nor disregard any advice previously received from information obtained through the Assistance Services. If the user uses information from any Assistance Service, they do so expressly at their own risk and responsibility.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided the user is not at their residence, during the trip and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                This SERVICE is limited exclusively to the user.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Preparation of documents and/or writings that need to be presented in any type of trial, complaint, procedure, or dispute initiated by the user; also does not include preparation of documents and/or writings in any trial, complaint, procedure, or dispute in which the user has been summoned, sued, or called to trial under any procedural figure.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Acts, facts, or omissions contrary to Law, good professional or commercial practices, morals, or good customs.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Anything without limitation that is contrary to law, not strictly in accordance with applicable legislation, provisions, or regulations in force in the National territory.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                When truthful and timely information is not provided to properly address the matter, or for providing false information.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In-person legal representation.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any act aimed at committing any type of fraud.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any act, fact, or omission that requires any of the services detailed in this document’s conditions abroad.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                This SERVICE is limited exclusively to the membership holder when it comes to matters related to divorce, alimony, or custody when the spouse is the opposing party in these matters.
                            </p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any expense, gratuity, judicial or extrajudicial payment other than the attorney's fees.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any legal guidance on matters not specified in this document.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Due to a conflict of interest between the membership holder and potential users, guidance and representation in family matters such as divorce, alimony, and custody will only be provided to the membership holder.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        This service is available 24 hours a day, 365 days a year. The call or video conference will have a maximum duration of thirty minutes.
                    </p>
                    <p class="__terms-purchase-text">
                        The video consultation can be conducted from any mobile device (cell phone, tablet) or PC with a front camera and data connection (preferably Wi-Fi) through the digital platform operated by SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        The user must contact the service line, and if a video medical consultation is required, a link to the SSIST platform with the access details will be sent to their email or cell phone.
                    </p>
                </article>
            </section>

            
            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">PET ASSISTANCE.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TELEVETERINARY SERVICE (DOG AND/OR CAT)</h3>

                    <p class="__terms-purchase-text">
                        Upon user request, unlimited telephone assistance will be provided by veterinary doctors to advise on various cases, such as:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Emergencies</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Preventive health</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Nutrition</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Education and behavior</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Vaccination plan</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Pre-veterinary consultation</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Reproductive health</p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">Guidance on medication costs</p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        This service will be available Monday to Friday from 9:00 AM to 7:00 PM and Saturday from 9:00 AM to 2:00 PM.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided you are not at your residence, during the trip and 6 days after until reaching your residence</strong>
                    </p>

                    <h3 class="__subtitle-section">REGULATIONS FOR TRAVELING WITH PETS AND SERVICE ANIMALS</h3>

                    <h3 class="__subtitle-section">GUIDELINES FOR TRANSPORTING PETS ON THE BUS</h3>

                    <p class="__terms-purchase-text">
                        Customers may bring pets into the passenger cabin: only dogs and cats are allowed, meeting the following requirements:
                    </p>

                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pets must travel inside a rigid or semi-rigid Kennel-type carrier that meets the following specifications:
                            </p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        The maximum weight of the pet must be 15 kg (including the carrier), the maximum dimensions of the carrier are: 71 cm long x 52 cm wide x 54 cm high, only one pet per carrier is allowed. There must be enough space for your pet to stand, move, and turn naturally without touching the walls. Note: if the pet exceeds 15 kg, it CANNOT TRAVEL.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                There must be enough space for your pet to stand, move, and turn naturally without touching the walls.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Vaccination card must be presented with a complete scheme according to the pet's age, specifying the date of rabies vaccination and its validity. Sedation is not required (Consult your veterinarian).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Only one pet per passenger is allowed, limited to 2 pets per bus, identified with the image or subject to availability.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The passenger must carry a cleaning kit consisting of a diaper or absorbent pad, cloth, and waste bag. The owner is responsible for completely cleaning up their pet's waste.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The company will transport brachycephalic domestic animals in the passenger cabin following the required dimensions, weight, and documents; the client must fill out a liability waiver stating that the pet's travel will be entirely the passenger's responsibility due to the risk of respiratory syndrome typical of these breeds.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Dogs classified as dangerous breeds are not allowed in the passenger cabin: Pit Bull Terrier, Staffordshire Bull Terrier, American Staffordshire Terrier, Rottweiler, Dogo Argentino, Fila Brasileiro, Tosa Inu, and Akita Inu, or depending on physical build, musculature, height, and weight. Only documented transport in the luggage compartment is allowed.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The established amount for pet transport must be covered according to the season: Low 75% of the seat value; High 100% of the seat value, both based on adult fare.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In all cases, the corresponding liability waiver must be completed to transport the pet.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided you are not at your residence, during the trip and 6 days after until reaching your residence</strong>
                    </p>

                    <h3 class="__subtitle-section">REGULATIONS FOR TRAVELING WITH PETS AND SERVICE ANIMALS</h3>

                    <h3 class="__subtitle-section">PET FUNERAL ASSISTANCE (COLLECTION, CREMATION, AND DELIVERY OF ASHES)</h3>

                    <p class="__terms-purchase-text">
                        In the event of death due to an accident or natural causes, certified by a licensed veterinarian with an original autograph signature, the pet will be cremated, applicable only with the SSIST provider network. The event must be coordinated from the beginning with SSIST. No reimbursement applies.
                    </p>

                    <p class="__terms-purchase-text">
                        Covered accidents include: being run over, injuries from attacks by other pets or animals, trauma or injuries from accidents, falls, and injuries from sudden and external violent action.
                    </p>
                    <p class="__terms-purchase-text">
                        When requesting the pet euthanasia service, the user must have the letter issued by the veterinarian indicating the cause of the accident and professional license. Service time is subject to the availability of pet crematoriums.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided you are not at your residence, during the trip and 6 days after until reaching your residence</strong>
                    </p>

                    <h3 class="__subtitle-section">POST-TRIP FLEA TREATMENT IF REQUIRED.</h3>

                    <p class="__terms-purchase-text">
                        This benefit is provided post-trip if fleas were acquired.
                    </p>

                    <p class="__terms-purchase-text">
                        To validate the benefit, the passenger must contact our Pet Murguía Attention line to visit a veterinarian from our network to receive the service.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, provided you are not at your residence, during the trip and 6 days after until reaching your residence</strong>
                    </p>
                </article>
            </section>

            <section class="__sections">
                <h3 class="__subtitle-section">REGULATIONS FOR TRAVELING WITH PETS AND SERVICE ANIMALS</h3><br>

                <div id="pets-table-container" class="table-container">
                    <app-table-pets id="pets-table" lang="en"></app-table-pets>
                </div>
            </section>

    `;
		this.loadAndSetPetsTableData(
			"#pets-table",
			"../../src/data/table-pets-3.json",
		);
	}
	async loadAndSetPetsTableData(tableElementSelector, jsonPath) {
		const tableElement = this.querySelector(tableElementSelector);
		const response = await fetch(jsonPath);
		const data = await response.json();
		tableElement.setTableData(data);
	}
}

customElements.define(
	"page-protected-traveler-plus",
	PageProtectedTravelerPlus,
);
