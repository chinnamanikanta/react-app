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
        <Link to="/countryList">CountryList</Link>
        </li>
        <li>
        <Link to="emojiGame">EmojiGameApp</Link>
        </li>
        </ul>
        </nav>
        </div>
        
        )
    
}