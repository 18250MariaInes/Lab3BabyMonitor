

  import React from 'react';
  import { connect } from 'react-redux';
  
  import './styles.css';
  import * as selectors from '../../reducers';
  import * as actions from '../../actions/event';

  
  const Event = ({
      event,
      //onClick,
    }) => (
      <div
        className="event-wrapper"
      >
        <div className="event" >
            <div className="event_type">
                {(Object.entries(Object.entries(event)[1])[1]).slice(1)}
                
            </div>
             <div className="event_note">
             {(Object.entries(Object.entries(event)[3])[1]).slice(1)}
            </div>
        </div>
      </div>
    );
  
    export default connect(
        /*(state, index)=>{
            console.log(Object.entries(Object.entries(index)[0][1])[1][1]);
        }*/
      (state, { index }) => ({
        event: index,
      }),
      /*(dispatch, { index }) => ({
        onClick() {
          dispatch(selectedActions.selectedBaby(index));
        },
      })*/undefined,
    )(Event);
  