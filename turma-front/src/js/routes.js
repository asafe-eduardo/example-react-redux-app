import React from 'react'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, Redirect} from 'react-router'

import App from './App'
import HomePage from './pages/Home/Home'
import UsuariosPage from './pages/usuario/usuario'
import Hello from "./pages/HelloWorldClasse";
import Endereco from './pages/endereco/Endereco';

class Rotas extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router history={this.props.hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path="/usuario" component={UsuariosPage} />
                    <Route path="/hello" component={Hello} />
                    <Route path='/endereco' component={Endereco}/>
                </Route>
            </Router>
            )
    }
}

export default Rotas