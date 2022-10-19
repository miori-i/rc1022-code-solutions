/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// 1. is under five
function isUnderFive(number) {
  var underFive = number < 5;
  return underFive;
}

// 2. is even
function isEven(number) {
  var even = (number % 2) === 0;
  return even;
}

// 3. start with J
function startsWithJ(string) {
  var j = string.charAt(0) === 'j';
  return j;
}

// 4.is old enough to drink
function isOldEnoughToDrink(person) {
  var legalToDrink = person.age >= 21;
  return legalToDrink;
}

// 5. is old enough to drive
function isOldEnoughToDrive(person) {
  var legalToDrive = person.age >= 16;
  return legalToDrive;
}

// 6. isOldEnoughToDrinkAndDrive
function isOldEnoughToDrinkAndDrive(person) {
  var legal = (person.age >= 21) && (person.age >= 16);
  return legal;
}

// 7. categorize Acidity
function categorizeAcidity(pH) {
  if (pH === 7) {
    var result = 'neutral';
    return result;
  } else if ((pH < 7) && (pH >= 0)) {
    result = 'acid';
    return result;
  } else if ((pH > 7) && (pH <= 14)) {
    result = 'base';
    return result;
  } else {
    result = 'invalid pH level';
    return result;
  }
}

// 8.introduce Warner Bro
function introduceWarnerBro(name) {
  if (name === 'yakko') {
    var result = "We're the warner brothers!";
    return result;
  } else if (name === 'wakko') {
    result = "We're the warner brothers!";
    return result;
  } else if (name === 'dot') {
    result = "I'm cute〜";
    return result;
  } else {
    result = 'Goodnight everybody!';
    return result;
  }
}
