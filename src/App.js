import React, { Component } from 'react'
import List from "./List";
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            posts: [],
            isLoaded: false,
            index: 0
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    // isLoaded: false,
                    data: json
                })
            })

        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(ress => ress.json())
            .then(jsonn => {
                this.setState({
                    isLoaded: true,
                    posts: jsonn
                })
            })
    }

    handleChenge = (index) => {
        this.setState({
            index: index
        })
    }

    deleteObject = (index) => {
        this.state.data.splice(index, 1)
        this.setState({
            data: this.state.data
        })
    }
    
    render() {

        var { isLoaded } = this.state
        if (!isLoaded) {
            return <div style={{ marginLeft: "50%", marginTop: "50px", fontSize: "36px" }}>Loading...</div>
        }
        else {
            return (
                <div>
                    <List data={this.state.data}
                        posts={this.state.posts}
                        handleChenge={this.handleChenge}
                        pageIndex={this.state.index}
                        deleteObject={this.deleteObject}
                    />
                </div>
            )
        }
    }
}
