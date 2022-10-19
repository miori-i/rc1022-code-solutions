// the Math Object
var x = 3;
var y = 6;
var z = 7;

var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

var heroes = ['hero1', 'hero2', 'hero3', 'hero4'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods
var library = [
  {
    title: 'how to make ramen',
    author: 'Miori'
  },
  {
    title: 'how to make sushi',
    author: 'Lulu'
  },
  {
    title: 'how to learn Japanese',
    author: 'Akamai'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1); // Remove 1 element(first argument) at index 1(second argument)
console.log('library:', library);

// String Methods
var fullName = 'Miori Imai';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
