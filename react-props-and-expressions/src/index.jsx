import React from 'react';
import ReactDOM from 'react-dom/client';

// Define a function component named CustomButton that returns JSX
// for a <button> with props.text as its text content.
function CustomButton(props) {
  return <button>{props.text}</button>;
}

// Use ReactDOM to mount three instances of your CustomButton component
// in a div to your div#root element.
const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
