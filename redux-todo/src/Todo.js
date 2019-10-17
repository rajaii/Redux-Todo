import React from 'react';
import './TodoList.css';

function Todo(props) {
    return (
        <div className='tFlex'>
            <div className={props.completed ? 'doneTodo' : null} onClick={() => props.toggle(props.index)}>
                {props.value}
            </div>
           
        </div>
    )
}

export default Todo;