import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import ExampleForm from '../ExampleForm';
import EventsForm from '../EventsForm';
import Babies from '../babies';
import Events from '../Events'
//import {Link} from 'react-router-dom';

//import babies from '../../reducers/babies';



const store = configureStore();

const App = () => (
  <Provider store={store}>
    <EventsForm />
    <ExampleForm/>
    <Babies/>
    <Events/>
    
  </Provider>
);


export default App;

//<Events/>