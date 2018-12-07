export const MascaraCnpjSeparadoVirgula = (value, previousValue) => {
    if(!value)
        return value

    var onlyNums = value.replace(/[^\d]/g, '')
    onlyNums = onlyNums.substring(0,350)
    let cnpjFormatado = ''
    
    for(var i = 0;i<=onlyNums.length;i = i + 14){
        let pedaco = onlyNums.substring(i, i+14)
        if(pedaco.length == 14)
            cnpjFormatado += onlyNums.substring(i, i+14) + ','
        else
            cnpjFormatado += onlyNums.substring(i, i+14)
    }

    return cnpjFormatado
}

export const MascaraTelefone = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {

        if(onlyNums.length <= 2){
            return '(' + onlyNums.slice(0, 2)
        } else if(onlyNums.length <= 6){
            return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.substr(2, 4)
        } else if(onlyNums.length <= 10){
            return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.substr(2, 4) + '-' + onlyNums.substr(6, 4)
        } else if(onlyNums.length >= 11){
            return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.substr(2, 5) + '-' + onlyNums.substr(7, 4)
        }

    }

    if(onlyNums.length <= 2){
        return '(' + onlyNums.slice(0, 2)
    } else if(onlyNums.length <= 6){
        return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.substr(2, 4)
    } else if(onlyNums.length <= 10){
        return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.substr(2, 4) + '-' + onlyNums.substr(6, 4)
    } else if(onlyNums.length >= 11){
        return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.substr(2, 5) + '-' + onlyNums.substr(7, 4)
    }

}

export const MascaraCep = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {

        if (onlyNums.length <= 5) {
            return onlyNums
        }
    }

    if (onlyNums.length <= 5) {
        return onlyNums
    }

    return onlyNums.slice(0, 5) + '-' + onlyNums.substr(5, 3)
}

export const MascaraCnpj = (value, previousValue) => {
    if (!value) {
        return ''
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
        if (onlyNums.length < 3) {
            return onlyNums
        }
        if (onlyNums.length < 6) {
            return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5)
        }
        if (onlyNums.length < 9) {
            return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5) + '.' + onlyNums.slice(5, 8)
        }
        if (onlyNums.length < 13) {
            return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5) + '.' + onlyNums.slice(5, 8) + '/' + onlyNums.slice(8, 12)
        }
    }
    if (onlyNums.length < 3) {
        return onlyNums
    }
    if (onlyNums.length < 6) {
        return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5)
    }
    if (onlyNums.length < 9) {
        return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5) + '.' + onlyNums.slice(5, 8)
    }
    if (onlyNums.length < 13) {
        return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5) + '.' + onlyNums.slice(5, 8) + '/' + onlyNums.slice(8, 12)
    }
    
    return onlyNums.slice(0, 2) + '.' + onlyNums.slice(2, 5) + '.' + onlyNums.slice(5, 8) + '/' + onlyNums.slice(8, 12) + '-' + onlyNums.slice(12, 14)
}

export const MascaraDate = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
        if (onlyNums.length < 3) {
            return onlyNums
        }

        if (onlyNums.length < 5) {
            return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2, 4)
        }
    }

    if (onlyNums.length < 3) {
        return onlyNums
    }

    if (onlyNums.length < 5) {
        return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2, 4)
    }

    return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2, 4) + '/' + onlyNums.slice(4, 8)
}

export const MascaraReal = (valor) => {
    if(!valor){
        return ''
    }

    let numeroFormatado = (valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return numeroFormatado
}

// export const MascaraCnpj = (valor) => {
//     if(!valor || valor.trim().length != 14){
//         return valor
//     }

//     valor = valor.trim()

//     return valor.substring(0,2) + '.' + valor.substring(2,5) + '.'+valor.substring(5,8) + '/' + valor.substring(8,12) + '-' + valor.substring(12)
// }

export const MascaraDinheiro = (length = null) =>
    (valor, previousValue, allValues) => {
        if (!valor) {
            return valor
        }
        if(length != null){
            valor = valor.substr(0, length)
        }
        const onlyNums = valor.replace(/[^\d]/g, '')
        var tmp = onlyNums+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 && tmp.length < 11)
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        else if( tmp.length > 10)
            tmp = tmp.replace(/([0-9]{3})([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");

        return tmp;
}

export const MascaraCnae = (valor) => {
    if(!valor || valor.trim().length != 7){
        return ''
    }

    return valor.substring(0,2) + '.' + valor.substring(2,4) + '-'+valor.substring(4,5) + '-' + valor.substring(5,7)
}

export const MascaraAnoMes = (valor) => {
    if(!valor){
        return ''
    }

    return valor.substring(5,7) + "/" + valor.substring(0,4)
}

export const normalizeDate = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
        if (onlyNums.length === 2) {
            return onlyNums + '/'
        }
    }

    if (onlyNums.length <= 2) {
        return onlyNums
    }

    return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2, 6)
}