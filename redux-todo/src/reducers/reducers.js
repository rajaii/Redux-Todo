import { ADD_TODO, TOGGLE_COMPLETED } from '../actions/actions';

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
            default:
                return state
    }
}

export default rootReducer;
