var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var n = 0; n < $view.length; n++) {
      if ($dataView === $view[n].getAttribute('data-view')) {
        $view[n].className = 'view';
      } else {
        $view[n].className = 'view hidden';
      }
    }
  }
});
