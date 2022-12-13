// import React from the react package and
// import ReactDOM from the react - dom / client module.
import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as ReactDOM from 'react-dom'; -- this works too

// Use React.createElement to create an h1 React element with null props
// and a children string of 'Hello, React!'.
const element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('element:', element);

// Query the DOM for your div element with the id attribute of "root" and
// assign it to a variable named container.
const container = document.getElementById('root');

// Create a React root by calling the createRoot method of the ReactDOM object,
// passing in your container variable as the argument.
const root = ReactDOM(container);

// Call the render method of the root object to mount your React element to the DOM.
root.render(element);

// Run your "build" script and open dist/index.html in your browser.
// npm run build
