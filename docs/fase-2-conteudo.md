# Fase 2 — Modelo de Conteúdo (registro)

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status da fase:** ✅ **concluída**

---

## Decisões técnicas

### 1. Content Layer API (Astro 5)

- Arquivo de config: `src/content.config.ts` (novo local do Astro 5)
- Loader `glob` de `astro/loaders` → `{ pattern: '**/*.{md,mdx}', base: './src/content/projects' }`
- O `src/content/config.ts` com `type: 'content'` do plano era o estilo **Astro 4** (deprecated)
- Coleção definida: `projects`

### 2. Schema (Zod) — fiel ao plano, com os programas corretos

- `program`: `marmitech` | `marmitech-jr` (comentado com a referência correta)
- `category`: `jogo` | `app` | `web` | `ia` | `outro`
- `status`: fluxo editorial `rascunho` → `em-revisao` → `aprovado` → `publicado`
- Ver código em `src/content.config.ts`

### 3. Política de dados refletida no schema

- `authors[].name` = primeiro nome; `team` = turma/grupo (item 3 do `fase-0-decisoes.md`)
- Regra de curadoria documentada (o schema valida estrutura; a regra editorial é o que se cadastra)

### 4. Slugs e rotas

- Nome do arquivo `.md` = `slug` = rota `/projetos/<slug>` (usado na Fase 4)

---

## Conteúdo de exemplo (3 projetos fictícios)

| slug | programa | categoria | status | destaque |
|---|---|---|---|---|
| `caverna-digital` | marmitech | jogo | publicado | sim |
| `horta-inteligente` | marmitech | ia | publicado | não |
| `quiz-energia` | marmitech-jr | web | em-revisao | não |

- `public/projects/<slug>/cover.svg` — **capas placeholder** na paleta da identidade (substituir por imagens reais na Fase 6)
- Demonstra os dois programas e os status (mostra que só `publicado` será exibido)

---

## Helpers (`src/lib/projects.ts`)

- `getAllProjects()` — ordenados por ano (desc)
- `getPublishedProjects()` — só `status: publicado` (regra de build)
- `getFeaturedProjects()` — publicados e `featured`
- `byProgram(projects, program)` — filtro por programa

---

## Validações executadas

- [x] `npx astro sync` OK — 3 entradas carregadas (`data-store.json`)
- [x] Tipos gerados em `.astro/content.d.ts` (CollectionEntry<'projects'>)
- [x] `npm run build` OK

---

## Próximas fases

- **Fase 3:** Componentes e layouts (Header, Footer, ProjectCard, ProjectGrid, ProjectFilters, badges, layouts)
- **Fase 4:** Páginas principais (Home, Explorar, Projeto individual, Marmitech, Marmitech Jr., Tecnologias, Sobre)
