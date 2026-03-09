
/*-------------------------SCRIPTS---------------------------*/

import "../js/slick.min.js?v=1.0.2";

class AppPayments extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="payment-slider-container main-container"><div class="payment-slider" role="region"></div></section>`;

    const paymentLogos = [
      {
        srcset: "../../../src/assets/img/payments_logos/visa.webp",
        src: "../../../src/assets/img/payments_logos/visa.svg",
        title: "Paga a través de Visa",
        alt: "Visa",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/mastercard.webp",
        src: "../../../src/assets/img/payments_logos/mastercard.svg",
        title: "Paga a través de Mastercard",
        alt: "Mastercard",
      },
      {
        srcset: "../../../src/assets/img/payments_logos/amex.webp",
        src: "../../../src/assets/img/payments_logos/amex.svg",
        title: "Paga a través de Amex",
        alt: "Amex",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/discover.webp",
        src: "../../../src/assets/img/payments_logos/discover.svg",
        title: "Paga a través de Discover",
        alt: "Discover",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/banorte.webp",
        src: "../../../src/assets/img/payments_logos/banorte.svg",
        title: "Paga a través de Banorte",
        alt: "Banorte",
      },
      {
        srcset: "../../../src/assets/img/payments_logos/HSBC.webp",
        src: "../../../src/assets/img/payments_logos/HSBC.svg",
        title: "Paga a través de HSBC",
        alt: "HSBC",
      },
      {
        srcset: "../../../src/assets/img/payments_logos/bbva.webp",
        src: "../../../src/assets/img/payments_logos/bbva.svg",
        title: "Paga a través de BBVA",
        alt: "BBVA",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/santander.webp",
        src: "../../../src/assets/img/payments_logos/santander.svg",
        title: "Paga a través de Santander",
        alt: "Santander",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/banamex.webp",
        src: "../../../src/assets/img/payments_logos/banamex.svg",
        title: "Paga a través de Banamex",
        alt: "Banamex",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/pay-cash.webp",
        src: "../../../src/assets/img/payments_logos/pay-cash.svg",
        title: "Paga a través de Pay Cash",
        alt: "Pay Cash",
      },
      {
        srcset: "../../../src/assets/img/payments_logos/oxxo.webp",
        src: "../../../src/assets/img/payments_logos/oxxo.svg",
        title: "Paga a través de OXXO",
        alt: "OXXO",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/7-eleven.webp",
        src: "../../../src/assets/img/payments_logos/7-eleven.svg",
        title: "Paga a través de 7-Eleven",
        alt: "7-Eleven",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/walmart-express.webp",
        src: "../../../src/assets/img/payments_logos/walmart-express.svg",
        title: "Paga a través de Walmart Express",
        alt: "Walmart Express",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/walmart.webp",
        src: "../../../src/assets/img/payments_logos/walmart.svg",
        title: "Paga a través de Walmart",
        alt: "Walmart",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/Circle_K.webp",
        src: "../../../src/assets/img/payments_logos/Circle_K.svg",
        title: "Paga a través de Circle K",
        alt: "Circle K",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/bodega-aurrera.webp",
        src: "../../../src/assets/img/payments_logos/bodega-aurrera.svg",
        title: "Paga a través de Bodega Aurrera",
        alt: "Bodega Aurrera",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/soriana.webp",
        src: "../../../src/assets/img/payments_logos/soriana.svg",
        title: "Paga a través de Soriana",
        alt: "Soriana",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/kiosko.webp",
        src: "../../../src/assets/img/payments_logos/kiosko.jpg",
        title: "Paga a través de Kiosko",
        alt: "Kiosko",
      },
      {
        srcset:
          "../../../src/assets/img/payments_logos/Extra.webp",
        src: "../../../src/assets/img/payments_logos/Extra.webp",
        title: "Paga a través de Extra",
        alt: "Extra",
      },
    ];

    $(document).ready(function () {
      // 1. Duplicar los logos:
      const duplicatedLogos = [...paymentLogos, ...paymentLogos]; // Creamos un nuevo array con los logos duplicados

      // Insertar los logos duplicados en el slider:
      duplicatedLogos.forEach((logo) => {
        $(".payment-slider").append(`
          <div>
            <picture>
              <source srcset="${logo.srcset}" type="image/webp">
              <img src="${logo.src}" title="${logo.title}" width="210" height="87" alt="${logo.alt}">
            </picture>
          </div>
        `);
      });

      // Configuración Slick :
      $(".payment-slider").slick({
        slidesToShow: 10, // Mostrar 10 logos a la vez (ajustable segun los que queramos mostrar)
        slidesToScroll: 1, // Desplazar de 1 en 1
        autoplay: true, // Habilitar el desplazamiento automático
        autoplaySpeed: 0, // Eliminar la pausa para la iluciond el carrusel continuo: Establecer en 0 para que no haya pausa entre desplazamientos
        speed: 5000, // Ajuste de la velocidad: Tiempo en milisegundos que tarda en recorrer una "tira" de logos (se puede ajustar según la velocidad deseada)
        cssEase: "linear", // Desplazamiento lineal: Para asegurar una velocidad constante
        infinite: true, // Habilitar el loop infinito
        arrows: false, // Ocultar las flechas de navegación (ya que no se necesitan)
        pauseOnHover: false, // Deshabilitar la pausa al pasar el mouse por encima
        pauseOnFocus: false, // Deshabilitar la pausa al hacer foco en el slider
        draggable: false, // Deshabilitar el arrastre con el mouse ya que no es interactivo con el usuario
        swipe: false, // Deshabilitar el swipe en dispositivos táctiles
        touchMove: false, // Deshabilitar el movimiento táctil
        responsive: [
          { breakpoint: 1280, settings: { slidesToShow: 6 } }, // Ajustar para pantallas más grandes
          { breakpoint: 1200, settings: { slidesToShow: 5 } }, // Ajustar para pantallas más grandes
          { breakpoint: 1024, settings: { slidesToShow: 4 } }, // Ajustar para pantallas más pequeñas
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
      });
      $(".payment-slider").slick("refresh"); // Ya no es necesario
    });
  }
}
customElements.define("app-payments", AppPayments);
