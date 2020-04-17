import {observable,action} from 'mobx';
import gameLevels from '../../components/GridGame/data.js';
import GameModel from '../models/GridGameModel/'

class GameStore {
    id=0;
    @observable level=0;
    @observable topLevel = 0;
    @observable currentLevelGridCells = [];
    @observable RandomGridCells = [];
    @observable selectedCellCount = 0;
    @observable isGameCompleted=false;
    @observable gridWidth = 300;
    
    
    @action.bound 
    onCellClick(eachCell){
        if(eachCell.isHidden === true) {
            this.selectedCellCount++;
            if(this.selectedCellCount === this.level + 3){
                this.getToNextLevelUpdateCells();
            }
            
        }
        else {
            
            this.getToInitialLevelAndUpdateCells();
        }
        
        

        
    }
    @action.bound
    setGridCells(){
        //to generate random gridCell for Each Level
        let max = ((this.level + 3)**2)-1;
        let x = 9007199254740992;
        for(let randomCell=0; randomCell < x && this.RandomGridCells.length < gameLevels[this.level].gridSize ; randomCell++){
            let randomNumbers = Math.floor(Math.random() * (max));
            if((this.RandomGridCells.indexOf(randomNumbers) === -1)) {
                  this.RandomGridCells.push(randomNumbers);
            }
        }
        
        //to create a grid for Each Level

        for(let num = 0 ; num < (gameLevels[this.level].gridSize * gameLevels[this.level].gridSize); num++){
            if (!(this.RandomGridCells.indexOf(num) === -1) ) {
            this.currentLevelGridCells.push(new GameModel({id:this.id++,isHidden:true}))  
            }
            else {
                this.currentLevelGridCells.push(new GameModel({id:this.id++,isHidden:false}))
            }
        }
        this.RandomGridCells = []
    }
    @action.bound
    getToNextLevelUpdateCells(){
        this.currentLevelGridCells = [];
        if(this.level === 3) {
            this.isGameCompleted = true;
            
        }
        else {
        this.level++;

        this.selectedCellCount = 0;
        this.setGridCells();
        }
    }
    @action.bound
    getToInitialLevelAndUpdateCells(){
        if(this.level > this.topLevel){
            this.topLevel = this.level;
        }
        this.currentLevelGridCells = [];
        this.level = 0;
        this.selectedCellCount = 0;
        this.setGridCells()
    }
    @action.bound
    onPlayAgainClick(){
        this.isGameCompleted = false;
        this.currentLevelGridCells = [];
        this.level = 0;
        this.selectedCellCount = 0;
        this.setGridCells()
        
    
        
    }


    
}
const gameStore = new GameStore();
export default gameStore;