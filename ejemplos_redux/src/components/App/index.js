import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import ExampleForm from '../ExampleForm';
import EventsForm from '../EventsForm';
import Babies from '../babies';
//import babies from '../../reducers/babies';



const store = configureStore();

const App = () => (
  <Provider store={store}>
    <EventsForm />
    <ExampleForm/>
    <Babies/>
  </Provider>
);


export default App;