import React from 'react';
import {Link}  from 'react-router-dom';

export default function Home(){
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
        <Link to="/event-list-app">event-List-app</Link>
        </li>
        <li>
        <Link to="/mobx-todo-app">mobx-todo-app</Link>
        </li>
        
        <li>
        <Link to="/grid-game-app">Grid Game App</Link>
        </li>

        </ul>
        </nav>
        </div>
        
        );
    
}