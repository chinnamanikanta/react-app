import React from 'react';
/*global ReactDOM*/
class MyComponent extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="app">
            
            <div>
            <span>First Name</span>
            <input type="text"/>
            </div>
            
            <div>
            <span>Last Name</span>
            <input type="text"/>
            </div>
            
            <div>
            <span>Email</span>
            <input type="text"/>
            </div>
            
            <div>
            <span>Phone no</span>
            <input type="text"/>
            </div>
            
            <div>
            <span></span>
            <input type="text"/>
            </div>
            
            
            </div>
            
            )
    }
}
ReactDOM.render(MyComponent,document.getElementById('root'));