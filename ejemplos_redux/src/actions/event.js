import * as types from '../types/event';

export const addEvent=(id,type,dateTime,notes)=>({
type:types.EVENT_ADDED,
payload:{id,type,dateTime, notes}
});

export const deleteEvent=(id)=>({
    type:types.DELETE_EVENT,
    payload:{id}
    })
