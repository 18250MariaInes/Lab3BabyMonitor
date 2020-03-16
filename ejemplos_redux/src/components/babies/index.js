import range from 'lodash/range';
import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/babies';
import Baby from '../baby';


const Babies = ({ number }) => (
  <div className="thingy-wrapper">
    <div className="babies">
    
      {
        number.length === 0 ? (
          <h1>
            {'No hay bebes :('}
          </h1>
        ) : (
          (number).map(
            index => (
              <Baby
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
    number: selectors.getBabies(state),
  }),
)(Babies);