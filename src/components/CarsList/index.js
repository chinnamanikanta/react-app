import React from 'react';
class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status:"Stopped",
            speed:0
        };
        this.onStartOrStop = this.onStartOrStop.bind(this);
        this.onAccelerate = this.onAccelerate.bind(this);
        this.onApplyBrake = this.onApplyBrake.bind(this);
        
    }
    onStartOrStop(){

        if(this.state.status === "Stopped")
        {
        this.setState({
            status:"Running",
        });
                
     
        }
        else{
        this.setState({
            status:"Stopped",
            speed:0
        });
    
        }
        
        
    }
    onApplyBrake(){
      if(this.state.status !== "Stopped"){
          
        this.setState({
          
            speed:this.state.speed - 10,
            status:`Running ${this.state.speed} KMPH `
           
            
        });
        if(this.state.speed <=0 ){
            
        this.setState({
          
            speed:0,
            status:`Running`
            
        });
        }
      }  
    }
    onAccelerate(){
        if(this.state.status !== "Stopped")
        {
                this.setState({
            speed:this.state.speed + 10,
            status:`Running ${this.state.speed} KMPH `

                });
        }
        
    }
    render() {
         return (
            <div className="main-id">
            <button type="button" className={this.state.status === "Stopped"? "start":"stop"} onClick={this.onStartOrStop}>{this.state.status === "Stopped"? "start" : "stop"}</button>
        <div className="status" id="carStatus">status: {this.state.status}</div>
            <div className="accelerate-deaccelerate">
                <button type="button" className={this.state.status === "Stopped"? "accelerate" : "modify-accelerate"} onClick={this.onAccelerate}>Accelerate</button>
                <button type="button" className={this.state.speed > 0 ? "modify-decelerate" : "de-accelerate"} onClick={this.onApplyBrake}>Apply Brake</button>
            </div>
        </div>
     );
        }
    }

export { Car };