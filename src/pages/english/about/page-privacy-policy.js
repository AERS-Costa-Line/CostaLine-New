/*-------------COMPONENTES PRINCIPALES ENGLISH------------------------- */

import "../../../components/english/app-header-english.js?v=1.0.2";
import "../../../components/english/app-footer-english.js?v=1.0.2";

/*--------------IMPORT COMPONENTS FROM LANDING PAGE -----------------*/
import "../../../components/app-cotiza.js";
import "../../../components/app-banner-slider.js";
import "../../../components/app-payments.js";
import "../../../components/app-section-title.js";
import "../../../components/app-table-pets.js";
import "../../../components/app-destinations-table.js";

/*-------------------------SCRIPTS---------------------------*/

class PagePrivacyPolicy extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <app-cotiza></app-cotiza>

        <app-banner-slider
            slides-data='[
            {"id": "slide1", "title": "Banner 1", "image": "../../src/assets/img/banner/web/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp","mediumImage": "../../src/assets/img/banner/tablet/banner-compra-en-internet-descuento-10-de-regreso-con-3-clics.webp", "smallImage": "../../src/assets/img/banner/movil/banner-3-clics.webp", "link": "#index.html/banner1"},
            {"id": "slide2", "title": "Banner 2", "image": "../../src/assets/img/banner/web/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp", "mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-acapulco-diamante-sin-escalas-10-desccuento-de-regreso.webp","smallImage": "../../src/assets/img/banner/movil/banner-aca-diamante.webp", "link": "#index.html/banner2"},
            {"id": "slide3", "title": "Banner 3", "image": "../../src/assets/img/banner/web/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp", "mediumImage": "../../src/assets/img/banner/tablet/banner-viaja-de-chilpancingo-a-acapulco-diamante-descuento-10-de-regreso.webp","smallImage": "../../src/assets/img/banner/movil/banner-chil-aca.webp", "link": "#index.html/banner3"}
            ]'
        >
        </app-banner-slider>

        <app-payments></app-payments>

        <section class="__section">
            <app-section-title section-title="PRIVACY POLICY"></app-section-title>
        </section>

       <section class="__sections">
            <article class="__bg-blue __bg-blue-privacidad aviso-privacidad-articulo">
                <h3 class="__title__section">COMPREHENSIVE PRIVACY NOTICE FOR COMMERCIAL AREAS AND SUPPLIERS</h3>
                <button class="aviso-toggle-btn" type="button">Read</button>
                <div class="aviso-desc">
                    <p class="__terms-purchase-text">
                        The legitimate, controlled, and informed processing of your personal data is of vital importance to achieve the corporate objectives of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., across all business areas, reiterating our commitment to your privacy and the right to informational self-determination. In compliance with the Federal Law on Protection of Personal Data Held by Private Parties, we provide you with our PRIVACY NOTICE
                    </p>
                    <p class="__terms-purchase-text">
                        This applies to all products, services, programs, and/or websites owned by AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. Depending on the nature of the personal data collected and in accordance with applicable privacy legislation, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. may publish new specific Privacy Notices or updates, which may or may not require the express consent of the data owner. However, through our website <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> or at our headquarters, the privacy policies applicable to the personal data provided are made publicly available
                    </p>

                    <h3 class="__subtitle-section">A. NAME AND ADDRESS OF THE DATA CONTROLLER</h3>

                    <p class="__terms-purchase-text">
                        For purposes of the disclosure and processing of personal data that you have provided or may provide through various means, including our websites, technological tools, or directly to our representatives, as part of the relationship or potential relationship through the use of one of our products and/or services, as well as any related activity, the data controller will be considered AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., a company established in accordance with the laws of the Mexican Republic, with headquarters at Avenida Heroica Escuela Naval Militar, number 220, Col. Magdalena Culhuacán, Coyoacán, CDMX, postal code 04260
                    </p>
                    <p class="__terms-purchase-text">
                        For any information regarding this Privacy Notice, or to exercise any of your rights derived from your personal data under this Privacy Notice or applicable law, including without limitation your rights of access, rectification, cancellation, and opposition, please contact our Privacy Department via email at atencionaclientes@grupoaers.com.mx or by phone at 01800 0037 635 / 01800 249 0460, Monday to Friday, from 9 a.m. to 6 p.m
                    </p>

                    <h3 class="__subtitle-section">B. PERSONAL DATA COLLECTED</h3>

                    <p class="__terms-purchase-text">
                        To carry out the purposes described in this privacy notice, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. may collect and, where appropriate, process the personal data specified below, based on the legal or non-legal relationship with the Data Owner
                    </p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Full name
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Age
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Date of birth
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Official ID (IFE or INE)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Address
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Email
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Contact phone number(s), mobile, work, personal
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Social media accounts
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Employment information
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                URL and IP information
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Video recordings
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Web Beacons
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Cookies
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Federal Taxpayer Registry (RFC)
                            </p>
                        </li>
                    </ul>

                   <h3 class="__subtitle-section">B. PERSONAL DATA THAT IS COLLECTED</h3>

                    <p class="__terms-purchase-text">
                        The personal data we collect from you is necessary for the fulfillment of obligations, the relationship and/or provision of services that exists or may exist between the Data Owner and AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., who uses, stores, transmits, or transfers it to the extent permitted by law, to comply with obligations arising from the legal or non-legal relationship with the Data Owner
                    </p>

                    <p class="__terms-purchase-text">
                        We also inform you that the facilities, branches, and corporate offices of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. have a video surveillance system, therefore, images and audio of the Data Owner may be obtained through our security cameras, for purposes of identification, control, and security of users, suppliers, and staff of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                    </p>

                    <p class="__terms-purchase-text">
                        Below we list the purposes for which we will process your Personal Data:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Identification
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Contact
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Location
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                User service history
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Compliance with contractual obligations
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Control
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Security
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Service improvements
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Collection
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rectifying commercial relationships
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Improve our commercial and promotional initiatives (marketing)
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Send information or messages about new products and/or services
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Respond to your request for information, products, or use requests, including exclusively the services of Destinos Parhikuni, S.A. de C.V.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Attend to any complaint, question, or comment
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sending notifications, notices, propaganda, or advertising about our products or services as allowed by applicable law
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sending information and news about our services, as well as communications or advertising from AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., or its related companies
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Create databases for statistical purposes, research, and development of new products or services
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Transfer to other participants in attended events, for commercial, professional, and business purposes, as well as to service providers whose products and services are applicable in the sector
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sending notifications of changes to this privacy notice
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sale of insurance
                            </p>
                        </li>
                    </ul>

                    <h3 class="__subtitle-section">D. PUBLIC RECORDS</h3>

                    <p class="__terms-purchase-text">
                        The Public Registry of Consumers, Users, and other related entities, referred to in provisions regarding the Protection of Personal Data, will remain in force and will be governed according to the applicable laws and provisions derived from them, along with the rights established therein.
                    </p>

                    <h3 class="__subtitle-section">E. TRANSFER AND REMITTANCE OF PERSONAL DATA</h3>

                    <p class="__terms-purchase-text">
                        As part of the company's business operations and in order to fulfill the purposes described, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may share some or all of your personal data with third parties, both national and international.
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will ensure through the signing of agreements and adoption of other binding documents that such third parties maintain adequate administrative, technical, and physical security measures to protect your personal data, and that such third parties only use your personal data for the purposes for which it was collected and in accordance with this Privacy Notice.
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may share all or part of your Personal Data with entities authorized under Mexican Law for the supervision of our products' activities and operations, who may or may not process your Personal Data on behalf of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., according to the purposes and uses outlined in this privacy notice. Additionally, it reserves the right to share your Personal Data with administrative, judicial, or governmental authorities of any type in the United Mexican States.
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may transfer your Personal Data to advisors and collection service providers, any acquirer of the company, parent companies, affiliates, or subsidiaries of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., external professional advisors, and other service providers offering services, technical support, information technologies, and in general, any third party acting as a processor on behalf of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may remit Personal Data to companies responsible for receiving, safeguarding, and processing the Data Owner’s personal data under the terms of this Privacy Notice.
                    </p>

                    <p class="__terms-purchase-text">
                        Except in these cases, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will not share or transfer your Personal Data to third parties except as provided by the Federal Law on Protection of Personal Data Held by Private Parties or any other applicable legislation or regulation.
                    </p>

                    <h3 class="__subtitle-section">F. SECURITY MECHANISMS</h3>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will implement the necessary technical, administrative, and physical security measures to ensure the integrity of your personal data and prevent damage, loss, alteration, destruction, or unauthorized use, access, or processing. Only authorized personnel of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., who have fulfilled and observed the corresponding confidentiality requirements, may participate in the processing of your personal data. Authorized personnel are prohibited from allowing unauthorized access and from using your personal data for purposes other than those established in this Privacy Notice. The confidentiality obligation of those involved in processing your personal data remains even after their relationship with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., ends.
                    </p>

                    <h3 class="__subtitle-section">G. STORAGE OF YOUR PERSONAL DATA</h3>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may store your Personal Data in databases located in the United Mexican States or abroad without any limitation, provided that reasonable commercial technology and security standards have been implemented to protect the information provided.
                    </p>

                    <h3 class="__subtitle-section">H. CHANGES TO THE PRIVACY NOTICE</h3>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., reserves the right to modify the terms and conditions of this Privacy Notice, in which case the modification will be notified through the communication method deemed most appropriate, such as email, notices in media, direct communication, and/or an announcement on our website or branches.
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., as well as the Data Owner, acknowledge that this Privacy Notice is of unlimited duration. However, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will keep this Notice updated.
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., recommends that the Data Owner regularly read this document to stay informed about any modifications.
                    </p>

                    <p class="__terms-purchase-text">
                        Alterations or modifications to this Privacy Notice will take effect immediately after their publication at our headquarters, without prejudice to the use of any other means by AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., for such publications.
                    </p>

                    <p class="__terms-purchase-text">
                        Once the modifications have been made, it will be presumed that the Data Owner who continues using or requesting services, or performing acts that originated the relationship with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., has full knowledge of, has read, and has consented to the revised Privacy Notice.
                    </p>

                    <h3 class="__subtitle-section">I. CONSENT</h3>

                    <p class="__terms-purchase-text">
                        The Data Owner expresses and consents to this Privacy Notice, in accordance with the Federal Law on Protection of Personal Data Held by Private Parties, not opposing the Privacy Notice. No data will be processed until five days after it has been provided by the user and they have not expressed opposition.
                    </p>

                    <h3 class="__subtitle-section">J. ARCO RIGHTS</h3>

                    <p class="__terms-purchase-text">
                        Likewise, you may request access to your data, rectify it, cancel it, object, limit its use or disclosure, or revoke your consent, under the Federal Law on Protection of Personal Data Held by Private Parties and other applicable provisions. To exercise these rights, you must contact the Privacy Department using the email and/or phone numbers listed above in our contact information.
                    </p>

                    <p class="__terms-purchase-text">
                        Under applicable law, any request to exercise the aforementioned rights must indicate:
                    </p>

                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Name and address, which are indispensable to respond to your request.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Documents proving your identity or, if applicable, the legal representation of the person making the request on your behalf.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                A clear and precise description of the Personal Data you wish to access or rectify, cancel, or object to, and any other element that facilitates locating your data.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any other requirement established by the Federal Law on Protection of Personal Data Held by Private Parties and/or other applicable provisions.
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        At any time, you may request that the sending of commercial messages or notices and information about new products be suspended or canceled through our Privacy Department.
                    </p>

                    <p class="__terms-purchase-text">
                        If you request the rectification of personal data, you must also indicate the modifications to be made and provide the documentation supporting your request.
                    </p>

                    <p class="__terms-purchase-text">
                        The response to your request will be communicated within 10 (ten) business days from the date it is received, which may be extended by 5 (five) additional days in cases established by law; if applicable, measures to comply with your request will be carried out within the following 15 (fifteen) business days from the date the response is communicated.
                    </p>

                    <p class="__terms-purchase-text">
                        The Data Owner must cover justified shipping costs or the cost of reproduction in copies or other formats. Depending on the information, whether electronic or physical, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will require an address to send the information.
                    </p>

                    <p class="__terms-purchase-text">
                        Once the data is no longer necessary to fulfill the purposes set forth in this Privacy Notice and applicable legal provisions, it must be canceled, blocked, and deleted by law.
                    </p>

                    <p class="__terms-purchase-text">
                        The request will not be valid if any of the above requirements are omitted.
                    </p>

                    <p class="__terms-purchase-text">
                        If the right to object to the processing of Personal Data has been requested, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will consider the following:
                    </p>

                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                There is a legitimate cause and your specific situation requires it, which must justify that even if the processing is lawful, it must cease to prevent harm to the data owner.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                You need to express your opposition to the processing of your personal data so that it is not carried out for specific purposes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The processing is not necessary to fulfill a legal obligation imposed on the data controller.
                            </p>
                        </li>
                    </ol>


                    <p class="__terms-purchase-text">
                        In the event that the right to object to the processing of Personal Data has been exercised, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will add the Personal Data to an Exclusion List in accordance with the Law.
                    </p>

                    <h3 class="__subtitle-section">K. PROCEDURES FOR BLOCKING AND DELETION OF PERSONAL DATA</h3>

                    <p class="__terms-purchase-text">
                        Once the data has been canceled, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will retain the Data Owner’s personal data for one more month for clarification purposes and preparation for deletion. Once this period expires, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will permanently block the Data Owner’s personal data, with no possibility of locating or contacting the owner.
                    </p>

                    <p class="__terms-purchase-text">
                        If the Data Owner engages in another action with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., it must be initiated as if the previous relationship never existed, while observing the Privacy Policies for purposes of retaining information by law or authority.
                    </p>

                    <p class="__terms-purchase-text">
                        Personal data that has fulfilled its purposes but cannot be canceled and/or deleted by law or contract will be blocked from the purposes for which it was processed until deletion is possible. During this period, personal data may only be used for retention and safeguarding.
                    </p>

                    <h3 class="__subtitle-section">L. REVOCATION OF CONSENT</h3>

                    <p class="__terms-purchase-text">
                        Consent may be revoked at any time without retroactive effect. To revoke consent, the Data Owner must submit a written request to <a class="__link-text" href="#">atencionaclientes@grupoaers.com.mx</a> including the following requirements:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                There is a legitimate cause, and your specific situation requires it, which must justify that even if the processing is lawful, it must cease to prevent harm to the Data Owner.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                You need to express your opposition to the processing of your personal data so that it is not carried out for specific purposes.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The processing is not necessary to fulfill a legal obligation imposed on the Data Controller.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The Data Owner’s name and address or another means to communicate the response to your request.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Documents proving identity, IFE and/or PASSPORT, or, if applicable, the legal representation of the Data Owner.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                A clear and precise description of the relationship with the Company.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Provide documentation supporting your request.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The request must be addressed to AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Documents proving that the relationship with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., has ended.
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will issue a response confirming the revocation of consent, or, if applicable, indicating the reasoning depending on the specific case, within 15 (fifteen) days. Deadlines will be counted from the moment the email is received by our server, issuing the corresponding Acknowledgment of Request.
                    </p>

                    <p class="__terms-purchase-text">
                        Any subsequent request will have the same effect as an initial one, with the Data Owner and AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., bound by the same deadlines mentioned above.
                    </p>

                    <p class="__terms-purchase-text">
                        The request will not be valid if any of the aforementioned requirements are omitted.
                    </p>

                    <h3 class="__subtitle-section">M. JURISDICTION</h3>

                    <p class="__terms-purchase-text">
                        This Privacy Notice, the processing of your Personal Data, and all related documents are governed by the Federal Law on Protection of Personal Data Held by Private Parties and other laws and regulations of the United Mexican States. Acceptance of this Privacy Notice or the mere continuation in requesting services once the Privacy Notice has been published and made available implies express acceptance of its terms and express submission to the courts of Mexico City for any dispute or claim arising from this Privacy Notice.
                    </p>

                    <p class="__terms-purchase-text">
                        I declare that I have read and understood this Privacy Notice and give my consent, where necessary, for the processing of my personal data under the terms herein. I confirm that I have informed the individuals whose personal data I have provided about how their data will be processed.
                    </p>

                </div>
            </article>
        </section>


        <section class="__sections">
                <article class="__bg-white __bg-white-privacidad aviso-privacidad-articulo">
                    <h3 class="__title__section">ACCOUNT STATEMENT PRIVACY NOTICE</h3>
                    <button class="aviso-toggle-btn" type="button">Read</button>
                    <div class="aviso-desc">

                        <p class="__terms-purchase-text">
                            <strong>AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.</strong> with its main office located at <strong>avenida Heroica Escuela Naval Militar, number 220, col. Magdalena Culhuacán, Coyoacán, CDMX, postal code 04260</strong>, is responsible for the processing of your personal data, in compliance with the provisions of the Federal Law on Protection of Personal Data Held by Private Parties.
                        </p>

                        <p class="__terms-purchase-text">
                            The personal data we collect from you is for the purpose of locating information in our system, statistical and security control, as well as monitoring the contractual relationship we have with you, the Data Owner.
                        </p>

                        <p class="__terms-purchase-text">
                            For more information regarding the processing, use, transfer, and disclosure of your Personal Data, as well as the ARCO rights you can exercise, we provide our Comprehensive Privacy Notice at <a class="__link-text" href="../.../../../">www.costaline.com.mx</a>.
                        </p>

                    </div>
                </article>
        </section>

        <section class="__sections">
            <article class="__bg-blue __bg-blue-privacidad aviso-privacidad-articulo">
                <h3 class="__title__section">SWITCHBOARD PRIVACY NOTICE</h3>
                <button class="aviso-toggle-btn" type="button">Read</button>
                <div class="aviso-desc">
                    <p class="__terms-purchase-text">
                        Welcome to AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V., with its main office located at avenida Heroica Escuela Naval Militar, number 220, col. Magdalena Culhuacán, Coyoacán, CDMX, postal code 04260, who is responsible for the processing of your personal data, in compliance with the provisions of the Federal Law on Protection of Personal Data Held by Private Parties.
                    </p>

                    <p class="__terms-purchase-text">
                        The personal data we collect from you, the Data Owner, is used by AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V., for control, registration, and identification of people visiting our offices, appointment management, data search and location in our system, statistical control, and security.
                    </p>

                    <p class="__terms-purchase-text">
                        To carry out the purposes described in this privacy notice, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V., may collect and, where applicable, process the following personal data:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Full name
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Phone number
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Company of origin
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Person being visited
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Area to be visited
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Purpose of the visit
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        Additionally, we inform you that AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V., has a video surveillance system, so the images and audio obtained through the security cameras will be used for identification, control, and security purposes of the people within these facilities.
                    </p>

                    <p class="__terms-purchase-text">
                        For more information regarding the processing, use, transfer, and disclosure of your Personal Data, as well as the ARCO rights you may exercise, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V., provides our Comprehensive Privacy Notice through our website <a class="__link-text" href="../.../../../">www.costaline.com.mx</a>.
                    </p>
                </div>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white __bg-white-privacidad aviso-privacidad-articulo">
                <h3 class="__title__section">WEB PRIVACY NOTICE</h3>
                <button class="aviso-toggle-btn" type="button">Read</button>
                <div class="aviso-desc">
                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., with its central office located at <strong>Avenida Heroica Escuela Naval Militar, number 220, Col. Magdalena Culhuacán, Coyoacán, Mexico City, postal code 04260</strong>, is responsible for the processing of your personal data, in compliance with the provisions of the Federal Law on the Protection of Personal Data Held by Private Parties. For more information about the processing, use, transfer, and disclosure of your Personal Data, as well as the ARCO rights you may exercise, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. makes available the Full Privacy Notice at <a class="__link-text" href="../.../../../">www.costaline.com.mx</a>.
                    </p>
                </div>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-blue __bg-blue-privacidad aviso-privacidad-articulo">
                <h3 class="__title__section">COMPREHENSIVE PRIVACY NOTICE FOR HUMAN RESOURCES AREAS</h3>
                <button class="aviso-toggle-btn" type="button">Read</button>
                <div class="aviso-desc">
                    <p class="__terms-purchase-text">
                        The legitimate, controlled, and informed processing of your personal data is of vital importance to achieving the corporate objectives of <strong>AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.</strong>, across all business areas, reaffirming our commitment to your privacy and the right to informational self-determination. Therefore, in compliance with the provisions of the Federal Law on the Protection of Personal Data Held by Private Parties, we make our PRIVACY NOTICE available to you
                    </p>
                    <p class="__terms-purchase-text">
                        This applies to all products, services, programs, and/or websites owned by AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., according to the nature of the Personal Data collected and in accordance with applicable privacy and data protection laws. AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. may publish new specific Privacy Notices or updates, for which the express consent of the Personal Data owner may or may not be required. However, through our website <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> or at our central offices, the privacy policies applicable to the Personal Data provided to us are made publicly available
                    </p>

                    <h3 class="__subtitle-section">A. NAME AND ADDRESS OF THE DATA CONTROLLER</h3>

                    <p class="__terms-purchase-text">
                        For the purposes of the disclosure and processing of the Personal Data you have provided or may provide through various means, including our websites, technological tools, or directly to our representatives, due to the relationship or potential relationship arising from the use of one of our products and/or services, as well as for any related activity, the responsible entity shall be considered AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., a company incorporated under the laws of the United Mexican States, with central office located at Avenida Heroica Escuela Naval Militar, number 220, Col. Magdalena Culhuacán, Coyoacán, CDMX, postal code 04260
                    </p>
                    <p class="__terms-purchase-text">
                        For any information regarding this Privacy Notice, or to exercise any of your rights derived from your Personal Data, this Privacy Notice, or applicable law, including but not limited to your rights of access, rectification, cancellation, and opposition, please contact our Privacy Department via email at <a class="__link-text" href="#">atencionaclientes@grupoaers.com.mx</a> or at 01800 0037 635 / 01800 249 0460, Monday to Friday, from 9 a.m. to 6 p.m
                    </p>

                    <h3 class="__subtitle-section">B. PERSONAL DATA COLLECTED</h3>

                    <p class="__terms-purchase-text">
                        To carry out the purposes described in this privacy notice, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. may collect and, if applicable, process the personal data specified below, based on the legal or non-legal relationship with the Data Owner, including Sensitive Personal Data, detailed as follows
                    </p>
                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Full name</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Age</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Date of birth</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Address</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Marital status</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Email address</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Social media accounts</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Contact phone number(s) (mobile, work, personal)</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Touristic, sports, social, and entertainment preferences</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Unique Population Registry Code (CURP)</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Federal Taxpayer Registry (RFC)</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Social Security number</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Employee number</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Employee category and position</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Salary, earnings, and deductions</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Personal and family references</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Information related to beneficiaries and/or dependents</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Spouse and parents' names</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Spouse's date of birth</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Father's name</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Mother's name</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Medical history of the Data Owner, as well as of family members, beneficiaries, and/or dependents</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Psychometric evaluation results</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Technical evaluation results</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Medical evaluation results</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Blood type</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Religious preferences</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Medical certificates and treatment information</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Video recordings</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Academic degree and institution accrediting the studies</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Career / Specialization</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">School period</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Degree status (graduate, incomplete, completed)</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Last company worked for and city</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Position held and period</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Subcontracted company</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Reason for hiring</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Name of the person being replaced</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Date of entry</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Position</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Office</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Work schedule</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Information regarding job performance</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">IP address</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">URL information</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Cookies</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Web Beacons</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Medical unit to which they belong</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Bank account number</p></li>
                        <li class="__terms-purchase-item"><p class="__terms-purchase-text">Infonavit, Fonacot, or any other social security credit data</p></li>
                    </ul>

                    <h3 class="__subtitle-section">C. PURPOSES FOR USING PERSONAL DATA</h3>

                    <p class="__terms-purchase-text">
                        The personal data we collect from you is necessary to fulfill obligations, the relationship, and/or provision of services that exist or may exist between the Data Owner and AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., who uses, stores, transmits, or transfers it to the extent permitted by law to fulfill obligations arising from the legal or non-legal relationship created with the Data Owner
                    </p>

                    <p class="__terms-purchase-text">
                        Furthermore, we inform you that AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V. facilities, branches, and corporate offices are equipped with video surveillance and/or audio recording systems. Therefore, images and audio of the Personal Data Owner may be obtained through our security cameras for identification, control, and security purposes for users, suppliers, and staff of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V
                    </p>
                    
                    <p class="__terms-purchase-text">
                        Below we list the purposes for which we will process your Personal Data
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Identification and contact
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Location
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Employment history
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Statistics
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Control and security
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Rectify employment relationship
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Address any complaint, question, or comment
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Sending notifications, notices, advertisements, or information and news about our products or services of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., or its related companies
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Create databases for statistical purposes
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Create administrative employee files
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Create employee medical files
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Payroll management and administration
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Payment of benefits, salaries, compensations, bonuses, reimbursements, pensions, insurance, and others
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Insurance contracting
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Assign work tools, and document and control the assignment of computing and communication assets
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Internal audits
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Creation and assignment of corporate email accounts
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Preparation of company directory
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Assign passwords and access codes
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Ensure compliance with confidentiality obligations and other labor and tax obligations
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Verify personal and employment references
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Contact family members, dependents, and beneficiaries in case of emergency
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Send information about suppliers offering products, services, and/or labor benefits
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Send notifications of changes to this privacy notice
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        Likewise, the user-owner is responsible for the truthfulness, accuracy, and timeliness of the personal data they publish on their social media profiles or on the social media of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., as well as the extent of dissemination of their information and the access to it that they allow or authorize to third parties through these profiles
                    </p>

                    <h3 class="__subtitle-section">D. PUBLIC REGISTRIES</h3>

                    <p class="__terms-purchase-text">
                        The Public Registry of Consumers, Users, and others, as indicated in provisions related to Personal Data Protection, shall remain valid and shall be governed in accordance with the laws cited and applicable provisions derived therefrom, along with the rights provided therein
                    </p>

                    <h3 class="__subtitle-section">E. TRANSFER AND REMISSION OF PERSONAL DATA</h3>

                    <p class="__terms-purchase-text">
                        As part of normal business operations and to fulfill the purposes described, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may share some or all of your personal data with third parties, national or foreign
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will ensure through agreements and other binding documents that such third parties maintain appropriate administrative, technical, and physical security measures to safeguard your personal data, and that they only use your personal data for the purposes for which it was collected in accordance with this Privacy Notice
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may share all or part of your Personal Data with entities authorized under Mexican Law to supervise our activities and product operations, who may or may not process your Personal Data on behalf of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., according to the Purposes and Uses described in this privacy notice
                    </p>

                    <p class="__terms-purchase-text">
                        Likewise, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., reserves the right to share your Personal Data with administrative, judicial, or governmental authorities of any kind in the United Mexican States
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may transfer your Personal Data to advisors and collection service providers, any company acquiring the business, parent companies, affiliates or subsidiaries of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., external professional advisors, and other service providers offering services, technical support, information technologies, and in general, any third party acting on behalf of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may remit Personal Data to companies responsible for receiving, storing, and processing the data of the Data Owner under the terms of this Privacy Notice
                    </p>

                    <p class="__terms-purchase-text">
                        Except for these cases, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will not share or transfer your Personal Data to third parties except as provided in the Federal Law on the Protection of Personal Data Held by Private Parties or any other applicable law or regulation
                    </p>


                    <h3 class="__subtitle-section">F. SECURITY MECHANISMS</h3>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will implement the necessary technical, administrative, and physical security measures to ensure the integrity of your personal data and prevent damage, loss, alteration, destruction, or unauthorized use, access, or processing
                    </p>

                    <p class="__terms-purchase-text">
                        Only authorized personnel of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., who have complied with and observed the corresponding confidentiality requirements, may participate in the processing of your personal data. Authorized personnel are prohibited from allowing access to unauthorized persons and from using your personal data for purposes other than those established in this Privacy Notice. The confidentiality obligation of persons involved in the processing of personal data remains even after the relationship with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., has ended
                    </p>

                    <h3 class="__subtitle-section">G. STORAGE OF YOUR PERSONAL DATA</h3>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., may store your Personal Data in databases located in Mexico or abroad without limitation, understanding that reasonable commercial technology and security policies and standards have been implemented to protect the information provided
                    </p>

                    <h3 class="__subtitle-section">H. MODIFICATIONS TO THE PRIVACY NOTICE</h3>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., reserves the right to modify the terms and conditions of this Privacy Notice, in which case the modification will be notified through the communication means considered most appropriate by AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., which may include email, notices in media, direct communication, and/or an announcement on our website or branches
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., as well as the Data Owner, acknowledge that this Privacy Notice has unlimited validity. However, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will keep this Notice updated
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., recommends that the Data Owner regularly reread this document to remain informed about any modifications
                    </p>

                    <p class="__terms-purchase-text">
                        Alterations or modifications to this Privacy Notice will become effective immediately after publication at our headquarters, without prejudice to the use of any other means for AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., to make these publications
                    </p>

                    <p class="__terms-purchase-text">
                        Once modifications are made, it will be presumed that the Data Owner continuing to use or request our services, or performing acts that originated the relationship with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., has full knowledge, has read, and consents to the amended Privacy Notice
                    </p>

                    <h3 class="__subtitle-section">I. CONSENT</h3>

                    <p class="__terms-purchase-text">
                        Once modifications are made, it will be presumed that the Data Owner continuing to use or request our services, or performing acts that originated the relationship with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., has full knowledge, has read, and consents to the amended Privacy Notice
                    </p>

                    <h3 class="__subtitle-section">J. ARCO RIGHTS</h3>

                    <p class="__terms-purchase-text">
                        Similarly, you may request access to your data, rectify it, cancel it, object, limit its use or disclosure, or revoke your consent, under the terms of the Federal Law on the Protection of Personal Data Held by Private Parties and other applicable provisions. To exercise these rights, you must contact the Privacy Department at the email and/or phone number provided above
                    </p>

                    <p class="__terms-purchase-text">
                        Under applicable law, any request to exercise the aforementioned rights must indicate:
                    </p>

                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Name and address, an indispensable requirement to respond to your request
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Documents proving your identity or, if applicable, the legal representation of the person making the request on your behalf
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Clear and precise description of the Personal Data you wish to access, rectify, cancel, or object to, and any other element that facilitates locating your data
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Any other requirement established by the Federal Law on the Protection of Personal Data Held by Private Parties and/or other applicable provisions
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        At any time, you may request the suspension or cancellation of commercial messages or notices and information about new products, through our Privacy Department
                    </p>

                    <p class="__terms-purchase-text">
                        In case of requesting rectification of personal data, you must also indicate the modifications to be made and provide documentation supporting your request
                    </p>

                    <p class="__terms-purchase-text">
                        The response to your request will be communicated within 10 (ten) business days from the date it was received, which may be extended by 5 (five) more days in cases established by law; so that if appropriate, measures will be taken to comply with your request within 15 (fifteen) business days after notification of the response
                    </p>

                    <p class="__terms-purchase-text">
                        The Data Owner must cover justified shipping costs or reproduction costs in copies or other formats. Depending on the information, whether electronic or physical, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will need an address to send the information
                    </p>

                    <p class="__terms-purchase-text">
                        When data is no longer necessary for the purposes provided in this Privacy Notice and applicable legal provisions, it must be canceled, blocked, and deleted by law
                    </p>

                    <p class="__terms-purchase-text">
                        The request will not be valid if the above information is omitted
                    </p>

                    <p class="__terms-purchase-text">
                        If the right of opposition to the processing of Personal Data has been requested, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will consider the following:
                    </p>

                    <ol class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                There is a legitimate cause, and your specific situation requires it, which must justify that even though the processing is lawful, it must cease to prevent harm to the data owner
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                You need to express your opposition to the processing of your personal data so that it is not carried out for specific purposes
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                That the processing is not necessary to fulfill a legal obligation imposed on the responsible party
                            </p>
                        </li>
                    </ol>

                    <p class="__terms-purchase-text">
                        If the right of opposition has been exercised, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will send the Personal Data to an Exclusion List in accordance with the Law
                    </p>

                    <h3 class="__subtitle-section">K. PROCEDURES FOR BLOCKING AND DELETING PERSONAL DATA</h3>

                    <p class="__terms-purchase-text">
                        Once the data has been canceled, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will retain the Data Owner’s personal data for one more month for clarification purposes and preparation for deletion. Once this period expires, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will permanently block the data, without possibility of location or contact
                    </p>

                    <p class="__terms-purchase-text">
                        The above is done in accordance with Privacy Policies for the purpose of retaining information as required by law or authority
                    </p>

                    <p class="__terms-purchase-text">
                        Personal data that has fulfilled its purpose, but cannot be canceled or deleted by law or contract, will be blocked for the purposes they were intended for until they can be deleted. During this period, personal data cannot be further processed beyond retention and safeguarding
                    </p>

                    <h3 class="__subtitle-section">L. REVOCATION OF CONSENT</h3>

                    <p class="__terms-purchase-text">
                        Consent may be revoked at any time without retroactive effect. To revoke consent, the Data Owner must send a written request to <a class="__link-text" href="#">atencionaclientes@grupoaers.com.mx</a> with the following requirements:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The name of the Data Owner and address or other means to communicate the response to the request
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Documents proving the identity of the Data Owner, IFE and/or PASSPORT, or if applicable, the legal representation of the Data Owner
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Clear and precise description of the link with the Company
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Provide documentation supporting your request
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                The request must be addressed to AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Documents proving that the legal relationship with AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., has ended
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., will issue a response confirming the revocation of consent or providing reasoning depending on the specific case, within 15 (fifteen) days. The term is counted from the moment the email enters our server, issuing the corresponding Acknowledgment of Receipt
                    </p>

                    <p class="__terms-purchase-text">
                        Any subsequent request will have the same effect as the initial one, with the Data Owner and AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., bound to the same deadlines
                    </p>

                    <p class="__terms-purchase-text">
                        The request will not be valid if the above information is omitted
                    </p>

                    <h3 class="__subtitle-section">M. JURISDICTION</h3>

                    <p class="__terms-purchase-text">
                        This Privacy Notice, the processing of your Personal Data, and all related documents are governed by the Federal Law on the Protection of Personal Data Held by Private Parties and other laws and regulations of the United Mexican States. Acceptance of this Privacy Notice or simple continuation in requesting services once published implies express acceptance of its terms and submission to the courts of Mexico City for any dispute arising from this Privacy Notice
                    </p>

                    <p class="__terms-purchase-text">
                        I declare that I have read and understand this Privacy Notice and give my consent, where necessary, for the processing of my personal data under the terms herein. I confirm that I have informed the persons whose data I have provided about the processing that will be done with their data
                    </p>
                </div>
            </article>
        </section>


        <section class="__sections">
            <article class="__bg-white __bg-white-privacidad aviso-privacidad-articulo">
                <h3 class="__title__section">PRIVACY NOTICE FOR VIDEO SURVEILLANCE SYSTEM</h3>
                <button class="aviso-toggle-btn" type="button">Read</button>
                <div class="aviso-desc">
                    <p class="__terms-purchase-text">
                        You are being video recorded by the video surveillance cameras of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., located at Avenida Heroica Escuela Naval Militar, number 220, Col. Magdalena Culhuacán, Coyoacán, CDMX, postal code 04260. The images captured by the video surveillance cameras will be used for your safety and the safety of the people who work with us and visit us.
                    </p>

                    <p class="__terms-purchase-text">
                        For more information about the processing, use, transfer, and forwarding of your Personal Data, as well as the ARCO rights you can exercise, we provide you with our Comprehensive Privacy Notice, which you can request via our email <a class="__link-text" href="#">atencionaclientes@grupoaers.com.mx</a> or at the headquarters of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                    </p>
                </div>
            </article>
        </section>



        <section class="__sections">
            <article class="__bg-blue __bg-blue-privacidad aviso-privacidad-articulo">
                <h3 class="__title__section">EMAIL PRIVACY NOTICE</h3>
                <button class="aviso-toggle-btn" type="button">Read</button>
                <div class="aviso-desc">
                    <p class="__terms-purchase-text">
                        This message is intended exclusively for the use of the person, department, or entity to whom it is addressed; it contains strictly confidential and legally protected information, whose disclosure is sanctioned by law. If the reader of this message is not the intended recipient, nor the employee or agent responsible for this information, you are hereby notified that its reproduction and distribution is strictly prohibited. If you received this communication in error, please immediately notify the sender and destroy the message. All opinions contained in this email are those of the message author and do not necessarily reflect the views of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., or any of its subsidiary companies.
                    </p>

                    <p class="__terms-purchase-text">
                        AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V., with headquarters at <strong>Avenida Heroica Escuela Naval Militar, number 220, Col. Magdalena Culhuacán, Coyoacán, CDMX, postal code 04260</strong>, is responsible for the processing of your personal data, in compliance with the provisions of the Federal Law on Protection of Personal Data Held by Private Parties.
                    </p>

                    <p class="__terms-purchase-text">
                        For more information about the processing, use, transfer, and forwarding of your Personal Data, as well as the ARCO rights you may exercise, we provide you with our Comprehensive Privacy Notice, which you can request via our email <a class="__link-text" href="../.../../../">www.costaline.com.mx</a> or at the headquarters of AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. DE C.V.
                    </p>
                </div>
            </article>
        </section>

        <section class="__sections">
            <article class="__bg-white __bg-white-privacidad aviso-privacidad-articulo">
                <h3 class="__title__section">RECEPTION PRIVACY NOTICE</h3>
                <button class="aviso-toggle-btn" type="button">Read</button>
                <div class="aviso-desc">
                    <p class="__terms-purchase-text">
                        Welcome to AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V., with headquarters at Avenida Heroica Escuela Naval Militar, number 220, Col. Magdalena Culhuacán, Coyoacán, CDMX, postal code 04260, which is responsible for the processing of your personal data, in compliance with the provisions of the Federal Law on Protection of Personal Data Held by Private Parties.
                    </p>

                    <p class="__terms-purchase-text">
                        The personal data we collect from you, the Data Subject, are used by AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V. for control, registration, and identification of people visiting our offices, appointment management, searching and locating data in the system, and statistical and security control.
                    </p>

                    <p class="__terms-purchase-text">
                        To carry out the purposes described in this privacy notice, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V. may collect and, where appropriate, process the following personal data:
                    </p>

                    <ul class="__terms-purchase-list">
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Full name
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Phone number
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Company of origin
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Person you are looking for
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Area you are visiting
                            </p>
                        </li>
                        <li class="__terms-purchase-item">
                            <p class="__terms-purchase-text">
                                Purpose of the visit
                            </p>
                        </li>
                    </ul>

                    <p class="__terms-purchase-text">
                        Likewise, we inform you that AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V. has a video surveillance system, so the images and audio obtained through the security cameras will be used for identification, control, and security purposes of the people inside these facilities.
                    </p>

                    <p class="__terms-purchase-text">
                        For more information about the processing, use, transfer, and forwarding of your Personal Data, as well as the ARCO rights you may exercise, AUTOTRANSPORTES ESTRELLA ROJA DEL SUR, S.A. de C.V. provides you with the Comprehensive Privacy Notice, available through our website <a class="__link-text" href="../.../../../">www.costaline.com.mx</a>
                    </p>
                </div>
            </article>
        </section>

    `;
		this.querySelectorAll(".aviso-privacidad-articulo").forEach((article) => {
			const btn = article.querySelector(".aviso-toggle-btn");
			const desc = article.querySelector(".aviso-desc");
			btn.addEventListener("click", () => {
				const allArticles = this.querySelectorAll(".aviso-privacidad-articulo");
				allArticles.forEach((otherArticle) => {
					const otherDesc = otherArticle.querySelector(".aviso-desc");
					const otherBtn = otherArticle.querySelector(".aviso-toggle-btn");
					if (otherDesc !== desc) {
						otherDesc.classList.remove("open");
						otherBtn.textContent = "Read";
					}
				});
				if (!desc.classList.contains("open")) {
					desc.classList.add("open");
					btn.textContent = "Close";
					// Centrar el título al abrir con transición suave
					const title = article.querySelector("h3");
					if (title) {
						setTimeout(() => {
							title.scrollIntoView({ behavior: "smooth", block: "center" });
						}, 300); // Espera a que la transición inicie
					}
				} else {
					desc.classList.remove("open");
					btn.textContent = "Read";
				}
			});
		});
	}
}

customElements.define("page-privacy-policy", PagePrivacyPolicy);
