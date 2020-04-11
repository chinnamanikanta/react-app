import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React from 'react';
import appState from './incrDecr.js'
import appState1 from './state1.js'


@observer class Counter extends React.Component {
    
    
    handleIncre=()=>{
        this.props.store.Increament()
        this.props.store1.Increament()
    }
    handleDecre=()=>{
        this.props.store.Decreament()
                this.props.store1.Decreament()
    }
    render(){
                    {console.log("index")}
        return (



            
            <div>
            <p>Counter:{this.props.store.count}</p>
            <p>Counter1:{this.props.store1.count1}</p>
            
            <button onClick={this.handleIncre}> + </button>
            <button onClick={this.handleDecre}> - </button>
            
            </div>
            
            )
    }
    
}
export default Counter;


