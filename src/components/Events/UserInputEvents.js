import React from 'react';
import EventsApp from './EventListapp';


class UserInputEvents extends React.Component{
  
  state={
    userEventName:"",
    userEventLocation:""
  }
  onHandle=(event)=>{
    this.setState({userEventName:event.target.value})
  }
  onHandle1=(event)=>{
    this.setState({userEventLocation:event.target.value});
  }
  onAddEvents=(event)=>{

    this.props.addEvents(this.state.userEventName,this.state.userEventLocation);
    this.setState({userEventName:"",userEventLocation:""});
    
  }
  
    
    render(){
        return (
        <div className="border border-gray-600 flex justify-center ">
        <div> 

        <div className="mb-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="EventName" onChange={this.onHandle} value={this.state.userEventName}>
    </input>
    </div>
    
    <div className="mb-6">
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={this.onHandle1} placeholder="EventLocation" value={this.state.userEventLocation}>
      </input>
    </div>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.onAddEvents}>
      AddEvents
      </button>
    </div>
    </div>
    

            

            )
    }
}
export default UserInputEvents