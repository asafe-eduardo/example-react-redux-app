import {CepApi, EnderecoApi} from "../../api/RestApi";

export const atualizarEndereco = () => dispatch => {
    dispatch({ type: 'ATUALIZAR_ENDERECO'});
}

export const getAddressByCep = cep => dispatch => {
    CepApi.buscarEnderecos(cep).then(response => {
        dispatch({type: 'GET_ADDRESS', payload: response.data.dados});
    });
}