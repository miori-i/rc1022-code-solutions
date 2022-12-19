import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToggleSwitch } from './stopwatch';

const element = (
  <div className='wrapper'>
    <ToggleSwitch />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
