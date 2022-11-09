var $h1 = document.querySelector('.message');

function updateHeading() {
  $h1.textContent = 'Hello There';
}

setTimeout(updateHeading, 2000);
