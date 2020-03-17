import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import {
  VOTING_LIST_FEATURE_KEY,
  votingListReducer
} from '@tf-test/react-coding-test/feature-voting-list';

import {
  REGISTER_FORM_FEATURE_KEY,
  registerFormReducer
} from '@tf-test/react-coding-test/feature-register-form';

const store = configureStore({
  reducer: {
    [REGISTER_FORM_FEATURE_KEY]: registerFormReducer,
    [VOTING_LIST_FEATURE_KEY]: votingListReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
