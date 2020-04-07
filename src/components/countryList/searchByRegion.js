import React from 'react';
class SearchByRegion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    handleChange=(event)=>{
        
        this.props.filterByRegion(event.target.value);
    }
        
    
    render(){
        return (
        <label>
        <select onChange={this.handleChange} className="select">
        <option>All</option>
                <option>Africa</option>
                        <option>Americas</option>
                                <option>Asia</option>
                                        <option>Europe</option>
                                            <option>Oceania</option>
        </select>
        </label>
            )
        
    }
}
export default SearchByRegion;