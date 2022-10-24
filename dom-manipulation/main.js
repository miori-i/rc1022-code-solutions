var counter = 0;
var element1 = document.querySelector('.hot-button');
var element2 = document.querySelector('.click-count');

element1.addEventListener('click', function () {
  counter++;
  // console.log(counter);

  element2.textContent = 'Clicks:' + counter;

  if (counter >= 0 && counter < 4) {
    element1.className = 'hot-button cold';
  } else if (counter >= 4 && counter < 7) {
    element1.className = 'hot-button cool';
  } else if (counter >= 7 && counter < 10) {
    element1.className = 'hot-button tepid';
  } else if (counter >= 10 && counter < 13) {
    element1.className = 'hot-button warm';
  } else if (counter >= 13 && counter < 16) {
    element1.className = 'hot-button hot';
  } else {
    element1.className = 'hot-button nuclear';
  }

});
