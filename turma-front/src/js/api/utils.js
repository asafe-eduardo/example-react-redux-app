import moment from 'moment'

export const formatDate = (data) => {
   return moment(data).format('DD/MM/YYYY');
}

export const formatDateTime = (data) => {
   return moment(data).format('DD/MM/YYYY HH:mm:ss');
}

export const desabilitaColar = event => {
    event.target.onpaste = e => e.preventDefault()
}

export const desabilitaEventos = event => {
    event.preventDefault()
}

export const trimMasterBlaster = obj => {
    Object.keys(obj).forEach(key => {
        if (obj[key] instanceof Object) {
            trimMasterBlaster(obj[key])
        } else if (obj[key].trim) {
            obj[key] = obj[key].trim()
        }
    })
}

export const maskMoney = value => {
    value = value.replace(/[^0-9]/g, '') // Remove caracteres indesejáveis
    value = value.replace(/\D/g,'');
    value = value.replace(/(\d{1,2})$/, ',$1');  
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return value
}