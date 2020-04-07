import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import {Greet} from './Greetings.js';
import FavouriteDessert from './FavDessert';
import VisitedCity from './VisitedCities';
import YourStat from './YourState';
import DisabledBtn from './DisableButton';
class FormComponent extends React.Component {
    
render(){
  return (
  <Router>
      <div>
        <nav>
          <ul>
          <li>
          <Link to="/Greetings">Greetings</Link>
          </li>
            <li>
              <Link to="/favd">Favourite Dessert</Link>
            </li>
                        <li>
              <Link to="/cities">VisitedCities</Link>
            </li>
            
                        <li>
              <Link to="state">Your State</Link>
            </li>
            
                        <li>
              <Link to="/disablebtn">Disable Button</Link>
            </li>
            
            
          </ul>
        </nav>
         <Switch>
        <Route path="/Greetings">
        <Greet />
        </Route>
        <Route path="/favd">
        <FavouriteDessert/>
        </Route>
    
                <Route path="/cities">
        <VisitedCity/>
        </Route>
                <Route path="/state">
        <YourStat/>
        </Route>
                <Route path="/disablebtn">
        <DisabledBtn/>
        </Route>
        
        
        </Switch>
        
        
</div>
         
    </Router>
  );
}
}
// function Greeting(){
//     return(

//         <div>
//         <h1>Greetings</h1>
//             <Greet/>
//             </div>
        
//               );
// }


export default FormComponent