
import * as types from '../types/selectedBaby';


const selectedBaby = (state = [0,1,3], action) => {
  switch (action.type) {
    case types.BABY_SELECTED: {
      return action.payload; 
    }
    default: {
      return state;
    }
  }
};


export default selectedBaby;


export const getSelectedBaby = state => state;