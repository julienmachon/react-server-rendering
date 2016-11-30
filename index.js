import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './src/reducers';
import App from './src/app';


const app = Express();
const port = 3000;

function handleRender(req, res) {
  const store = createStore(reducer);

  const html = renderToString(
    <Provider store={store}>
      <App text="Hello, World" />
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderPage(html, preloadedState));
}

function renderPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true},
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
  }));
}

app.use('/static', Express.static('static'));
app.use(handleRender);
app.listen(port);
