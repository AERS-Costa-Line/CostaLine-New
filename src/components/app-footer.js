import "../components/app-cookies-policy.js?v=1.0.3";

import "../components/app-button-eva-trip.js?v=1.0.2";

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer" aria-labelledby="footer-title">
        <h2 id="footer-title" class="visually-hidden">Información del pie de página</h2>
        <div class="footer__content main-container">
          <div class="footer__content__footer-logo">
            <a href="/" aria-label="Ir a página de inicio de NombreDeLaEmpresa">
              <img src="../../../../src/assets/img/logos/logo.svg" alt="Logo de [Nombre de la empresa]" class="footer__logo" width="922" height="143" loading="lazy"/>
            </a>
          </div>
          <div class="footer__content__columns"></div>
        </div>
        <div class="footer__content__copyright">
          <p>
            © ${new Date().getFullYear()} Costa Line.
          </p>
        </div>
      </footer>
      <app-cookies-policy></app-cookies-policy>
      <app-button-eva-trip></app-button-eva-trip>
      
    `;

    this.fillFooterColumns();
    window.addEventListener("resize", this.handleResize);
  }

  fillFooterColumns() {
    const footerContent = [
      {
        title: "Sobre la empresa",
        links: [
          { text: "Acerca de nosotros", href: "../../../nosotros/" },
          {
            text: "Bolsa de trabajo",
            href: "https://grupo-de-empresas-de-autotransporte.pandape.computrabajo.com/?utm_source=chatgpt.com",
          },
        ],
      },
      {
        title: "Legales",
        links: [
          {
            text: "Avisos de privacidad",
            href: "../../../nosotros/aviso-de-privacidad.html",
          },
          {
            text: "Términos y condiciones",
            href: "../../../nosotros/terminos-condiciones.html",
          },
        ],
      },
      {
        title: "Servicios",
        links: [
          { text: "Factuarción", href: "../../../servicios/facturacion.html" },
          {
            text: "Agencias",
            href: "https://ventas.costaline.com.mx/request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AAG,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES&_ga=2.70363408.1421465980.1688335622-27413750.1682467979&_gl=1*1ljvuz9*_gcl_au*MTE5NTUxODc1MS4xNzY5MDMwOTg3",
          },
          {
            text: "Viaje protegido",
            href: "../../../servicios/viajero-protegido.html",
          },
          {
            text: "Viaje protegido Plus",
            href: "../../../servicios/viajero-protegido-plus.html",
          },
          {
            text: "Viaje protegido Lujo",
            href: "../../../servicios/viajero-protegido-lujo.html",
          },
        ],
      },
      {
        title: "Ayuda",
        links: [
          {
            text: "Preguntas frecuentes",
            href: "../../../nosotros/preguntas-frecuentes.html",
          },
          {
            text: "Cuentanos tu experiencia",
            href: "http://iamsateescucha.com/survey/#/pull",
          },
          { text: "Mapa de Sitio", href: "../../../sitemap.html" },
        ],
      },
      {
        sublevel: [
          {
            title: "Contáctanos",
            links: [
              { text: "800 0037 635", href: "tel:8000037635", type: "tel" },
            ],
          },
          {
            title: "Síguenos",
            links: [
              {
                text: "Facebook",
                href: "https://www.facebook.com/costaline/",
                type: "icon-fb",
              },
              {
                text: "Instagram",
                href: "https://www.instagram.com/costalineaers/",
                type: "icon-ig",
              },
              {
                text: "X",
                href: "https://x.com/CostaLine_AERS",
                type: "icon-x",
              },
              {
                text: "YouTube",
                href: "https://www.youtube.com/@CostaLineAers",
                type: "icon-yt",
              },
              {
                text: "TikTok",
                href: "https://www.tiktok.com/@costalineaers",
                type: "icon-icons-tt",
              },
            ],
          },
        ],
      },
    ];

    const columnsContainer = this.querySelector(".footer__content__columns");

    footerContent.forEach((col, index) => {
      const section = document.createElement("section");
      section.classList.add("footer__column");

      if (index === footerContent.length - 1 && col.sublevel) {
        // Último .footer__column con sublevels: Siempre usar <h3> y mostrar <ul>
        col.sublevel.forEach(({ title, links }) => {
          const subSection = document.createElement("section");
          subSection.classList.add("footer__sublevel");
          subSection.append(
            this.createTitle(title, false),
            this.createLinkList(links, false),
          );
          section.appendChild(subSection);
        });
      } else if (col.sublevel) {
        col.sublevel.forEach(({ title, links }) => {
          const subSection = document.createElement("section");
          subSection.classList.add("footer__sublevel");
          subSection.append(
            this.createTitleOrButton(title),
            this.createLinkList(links),
          );
          section.appendChild(subSection);
        });
      } else {
        section.append(
          this.createTitleOrButton(col.title),
          this.createLinkList(col.links),
        );
      }

      columnsContainer.appendChild(section);
    });

    this.handleResize(); // Aplicar cambios según la resolución inicial
  }

  createLinkList(links, collapsible = true) {
    const ul = document.createElement("ul");
    ul.classList.add("footer__list");
    if (collapsible) ul.classList.add("panel-content", "hidden");

    links.forEach(({ text, href, type }) => {
      const li = document.createElement("li");
      li.classList.add("footer__item");

      if (type?.includes("icon")) {
        li.innerHTML = `<a href="${href}" aria-label="${text}" class="social_media_link"><i class="${type}"></i></a>`;
      } else if (type?.includes("tel")) {
        li.innerHTML = `<a class="footer__link tel_link" href="${href}" >${text}</a>`;
      } else {
        li.innerHTML = `<a class="footer__link" href="${href}">${text}</a>`;
      }

      ul.appendChild(li);
    });

    return ul;
  }

  createTitleOrButton(title) {
    const isMobile = window.innerWidth <= 1200;
    return this.createTitle(title, isMobile);
  }

  createTitle(title, isButton) {
    if (isButton) {
      const button = document.createElement("button");
      button.classList.add("accordion-btn");
      button.textContent = title;
      button.addEventListener("click", () => {
        const list = button.nextElementSibling;
        list.classList.toggle("hidden");
        button.classList.toggle("open");
      });
      return button;
    } else {
      const h3 = document.createElement("h3");
      h3.classList.add("footer__title");
      h3.textContent = title;
      return h3;
    }
  }

  handleResize() {
    const isMobile = window.innerWidth <= 1200;
    const columns = this.querySelectorAll(".footer__column");

    columns.forEach((column, index) => {
      if (index === columns.length - 1) return; // Última columna: No se cambia

      column
        .querySelectorAll(".footer__title, .accordion-btn")
        .forEach((titleElement) => {
          const newTitle = this.createTitle(titleElement.textContent, isMobile);
          titleElement.replaceWith(newTitle);
        });

      column.querySelectorAll(".footer__list").forEach((list) => {
        if (isMobile) {
          list.classList.add("hidden");
        } else {
          list.classList.remove("hidden");
        }
      });
    });
  }
}

customElements.define("app-footer", AppFooter);
