/* exported getTop */

function getTop(stack) {
  // when `stack` is empty
  if (Object.keys(stack).length === 0) { // when `stack` is empty
    return undefined;
  } else { // when `stack` is not empty
    const top = stack.peek(); // the "top" value in the stack
    return top;
  }
}
