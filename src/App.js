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
import TodosList from './components/todo-list/todoList.js';
import TodoApp from './components/todoWithProvider/TodoApp.js';
import EventsApp from './components/Events/EventListapp'; 
// import A from './components/Page1/index.js';
import GridMemoryGame from './components/GridGame/GridMemoryGameApp'; 
import UsersPage from './components/todoPractice/usersPage.js' 
import stores from './stores';
const App = () => {
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      
<Route path="/event-list-app">
<EventsApp/>
</Route>

<Route path="/grid-game-app">
<GridMemoryGame/>
</Route>
<Route path="/todoApp">
<TodosList/>
</Route>
<Route path="/mobx-todo-app" component={TodoApp}>
</Route>

<Route path="/todo-practice-app" component={UsersPage}>

</Route>



        <Route path="/" component={Home}/>
      </Switch>
    </Router>
    </Provider>
  );
};


export default App;
