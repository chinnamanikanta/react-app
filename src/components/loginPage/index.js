import React from 'react';
import {reaction} from 'mobx';
import {withRouter } from 'react-router-dom';
import {ACCESS_TOKEN} from '../../utils/StorageUtils.js'

class UserLogin extends React.Component{
    reaction1;
  
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
      
    if (ACCESS_TOKEN.length > 0) {
    
            this.props.history.replace({pathname:'/grid-game-app'})
    }
    else {
        this.props.history.push({pathname:'/login-page'});
    }
    


    
  }

    
    render(){
        return (
        <div className="border border-gray-600 flex justify-center ">
        <div> 

        <div className="mb-4">
      Enter UserName:
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter UserName" onChange={this.onHandle} value={this.state.userEventName}>
    </input>
    </div>
    
    <div className="mb-6">
      Enter Password:
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" onChange={this.onHandle1} placeholder="Enter Password" value={this.state.userEventLocation}>
      </input>
    </div>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={this.onAddEvents}>
      Login
      </button>
    </div>
    </div>
    

            

            )
    }
}
export default withRouter(UserLogin);