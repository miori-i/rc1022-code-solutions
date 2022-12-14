import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
// const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <CustomButton />;
root.render(element);
