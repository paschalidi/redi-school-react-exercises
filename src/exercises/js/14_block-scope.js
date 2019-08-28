/**
 * TODO:
 * The receiveMessage-function is not behaving as expected. Try to get an idea
 * how it's currently work and how it's expected to work, by reading the code,
 * comments and running the tests.
 * There's many ways you can fix it. Try to see if you can find more than one.
 * Especially look into ones related to scoping.
 */

function sendBackToSender(message) {
  console.error(message.text);
}

var receivers = ['A', 'B', 'C'];
var messages = [
  {from: 'C', to: 'X', text: 'Return my sheep immediately'},
  {from: 'A', to: 'C', text: 'Never gonna give you up'}
];

/**
 * Get a message from the stack and return its contents.
 * If the receiver doesn't exist, send it back to the sender
 * with a "Not deliverable"-warning.
 * @returns {string} the current message's original content
 */
export function receiveMessage() {
  var message = messages.pop();
  var from = message.from;
  var to = message.to;
  var text = message.text;

  if (!receivers.includes(to)) {
    var message = {
      from: from,
      to: from,
      text: 'Not deliverable: ' + text
    };
    sendBackToSender(message);
  }

  return message.text;
}
