import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { rootStore } from './app/store';
import { environment } from './environments/environment';

ReactDOM.render(
  <Provider store={rootStore}>
    <BrowserRouter basename={environment.basePath}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
