import { ADD_TODO, TOGGLE_COMPLETED, REMOVE_COMPLETED, EDIT_TODO } from '../actions/actions';

const initialState = {
    todos: [
        {
            value: 'walk dog',
            completed: false
            },
            {
                value: 'cook dinner',
                completed: false,
            }
    ]
}
//shallow copying in js
// const ali = {
//     isTall: false,
//     canProgram: true,

// } 

// => const newDude = ali; //reference to ali
// const newDude = {...ali}//reference to a new object starts with same values as ali
// console.log(ali)
// console.log(newDude)
// newDude['isTall'] = true


function rootReducer (state=initialState, action) {
    console.log(state);
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                ...state.todos,
                {value: action.payload.value,
                completed: false}
                ]
            }
            case TOGGLE_COMPLETED:
                return {
                   todos: state.todos.map((todo, index) => action.payload === index ? {...todo, completed: !todo.completed } : todo)
                }
            case REMOVE_COMPLETED:
                return {
                    todos: state.todos.filter(todo => todo.completed === false)
                }
            case EDIT_TODO:
            return {
                todos: state.todos.map((todo, index) => action.payload === index ? {value: action.payloadValue.value, ...todo} : todo)
            }
            default:
                return state
    }
}

export default rootReducer;
