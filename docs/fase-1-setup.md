# Fase 1 — Setup do Projeto (registro)

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status da fase:** ✅ **concluída**

---

## Decisões técnicas

### 1. Versão do Astro — **5.18.2** (pinned)

- O template atual (`create-astro@5` → `astro@7.2.2`) exige **Node ≥ 22.12**
- O ambiente tem **Node 20.20.2** → fixado **Astro 5.18.2** (suporta Node ≥ 20.3)
- `package.json` → `"engines": { "node": ">=20.3.0" }`
- ⚠️ Se o Node do ambiente for atualizado para ≥ 22, avaliar upgrade para Astro 7 (`npx @astrojs/upgrade`)

### 2. Tailwind CSS **v4** (CSS-first) — adaptação do plano

- O plano previa `tailwind.config.mjs` (estilo v3), mas o `astro add tailwind` instala a **v4**
- Na v4 os tokens ficam no CSS via `@theme` (em `src/styles/global.css`)
- Tokens definidos: `ink`, `paper`, `line`, `marmitech`, `marmitech-jr`, `font-sans`
- Plugin: `@tailwindcss/vite` no `astro.config.mjs`

### 3. Fontes — self-hosted

- `@fontsource-variable/space-grotesk` (sem request externo ao Google Fonts)

### 4. Deploy path (`base`)

- `astro.config.mjs`: `site: 'https://marmitechlab.github.io'`, `base: '/catalogo'`
- `import.meta.env.BASE_URL` retorna `/catalogo` **sem barra final** → usar `${BASE_URL}/...`
- Links internos de página (`<a href="/">`) não são reescritos automaticamente → usar `${BASE_URL}/`
- Validação via `npm run build`: paths gerados como `/catalogo/...` ✓

---

## Estrutura criada

```
astro.config.mjs          # site/base + plugin Tailwind
package.json              # scripts dev/build/preview/astro
tsconfig.json             # extends astro/tsconfigs/strict
src/styles/global.css     # Tailwind + tokens da identidade
src/pages/index.astro     # home placeholder com a identidade visual
public/                   # favicons e logo (Fase 0) — favicon.ico/svg padrão removidos
.vscode/                  # extensions.json + launch.json (template)
```

---

## Validações executadas

- [x] `npm install` OK (247 pacotes)
- [x] `npx astro add tailwind --yes` OK (`tailwindcss` + `@tailwindcss/vite` 4.3.3)
- [x] `npm run build` OK (1 página, ~1.5s)
- [x] `npm run dev` OK — `http://localhost:4321/catalogo` responde **200**
- [x] `/catalogo/favicon-32.png` e `/catalogo/assets/logo/marmitech-logo.png` servidos com **200**
- [x] CSS de produção contém os tokens (`.bg-ink`, `.border-line`, `.text-marmitech-jr`) e fontes woff2

---

## Próximas fases

- **Fase 2:** Content Collections + schema dos projetos (`src/content/config.ts`)
- **Fase 3:** Componentes e layouts (Header, Footer, Cards, Grid, Filters)
- **Fase 4:** Páginas principais (Home, Explorar, Projeto individual, Sobre)
