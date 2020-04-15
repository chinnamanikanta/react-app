import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GameNavBar = styled.div`${tw` flex `}
color:${props=>props.selectedTheme === "Mode-Light" ? "black" : "white"};
`;

const Level = styled.span`${tw`p-2 text-lg `}`;
const ScoreTopScoreButton = styled.div`${tw` flex`}`
const TopLevel = styled.span`${tw`p-2 text-lg `}`;
const ThemeButton = styled.button`${tw`h-10 w-32 `}`;







class GridGameHeader extends React.Component {
    onChangeSelectedTheme=()=>{
        
    }
    render(){
      //ikkada GridMemeoryGame.js nundi 
      // 1) selected Theme
      // 2) level
      // 3) topLevel
      // 4) onChangeSelectedTheme function  e 4 props ravali 
       const { level,topLevel,selectedTheme,onChangeSelectedTheme,currentLevelGridCells} = this.props;
      console.log(currentLevelGridCells);
        return (
            <div>
            <GameNavBar selectedTheme={selectedTheme}>
            <TopLevel>Top-Level : {topLevel}</TopLevel>
            <Level>Level : {level}</Level>
            <ThemeButton onClick={onChangeSelectedTheme}>{selectedTheme}</ThemeButton>
            </GameNavBar>
            </div>
            )
    }
    
}
export default GridGameHeader;