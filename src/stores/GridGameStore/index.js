import {observable,action} from 'mobx';
import GameModel from '../models/GridGameModel/'
class GameStore {
    id=0;
    @observable level=0;
    @observable topLevel = 0;
    @observable currentLevelGridCells = [];
    @observable selectedCellCount = 0;
    @observable numOfGrids = 3;
    @observable isGameCompleted=false;
    
    
    @action.bound 
    onCellClick(){
        
        
    }
    @action.bound
    setGridCells(){
        for(let num = 0 ; num < this.numOfGrids * this.numOfGrids ; num ++){
            if (num % this.numOfGrids === 0) {
            this.currentLevelGridCells.push(new GameModel({id:this.id++,isHidden:true}))  
            }
            else {
                this.currentLevelGridCells.push(new GameModel({id:this.id++,isHidden:false}))
                
            }
        }
        let RandomGridCells = this.currentLevelGridCells.sort(()=>Math.random()-0.5);
        this.currentLevelGridCells=RandomGridCells;

        
        
    }
    @action.bound
    getToNextLevelUpdateCells(){
        
    }
    @action.bound
    getToInitialLevelAndUpdateCells(){
        
    }
    @action.bound
    resetSelectedCellsCount(){
        
    }
    @action.bound
    increamentSelectedCellsCount(){
        
    }
    @action.bound
    onPlayAgainClick(){
        
    }
    @action.bound
    resetGame(){
        
    }
    @action.bound
    setTopLevel(){
        
    }
    
}
const gameStore = new GameStore();
export default gameStore;