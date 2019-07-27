import React, { Component } from 'react'

export default class Todo extends Component {

    handleDelete = () => {
        this.props.delete(this.props.id);
    }

    render() {
        return (
            <div>
                <span>{this.props.desc}</span>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}
