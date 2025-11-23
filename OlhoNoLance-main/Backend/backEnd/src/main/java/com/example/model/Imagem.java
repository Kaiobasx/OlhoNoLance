
package com.example.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Imagem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeArquivo;
    private String tipo;
    @Lob
    private byte[] dados;

}

