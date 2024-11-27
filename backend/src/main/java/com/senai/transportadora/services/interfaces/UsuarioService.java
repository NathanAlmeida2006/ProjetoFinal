package com.senai.transportadora.services.interfaces;

import com.senai.transportadora.dtos.usuario.*;

import java.util.List;

public interface UsuarioService {
    UsuarioDTO criarUsuario(UsuarioFormDTO form);

    List<UsuarioDTO> listarUsuarios();

    UsuarioDetailsDTO buscarUsuarioPorId(Long id);

    UsuarioDTO atualizarUsuario(Long id, UpdateUsuarioFormDTO form);

    void deletarUsuario(Long id);

}
