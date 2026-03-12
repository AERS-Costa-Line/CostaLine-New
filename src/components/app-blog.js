
/*-------------------------SCRIPTS---------------------------*/

import "../js/slick.min.js?v=1.0.2";

class AppBlog extends HTMLElement {
	constructor() {
		super();
		this.posts = []; // Almacena los posts obtenidos de la API
	}

	async connectedCallback() {
		await this.fetchAndRenderPosts();
		this.initializeSlider();
	}

	async fetchAndRenderPosts() {
		try {
			this.posts = await this.fetchLatestPosts();
			this.render();
		} catch (error) {
			console.error("Error al obtener y renderizar los posts:", error);
			this.innerHTML = "<p>Error al cargar los blogs.</p>";
		}
	}

	async fetchLatestPosts() {
		try {
			const response = await fetch(
				"https://costaline.com.mx/blog/wp-json/wp/v2/posts?per_page=9&_embed",
			);
			const posts = await response.json();
			return posts;
		} catch (error) {
			console.error("Error al obtener los últimos posts:", error);
			return [];
		}
	}

	render() {
		const articlesHTML = this.posts
			.map((post) => this.createArticleHTML(post))
			.join("");

		this.innerHTML = `
      <div class="last-notes__items">
        <article class="last-notes__item">
          <a href="${this.posts[0]?.link || "#"}" title="${
						this.posts[0]?.title.rendered || "Lorem"
					}" target="_blank" rel="noopener noreferrer" aria-label="Ver más" aria-current="page">
            <div class="last-notes__featured">
              <div class="last-notes__card last-notes__card--featured">
                <div
                  class="last-notes__card__background"
                  style="
                    background-image: url('${
											this.posts[0]?._embedded["wp:featuredmedia"][0]
												.source_url || ""
										}');
                  "
                ></div>
                <div class="last-notes__card__caption">
                  <p class="last-notes__card__caption-date">${
										this.formatDate(this.posts[0]?.date) || "13 Mar 2025"
									}</p>
                  <h3 class="last-notes__card__caption-title">
                    ${
											this.posts[0]?.title.rendered ||
											"Festival de Música Latina 2025"
										}
                  </h3>
                  <p class="last-notes__card__caption-description">
                    ${
											this.limitExcerpt(this.posts[0]?.excerpt.rendered) ||
											"El Festival de Música Latina 2025 es uno de los eventos musicales más importantes y esperados de América Latina."
										}
                  </p>
                  <span class="last-notes__card__link">
                    Ver más
                  <span class="icon-go_link"><span class="path1"></span><span class="path2"></span></span></span>
                </div>
              </div>
            </div>
          </a>
        </article>

        <article class="last-notes__item">
          <a href="${this.posts[1]?.link || "#"}" title="${
						this.posts[1]?.title.rendered || "Lorem"
					}" target="_blank" rel="noopener noreferrer" aria-label="Ver más" aria-current="page">
            <div class="last-notes__secondary">
              <div class="last-notes__card last-notes__card--small">
                <div
                  class="last-notes__card__background"
                  style="
                    background-image: url('${
											this.posts[1]?._embedded["wp:featuredmedia"][0]
												.source_url || ""
										}');
                  "
                ></div>
                <div class="last-notes__card__caption">
                  <p class="last-notes__card__caption-date">${
										this.formatDate(this.posts[1]?.date) || "28 Feb 2025"
									}</p>
                  <h3 class="last-notes__card__caption-title">
                    ${
											this.limitTitle(this.posts[1]?.title.rendered) ||
											"Costa Line mejora su EBITDA ajustado un 38,9% en 2024"
										}
                  </h3>
                  <p class="last-notes__card__caption-description">
                    ${
											this.limitExcerpt(this.posts[1]?.excerpt.rendered) ||
											"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
										}
                  </p>
                  <small>ver más <i class="icon-next-arrow"></i></small>
                </div>
              </div>
            </div>
          </a>
        </article>

        <div class="last-notes__list-item">
          <div class="slider">
            <div id="slider-blogs" class="slide multiple-items">
              ${articlesHTML}
            </div>
            <!-- buttons -->
            <div class="arrow__img">
              <button id="slide-prev" class="slider-prev">&#10094;</button>
              <button id="slide-next" class="slider-next">&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    `;
	}

	createArticleHTML(post) {
		const featuredMedia =
			post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
		const date = this.formatDate(post.date) || "";
		const title = this.limitTitle(post.title?.rendered || "Sin título");
		const excerpt = this.limitExcerpt(
			post.excerpt?.rendered || "Sin descripción",
		);

		return `
      <article>
        <a href="${post.link}" title="${title}" target="_blank" rel="noopener noreferrer" aria-label="Ver más de ${title}" aria-current="page">
          <div class="last-notes__card last-notes__card--horizontal">
            <div
              class="last-notes__card__background"
              style="background-image: url('${featuredMedia}');"
            ></div>
            <div class="last-notes__card__caption">
              <p class="last-notes__card__caption-date">${date}</p>
              <h3 class="last-notes__card__caption-title">${title}</h3>
              <p class="last-notes__card__caption-description">${excerpt}</p>
              <small>ver más <i class="icon-next-arrow"></i></small>
            </div>
          </div>
        </a>
      </article>
    `;
	}

	limitTitle(title) {
		const maxLength = 50;
		if (title.length > maxLength) {
			return title.substring(0, maxLength) + "...";
		}
		return title;
	}

	limitExcerpt(excerpt) {
		const maxLength = 150;
		if (excerpt.length > maxLength) {
			return excerpt.replace(/<[^>]+>/g, "").substring(0, maxLength) + "...";
		}
		return excerpt.replace(/<[^>]+>/g, "");
	}

	formatDate(dateString) {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, "0");
		const monthNames = [
			"Ene",
			"Feb",
			"Mar",
			"Abr",
			"May",
			"Jun",
			"Jul",
			"Ago",
			"Sep",
			"Oct",
			"Nov",
			"Dic",
		];
		const month = monthNames[date.getMonth()];
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	}

	initializeSlider() {
		const slider = this.querySelector(".multiple-items");
		const prevButton = this.querySelector("#slide-prev");
		const nextButton = this.querySelector("#slide-next");

		if (slider) {
			const updateAccessibility = () => {
				// Set tabindex on links based on slide visibility
				slider.querySelectorAll(".slick-slide").forEach((slide) => {
					const isHidden = slide.getAttribute("aria-hidden") === "true";
					slide
						.querySelectorAll("a")
						.forEach((link) => link.setAttribute("tabindex", isHidden ? "-1" : "0"));
				});
			};

			$(slider).on("init afterChange", updateAccessibility);

			$(slider).slick({
				vertical: true,
				verticalSwiping: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000,
			});

			prevButton.addEventListener("click", () => {
				$(slider).slick("slickPrev");
			});
			nextButton.addEventListener("click", () => {
				$(slider).slick("slickNext");
			});
		}
	}
}

customElements.define("app-blog", AppBlog);
