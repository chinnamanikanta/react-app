import React from 'react';
/*global fetch*/
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import todos from '../../stores/TodoPracticeStore/'
// import EachTodo from './todoList.js';
import Loading from './LoadingDisplay.js';
@observer
class TodoAppMobx extends React.Component {
    @observable loading = true;
    
    componentDidMount(){
fetch("https://todo-list-3.getsandbox.com/todos")
.then(response => {
  const statusCode = response.status;
  const data = response.json();
  console.log(statusCode,data);
    
})
.then(res => {
  console.log("reponse :", res); 
 }).catch(error => {
  console.error(error);
  return { name: "network error", description: "" };
});

    }

     
    

    
    
    
    render(){

        return(
            <div>
            mani 
            </div>
    
            )
    }
    
}
export default TodoAppMobx;