/* exported countValues */

function countValues(stack) {
  if (stack.peek() === undefined) {
    return 0;
  } else {
    let count = 0;
    while (stack.pop() !== undefined) {
      count++;
    }
    return count;
  }
}
