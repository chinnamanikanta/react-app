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
        
        
        const {todos} = this.props;

        return(
            <div>
            
            {todos.map((eachTodo)=> 
             <div className="list-of-todos">

            <input className="check-box" type="checkbox" checked={eachTodo.isCompleted} />
            <input type="text" defaultValue={eachTodo.title} onChange={this.updateTodoTite}/>
            <button onClick={()=>this.props.removeTodo(eachTodo)} className="cancel">X</button>
            </div>
          
            )}
          
          </div>
            
            )
        
    }
    
}
export default TodoList;