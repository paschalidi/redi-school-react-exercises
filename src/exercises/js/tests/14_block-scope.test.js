import {receiveMessage} from '../14_block-scope';

test('messages are delivered and sent back correctly', () => {
  const consoleError = console.error;
  const errorSpy = console.error = jest.fn();

  const text1 = receiveMessage();
  expect(text1).toBe('Never gonna give you up');

  const text2 = receiveMessage();
  expect(errorSpy).toHaveBeenCalledWith(
    'Not deliverable: Return my sheep immediately'
  );
  expect(text2).toBe('Return my sheep immediately');

  console.error = consoleError;
});
