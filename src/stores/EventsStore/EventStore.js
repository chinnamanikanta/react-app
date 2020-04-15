import {observable,computed,action,reaction} from 'mobx';
import Event from './EventModel.js'
 
 

class EventStore {
    @observable id=0;
    @observable events = [];
    
    @action.bound 
    onAddEvent(eventName,eventLocation){

        this.events.push(new Event({EventId:this.id++,eventName,eventLocation,isEditEvent:false}))

    }
    @action.bound 
    removeEvent(eachEventId){
        console.log(eachEventId);

    this.events = this.events.filter(eachEl => eachEl.id != eachEventId);
        
        
        
    }
}
const eventStore = new EventStore();
export default eventStore;
   

