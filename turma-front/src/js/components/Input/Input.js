import React from 'react';

export class InputText extends React.Component {

    constructor(props){
       super(props);
    }

    render(){
        const {id, name, onChange} = this.props;

        return (
            <div className="form-group">
                <label htmlFor={id}>{id} </label>
                <input type="text" className="form-control" id={id} onChange={onChange} />
            </div>
        );

    }

}

export class InputRadio extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const {id, name, onChange} = this.props;

        return (
            <div className="form-group">
                <label>Masculino: </label>
                <input type="radio" name="sexo" value="M" onChange={onChange}/>
                <label>Feminino: </label>
                <input type="radio" name="sexo" value="F" onChange={onChange}/>
            </div>
        );

    }

}