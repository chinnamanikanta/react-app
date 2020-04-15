import React from 'react';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx';
import tw from 'tailwind.macro';

import eventStore from '../../stores/EventsStore/EventStore'

import UserInputEvents from './UserInputEvents';
import EnteredEventsList from './EventList';



@observer
class EventsApp extends React.Component {
   
    addEvents=(eventName,eventLocation)=>{
       eventStore.onAddEvent(eventName,eventLocation); 
        
    }
    
    render(){
        return (
            <div>
            <UserInputEvents addEvents={this.addEvents}/>
            <EnteredEventsList/>
            </div>
            )
    }
}
export default EventsApp;