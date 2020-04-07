import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const Main = styled.div`${tw`h-screen m-auto` }
background-color:#E5FFFF
`;
const Score = styled.div`${tw`text-4xl font-serif` }`;
const GameState = styled.div`${tw`` }`;
const PlayAgain = styled.button`${tw`bg-indigo-500 text-white h-8` }`;
class EmojiResult extends React.Component {
    render(){
        const {score,gameState,onPlayAginButton}=this.props
        return (
            <Main>
            <Score>{score}</Score>
            <GameState>{gameState}</GameState>
            <PlayAgain onClick={onPlayAginButton}>Play Again</PlayAgain>
            </Main>
            
            )
    }
}
export default EmojiResult;