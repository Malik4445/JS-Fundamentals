const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let outputString = messages[0]; // Start with the first message

// Loop through the rest of the messages, starting from the second one (index 1)
// and prepend a newline character to each subsequent message.
for (let i = 1; i < messages.length; i++) {
  outputString += '\n' + messages[i];
}

console.log(outputString);