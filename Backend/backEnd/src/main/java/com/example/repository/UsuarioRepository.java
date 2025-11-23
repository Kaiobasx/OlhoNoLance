
package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Usuario;

public interface UsuarioRepository extends JpaRepository< Usuario, Long> {

    Optional<Usuario> findById(String email);

}
