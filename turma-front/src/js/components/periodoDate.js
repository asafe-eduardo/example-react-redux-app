import React from 'react'
import { Field } from 'redux-form'
import { renderInputField } from './forms';
import { dataInvalida } from './validadores';

export const PeriodoDate = ({mask, erros, input, children }) => {
    const headerClassName = erros ? 'collapse-erro' : 'collapse-header'
    const panelClassName = erros ? 'collapse-erro' : 'collapse-panel'
    return (
        <div className="row">
            <div className="col-xs-3">
                <Field name="dataInicial" label={'De'}
                       component={renderInputField}
                       type="text" normalize={mask} placeholder="01/01/2018" validate={dataInvalida} />
            </div>
            <div className="col-xs-3">
                <Field name="dataFinal" label={'Até'}
                       component={renderInputField} validate={dataInvalida}
                       type="text" normalize={mask} placeholder="01/01/2018" />
            </div>
        </div>
    )
}

export default PeriodoDate;