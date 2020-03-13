import * as types from '../types/babyToEvent';

const byBabyID = (state = {}, action) => {
  switch (action.type) {
    case types.EVENT_BABY_ASSIGNED: {
      return {
        ...state,
        [action.payload.baby]: [...action.payload.event],
      };
    }
    case types.EVENT_BABY_UNASSIGNED: {
      return {
        ...state,
        [action.payload.baby]: [...state.payload.baby].filter(b => b !== action.payload.event),
      };
    }
    default: {
      return state;
    }
  }
};


export default byBabyID;


export const getAssignedEvent = (state, babyId) => state[babyId];
export const getAssignedEvents = state => state.order.map(
  babyId => getAssignedEvent(state, babyId),
).filter(babyId => babyId != null);