import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import gameStore from '../../stores/GridGameStore/';

//tailwind-css
const Result = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:auto;

`;
const Levels = styled.div`
color:blue;
font-size:30px;

`;
const Message = styled.div`
color:green;
font-size:30px
`;
const PlayAgainButton = styled.button`
background-color:blue;
color:white;
font-size:20px;
text-align:center;
height:40px;
width:150px;

`;

//React-mobx-functionality

class GameResult extends React.Component {
    
    render(){

        return (
            <Result>
            
            <Levels>{gameStore.level}</Levels>
            <Message>Contratulatons! You Completed All The Levels</Message>
            <PlayAgainButton onClick={gameStore.onPlayAgainClick}>Play Again </PlayAgainButton>
            </Result>
            )
    }
}
export default GameResult;