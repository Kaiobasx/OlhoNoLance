package com.example.controller;

import com.example.repository.UsuarioRepository;
import com.example.model.PasswordResetToken;
import com.example.model.Usuario;
import com.example.repository.PasswordResetTokenRepository;
import com.example.service.EmailService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordResetTokenRepository tokenRepository;
    private final EmailService emailService;

    public UsuarioController(
            UsuarioRepository usuarioRepository,
            PasswordResetTokenRepository tokenRepository,
            EmailService emailService
    ) {
        this.usuarioRepository = usuarioRepository;
        this.tokenRepository = tokenRepository;
        this.emailService = emailService;
    }

    @PostMapping("/esqueci-senha")
    public ResponseEntity<?> esqueciSenha(@RequestParam String email) throws IOException {

        Usuario usuario = usuarioRepository.findById(email)
                .orElseThrow(() -> new RuntimeException("Email não encontrado"));

        String token = UUID.randomUUID().toString();

        PasswordResetToken resetToken = new PasswordResetToken();
        resetToken.setToken(token);
        resetToken.setUsuario(usuario);
        resetToken.setExpiresAt(LocalDateTime.now().plusHours(1));

        tokenRepository.save(resetToken);

        String link = "https://seusite.com/resetar-senha?token=" + token;

        emailService.enviarEmail(
                usuario.getEmail(),
                "Recuperação de senha",
                "Clique para redefinir sua senha:<br><br><a href='" + link + "'>Redefinir senha</a>"
        );

        return ResponseEntity.ok("E-mail enviado!");
    }
}

