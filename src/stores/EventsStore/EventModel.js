import {observable,computed,action,reaction} from 'mobx';

class Event  {
    @observable id;
    @observable isEditEvent;
    @observable eventName;
    @observable eventLocation;
    
    constructor(props){
        this.id=props.EventId;
        this.eventName = props.eventName;
        this.eventLocation = props.eventLocation;
        this.isEditEvent = props.isEditEvent;
    }
    @action.bound
     updatedEditEvent(eventName,eventLocation){
        this.eventLocation = eventLocation;
        this.eventName = eventName;
     
    }
    
}
export default Event;