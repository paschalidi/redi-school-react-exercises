/**
 * TODO:
 * Implement a recursive function that returns the n-th fibonacci number.
 * You can see an iterative implementation of it below.
 * Once your function yields the same results, talk about how it compares
 * to the iterative version in terms of readability and runtime. If there
 * are performance differences, can they be bridged?
 */

export function fibIterative(n) {
  const fibs = [0, 1];
  for (let i = fibs.length; i < n + 1; i++) {
    const previous = fibs[fibs.length - 2];
    const current = fibs[fibs.length - 1];
    fibs[i] = previous + current;
  }
  return fibs[n];
}

export function fibRecursive(n) {
  return n;
}
