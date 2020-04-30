import React from 'react';
import {Redirect} from 'react-router-dom';
import {Link}  from 'react-router-dom';

class Home extends React.Component {
    // gotoGridScreenIfLoggedIn = () => {
    // return (
    //     <Redirect 
    //     to = {{
    //     pathname: '/grid-game-app',
    //     }}
    //     />
    //     ) }
    //     render() {
    //         if(true) {
    //             return this.gotoGridScreenIfLoggedIn();  
    //             }
       render(){     
        return (
        
        <div>
        <nav>
        <ul>
        <li>
        <Link to="/home.js">Home</Link>
        </li>
                <li>
        <Link to="/todo-practice-app">todo-practice</Link>
        </li>

        
        <li>
        <Link to="/todoApp">todoAppList</Link>
        </li>
        
        <li>
        <Link to="/user-login">E-Commerce-Web-Site</Link>
        </li>
        

        <li>
        <Link to="/event-list-app">event-List-app</Link>
        </li>
        <li>
        <Link to="/mobx-todo-app">mobx-todo-app</Link>
        </li>
        
        <li>
        <Link to="/login-page">Grid Game App</Link>
        </li>

        </ul>
        </nav>
        </div>
        
        )
        
        ;
        }
    
}
export default Home;