---
title: "RecebaAi"
shortDescription: "Aplicativo Android para gestão de clientes e dívidas, com cobrança via WhatsApp, chave PIX e alertas de vencimento."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/recebaai/cover.png"
screenshots:
  - "/projects/recebaai/clientes.png"
  - "/projects/recebaai/dividas.png"
  - "/projects/recebaai/detalhes.png"
  - "/projects/recebaai/alertas.png"
technologies:
  - "Kotlin"
  - "Jetpack Compose"
  - "Material 3"
  - "Room"
  - "DataStore"
  - "AlarmManager"
  - "WorkManager"
authors:
  - name: "Douglaz"
    team: "Marmitech"
links:
  repository: "https://bitbucket.org/douglazsilva/recebaai.git"
featured: true
status: publicado
---

# RecebaAi

Aplicativo **Android** para **gestão de clientes e dívidas**, com cobrança via WhatsApp e alertas de vencimento, desenvolvido com Jetpack Compose.

## Funcionalidades

- **Dashboard** — visão geral do saldo, dívidas pendentes, pagas e vencidas
- **Cadastro de clientes** — nome, telefone e WhatsApp
- **Dívidas por cliente** — valores, datas e recorrência
- **Detalhes da dívida** — status, pagamentos e histórico
- **Alertas e notificações** — lembretes de vencimento com horário configurável
- **Config PIX** — chave PIX para cobrança
- **Temas** — claro, escuro ou acompanhar o sistema
- **Envio via WhatsApp** — mensagens de cobrança pelo WhatsApp

## Desenvolvimento

Interface em **Jetpack Compose** com Material 3 e fonte Inter, persistência local com **Room (SQLite)**, configurações com **DataStore** e lembretes de vencimento com **AlarmManager**.

## Código-fonte

Repositório em [Bitbucket](https://bitbucket.org/douglazsilva/recebaai.git).
