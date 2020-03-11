import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/events';

const order = (state = [], action) => {
    switch (action.type) {
      case types.EVENT_ADDED: {
        return [...state, action.payload.id];
      }
      /*case types.EVENT_DELETED: {
        const newState = [...state].filter(b => b !== action.payload.id);
        return newState;
      }*/
      default: {
        return state;
      }
    }
  };

  const byId = (state = {}, action) => {
    switch (action.type) {
      case types.EVENT_ADDED: {
        return {
          ...state,
          [action.payload.id]: action.payload,
        };
      }
      case types.EVENT_DELETED: {
        return omit(state, action.payload.id);
      }
      default: {
        return state;
      }
    }
  };

  const events = combineReducers({
    byId,
    order,
    byBabyID,
  });
  
  
  export default events;
  
  export const getEvent = (state, id) => state.byId[id];
  export const getEvents = state => state.order.map(
    id => getEvent(state, id),
  ).filter(event => event != null);