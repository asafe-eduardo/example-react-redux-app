import moment from 'moment'

const PATTERN_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const PATTERN_CEP = new RegExp(/^[0-9]{5}-[0-9]{3}$/)
const PATTERN_TELEFONE = new RegExp(/^\([1-9]{2}\)[2-9][0-9]{3,4}\-[0-9]{4}$/)

export const maxlength = tamanho => (value, previousValue, allValues) => value && value.substr(0, tamanho)

export const obrigatorio = value => value ? undefined : 'Campo Obrigatório'

export const listaObrigatorio = value => ((value && value.length > 0) ||  (value && Object.keys(value).length > 0)) ? undefined : 'Campo Obrigatório'

export const emailInvalido = value => (!value || PATTERN_EMAIL.test(value)) ? undefined : 'E-mail inválido.'

export const cepInvalido = value => (!value || PATTERN_CEP.test(value)) ? undefined : 'Cep inválido.'

export const telefoneInvalido = value => (!value || PATTERN_TELEFONE.test(value)) ? undefined : 'Telefone inválido.'

export const dataInvalida = value => {
    if(!value || moment(value, "DD/MM/YYYY", true).isValid())
        return undefined 
    else 
        return 'Data inválida.'
}