import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import HelloWorldReducer from './pages/HelloWorldReducer'

// import enderecoReducer from './pages/endereco/enderecoReducer'

const correiosReducers = combineReducers({
    form: formReducer,
    // enderecoReducer,
    HelloWorldReducer
});

export default correiosReducers