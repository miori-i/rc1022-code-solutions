/* exported titleCase */

function titleCase(string) {

  var lowerString = string.toLowerCase();
  var newString = lowerString.replace(/\b[a-z]/g, char => char.toUpperCase());

  if (newString.match(/Node.Js/)) {
    newString = newString.replace('Node.Js', 'Node.js');
  }

  if (newString.match(/Javascript/)) {
    newString = newString.replace('Javascript', 'JavaScript');
  }

  if (newString.match(/Api/)) {
    newString = newString.replace('Api', 'API');
  }

  if (newString.match(/As/)) {
    newString = newString.replace('As', 'as');
  }

  if (newString.match(/In/)) {
    newString = newString.replace('In', 'in');
  }
  if (newString.match(/in-/)) {
    newString = newString.replace('in-', 'In-');
  }

  if (newString.match(/For/)) {
    newString = newString.replace('For', 'for');
  }

  if (newString.match(/Of/)) {
    newString = newString.replace('Of', 'of');
  }

  if (newString.match(/On/)) {
    newString = newString.replace('On', 'on');
  }

  if (newString.match(/To/)) {
    newString = newString.replace('To', 'to');
  }

  if (newString.match(/And/)) {
    newString = newString.replace('And', 'and');
  }

  if (newString.match(/The/)) {
    newString = newString.replace(/The/g, 'the');
  }
  if (newString.match(/: the/)) {
    newString = newString.replace(': the', ': The');
  }

  if (newString[0] === 't' && newString[1] === 'h' && newString[2] === 'e') {
    newString = newString.replace('the', 'The');
  }

  if (newString.match(/'S/)) {
    newString = newString.replace("'S", "'s");
  }

  return newString;
}
