

  import React from 'react';
  import { connect } from 'react-redux';
  
  import './styles.css';
  import * as selectors from '../../reducers';
  import * as actions from '../../actions/babies';
  import * as selectedActions from '../../actions/selectedBaby';
  
  const Baby = ({
      baby,
      isSelected = false,
      onClick,
      name, 
      lastName
    }) => (
      <div
        className={
          `
            baby-wrapper
            ${isSelected ? 'baby--selected' : ''}
          `
        }
        onClick={onClick}
      >
        <div className="baby">
            <div className="baby_name">
                Nombre: {(Object.entries(Object.entries(baby)[1])[1]).slice(1)}
                
            </div>
             <div className="baby_last_name">
             Apellido: {(Object.entries(Object.entries(baby)[2])[1]).slice(1)}
            </div>
        </div>
      </div>
    );
  
    export default connect(
        /*(state, index)=>{
            console.log(Object.entries(Object.entries(index)[0][1])[1][1]);
        }*/
      (state, { index }) => ({
        baby: index,
        isSelected: selectors.getSelectedBaby(state) === index,
        id: Object.entries(Object.entries(index)[0][1])[0][1],
        name: Object.entries(Object.entries(index)[0][1]),
        lastName: Object.entries(Object.entries(index)[0][1])[2][1],
      }),
      (dispatch, { index }) => ({
        onClick() {
          dispatch(selectedActions.selectedBaby(index));
          console.log(selectedActions.selectedBaby(index));
        },
      }),
    )(Baby);
  