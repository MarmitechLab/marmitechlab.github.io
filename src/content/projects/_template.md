---
# ============================================================
# MODELO DE CADASTRO DE PROJETO — Catálogo Marmitech
#
# COMO USAR:
#   1. Copie este arquivo para:  src/content/projects/meu-projeto.md
#   2. Preencha todos os campos obrigatórios abaixo.
#   3. Rode `npm run build` — ele valida o preenchimento.
#   4. Quando o professor aprovar, mude `status: publicado`.
#
# PRIVACIDADE (política de dados):
#   - `authors[].name` = SOMENTE o primeiro nome.
#   - `team` = turma/grupo. Nunca inclua telefone, e-mail ou redes sociais.
# ============================================================

# Título do projeto
title: "Título do projeto"
# Resumo de 1–2 frases (aparece no card)
shortDescription: "Resumo curto do projeto."
# marmitech (Ensino Médio Técnico) | marmitech-jr (9º ano do Ensino Fundamental)
program: marmitech
# jogo | app | web | ia | outro
category: jogo
# Ano de criação (número)
year: 2026
# Turma
class: "2º ano — Desenvolvimento de Sistemas"
# Caminho da capa em public/projects/<slug>/ (ex.: /projects/meu-projeto/cover.png)
cover: "/projects/_template/cover.svg"
# Lista de screenshots (opcional)
screenshots: []
# Lista de tecnologias
technologies: ["Tecnologia 1", "Tecnologia 2"]
# Uso de IA (opcional; se usado, preencha ferramentas e usos)
ai:
  used: false
  tools: []
  uses: []
# Autores: primeiro nome + turma
authors:
  - name: "PrimeiroNome"
    team: "Turma"
# Professor responsável (opcional)
teacher: "Prof. Nome"
# Links (opcional)
links:
  demo: "https://example.com"
  repository: "https://github.com/example"
# O que o time aprendeu (opcional)
learning: "O que o time aprendeu com o projeto."
# Exibir na home? (opcional)
featured: false
# Fluxo editorial: rascunho | em-revisao | aprovado | publicado
status: rascunho
---

# Título do projeto

Escreva aqui a **descrição completa** do projeto: como surgiu, como foi feito,
os destaques e o que o time aprendeu. Este texto aparece na página do projeto.