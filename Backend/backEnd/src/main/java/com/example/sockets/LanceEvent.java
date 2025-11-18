package com.example.sockets;

public class LanceEvent {

    private String usuario;
    private double valor;
    private long timestamp;

    public LanceEvent(String usuario, double valor) {
        this.usuario = usuario;
        this.valor = valor;
        this.timestamp = System.currentTimeMillis();
    }

    public String getUsuario() {
        return usuario;
    }

    public double getValor() {
        return valor;
    }

    public long getTimestamp() {
        return timestamp;
    }
}