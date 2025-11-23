package com.example.model;



import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Leilao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @OneToMany(mappedBy = "leilao", cascade = CascadeType.ALL)
    private List<Lance> lances = new ArrayList<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public List<Lance> getLances() { return lances; }
    public void setLances(List<Lance> lances) { this.lances = lances; }
}
