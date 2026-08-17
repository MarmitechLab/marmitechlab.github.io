---
title: "Horta Inteligente"
shortDescription: "Sistema que monitora a umidade do solo e sugere a rega ideal usando sensores e um modelo simples de IA."
program: marmitech
category: ia
year: 2025
class: "3º ano — Jogos Digitais"
cover: "/projects/horta-inteligente/cover.svg"
screenshots: []
technologies: ["Arduino", "Python", "Node.js"]
ai:
  used: true
  tools: ["Scikit-learn"]
  uses: ["previsão de necessidade de rega a partir de leituras de sensores"]
authors:
  - name: "Marina"
    team: "3º JD"
teacher: "Profa. Elisa"
links:
  demo: "https://example.com/horta-inteligente"
learning: "Ligar sensores a uma API e pensar em decisões guiadas por dados."
featured: false
status: publicado
---

# Horta Inteligente

Projeto do **Marmitech** que une eletrônica e dados: sensores de umidade no solo alimentam um pequeno modelo de IA que sugere quando regar, evitando desperdício de água.

## Como funciona

1. O Arduino lê a umidade do solo a cada 10 minutos.
2. Os dados vão para um serviço em Python que treina a previsão.
3. Um painel em Node.js exibe as sugestões de rega.