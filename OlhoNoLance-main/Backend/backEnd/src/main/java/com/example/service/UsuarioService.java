package com.example.service;

import com.example.model.Usuario;
import com.example.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class UsuarioService {

    private final UsuarioRepository repo;
    private final EmailService emailService;

    public UsuarioService(UsuarioRepository repo, EmailService emailService) {
        this.repo = repo;
        this.emailService = emailService;
    }

    public void enviarLinkRedefinirSenha(String email) {
        Optional<Usuario> opt = repo.findByEmail(email);

        if (opt.isEmpty()) return;

        Usuario user = opt.get();

        String token = UUID.randomUUID().toString();
        user.setResetToken(token);
        user.setResetTokenExpira(LocalDateTime.now().plusMinutes(30));

        repo.save(user);

        String link = "http://localhost:8080/usuarios/redefinir?token=" + token;

        emailService.enviarEmail(
                user.getEmail(),
                "Recuperação de senha",
                "Clique para redefinir sua senha: " + link
        );
    }

    public boolean redefinirSenha(String token, String novaSenha) {
        Optional<Usuario> opt = repo.findByResetToken(token);

        if (opt.isEmpty()) return false;

        Usuario user = opt.get();

        if (user.getResetTokenExpira().isBefore(LocalDateTime.now()))
            return false;

        user.setSenha(novaSenha);
        user.setResetToken(null);
        user.setResetTokenExpira(null);

        repo.save(user);

        return true;
    }
}
