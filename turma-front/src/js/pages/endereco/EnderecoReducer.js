const INITIAL_VALUES = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf:'',
}

export default (state = INITIAL_VALUES, action) => {
    switch(action.type) {
        case 'GET_ADDRESS':
            return {...state, endereco: action.payload};
            break;
        default:
            return state;
    }
}