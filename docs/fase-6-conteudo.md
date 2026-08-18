# Fase 6 — Conteúdo Real (registro)

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status:** 🚧 **infraestrutura pronta** — aguardando a lista de projetos reais dos professores

---

## O que já está pronto

| Item | Onde |
|---|---|
| Schema validado (todos os campos) | `src/content.config.ts` |
| Fluxo editorial `rascunho → em-revisao → aprovado → publicado` | schema + helpers (`src/lib/projects.ts`) |
| **Modelo de cadastro** com campos comentados | `src/content/projects/_template.md` |
| Guia "Como cadastrar um projeto" | `README.md` |
| Capas placeholder | `public/projects/<slug>/cover.svg` |
| 3 exemplos fictícios (fase 2) | `src/content/projects/*.md` |

## Checklist de coleta de dados (por projeto)

Para cada um dos **8–10 projetos iniciais**, precisamos:

- [ ] **Título**
- [ ] **Descrição curta** (1–2 frases para o card)
- [ ] **Descrição completa** (texto da página)
- [ ] **Programa**: `marmitech` (EM Técnico) ou `marmitech-jr` (9º ano)
- [ ] **Categoria**: jogo, app, web, ia, outro
- [ ] **Ano** e **turma**
- [ ] **Tecnologias** usadas
- [ ] **Capa** (imagem; se não tiver, usamos placeholder)
- [ ] **Screenshots** (opcional)
- [ ] **Autores** (primeiro nome + turma apenas — política de dados)
- [ ] **Professor(a)** responsável (opcional)
- [ ] **Uso de IA**: ferramentas e como foi usada (opcional)
- [ ] **Links**: demo e/ou repositório (opcional)
- [ ] **Aprendizados** (opcional)
- [ ] **Destaque** na home (opcional)

> ⚠️ Antes de publicar: revisar capas/screenshots (sem rostos ou dados pessoais) e confirmar `status: publicado` com o professor.

## Como entregar os projetos

Você pode me enviar os dados por aqui (uma lista por vez) ou criar os arquivos `.md` a partir do modelo `_template.md`. Eu cuido da validação (`npm run build`) e do commit.

## Notas

- O `_template.md` está com `status: rascunho` → **não aparece** no site
- Se um projeto real não tiver capa, mantemos a capa placeholder até a Fase 7
