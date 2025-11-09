
package com.example.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Produto;
import com.example.repository.ProdutoRepository;


@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {
    private final ProdutoRepository repo;
    public ProdutoController(ProdutoRepository repo) { this.repo = repo; }

  
    @GetMapping
    public List<Produto> listar() { return repo.findAll(); }

    @PostMapping
    public Produto criar(@RequestBody Produto produto) { return repo.save(produto); }
}
