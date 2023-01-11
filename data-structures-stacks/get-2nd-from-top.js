/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) { // when `stack` is empty
    return undefined;
  } else { // when `stack` is not empty
    const removedTopValue = stack.pop();
    const secondFromTop = stack.peek();
    stack.push(removedTopValue);
    return secondFromTop;
  }
}
