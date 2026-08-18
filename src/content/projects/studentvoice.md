---
title: "StudentVoice"
shortDescription: "Aplicativo Android para coleta de feedback acadêmico em tempo real, desenvolvido com Jetpack Compose e Firebase."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/studentvoice/cover.svg"
screenshots: []
technologies:
  - "Kotlin"
  - "Jetpack Compose"
  - "Material 3"
  - "Firebase Firestore"
  - "Firebase Authentication"
  - "Hilt"
  - "Navigation Compose"
  - "DataStore"
authors:
  - name: "Douglaz"
links:
  repository: "https://bitbucket.org/douglazsilva/studentvoice.git"
featured: true
status: publicado
---

# StudentVoice

Aplicativo **Android** desenvolvido no Marmitech para coletar **feedback acadêmico em tempo real** — os estudantes avaliam a aula na hora, e professores têm uma visão geral instantânea.

## Funcionalidades

- **Autenticação** — login e cadastro de usuários com Firebase Auth (e-mail/senha e Google)
- **Seleção de Disciplina** — grade de disciplinas para iniciar a coleta de feedback
- **Modo Kiosk/Totem** — tela simplificada com feedback rápido por emojis (😀 😐 😞)
- **Dashboard administrativo** — estatísticas e métricas por disciplina, em tempo real
- **Histórico** — acompanhamento dos feedbacks coletados
- **Perfil e Configurações** — personalização (via DataStore)

## Desenvolvimento

- Interface em **Jetpack Compose** com Material 3
- Persistência distribuída com **Firebase Firestore** (regras de segurança e índices compostos)
- Injeção de dependência com **Hilt**
- Dados isolados por usuário (cada um enxerga só os seus feedbacks e disciplinas)

## Código-fonte

Repositório em [Bitbucket](https://bitbucket.org/douglazsilva/studentvoice.git).