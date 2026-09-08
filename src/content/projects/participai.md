---
title: "Participai"
shortDescription: "Plataforma de enquetes em tempo real — painel web em Angular para criadores e app Android para participantes, sobre o mesmo Firebase."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/participai/cover.png"
screenshots:
  - "/projects/participai/mobile-espera.png"
  - "/projects/participai/mobile-resultados.png"
  - "/projects/participai/mobile-perfil.png"
  - "/projects/participai/web-dashboard.png"
  - "/projects/participai/web-live.png"
  - "/projects/participai/web-resultados.png"
technologies:
  - "Kotlin"
  - "Jetpack Compose"
  - "Angular 17"
  - "TypeScript"
  - "Tailwind CSS"
  - "Firebase Firestore"
  - "Angular Fire"
  - "Coil"
authors:
  - name: "Douglaz"
    team: "Marmitech"
links:
  repository: "https://bitbucket.org/douglazsilva/participai.git"
featured: true
status: publicado
---

# Participai

Plataforma completa para **criação, gerenciamento e participação em enquetes em tempo real**, com dois sub-projetos sobre o mesmo backend **Firebase Firestore**: painel web para criadores e app Android para participantes.

## Sub-projetos

### Painel web (Angular 17)

Para **criadores de enquetes**: dashboard de gerenciamento, criação com múltiplas opções, temporizador e configurações avançadas, sala de controle ao vivo (publicar/encerrar) e resultados com gráficos em tempo real. Stack: **Angular 17, Angular Fire, Tailwind CSS, TypeScript**.

### App mobile (Kotlin + Jetpack Compose)

Para **participantes**: ingresso em enquetes ativas, votação, histórico de votações com streaks e perfil com nome e bio. Stack: **Kotlin, Jetpack Compose, Firebase Firestore, Coil, MVVM**.

## Desenvolvimento

As duas plataformas compartilham o mesmo projeto Firebase — o criador publica a enquete no painel web e os participantes votam em tempo real pelo app.

## Código-fonte

Repositório em [Bitbucket](https://bitbucket.org/douglazsilva/participai.git).
