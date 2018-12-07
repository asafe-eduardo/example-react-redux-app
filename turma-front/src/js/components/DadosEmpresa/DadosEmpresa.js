import React from 'react'
import { Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { renderInputField, renderErrorMessage } from '../forms'
import { maxlength, cepInvalido, emailInvalido, obrigatorio, telefoneInvalido } from '../validadores'
import { MascaraTelefone, MascaraCep, MascaraCnpj } from '../maskaras'
import { onlyNumbers, apenasAlfanumerico } from '../../../infra/reduxForm/CommomNormalizers'

import { getEnderecoByCep } from './DadosEmpresaAction'
import { If } from '../../correios/ACForms/ACForms';

class DadosEmpresa extends React.Component {

    constructor(props) {
        super(props)

        this.handleCep = this.handleCep.bind(this)
        this.handleValidate = this.handleValidate.bind(this)
        this.handleRequired = this.handleRequired.bind(this)
    }

    componentDidMount() {
        this.props.cepValidator()
    }

    handleCep(event) {
        let cep = event.target.value
        if(cep.length == 9)
            this.props.getEnderecoByCep(cep, this.props.nomeForm)
    }

    handleValidate(nomeCampo, valorRetornadoTrue, valorRetornadoFalse) {
        if(this.props.obrigatorios && this.props.obrigatorios[nomeCampo]){
            return valorRetornadoTrue
        } else if(this.props.obrigatorios && !this.props.obrigatorios[nomeCampo]){
            return valorRetornadoFalse
        } else {
            return valorRetornadoTrue
        }
    }

    handleRequired(nomeCampo) {
        if(this.props.obrigatorios && this.props.obrigatorios[nomeCampo]){
            return true
        } else if(this.props.obrigatorios && !this.props.obrigatorios[nomeCampo]){
            return false
        } else {
            return true
        }
    }

    render () {
        return (
            <div>
                <If condition={this.props.possuiCNPJ}>
                    <Field name="endereco.cnpj" component={renderInputField} label="CNPJ" normalize={MascaraCnpj} required={this.handleRequired('cnpj')} />
                </If>
                <Field name="endereco.nome" component={renderInputField} label={this.props.isOportunidade?"Contato da Empresa":"Contato"} validate={this.handleValidate('nome', [obrigatorio], [])} required={this.handleRequired('nome')} normalize={ maxlength(100) } />
                <Field name="endereco.cep" component={renderInputField} label="CEP" required={this.handleRequired('cep')} normalize={ MascaraCep } onChange={this.handleCep} validate={this.handleValidate('cep', [obrigatorio], [])} />
                <Field name="endereco.endereco" component={renderInputField} label="Endereço" required={this.handleRequired('endereco')} validate={this.handleValidate('endereco' ,[obrigatorio], [])} normalize={ maxlength(100) } />
                <Field name="endereco.complemento" component={renderInputField} label="Complemento"normalize={ maxlength(50) } />
                {/* required component={renderInputField} validate={[obrigatorio]} */}
                <Field name="endereco.numero" component={renderInputField} required validate={[obrigatorio]} label="Número" normalize={apenasAlfanumerico} />
                <Field name="endereco.bairro" component={renderInputField} label="Bairro" required={this.handleRequired('bairro')} validate={this.handleValidate('bairro' ,[obrigatorio], [])} normalize={ maxlength(100) } />
                <Field name="endereco.cidade" disabled={true} component={renderInputField} label="Cidade" required={this.handleRequired('cidade')} validate={this.handleValidate('cidade' ,[obrigatorio], [])} />
                <Field name="endereco.uf" disabled={true} component={renderInputField} label="UF" required={this.handleRequired('uf')} validate={this.handleValidate('uf' ,[obrigatorio], [])} />
                <If condition={!this.props.naoPossuiTipoContato}>
                    <Field name="endereco.telefone" component={renderInputField} label="Telefone" required={this.handleRequired('telefone')} validate={this.handleValidate('telefone' ,[obrigatorio, telefoneInvalido], [telefoneInvalido])} normalize={ MascaraTelefone } />
                    <Field name="endereco.email" component={renderInputField} label="E-mail" required={this.handleRequired('email')} validate={this.handleValidate('email' ,[obrigatorio, emailInvalido], [emailInvalido])} normalize={ maxlength(100) } />
                </If>                
            </div>
        )    
    }
}

const mapDispatchToProps = dispatch => (
    {
        getEnderecoByCep: bindActionCreators(getEnderecoByCep, dispatch),
    }
)

export default connect(null, mapDispatchToProps)(DadosEmpresa)