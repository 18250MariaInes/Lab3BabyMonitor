import * as types from '../types/event';

export const addEvent=(id,type,dateTime,notes,babyId, babyName)=>({
type:types.EVENT_ADDED,
payload:{id,type,dateTime, notes,babyId, babyName}
});

export const deleteEvent=(id)=>({
    type:types.DELETE_EVENT,
    payload:{id}
    })
