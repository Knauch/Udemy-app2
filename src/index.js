import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store, persistor } from './store(redux)/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe';

import './index.scss';


const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);



