import * as types from '../types/babyToEvent';


export const assignEventToBaby = (agent, event) => ({
  type: types.EVENT_BABY_ASSIGNED,
  payload: {
    baby: agent,
    event,
  }
}) ;

export const unassignEventFromBaby = agent => ({
  type: types.EVENT_BABY_UNASSIGNED,
  payload: { baby: agent }
});