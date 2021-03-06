import React from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filterTypes'


const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    renderCount(){
        const { activeCount } = this.props
        const itemWord = activeCount === 1 ? 'item' : 'items'

        return(
            <span className="todo-count">
                <strong>{activeCount || 'No'} </strong> {itemWord} left
            </span>
        )
    }

    renderFilter(filter){
        const title = FILTER_TITLES[filter]
        const { filter: selectedFilter, onShow } = this.props

        return(
            <a className={classnames({selected: filter === selectedFilter})}
               style={{cursor: 'pointer'}}
               onClick={()=> onShow(filter)}></a>
        )
    }

    renderClear(){
        const { completedCount, onClearCompleted } = this.props
        if(completedCount > 0){
            return(
                <button className='clear-completed'
                        onClick={ onClearCompleted } >
                        Clear completed
                </button>    
            )
        }
    }

    render() {
        return (
            <footer className="footer">
                {this.renderCount()}
                <ul className="filters">
                    {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                        <li key={filter}>
                            {this.renderFilter(filter)}
                        </li>
                    )}
                </ul>
                {this.renderClear()}
            </footer>
        );
  }
}