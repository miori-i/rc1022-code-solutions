/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  // when `queue` is empty
  if (firstValue === undefined) {
    return;
  }

  const secondValue = queue.dequeue();
  // when `queue` contains one value
  if (secondValue === undefined) {
    return firstValue;
  }

  // when `queue` contains at least two values
  // the first value is equal to the second
  if (secondValue === firstValue) {
    queue.enqueue(firstValue);
    return firstValue;
  }

  // and the first value is larger than the second
  if (firstValue > secondValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }

  // the first value is smaller than the second
  if (firstValue < secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  }

}
