---
title: "Urna Eletrônica"
shortDescription: "Aplicativo Android que simula a urna eletrônica brasileira, com interface fiel ao modelo real do TSE."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/urna-eletronica/cover.png"
screenshots: []
technologies:
  - "Java"
  - "Android XML"
  - "Firebase Firestore"
  - "Firebase Analytics"
  - "Glide"
authors:
  - name: "Douglas"
    team: "Marmitech"
links:
  repository: "https://bitbucket.org/douglazsilva/urnaeletronica.git"
featured: true
status: publicado
---

# Urna Eletrônica

Aplicativo **Android** que simula a **urna eletrônica brasileira** com interface fiel ao modelo real do TSE, desenvolvido no Marmitech para simular um pleito completo.

## Funcionalidades

- **Votação multi-cargo** — Deputado Federal (4 dígitos), Deputado Estadual (5), Senador (3), Governador (2) e Presidente (2)
- **Teclado numérico interativo** com efeitos visuais de pressionamento
- **Busca de candidatos em tempo real** via Firestore
- **Voto em branco, nulo e de legenda** (partido), com confirmação visual
- **Corrige** para apagar números digitados
- **Efeitos sonoros** para teclas, confirmação, erro e correção
- **Tela de gravação** com barra de progresso animada
- **Liberação remota** via Firestore — cada urna só vota quando liberada
- **Transação atômica** no Firestore: voto registrado e liberação consumida na mesma operação

## Como funciona

1. A urna (identificada por `ANDROID_ID`) aguarda liberação escutando o Firestore
2. Quando liberada, inicia a votação na ordem: Dep. Federal → Dep. Estadual → Senador → Governador → Presidente
3. O eleitor digita o número; o candidato é buscado no Firestore
4. O voto é salvo via transação — no último cargo, a liberação é consumida

## Desenvolvimento

App em **Java** (layout XML, compileSdk 36, minSdk 24), com **Firebase Firestore** como backend, **Firebase Analytics** para métricas, **Glide** para as fotos dos candidatos e **ToneGenerator** para os sons.

Código-fonte em [Bitbucket](https://bitbucket.org/douglazsilva/urnaeletronica.git).