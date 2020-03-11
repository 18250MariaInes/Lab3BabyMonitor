import * as types from '../types/babies';


export const addBaby=(id, name, lastName, selected=null)=>({
    type:types.BABY_ADDED,
    payload:{id,name,lastName, selected}
})