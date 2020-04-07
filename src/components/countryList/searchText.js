import React from 'react';

class SearchText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput:""
        }
    }
    onHandleChange=(event)=>{
        this.setState({
        userInput:event.target.value,    
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
            this.props.filterByCountry(this.state.userInput);
        
        
    }
    render(){

        return (
        <form onSubmit={this.onSubmit}>    
            <input type="text" placeholder="enter country" className="Input" onChange={this.onHandleChange}/>
            </form>
            )
    }
    
}
export default SearchText;