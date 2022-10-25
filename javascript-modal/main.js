var $button1 = document.querySelector('.open-modal');
var $popup = document.querySelector('.row');
var $button2 = document.querySelector('.no');

// shows popup window by clicking button1
$button1.addEventListener('click', function () {
  $popup.classList.remove('hidden');
});

// closes popup window by clicking button2
$button2.addEventListener('click', function () {
  $popup.classList.add('hidden');
});
