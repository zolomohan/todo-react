import React, { Component } from 'react'

export default class Form extends Component {

    static defaultProps = {
        placeholder: 'New Task',
        purpose: 'newTask',
        buttonText: 'Submit'
    }

    constructor(props){
        super(props);
        this.state = { desc: ''}
    }

    handleChange = evt => {
        this.setState({desc: evt.target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ desc: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        value = {this.state.desc}
                        type="text"
                        name='desc'
                        placeholder={this.props.placeholder}
                        onChange = {this.handleChange}
                    />
                </div>
                <button>{this.props.buttonText}</button>
            </form>
        )
    }
}
