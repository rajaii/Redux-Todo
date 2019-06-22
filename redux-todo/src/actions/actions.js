export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED'

export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const toggleCompleted = (toggledTodo) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: toggledTodo
    }
} 

export const removeCompleted = (doneTodo) => {
    return {
    type: REMOVE_COMPLETED,
    payload: doneTodo
    }
}