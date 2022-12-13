import React from 'react';
// import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('element:', element);

const container = document.getElementById('root');

const root = createRoot(container);
root.render(element);
