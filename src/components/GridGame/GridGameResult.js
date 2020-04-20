import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import gameStore from '../../stores/GridGameStore/';
import gameLevels from './data.js';

//tailwind-@emotions-css

const Result = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:auto;
width:${props=>props.gridSize}px;
height:${props=>props.gridSize}px;
`;

const Levels = styled.div`
color:blue;
font-size:40px;
`;

const Message = styled.div`
color:green;
font-size:30px
width:500px;
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
        const {level} = gameStore;

        return (
            <Result gridSize={gameLevels[level].gridWidth}>
            
            <Levels>{gameStore.level}</Levels>
            <Message>Contratulatons! You Completed All The Levels</Message>
            <PlayAgainButton onClick={gameStore.onPlayAgainClick}>Play Again </PlayAgainButton>
            </Result>
            )
    }
}
export default GameResult;