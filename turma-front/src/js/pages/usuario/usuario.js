import React from 'react'
import {UsuarioApi} from "../../api/RestApi";
import {InputText, InputRadio} from "../../components/Input/Input";
import {Table} from "../../components/Table/Table";

class Usuario extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {usuario: {nome: '', ultimoNome: '', email: '', sexo: ''}};
    }

    componentWillMount() {
        UsuarioApi.buscarUsuarios().then(response => {
            this.setState({items: response.data.dados});
        });
    }

    save(){
        UsuarioApi.salvarUsuario(this.state.usuario);
    }

    delete(id){
        UsuarioApi.deletarUsuario(id);
    }

    handleSubmit(event){
        this.save();
        //event.preventDefault()

    }

    onChange(event, campo){
        this.setState({usuario: {...this.state.usuario, [campo]: event.target.value}});
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div id="corpo">
                    <h1>Cadastro de Usuários</h1>

                    <InputText id='nome' onChange={e => this.onChange(e, 'nome')}/>

                    <InputText id='ultimoNome' onChange={e => this.onChange(e, 'ultimoNome')}/>

                    <InputText id='email' onChange={e => this.onChange(e, 'email')}/>

                    <InputRadio onChange={e => this.onChange(e, 'sexo')}/>

                    <button type="submit" className="btn btn-primary btn-block">Salvar</button>

                    <Table actionDelete={this.delete} corpo={this.state.items ? this.state.items : []}/>
                </div>

            </form>
        )
    }
}

export default Usuario