import React from "react";
/*global fetch*/
import Country from "./country";
import CountryPageHeader from "./countryHeader.js";
import CountryFilterBar from "./CountryFilterBar.js";

class CountryDashBoardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filtered: [],
      selectedRegion: "All",
      selectedCountry: null,
      countryName: "",
    };
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((results) => results.json())
      .then(this.getCountries);
  }

  getCountries = (countries) => {
    this.setState({ countries: countries, filtered: countries });
  };
  filterCountriesByRegion = (region) => {
    const { countries, countryName } = this.state;
    if (countryName === "" && region === "All") {
      this.setState({
        filtered: countries,
        selectedRegion: "All",
      });
    } else if (region === "All") {
      this.setState({
        filtered: countries.filter((eachCountry) =>
          eachCountry.name.includes(countryName)
        ),
        selectedRegion: "All",
      });
    } else {
      this.setState({
        filtered: countries.filter(
          (eachCountry) =>
            eachCountry.region === region &&
            eachCountry.name.includes(countryName)
        ),
        selectedRegion: region,
      });
    }
  };
  onClickEachCountry = (country) => {
    this.setState({ selectedCountry: country });
  };

  filterCountriesByName = (countryByName) => {
    const { countries, selectedRegion } = this.state;
    if (countryByName === "" && selectedRegion === "All") {
      this.setState({ filtered: countries, countryName: "" });
    } else if (selectedRegion === "All") {
      countryByName =
        countryByName[0].toUpperCase() +
        countryByName.slice(1, countryByName.length);
      let filteredCountries = countries.filter((country) =>
        country.name.includes(countryByName)
      );
      this.setState({
        filtered: filteredCountries,
        countryName: countryByName,
      });
    } else {
      countryByName =
        countryByName[0].toUpperCase() +
        countryByName.slice(1, countryByName.length);
      let filteredCountries = countries.filter(
        (country) =>
          country.name.includes(countryByName) &&
          country.region === selectedRegion
      );
      this.setState({
        filtered: filteredCountries,
        countryName: countryByName,
      });
    }
  };

  render() {
    return (
      <div className={this.props.onThemeOption}>
        <CountryPageHeader
          onChangeTheme={this.props.onChangeTheme}
          onThemeOption={this.props.onThemeOption}
        />

        <CountryFilterBar
          filterByName={this.filterCountriesByName}
          filterByRegion={this.filterCountriesByRegion}
        />
        {this.state.countries.length > 0 ? (
          <Country
            Countries={this.state.filtered}
            onClickEachCountry={this.onClickEachCountry}
          />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default CountryDashBoardApp;
