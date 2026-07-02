# Debnar Patrik — Portfolio Website

## Descriere
Site de prezentare personală construit cu React 18, Tailwind CSS și Strapi v4 ca backend headless.

## Tehnologii utilizate
- **Frontend**: React 18, Vite, Tailwind CSS 3, React Router v6
- **Backend**: Strapi v4 (headless CMS)
- **Hosting Frontend**: Netlify
- **Hosting Backend**: Render
- **Repository**: GitHub

## Pagini
1. **Acasă** — Hero banner, categorii, articole recente, statistici
2. **Despre mine** — Informații personale, abilități, educație (Single Type Strapi)
3. **Portofoliu** — Proiecte cu filtrare pe categorii
4. **Servicii** — Servicii oferite și procesul de lucru
5. **Contact** — Formular de contact și informații

## Structura proiectului
```
debnar-patrik/
├── strapi-backend/     # Backend Strapi v4
│   ├── config/
│   ├── src/
│   │   └── api/
│   │       ├── article/
│   │       ├── category/
│   │       └── about/
│   └── package.json
├── frontend/           # Frontend React + Tailwind
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── netlify.toml
│   └── package.json
└── README.md
```

## Distribuția sarcinilor
Proiectul a fost realizat integral de către **Debnar Patrik**.

Activități realizate:
- Configurarea backend-ului Strapi (collection types: Article, Category, About)
- Dezvoltarea frontend-ului în React 18 cu Tailwind CSS
- Implementarea rutării cu React Router v6
- Design responsive cu meniu hamburger + offcanvas
- Implementarea light/dark mode
- Configurarea și deploy-ul pe Render (Strapi) și Netlify (React)
- Configurarea repository-ului GitHub

## Surse și inspirație
- Documentație oficială Strapi: https://docs.strapi.io
- Documentație React: https://react.dev
- Documentație Tailwind CSS: https://tailwindcss.com
- Fonturi Google: https://fonts.google.com (Playfair Display, Lato, Cinzel)
- Tema inspirată din proiectul Lumina Studio (Tema 1 și Proiectul 1)
