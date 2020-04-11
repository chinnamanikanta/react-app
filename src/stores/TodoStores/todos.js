import React from 'react';
import {observable,computed} from 'mobx';
import {action} from 'mobx';

class Todo {
    @observable todoName;
    @observable isCompleted;
    @observable selectedFilter;
    constructor(props){
        this.todoName=props.todoName;
        this.isCompleted = props.isCompleted;
        this.selectedFilter = props.selectedFilter;
        
    }
    @action.bound
    updateTitle(updateName){
        this.todoName=updateName
        
    }
    

}

// const todo = new Todo();

export default Todo;