import React, { Component } from 'react'
import uuid from 'uuid'
import Todo from './Todo'
import Form from './Form';

export default class List extends Component {

    constructor(props){
        super();
        this.state = {
            todos: []
        }
    }

    addTodo = todo => {
        let newTodo = {...todo, id: uuid()};
        console.log(newTodo);
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    deleteTodo = id => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addTodo} buttonText='Submit'/>
                <div className="List">
                    {this.state.todos.map(todo => 
                        <Todo 
                            key = {todo.id}
                            id = {todo.id}
                            desc={todo.desc}
                            delete = {this.deleteTodo}
                        />)
                    }
                </div>
            </div>
        )
    }
}