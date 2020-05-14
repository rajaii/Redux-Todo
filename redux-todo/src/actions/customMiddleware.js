import {ADD_TODO} from './actions';
const customMiddleware = store => next => action => {
    if (action.type === ADD_TODO) {
        localStorage.setItem('todo', action.payload.value)
    }
    next(action);
}

export default customMiddleware;