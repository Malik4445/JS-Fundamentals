const firstArg = process.argv[2]; // Get the first command-line argument

// Attempt to convert the argument to an integer
const number = parseInt(firstArg);

// Check if the conversion resulted in a valid number
if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}