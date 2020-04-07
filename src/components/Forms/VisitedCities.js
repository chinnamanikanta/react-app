import React from 'react';
class VisitedCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedArray : [],
            cities:["Hyderabad","Chennai","Bangalore","Pune","Mumbai","Delhi"],
            ShowMessage:""
        }
    }
    handleChange=(event)=> {
        if(event.target.checked) {
            let value = this.state.updatedArray.slice(0);
            value.push(event.target.value);
            this.setState({updatedArray:value});
        }
        if(!event.target.checked) {
            let value = this.state.updatedArray.slice(0);
            let unCheckValues = value.filter((item)=> item!==event.target.value);
            this.setState({
                updatedArray:unCheckValues,
                
            })
            
        }
        
    }
    onSubmit = () => {
        if(this.state.updatedArray.length>0){
            this.setState({
                ShowMessage:`I visited These Cities ${this.state.updatedArray}`
            })
        }
        else{
            this.setState({
                ShowMessage:""
            })
        }
    }
    renderList=()=>{
         let Items = this.state.cities.map((Item)=>{
         return( <div>
           <input type="checkbox" name={Item} onChange={this.handleChange} value={Item}/>
           <label>{Item}</label> 
        </div>)
        })
        return Items;
    
    }
    render(){
        return(
            <div>
            <h2>What is Your Favourite City</h2>
            {this.renderList()}
            <button type="submit" onClick={this.onSubmit}>Make Your City</button>
           <h1>{this.state.ShowMessage}</h1>
            </div>
            )
    }
    
}
export default VisitedCity;