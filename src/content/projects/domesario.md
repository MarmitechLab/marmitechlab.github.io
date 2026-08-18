---
title: "Domesario"
shortDescription: "Sistema de controle de eleições digitais com validação de eleitor por QR Code, kiosk de controle da urna e Firestore."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/domesario/cover.svg"
screenshots: []
technologies:
  - "Kotlin"
  - "Jetpack Compose"
  - "Material 3"
  - "Navigation Compose"
  - "Hilt"
  - "Firebase Firestore"
  - "CameraX"
  - "ML Kit"
authors:
  - name: "Douglas"
    team: "Marmitech"
links:
  repository: "https://bitbucket.org/douglazsilva/domesario.git"
featured: true
status: publicado
---

# Domesario

Sistema de **controle de eleições digitais** desenvolvido no Marmitech com **Jetpack Compose, Kotlin e Firebase**, para gerenciar a votação em tempo real.

## Funcionalidades

- **Validação de eleitor** — leitura de QR Code ou digitação do título, consulta ao banco e liberação da urna
- **Controle da urna** — status em tempo real (trancada/destrancada), contagem de votos e conexão ao Firebase
- **Scanner de QR Code** — câmera integrada com ML Kit
- **Configurações** — tema claro/escuro, idioma, notificações e informações do sistema

## Desenvolvimento

Interface em **Jetpack Compose** com Material 3 e o design system **Azure Meridian**, navegação com **Navigation Compose**, injeção de dependência com **Hilt**, QR Code com **CameraX + ML Kit** e backend distribuído no **Firebase Firestore**.

## Arquitetura

```
app/src/main/java/com/marmitech/domesario/
├── data/       # Data classes (Eleitor, Liberacao, Voto) + repositórios Firestore
├── di/         # Módulos Hilt
└── ui/         # Telas Compose (Validation, BallotBox, Settings, QR Scanner) + ViewModels
```

Código-fonte em [Bitbucket](https://bitbucket.org/douglazsilva/domesario.git).