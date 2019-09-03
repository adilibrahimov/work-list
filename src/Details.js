import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        const pageIndex = this.props.pageIndex;
        const {name, username, email, address, phone, website,
            company } = this.props.data[pageIndex];

        return (
            <div>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Last name:</strong> {username}</p>
                <p><strong>email:</strong> {email}</p>
                <p><strong>Address</strong></p>
                <p><strong>Street:</strong> {address.street}</p>
                <p><strong>Suite:</strong> {address.suite}</p>
                <p><strong>City:</strong> {address.city}</p>
                <p><strong>Zipcode:</strong> {address.zipcode}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>Company</strong></p>
                <p><strong>Name:</strong> {company.name}</p>
                <p><strong>CatchPhrase:</strong> {company.catchPhrase}</p>
                <p><strong>Bs:</strong> {company.bs}</p>
            </div>
        )
    }
}
