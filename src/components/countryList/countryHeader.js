import React from 'react';
import CountryListHeader from './styleComponents.js';

class CountryPageHeader extends React.Component {
    onHandleClick=()=> {
        this.props.onChangeTheme();
    }
    

    
    render(){
        return (
            <CountryListHeader>
            <span className="where">Where In The World?</span>
            <button onClick={this.onHandleClick} className="light-dark-button">{this.props.onThemeOption}</button>
            
            </CountryListHeader>
            
            )
        
        
    }
    
}
export default CountryPageHeader;