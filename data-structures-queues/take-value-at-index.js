/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  // when `queue` is empty
  if (queue.peek() === undefined) {
    return;
  }

  // when `queue` is not empty
  for (let i = 0; i < index; i++) {
    const firstValue = queue.dequeue();
    queue.enqueue(firstValue);
  }
  return queue.dequeue();
}
