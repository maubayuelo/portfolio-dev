## Sass Module Migration

This project was updated to use the modern Sass module system instead of deprecated `@import` rules (deprecated and removed in Dart Sass 3.0.0).

### What changed
- Replaced `@import` statements inside partial consumers (`*.scss` files in `src/components` and `src/pages`) with `@use "../styles/app" as *;`.
- Converted `src/styles/app.scss` from a collection of `@import` lines to `@forward` declarations so it acts as a barrel file re‑exporting all design tokens, mixins and helpers.
- Added `@use "sass:math";` in `_variables.scss` and replaced deprecated global function `unitless()` with `math.is-unitless()`.

### New usage pattern
In any new component SCSS file, load the design system with:

```scss
@use "../styles/app" as *;
```

Avoid chaining multiple `@use` of individual partials—`app.scss` forwards them for you.

### Adding new partials
1. Create a file `src/styles/_new-partial.scss`.
2. Add `@forward './new-partial';` to `src/styles/app.scss`.
3. Consume its variables/mixins in component styles via the existing `@use "../styles/app" as *;`.

### Why migrate?
The module system provides namespacing, faster compilation, and eliminates impending deprecation warnings that would become hard errors in Dart Sass 3.0.0.

### Troubleshooting
If you see `Undefined variable` errors after adding a new partial, ensure it is forwarded in `app.scss` and that the component SCSS uses `@use` instead of `@import`.

# Developer Portfolio - ReactJS Vite App

This is the source code for the **Front-End Developer Portfolio** website of Mauricio Bayuelo Vanegas, built with **ReactJS & Vite**. The site showcases projects, professional background, and skills in front-end development.

## 🌍 Live Demo
[Visit Portfolio](https://mauriciobayuelo.com/dev/)

## 🛠 Tech Stack
- **ReactJS** - JavaScript Library for UI
- **Vite** - Fast development build tool
- **React Router** - Client-side routing
- **SCSS** - Styling
- **FontAwesome** - Icons
- **GSAP** - Animations
- **Axios** - API requests

## 🚀 Features
- Dynamic project showcase
- Smooth animations & transitions
- Responsive design for all devices
- Custom navigation & smooth scrolling

## 📂 Folder Structure
```
/src
  ├── assets/        # Images & static files
  ├── components/    # Reusable UI components
  ├── pages/         # Main pages
  ├── data/          # Data (projects, skills, etc.)
  ├── styles/        # SCSS files
  ├── App.jsx        # Main component
  ├── main.jsx       # Entry point
```

## 📦 Installation & Setup
To run this project locally:
```sh
git clone https://github.com/maubayuelo/portfolio-dev.git
cd portfolio
npm install
npm run dev
```

## ⚡ Deployment
To build and deploy:
```sh
npm run build
```
Upload the `dist/` folder to your hosting under `/dev/`.

## 📬 Contact
[LinkedIn](https://www.linkedin.com/in/maubayuelo/) | [GitHub](https://github.com/maubayuelo)

