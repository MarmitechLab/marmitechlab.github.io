# Fase 0 — Registro de Decisões e Preparação

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status da fase:** 🔄 em andamento

---

## 1. Repositório

| Item | Decisão / status |
|---|---|
| Repositório | ✅ [`MarmitechLab/catalogo`](https://github.com/MarmitechLab/catalogo) |
| Visibilidade | ✅ **público** |
| Remote `origin` | ✅ `https://github.com/MarmitechLab/catalogo.git` (branch `main` sincronizada) |

> Observação: o repositório real usa o nome `catalogo` (não `marmitech-catalogo` como proposto no plano). Todas as referências a nome/base/URL devem usar `catalogo`.

**Risco associado ao repositório público:** imagens e nomes de alunos ficam acessíveis a qualquer pessoa. A política do item 3 deve ser aplicada **antes** do cadastro de conteúdo real (Fase 6).

---

## 2. Domínio

**Definição da V1:** `https://marmitechlab.github.io/catalogo`

Isso será refletido no `astro.config.mjs` (Fase 1):

```js
export default defineConfig({
  site: 'https://marmitechlab.github.io',
  base: '/catalogo',
});
```

Domínio próprio fica **fora do escopo da V1** — reavaliar apenas se houver necessidade real.

---

## 3. Política de exposição de dados dos estudantes

❓ **PENDENTE** — decisão a ser tomada com os professores responsáveis.

| Opção | Uso no catálogo |
|---|---|
| Nome completo | Maior reconhecimento, maior exposição |
| Primeiro nome + turma | Equilíbrio entre reconhecimento e privacidade |
| Somente "equipe" | Máxima privacidade, menos pessoal |

**Recomendação:** **primeiro nome + turma** por padrão; nunca publicar telefone, e-mail ou redes sociais. Revisar capas/screenshots antes de publicar (podem conter rostos ou dados).

---

## 4. Ativos de logo (Marmitech e Marmitech Jr.)

❌ **PENDENTE** — exportar a partir dos arquivos-fonte da logo.

**Requisitos:**
- Exportar em **SVG com traço único (`stroke`)**, nunca bitmap/preenchido (consistência com o estilo "circuito")
- Destino no app (criado na Fase 1): `public/assets/logo/`
  - `public/assets/logo/marmitech.svg`
  - `public/assets/logo/marmitech-jr.svg` (mesma logo + acento laranja `#F97316`)
- **Favicon:** recorte apenas do ícone (sem o wordmark), em SVG → `public/favicon.svg`
- Variante Jr.: definir se é a mesma logo + cor, ou arte distinta (recomendação: mesma logo + acento laranja, evitando segunda marca)

---

## 5. Ambiente verificado

| Item | Status |
|---|---|
| Git inicializado | ✅ `main` |
| Remote `origin` | ✅ `https://github.com/MarmitechLab/catalogo.git` |
| Identidade git | ✅ `douglaz` / `fdcsone@hotmail.com` |
| Node.js | ✅ v20.20.2 |
| npm | ✅ 10.8.2 |

---

## Checklist resumido da Fase 0

- [x] Git local inicializado
- [x] `.gitignore` e `README.md` criados
- [x] Registro de decisões criado (este arquivo)
- [x] Repositório criado no GitHub: `MarmitechLab/catalogo` (público)
- [x] `origin` configurado e `main` publicada
- [x] Visibilidade definida (pública)
- [ ] Exportar logo em SVG + favicon (item 4)
- [ ] Definir política de dados dos estudantes (item 3)
