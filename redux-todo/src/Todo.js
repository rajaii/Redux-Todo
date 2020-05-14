import React from 'react';
import './TodoList.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editTodo: {
                value: '',
                completed: false,
                }
            }
        }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            editTodo: {
                ...this.state.editTodo,
                [e.target.name]: e.target.value
            }
        })
    }

    beginEdit = () => {
        this.setState({
            isEditing: true
        })
    }
    editTodo = (todoToEdit, todoValues) => {
        this.props.editTodo(this.props.todos.map((t, index) => index), todoValues);
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.editTodo(this.props.index, this.props.todo);
        this.setState({
            isEditing: false,
            editTodo: {
                value: '',
                completed: false,
                }
        })
       
    }
    
    render() {
        let editForm = 
        <form type='submit' onSubmit={this.handleEdit}>
            <input 
            className='addInput'
            name='value'
            value={this.state.editTodo.value}
            type='text'
            onChange={this.handleChange}
            placeholder='Edit Todo'
            />    
            <div className='buttonFlex'>
                <button className='addButton'>Edit todo</button>
            </div> 
        </form>
    return (
        <div className='tFlex'>
            <div className={this.props.completed ? 'doneTodo' : null} onClick={() => this.props.toggle(this.props.index)}>
                {this.state.isEditing ? editForm : this.props.value}
            </div>
            <button onClick={this.beginEdit}>Edit todo</button>
        </div>
    )
}
}

export default Todo;

//add handleEdit://
    //add local state and local handleChange//
    //reset form values to the local state//
    //call handleSubmit from within handleEdit and reset form to empty in there via setState//
//take logic on handle edit from TodoList and put in Todo (prob in handleEdit)//
