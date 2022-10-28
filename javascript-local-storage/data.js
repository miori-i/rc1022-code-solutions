/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', beforeUnloadEvent);

function beforeUnloadEvent() {

  var todosJASON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJASON);
}
