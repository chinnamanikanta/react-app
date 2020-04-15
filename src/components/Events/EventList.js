import React from 'react';
import eventStore from '../../stores/EventsStore/EventStore.js';
import {observer} from 'mobx-react';
import {action} from 'mobx';
import Events from './Events.js';
@observer class EnteredEventsList extends React.Component {
    @action.bound 
    onRemoveEvent(eachEvent){
        eventStore.removeEvent(eachEvent);
        
    }

    
    
    
    render(){
        return (
            <div>
            {eventStore.events.length > 0 ? <div>Number of Events:{eventStore.events.length}</div>:""}
            
            {eventStore.events.map((eachEvent)=>
            <Events onDelete={eventStore.removeEvent} eachEvent={eachEvent}/>

            

            )}
            
            </div>
            
            )
    }
}
export default EnteredEventsList;