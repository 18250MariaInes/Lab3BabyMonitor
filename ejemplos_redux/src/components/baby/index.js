

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
          {
            <h1>
                "SOY UN BB"
            </h1>
          }
        </div>
      </div>
    );
  
    export default connect(
        (state, index)=>{
            console.log(index)
        }
      /*(state, { index, id }) => ({
        baby: id,
        isSelected: selectors.getSelectedBaby(state) === index,
        
      }),
      (dispatch, { index }) => ({
        onClick() {
          dispatch(selectedActions.selectedBaby(index));
        },
      }),*/
    )(Baby);
  