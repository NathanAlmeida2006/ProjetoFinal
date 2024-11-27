package com.senai.transportadora.dtos.caminhao;

import com.senai.transportadora.models.Caminhao;

public record CaminhaoDetailsDTO(Long id, String placa, String modelo, String cor, String fabricante,
                                 String numeroChassis, Double capacidadeCarga) {
    public CaminhaoDetailsDTO(Caminhao caminhao) {
        this(caminhao.getId(), caminhao.getPlaca(), caminhao.getModelo(), caminhao.getCor(), caminhao.getFabricante(), caminhao.getNumeroChassis(), caminhao.getCapacidadeCarga());
    }
}
