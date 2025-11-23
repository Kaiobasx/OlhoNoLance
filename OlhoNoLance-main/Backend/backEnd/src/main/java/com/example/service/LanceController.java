package com.example.service;


import com.example.model.Lance;
import com.example.service.LanceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lances")
public class LanceController {

    private final LanceService service;

    public LanceController(LanceService service) {
        this.service = service;
    }

    @PostMapping("/{leilaoId}")
    public Lance novoLance(
            @PathVariable Long leilaoId,
            @RequestParam double valor,
            @RequestParam String usuario
    ) {
        return service.enviarLance(leilaoId, valor, usuario);
    }
}
