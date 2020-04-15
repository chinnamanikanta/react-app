import React from 'react';
import {observable,computed,action,reaction} from 'mobx';
// import {observer} from 'mobx-react';
// import {toJS} from "mobx";
import Todo from './todos.js'
 
class TodoStores {
    @observable id=0;
    @observable todos = [];
    @observable selectedFilter = "all";
    
    @action.bound 
    onAddTodo(todoName){

        this.todos.push(new Todo({todoId:this.id++,todoName,isCompleted:false,selectedFilter:"all"}))
    //   console.log(this.todos);

    }
    addTodoLength=reaction(()=>
    {
    return this.todos.map((todo)=> todo.todoName)
    },
    (name)=>{
        console.log("todo length",name);
    }
    
    )
    
    addTodoLength=reaction(()=>
    {
    return this.listOfTodos.length
    },
    (value)=>{
        console.log(value);
    }
    
    )
    @action.bound 
    onRemoveTodo(item){
        // this.todos. 
        
    }
    @action.bound
    onChangeSelectedFilter(){
        
    }
    @action.bound
    onClearCompleted(){
        
    }
    @computed
    get activeTodosCount(){
        
    }
    @computed
    get filteredTodos(){
        
    }
    
    
}
const todoStore = new TodoStores();
export default todoStore;