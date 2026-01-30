/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../js/slick.js?v=1.0.2";
import "../../../components/app-destinations-table.js";

class PageProtectedTravelerLuxury extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
         <app-cotiza></app-cotiza>

            <app-modal-doters></app-modal-doters>

            <app-banner-slider
                slides-data='[
                {"id": "slide1", "title": "Banner 1", "image": "../../../src/assets/img/banner/promociones/web/viajero_protegido.webp","mediumImage": "../../../src/assets/img/banner/promociones/tablet/viajero-protegido-tablet.webp", "smallImage": "../../../src/assets/img/banner/promociones/movil/viajero-protegido-mobile.webp", "link": "#index.html/banner1"}
                ]'
            >
            </app-banner-slider>

            <app-payments></app-payments>

           <section class="__section">
                <app-section-title section-title="Terms and Conditions LUXURY"></app-section-title> </section>
                <div class="btn-group-pages">
                    <a class="btn-enable" href="./protected-traveler.html" class="__btn">Basic Service</a>
                    <a class="btn-disable" class="__btn">Luxury Service</a> 
                    <a class="btn-enable" href="./protected-traveler-plus.html" class="__btn">Plus Service</a> 
                </div>

                <h3 class="__title__section">IAMSA Basic General Conditions</h3>

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
                            Death as a result of an accident suffered by the passenger during the trip and within ninety (90) calendar days following the date of the accident, in which case the company will pay the contracted sum insured to the designated beneficiaries.
                        </p>
                        <p class="__terms-purchase-text">
                            From the above sum insured, any amount previously paid to the passenger for benefits covered under the Organic Losses coverage of this policy will be deducted, when such losses were caused by the same accident that caused death.
                        </p>
                        <p class="__terms-purchase-text">
                            Minimum age of acceptance for this benefit: 12 years.
                        </p>
                        <p class="__terms-purchase-text">
                            Requirements: Death certificate, report to authorities, official identification of the passenger and their beneficiaries.
                        </p>
                        <p class="__terms-purchase-text">
                            Requirements: Death certificate, report to authorities, official identification of the passenger and their beneficiaries.
                        </p>
                        <p class="__terms-purchase-text">
                            <strong>Coverage applicable only if the event occurs during the trip.</strong>
                        </p>
                        <h3 class="__subtitle-section">Exclusions:</h3>
                        <ol type="A" class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Traffic accidents not reported to authorities.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Due to fault or accident while under the influence of alcohol, drugs or medications
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Mental illnesses or deficiencies, personality disorders.
                                </p>
                            </li>

                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Infection, poisoning or inhalation of smoke, gases, except due to an accident.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Injuries intentionally caused by the passenger, suicide or attempted suicide.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Accidents, injuries or death occurring when the passenger is a pilot, mechanic or crew member of an airline, maritime or land transport, that is not a concessioned public passenger transport company on a normally established route subject to regular schedules.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Accidents, injuries or death of the passenger when riding as occupant or pilot of any automobile or other vehicle for racing, testing, or safety, endurance, or speed contests, except as a spectator.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Injuries suffered in any type of military service, in brawls when the passenger is the instigator, rebellion, criminal acts, insurrections or violent demonstrations in which the passenger participates directly
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Injuries suffered while performing activities such as skydiving, diving, American football, mountaineering, climbing, boxing, wrestling, charrería, skiing, bullfighting, aerial sports, martial arts, horse riding, speleology, rugby, and rappelling, whether amateur or professional
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Pre-existing illnesses at the time of policy contracting.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    When the passenger is transported on a motorcycle as a driver or passenger.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Total and permanent disability due to any illness.
                                </p>
                            </li>
                        </ol>

                        <h3 class="__subtitle-section">ORGANIC LOSSES SCALE "A"</h3>
                        <p class="__terms-purchase-text">
                            In the event that the passenger suffers any of the organic losses stipulated in the contracted indemnity table, as a result of a covered accident and within 90 days following its occurrence, indemnification will be based on the percentage of the sum insured indicated in the indemnity table.
                        </p>
                        <p class="__terms-purchase-text">
                            Requirements: Incident report, official identification of the passenger, medical report plus any tests performed
                        </p>
                        <p class="__terms-purchase-text">
                            <strong>Coverage applicable only if the event occurs during the trip.</strong>
                        </p>

                        <h3 class="__subtitle-section">TOTAL AND PERMANENT DISABILITY DUE TO ACCIDENT</h3>
                        <p class="__terms-purchase-text">
                            In the event that the passenger suffers total and permanent disability due to a covered accident, which is determined within ninety (90) calendar days following its occurrence, the company will pay the passenger the contracted sum insured.
                        </p>
                        <p class="__terms-purchase-text">
                            Applicable age limits: minimum 15 years and maximum 64 years 11 months Requirements: Official identification of the passenger, total and permanent disability determination issued by a Social Security Institution or a specialist in occupational medicine with professional license, certificates and specialists in the matter, as well as all exams, analyses and documents used to determine total and permanent disability, which will be evaluated by a certified specialist in the field by the Council of Occupational Medicine Specialty
                        </p>
                        <p class="__terms-purchase-text">
                            <strong>Coverage applicable only if the event occurs during the trip.</strong>
                        </p>
                        <p class="__terms-purchase-text">
                            Conditions:
                        </p>
                        <ul class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    The luggage has been permanently lost, damaged, or stolen during the trip and during regular transport.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    The luggage has been registered and dispatched by the transport company.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    The transport company has acknowledged in writing the permanent loss or theft of the luggage.
                                </p>
                            </li>
                        </ul>
                        <p class="__terms-purchase-text">
                            Requirements: Letter from IAMSA/GHO validating the incident.
                        </p>


                        <h3 class="__subtitle-section">LOSS, THEFT OR DAMAGE OF REGISTERED LUGGAGE</h3>
                        <p class="__terms-purchase-text">
                            In case of total theft, permanent loss or damage of registered luggage during covered transport, payment to the passenger of the sum insured established in the policy will be coordinated.
                        </p>
                        <p class="__terms-purchase-text">
                            Conditions:
                        </p>
                        <ul class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    The luggage has been permanently lost, damaged, or stolen during the trip and during regular transport.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    The luggage has been registered and dispatched by the transport company
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    The transport company has acknowledged in writing the permanent loss or theft of the luggage.
                                </p>
                            </li>
                        </ul>
                    <p class="__terms-purchase-text">
                        Requirements: Baggage claim ticket when the luggage is in the bus trunk and a liability waiver from the bus company.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the incident occurs during the trip.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        Exclusions:
                    </p>
                    <p class="__terms-purchase-text">
                        The Company will in no case be responsible for losses and/or damage to the insured material goods due to:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Partial Losses or Thefts
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Aesthetic or functional damage to checked luggage.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Disappearance or loss. (The actual value of lost luggage will not be considered.)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Claims made more than 12 hours after the Insured arrived at their destination.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Luggage sent as: freight or courier.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Prior to the scheduled departure date of the Insured's trip as indicated on the transport ticket issued by the commercial transport company.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Total loss or theft of checked luggage. The following items are not covered (The list is exhaustive, not illustrative):
                            </p>
                        </li>

                        <ol type="a" class="__terms-purchase-list">

                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Harps, pianos, paintball equipment, carpets and rugs, animals of any species, items presumed for resale and/or commerce, unless proven otherwise and not for personal use, headphones, hearing aids, artificial teeth, dentures, medical and dental accessories and orthopedic devices, glasses and contact lenses, bicycles, snowboard boards and skis, checks, traveler's checks, banknotes, bonds, postal or fiscal stamps, promissory notes, prepaid coupons, travel tickets, event tickets, obligations or documents of any kind, accounting books and commercial books, as well as contents of safes, vaults, or cash registers, passports, visas, personal identification documents, transport tickets, deeds and other documents, cash, credit cards, debit cards, payment cards, negotiable securities, gold, silver, stamps, and keys, wheelchairs, strollers, canes, and other mobility devices, as these items are understood to be required for the Insured's mobility and are not considered items that should naturally be in checked luggage, vehicles, motorcycles, motorcycle accessories and engines, airplanes, boats, and generally any means of transport that allows the transfer of people or goods from one place to another. Passports, visas, personal identification documents, transport tickets, deeds and other documents such as deeds, cash, credit cards, debit cards, payment cards, negotiable securities, gold, silver, stamps, and keys. Wheelchairs, strollers, canes, and other mobility devices, since these items are understood to be required for the Insured's mobility and are not considered items that should naturally be in checked luggage. Vehicles, motorcycles, motorcycle accessories and engines, airplanes, boats, and generally any means of transport that allows the transfer of people or goods from one place to another.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Merchandise and professional use materials, currency, banknotes, travel tickets, stamp collections, titles of any nature, identification documents and, in general, all paper documents and securities, credit cards, tapes, disks or data carriers with memory, documents recorded on magnetic strips or filmed, collections and professional material, prostheses, animals, plants, false teeth or dental bridges, sports equipment, art objects, luggage not checked with the commercial transport company, except for carry-on luggage, according to item c "theft of carry-on luggage" of this section.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Any valuable object and/or electronic or computing equipment, electronic devices identified as "gadgets," "wearables," "pocket" or handheld devices, and their accessories such as cell phones, tablets, laptops, video games, or cameras and/or electronic equipment, unless contracted under item "c" theft of carry-on luggage of this section and always carried as carry-on luggage. "c" Looting of checked luggage of this section.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Any type of non-violent theft, loss, or delay of luggage if it is not under the custody of the commercial transport company and/or lodging provider. This exclusion does not apply to item "c" Theft of carry-on luggage of this section.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Loss, misplacement, or forgetfulness, non-violent theft, and delay of luggage caused by any negligence of the Insured.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Luggage delay occurring on the return trip to the Insured's permanent residence.
                                </p>
                            </li>
                        </ol>
                    </ol>

                    <h3 class="__subtitle-section">THEFT OF CARRY-ON LUGGAGE</h3>
                    <p class="__terms-purchase-text">
                        Compensation will be provided through reimbursement up to the total insured amount contracted, in case of theft of carry-on luggage, including electronic and/or computing equipment, electronic devices identified as "gadgets," "wearables," "pocket" or handheld devices and their accessories such as cell phones, tablets, laptops, video games, among others inside their carry-on luggage.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Coverage applicable only if the incident occurs during the trip.</strong>
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Exclusions.</strong>
                    </p>

                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Passports, visas, personal identification documents, transport tickets, deeds and other documents such as deeds, cash, credit cards, debit cards, payment cards, negotiable securities, gold, silver, stamps, and keys.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cash contained in the bag.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Resulting from any crime involving the direct participation of the Insured, any of their ancestors or descendants up to the second degree and/or relatives by affinity up to the second degree, as well as an employee, dependent, or servant of the Insured.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                As a result of attacks, riots, popular disorders, or other acts classified by law as offenses against public order.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">TRANSPORT OF BODY DUE TO ACCIDENTAL DEATH</h3>
                    <p class="__terms-purchase-text">
                        In case of accidental death of the passenger during the trip, coverage will be provided up to the insured sum limit:
                    </p>
                    <ol type="A" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Procedures for transporting or repatriating the body, including transportation expenses up to burial.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Burial at the place of death or transfer of ashes to the passenger's permanent residence, at the request of the relatives.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transportation expenses for the passenger's companions to their respective home or the burial site, provided that such transportation cannot be carried out using the transport arranged for the trip.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transportation expenses for the passenger's companions to their respective home or the burial site, provided that such transportation cannot be carried out using the transport arranged for the trip.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Payment of a round-trip ticket in the same class traveled by the insured for a family member, using the most convenient means of transport from their residence to the place of death, only if the deceased passenger traveled without an adult companion and local authorities require a family member or representative. Within the same insurance provider established in the plan.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Requirements: Payment will be made through reimbursement to the passenger upon presentation of a copy of the death certificate and the required invoice(s), voucher(s), and/or receipt(s).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                <strong>Coverage applicable only if the incident occurs during the trip.</strong>
                            </p>
                        </li>
                    </ol>


                    <h3 class="__subtitle-section">MEDICAL EXPENSES DUE TO ACCIDENT OR ILLNESS</h3>
                        <p class="__terms-purchase-text">
                            In case the passenger suffers an accident within 7 days following its occurrence, or a serious illness, medical emergency, emergency surgery, or the onset of a non-preexisting illness during the trip requiring medical treatment, surgical intervention, hospitalization, or the use of ambulance, medication, laboratory, and imaging studies up to the Usual and Customary Expense; the amount of covered medical expenses will be reimbursed. Medical expenses incurred for services during a passenger's trip will preferably be covered as direct payment to the service provider in agreement with the Company, except in the case of an emergency.
                        </p>
                        <p class="__terms-purchase-text">
                            Covered expenses include:
                        </p>
                        <ol type="A" class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Emergency Medical Transfer to the nearest hospital and return to the place of accommodation.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Medical and hospitalization expenses due to medical emergency, including the first consultation and newborn expenses for pregnancies up to the 7th month.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Transfer and stay of a companion for hospitalizations longer than 5 days.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Transfer and accompaniment of minors under 16 years for hospitalizations longer than 5 days or in case of death.
                                </p>
                            </li>
                        </ol>
                        <p class="__terms-purchase-text">
                            The relationship between the insured passenger under this coverage and medical providers is the passenger’s responsibility, therefore the Company assumes no liability for the service received or payment of damages.
                        </p>
                        <p class="__terms-purchase-text">
                            Requirements: Payment will be made through reimbursement to the passenger upon presentation of the medical report, performed studies, and the required invoice(s), voucher(s), and/or receipt(s).
                        </p>
                        <p class="__terms-purchase-text">
                            <strong>Coverage applicable only if the incident occurs during the trip.</strong>
                        </p>

                        <h3 class="__subtitle-section">Exclusions:</h3>

                        <ol type="A" class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    If the illness is of preexisting origin and symptomatic manifestation prior to the start of the insurance coverage contracted by the Insured, including its consequences and exacerbations. Except as specified in item B of this section.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Conditions, injuries, and their consequences or complications resulting from treatments provided by non-professional medical personnel.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Any replacement and/or repair of prostheses or orthoses, orthopedic articles, hearing aids, glasses, and contact lenses.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Diseases derived from chronic conditions or diagnosed prior to the trip, provided they are not medically controlled; in emergencies only the first expense to stabilize the patient will be reimbursed.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Transplants of any type of organs or tissues.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Mental illnesses, psychiatric disorders, depression, or any type of mental or nervous illness. Psychological assistance under this section.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Medical or hospital expenses carried out without a medical prescription.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Routine check-ups or medical exams, that is, medical expenses without a diagnosis of a covered illness or accident.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Rehabilitation or physical recovery treatments not resulting from medical assistance provided during the trip.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Sexually transmitted diseases (STDs).
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Hypertension and all its consequences and derivations, including blood pressure controls.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Injuries resulting from surgical interventions or medical treatments not caused by covered medical assistance provided during the trip.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Any additional expense not related to medical treatment such as: tissues, hairdressing, body lotions, creams and cosmetics, companion's food, safe, bail fees, candy shop, parking, florist, telephone service, entertainment rentals, TV control, bookstore service, newspapers, restaurant and cafeteria service. (The above enumeration is illustrative, not limiting.)
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    If the travel destination has travel alerts due to health, security, weather, or other reasons issued by local or international authorities.
                                </p>
                            </li>
                        </ol>

                        <h3 class="__subtitle-section">PET LIABILITY</h3>

                        <p class="__terms-purchase-text">
                            Covers expenses for which the passenger is civilly liable to a third party due to acts performed without intent, either through negligence in care, supervision, or aggressiveness of the insured pet, provided the acts occurred during the covered period.
                        </p>
                        <p class="__terms-purchase-text">
                            Requirements: Claim letter issued by the affected third party, claim letter from the passenger, both properly quantified and indicating the date of the incident and, if filed, the complaint with authorities.
                        </p>
                        <p class="__terms-purchase-text">
                            <strong>Coverage applicable only if the incident occurs during the trip. Exclusions:</strong>
                        </p>
                        <ol type="a" class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Acts by the insured intended for the pet to cause harm to third parties.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Damages not caused by the pet. Consequential moral damage and/or general consequential loss.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Damages that the pet may cause to family members or persons related to the Insured.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Sanctions, fines, or any type of reprimand incurred by the Insured due to lack of pet supervision.
                                </p>
                            </li>
                        </ol>

                        <h3 class="__subtitle-section">TRIP CANCELLATION</h3>

                        <p class="__terms-purchase-text">
                            Operates from ticket purchase until the start of the trip for the purchased ticket and covers:
                        </p>
                        <p class="__terms-purchase-text">
                            Trip cancellation before departure.
                        </p>
                        <p class="__terms-purchase-text">
                            Non-refundable expenses for any transportation, tour, excursion, and/or accommodation paid but unused and unrecoverable.
                        </p>
                        <p class="__terms-purchase-text">
                            Cancellations made by the passenger themselves before the trip start date.
                        </p>
                        <p class="__terms-purchase-text">
                            Subject to the following reasons preventing the passenger from traveling:
                        </p>


                        <ul class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Death, accident, or serious illness or medical emergency, or emergency surgery, or the appearance of a non-preexisting illness at the time of coverage purchase.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Accident of the passenger or relatives, requiring at least 24 hours of hospitalization or temporary disability during the ten (10) days prior to the trip and after the coverage purchase.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cancellations resulting from adverse weather.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Strikes affecting public transportation for more than 72 hours, preventing the passenger from taking the trip.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Loss or damage to the passenger's property due to fire, explosion, storm, hail, lightning, flood, avalanche, volcanic eruption, earthquake, landslide, or crime perpetrated by a third party.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Passenger job loss as a result of dismissal by the employer.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    The passenger’s incorporation into a new job position with an employment contract.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Geographic transfer of the job position requiring a change in the passenger's habitual residence.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    School exams that the passenger must take to advance to the next school year and/or obtain a study certificate.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Official declaration of a disaster zone at the place of residence or at the destination or transit to the destination.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    If before starting the trip and after purchasing the policy, the pregnancy of the holder, spouse, or partner presents complications, supported by the corresponding medical documentation.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Theft or loss within 48 hours before departure of official identification documents necessary to board.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Due to error or omission by the authorities issuing visas and permits for entry to the destination, which serve as necessary identification documents to undertake the trip.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    A vaccination contraindication, vaccine side effects, or medical impossibility to follow a necessary preventive treatment for the trip destination.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Due to an accident of the means of transport or on the way to the airport, dock, or port, railway station, or bus station, resulting in a delay of more than 2 hours.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Cancellation of the passenger's religious or civil marriage ceremony.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Adoption of a minor by the passenger.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Judicial requirement to appear as defendant, plaintiff, witness, or juror for the passenger.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Summons to present and/or sign official documents at the request of Public Administration bodies.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Summons for the passenger to perform medical or public service by the competent local authorities.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    Additional costs incurred if a travel companion cancels the trip due to any covered risks, and the passenger decides to proceed, resulting in extra accommodation costs per person.
                                </p>
                            </li>
                        </ul>

                        <p class="__terms-purchase-text">
                            <strong>Coverage applicable only if the incident occurs during the trip.</strong>
                        </p>
                        <p class="__terms-purchase-text">
                            Exclusions:
                        </p>

                        <ol type="A" class="__terms-purchase-list">
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    If, at the date of coverage purchase, the trip has not been fully paid or there are debts to the travel agency and/or travel provider.
                                </p>
                            </li>
                            <li class="__terms-purchase-item">
                                <p class="__terms-purchase-text">
                                    If the passenger and/or their travel companion(s) present:
                                </p>
                            </li>
                            <ol type="a" class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        A medical contraindication to undertake the trip.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Suicide attempt or participation in any criminal act actively.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Intoxication, drug addiction, or being under non-prescribed narcotics without medical supervision.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Legal prohibitions or being deprived or restricted of liberty by competent authorities.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Undertaking medical or dental treatments not classified as a medical emergency and any type of rehabilitation treatments.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Preexisting illnesses or injuries at the time of coverage purchase, provided the coverage was purchased at least 48 hours before the trip.
                                    </p>
                                </li>
                            </ol>
                        </ol>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">DESCRIPTION OF ASSISTANCES.</h3>
                    <h3 class="__subtitle-section">SAFE WOMAN ASSISTANCE.</h3>
                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_2_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">LEGAL ASSISTANCE FOR WOMEN ABUSE</h3>

                    <p class="__terms-purchase-text">
                        Telephone legal advice will be provided for women abuse through a law professional, when it involves acts, facts, services, or products duly covered by applicable laws and regulations in the different branches and areas of law.
                    </p>
                    <p class="__terms-purchase-text">
                        The assistance will include, among others:
                    </p>
                    <p class="__terms-purchase-text">
                        Advice on legal documents.
                    </p>
                    <p class="__terms-purchase-text">
                        Succession processes.
                    </p>
                    <p class="__terms-purchase-text">
                        Family rights.
                    </p>
                    <p class="__terms-purchase-text">
                        Insurance and benefits.
                    </p>
                    <p class="__terms-purchase-text">
                        Legal responsibilities.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">PANIC BUTTON</h3>

                    <p class="__terms-purchase-text">
                        This assistance is integrated into a Web App with the following benefits: Quick Activation: One click or keyboard shortcut.
                    </p>
                    <p class="__terms-purchase-text">
                        Alert Sending: Notification with location, user data, and reason for the emergency. Immediate Response: Call, live chat, or automatic message.
                    </p>
                    <p class="__terms-purchase-text">
                        Use Cases: Personal safety in case of harassment. Extras: Emergency contacts, real-time monitoring, safe deactivation function.
                    </p>
                    <p class="__terms-purchase-text">
                        Without a doubt, this is a fast and effective solution in critical situations.
                    </p>
                    <p class="__terms-purchase-text">
                    <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>         
                    </p>
                </article>
            </section>


            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">EMERGENCY SERVICES.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Seguro 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Seguro 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_3_Basico-3.webp" alt="Seguro 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">EMERGENCY DOCTOR HOME VISIT.</h3>

                    <p class="__terms-purchase-text">
                        Coordination of a medical consultation with a general practitioner; the doctor assigned by SSIST will visit the beneficiary’s home to carry out the medical consultation. This service is available 24 hours a day, 365 days a year.
                    </p>
                    <p class="__terms-purchase-text">
                        The general practitioner performs a general examination for physical diagnosis purposes, without performing any procedure involving surgical equipment such as dressing, injection, catheterization, or suturing. This service must be coordinated from the start by SSIST. No reimbursements apply.
                    </p>
                    <p class="__terms-purchase-text">
                        The referred client may cancel the appointment with the general practitioner with a minimum of 48 hours' notice. If the client fails to cancel within this period or does not attend the scheduled appointment coordinated by SSIST, it will be considered a provided service and the applicable event count will be applied.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE SERVICE INFORMATION AS MEDICAL AND/OR HEALTH ADVICE. NONE OF THE INFORMATION PROVIDED BY THE SERVICES IS INTENDED AS A SUBSTITUTE FOR PROPER CARE BY HEALTH PROFESSIONALS, INCLUDING DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. ALWAYS SEEK PROFESSIONAL MEDICAL ATTENTION AND DO NOT DISREGARD ANY PREVIOUS ADVICE RECEIVED BASED ON INFORMATION OBTAINED THROUGH THE SERVICES. USE OF THE INFORMATION IS AT THE BENEFICIARY’S OWN RISK AND RESPONSIBILITY.
                    </p>
                    <p class="__terms-purchase-text">
                    <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>     
                    </p>
                    <p class="__terms-purchase-text">
                        The call will last a maximum of thirty minutes, after which the communication will be cut off without SSIST liability.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE SERVICE INFORMATION AS MEDICAL AND/OR HEALTH ADVICE. NONE OF THE INFORMATION PROVIDED BY THE SERVICES IS INTENDED AS A SUBSTITUTE FOR PROPER CARE BY HEALTH PROFESSIONALS, INCLUDING DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS. ALWAYS SEEK PROFESSIONAL MEDICAL ATTENTION AND DO NOT DISREGARD ANY PREVIOUS ADVICE RECEIVED BASED ON INFORMATION OBTAINED THROUGH THE SERVICES. USE OF THE INFORMATION IS AT THE BENEFICIARY’S OWN RISK AND RESPONSIBILITY.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">EMERGENCY AMBULANCE SERVICE.</h3>

                    <p class="__terms-purchase-text">
                        In case the beneficiary or a direct family member suffers an accident or illness, and/or requires transportation to a hospital due to an emergency, a basic ground ambulance will be coordinated to transport them to the nearest hospital of their choice.
                    </p>
                    <p class="__terms-purchase-text">
                        If the client requests a special ambulance (transfer, COVID, specialized), a quote will be provided and the cost covered by the beneficiary. Service is available 24/7, 365 days a year. The service must be coordinated from the start by SSIST. Emergency is defined as a situation that endangers life, the viability of organs, or bodily integrity, requiring immediate medical attention.
                    </p>
                    <p class="__terms-purchase-text">
                        The emergency ambulance service consists of a basic mobile emergency unit with a driver, a medical emergency technician on board, and equipment according to NOM34 standards.
                    </p>
                    <p class="__terms-purchase-text">
                        The basic-level medical emergency technician will have knowledge of basic CPR, anatomy and elementary physiology, lifting, mobilization, immobilization, and patient packaging, basic airway management, evaluation and examination, identification and management of trauma issues (bleeding, shock, soft tissue, muscular and skeletal system, head and spine), elementary pharmacology, identification and management of medical-clinical issues (respiratory, cardiovascular, diabetic, allergic, environmental, obstetric, behavioral, and poisoning emergencies), medication administration under medical supervision (subcutaneous, oral, inhalation), ambulance operation, communication systems, initial hazardous materials incident management, basic rescue techniques, beneficiary selection and classification, and aircraft interaction. The ambulance unit is a mobile ground unit for patients requiring prehospital medical attention with basic life support.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST is not responsible for any complications during medical transport or its outcome. However, SSIST will assist the beneficiary in claiming responsibility from any third party liable.
                    </p>
                    <p class="__terms-purchase-text">
                        Only transportation to the nearest hospital is covered. If unavailable and transport to another hospital is necessary, it will count as a second event, and additional costs will be borne by the beneficiary.
                    </p>
                    <p class="__terms-purchase-text">
                        If the ambulance must wait for patient admission or discharge, or any circumstance outside the provider’s control, the beneficiary must pay the additional hourly cost directly to the provider, which will be communicated at the time.
                    </p>
                    <p class="__terms-purchase-text">
                        If the beneficiary exceeds standard weight limits requiring a larger ambulance, the additional cost must be paid directly to the provider.
                    </p>
                    <p class="__terms-purchase-text">
                        The ambulance service does not cover COVID-19, monkeypox, or any other pandemic disease; separate quotes will apply and must be paid by the beneficiary.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST is not responsible for services provided by providers or their functions. SSIST only coordinates and manages provider services, assisting the beneficiary in addressing issues with the provider.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The beneficiary is responsible for hospitalization costs, medications, surgical materials, and medical fees.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Specialized ambulance costs will be borne by the beneficiary.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rescue or situations where the beneficiary is in inaccessible or dangerous areas, preventing safe access by ambulance or requiring specialized rescue personnel.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        Examples include forests, jungles, roads, deserts, mountains, seas, lakes, dams, rivers, beaches, remote sites, cliffs, caves, hills, peaks, oil platforms, ships, yachts, and other terrain or location accidents.
                    </p>
                    <p class="__terms-purchase-text">
                        Lack of express authorization from the treating doctor certifying clinical stability for scheduled transfers.
                    </p>

                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                SSIST is not responsible if the hospital reserves admission rights.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Emergency services will follow competent authority regulations.
                            </p>
                        </li>
                    </ol>

                    <h3 class="__subtitle-section">EMERGENCY DENTAL ASSISTANCE</h3>

                    <p class="__terms-purchase-text">
                        In case of an accident requiring immediate dental intervention, SSIST will provide up to $2,500 to cover expenses. Any excess must be paid by the user; subsequent events will have preferential pricing. Telephone support is available 24/7.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">FUNERAL ASSISTANCE.</h3>

                    <p class="__terms-purchase-text">
                        In case of death, the beneficiary is covered for natural or accidental causes at SSIST’s funeral network agencies, providing the following services:
                    </p>

                    <ol type="1" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                24/7 personalized service via the Call Center.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Personalized assistance with the Public Ministry for recovering the deceased within national territory.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfers:
                            </p>
                            <ol type="a" class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        First transfer of the deceased from the place of death to SSIST funeral agencies (Mexico City & Metro area) or the corresponding agency in other states.
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Second transfer from the wake location to the designated cemetery or crematorium (subject to availability).
                                    </p>
                                </li>
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        Transfers between points cover a maximum of 60 KM within the same locality; distances beyond 30 km will incur a $30 MXN per km surcharge plus any required services.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cosmetic arrangement of the body (makeup and dressing).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Embalming (upon beneficiary request)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic metal coffin.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Basic metal coffin (for cremation use).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Funeral hall or basic chapel for 20 people or home wake equipment if permitted.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Facilities for religious services.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cremation and basic urn delivery (if available in the area and permitted).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Coverage includes children under 21 and up to 69 years; family members according to each financial plan.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ol type="I" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Procedures and transfers for medico-legal death cases (Public Ministry and Forensic Medical Service).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any costs from procedures before the Public Ministry and Forensic Medical Service.
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
                                Cemetery fees and procedures.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Out-of-town transfers (land or air).
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
                                Niche, grave, crypt, or vault.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transport for companions.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Failure to request service through the Call Center (no reimbursement).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                If service was already contracted independently, no reimbursement applies.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                False declarations regarding age of beneficiaries.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Force majeure or unforeseen events preventing service.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Access to obituaries in newspapers.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Maximum coffin weight is 100 kg; excess may require a different coffin at no additional cost above the coverage.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Suicide.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        In case of pet death due to accident or natural causes, certified by a licensed veterinarian, cremation is covered through SSIST’s provider network. Service must be coordinated with SSIST; no reimbursement applies.
                    </p>
                    <p class="__terms-purchase-text">
                        Covered accidents include: vehicular accidents, attacks by other animals, trauma from falls or violent external actions.
                    </p>
                    <p class="__terms-purchase-text">
                        When requesting pet euthanasia service, the user must provide a veterinary certificate specifying the cause and professional license.
                    </p>
                    <p class="__terms-purchase-text">
                        Service timing is subject to availability of pet crematoriums.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before starting the trip, as long as the user is not at their residence, during the trip, and 6 days after until reaching the place of residence</strong>
                    </p>
                </article>
            </section>


            <section class="__sections">
                <article class="__bg-white">
                    <h3 class="__subtitle-section">MEDICAL ASSISTANCE.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TELEPHONE MEDICAL ASSISTANCE.</h3>

                    <p class="__terms-purchase-text">
                        Telephone advice will be provided by a general practitioner when the accredited person and/or direct family member requires medical guidance for a non-urgent condition (pregnancy, COVID, family planning and contraceptives, alcoholism and drug dependence, as well as the use of medications prescribed by a treating physician, side effects of medications, and recommended doses). In addition, a medical record of the accredited person will be created. Service available 24 hours a day, 365 days a year, with no event limit. The service must be coordinated from the beginning by SSIST to validate the benefit.
                    </p>
                    <p class="__terms-purchase-text">
                        The service does not cover any medical expenses incurred. In order to respect good medical practices, the on-call doctor will under no circumstances prescribe medications or provide any diagnosis. No reimbursement applies.
                    </p>
                    <p class="__terms-purchase-text">
                        The personnel attending this assistance are only licensed doctors with professional credentials, experienced in primary medical care, ethical standards in medicine, and skilled in identifying situations requiring another level of care.
                    </p>
                    <p class="__terms-purchase-text">
                        This service will be available 24 hours a day, 365 days a year. The call will have a maximum duration of thirty minutes; after that time the communication will be cut off without liability for SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE INFORMATION FROM THE SERVICES AS MEDICAL AND/OR HEALTH ADVICE. NO INFORMATION PROVIDED BY THE SERVICES IS INTENDED TO SUBSTITUTE FOR PROPER HEALTHCARE BY HEALTH PROFESSIONALS, INCLUDING THE DIAGNOSIS AND TREATMENT OF MEDICAL CONDITIONS.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT STOP SEEKING A MEDICAL PROFESSIONAL, NOR DISREGARD ANY ADVICE PREVIOUSLY RECEIVED BASED ON INFORMATION OBTAINED THROUGH THE SERVICES. IF AN ACCREDITED PERSON USES THE INFORMATION FROM ANY SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as you are not at your place of residence, during the journey and up to 6 days after returning to your place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">MEDICAL DISCOUNT NETWORK.</h3>

                    <p class="__terms-purchase-text">
                        The accredited person will have access to SSIST’s network of medical providers who will grant discounts in pharmacies, clinics, laboratories, and hospitals, ranging from 5% (five percent) to 30% (thirty percent). Service available 24 hours a day, 365 days a year, with no event limit.
                    </p>
                    <p class="__terms-purchase-text">
                        The service must be coordinated from the beginning by SSIST to validate the benefit. No reimbursement applies.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as you are not at your place of residence, during the journey and up to 6 days after returning to your place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">TELEMEDICINE WITH GENERAL PRACTITIONER OR SPECIALIST (INTERNIST, GYNECOLOGIST, PEDIATRICIAN, AND GASTROENTEROLOGIST)</h3>

                    <p class="__terms-purchase-text">
                        In case of illness or medical emergency, the accredited person may have immediate contact through video conference with general practitioners, virtually and personally, who will help take the necessary measures to stabilize the accredited person and assist with their discomfort.
                    </p>
                    <p class="__terms-purchase-text">
                        The service must be coordinated from the beginning by SSIST to validate the benefit. The service does not cover any medical expenses incurred.
                    </p>
                    <p class="__terms-purchase-text">
                        Under no circumstances may the doctor provide a diagnosis or prescribe medications. No reimbursement applies. The personnel attending this assistance are only licensed doctors with professional credentials, experienced in primary medical care, ethical standards in medicine, and skilled in identifying situations requiring another level of care.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as you are not at your place of residence, during the journey and up to 6 days after returning to your place of residence.</strong>
                    </p>
                </article>
            </section>



           <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">TRAVEL ASSISTANCE AND LEGAL GUIDANCE.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TRANSPORTATION OF A FAMILY MEMBER DUE TO CONVALESCENCE</h3>

                    <p class="__terms-purchase-text">
                        In the event that the passenger travels alone and is hospitalized for more than five consecutive days, as a result of an illness or condition not excluded in these general conditions, the Company will reimburse the cost of a round-trip land ticket in economy class, up to the maximum contracted liability limit. It is essential that the passenger, if their health allows, or a family member or representative, give notice of this situation within no more than 7 days.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as the person is not at their place of residence, during the journey, and 6 days after returning to the place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">HOTEL EXPENSES DUE TO CONVALESCENCE</h3>

                    <p class="__terms-purchase-text">
                        SSIST will manage and cover the necessary expenses for the extension of the hotel stay, immediately after being discharged from the hospital, if this extension has been prescribed by the local doctor and the SSIST team. SSIST will manage and cover the costs up to the maximum limit of up to $2,500 MXN and/or up to 7 days. Telephone assistance 24 hours a day, 365 days a year.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as the person is not at their place of residence, during the journey, and 6 days after returning to the place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">CONCIERGE AND TRAVEL ADVICE, HOTEL RESERVATIONS AND DISCOUNT NETWORK RELATED TO TRAVEL.</h3>

                    <p class="__terms-purchase-text">
                        SSIST will provide telephone reference and information about: travel agencies, weather, exhibitions, exchange rates, shopping centers, exhibitions, hotels, restaurants, museums, galleries, information from consulates abroad, reservations, shows, billboards, theaters, concerts, nightlife, guidance on passport replacement in case of theft or loss, among others. Telephone assistance 24 hours a day, 365 days a year. Unlimited.
                    </p>
                    <p class="__terms-purchase-text">
                        Unlimited access to our discount network for car rentals, travel agencies, hotels, and many other services. Service available 24 hours a day, 365 days a year. No event limit.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as the person is not at their place of residence, during the journey, and 6 days after returning to the place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">LEGAL TELEPHONE ASSISTANCE.</h3>

                    <p class="__terms-purchase-text">
                        In case the beneficiary requires the services of a lawyer, SSIST will provide telephone advice with licensed lawyers specialized in different branches of Law, 24 hours a day, 365 days a year.
                    </p>
                    <p class="__terms-purchase-text">
                        The staff handling this assistance are only licensed lawyers with professional credentials, experienced in their field, and with experience identifying situations that require another level of attention, acting independently from SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        SSIST does not provide legal opinions, legal advice and/or any other kind. The lawyer will only provide immediate legal guidance, and no contact with SSIST may be used to ask legal and/or juridical questions. Additionally, SSIST does not act as a legal advisor and/or lawyer, and is not responsible for the information transmitted between the beneficiary and the provider.
                    </p>
                    <p class="__terms-purchase-text">
                        DO NOT TAKE THE INFORMATION FROM THE SERVICES AS LEGAL AND/OR JURIDICAL ADVICE. NO INFORMATION PROVIDED BY THE SERVICES IS INTENDED TO BE A SUBSTITUTE FOR PROPER ATTENTION FROM PROFESSIONALS, INCLUDING STUDY OR OPINION, CASE REVIEWS FOR POSSIBLE INITIATION OF CRIMINAL AND/OR CIVIL OR ADMINISTRATIVE INVESTIGATIONS. DO NOT STOP SEEKING PROFESSIONAL ADVICE, NOR DISMISS ANY ADVICE PREVIOUSLY RECEIVED BASED ON INFORMATION OBTAINED THROUGH THE ASSISTANCE SERVICES. IF THE BENEFICIARY USES THE INFORMATION FROM ANY SERVICE, THEY DO SO EXPRESSLY AT THEIR OWN RISK AND RESPONSIBILITY.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as the person is not at their place of residence, during the journey, and 6 days after returning to the place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">Exclusions:</h3>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                This SERVICE is limited solely to the beneficiary.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Drafting of documents and/or writings required to be presented in any type of trial, complaint, procedure, controversy initiated by the beneficiary; nor does it include drafting documents and/or writings in any trial, complaint, procedure, controversy in which the beneficiary has been summoned, sued or called to trial under any procedural figure.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Acts, facts, or omissions that are contrary to Law, good professional or commercial practices, morals, or good customs.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Anything, without limitation, that is contrary to law or not strictly in accordance with the applicable and current legislation, provisions, or regulations in National territory.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                When truthful and timely information is not provided to properly address the matter, or by incurring in false information.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In-person legal representation.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any act tending to commit any type of fraud.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any act, fact, or omission requiring any of the services detailed in the conditions of this document abroad.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                This SERVICE is limited solely to the membership holder when dealing with matters related to divorce, alimony, custody when the spouse is the opposing party in these matters.
                            </p>
                        </li>

                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any expense, gratification, judicial or extrajudicial payment other than lawyer’s fees.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any legal guidance on matters not specified in this document.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Due to conflict of interest between the membership holder and possible beneficiaries, advice and representation in family matters for divorce, alimony, custody will only be provided for the membership holder.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        This service will be available 24 hours a day, 365 days a year. The call or video conference will have a maximum duration of thirty minutes.
                    </p>
                    <p class="__terms-purchase-text">
                        The video consultation can be carried out from any mobile device (cell phone, tablet) or PC with a front camera and data connection (preferably Wi-Fi) through the digital platform operated by SSIST.
                    </p>
                    <p class="__terms-purchase-text">
                        The beneficiary must contact the service line, and in case a video medical consultation is required, they will be sent a link to the platform operated by SSIST with the access details via email or cell phone.
                    </p>
                </article>
            </section>

            <section class="__sections">
                <article class="__bg-blue">
                    <h3 class="__subtitle-section">PET ASSISTANCE.</h3>

                    <div class="__img-viajero-protegido-group">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-1.webp" alt="Insurance 1" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_1_Basico-2.webp" alt="Insurance 2" class="__img-viajero-protegido">
                        <img src="../../src/assets/img/viajero-protegido/Paso_4_Basico-3.webp" alt="Insurance 3" class="__img-viajero-protegido">
                    </div>

                    <h3 class="__subtitle-section">TELE-VETERINARY (DOG AND/OR CAT)</h3>

                    <p class="__terms-purchase-text">
                        Unlimited telephone assistance will be provided upon the user’s request by veterinarians, to advise on different cases, such as:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Emergencies
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Preventive health
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Nutrition
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Education and behavior
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Vaccination plan
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pre-veterinary consultation
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Reproductive health
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Guidance on medication costs
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        This service will be available Monday to Friday from 9:00 to 19:00 hrs, and Saturday from 9:00 to 14:00 hrs.
                    </p>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as you are not at your place of residence, during the journey, and 6 days after returning to your place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">REGULATIONS FOR TRAVELING WITH PETS AND SERVICE ANIMALS</h3>

                    <h3 class="__subtitle-section">GUIDANCE FOR TRANSPORTING PETS ON BOARD THE BUS</h3>

                    <p class="__terms-purchase-text">
                        Customers may bring pets in the passenger cabin: only dogs and cats will be allowed, meeting the following requirements:
                    </p>

                    <ol type="a" class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Pets must travel inside a rigid Kennel-type or semi-rigid carrier that meets the following specifications:
                            </p>
                            <ul class="__terms-purchase-list">
                                <li class="__terms-purchase-item">
                                    <p class="__terms-purchase-text">
                                        The maximum weight of the pet must be 15 kg (including the carrier). Maximum carrier dimensions: 71 cm long x 52 cm wide x 54 cm high. Only one pet per carrier is allowed. It must have enough space for the pet to stand, move, and turn naturally without touching the walls. Note: if it exceeds 15 kg, IT WILL NOT BE ALLOWED TO TRAVEL.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                It must have enough space for your pet to stand, move, and turn naturally without touching the walls.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                A vaccination record with a complete scheme according to the pet’s age must be presented, specifying the rabies vaccine application date and its validity. The pet does not need to travel sedated (consult your veterinarian).
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Only one pet per passenger is allowed, limited to 2 pets per bus identified with the image or subject to availability.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The passenger must carry a cleaning kit consisting of: diaper or absorbent mat, cloth, and waste bag. It will be the owner’s responsibility to completely clean up their pet’s waste.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The company will transport brachycephalic domestic animals in the passenger cabin, complying with size, weight, and required documents. In all cases, the customer must sign the corresponding liability waiver, specifying that the pet’s trip will be under the passenger’s sole responsibility due to the possibility of developing respiratory syndrome inherent to such breeds.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Dogs of breeds classified as dangerous will not be allowed to travel in the passenger cabin: Pit Bull Terrier, Staffordshire Bull Terrier, American Staffordshire Terrier, Rottweiler, Dogo Argentino, Fila Brasileiro, Tosa Inu, and Akita Inu. Or also, depending on their physical build, musculature, height, and weight. Their transportation will only be allowed as documented baggage in the luggage compartment.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The established fee for transporting the pet must be covered according to the season: Low season 75% of the seat value; High season 100% of the seat value, both based on the adult fare.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                In all cases, the corresponding liability waiver must be signed to transport the pet.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as you are not at your place of residence, during the journey, and 6 days after returning to your place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">REGULATIONS FOR TRAVELING WITH PETS AND SERVICE ANIMALS</h3>

                    <h3 class="__subtitle-section">PET FUNERAL ASSISTANCE (COLLECTION, CREMATION, AND DELIVERY OF ASHES)</h3>

                    <p class="__terms-purchase-text">
                        In case of death due to an accident or natural causes, certified by a licensed veterinarian with an original handwritten signature, cremation of the pet will be carried out, applicable only with SSIST’s provider network. The event must be coordinated from the beginning with SSIST. Refunds do not apply.
                    </p>

                    <p class="__terms-purchase-text">
                        Covered accidents are: being run over, injuries from attacks by other pets or animals, trauma or injuries caused by accidents, falls, and injuries from sudden and external violent actions.
                    </p>
                    <p class="__terms-purchase-text">
                        At the time of requesting the pet euthanasia service, the user must have a letter issued by the veterinarian stating the cause of the accident and professional license number. The service response time will be subject to the availability of pet crematories.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as you are not at your place of residence, during the journey, and 6 days after returning to your place of residence.</strong>
                    </p>

                    <h3 class="__subtitle-section">ANTI-FLEA PIPETTE POST-TRIP IF REQUIRED.</h3>

                    <p class="__terms-purchase-text">
                        This benefit is granted post-trip in case fleas were acquired.
                    </p>

                    <p class="__terms-purchase-text">
                        To make this benefit valid, the passenger must contact our Pet Assistance Murguía line to attend with a veterinarian from our network to receive the service.
                    </p>
                    <p class="__terms-purchase-text">
                        <strong>Coverage: 24 hours before the start of the trip, as long as you are not at your place of residence, during the journey, and 6 days after returning to your place of residence.</strong>
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
			"../../../src/data/table-pets-3.json",
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
	"page-protected-traveler-luxury",
	PageProtectedTravelerLuxury,
);
