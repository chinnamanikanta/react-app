import React from 'react';
class YourStat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stateList:["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"],
            selectedState:"",
            updatedState:""
        }
    }
    handleChange=(event)=>{
        this.setState({
            selectedState:event.target.value
        })
    }
    onSubmit=()=> {
        if(this.state.selectedState!=="")
        {
            this.setState({
                updatedState:`I am From "${this.state.selectedState}" state`
            })
        }
        else{
            this.setState({
                updatedState:null
            })
        }
    }
    render(){
        return (
            <div>
            <select onChange={this.handleChange}>
            {this.state.stateList.map((item,index)=> {
               return (
               <option key={index} value={item}>{item}</option>
               ); 
            })}
            </select>
            <button type="submit" onClick={this.onSubmit}>Submit</button>
            <h1>{this.state.updatedState}</h1>
            </div>
            )
    }
}
export default YourStat;