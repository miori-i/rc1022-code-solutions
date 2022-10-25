
var counter = 0;
var $bulb = document.querySelector('.round');
var $background = document.body;
$bulb.addEventListener('click', function () {
  counter++;
  if (counter % 2 === 0) {
    $bulb.className = 'round off';
    $background.style.backgroundColor = '#111111';
  } else {
    $bulb.className = 'round';
    $background.style.backgroundColor = '#fef9f2';
  }
});
