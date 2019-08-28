import {fibIterative, fibRecursive} from '../19_recursion';

function testFibs(fibFn) {
  expect(fibFn(0)).toBe(0);
  expect(fibFn(1)).toBe(1);
  expect(fibFn(3)).toBe(2);
  expect(fibFn(10)).toBe(55);
  expect(fibFn(15)).toBe(610);
  expect(fibFn(20)).toBe(6765);
  expect(fibFn(40)).toBe(102334155);
}

test('it correctly calculates fibonacci numbers iteratively', () => {
  testFibs(fibIterative);
});

test('it correctly calculates fibonacci numbers recursively', () => {
  testFibs(fibRecursive);
});
