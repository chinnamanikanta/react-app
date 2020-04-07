import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
// import EmojiFooter from "./components/EmojiGame/EmojiFooter.js";
import EmojiCard from "./EmojiCard.js";
import EmojiGameHeader from "./EmojiGameHeader.js";

import EmojiResult from "./EmojiResult.js";
const EmojiCardList = styled.div`${tw`flex flex-wrap mr-4`}
background-color:${props=>props.selectedTheme === "Light Theme" ? "#E5FFFF" : "black"}

`;
class EmojiGameApp extends React.Component {
        
        emojisId=0;
        state = {
            score:0,
            modifiedScore:0,

            topScore:0,
            emojis:[
            {id:this.emojisId += 1,isClicked:false,name:"Exploding Head",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png"},    
             {id:this.emojisId += 1,isClicked:false,name:"Grinning Face With Sweat",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png"},
              {id:this.emojisId += 1,isClicked:false,name:"Smiling Face With Heart-Eyes",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png"},
               {id:this.emojisId += 1,isClicked:false,name:"Smirking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png"},
                {id:this.emojisId += 1,isClicked:false,name:"Thinking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png"},
                 {id:this.emojisId += 1,isClicked:false,name:"Winking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png"},
                  {id:this.emojisId += 1,isClicked:false,name:"Grinning Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png"},
                   {id:this.emojisId += 1,isClicked:false,name:"Crying Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png"},
                    {id:this.emojisId += 1,isClicked:false,name:"Astonished Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png"},
                     {id:this.emojisId += 1,isClicked:false,name:"Face With Tears Of Joy",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png"},
                      {id:this.emojisId += 1,isClicked:false,name:"Star-Struck",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png"},
                       {id:this.emojisId += 1,isClicked:false,name:"Winking Face With Tongue",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png"}
                
                ],
            gameState:'PLAYING',
            selectedTheme:"Light Theme"
            
        
        }
        onEmojiClick=(id)=> {
         this.ShuffleImages();
         this.ClickingAfterRenderProcess(id)
        }
        ClickingAfterRenderProcess=(id)=>{
        
         this.state.emojis.forEach(emoji=> {
          if(id===emoji.id && emoji.isClicked===false) {
           emoji.isClicked=true;
           this.setState({gameState:'PLAYING'})
           this.ScoreIncreament();
          }
          else if(id===emoji.id && emoji.isClicked===true)
          { 
             const{topScore,score}=this.state
           if(score === 12){
                 this.setState({gameState:'WIN'})
           }
           else {
            this.setState({gameState:"LOSE"})
            
           
                 
            
          }
          }
         })
         
        }
        ScoreIncreament=()=>{
         this.setState({score:this.state.score+1})
        }
        ShuffleImages=()=>{
         let {emojis} = this.state;
         let RandomEmojis = emojis.sort(()=>Math.random()-0.5);
         this.setState({emojis:RandomEmojis});
        }
        onChangeTheme=()=>{
         this.setState({selectedTheme:this.state.selectedTheme ===  "Light Theme" ? "Dark Theme" : "Light Theme"});
        }
        onPlayAginButton=()=>{
         const {emojis,score,topScore}=this.state
         emojis.forEach(emoji=>emoji.isClicked=false)
         if(score > topScore){
          this.setState({topScore:score,score:0,gameState:"PLAYING"})
         }
         else if(score < topScore) {
          this.setState({topScore,score:0,gameState:"PLAYING"})
         }
         else {
          this.setState({topScore,score:0,gameState:"PLAYING"})
         }

        }
        
        render(){
         const {score,topScore,emojis,selectedTheme} = this.state
            return (
                <div>
                <EmojiGameHeader score={score} topScore={topScore} selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme} />
               {this.state.gameState === 'PLAYING' ? <EmojiCardList selectedTheme={selectedTheme}> {emojis.map(emoji=> <EmojiCard id={emoji.id} emojiDetails={emoji} onEmojiClick= {this.onEmojiClick} selectedTheme={selectedTheme}/>)}</EmojiCardList> : <EmojiResult gameState={this.state.gameState} onPlayAginButton={this.onPlayAginButton} score={score}/>
              
               }
               
               
                
                
</div>

                 
                )
            
        }
    
}
export default EmojiGameApp;