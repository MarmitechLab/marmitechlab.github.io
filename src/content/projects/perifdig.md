---
title: "PerifDig"
shortDescription: "Controle remoto do computador pelo celular — touchpad, teclado e comandos via Wi-Fi ou Bluetooth, com servidor desktop em Kotlin."
program: marmitech
category: app
year: 2026
class: "Marmitech"
cover: "/projects/perifdig/cover.png"
screenshots:
  - "/projects/perifdig/conexao.png"
  - "/projects/perifdig/teclado.png"
  - "/projects/perifdig/controles.png"
  - "/projects/perifdig/configuracoes.png"
technologies:
  - "Kotlin"
  - "Jetpack Compose"
  - "Material 3"
  - "Navigation Compose"
  - "OkHttp"
  - "kotlinx.serialization"
  - "DataStore"
  - "Ktor"
  - "jmDNS"
  - "jSerialComm"
authors:
  - name: "Douglaz"
    team: "Marmitech"
links:
  repository: "https://bitbucket.org/douglazsilva/perifdig.git"
featured: true
status: publicado
---

# PerifDig

Controle remoto do computador diretamente pelo celular — **touchpad virtual, teclado e comandos via Wi-Fi ou Bluetooth**. O projeto tem dois módulos: **app Android** (cliente) e **servidor desktop JVM** que executa os comandos como eventos reais de mouse/teclado via Java AWT Robot.

## Funcionalidades

- **Touchpad remoto** — arraste para mover o cursor, dois dedos para rolar, toque para clicar
- **Teclado remoto** — layout QWERTY completo com modificadores (CTRL, ALT, SHIFT, WIN)
- **Controles direcionais** — D-pad para media centers e smart TVs
- **Conexão por Wi-Fi** — descoberta automática via mDNS ou IP manual
- **Conexão por Bluetooth** — RFCOMM SPP com pareamento automático
- **Controles de volume** — volume up/down/mute integrados
- **Configurações** — sensibilidade do mouse, velocidade de rolagem, haptic feedback, atalhos personalizados

## Desenvolvimento

App em **Kotlin + Jetpack Compose** (Material 3, Navigation Compose), comunicação **WebSocket via OkHttp** com protocolo JSON (`MouseMove`, `MouseClick`, `KeyPress`...), persistência com **DataStore**. Servidor desktop em **Kotlin JVM 17 + Ktor (Netty)**, descoberta com **jmDNS** (`_perifdig._tcp.` na porta 8765) e Bluetooth serial com **jSerialComm**.

## Código-fonte

Repositório em [Bitbucket](https://bitbucket.org/douglazsilva/perifdig.git).
