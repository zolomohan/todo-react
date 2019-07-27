import React, { Component } from 'react'

export default class Form extends Component {

    static defaultProps = {
        placeholder: 'New Task',
        purpose: 'newTask',
        buttonText: 'Submit'
    }

    constructor(props){
        super(props);
        this.state = {
            [this.props.purpose]: ''
        }
    }

    handleChange = evt => {
        this.setState({[this.props.purpose]: evt.target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name={this.props.purpose}
                        placeholder={this.props.placeholder}
                        onChange = {this.handleChange}
                    />
                </div>
                <button>{this.props.buttonText}</button>
            </form>
        )
    }
}
