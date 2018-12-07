import { hashHistory } from 'react-router'
import {change} from 'redux-form';

import { API_PATH } from '../../../api/Constantes'
import { ComumApi } from '../../../api/RestApi'

import { MascaraCep, MascaraTelefone } from '../maskaras'
import * as actionsMessages from '../../correios/ACMessages/ACMessagesActions'

const enderecoVazio = {
    endereco: '',
    bairro: '',
    uf:'',
    cidade: '',
    aban8: ''
}

const atualizaCep = (dispatch, endereco, nomeForm) => {
    dispatch(change(nomeForm, 'endereco.endereco', endereco.endereco))
    dispatch(change(nomeForm, 'endereco.bairro', endereco.bairro))
    dispatch(change(nomeForm, 'endereco.uf', endereco.uf))
    dispatch(change(nomeForm, 'endereco.cidade', endereco.cidade))
    dispatch(change(nomeForm, 'endereco.idMunicipio', endereco.aban8))
}

export const getEnderecoByCep = (cep, nomeForm) => {
    return dispatch => {
        ComumApi.getEndereco(cep).then(resp => {
            let endereco = resp.data.dados
            if(endereco)
                atualizaCep(dispatch, endereco, nomeForm)
            else
                atualizaCep(dispatch, {endereco: null, bairro: null, uf: null, cidade: null, aban8: null}, nomeForm)
        }, error => {
            atualizaCep(dispatch, {endereco: null, bairro: null, uf: null, cidade: null, aban8: null}, nomeForm)
            actionsMessages.showErrorMessage(error.response.data.mensagens)
        })
    }
}