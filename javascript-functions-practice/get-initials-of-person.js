/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  var initial = person.firstName.charAt(0) + person.lastName.charAt(0);
  return initial;
}
