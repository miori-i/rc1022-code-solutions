import React from 'react';
import ReactDOM from 'react-dom/client';
import { Accordion } from './accordion';

const element = (
  <div>
    <Accordion />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
