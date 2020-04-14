import React from 'react';

import {action} from 'mobx';
import {observer} from 'mobx-react';
import todoStore from '../../stores/TodoStores/todoStores';
import './todos.css';
@observer class TodoList extends React.Component {
    @action.bound
    updateTodoTite(event){
        this.props.updateTitle(event.target.value);
        
        
    }

    
    
    render(){
        // const {todos} = this.props
        
        
        const {todos} = todoStore;
        return(
            <div>
            
            {todos.map((eachTodo)=> 
            
            <div className="list-of-todos">

            <input className="check-box" type="checkbox"/>
            <input type="text" defaultValue={eachTodo.todoName} onChange={this.updateTodoTite}/>
            <button onClick={()=>this.props.removeTodo(eachTodo)} className="cancel">X</button>
            </div>
            )}
          
          </div>
            
            )
        
    }
    
}
export default TodoList;