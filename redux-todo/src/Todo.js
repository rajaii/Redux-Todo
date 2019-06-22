import React from 'react';

function Todo(props) {
    return (
        <div onClick={() => props.toggle(props.index)}>
            {props.value}
        </div>
    )
}

export default Todo;