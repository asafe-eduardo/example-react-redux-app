const INITIAL_STATE = {
    nome: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALTERAR_NOME':
            return {...state, nome: action.payload};
            break;
        default:
            return {...state};
    }
}