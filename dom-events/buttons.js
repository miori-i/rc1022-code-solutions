function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var element1 = document.querySelector('.click-button');
element1.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var element2 = document.querySelector('.hover-button');
element2.addEventListener('click', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var element3 = document.querySelector('.double-click-button');
element3.addEventListener('click', handleDoubleClick);
