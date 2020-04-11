import React from 'react';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx';
import tw from 'tailwind.macro';
import styled from '@emotion/styled'


import todoStore from '../../stores/TodoStores/todoStores.js';
import UserInput from './userInput.js';
// import Todo from '../../stores/TodoStores/todos.js';
import TodoList from './todoList.js';
// import todoStore from '../../stores/TodoStores/todoStores.js'

const TodoTitle = styled.p`${tw`text-6xl text-center text-orange-600 `}`


@observer class TodoApp extends React.Component {
    @action.bound
    addTodo(todoName){
        todoStore.onAddTodo(todoName);
        
        
    }
    @action.bound
    removeTodo(removeItem){
        todoStore.onRemoveTodo(removeItem);
        
    }
    
   
    render(){


    return (
        <div>
       
        <TodoTitle>Add ToDo</TodoTitle>
         <UserInput addTodo={this.addTodo}/>
         <TodoList removeTodo={this.removeTodo} />
        
         
         
        </div>

        
    
        
        )
    }
    
    
}
export default TodoApp;