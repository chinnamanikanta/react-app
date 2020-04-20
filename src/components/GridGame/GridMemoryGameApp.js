import React from 'react';
import {observable} from 'mobx';
import {observer} from "mobx-react";
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import themeStore from '../../stores/ThemeStore/';
import gameStore from '../../stores/GridGameStore/';
import GridGameHeader from './GridHeader';
import GameField from './GridGameField';
import GameResult from './GridGameResult.js';

//tailwind-@emotions-css

const GameBody = styled.div`${tw`flex justify-center items-center flex-col min-h-screen`}
background-color:${props=>props.selectedTheme === "Mode-Dark"? "#25383C" : "white"}
`;

//React-mobx-functionality

@observer
class GridMemoryGame extends React.Component {
    componentDidMount(){
        gameStore.setGridCells();
    }
    render(){
        const {selectedTheme,onChangeSelectedTheme} = themeStore;
        const {level,topLevel,currentLevelGridCells,numOfGrids,onCellClick} = gameStore; 
        
        return (
            <GameBody selectedTheme={selectedTheme}>
            <GridGameHeader currentLevelGridCells = {currentLevelGridCells} selectedTheme={selectedTheme} onChangeSelectedTheme={onChangeSelectedTheme} level={level} topLevel={topLevel} />
           {gameStore.isGameCompleted === false ?
            <GameField currentLevelGridCells={currentLevelGridCells} numOfGrids={numOfGrids} onCellClick={onCellClick}/>
            : <GameResult selectedTheme={selectedTheme}/>}
            </GameBody>
            )
    }
}
export default GridMemoryGame;