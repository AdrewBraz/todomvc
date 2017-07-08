import React from 'react'
import TodoInput from './TodoInput'


export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    addText(text){
        if(text.length !== 0){
            this.props.addTodo(text)
        }
    }

    render(){
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoInput newTodo={true}
                               onSave = {this.addText.bind(this)}
                               placeholder= 'What needs to be done?'/>
            </header>
        )
    }
}