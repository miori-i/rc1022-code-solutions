/* exported takeTop */

function takeTop(stack) {
  if (Object.keys(stack).length === 0) { // when `stack` is empty
    return undefined;
  } else { // when `stack` is not empty
    const top = stack.peek(); // the "top" value in the stack
    stack.pop(); // removes the top value from the stack
    return top;
  }
}
