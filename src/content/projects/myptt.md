---
title: "MyPTT"
shortDescription: "Sistema de comunicação estilo walkie-talkie — app Android com Push-to-Talk e servidor WebSocket com canais em tempo real."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/myptt/cover.png"
screenshots:
  - "/projects/myptt/channels.png"
  - "/projects/myptt/transmission-logs.png"
technologies:
  - "Kotlin"
  - "Jetpack Compose"
  - "Material 3"
  - "Hilt"
  - "Coroutines"
  - "StateFlow"
  - "Ktor"
  - "DataStore"
  - "Java 21"
  - "Spring Boot"
  - "Spring WebSocket"
  - "Lombok"
authors:
  - name: "Douglaz"
    team: "Marmitech"
links:
  repository: "https://bitbucket.org/douglazsilva/myptt.git"
featured: true
status: publicado
---

# MyPTT

Sistema de comunicação em tempo real no estilo **walkie-talkie**: um aplicativo Android combinado a um servidor WebSocket para que pessoas no mesmo canal transmitam áudio no modelo **Push-to-Talk (PTT)**.

## Funcionalidades

- **Transmissão de áudio em tempo real** via Push-to-Talk (botão TALK)
- **Canais de comunicação** — Geral, Command, Operations e Emergency
- **Lista de participantes** conectados ao canal
- **Indicador de usuário em transmissão**
- **Reconexão automática** e heartbeat WebSocket
- **Serviço em primeiro plano** para uso do microfone
- **Registro local** e reprodução das transmissões recebidas e enviadas
- **Processamento de áudio** — cancelamento de eco, supressão de ruído e ganho automático (quando disponíveis no dispositivo)

## Desenvolvimento

App em **Kotlin + Jetpack Compose** (MVVM, Hilt, Coroutines/StateFlow, Ktor WebSocket, DataStore) com `AudioRecord`/`AudioTrack` para captura e reprodução. Servidor em **Java 21 + Spring Boot com WebSocket**: mensagens de controle em JSON e frames de áudio binários redistribuídos só aos membros do mesmo canal. Conexões e presença mantidas em memória (MVP, sem autenticação nem banco).

## Código-fonte

Repositório em [Bitbucket](https://bitbucket.org/douglazsilva/myptt.git).
