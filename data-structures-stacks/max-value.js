/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let max = -Infinity;
    while (stack.peek() !== undefined) {
      max = Math.max(max, stack.pop());
    }
    return max;
  }
}
