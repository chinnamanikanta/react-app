import React from 'react';
import {observable} from 'mobx';
import {observer} from "mobx-react";
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import themeStore from '../../stores/ThemeStore/'
import gameStore from '../../stores/GridGameStore/'
import GridGameHeader from './GridHeader';
import GameField from './GridGameField';

const GameBody = styled.div`${tw``}
background-color:${props=>props.selectedTheme === "Mode-Dark"? "black" : "white"}
`;
@observer
class GridMemoryGame extends React.Component {
    componentDidMount(){
        gameStore.setGridCells();
    }
    render(){
        const {selectedTheme,onChangeSelectedTheme} = themeStore;
        const {level,topLevel,currentLevelGridCells} = gameStore; 
        
        return (
            <GameBody selectedTheme={selectedTheme}>
            <GridGameHeader currentLevelGridCells = {currentLevelGridCells} selectedTheme={selectedTheme} onChangeSelectedTheme={onChangeSelectedTheme} level={level} topLevel={topLevel} />
            <GameField currentLevelGridCells={currentLevelGridCells}/>
            </GameBody>
            )
    }
}
export default GridMemoryGame;