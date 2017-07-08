import React from 'react'
import classnames from 'classnames'

export default class TodoInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: this.props.text || ''
        }
    }

    handleSubmit(e){
        const text = e.target.value.trim();
        if(e.which === 13){
            this.props.onSave(text)
            if(this.props.newTodo){
                this.setState({text: ''})
            }
        }
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }

    handleBlur(e){
        if(!this.props.newTodo){
            this.props.onSave(e.target.value)
        }
    }

    render() {
        return (
                <input className={
                    classnames({
                        edit: this.props.edit,
                        'new-todo': this.props.newTodo
                    })
                }
                type= 'text'
                placeholder = {this.props.placeholder}
                autoFocus = {true}
                value={this.state.text}
                onChange = {this.handleChange.bind(this)}
                onBlur = {this.handleBlur.bind(this)}
                onKeyDown = {this.handleSubmit.bind(this)} />
        )
    }    
}