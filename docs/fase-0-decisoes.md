# Fase 0 — Registro de Decisões e Preparação

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status da fase:** 🔄 em andamento

---

## 1. Repositório

| Item | Decisão / status |
|---|---|
| Nome proposto | `marmitech-catalogo` |
| Criar no GitHub | ❌ pendente — `gh` CLI não instalado; criar manualmente em github.com ou instalar `gh` (`brew install gh`) |
| Visibilidade | ❓ **PENDENTE** |

**Recomendação (visibilidade):** começar como **privado** durante o desenvolvimento e só tornar **público** após a política de exposição de dados dos estudantes (item 3) ser definida e revisada com os professores. Repositórios públicos expõem imagens e nomes de alunos a qualquer pessoa.

**Comando para quando o `gh` estiver disponível:**
```bash
gh repo create marmitech-catalogo --private --source . --remote origin --push
```
(substitua `--private` por `--public` quando a decisão do item 3 for fechada)

---

## 2. Domínio

**Definição da V1:** `https://<usuario>.github.io/marmitech-catalogo`

Isso será refletido no `astro.config.mjs` (Fase 1):

```js
export default defineConfig({
  site: 'https://douglaz.github.io',
  base: '/marmitech-catalogo',
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
| Git inicializado | ✅ `main` (neste commit) |
| Identidade git | ✅ `douglaz` / `fdcsone@hotmail.com` |
| Node.js | ✅ v20.20.2 |
| npm | ✅ 10.8.2 |
| GitHub CLI (`gh`) | ❌ não instalado (documentado acima) |

---

## Checklist resumido da Fase 0

- [x] Git local inicializado
- [x] `.gitignore` e `README.md` criados
- [x] Registro de decisões criado (este arquivo)
- [ ] Decidir visibilidade do repositório (item 1)
- [ ] Criar repositório no GitHub: `marmitech-catalogo`
- [ ] Exportar logo em SVG + favicon (item 4)
- [ ] Definir política de dados dos estudantes (item 3)
