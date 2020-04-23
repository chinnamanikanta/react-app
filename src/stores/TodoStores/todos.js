import React from 'react';
import {observable,computed} from 'mobx';
import {action} from 'mobx';

class Todo {
    @observable title;
    @observable isCompleted;
    @observable id;

    constructor(props){
        this.title = props.title;
        this.isCompleted = props.isCompleted;
        this.id=props.id;
        
        
        
    }


    @action.bound
    updateTitle(updateName){
        this.todoName=updateName
        
    }
    

}

// const todo = new Todo();

export default Todo;