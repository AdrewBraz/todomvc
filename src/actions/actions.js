import * as type from '../constants/actionTypes'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/filterTypes'

export function addTodo(text){
    return {
        type: type.ADD_TODO,
        text
    }
}

export function deleteTodo(id){
    return {
        type: type.DELETE_TODO,
        id
    }
}

export function completeTodo(id){
    return{
        type: type.COMPLETE_TODO,
        id
    }
}

export function editTodo(id, text){
    return {
        type: type.EDIT_TODO,
        id,
        text
    }
}

export function completeAll(){ 
    return { type: types.COMPLETE_ALL }
}

export function clearCompleted(){
    return{ type: types.CLEAR_COMPLETED }
}
