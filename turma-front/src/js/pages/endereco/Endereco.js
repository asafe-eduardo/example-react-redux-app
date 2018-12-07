import React from 'react';
import { connect } from 'react-redux';
import {InputText} from "../../components/Input/Input";
import { atualizarEndereco} from "./EnderecoActions";

class Endereco extends React.Component {

    constructor(props, context){
        super(props, context)

        this.state = {
            endereco: {}
        }
    }

    componentDidMount(){
        this.props.atualizarEndereco();
    }

    handleSubmit(event){
        console.log(event)
        event.preventDefault();
    }

    onChange(e, campo){
        this.setState({endereco:{...this.state.endereco, [campo]: e.target.value}});
    }

    render(){
        return (
            <div>
                <h1>Cadastro de Endereçoes</h1>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <InputText id='cep' onChange={e => this.onChange(e, 'cep')}/>

                    <InputText id='logradouro' onChange={e => this.onChange(e, 'logradouro')}/>

                    <InputText id='complemento' onChange={e => this.onChange(e, 'complemento')}/>

                    <InputText id='bairro' onChange={e => this.onChange(e, 'bairro')}/>

                    <InputText id='cidade' onChange={e => this.onChange(e, 'cidade')}/>

                    <InputText id='uf' onChange={e => this.onChange(e, 'uf')}/>

                    <button type='submit' className="btn-primary">Salvar</button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    atualizarEndereco(){
        dispatch(atualizarEndereco());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Endereco);