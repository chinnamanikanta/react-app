import React from 'react';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx';
import tw from 'tailwind.macro';
import styled from '@emotion/styled'
import UserInputEvents from './UserInputEvents.js';
import eventStore from '../../stores/EventsStore/EventStore.js'
import EnteredEventsList from './EventsList.js';


@observer
class EventsApp extends React.Component {
    @action.bound
    addEvents(eventName,eventLocation){
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