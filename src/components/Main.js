import React from 'react'
import Footer from './Footer'
import TodoItem from './TodoItem' 
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filterTypes'


const TODO_FILTERS = {
    [ SHOW_ALL]: () => true,
    [ SHOW_ACTIVE ]: todo => !todo.comleted,
    [ SHOW_COMPLETED ]: todo => todo.comleted
}

export default class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            filter: SHOW_ALL
        }
    }

    

    handleClearCompleted(){
        this.props.actions.clearCompleted()
    }

    handleShow(filter){
        this.setState({ filter })
    }

    toggleAll(completedCount){
        const { todos, actions } = this.props
        if(todos.length > 0){
            return(
                <input className="toggle-all"
                       type="checkbox"
                       checked={ completedCount === todos.length}
                       onChange={actions.completeAll}>
                </input>
            )
        }
    }

    renderFooter(completedCount){
        const { todos } = this.props
        const { filter } = this.state
        const activeCount = todos.length - completedCount

        if(todos.length){
            return(
                <Footer completedCount={completedCount}
                        activeCount={activeCount}
                        filter={filter}
                        onClearCompleted={this.handleClearCompleted}
                        onShow={this.handleShow.bind(this)} />
            )
        }
    }

    render(){
        const { todos, actions } = this.props;
        const { filter } = this.state
        const filteredTodos = todos.filter(TODO_FILTERS[filter])

        const completedCount = todos.reduce((count, todo) =>
            todo.completed ? count + 1 : count,
            0
        )  
        const mapped = todos.map(todo =>{
            return <TodoItem key={todo.id} todo = {todo} {...actions}/>
        })
        return(
            <div>
                <section>
                    <ul className="todo-list">
                        {mapped}
                    </ul>
                </section> 
                {this.renderFooter(completedCount)}
            </div>       
        )
    }
}