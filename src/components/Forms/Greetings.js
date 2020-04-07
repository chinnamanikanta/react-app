import React from 'react';


class Greet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            userOutput:''
        }
    }
    onChangeButton = (event) =>{
        this.setState({
            userInput:event.target.value
            
        })
        
    }
    submit = (event) =>{
        event.preventDefault();
        if(this.state.userInput === "")
        alert("plase Enter Your valid Name");
        else{
            this.setState({
                userOutput:`Hello ${this.state.userInput}, Have a nice day `,
                userInput:''
            
            })
        }
    }
    render(){
        return(
            <div>
            <form onSubmit={this.submit}>
            <input type="text" id="id1" onChange={this.onChangeButton} value={this.state.userInput}/>
            <button type="submit">Greet</button>
            </form>
            <h2>{this.state.userOutput}</h2>
            
            </div>

            );
    }
    }
 
export {Greet};