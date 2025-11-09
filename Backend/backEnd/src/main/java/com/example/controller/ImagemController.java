package com.example.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.model.Imagem;
import com.example.repository.ImagemRepository;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/imagens")
@CrossOrigin(origins = "*")
public class ImagemController {

    private final ImagemRepository repo;

    public ImagemController(ImagemRepository repo) {
        this.repo = repo;
    }

    // Upload de imagem
    @PostMapping
    public ResponseEntity<Imagem> upload(@RequestParam("arquivo") MultipartFile arquivo) throws IOException {
        Imagem imagem = new Imagem();
        imagem.setNomeArquivo(arquivo.getOriginalFilename());
        imagem.setTipo(arquivo.getContentType());
        imagem.setDados(arquivo.getBytes());

        Imagem saved = repo.save(imagem);
        return ResponseEntity.ok(saved);
    }

    // Download de imagem por ID
    @GetMapping("/{id}")
    public ResponseEntity<byte[]> baixar(@PathVariable Long id) {
        Imagem imagem = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Imagem não encontrada com o ID: " + id));

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(imagem.getTipo()))
                .body(imagem.getDados());
    }

    // Listar todas as imagens
    @GetMapping
    public List<Imagem> listar() {
        return repo.findAll();
    }
}
