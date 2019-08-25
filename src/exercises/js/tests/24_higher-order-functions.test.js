import {
  cookedFood,
  makeAdder,
  vegetarianFood
} from '../24_higher-order-functions';

test('adder should work as expected', () => {
  const add5 = makeAdder(5);
  expect(add5(2)).toBe(7);

  const add10 = makeAdder(10);
  expect(add10(2)).toBe(12);
});

test('food should be cooked', () => {
  expect(cookedFood).toStrictEqual(['🍿', '🍔', '🍳']);
});

test('vegetarian food should be vegetarian', () => {
  expect(vegetarianFood).toStrictEqual(['🍿', '🥦']);
});
