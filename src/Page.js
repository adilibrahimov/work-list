import React, { Component } from 'react'
export default class Page extends Component {
    render() {
        const { name, address, company } = this.props.data
        const index = this.props.index;
        const handleChenge = this.props.handleChenge;
        const deleteObject = this.props.deleteObject;
        return (

            <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{address.city}</td>
                <td>{company.name}</td>
                <td><button type="button" className="btn btn-info "
                    onClick={() => handleChenge(index)}>More</button></td>
                <td ><i className="fas fa-trash" onClick={() => deleteObject(index)}></i></td>
            </tr>
        )
    }
}
