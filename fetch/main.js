// use fetch to send a GET request to https://jsonplaceholder.typicode.com/users,
// and log the Array of user objects to the console.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.message);
  });

// use fetch to send a GET request to the PokéAPI to retrieve your favorite pokémon
// and log its data to the console.
fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.message);
  });
