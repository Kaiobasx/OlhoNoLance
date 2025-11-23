package com.example.controller;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.PasswordResetToken;
import com.example.model.Usuario;
import com.example.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @PostMapping("/esqueci-senha")
    public String esqueciSenha(@RequestParam String email) {
        service.enviarLinkRedefinirSenha(email);
        return "Se o email existir, um link foi enviado.";
    }

    @PostMapping("/redefinir")
    public String redefinirSenha(@RequestParam String token, @RequestParam String novaSenha) {
        boolean ok = service.redefinirSenha(token, novaSenha);

        return ok ? "Senha redefinida com sucesso." : "Token inválido ou expirado.";
    }
} 
 