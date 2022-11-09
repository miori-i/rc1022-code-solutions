
var count = document.querySelector('.countdown-display').textContent;
var id = setInterval(countdown, 1000);

function countdown() {
  count--;
  document.querySelector('.countdown-display').textContent = count;
  if (count <= 0) {
    clearInterval(id);
    document.querySelector('.countdown-display').textContent = '~Earth Beeeelooowww Us~';
  }
}
