import * as type from '../constants/actionTypes'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/filterTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case type.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    case type.DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.id
      })
 
    case type.COMPLETE_TODO:
      return state.map(todo => {
        return  todo.id === action.id ?
           {...todo, completed: !todo.completed} :
            todo
      })

      case type.EDIT_TODO:
        return state.map( todo => {
          return todo.id === action.id ?
            {...todo, text: action.text} :
            todo
        })

      case type.COMPLETE_ALL:
        const allMarked = state.every(todo => todo.completed)
        return state.map(todo =>({
          ...todo,
          completed: allMarked
        }))

      case type.CLEAR_COMPLETED:
        return state.filter( todo => todo.completed === false)

    default:
      return state
  }
}