import {ADD_TODO,CHANGE_COMPLETED,REMOVE_TODO} from "../costants/constants";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})
export const changeCompleted = (id) => ({
    type: CHANGE_COMPLETED,
    payload: id
})