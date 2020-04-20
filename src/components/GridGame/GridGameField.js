import React from 'react';
import {observer} from "mobx-react";
import {observable} from 'mobx';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import gameStore from '../../stores/GridGameStore/'
import gameLevels from './data.js';
import EachCell from './GridEachCell';


//tailwind-@emotions-css

const GridFieldParent = styled.div`
width:${props=>props.gridSize}px;
height:${props=>props.gridSize}px;
display:flex;
flex-wrap:wrap;
`;

//React-mobx-functionality

@observer
class GameField extends React.Component {
    render(){
        const {currentLevelGridCells,numOfGrids,onCellClick} = this.props;
        const {level} = gameStore;
        return (

            <GridFieldParent gridSize={gameLevels[level].gridWidth} >
            {currentLevelGridCells.map((EachModel)=> <EachCell key={EachModel.id} eachCell={EachModel} currentLevelGridCells={currentLevelGridCells} numOfGrids={numOfGrids} onCellClick={onCellClick} />)}
            </GridFieldParent>
            )

    }

}
export default GameField;