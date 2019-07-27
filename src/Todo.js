import React, { Component } from 'react'
import Form from './Form'
import './Todo.css'

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

    toggleCompletion = () => {
        this.setState({completed: !this.state.completed})
    }

    render() {
        return (
            <div>
                {this.state.editMode 
                    ? <div className='Todo'>
                        <Form value={this.props.desc} onSubmit = {this.props.edit} id={this.props.id} toggleEdit={this.toggleEdit} editForm/>
                        <span className='Todo-buttons'><button onClick={this.toggleEdit}><i className='fas fa-times'/></button></span>
                      </div>
                    : <div className='Todo'>
                        <li  onClick={this.toggleCompletion} className={this.state.completed ? 'Todo-task completed' : 'Todo-task'}>
                            {this.props.desc}
                        </li>
                        <div className='Todo-buttons'>
                            <button onClick={this.toggleEdit}><i className='fas fa-pen' /></button>
                            <button onClick={this.handleDelete}><i className='fas fa-trash' /></button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
