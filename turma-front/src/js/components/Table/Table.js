import React from 'react';

export class Table extends React.Component {

    constructor(props){
        super(props);
    }

    mountTableBody(){
        const list = this.props.corpo.map((item, key) => {
            return (
                <tr key={key}>
                    <td>
                        <a className="fa fa-trash col-md-4" onClick={this.props.actionDelete(item.id)} href="/#/usuario"/>
                        <a className="fa fa-edit col-md-4"/>
                    </td>
                    <td>{item.nome}</td>
                    <td>{item.ultimoNome}</td>
                    <td>{item.email}</td>
                    <td>{item.sexo}</td>

                </tr>);
        });

        return list;
    }

    render(){

        const {cabecalhos} = this.props;
        const corpo = this.mountTableBody();

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">AÇÕES</th>
                        <th scope="col">NOME</th>
                        <th scope="col">ULTIMO NOME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">SEXO</th>
                    </tr>
                </thead>
                <tbody>
                    {corpo}
                </tbody>
            </table>);

    }
}