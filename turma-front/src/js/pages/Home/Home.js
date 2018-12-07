import React from 'react'

import { Link } from 'react-router';

class Home extends React.Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                
                <ul>
                    <li>
                        <Link to="/usuario">Cadastro de Usuários</Link>
                    </li>
                    <li>
                        <Link to="/endereco">Cadastro de Endereços</Link>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Home