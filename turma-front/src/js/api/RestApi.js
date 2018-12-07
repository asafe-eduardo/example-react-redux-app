import axios from 'axios'
import {API_PATH} from './Constantes'

export class UsuarioApi {

    static buscarUsuarios() {
        return axios.get(`${API_PATH}/usuario`);
    }

    static recuperarUsuario(id) {
        return axios.get(`${API_PATH}/usuario/${id}`);
    }

    static deletarUsuario(id) {
        return axios.delete(`${API_PATH}/usuario/${id}`);
    }

    static salvarUsuario(usuario) {
        return axios.post(`${API_PATH}/usuario`, usuario);
    }

}

export class EnderecoApi {

    static buscarEnderecos() {
        return axios.get(`${API_PATH}/endereco`);
    }

    static recuperarEndereco(id) {
        return axios.get(`${API_PATH}/endereco/${id}`);
    }

    static deletarEndereco(id) {
        return axios.delete(`${API_PATH}/endereco/${id}`);
    }

    static salvarEndereco(endereco) {
        return axios.post(`${API_PATH}/endereco`, endereco);
    }

}

export class CepApi {
    static buscaCep(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    }
}

