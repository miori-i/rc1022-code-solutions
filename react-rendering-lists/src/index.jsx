import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function List(props) {
  const { pokedex } = props;
  const list = pokedex.map(pokemon =>
    <ListItem name={pokemon.name} key={pokemon.number}/>);
  return <ul>{list}</ul>;
}

function ListItem(props) {
  return <li>{props.name}</li>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<List pokedex={pokedex} />); // we create pokedex property and assigns it to the value pokedex(the array given)

// Other way
/*
const element = (
  <ul>
    {
      pokedex.map(pokemon => {
        return <li key={pokemon.number}>{pokemon.name}</li>
      })
    }
  </ul>
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
*/
