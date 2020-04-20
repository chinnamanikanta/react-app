import {observable} from 'mobx';

class EachTodoModel {
    @observable id;
    @observable title;
    @observable isCompleted;
    constructor(props){
      
        this.id = props.id;
        this.title = props.title;
        this.isCompleted = props.isCompleted;
        
    }
    
}
export default EachTodoModel;