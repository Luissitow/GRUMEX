# GRUMEX — Sitio Web Corporativo

Sitio web de **Grupo Comercial Mexicano de la Industria y la Construcción (GRUMEX)**,
migrado de HTML/CSS/JS a un stack moderno con Next.js manteniendo la identidad
visual original.

> Manufactura · Mobiliaria · Construcción · Mármol · Importación · Logística y Maniobras

---

##  Stack

| Tecnología | Uso |
|---|---|
| **Next.js 16** (App Router) | Framework — renderizado estático (SSG) |
| **TypeScript** | Tipado end-to-end |
| **Tailwind CSS v4** | Estilos (escala 10px, fiel al CSS original) |
| **React Hook Form + Zod** | Formulario de contacto con validación |
| **Framer Motion** | Preloader, reveal, parallax y slider scroll-driven |

---

##  Estructura

```
src/
├── app/
│   ├── layout.tsx              # Header, Footer, Preloader, WhatsApp + SEO global
│   ├── page.tsx                # Home
│   └── [servicio]/
│       ├── page.tsx            # 6 servicios (SSG)
│       └── [subcategoria]/
│           └── page.tsx        # 4 subcategorías de manufactura (SSG)
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Hero, PanelCollage, CasosExito, ParallaxBand, etc.
│   └── ui/                     # Preloader, WhatsAppButton, Reveal
└── lib/
    └── servicios.ts            # Datos tipados de servicios y subcategorías
public/assets/img/              # Imágenes del sitio
legacy/                         # Sitio HTML/CSS/JS original (referencia, no se publica)
```

El contenido es **data-driven**: las páginas de servicio y subcategoría se generan
a partir de `src/lib/servicios.ts` mediante rutas dinámicas con
`generateStaticParams` + `generateMetadata`.

---

##  Desarrollo

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo → http://localhost:3000
```

Otros scripts:

```bash
npm run build        # build de producción (export estático → carpeta out/)
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript sin emitir
npm run test         # tests unitarios (Vitest)
npm run test:e2e     # tests end-to-end (Playwright)
```

---

##  Despliegue

### Estático (Hostinger / S3 / GitHub Pages)

El proyecto está configurado para **export estático** (`output: 'export'` en
`next.config.ts`):

```bash
npm run build        # genera la carpeta out/ con HTML/CSS/JS puro
```

Sube el contenido de `out/` a `public_html` (Hostinger) por FTP.

### Migración futura a servidor (AWS ECS / Docker)

Cambiar en `next.config.ts`:

```ts
output: 'standalone'   // en vez de 'export'
```

y restaurar la API route `app/api/leads` (disponible en el historial de git)
para procesar el formulario en el backend.

---
##  Variables de entorno

Copia `.env.example` a `.env` y completa:

```bash
NEXT_PUBLIC_SITE_URL="https://grupogrumex.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="527229666219"
NEXT_PUBLIC_CONTACT_ENDPOINT=""   # endpoint del formulario (ej. Formspree)
```

> En build estático el formulario envía a `NEXT_PUBLIC_CONTACT_ENDPOINT`
> (servicio externo tipo Formspree). Si se deja vacío, valida y muestra
> "enviado" en modo demo.

---

##  Características

- **11 páginas estáticas (SSG)**: home, 6 servicios y 4 subcategorías de manufactura.
- **Identidad visual idéntica** al sitio original (escala 10px, breakpoints 960/1024).
- **Efectos de scroll**: reveal de secciones, banda parallax con header inmersivo
  y sección de Casos de Éxito controlada por scroll.
- **SEO completo**: JSON-LD (Schema.org), Open Graph, Twitter Card, robots, geo
  y `canonical` por página.
- **Responsive** y respeta `prefers-reduced-motion`.

---

## 🔀 Flujo de ramas

```
feat/* · fix/* · chore/*  →  develop  →  main
```

Los releases se etiquetan sobre `main` con SemVer (`v0.2.0`, `v0.3.0`, …).

---

© GRUMEX — Grupo Comercial Mexicano de la Industria y la Construcción.
