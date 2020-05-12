import React from "react";
import {Provider} from 'mobx-react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import "./App.css";

import EventsApp from './components/Events/EventListapp'; 
import GridMemoryGame from './components/GridGame/GridMemoryGameApp'; 
import SignInRoute from './Authentication/components/SignUp/SignInRoute';
import ProductsMainPage from './E-Commerce/components/ProductPage/ProductMainPage/ProductMainPage'
import authStore from './Authentication/';
import Practice from './components/mobxPractice/Practice.js';

const App = () => {
  return (
    <Provider authStore = {authStore}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
<Route path="/event-list-app">
<EventsApp/>
</Route>
<Route path="/practice">
<Practice/>
</Route>
<Route path="/grid-game-app" component={GridMemoryGame}>
</Route>
<Route path="/user-login" component={SignInRoute}>
</Route>
<Route path="/product-page" component={ProductsMainPage}>
</Route>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
    </Provider>
  );
};


export default App;
