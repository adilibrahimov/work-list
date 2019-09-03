import React, { Component } from 'react'
import List from "./List";
import data from "./Data";
export default class App extends Component {
    state = {
        data: data,
        index: 0
    }
    handleChenge = (index) => {
        this.setState({
            index: index
        })

    }
    deleteObject = (index) => {
        data.splice(index, 1)
        this.setState({
             data: data  
        })  
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <List data={this.state.data} 
                handleChenge={this.handleChenge} 
                pageIndex={this.state.index} 
                deleteObject={this.deleteObject}
                />
            </div>
        )
    }
}
