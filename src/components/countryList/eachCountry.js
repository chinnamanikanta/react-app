import React from 'react';
import BackButton from '../navigationButtonsg/navigations.js';
// import CountryPageHeader from "./countryHeader.js";
import {withRouter} from 'react-router-dom'

import CountryPageHeader from "./countryHeader.js";
class EachCountryDetails extends React.Component{
    state = {
        country:this.props.location.state.country,
        countries:this.props.location.state.countries
    }
    handleClick=country=> {
        //   const {history}=this.props;
        //   const { countries } = this.props.location.state;
        // history.push(`country-dashboard-app/${country.alpha3Code}`,{country,countries});
        this.setState({country:country});
    }
    
    render() {
        console.log(this.state);
        const {country,countries} = this.state
         let borderCountries = countries.filter(eachCountry => country.borders.indexOf(eachCountry.alpha3Code)> -1)
        return <div className={this.props.onThemeOption}>
          <CountryPageHeader onChangeTheme={this.props.onChangeTheme} onThemeOption={this.props.onThemeOption}/>
        <div>
        <BackButton/>
        </div>
        <div className="main">
        <img src={country.flag} className="country-details-img" alt="country"/>
    <div className="another-side">
        <div className="country-details-another-side">
        <h4><b>{country.name}</b></h4>
        <br/>
        <p><b>Native Name:</b> {country.nativeName}</p>
        <p><b>Population:</b> {country.population}</p>
        <p><b>Region:</b> {country.region}</p>
        <p><b>Sub Region:</b> {country.subregion}</p>
        <p><b>Capital:</b> {country.capital}</p>
        
       
        </div>
        <div className="middle">
        <p><b>Top Level Domain:{country.topLevelDomain}</b></p>
        <p><b>Currencies: {country.currencies.map(curr=> curr.name).join(',')}</b></p>
        <p><b>Langueges:{country.languages.map(lang=>lang.name).join(',')}</b></p>
        
        </div>
        </div>
    
    
        </div>
        <div className="borders">
        <div><b>Border Countries:</b></div>
        <div>{borderCountries.map(eachCountry => <button className="country-btn" onClick={event=>this.handleClick(eachCountry)} key={eachCountry.name}>{eachCountry.name}</button>)}
        </div>
        </div>
        </div>
    }
    
}
export default withRouter(EachCountryDetails);