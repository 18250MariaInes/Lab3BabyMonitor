import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import ExampleForm from '../ExampleForm';
import EventsForm from '../EventsForm';



const store = configureStore();

const App = () => (
  <Provider store={store}>
    <EventsForm />
    <ExampleForm/>
  </Provider>
);


export default App;