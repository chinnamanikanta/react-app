import React from 'react';
import {observable} from 'mobx';
class EachCell extends React.Component {
    @observable shouldShowHiddenCells;
    @observable isClickedOnCell;
    
    componentDidMount(){
        
    }
    onClickCell=()=>{
        
    }
    
    render(){
        // dhiniki props 
        // 1) cell object 
        // 2) selectedTheme 
        // 3) onCellClick
        // 4) level
        return (
            <div>
            </div>
            
            )
    }
    
    
}
export default EachCell;