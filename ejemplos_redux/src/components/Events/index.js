import range from 'lodash/range';
import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import Event from '../Event';


const Events = ({ number }) => (
  <div className="thingy-wrapper">
  <div className="events">
    {
      number.length === 0 ? (
        <h1>
          {'No hay acciones :('}
        </h1>
      ) : (
        (number).map(
          index => (
            <Event
              key={index}
              index={index}
            />
          ),
        )
      )
    }
  </div>
  </div>
);


export default connect(
     /*(state)=>{
            console.log(selectors.getBabies(state))
        }*/
  state => ({
    number: selectors.getEvents(state),
  }),
)(Events);