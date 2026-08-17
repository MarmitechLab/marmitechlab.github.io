# Fase 3 + 4 — Componentes, Layouts e Páginas (registro)

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status:** ✅ **concluída**

---

## Fase 3 — Componentes e layouts (`src/components/`, `src/layouts/`)

| Arquivo | Função |
|---|---|
| `BaseLayout.astro` | Estrutura comum: head, SEO, Header, `<main>` com slot, Footer |
| `ProjectLayout.astro` | Envolve `BaseLayout` para páginas individuais de projeto |
| `Header.astro` | Logo + navegação (Início, Projetos, Marmitech, Jr., Tecnologias, Sobre) |
| `Footer.astro` | Créditos + link Sobre |
| `Stats.astro` | Projetos / Jogos / Estudantes (calculados da collection) |
| `ProjectCard.astro` | Capa, categoria, badge de programa, título, descrição, ano/turma, tecnologias, "Ver projeto" |
| `ProjectGrid.astro` | Grade responsiva (1/2/3 colunas) |
| `ProjectFilters.astro` | Busca + filtros (categoria, programa, ano) com JS vanilla (`data-*`) |
| `ProgramBadge.astro` / `CategoryBadge.astro` / `TechnologyBadge.astro` | Badges da identidade |

## Fase 4 — Páginas (`src/pages/`)

| Rota | Página |
|---|---|
| `/` | Home: hero, stats, destaques, seção Marmitech Jr. |
| `/projetos/` | Explorar com filtros + grid |
| `/projetos/<slug>/` | Projeto individual (usa `ProjectLayout`) |
| `/marmitech/` | Projetos do programa `marmitech` |
| `/marmitech-jr/` | Projetos do programa `marmitech-jr` |
| `/tecnologias/` | Índice de tecnologias (extra) |
| `/tecnologias/<tech>/` | Projetos por tecnologia |
| `/sobre/` | Sobre o programa e o catálogo |

## Regras aplicadas

- **Só `status: publicado`** aparece em qualquer listagem/página (helpers em `src/lib/projects.ts`)
- **Rotas `[...slug]` e `[...technology]`** geradas via `getStaticPaths` a partir da collection
- **Deploy na raiz** (`https://marmitechlab.github.io`, sem `base`): links internos usam `import.meta.env.BASE_URL` e assets de capa usam `assetUrl()` (`src/lib/url.ts`)
- **Markdown** estilizado com `@tailwindcss/typography` (`prose`)
- Filtros sem framework: cada card expõe `data-category/program/year/search`

## Validações

- [x] `npm run build` → **14 páginas** (Home, Explorar, 2 projetos, Marmitech, Jr., tecnologias: índice + 6, Sobre)
- [x] `quiz-energia` (em-revisao) **não** gerado como página nem listado — correto
- [x] Rotas principais retornam **200** no `astro preview`
- [x] Screenshots gerados (home, explorar, projeto)

## Próximas fases

- **Fase 5:** Deploy — GitHub Actions → GitHub Pages
- **Fase 6:** Cadastro do conteúdo real (8–10 projetos)
- **Fase 7:** Testes, acessibilidade, SEO, lançamento
- Opcional V1: `/laboratorio/` (não implementado)
