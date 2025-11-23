package com.example.sockets;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class LanceController {

    @MessageMapping("/enviarLance")      // cliente envia para /app/enviarLance
    @SendTo("/topic/lances")             // broadcast para todos em /topic/lances
    public LanceEvent enviarLance(LanceMessage message) {
        System.out.println("Novo lance de: " + message.getUsuario() + " - R$" + message.getValor());
        return new LanceEvent(message.getUsuario(), message.getValor());
    }
}