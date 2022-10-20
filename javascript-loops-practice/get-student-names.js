/* exported getStudentNames */

function getStudentNames(students) {
  var newArray = [];
  for (var i = 0; i < students.length; i++) {
    var valueOfName = students[i].name;
    newArray.push(valueOfName);
  }
  return newArray;
}
