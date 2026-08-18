# Fase 0 — Registro de Decisões e Preparação

> Arquivo de apoio do plano: [`../plano-implementacao-marmitech.md`](../plano-implementacao-marmitech.md)

**Status da fase:** ✅ **concluída** (item opcional do SVG documentado)

---

## 1. Repositório

| Item | Decisão / status |
|---|---|
| Repositório | ✅ [`MarmitechLab/MarmitechLab.github.io`](https://github.com/MarmitechLab/MarmitechLab.github.io) |
| Visibilidade | ✅ **público** |
| Remote `origin` | ✅ `https://github.com/MarmitechLab/MarmitechLab.github.io.git` (branch `main` sincronizada) |

> O repositório foi renomeado de `catalogo` para `MarmitechLab.github.io` para publicar o site na **raiz** (`https://marmitechlab.github.io`). O endereço antigo `/catalogo` não é mais usado.

**Risco associado ao repositório público:** imagens e nomes de alunos ficam acessíveis a qualquer pessoa. A política definida no item 3 será aplicada na curadoria do conteúdo (Fase 6) e revisada na Fase 7.

---

## 2. Domínio

**Definição da V1:** `https://marmitechlab.github.io` (repositório `MarmitechLab.github.io`, site na raiz)

Isso é refletido no `astro.config.mjs` (sem `base`, deploy na raiz):

```js
export default defineConfig({
  site: 'https://marmitechlab.github.io',
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
| `public/assets/logo/marmitech-logo.png` | PNG 512×512 (conversão via `sips`, sem transparência) |
| `public/assets/logo/marmitech_logo.png` | PNG 500×499 **com fundo removido** (RGBA) — usada no site |
| `public/favicon.svg` | Favicon vetorial (recorte do ícone sem wordmark, fundo branco) |
| `public/favicon-16.png` | Favicon 16×16 (recorte do ícone sem wordmark, regenerado da logo transparente) |
| `public/favicon-32.png` | Favicon 32×32 (recorte do ícone sem wordmark, regenerado da logo transparente) |
| `public/apple-touch-icon.png` | Ícone de atalho iOS/Android (180×180, recorte do ícone sobre fundo branco) |

### Limitações do JPEG

- É **raster (bitmap)**: não tem o traço `stroke` vetorial previsto na identidade visual
- ~~Não tinha transparência (fundo branco)~~ ✅ **Resolvido**: adicionada `marmitech_logo.png` com fundo removido, usada no site e nos favicons
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
| Remote `origin` | ✅ `https://github.com/MarmitechLab/MarmitechLab.github.io.git` |
| Identidade git | ✅ `douglaz` / `fdcsone@hotmail.com` |
| Node.js | ✅ v20.20.2 |
| npm | ✅ 10.8.2 |

---

## 6. Definição dos programas (referência correta)

✅ **Alinhado com o contexto real — 2026-08-17.**

### Marmitech — Educação Tecnológica Voluntária

- Público: estudantes dos cursos técnicos de **Desenvolvimento de Sistemas** e **Jogos Digitais** do **Ensino Médio**
- Momento: **horário do intervalo**; participação **voluntária**
- Foco: tecnologia de forma **prática e descontraída** — aplicações e jogos educativos
- Competências: lógica de programação, pensamento computacional, experimentação prática, resolução de problemas
- ⚠️ Separado do **Marmitech Agenda** e do projeto **Nossas Emoções** — não misturar
- ⚠️ O planejamento completo original não foi recuperado — **não inventar** estações, cronograma ou atividades não registradas

### Marmitech Jr.

- Extensão do Marmitech para estudantes do **9º ano do Ensino Fundamental**
- Foco: experimentação, criatividade, jogos, programação, IA e pensamento computacional
- Identidade: mesma logo/marca, com acento laranja `#F97316` para diferenciar os dois eixos sem criar uma segunda marca

### Reflexo no schema (Fase 2)

```ts
program: z.enum(['marmitech', 'marmitech-jr']),
// 'marmitech'    → Ensino Médio Técnico (Desenvolvimento de Sistemas e Jogos Digitais)
// 'marmitech-jr' → 9º ano do Ensino Fundamental
```

---

## Checklist resumido da Fase 0

- [x] Git local inicializado
- [x] `.gitignore` e `README.md` criados
- [x] Registro de decisões criado (este arquivo)
- [x] Repositório criado no GitHub: `MarmitechLab/MarmitechLab.github.io` (público)
- [x] `origin` configurado e `main` publicada
- [x] Visibilidade definida (pública)
- [x] Domínio (site na raiz): `https://marmitechlab.github.io`
- [x] Logo organizada: JPEG + PNG + favicons (SVG documentado como opcional — item 4)
- [x] Política de dados definida: **primeiro nome + turma** (item 3)
