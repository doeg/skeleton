import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './components/Root.jsx';

// Client render (optional):
if (typeof document !== 'undefined') {
  // Client render code goes here...
}

// Exported static site renderer.
// @param locals.path - The path currently being rendered
// @param locals.assets - An object containing all assets
// @param locals.webpackStats - Advanced: Webpack's stats object
//
module.exports = function render(locals, callback) {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Root assets={locals.assets} />
  );
  callback(null, `<!DOCTYPE html>${html}`);
};