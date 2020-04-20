import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import gameStore from '../../stores/GridGameStore/'
import gameLevels from './data.js';

// tailwind-@emotions-css

const GameNavBar = styled.div`${tw`flex flex-col items-center `}
color:${props=> props.selectedTheme === "Mode-Light" ? "black" : "white"};
width:${props=>props.gridSize}px;
`;
const Level = styled.div`${tw`p-2 text-xl`}`;
const TopLevel = styled.div`${tw`text-xl`}`;
const ThemeButton = styled.button`${tw`h-10 w-32 text-xl m-4`}
border:${props=> props.selectedTheme === "Mode-Light" ? "1px solid black" : "1px solid white"};
`;
const LevelButton = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:${props=>props.gridSize}px;
`;
const ButtonDiv = styled.div``;

//React-mobx-funtionality


class GridGameHeader extends React.Component {
    
    render(){

       const { selectedTheme,onChangeSelectedTheme,currentLevelGridCells} = this.props;
       const {level} = gameStore;

        return (
            <div>
            <GameNavBar selectedTheme={selectedTheme}
            gridSize={gameLevels[level].gridWidth} >
            <TopLevel>Top-Level : {gameStore.topLevel}</TopLevel>
            <LevelButton gridSize={gameLevels[level].gridWidth}>
            <Level>Level : {gameStore.level}</Level>
            <ButtonDiv>
            <ThemeButton 
            onClick={onChangeSelectedTheme} selectedTheme={selectedTheme}>{selectedTheme}</ThemeButton>
                        </ButtonDiv>
            </LevelButton>
            </GameNavBar>
            </div>
            )
    }
    
}
export default GridGameHeader;