import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './app';

const node = (
  <Provider store={store}>
    <App text="Hello, World" />
  </Provider>
);

ReactDOM.render(node, document.getElementById('root'));

if(process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app', () => {
    console.log('Doing it!');
    const NewApp = require('./app').default;
    ReactDOM.render(
      <Provider store={store}>
        <NewApp />
      </Provider>,
      document.getElementById('root'));
  });
}
