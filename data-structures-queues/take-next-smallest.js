/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let firstValue = queue.dequeue();
  // when `queue` is empty
  if (firstValue === undefined) {
    return;
  }

  // when `queue` contains at least two values
  while (firstValue > queue.peek()) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
  }
  return firstValue;
}
