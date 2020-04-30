import React from "react";
import {Provider} from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CountryDashBoardApp from './components/countryList/countriesDashBoardApp';
import Home from "./components/home";
// import EachCountryDetails from "./components/countryList/eachCountry.js";
// import EmojiGameApp from './components/EmojiGame/EmojiGameApp';
// import Counter from './components/Counter/index.js';
// import appState from './components/Counter/incrDecr.js';
// import appState1 from './components/Counter/state1.js';
import "./App.css";
// import TodosList from './components/todo-list/todoList.js';
// import TodoApp from './components/todoWithProvider/TodoApp.js';
import EventsApp from './components/Events/EventListapp'; 
// import A from './components/Page1/index.js';
import GridMemoryGame from './components/GridGame/GridMemoryGameApp'; 
// import UsersPage from './components/todoPractice/usersPage.js' 
// import UserLogin from './components/loginPage/';
import SignInECommercePage from './Authentication/components/SignUp/SignUp';
import ProductsMainPage from './E-Commerce/components/ProductPage/ProductMainPage/ProductMainPage'
// import stores from './stores';
const App = () => {
  return (
    <Provider>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      
<Route path="/event-list-app">
<EventsApp/>
</Route>


<Route path="/grid-game-app" component={GridMemoryGame}>
</Route>
<Route path="/user-login" component={SignInECommercePage}>
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
