var element4 = document.getElementById('contact-form');
element4.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = element4.elements.name.value;
  messageData.email = element4.elements.email.value;
  messageData.message = element4.elements.message.value;
  console.log('messageData:', messageData);
  element4.reset();
}
