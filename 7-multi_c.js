const firstArg = process.argv[2]; // Get the first command-line argument
const numOccurrences = parseInt(firstArg); // Convert it to an integer

// Check if the argument is not a number or is zero/negative
if (isNaN(numOccurrences)) {
  console.log("Missing number of occurrences");
} else if (numOccurrences > 0) {
  let outputString = "";
  const message = "C is fun";

  // Build the string: add "C is fun\n" for (x-1) times
  // Then add "C is fun" for the last line without a trailing newline.
  for (let i = 0; i < numOccurrences - 1; i++) {
    outputString += message + '\n';
  }

  // Add the last line. If numOccurrences is 1, this will be the only line added.
  outputString += message;

  console.log(outputString);
}