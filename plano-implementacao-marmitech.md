# Plano de Implementação — Catálogo Marmitech

Stack definida: **Astro + TypeScript + Tailwind CSS + Markdown/Content Collections + GitHub + GitHub Pages**

---

## Visão geral das fases

| Fase | Nome | Objetivo |
|---|---|---|
| 0 | Preparação | Repositório, contas, definições |
| 1 | Setup do projeto | Astro + Tailwind + TS rodando |
| 2 | Modelo de conteúdo | Content Collections + schema dos projetos |
| 3 | Componentes e layouts | Header, Footer, Cards, Layouts |
| 4 | Páginas principais | Home, Explorar, Projeto individual, Sobre |
| 5 | Deploy | GitHub Actions → GitHub Pages |
| 6 | Conteúdo real | Cadastrar os primeiros projetos |
| 7 | Testes e revisão | Checagem final, ajustes, lançamento |
| 8 (futuro) | Evolução | Firestore/Storage/Auth, painel admin |

---

## Fase 0 — Preparação

- [ ] Criar repositório no GitHub: `marmitech-catalogo`
- [ ] Definir se será público ou privado (atenção a imagens/nomes de alunos)
- [ ] Organizar os ativos da logo (Marmitech e Marmitech Jr.) em SVG/PNG de alta resolução
- [ ] Definir domínio: `usuario.github.io/marmitech-catalogo` ou domínio próprio (se houver)
- [ ] Definir política de exposição de dados dos estudantes (nome completo, primeiro nome, ou só "equipe")

---

## Identidade visual (baseada na logo)

A logo é um ícone de traço preto (marmita estilizada como "chip", com trilhas de circuito e nós) + wordmark sem serifa. Isso dá uma direção de design clara: minimalista, monocromática, com o motivo de circuito como elemento gráfico reaproveitável (divisores, bullets, hover states, fundo de seções).

**Paleta proposta (Tailwind):**

```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        ink: '#111111',      // traço da logo, texto principal
        paper: '#FAFAFA',    // fundo
        line: '#D4D4D4',     // divisores, bordas sutis
        marmitech: {
          DEFAULT: '#111111', // Marmitech (Ensino Médio) — preto puro, mais "sério"
        },
        'marmitech-jr': {
          DEFAULT: '#F97316', // Marmitech Jr. — acento laranja/quente, mais lúdico
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'], // geométrica, combina com o traço técnico da logo
      },
    },
  },
};
```

**Diretrizes:**
- Ícone da logo sempre em traço único (`stroke`), nunca preenchido — manter consistência com o estilo circuito
- Marmitech (Ensino Médio): preto/branco, tom mais técnico e sóbrio
- Marmitech Jr.: mesma logo/traço, mas com o acento laranja para diferenciar visualmente as seções sem criar uma segunda marca
- Badges de categoria (Jogo, App, Web, IA) podem usar o motivo de "nó de circuito" como marcador visual
- Favicon: recorte apenas do ícone (sem o wordmark), em SVG

**Ação:**
- [ ] Exportar a logo em SVG (traço, não bitmap) para reaproveitar como ícone/favicon/loading state
- [ ] Definir se existe uma variante da logo específica para Marmitech Jr. ou se será a mesma logo + acento de cor

---

## Fase 1 — Setup do projeto

```bash
npm create astro@latest marmitech-catalogo -- --template minimal --typescript strict
cd marmitech-catalogo
npx astro add tailwind
```

- [ ] Confirmar `astro.config.mjs` com `site` e `base` corretos para GitHub Pages:

```js
export default defineConfig({
  site: 'https://usuario.github.io',
  base: '/marmitech-catalogo',
});
```

- [ ] Rodar `npm run dev` e confirmar que o projeto sobe localmente
- [ ] Configurar Tailwind com as cores da identidade visual do Marmitech (extrair da logo)
- [ ] Criar `src/styles/global.css` com tokens de cor, tipografia e espaçamento

---

## Fase 2 — Modelo de conteúdo (Content Collections)

- [ ] Criar `src/content/config.ts` com o schema do projeto:

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    program: z.enum(['marmitech', 'marmitech-jr']),
    category: z.enum(['jogo', 'app', 'web', 'ia', 'outro']),
    year: z.number(),
    class: z.string(),
    cover: z.string(),
    screenshots: z.array(z.string()).default([]),
    technologies: z.array(z.string()),
    ai: z.object({
      used: z.boolean(),
      tools: z.array(z.string()).default([]),
      uses: z.array(z.string()).default([]),
    }).optional(),
    authors: z.array(z.object({
      name: z.string(),
      team: z.string().optional(),
    })),
    teacher: z.string().optional(),
    links: z.object({
      demo: z.string().url().optional(),
      repository: z.string().url().optional(),
    }).optional(),
    learning: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['rascunho', 'em-revisao', 'aprovado', 'publicado']),
  }),
});

export const collections = { projects };
```

- [ ] Criar pasta `src/content/projects/` com 2–3 arquivos de exemplo (`.md`) usando dados fictícios, para validar o schema
- [ ] Criar pasta `public/projects/<slug>/` para capa e screenshots de cada projeto
- [ ] Documentar no `README.md` como cadastrar um novo projeto (guia rápido para professores)

---

## Fase 3 — Componentes e layouts

- [ ] `Header.astro` — logo, navegação (Início, Projetos, Marmitech, Marmitech Jr., Tecnologias, Sobre)
- [ ] `Footer.astro`
- [ ] `Stats.astro` — número de projetos, jogos, estudantes (calculado a partir da collection)
- [ ] `ProjectCard.astro` — capa, categoria, título, descrição curta, programa/ano, tecnologias, botão "Ver projeto"
- [ ] `ProjectGrid.astro` — grade responsiva de cards
- [ ] `ProjectFilters.astro` — busca por texto + filtros (categoria, programa, ano, tecnologia, turma)
- [ ] `TechnologyBadge.astro` e `ProgramBadge.astro`
- [ ] `BaseLayout.astro` — estrutura comum (head, header, footer, SEO básico)
- [ ] `ProjectLayout.astro` — layout da página individual do projeto

---

## Fase 4 — Páginas principais

- [ ] `src/pages/index.astro` — Home (hero, estatísticas, projetos em destaque, destaque Marmitech Jr.)
- [ ] `src/pages/projetos/index.astro` — Explorar projetos (filtros + grid)
- [ ] `src/pages/projetos/[...slug].astro` — página individual do projeto (usa `ProjectLayout`)
- [ ] `src/pages/marmitech/index.astro` — projetos filtrados por `program: marmitech`
- [ ] `src/pages/marmitech-jr/index.astro` — projetos filtrados por `program: marmitech-jr`
- [ ] `src/pages/tecnologias/[...technology].astro` — página dinâmica por tecnologia
- [ ] `src/pages/sobre/index.astro` — história do projeto, metodologia
- [ ] (Opcional na V1) `src/pages/laboratorio/index.astro` — experimentos e protótipos

Regra importante: só exibir na build final os projetos com `status: publicado`.

---

## Fase 5 — Deploy (GitHub Actions → GitHub Pages)

- [ ] Ativar GitHub Pages no repositório (Settings → Pages → Source: GitHub Actions)
- [ ] Criar `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] Fazer o primeiro push e validar que o site publica corretamente
- [ ] Conferir imagens, rotas e o `base` path (erros comuns de link quebrado vêm daqui)

---

## Fase 6 — Conteúdo real

- [ ] Levantar, com os professores responsáveis, a lista dos primeiros projetos a cadastrar
- [ ] Coletar para cada projeto: descrição, capa, screenshots, tecnologias, autores/equipe, uso de IA, aprendizado
- [ ] Definir fluxo editorial simples: rascunho → em revisão → aprovado → publicado
- [ ] Cadastrar os primeiros 8–10 projetos como massa crítica inicial

---

## Fase 7 — Testes e revisão

- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Testar filtros e busca com múltiplos projetos
- [ ] Revisar acessibilidade básica (contraste, alt em imagens, navegação por teclado)
- [ ] Revisar exposição de dados de estudantes (nomes, fotos)
- [ ] Testar links de "Jogar agora" e repositórios
- [ ] Validar SEO básico (title, description, og:image por página)
- [ ] Lançamento oficial

---

## Fase 8 — Evolução futura (fora do escopo da V1)

- [ ] Avaliar migração de hospedagem para Firebase Hosting, se necessário SSR
- [ ] Firestore para dados dinâmicos + Firebase Storage para imagens
- [ ] Firebase Authentication para painel `/admin`
- [ ] Painel administrativo: cadastro/edição de projetos sem editar Markdown diretamente
- [ ] Página de "Estudantes"/equipes com mais recursos, respeitando privacidade

---

## Checklist resumido de lançamento da V1

- [ ] Projeto Astro + Tailwind rodando localmente
- [ ] Schema de conteúdo definido e validado
- [ ] Componentes principais criados
- [ ] Páginas Home, Explorar, Projeto individual e Sobre no ar
- [ ] Deploy automático via GitHub Actions funcionando
- [ ] Pelo menos 8–10 projetos publicados
- [ ] Revisão de privacidade e responsividade feita
