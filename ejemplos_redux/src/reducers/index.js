import { combineReducers } from 'redux';

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './event';
import babyToEvent, * as eventToBabiesSelectors from './babyToEvent';
import selectedBaby, * as selectedBabySelectors from './selectedBaby';


const reducer = combineReducers({
  babies,
  events,
  babyToEvent, 
  selectedBaby,
});


export default reducer;


export const getBaby = (state, id) => babiesSelectors.getBaby(state.babies, id);
export const getBabies = state => babiesSelectors.getBabies(state.babies);

export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id);
export const getEvents = state => eventsSelectors.getEvents(state.events);



export const getAssignedEvent = (
  state,
  babyId,
) => eventToBabiesSelectors.getAssignedEvent(
  state.babyToEvent,
  babyId,
);  

export const getAssignedEvents = state => eventToBabiesSelectors.getAssignedEvent(state.babyToEvent);

export const getSelectedBaby = (
  state =>
    selectedBabySelectors.getSelectedBaby(
      state.selectedBaby,
    )
);