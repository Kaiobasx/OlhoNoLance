package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.Imagem;

public interface ImagemRepository extends JpaRepository<Imagem, Long> {
    
}
