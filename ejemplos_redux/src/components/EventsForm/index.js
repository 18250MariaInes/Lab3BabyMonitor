import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/event';
import * as actionsToBaby from '../../actions/babyToEvent'
import * as selectedActions from '../../actions/selectedBaby';
import babies from '../../reducers/babies';

let babyID=1;
let babyName="Juan";


const EventsForm = ({ onSubmit, babyID, babyName, types }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  return (
    <div className= "event-form-wrapper">
       <h2>
            {'AGREGAR EVENTO'}
          </h2>
      <div className="FormBaby">
      <label className="FormField_Label" htmlFor="name">TIPO</label>
      <select onChange={e=>changeValue1(e.target.value)} value={value1} className="selectorTipo" >
                            {types.map(value1 => (
                            <option key={value1[0]} value={value1[1]}>{value1[1]}</option> 
                            ))}
                        </select>
      

        <div className = "FormField"> 
          <label className="FormField_Label" htmlFor="name">NOTA</label>
          <input type="text" className="FormField_Input" placeholder="Ingrese nota" value={value2} onChange={e => changeValue2(e.target.value)}/>
        </div>
      
        <button className="SubmitButton" type="submit" onClick={
          () => onSubmit(value1, value2, babyID, babyName)
        }>
          {'Enviar'}
        </button>
      </div>
    </div>
  );
} 


export default connect(
  /*(state, index)=>{
    if (selectors.getSelectedBaby(state)!=null){
      babyID= Object.entries(selectors.getSelectedBaby(state))[0][1];
      babyName= Object.entries(selectors.getSelectedBaby(state))[1][1];
      return(babyID, babyName);
    }
    
        },*/
      (state, {id}) => ({
          babyID: Object.entries(selectors.getSelectedBaby(state))[0][1],
          babyName: Object.entries(selectors.getSelectedBaby(state))[1][1],
          types: [[0,'Seleccionar opción' ],[1,'Cambio de pañal por popó'],[2,'Cambio de pañal por pipí'],[3,'Pecho'],[4,'Pacha'], [5,'Siesta'], [6,'Otro']]
      }),
  (dispatch, {state}) => ({
    onSubmit(value1, value2,  babyID, babyName) {
      console.log(babyName)
      let idEvent=uuidv4();
     dispatch(
         
        actions.addEvent(idEvent, value1, new Date(), value2, babyID, babyName),
        console.log('Evento agregado')
        );
    },
  }),
)(EventsForm);