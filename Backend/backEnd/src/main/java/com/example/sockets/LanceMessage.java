package com.example.sockets;

public class LanceMessage {

    private String usuario;
    private double valor;

    public LanceMessage() {}

    public LanceMessage(String usuario, double valor) {
        this.usuario = usuario;
        this.valor = valor;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
}
