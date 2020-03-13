import { v4 as uuidv4 } from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import './style.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import { getBabies } from '../../reducers/babies';

const ExampleForm = ({ onSubmit }) => {
  const [value1, changeValue1] = useState('');
  const [value2, changeValue2] = useState('');
  const [value3, changeValue3] = useState('');
  return (
    <div className="FormBaby">
      <div className = "FormField">
        <label className="FormField_Label" htmlFor="name">NOMBRE</label>
        <input type="text" className="FormField_Input" placeholder="Ingresa el nombre" value={value1} onChange={e => changeValue1(e.target.value)}/>
      </div>

      <div className = "FormField"> 
        <label className="FormField_Label" htmlFor="name">APELLIDO</label>
        <input type="text" className="FormField_Input" placeholder="Apellido" value={value2} onChange={e => changeValue2(e.target.value)}/>
      </div>

      <div className = "FormField"> 
        <label className="FormField_Label" htmlFor="name">ID</label>
        <input type="text" className="FormField_Input" placeholder="id" value={value3} onChange={e => changeValue3(e.target.value)}/>
      </div>
    
      <button className="SubmitButton" type="submit" onClick={
        () => onSubmit(value1, value2, value3)
      }>
        {'Enviar'}
      </button>
    </div>
  );
} 


export default connect(
  (state) => ({
    id: selectors.getBabies(state),
  }),
  dispatch => ({
    onSubmit(value1, value2, value3) {
      dispatch(
        actions.addBaby(value3, value1, value2),
        console.log('The form was submitted with the following data:')
        );
    },
  }),
)(ExampleForm);