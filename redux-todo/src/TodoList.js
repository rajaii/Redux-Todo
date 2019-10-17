import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted, removeCompleted } from './actions/actions';
import Todo from './Todo';
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        let colors = ['green', 'red', 'purple', 'yellow', 'pink','yellowgreen', 'violet', 'magenta', 'maroon', 'khaki', 'white', 'brown', 'rosybrown', 'teal', 'tomato', 'turquoise', 'indianred', 'indigo', 'orange', 'olive', 'pink', 'aqua'];
        let colorToPick = () => {
                    let i = Math.floor(Math.random() * colors.length)
                    return colors[i];
        }
        this.state = {
            color: colorToPick(),
            newTodo: {
                value: '',
                completed: false,
                }
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

handleClear = () => {
    this.props.removeCompleted();
}

    render() {
        
       
   
        return (
            <div style={{backgroundColor: this.state.color}}>
                <h1>Todo List (developed with React-Redux)</h1>
                <div>{this.props.todos.map((t, index) => <Todo key={index} index={index} todo={t} completed={t.completed} toggle={this.handleToggleClick} value={t.value} />)}</div>
                <form type='submit' onSubmit={this.handleSubmit}>
                    <input 
                    className='addInput'
                    name='value'
                    value={this.state.newTodo.value}
                    type='text'
                    onChange={this.handleChange}
                    placeholder='New Todo'
                    />    
                    <div className='buttonFlex'>
                        <button className='addButton'>Add todo</button>
                        <button onClick={this.handleClear} className='tButton'>Remove Done Todo's</button>
                    </div>
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

export default connect(mapStateToProps,{ addTodo, toggleCompleted, removeCompleted })(TodoList);

/*let colors = ['green', 'red', 'purple', 'yellow', 'pink','yellowgreen', 'violet', 'magenta', 'maroon', 'khaki', 'white', 'brown', 'rosybrown', 'teal', 'tomato', 'turquoise', 'indianred', 'indigo', 'orange', 'olive', 'pink', 'aqua']
        let colorToPick = () => {
            let i = Math.floor(Math.random() * colors.length)
            return colors[i]
        }*/