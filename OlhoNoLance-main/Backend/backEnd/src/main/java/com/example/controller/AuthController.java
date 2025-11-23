package com.example.controller;

import com.example.model.Usuario;
import com.example.model.PasswordResetToken;
import com.example.repository.UsuarioRepository;
import com.example.repository.PasswordResetTokenRepository;
import com.example.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // 1) solicita recuperação -> gera token e envia email
    @PostMapping("/esqueci-senha")
    public String esqueciSenha(@RequestParam String email) {

        Usuario usuario = usuarioRepository.findByEmail(email).orElse(null);

        if (usuario == null) {
            // retorno genérico por segurança
            return "Se o e-mail existir, enviaremos instruções.";
        }

        String token = UUID.randomUUID().toString();

        PasswordResetToken reset = new PasswordResetToken();
        reset.setToken(token);
        reset.setUsuario(usuario);
        reset.setExpiresAt(LocalDateTime.now().plusHours(1));

        tokenRepository.save(reset);

        // Link para testar localmente: abra no navegador ou copie o token
        String link = "http://localhost:8080/auth/resetar-senha?token=" + token;

        emailService.enviarEmail(
                usuario.getEmail(),
                "Recuperação de senha",
                "Clique neste link para redefinir sua senha:\n\n" + link + "\n\nObs: o link expira em 1 hora."
        );

        return "Se o e-mail existir, você receberá o link.";
    }


    // 2) redefinir senha -> recebe token e nova senha
    @PostMapping("/resetar-senha")
    public String resetarSenha(@RequestParam String token,
                               @RequestParam String novaSenha) {

        PasswordResetToken resetToken = tokenRepository.findByToken(token).orElse(null);

        if (resetToken == null) {
            return "Token inválido";
        }

        if (resetToken.getExpiresAt().isBefore(LocalDateTime.now())) {
            return "Token expirado";
        }

        Usuario usuario = resetToken.getUsuario();
        usuario.setSenha(passwordEncoder.encode(novaSenha));
        usuarioRepository.save(usuario);

        tokenRepository.delete(resetToken);

        return "Senha alterada com sucesso!";
    }
}
