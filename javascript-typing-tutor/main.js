var $eachCharacters = document.querySelectorAll('span');
var charArray = Array.from($eachCharacters);

document.addEventListener('keydown', function (event) {

  // if charArray[0] exists
  if (charArray[0]) {

    // if the pressed key is the same with the char at index 0 in charArray
    if (event.key === charArray[0].textContent) { // typed correct char
      charArray[0].className = 'add-green';

      // if charArray[1] exists
      if (charArray[1]) {
        charArray[1].className = 'active';
      }

      // Remove the char at index 0 from charArray
      charArray.shift();

    } else {
      // if the pressed key is not the same with the char at index 0 in charArray
      charArray[0].className = 'add-red active';
    }
  }
});
