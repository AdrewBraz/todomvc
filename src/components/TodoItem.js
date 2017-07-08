import React from 'react'
import TodoInput from './TodoInput'
import classnames from 'classnames'

export default class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: false
        }
    }

    handleDoubleClick(){
        this.setState({edit: true})
    }
    
    handleSave(id, text){
        if(text.length === 0){
            this.props.deleteTodo(id)
        } else{
            this.props.editTodo(id, text)
            console.log(id, text)
        }
        this.setState({edit: false})
    }

    render(){
        const { todo, deleteTodo, completeTodo } = this.props
        const { edit } = this.state
        let item
        if(edit){
            item = (
                    <TodoInput text={todo.text}
                       edit={edit}
                       onSave={(text) => this.handleSave(todo.id, text)} />
            )
        }
        else{
            item = (
                    <div className="view">
                        <input className="toggle"
                            type = "checkbox"
                            checked = {todo.completed}
                            onChange = { () => completeTodo(todo.id)}
                        />
                        <label onClick = {this.handleDoubleClick.bind(this)}> {todo.text} </label>
                            <button onClick = {() => deleteTodo(todo.id)}  className="destroy"/>
                    </div>
            )
        } 
        return (
            <li className={classnames({
                completed: todo.completed,
                editing: edit
             })}>
                {item}
            </li>
        )
    }
}