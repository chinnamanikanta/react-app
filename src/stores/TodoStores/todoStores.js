import React from 'react';
import {observable,computed,action,reaction} from 'mobx';
import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS  } from '@ib/api-constants';
// import {observer} from 'mobx-react';
// import {toJS} from "mobx";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import Todo from './todos.js';
 
class TodoStores {
    id=0;
    @observable getUsersApiError;
    @observable getUsersApiStatus;
    @observable todos
    

    todoService
    constructor(todoService){
        this.init()
        this.todoService = todoService;
    }
    
    @action
    init(){
        this.getUsersApiError = null;
        this.getUsersApiStatus = API_INITIAL;
        this.todos = []
    }
    @action.bound 
    setUsersApiError(error){
        this.getUsersApiError = error;
        
        
    }
    @action.bound 
    setUsersApiResponse(todos){
        
        todos.map((todo)=> {
         const todoModel = new Todo({
            id:todo.id,
            title:todo.title,
            isCompleted:todos.completed})
            this.todos.unshift(todoModel)
            
        }
            )
   
            
    
    }
    @action.bound
    setUsersApistatus(apiStatus){
        
            this.getUsersApiStatus = apiStatus;
        
    }
    @action.bound
    getUsersTodos(){
        const todoPromise = this.todoService.getTodosApi();
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setUsersApistatus,this.setUsersApiResponse)
        .catch(this.setUsersApiError)
        
    }
    
    
    
    @action.bound 
    onAddTodo(todoName){
        const todoModel = new Todo({
            id:this.id++,
            title:todoName,
            isCompleted:false})
            this.todos.unshift(todoModel)
    }
    @action.bound
    onRemoveTodo(todosObj) {
        let id = todosObj.id;

        let dupList = this.todos.slice(0);
        let index = dupList.indexOf(todosObj);
        dupList.splice(index, 1);
        this.todos = dupList.filter(eachEl => eachEl.id != id)
        console.log(this.todos.length);
        
        
        

    }
    @action
    clearStore(){
        this.init();
    }

    
    
    
}

export default TodoStores;