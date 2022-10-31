var $characters = document.querySelectorAll('span');
var charArray = Array.from($characters);

document.addEventListener('keydown', function (event) {

  if (event.key === charArray[0].textContent) { // typed correct char
    charArray[0].className = 'add-green';
    // $characters.slice(i - 1, i).className = 'right wrong';

  } else if (event.key !== charArray[0].textContent) { // typed wrong char
    charArray[0].className = 'wrong';

  }

});
