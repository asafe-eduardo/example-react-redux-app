import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux'

class Hello extends React.Component {

    componentDidMount(){
        this.props.alterarNome('Eduardo');
    }

    constructor(props) {
        super(props)

        this.state = {nome: 'World'}
    }

    render() {
        return (
            <h1>Hello {this.state.nome}</h1>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        nome: state.HelloWorldReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        alterarNome: (valor) => (dispatch({type: 'ALTERAR_NOME', payload: valor})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);