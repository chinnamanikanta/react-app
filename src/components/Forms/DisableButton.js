import React from 'react';
class DisabledBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isDisableButtonChecked:false,
            showMessage:""
        }
    }
    handleChange=(event)=>{
        if(event.target.checked){
            this.setState({
                showMessage:`I am Disabled`
                
            })
            
            
        }
        else {
            this.setState({
                showMessage:null
            })
        }
    }
    onSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            showMessage:`Hi I am Enabled`
        })
        
        
    }
    render(){
        return (
            <div>
            
            <input type="checkbox" onChange={this.handleChange} value="Disabled" />
            <button type="submit" onClick={this.onSubmit}>Click Me</button>
            
            <h4>{this.state.showMessage}</h4>
            
            </div>
            
            )
    }
}
export default DisabledBtn