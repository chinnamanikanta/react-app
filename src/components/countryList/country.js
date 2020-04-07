import React from 'react';
import CountryCard from './countryCard.js';
class Country extends React.Component {
    render(){
        const {Countries} = this.props;
        return (
    <div id="country-list">
        {Countries.map((eachCountry)=> <CountryCard key={eachCountry.name} country={eachCountry} onClickEachCountry={this.props.onClickEachCountry} countries={Countries}/>)}
        </div>
            )
    }
}
export default Country;