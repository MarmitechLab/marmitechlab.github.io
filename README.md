# Catálogo Marmitech

Site-catálogo dos projetos estudantis do **Marmitech — Educação Tecnológica Voluntária** (Ensino Médio Técnico) e **Marmitech Jr.** (9º ano do Ensino Fundamental) — jogos, apps, sites e projetos de IA criados pelos estudantes.

## Os projetos

- **Marmitech — Educação Tecnológica Voluntária** — voltado a estudantes dos cursos técnicos de **Desenvolvimento de Sistemas** e **Jogos Digitais** do **Ensino Médio**. Ocorre no horário do **intervalo**, com participação **voluntária**, trabalhando lógica de programação, pensamento computacional, experimentação prática e resolução de problemas por meio de aplicações e jogos educativos.
- **Marmitech Jr.** — extensão do Marmitech direcionada a estudantes do **9º ano do Ensino Fundamental**, com foco em experimentação, criatividade, jogos, programação, IA e pensamento computacional.

## Stack

- **Astro** + **TypeScript** (strict)
- **Tailwind CSS**
- **Content Collections** (Markdown) como modelo de conteúdo
- **GitHub Actions → GitHub Pages** para deploy automático

## Status

| Fase | Status |
|---|---|
| 0 — Preparação | ✅ concluída |
| 1 — Setup do projeto | ✅ concluída |
| 2 — Modelo de conteúdo | ✅ concluída |
| 3–8 | ⏳ pendente |

## Como rodar

```bash
npm install        # instala dependências
npm run dev        # dev server → http://localhost:4321/catalogo
npm run build      # gera ./dist (estático, pronto para deploy)
npm run preview    # serve o build localmente
```

> Ambiente usa Node 20 → Astro **5.18.2** (pinned). Astro 7 exigiria Node ≥ 22.

## Como cadastrar um projeto

Cada projeto é um arquivo Markdown em `src/content/projects/<slug>.md`. O nome do arquivo (`slug`) define a URL do projeto: `/catalogo/projetos/<slug>`.

**Passo a passo**

1. Copie um projeto existente como modelo (ex.: `caverna-digital.md`).
2. Salve como `src/content/projects/meu-projeto.md`.
3. Preencha o **frontmatter** (bloco entre `---`):

| Campo | Obrigatório | Observação |
|---|---|---|
| `title` | sim | Título do projeto |
| `shortDescription` | sim | Resumo de 1–2 frases |
| `program` | sim | `marmitech` ou `marmitech-jr` |
| `category` | sim | `jogo`, `app`, `web`, `ia` ou `outro` |
| `year` | sim | Ano de criação (número) |
| `class` | sim | Turma (ex.: `2º ano — Desenvolvimento de Sistemas`) |
| `cover` | sim | Caminho em `public/` (ex.: `/projects/meu-projeto/cover.png`) |
| `technologies` | sim | Lista, ex.: `["Construct", "JavaScript"]` |
| `authors` | sim | `name` = **primeiro nome** apenas; `team` = turma/grupo |
| `status` | sim | `rascunho`, `em-revisao`, `aprovado` ou `publicado` |
| Outros | não | `screenshots`, `ai`, `teacher`, `links`, `learning`, `featured` (ver `src/content.config.ts`) |

4. Coloque a capa em `public/projects/meu-projeto/` (e screenshots na mesma pasta).
5. Rode `npm run build` — valida o schema. Corrija se apontar erro.
6. Quando o professor aprovar, mude `status: publicado` (só publicados aparecem no site).

> **Privacidade (política de dados):** use **somente o primeiro nome** dos autores + turma. Nunca inclua sobrenome completo, telefone, e-mail ou redes sociais. Revise capas/screenshots (sem rostos ou dados pessoais).

## Documentação

- [`plano-implementacao-marmitech.md`](./plano-implementacao-marmitech.md) — plano completo de implementação
- [`docs/fase-0-decisoes.md`](./docs/fase-0-decisoes.md) — decisões e preparação (Fase 0)
- [`docs/fase-1-setup.md`](./docs/fase-1-setup.md) — registro do setup (Fase 1)
- [`docs/fase-2-conteudo.md`](./docs/fase-2-conteudo.md) — modelo de conteúdo e schema (Fase 2)

## Repositório

- GitHub: [`MarmitechLab/catalogo`](https://github.com/MarmitechLab/catalogo) (público)
- Site (GitHub Pages): `https://marmitechlab.github.io/catalogo`

## Fase 0 — concluída

- [x] Repositório público criado: [`MarmitechLab/catalogo`](https://github.com/MarmitechLab/catalogo)
- [x] Domínio definido: `https://marmitechlab.github.io/catalogo`
- [x] Logo organizada (JPEG/PNG + favicons) — conversão para SVG documentada como opcional
- [x] Política de dados definida: **primeiro nome + turma**, sem dados de contato
