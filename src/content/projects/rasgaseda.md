---
title: "RasgaSeda"
shortDescription: "Aplicativo Android social e gamificado para envio e recebimento de elogios — feed em tempo real, ranking, medalhas e moderação por IA."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/rasgaseda/cover.png"
screenshots:
  - "/projects/rasgaseda/00_login.png"
  - "/projects/rasgaseda/01_login.png"
  - "/projects/rasgaseda/02_search.png"
  - "/projects/rasgaseda/03_send.png"
technologies:
  - "Kotlin"
  - "Jetpack Compose"
  - "Material 3"
  - "Navigation Compose"
  - "Firebase Firestore"
  - "Firebase Authentication"
  - "Firebase Analytics"
  - "Retrofit"
  - "OkHttp"
  - "Gson"
  - "Coil"
  - "OpenRouter"
ai:
  used: true
  tools: ["OpenRouter"]
  uses: ["moderação automática de mensagens para manter o ambiente positivo"]
authors:
  - name: "Douglaz"
    team: "Marmitech"
links:
  repository: "https://bitbucket.org/douglazsilva/rasgaseda.git"
featured: true
status: publicado
---

# RasgaSeda

Aplicativo **Android** desenvolvido no Marmitech para promover positividade e reconhecimento por meio do envio e recebimento de elogios (*compliments*) — experiência gamificada e social para comunidades escolares ou corporativas.

## Funcionalidades

- **Feed Social** — elogios recentes da comunidade em tempo real
- **Envio de Elogios** — busca de usuários e mensagens positivas personalizadas e categorizadas
- **Perfil & Gamificação** — estatísticas de elogios enviados/recebidos, ranking global e medalhas (*badges*)
- **Autenticação Segura** — login, criação de conta e onboarding com Firebase Auth
- **Multiperfil** — papéis como Estudante, Professor e Funcionário
- **Moderação de Mensagens** — análise automática de conteúdo via OpenRouter API
- **Notificações em Tempo Real** — serviço em primeiro plano para receber elogios instantaneamente

## Desenvolvimento

Interface em **Jetpack Compose** com Material 3, arquitetura **MVVM**, backend no **Firebase** (Cloud Firestore em tempo real, Authentication e Analytics), rede com **Retrofit + OkHttp + Gson**, navegação com **Navigation Compose**, imagens com **Coil** e moderação de conteúdo com **OpenRouter API**.

## Código-fonte

Repositório em [Bitbucket](https://bitbucket.org/douglazsilva/rasgaseda.git).
