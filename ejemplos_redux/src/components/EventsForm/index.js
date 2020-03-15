import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/event';
import * as actionsToBaby from '../../actions/babyToEvent'

const EventsForm = ({ onSubmit }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  return (
    <div className= "event-form-wrapper">
      <div className="FormBaby">
        <div className = "FormField">
          <label className="FormField_Label" htmlFor="name">TIPO</label>
          <input type="text" className="FormField_Input" placeholder="Ingrese tipo de evento" value={value1} onChange={e => changeValue1(e.target.value)}/>
        </div>

        <div className = "FormField"> 
          <label className="FormField_Label" htmlFor="name">NOTA</label>
          <input type="text" className="FormField_Input" placeholder="Ingrese nota" value={value2} onChange={e => changeValue2(e.target.value)}/>
        </div>
      
        <button className="SubmitButton" type="submit" onClick={
          () => onSubmit(value1, value2)
        }>
          {'Enviar'}
        </button>
      </div>
    </div>
  );
} 


export default connect(
  undefined,
  dispatch => ({
    onSubmit(value1, value2) {
      let idEvent=uuidv4();
     dispatch(
         
        actions.addEvent(idEvent, value1, new Date(), value2),
        //actionsToBaby.assignEventToBaby()
        console.log('Evento agregado')
        );
    },
  }),
)(EventsForm);