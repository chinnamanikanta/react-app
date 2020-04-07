import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojiNavBar = styled.div`${tw`p-8 flex justify-between items-center shadow-lg flex-wrap`}
color:${props=>props.selectedTheme === "Light Theme" ? "black" : "white"};
background-color:${props=>props.selectedTheme === "Light Theme"? "white" : "#1a202c"}
`;

const GameTitle = styled.h1`${tw` text-xl`}`;

const Score = styled.span`${tw`p-2 text-lg `}`;
const ScoreTopScoreButton = styled.div`${tw` flex`}`
const TopScore = styled.span`${tw`p-2 text-lg `}`;
const ThemeButton = styled.button`${tw`h-10 w-32 `}
border:${props=>props.selectedTheme === "light theme"? "1px solid black":"1px solid white"}
`;

class EmojiGameHeader extends React.Component {
    render(){
        const {score,topScore,selectedTheme,onChangeTheme} = this.props
        return (
            <EmojiNavBar selectedTheme={selectedTheme}>
            <GameTitle>EmojiGame</GameTitle>
            <ScoreTopScoreButton>
            <Score>Score:{score}</Score>
            <TopScore>TopScore:{topScore}</TopScore>
            <ThemeButton selectedTheme={selectedTheme} onClick={onChangeTheme}>{selectedTheme}</ThemeButton>
            </ScoreTopScoreButton>
            </EmojiNavBar>
            
            )
    }
}
export default EmojiGameHeader;