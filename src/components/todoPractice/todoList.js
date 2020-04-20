import React from 'react';

class EachTodo extends React.Component {
    render(){
     
        return (
            <div style={{display:'flex' }}>
            <div>{this.props.eachTodo.id}</div>
            <div>{this.props.eachTodo.title}</div>
            <div>{this.props.eachTodo.isCompleted}</div>
            </div>
            
            )
    }
}
export default EachTodo;