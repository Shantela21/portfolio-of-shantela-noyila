# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Portfolio of Shantela Noyila

A modern, responsive portfolio website built with React, TypeScript, and Vite featuring a clean black and white design.

## Features
- 🎨 Modern black and white minimalist design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 💼 Showcase of skills, projects, and experience
- 📧 Contact form
- 📄 CV download functionality

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. CV File
Your CV is already located in `src/assets/Shantela-Noyila-Resume (1).pdf`

The download buttons automatically link to this file.

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Project Structure
```
portfolio-ss-noyila/
├── src/
│   ├── assets/
│   │   └── Shantela-Noyila-Resume (1).pdf  (Your CV)
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css  (All styling in one file)
│   └── main.tsx
└── package.json
```

## Technologies Used
- React 19
- TypeScript
- Vite
- CSS3

## Contact
- Email: shantelaslie@gmail.com
- LinkedIn: [Shantela Noyila](https://www.linkedin.com/in/shantela-noyila-1864b2212)
- GitHub: [@Shantela21](https://github.com/Shantela21)

---

# portfolio-of-shantela-noyila
