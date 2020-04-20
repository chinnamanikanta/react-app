import {observable,action} from 'mobx';
import EachTodoModel from './EachModel.js';

class TodoStore {
    @observable todoList=[];

    
        // todos.map((eachTodo)=> this.todoList.push(new EachTodoModel({id:eachTodo.id,title:eachTodo.title,isCompleted:eachTodo.isCompleted})));

        
     
        
 
    
    
    
}
const todos = new TodoStore();
export default todos;