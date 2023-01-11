/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) { // when `stack` is empty
    return undefined;
  } else { // when `stack` is not empty
    const removedTopValue = stack.pop();
    stack.push(value);
    stack.push(removedTopValue);
  }
}
