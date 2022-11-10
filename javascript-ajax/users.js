
var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest(name);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' + name);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {

  console.log('status of the xhr object:', xhr.status);
  console.log('response of the xhr object:', xhr.response);

  for (var i = 0; i < xhr.response.length; i++) {
    var $userName = document.createElement('li');
    $userName.textContent = xhr.response[i].name;
    $userList.appendChild($userName);
  }
});

xhr.send();
