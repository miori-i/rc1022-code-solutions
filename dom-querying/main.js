console.log('hello, world');

var element1 = document.querySelector('h1');
console.log('$heading', element1);
console.dir(element1);

var element2 = document.querySelector('#explanation');
console.log('$explanation', element2);
console.dir(element2);

var element3 = document.querySelector('.hint');
console.log('$hint', element3);
console.dir(element3);

var element4 = document.querySelectorAll('p');
console.log('$paragraphs', element4);

var element5 = document.querySelectorAll('.example-link');
console.log('$links', element5);
