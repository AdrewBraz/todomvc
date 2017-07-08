import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as TodoActions from '../actions/actions'
import Header from '../components/Header'
import Main from '../components/Main'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header todos={this.props.todos} addTodo = {this.props.actions.addTodo}/>
                <Main actions = {this.props.actions} todos={this.props.todos}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)