# Web Costa Line

## Índice / Index

- [📘 Documentación en Español](#documentación-en-español)
- [📙 Documentation in English](#documentation-in-english)

---

### Índice

- [Web Costa Line](#web-costa-line)
  - [Índice / Index](#índice--index)
    - [Índice](#índice)
  - [Documentación en español](#documentación-en-español)
  - [📌 Descripción General](#-descripción-general)
  - [🎯 Objetivos del Proyecto](#-objetivos-del-proyecto)
  - [🧰 Tecnologías y Herramientas](#-tecnologías-y-herramientas)
  - [🛠️ Instalación y Configuración](#️-instalación-y-configuración)
  - [Configuración de la Extensión: Live Sass Compiler](#configuración-de-la-extensión-live-sass-compiler)
    - [Enlace de la extensión](#enlace-de-la-extensión)
    - [Configuración recomendada](#configuración-recomendada)
    - [Pasos para aplicar la configuración:](#pasos-para-aplicar-la-configuración)
    - [Pasos de Instalación](#pasos-de-instalación)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🚀 Uso y Ejecución](#-uso-y-ejecución)
    - [Integración del archivo app.js que importa los componentes](#integración-del-archivo-appjs-que-importa-los-componentes)
    - [Importar dependencias locales](#importar-dependencias-locales)
  - [Inclusión de Estilos](#inclusión-de-estilos)
  - [🧩 Uso de los componentes personalizados](#-uso-de-los-componentes-personalizados)
    - [`app-destinations-etn-grid`](#app-destinations-etn-grid)
      - [Requisitos:](#requisitos)
      - [Implementación:](#implementación)
    - [`app-other-services`](#app-other-services)
      - [Atributo requerido:](#atributo-requerido)
      - [Estructura esperada:](#estructura-esperada)
      - [Ejemplo de uso:](#ejemplo-de-uso)
    - [`app-blog.js`](#app-blogjs)
      - [Funcionalidades clave:](#funcionalidades-clave)
      - [Requisitos:](#requisitos-1)
  - [🔡 Tipografía e Íconos](#-tipografía-e-íconos)
    - [Insertar Íconos](#insertar-íconos)
    - [En CSS](#en-css)
    - [Actualización de Íconos](#actualización-de-íconos)
  - [🧱 Guía de Tipografía y Espaciado](#-guía-de-tipografía-y-espaciado)
      - [Ejemplo:](#ejemplo)
    - [Cómo Contribuir](#cómo-contribuir)
    - [Licencia](#licencia)
  - [Documentation in English](#documentation-in-english)
    - [Index](#index)
  - [📌 General Description](#-general-description)
  - [🎯 Project Objectives](#-project-objectives)
  - [🧰 Technologies and Tools](#-technologies-and-tools)
  - [🛠️ Installation and Configuration](#️-installation-and-configuration)
    - [Extension Configuration: Live Sass Compiler](#extension-configuration-live-sass-compiler)
      - [Extension link](#extension-link)
      - [Recommended Configuration](#recommended-configuration)
    - [Steps to Apply the Configuration](#steps-to-apply-the-configuration)
    - [Installation Steps](#installation-steps)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Usage and Execution](#-usage-and-execution)
    - [Integration of the `app.js` file that imports the components](#integration-of-the-appjs-file-that-imports-the-components)
    - [Import Local Dependencies](#import-local-dependencies)
  - [Styles Inclusion](#styles-inclusion)
  - [🧩 Use of Custom Components](#-use-of-custom-components)
    - [`app-destinations-etn-grid`](#app-destinations-etn-grid-1)
      - [Requirements:](#requirements)
      - [Implementation:](#implementation)
    - [`app-other-services`](#app-other-services-1)
      - [Required Attribute:](#required-attribute)
      - [Expected Structure:](#expected-structure)
      - [Example Usage:](#example-usage)
    - [`app-blog.js`](#app-blogjs-1)
      - [Key Features:](#key-features)
      - [Requirements:](#requirements-1)
  - [🔡 Typography and Icons](#-typography-and-icons)
    - [Insert Icons](#insert-icons)
    - [In CSS](#in-css)
    - [Icon Update](#icon-update)
  - [🧱 Typography and Spacing Guide](#-typography-and-spacing-guide)
      - [Example:](#example)
    - [How to Contribute](#how-to-contribute)
    - [License](#license)

---

## Documentación en español

## 📌 Descripción General

**Web Costa Line** es una solución web moderna orientada a promover destinos turísticos de forma atractiva e interactiva. Este proyecto ha sido desarrollado con tecnologías actuales como **HTML5**, **SCSS**, y metodologías de arquitectura CSS como **BEM** e **ITCSS**, garantizando un diseño escalable, mantenible y completamente *responsive*.

---

## 🎯 Objetivos del Proyecto

- Brindar una experiencia visual inmersiva en la exploración de destinos turísticos.
- Asegurar compatibilidad entre dispositivos mediante diseño *responsive*.
- Permitir la personalización modular de componentes y estilos.
- Fomentar buenas prácticas de desarrollo *frontend* escalable.

---

## 🧰 Tecnologías y Herramientas

- **HTML5**: Estructura semántica del contenido.
- **CSS3 + SCSS**: Estilización avanzada con preprocesador Sass.
- **Browserslist**: Control de compatibilidad con navegadores modernos.
- **Metodologías CSS**:
  - BEM (Block Element Modifier)
  - ITCSS (Inverted Triangle CSS)

---

## 🛠️ Instalación y Configuración

## Configuración de la Extensión: Live Sass Compiler

Para compilar archivos `.scss` a `.css` automáticamente, se utiliza la extensión **Live Sass Compiler** en Visual Studio Code.

### Enlace de la extensión

👉 [Live Sass Compiler - VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

### Configuración recomendada

Modifica tu archivo `settings.json` en la configuración de VS Code  del compilador SASS con el siguiente fragmento:

```json
  //"liveSassCompile.settings.forceBaseDirectory": "/d:/Documents/Proyects/WebIAMSA/src/styles",
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/src/styles/css/css-components"
    }
  ],
  "liveSassCompile.settings.includeItems": [
    "/src/styles/scss/_06-components/*.scss"
  ],
  "liveSassCompile.settings.generateMap": true,
  "liveSassCompile.settings.autoprefix": [
  
  
    "> 1%",
    "last 2 versions"
  ],
```

### Pasos para aplicar la configuración:

1. Abre el **Command Palette** con `Ctrl + Shift + P`.
2. Escribe `Preferences: Open Settings (JSON)` y selecciónalo.
3. Agrega o reemplaza el fragmento indicado.
4. Guarda y reinicia Visual Studio Code si es necesario.

Esta configuración permitirá compilar los estilos de forma automática al guardar los archivos `.scss`, generando los `.min.css` correspondientes en la ruta definida.

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/WebmasterETN/Costa-Line.git

# Acceder al proyecto
cd COSTA-LINE

# Compilar SCSS
sass src/styles/scss:src/styles/css --style compressed

# Visualizar en navegador
open index.html
```

---

## 📁 Estructura del Proyecto

```plaintext
COSTA-LINE/
├── .vscode/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── img/
│   │       ├── banner/
│   │       ├── destinos-img/
│   │       ├── icons-img/
│   │       ├── logos/
│   │       ├── payments_logos/
│   │       ├── programs/
│   │       ├── sales-location/
│   │       └── services/
│   ├── components/
│   ├── js/
│   └── styles/
│       ├── css/
│       └── scss/
├── .gitignore
├── app.js
├── index.html
├── manifest.json
├── package.json
└── README.md
```

---

## 🚀 Uso y Ejecución

### Integración del archivo app.js que importa los componentes

```html
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
```

### Importar dependencias locales

```html
<script src="./src/js/doters-cookies.js"></script>
<script src="./src/js/jquery.min.js?v=1.0.4"></script>
<script src="./src/js/slick.min.js?v=1.0.4"></script>
```

## Inclusión de Estilos

- **Carga completa (solo en **`home`**)**

  ```html
  <link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6"/>
  ```

> **IMPORTANTE**: Las rutas deben estar actualizadas. Este archivo de estilos solo se recomienda para la página **`home`**. Si deseas usar los componentes en otras páginas, deben cargarse los estilos de manera modular.

- **Carga modular (ejemplo)**

  ```html
  <link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
  <link rel="stylesheet" href="/src/styles/css/_css-components/payments-logos.min.css" />
  <link rel="stylesheet" href="/src/styles/css/_css-components/destinations-grid.min.css" />
  <link rel="stylesheet" href="/src/styles/css/_css-components/list-destinations.min.css" />
  ```

> **IMPORTANTE**: Las rutas deben estar actualizadas o los estilos no se cargarán correctamente.

---

## 🧩 Uso de los componentes personalizados

### `app-destinations-etn-grid`

Este componente permite la visualización dinámica de destinos turísticos mediante una grilla adaptable y cambiando a un *slider* en dispositivos móviles utilizando la librería Slick Slider.

#### Requisitos:

- Entre **1 y 5 elementos** por instancia.
- Cada destino debe incluir:
  - `title` (Nombre del destino)
  - `content` (Descripción)
  - `image` (URL de imagen)
  - `link` (URL opcional)
  - `titleText` (Título de sección)

#### Implementación:

```html
<app-destinations-etn-grid
  titlesText='[
    {"id": "title1, 2, 3...", "title": "título de la sección", "text": "texto del parráfo de la sección"}
  ]'
  destinations='[
    {
      "title": "título para el destino",
      "content": "texto descriptivo para los destinos",
      "image": "(url relativa de la imagen)./assets/destinos-img/aguascalientes.webp",
      "link": "(url de la landing page del destino)https://example.com/aguascalientes"
    },
    {
      "title": "título para el destino",
      "content": "texto descriptivo para los destinos",
      "image": "(url relativa de la imagen)./assets/destinos-img/aguascalientes.webp",
      "link": "(url de la landing page del destino)https://example.com/aguascalientes"
    },
    {
      "title": "título para el destino",
      "content": "texto descriptivo para los destinos",
      "image": "(url relativa de la imagen)./assets/destinos-img/aguascalientes.webp",
      "link": "(url de la landing page del destino)https://example.com/aguascalientes"
    }
  ]'
></app-destinations-etn-grid>
```

> **IMPORTANTE**: Las rutas de los enlaces, así como las de las imágenes, deben estar actualizadas.

---

### `app-other-services`

Componente para mostrar programas de lealtad y otros servicios clave.

#### Atributo requerido:

- `cards-data` (arreglo JSON con contenido de las tarjetas)

#### Estructura esperada:

```json
{
  "title": "Nombre del servicio",
  "imageSrc": "ruta/de/imagen.webp",
  "imageAlt": "descripción alternativa",
  "href": "https://url-del-servicio.com"
}
```

#### Ejemplo de uso:

```html
<app-other-services
  title-data='[
    {"title": "Título de la sección"}
  ]'
  cards-data='[
    {
      "title": "título del elemento",
      "imageSrc": "(url relativa de la imagen)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "texto del atributo alt de la imagen",
      "href": "(url de la landing page del destino) https://example.com/seguro-viajero"
    },
    {
      "title": "título del elemento",
      "imageSrc": "(url relativa de la imagen)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "texto del atributo alt de la imagen",
      "href": "(url de la landing page del destino) https://example.com/seguro-viajero"
    },
    {
      "title": "título del elemento",
      "imageSrc": "(url relativa de la imagen)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "texto del atributo alt de la imagen",
      "href": "(url de la landing page del destino) https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
```

> **IMPORTANTE**: Las rutas de los enlaces, así como las de las imágenes, deben estar actualizadas.

---

### `app-blog.js`

Componente que consume la API REST de WordPress y visualiza los últimos *posts* en un *slider* vertical.

#### Funcionalidades clave:

- `fetchLatestPosts()`: Obtiene datos de WordPress.
- `render()`: Renderiza HTML dinámico.
- `initializeSlider()`: Inicializa el *slider* con Slick.
- Soporte para *fallback* en caso de datos vacíos.

#### Requisitos:

- Incluir jQuery y Slick en el proyecto.
- Agregar `<app-blog></app-blog>` donde se desea renderizar.
- Personalizar *endpoint* en `fetchLatestPosts()` según la fuente deseada.

---

## 🔡 Tipografía e Íconos

### Insertar Íconos

```html
<div class="icon-Icon-lupa"></div>
```

### En CSS

```css
.icon-class:before {
  content: "\e900";
}
```

### Actualización de Íconos

1. Solicita el archivo `selection.json`.  
2. Optimiza los SVGs en [svgviewer.dev](https://www.svgviewer.dev/).  
3. Importa todo en [icomoon.io](https://icomoon.io/app).  
4. Genera y descarga el nuevo paquete.  
5. Sustituye archivos en `src/assets/icons/`.  
6. Copia clases CSS a `_icons.scss`.  
7. Actualiza `demo.html` y `demo-files/`.

> **IMPORTANTE**: El archivo `selection.json` debe estar actualizado y debe ser solicitado a tu líder de proyecto para su actualización si lo requieres.

---

## 🧱 Guía de Tipografía y Espaciado

Definidos mediante `clamp()` o `rem` para garantizar una buena escalabilidad visual según el caso.

#### Ejemplo:

```scss
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;

h1 {
  font-size: $fs-h1;
  line-height: $lh-default;
}
```

---

### Cómo Contribuir

```bash
git clone [repo-url]
git checkout -b feature-[nombre]
git add .
git commit -m "Descripción"
git push origin feature-[nombre]
```

Haz *Pull Request* a la rama `dev`.

---

### Licencia

Este proyecto se encuentra bajo **licencia propietaria**. Consulta el archivo `LICENSE`.

## Documentation in English

---

### Index

1. [📘 Documentation in Spanish](#documentación-en-español)  
   - [📌 General Description](#📌-general-description)  
   - [🎯 Project Objectives](#🎯-project-objectives)  
   - [🧰 Technologies and Tools](#🧰-technologies-and-tools)  
   - [🛠️ Installation and Configuration](#🛠️-installation-and-configuration)  
     - [Extension Configuration: Live Sass Compiler](#extension-configuration-live-sass-compiler)  
     - [Installation Steps](#installation-steps)  
   - [📁 Project Structure](#📁-project-structure)  
   - [🚀 Usage and Execution](#🚀-usage-and-execution)  
     - [Integration of app.js file](#integration-of-the-appjs-file-that-imports-the-components)  
     - [Import local dependencies](#import-local-dependencies)  
     - [Styles Inclusion](#styles-inclusion)  
   - [🧩 Use of Custom Components](#🧩-use-of-custom-components)  
     - [`app-destinations-etn-grid`](#app-destinations-etn-grid)  
     - [`app-other-services`](#app-other-services)  
     - [`app-blog.js`](#app-blogjs)  
   - [🔡 Typography and Icons](#🔡-typography-and-icons)  
     - [Insert Icons](#insert-icons)  
     - [Icon Update](#icon-update)  
   - [🧱 Typography and Spacing Guide](#🧱-typography-and-spacing-guide)  
   - [How to Contribute](#how-to-contribute)  
   - [License](#license)  

---

## 📌 General Description

**Web Costa Line** is a modern web solution aimed at promoting tourist destinations in an attractive and interactive way. This project was developed using current technologies such as **HTML5**, **SCSS**, and CSS architecture methodologies like **BEM** and **ITCSS**, ensuring a scalable, maintainable, and fully responsive design.

---

## 🎯 Project Objectives

- Deliver an immersive visual experience when exploring tourist destinations.  
- Ensure device compatibility through responsive design.  
- Enable modular customization of components and styles.  
- Encourage best practices for scalable frontend development.  

---

## 🧰 Technologies and Tools

- **HTML5**: Semantic content structure.  
- **CSS3 + SCSS**: Advanced styling with Sass preprocessor.  
- **Browserslist**: Controls compatibility with modern browsers.  
- **CSS Methodologies**:  
  - BEM (Block Element Modifier)  
  - ITCSS (Inverted Triangle CSS)  

---

## 🛠️ Installation and Configuration

### Extension Configuration: Live Sass Compiler

To automatically compile `.scss` files to `.css`, the **Live Sass Compiler** extension is used in Visual Studio Code.

#### Extension link

👉 [Live Sass Compiler - VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

#### Recommended Configuration

Modify your `settings.json` file in VS Code with the following snippet:

```json
  //"liveSassCompile.settings.forceBaseDirectory": "/d:/Documents/Proyects/WebIAMSA/src/styles",
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/src/styles/css/css-components"
    }
  ],
  "liveSassCompile.settings.includeItems": [
    "/src/styles/scss/_06-components/*.scss"
  ],
  "liveSassCompile.settings.generateMap": true,
  "liveSassCompile.settings.autoprefix": [
  
  
    "> 1%",
    "last 2 versions"
  ],
```

### Steps to Apply the Configuration

1. Open **Command Palette** with `Ctrl + Shift + P`.  
2. Type `Preferences: Open Settings (JSON)` and select it.  
3. Add or replace the indicated snippet.  
4. Save and restart Visual Studio Code if necessary.

This setup allows for automatic style compilation on `.scss` file save, generating the corresponding `.min.css` in the defined path.

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/WebmasterETN/Costa-Line.git

# Enter the project
cd COSTA-LINE


# Compile SCSS
sass src/styles/scss:src/styles/css --style compressed

# View in browser
open index.html
```

---

## 📁 Project Structure

```plaintext
COSTA-LINE/
├── .vscode/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── img/
│   │       ├── banner/
│   │       ├── destinos-img/
│   │       ├── icons-img/
│   │       ├── logos/
│   │       ├── payments_logos/
│   │       ├── programs/
│   │       ├── sales-location/
│   │       └── services/
│   ├── components/
│   ├── js/
│   └── styles/
│       ├── css/
│       └── scss/
├── .gitignore
├── app.js
├── index.html
├── manifest.json
├── package.json
└── README.md
```

---

## 🚀 Usage and Execution

### Integration of the `app.js` file that imports the components

```html
<head>
  <script type="module" src="./app.js?v=1.2.0"></script>
</head>
```

### Import Local Dependencies

```html
<script src="./src/js/doters-cookies.js"></script>
<script src="./src/js/jquery.min.js?v=1.0.4"></script>
<script src="./src/js/slick.min.js?v=1.0.4"></script>
```

## Styles Inclusion

- **Full load (only for `home`)**

  ```html
  <link rel="stylesheet" href="./src/styles/css/_css-components/home.min.css?v=1.0.6"/>
  ```

> **IMPORTANT**: Paths must be up to date. This style file is recommended only for the **`home`** page. To use components on other pages, styles must be loaded modularly.

- **Modular load (example)**

  ```html
  <link rel="stylesheet" href="/src/styles/css/_css-components/header.min.css" />
  <link rel="stylesheet" href="/src/styles/css/_css-components/payments-logos.min.css" />
  <link rel="stylesheet" href="/src/styles/css/_css-components/destinations-grid.min.css" />
  <link rel="stylesheet" href="/src/styles/css/_css-components/list-destinations.min.css" />
  ```

> **IMPORTANT**: Paths must be up to date or styles will not load properly.

---

## 🧩 Use of Custom Components

### `app-destinations-etn-grid`

This component enables dynamic display of tourist destinations using a responsive grid that switches to a slider on mobile devices with the Slick Slider library.

#### Requirements:

- Between **1 and 5 items** per instance.  
- Each destination must include:  
  - `title` (Destination name)  
  - `content` (Description)  
  - `image` (Image URL)  
  - `link` (Optional URL)  
  - `titleText` (Section title)  

#### Implementation:

```html
<app-destinations-etn-grid
  titlesText='[
    {"id": "title1, 2, 3...", "title": "section title", "text": "paragraph text for the section"}
  ]'
  destinations='[
    {
      "title": "title for the destination",
      "content": "descriptive text for the destination",
      "image": "(relative image URL)./assets/destinos-img/aguascalientes.webp",
      "link": "(destination landing page URL)https://example.com/aguascalientes"
    },
    {
      "title": "title for the destination",
      "content": "descriptive text for the destination",
      "image": "(relative image URL)./assets/destinos-img/aguascalientes.webp",
      "link": "(destination landing page URL)https://example.com/aguascalientes"
    },
    {
      "title": "title for the destination",
      "content": "descriptive text for the destination",
      "image": "(relative image URL)./assets/destinos-img/aguascalientes.webp",
      "link": "(destination landing page URL)https://example.com/aguascalientes"
    }
  ]'
></app-destinations-etn-grid>

```

> **IMPORTANT**: Link and image paths must be up to date.

---

### `app-other-services`

Component to display loyalty programs and other key services.

#### Required Attribute:

- `cards-data` (JSON array with card content)

#### Expected Structure:

```json
{
  "title": "Service name",
  "imageSrc": "image/path.webp",
  "imageAlt": "alt description",
  "href": "https://service-url.com"
}
```

#### Example Usage:

```html
<app-other-services
  title-data='[
    {"title": "Section title"}
  ]'
  cards-data='[
    {
      "title": "item title",
      "imageSrc": "(relative image URL)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "alt attribute text for the image",
      "href": "(destination landing page URL) https://example.com/seguro-viajero"
    },
    {
      "title": "item title",
      "imageSrc": "(relative image URL)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "alt attribute text for the image",
      "href": "(destination landing page URL) https://example.com/seguro-viajero"
    },
    {
      "title": "item title",
      "imageSrc": "(relative image URL)./assets/other-services-img/seguro-viajero.webp",
      "imageAlt": "alt attribute text for the image",
      "href": "(destination landing page URL) https://example.com/seguro-viajero"
    }
  ]'
></app-other-services>
```

> **IMPORTANT**: Link and image paths must be up to date.

---

### `app-blog.js`

Component that consumes the WordPress REST API and displays the latest posts in a vertical slider.

#### Key Features:

- `fetchLatestPosts()`: Fetches data from WordPress.  
- `render()`: Renders dynamic HTML.  
- `initializeSlider()`: Initializes Slick slider.  
- Fallback support if data is empty.

#### Requirements:

- Include jQuery and Slick in the project.  
- Add `<app-blog></app-blog>` where the component should render.  
- Customize endpoint in `fetchLatestPosts()` to match desired source.

---

## 🔡 Typography and Icons

### Insert Icons

```html
<div class="icon-Icon-lupa"></div>
```

### In CSS

```css
.icon-class:before {
  content: "\e900";
}
```

### Icon Update

1. Request the `selection.json` file  
2. Optimize SVGs at [svgviewer.dev](https://www.svgviewer.dev/)  
3. Import everything into [icomoon.io](https://icomoon.io/app)  
4. Generate and download the new package  
5. Replace files in `src/assets/icons/`  
6. Copy CSS classes to `_icons.scss`  
7. Update `demo.html` and `demo-files/`

> **IMPORTANT**: The `selection.json` file must be up to date and should be requested from your project lead if needed.

---

## 🧱 Typography and Spacing Guide

Defined using `clamp()` or `rem` to ensure good visual scalability as needed.

#### Example:

```scss
$fs-h1: clamp(2em, 5vw, 3em);
$lh-default: 1.5;

h1 {
  font-size: $fs-h1;
  line-height: $lh-default;
}
```

---

### How to Contribute

```bash
git clone [repo-url]
git checkout -b feature-[name]
git add .
git commit -m "Description"
git push origin feature-[name]
```

Make a Pull Request to the `dev` branch.

---

### License

This project is under a **proprietary license**. See the `LICENSE` file.