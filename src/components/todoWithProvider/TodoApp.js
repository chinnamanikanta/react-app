import React from 'react';
import {observer,inject} from 'mobx-react';
import UserInput from './userInput.js';
import TodoList from './TodoList.js';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import "./todos.css";
import NoDataView from '../common/NoDataView/';



@inject('todoStore')
@observer
class TodoApp extends React.Component {
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    doNetworkCalls=()=>{
        this.props.todoStore.getUsersTodos();
    }

    rendersUsersList=()=> {
         const {todos} = this.props.todoStore;
         if (todos.length === 0){
             <NoDataView/>
         }

         return <TodoList todos = {todos} removeTodo={this.removeTodo}/>
       
        
    }
    removeTodo=(eachTodo)=>{
        this.props.todoStore.onRemoveTodo(eachTodo)
        
    }
    addTodo=(todoName)=> {
        this.props.todoStore.onAddTodo(todoName);
        
    }
    
    
    render(){
         const {getUsersApiStatus,getUsersApiError,todos} = this.props.todoStore
         
        return (
            
            <div>
            <UserInput addTodo = {this.addTodo}/>


              <LoadingWrapperWithFailure 
                key ={todos}
                apiStatus = {getUsersApiStatus}
                apiError = {getUsersApiError}
                onRetryClick = {this.doNetworkCalls}
                renderSuccessUI = {this.rendersUsersList}
                
                
                />
                
            
</div>
            
            )
    }
}
export default TodoApp;