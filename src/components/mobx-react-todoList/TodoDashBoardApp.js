import React from 'react';
import './todos.css'
import UserInput from './userInput.js';
import TodoList from './todoList.js';
class TodoApp extends React.Component {
    
    
    render(){
        return (
            <div>
            <UserInput/>
            <TodoList />
            </div>
            
            
            )
    }
    
}
export default TodoApp