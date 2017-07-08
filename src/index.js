import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers/todos'
import { Provider } from 'react-redux'
import css from 'todomvc-app-css/index.css'
import App from './container/App'
import * as TodoActions from './actions/actions'


const root = document.getElementById('root');
const store = createStore(todoApp)

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    root    
)