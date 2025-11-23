package com.example.controller;

import com.example.service.CepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cep")
public class CepController {

    @Autowired
    private CepService cepService;

    @GetMapping("/{cep}")
    public Object getCep(@PathVariable String cep) {
        return cepService.buscarCep(cep);
    }
}
