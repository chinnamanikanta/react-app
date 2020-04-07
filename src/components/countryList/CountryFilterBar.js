import React from 'react';
import SearchText from './searchText.js';
import SearchByRegion from './searchByRegion.js';


class CountryFilterBar extends React.Component {

    render(){
        const {filterByName} = this.props;
        const {filterByRegion} = this.props;
        return (
            <div>
            <SearchText filterByCountry={filterByName}/>
            <SearchByRegion filterByRegion={filterByRegion}/>
            </div>
            
            
            )
    }
}
export default CountryFilterBar;