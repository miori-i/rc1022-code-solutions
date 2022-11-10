var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var count = 0;
var $dots = document.querySelectorAll('.fa-regular');
var previousCount = -1;
var $currentImageUrl = document.querySelector('.image').getAttribute('src');

// Switch the images automatically
function switchAutomatically() {

  document.querySelector('.image').src = images[count];

  $dots[count].className = 'fa-solid fa-circle';
  if (previousCount > -1) {
    $dots[previousCount].className = 'fa-regular fa-circle';
  } else if (previousCount === -1) {
    $dots[$dots.length - 1].className = 'fa-regular fa-circle';
  }

  count++;
  previousCount++;

  if (count === images.length) {
    count = 0;
  }
  if (previousCount === $dots.length - 1) {
    previousCount = -1;
  }

}
var timerID = setInterval(switchAutomatically, 3000);

// Click on a next icon to switch the image
var $rightIcon = document.querySelector('.fa-chevron-right');
$rightIcon.addEventListener('click', rightClick);

function rightClick() {
  clearInterval(timerID);
  $currentImageUrl = document.querySelector('.image').getAttribute('src');
  for (var i = 0; i < images.length; i++) {
    if ($currentImageUrl === images[i] && i < images.length - 1) {
      document.querySelector('.image').setAttribute('src', images[i + 1]);
      $dots[i + 1].className = 'fa-solid fa-circle';
      $dots[i].className = 'fa-regular fa-circle';
      count = i + 1;
      previousCount = i;

    } else if ($currentImageUrl === images[images.length - 1]) {
      document.querySelector('.image').setAttribute('src', images[0]);
      $dots[0].className = 'fa-solid fa-circle';
      $dots[4].className = 'fa-regular fa-circle';
      count = 0;

    }
  }
  timerID = setInterval(switchAutomatically, 3000);
}

// Click on a previous icon to switch the image
var $leftIcon = document.querySelector('.fa-chevron-left');
$leftIcon.addEventListener('click', leftClick);

function leftClick() {
  clearInterval(timerID);
  $currentImageUrl = document.querySelector('.image').getAttribute('src');
  for (var i = 0; i < images.length; i++) {
    if ($currentImageUrl === images[i] && i > 0) {
      document.querySelector('.image').setAttribute('src', images[i - 1]);
      $dots[i - 1].className = 'fa-solid fa-circle';
      $dots[i].className = 'fa-regular fa-circle';
      count = i;
      previousCount = i - 1;

    } else if ($currentImageUrl === images[0]) {
      document.querySelector('.image').setAttribute('src', images[images.length - 1]);
      $dots[images.length - 1].className = 'fa-solid fa-circle';
      $dots[0].className = 'fa-regular fa-circle';
      count = 0;
      previousCount = -1;
    }
  }
  timerID = setInterval(switchAutomatically, 3000);
}

// Click on a progress dot to switch the image
var $progressDot = document.querySelector('.dot-wrapper');
$progressDot.addEventListener('click', dotClick);

function dotClick(event) {
  clearInterval(timerID);
  if (event.target.getAttribute('id') === 'dot-1') {
    document.querySelector('.image').setAttribute('src', images[0]);
    $dots[0].className = 'fa-solid fa-circle';
    for (var i = 1; i < images.length; i++) {
      $dots[i].className = 'fa-regular fa-circle';
    }
    count = 0;
    previousCount = -1;
  } else if (event.target.getAttribute('id') === 'dot-2') {
    document.querySelector('.image').setAttribute('src', images[1]);
    $dots[0].className = 'fa-regular fa-circle';
    $dots[1].className = 'fa-solid fa-circle';
    for (var n = 2; n < images.length; n++) {
      $dots[n].className = 'fa-regular fa-circle';
    }
    count = 1;
    previousCount = 0;
  } else if (event.target.getAttribute('id') === 'dot-3') {
    document.querySelector('.image').setAttribute('src', images[2]);
    $dots[0].className = 'fa-regular fa-circle';
    $dots[1].className = 'fa-regular fa-circle';
    $dots[2].className = 'fa-solid fa-circle';
    for (var k = 3; k < images.length; k++) {
      $dots[k].className = 'fa-regular fa-circle';
    }
    count = 2;
    previousCount = 1;
  } else if (event.target.getAttribute('id') === 'dot-4') {
    document.querySelector('.image').setAttribute('src', images[3]);
    for (var e = 0; e < 3; e++) {
      $dots[e].className = 'fa-regular fa-circle';
    }
    $dots[3].className = 'fa-solid fa-circle';
    for (var t = 4; t < images.length; t++) {
      $dots[t].className = 'fa-regular fa-circle';
    }
    count = 3;
    previousCount = 2;
  } else if (event.target.getAttribute('id') === 'dot-5') {
    document.querySelector('.image').setAttribute('src', images[4]);
    for (var v = 0; v < 4; v++) {
      $dots[v].className = 'fa-regular fa-circle';
    }
    $dots[4].className = 'fa-solid fa-circle';
    count = 4;
    previousCount = 3;
  }
  timerID = setInterval(switchAutomatically, 3000);
}
