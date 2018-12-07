import React from 'react'
import { Field, Form } from 'redux-form'

export const renderSelectField = ({ required, input, label, type, meta: { touched, error }, children, disabled }) => {
    const inputClassName = (touched && error) ? 'campo erro' : 'campo';

    let requiredSymbol = required && <span className="required">*</span> || '';
    return (
        <div className={inputClassName}>
            <div className="rotulo">
                <label><h3>{label}: </h3></label>
                {requiredSymbol}
            </div>
            <div>
                <select {...input} disabled={disabled}>
                    {children}
                </select>
                {touched && error && <div className="mensagem"><span>{error}</span></div>}
            </div>
        </div>
    )
}

export const renderTextAreaField = ({ style, placeholder, disabled, required, input, label, type, meta: { touched, error }, children }) => {
    const inputClassName = (touched && error) ? 'campo erro' : 'campo';

    let requiredSymbol = required && <span className="required">*</span> || '';
    return (
        <div className={inputClassName}>
            <div className="rotulo">
                <label><h3>{label}: </h3></label>
                {requiredSymbol}
                <textarea style={style} type={type} {...input} disabled={disabled} placeholder={placeholder}>
                    {children}
                </textarea>
            </div>
            <div>
                {touched && error && <div className="mensagem"><span>{error}</span></div>}
            </div>
        </div>
    )
}

export const renderManyRadioField = ({ style, placeholder, disabled, required, input, label, type, lista, campoValor, campoDescricao, valorColuna, meta: { touched, error }, children }) => {
    const inputClassName = (touched && error) ? 'campo erro' : 'campo';
    let requiredSymbol = required && <span className="required">*</span> || '';
    let titulo = label ? <label><h2>{label}: </h2></label> : ''

    return (
        <div className={inputClassName}>
            <div className="rotulo">
                    <div className="row">
                        {titulo}
                        {requiredSymbol}
                    </div>
                    <div className="row">
                        {lista && lista.length > 0 && lista.map((obj, index) => {
                            return (
                                <div style={obj.style ? obj.style : {}} className={(valorColuna || obj.coluna) ? 'col-md-' + (valorColuna || obj.coluna) : ''} key={index}>
                                    <input type="radio" {...input} disabled={disabled} value={obj[campoValor]} checked={input.value == obj[campoValor]} /> <label style={{"marginLeft": "10px"}}>{obj[campoDescricao]}</label>
                                </div>
                            )
                        })}
                    </div>
            </div>
            <div>
                {touched && error && <div className="mensagem"><span>{error}</span></div>}
            </div>
        </div>
    )
}

export const renderInputField = ({ style, placeholder, disabled, required, input, label, type, meta: { touched, error }, children }) => {
    const inputClassName = (touched && error) ? 'campo erro' : 'campo';

    let requiredSymbol = required && <span className="required">*</span> || '';
    return (
        <div className={inputClassName}>
            <div className="rotulo">
                <label><h3>{label}: </h3></label>
                {requiredSymbol}
                <input style={style} type={type} {...input} disabled={disabled} placeholder={placeholder}>
                    {children}
                </input>
            </div>
            <div>
                {touched && error && <div className="mensagem"><span>{error}</span></div>}
            </div>
        </div>
    )
}

export const renderErrorMessage = ({ input, meta: { touched, error }, children }) => {
    const inputClassName = (error) ? 'campo erro' : 'campo';

    return (
        <div className={inputClassName}>
            <div>
                {children}
            </div>
                {touched && error && <div className="mensagem"><span>{error}</span></div>}
        </div>
    )
}

export const renderCheckboxField = ({ style, val, placeholder, disabled, required, input, label, trackBy, type, change, meta: { touched, error, dirty, pristine }, children, checked }) => {

    trackBy = trackBy ? trackBy : 'id'

    const inputClassName = (pristine && touched && error) ? 'erro' : ''

    const isChecked = () => {
        if (checked == true) {
            return true
        } else {
            return input && input.value && val && val[trackBy] && input.value[val[trackBy]] != undefined
        }
    }

    const changed = (event) => {
        let newValue = {...input.value}
        if (event.target.checked) {
            if (val && val[trackBy]) {
                newValue[val[trackBy]] = val
            }
        } else {
            if (val && val[trackBy]) {
                delete newValue[val[trackBy]]
            }
        }

        if (Object.keys(newValue).every(val => !val)) {
            newValue = ""
        } else {
            newValue = newValue
        }

        return input.onChange(newValue);

    }

    return (
        <div>
                <input type="checkbox"
                    className={inputClassName}
                    name={`${input.name}[${val}]`}
                    value={val}
                    checked={input && input.value && val && val[trackBy] && input.value[val[trackBy]] != undefined}
                    onChange={(event) => {changed(event); change && change(event); }} />
            <label>{
                 label.length > 120 &&
                 <div className="label-checkbox" title={label}>{label.substring(0,117)+'...'}</div>
                }
                {
                 label.length <= 120 &&
                 <div className="label-checkbox">{label}</div>
                }
                
            </label>
            <div>
                {touched && error && <div className="mensagem mensagem-erro"><span>{error}</span></div>}
            </div>
        </div>
    )
}