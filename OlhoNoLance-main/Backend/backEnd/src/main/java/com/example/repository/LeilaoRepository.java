package com.example.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Leilao;

public interface LeilaoRepository extends JpaRepository<Leilao, Long> {
}

