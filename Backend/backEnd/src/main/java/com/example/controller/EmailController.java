package com.example.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.service.EmailService;

@RestController
@RequestMapping("/email")
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/enviar")
    public String enviar(@RequestParam String para) {
        try {
            emailService.enviarEmail(para, "Teste", "Email enviado com sucesso!");
            return "Enviado!";
        } catch (Exception e) {
            return "Erro: " + e.getMessage();
        }
    }
}

