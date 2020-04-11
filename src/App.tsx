import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDashBoardApp from './components/countryList/countriesDashBoardApp.js';
import Home from "./components/home.js";
// import EachCountryDetails from "./components/countryList/eachCountry.js";
import EmojiGameApp from './components/EmojiGame/EmojiGameApp.js';
// import Counter from './components/Counter/index.js';
// import appState from './components/Counter/incrDecr.js'
// import appState1 from './components/Counter/state1.js'
import "./App.css";
import TodosList from './components/todo-list/todoList.js'
// import TodoApp from './components/mobx-react-todoList/TodoApp.js';
// import EventsApp from './components/Events/EventListapp.js'; 
// import A from './components/Page1/index.js';
 
 
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>

      <Route exact path="/todo-list">
      <TodosList/>

      </Route>

      
      
      
<Route path="/countryList" >
        <CountryDashBoardApp/></Route>
<Route path="/emojiGame">
<EmojiGameApp/>
</Route>
      <Route exact path="/events-list">
      <EventsApp/>
      </Route>


        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
};


export default App;
