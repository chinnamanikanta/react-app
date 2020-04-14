import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import Event from '../../stores/EventsStore/EventModel';

type EventsProp={
    eachEvent:Event,
    onDelete:Function,
}
@observer
class Events extends React.Component<EventsProp> {
    @observable isEditEvent;
    @observable eventName;
    @observable eventLocation;
    constructor(props){
        super(props)
        this.isEditEvent = false;
        this.eventLocation = this.props.eachEvent.eventName;
        this.eventName = this.props.eachEvent.eventLocation;
    }
    @action.bound
    onChangeEventName(event){
        this.eventName=event.target.value;
    }
    @action.bound
    onChangeEventLocation(event){
        this.eventLocation=event.target.value;
    }
    
    @action.bound 
    onEditEvent(){
        this.isEditEvent = true;
    }
    @action.bound 
    updateValues(){
        
        this.props.eachEvent.updatedEditEvent(this.eventName,this.eventLocation);
        this.isEditEvent = false;
        
    }
    
    
    render(){
        return (
            
           <div className="border-gray-600">
            <input onChange = {this.onChangeEventName} className="text-base" disabled={!this.isEditEvent} value={this.eventName} type="text"/>
            <input onChange = {this.onChangeEventLocation} className="text-base" disabled={!this.isEditEvent} value={this.eventLocation} type="text"/>
            
            {(this.isEditEvent) ? 
                <div>
                    <button type="button" onClick={this.updateValues}>updated</button>
                </div> :
                
                 <div>
                    <button type="button" onClick = {this.onEditEvent}>Edit</button>
                    <button type="button" id={this.props.eachEvent.id} onClick={this.props.onDelete()}>Delete</button>
                </div>
            }
            </div>
            )
    }
}
export default Events;