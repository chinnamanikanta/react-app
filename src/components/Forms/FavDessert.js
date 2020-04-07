import React from 'react';

class FavouriteDessert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            DessertList:["Vennila","ButterScotch","gulab jamum","yoghurt Pots","Baked Banana","Chocolate"],
            selectedDessert:'',
            updateDesert:'',
            count:0
            
            
        }
    }
    handleChange = (event) => {
        alert(event.target.value)
        this.setState({
            selectedDessert:event.target.value
            
        })
    }
    renderList=()=>{
        let Items = this.state.DessertList.map((Item)=>{
         return( <div>
           <input type="radio" name="item" onChange={this.handleChange} value={Item}/>
           <label>{Item}</label> 
        </div>)
        })
        return Items;
    }
    Submit = (event) =>{
        event.preventDefault();
        if(this.state.selectedDessert === "")
        alert("plase Enter Your valid Name");
        else{
            this.setState({
                updateDesert:`My favariout Dessert is ${this.state.selectedDessert}`,
                selectedDessert:''
            
            }) 
        }
    }
    render() {
        return (
            <div>
        {this.renderList()}   
       <button type="Button" onClick={this.Submit}>Make Your Wish</button>
       <h1>{this.state.updateDesert}</h1>
      
       </div>
                   )
    }
}
export default FavouriteDessert;

    