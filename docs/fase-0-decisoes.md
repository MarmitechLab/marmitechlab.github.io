# Fase 0 — Registro de Decisões e Preparação

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status da fase:** ✅ **concluída** (item opcional do SVG documentado)

---

## 1. Repositório

| Item | Decisão / status |
|---|---|
| Repositório | ✅ [`MarmitechLab/catalogo`](https://github.com/MarmitechLab/catalogo) |
| Visibilidade | ✅ **público** |
| Remote `origin` | ✅ `https://github.com/MarmitechLab/catalogo.git` (branch `main` sincronizada) |

> Observação: o repositório real usa o nome `catalogo` (não `marmitech-catalogo` como proposto no plano). Todas as referências a nome/base/URL devem usar `catalogo`.

**Risco associado ao repositório público:** imagens e nomes de alunos ficam acessíveis a qualquer pessoa. A política definida no item 3 será aplicada na curadoria do conteúdo (Fase 6) e revisada na Fase 7.

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

✅ **DECIDIDA — primeiro nome + turma** (2026-08-17).

### Regra oficial

- Autores/equipe aparecem como **primeiro nome + turma** (ex.: `João · 2º B`)
- **Nunca** publicar: sobrenome completo, telefone, e-mail, redes sociais ou qualquer dado de contato
- Capas e screenshots devem ser **revisados antes de publicar** — não podem conter rostos, nomes visíveis em telas ou dados pessoais
- Crédito completo (nome + sobrenome) só com autorização explícita do estudante/equipe, via professor responsável

### Reflexo no schema de conteúdo (Fase 2)

```ts
authors: z.array(z.object({
  name: z.string(),                // primeiro nome apenas (regra editorial)
  team: z.string().optional(),     // turma ou nome do grupo
})),
```

> O schema valida estrutura; a regra de curadoria (o que é cadastrado) é a definida acima e será reavaliada na **Fase 7** antes do lançamento.

---

## 4. Ativos de logo (Marmitech e Marmitech Jr.)

✅ **JPEG organizado no repositório** — fonte: `~/Documents/marmitech-logo.jpg` (1024×1024, quadrada).

### Ativos gerados

| Arquivo | Uso |
|---|---|
| `public/assets/logo/marmitech-logo.jpg` | Original em JPEG (1024×1024) |
| `public/assets/logo/marmitech-logo.png` | PNG 512×512 (conversão via `sips`) |
| `public/favicon-16.png` | Favicon 16×16 |
| `public/favicon-32.png` | Favicon 32×32 |
| `public/apple-touch-icon.png` | Ícone de atalho iOS/Android (180×180) |

### Limitações do JPEG

- É **raster (bitmap)**: não tem o traço `stroke` vetorial previsto na identidade visual
- Não tem transparência (fundo provavelmente branco) — o favicon pode precisar de fundo transparente depois
- Se a logo tiver fundo branco, considerar recorte/cropping no futuro

### SVG — pendente (3 opções, em ordem de preferência)

1. **Recriar o SVG manualmente** a partir da logo — resultado ideal (traço único, controle total), mas exige alguém com a arte aberta no editor vetorial
2. **Trace automático** — `brew install potrace` e depois:
   ```bash
   potrace public/assets/logo/marmitech-logo.png -s -o public/assets/logo/marmitech.svg
   ```
   (bom para arte de linha simples; resultado varia conforme o desenho)
3. **Manter raster na V1** e converter para SVG depois, se necessário

**Variante Marmitech Jr.:** mesma logo + acento laranja `#F97316` — pode ser aplicada via filtro CSS (`hue-rotate`/`sepia`+`saturate`) ou recriando o SVG com a cor trocada. Sem necessidade de nova arte.

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
- [x] Domínio definido: `https://marmitechlab.github.io/catalogo`
- [x] Logo organizada: JPEG + PNG + favicons (SVG documentado como opcional — item 4)
- [x] Política de dados definida: **primeiro nome + turma** (item 3)
