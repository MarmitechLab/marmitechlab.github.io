# Catálogo Marmitech

Site-catálogo dos projetos estudantis do **Marmitech** (Ensino Médio) e **Marmitech Jr.** — jogos, apps, sites e projetos de IA criados pelos estudantes.

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
| 2–8 | ⏳ pendente |

## Como rodar

```bash
npm install        # instala dependências
npm run dev        # dev server → http://localhost:4321/catalogo
npm run build      # gera ./dist (estático, pronto para deploy)
npm run preview    # serve o build localmente
```

> Ambiente usa Node 20 → Astro **5.18.2** (pinned). Astro 7 exigiria Node ≥ 22.

## Documentação

- [`plano-implementacao-marmitech.md`](./plano-implementacao-marmitech.md) — plano completo de implementação
- [`docs/fase-0-decisoes.md`](./docs/fase-0-decisoes.md) — decisões e preparação (Fase 0)
- [`docs/fase-1-setup.md`](./docs/fase-1-setup.md) — registro do setup (Fase 1)

## Repositório

- GitHub: [`MarmitechLab/catalogo`](https://github.com/MarmitechLab/catalogo) (público)
- Site (GitHub Pages): `https://marmitechlab.github.io/catalogo`

## Fase 0 — concluída

- [x] Repositório público criado: [`MarmitechLab/catalogo`](https://github.com/MarmitechLab/catalogo)
- [x] Domínio definido: `https://marmitechlab.github.io/catalogo`
- [x] Logo organizada (JPEG/PNG + favicons) — conversão para SVG documentada como opcional
- [x] Política de dados definida: **primeiro nome + turma**, sem dados de contato
