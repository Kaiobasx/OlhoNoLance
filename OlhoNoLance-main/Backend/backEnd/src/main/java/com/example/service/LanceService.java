package com.example.service;



import com.example.model.Lance;
import com.example.model.Leilao;    
import com.example.repository.LanceRepository;
import com.example.repository.LeilaoRepository;

import org.springframework.stereotype.Service;

@Service
public class LanceService {

    private final LanceRepository lanceRepository;
    private final LeilaoRepository leilaoRepository;

    public LanceService(LanceRepository lanceRepository, LeilaoRepository leilaoRepository) {
        this.lanceRepository = lanceRepository;
        this.leilaoRepository = leilaoRepository;
    }

    public Lance enviarLance(Long leilaoId, double valor, String usuario) {

        Leilao leilao = leilaoRepository.findById(leilaoId)
                .orElseThrow(() -> new RuntimeException("Leilão não encontrado"));

        Lance lance = new Lance();
        lance.setValor(valor);
        lance.setUsuario(usuario);
        lance.setLeilao(leilao);

        return lanceRepository.save(lance);
    }
}

