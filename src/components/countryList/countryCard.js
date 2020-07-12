import React from "react";
import { withRouter } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class CountryCard extends React.Component {
  onHandleClick = () => {
    const { country, history, countries } = this.props;

    history.push(`country-dashboard-app/${country.alpha3Code}`, {
      country,
      countries,
    });
  };

  render() {
    const { country } = this.props;
    return (
      <div onClick={this.onHandleClick} className="each-country">
        <div className="img-country">
          <LazyLoadImage src={country.flag} effect="blur" />
          {/* <img
            src={country.flag}
            loading="lazy"
            alt="countryImage"
            className="image"
          /> */}
        </div>
        <div>{country.name}</div>
        <br />
        <div>Population: {country.population}</div>
        <div>Region: {country.region}</div>
        <div>Capital: {country.capital}</div>
      </div>
    );
  }
}
export default withRouter(CountryCard);
