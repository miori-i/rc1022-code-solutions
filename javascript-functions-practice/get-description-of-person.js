/* exported getDescriptionOfPerson */

function getDescriptionOfPerson(person) {
  var discription = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return discription;
}
