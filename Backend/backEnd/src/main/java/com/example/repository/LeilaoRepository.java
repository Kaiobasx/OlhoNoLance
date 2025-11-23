package com.example.repository;

import com.example.model.Leilao;
import java.util.Optional; // Não se esqueça de importar Optional

public class LeilaoRepository {

    // Altere o tipo de retorno de 'Object' para 'Optional<Leilao>'
    public Optional<Leilao> findById(Long leilaoId) {
        return Optional.empty(); 
        
    }
    
}