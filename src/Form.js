import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {

    static defaultProps = {
        placeholder: 'New Task',
        purpose: 'newTask',
        buttonText: 'Submit',
        value: '',
        id:'',
        editMode: false
    }

    constructor(props){
        super(props);
        this.state = { desc: this.props.value}
    }

    handleChange = evt => {
        this.setState({desc: evt.target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state, this.props.id);
        this.setState({ desc: "" });
        if(this.props.editForm) this.props.toggleEdit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className ={this.props.editForm ? 'Todo-edit-form' : 'NewTodoForm'}>
                <div>
                    <input
                        value = {this.state.desc}
                        type="text"
                        name='desc'
                        placeholder={this.props.placeholder}
                        onChange = {this.handleChange}
                        maxLength = {30}
                    />
                </div>
                <button>{this.props.buttonText}</button>
            </form>
        )
    }
}
