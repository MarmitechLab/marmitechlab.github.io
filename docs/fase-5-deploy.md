# Fase 5 — Deploy (GitHub Actions → GitHub Pages)

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status:** 🚧 **workflow criado** — falta a ativação no GitHub (passos abaixo)

---

## O que foi feito

- Criado `.github/workflows/deploy.yml` (padrão oficial do Astro):
  - `build`: `actions/checkout@v4` + `withastro/action@v3` (instala deps com `npm ci` via lockfile, roda `npm run build` e faz upload do artifact)
  - `deploy`: `actions/deploy-pages@v4` publica em `https://marmitechlab.github.io`
  - Node **20** fixado no build (mesma versão do ambiente local)
  - Disparo: push em `main` + `workflow_dispatch` (deploy manual)
  - `concurrency` para não sobrepor publicações
- Repositório `MarmitechLab.github.io` → **site na raiz** (sem `base`)

## Para ativar (você, no GitHub — 1 vez)

1. Abrir **Settings → Pages** do repositório `MarmitechLab/MarmitechLab.github.io`
2. Em **Build and deployment**, definir **Source: GitHub Actions**
3. (Opcional) Em **Settings → Actions → General**, permitir workflows
4. Fazer `git push` (ou rodar o workflow manualmente pela aba **Actions** → "Deploy to GitHub Pages" → **Run workflow**)

## Como validar o deploy

- **Actions**: aba Actions do repositório → workflow deve ficar verde
- **Página**: `https://marmitechlab.github.io` → home
- **Rotas**: `/projetos/`, `/projetos/caverna-digital/`, `/marmitech/`, `/marmitech-jr/`, `/tecnologias/`, `/sobre/`
- **Assets**: imagens `/assets/...` e capas `/projects/<slug>/cover.svg` carregando (200)

## Notas

- Como o site é na raiz (`*.github.io`), **não há `base` path** — links usam `/` (já validado no build local)
- Se algum link quebrar no deploy, o suspeito nº 1 é asset com path absoluto — revisar com as rotas acima
