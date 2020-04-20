import React from 'react';
import {observable} from 'mobx';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from "mobx-react"
import gameStore from '../../stores/GridGameStore/';
import gameLevels from './data.js';

//tailwind-@emotions-css

const GridEachCell = styled.button`
width:${props=>((props.gridWidth-(props.numOfGrids*10))/props.numOfGrids)-2}px;
height:${props=>((props.gridWidth-(props.numOfGrids*10))/props.numOfGrids)-3}px;
background-color:${props => props.hiddenCell ? (props.eachCellHidden ? "#38a169":"#545D61"):(props.isClickedOnCell ? (props.eachCellHidden?"#38a169":"red"):"#545D61")};
margin:5px;
`;

//React-mobx-functionality

@observer
class EachCell extends React.Component {
    @observable shouldShowHiddenCells=true;
    @observable isClickedOnCell = false;
    
    time;
    afterTime;

    componentDidMount(){
        this.time = setTimeout(()=> {
            this.shouldShowHiddenCells=false;
            this.afterTime = setTimeout(()=> {
             gameStore.getToInitialLevelAndUpdateCells(); 
             this.shouldShowHiddenCells = true;
            },gameLevels[gameStore.level].gridSize * 2000)
        },gameLevels[gameStore.level].gridSize * 1000)
        
       
    }
        componentWillUnmount(){
        clearTimeout(this.time);
        clearTimeout(this.afterTime);
        
    }

    
    onClickCell=(eachCell)=>{
            if(this.isClickedOnCell === false) {
                const cellTime = setTimeout(()=>{
                    
                      gameStore.onCellClick(eachCell);
                },100)
                this.isClickedOnCell = true;
            }
    }
    
    render(){

        const {eachCell} = this.props;
        const {level} = gameStore;
        return (
    <GridEachCell 
    
    disabled={this.shouldShowHiddenCells} 
    eachCellHidden={eachCell.isHidden} 
    numOfGrids={gameLevels[level].gridSize} 
    gridWidth={gameLevels[level].gridWidth} 
    hiddenCell = {this.shouldShowHiddenCells} 
    isClickedOnCell={this.isClickedOnCell} 
    onClick={()=>this.onClickCell(eachCell)
    }>
    </GridEachCell>
            )
    }
}
export default EachCell;