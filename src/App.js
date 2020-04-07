import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDashBoardApp from './components/countryList/countriesDashBoardApp.js';
import Home from "./components/home.js";
// import EachCountryDetails from "./components/countryList/eachCountry.js";
import EmojiGameApp from './components/EmojiGame/EmojiGameApp.js';
import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
<Route path="/countryList" >
        <CountryDashBoardApp/></Route>
<Route path="/emojiGame">
<EmojiGameApp/>
</Route>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
};


export default App;
