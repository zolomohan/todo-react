import React, { Component } from 'react'
import uuid from 'uuid'
import Todo from './Todo'
import Form from './Form';
import './List.css'

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

    editTodo = (todo, id) => {
        let listCopy = [...this.state.todos];
        listCopy.forEach( object => {
            console.log(object)
            if(id === object.id){
                object.desc = todo.desc;
            }
        })
        this.setState({todos: listCopy});
    }

    render() {
        return (
            <div className="List">
                <h1>Todo List</h1>
                <ul>
                {this.state.todos.map(todo => 
                    <Todo 
                    key = {todo.id}
                    id = {todo.id}
                    desc={todo.desc}
                    delete = {this.deleteTodo}
                    edit = {this.editTodo}
                    />
                    )
                }
                <Form onSubmit={this.addTodo} buttonText='Submit'/>
                </ul>
            </div>
        )
    }
}