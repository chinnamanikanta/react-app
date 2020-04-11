import React from 'react';
// import {observer} from 'mobx-react';
import {observable,action} from 'mobx';
import './todos.css'
class UserInput extends React.Component {
    constructor(props){
        super();
        this.state={
        userInput:""
    }
    }
     
    @action.bound
    onChangeInput(event){
            this.setState({userInput:event.target.value});
            
    }
    @action.bound
    onSubmit(event){
        event.preventDefault();
        this.props.addTodo(this.state.userInput);
        this.setState({
            userInput:""
            
        });
    }
    render(){
        return (
             <form onSubmit={this.onSubmit}>
            <input className="user-input-todo" onChange={this.onChangeInput} value={this.state.userInput}type="text" placeholder="What needs to be done?"/>
            </form>
            
            )
    }
}


export default UserInput;








