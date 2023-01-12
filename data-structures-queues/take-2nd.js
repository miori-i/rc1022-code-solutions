/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstValue = queue.dequeue();
  queue.enqueue(firstValue);
  const secondValue = queue.dequeue();
  return secondValue;
}
