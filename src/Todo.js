import React, { Component } from 'react'
import Form from './Form'

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            completed: false,
            editMode: false
        }
    }

    handleDelete = () => {
        this.props.delete(this.props.id);
    }

    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            <div>
                {this.state.editMode 
                    ? <div>
                        <Form value={this.props.desc} onSubmit = {this.props.edit} id={this.props.id} toggleEdit={this.toggleEdit} editForm/>
                        <button onClick={this.toggleEdit}>Cancel</button> 
                      </div>
                    : <div>
                        <span>{this.props.desc}</span>
                        <button onClick={this.toggleEdit}>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                }
            </div>
        )
    }
}
