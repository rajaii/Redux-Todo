import React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO, addTodo, TOGGLE_COMPLETED, toggleCompleted } from './actions/actions';
import Todo from './Todo';

class TodoList extends React.Component {
    state = {
        newTodo: {
            value: '',
            completed: false
        }
    }

    handleChange = (e) => {
        this.setState({
            newTodo: {
                [e.target.name]: e.target.value,
                completed: false
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: {
            value: '',
            completed: false
        }})
}
handleToggleClick = todoToToggle => {
    console.log(todoToToggle)
    this.props.toggleCompleted(todoToToggle);

}

    render() {
        return (
            <div>
                <div>{this.props.todos.map((t, index) => <Todo index={index} todo={t} toggle={this.handleToggleClick} value={t.value} />)}</div>
                <form type='submit' onSubmit={this.handleSubmit}>
                    <input 
                    name='value'
                    value={this.state.newTodo.value}
                    type='text'
                    onChange={this.handleChange}
                    />    
                    <button>Add todo</button>
                </form>
            </div>
        )
    }
}
//map out props in div to display the todos above form
const mapStateToProps = (state) => {
    return  {
        todos: state.todos
        
}}

export default connect(mapStateToProps,{ addTodo, toggleCompleted })(TodoList);