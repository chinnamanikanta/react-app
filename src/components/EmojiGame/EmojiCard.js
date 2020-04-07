import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Emoji = styled.div`${tw`shadow w-56 h-64 m-4 shadow-custom`}
color:${props=>props.selectedTheme === "Light Theme" ? "black" : "white"};
background-color:${props=>props.selectedTheme === "Light Theme"? "white" : "#2b6cb0"}

`;
const EmojiImage = styled.img`${tw`h-32 `}`;
const EmojiName=styled.div`${tw`text-base text-center`}`;

class EmojiCard extends React.Component {
    
    render(){
    const {emojiDetails,selectedTheme,onEmojiClick} = this.props;
        return (

            <Emoji selectedTheme={selectedTheme} onClick={()=>onEmojiClick(emojiDetails.id)}>
            <EmojiImage src={emojiDetails.image}></EmojiImage>
            <EmojiName>{emojiDetails.name}</EmojiName>

            
            </Emoji>
            ) 
    }
}
export default EmojiCard;