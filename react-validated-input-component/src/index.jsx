import React from 'react';
import ReactDOM from 'react-dom/client';
import { Validated } from './validated-input';

const element = (
  <div className='wrapper'>
    <Validated />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
