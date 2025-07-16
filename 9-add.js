// Define the function as required by the prototype: function add(a, b)
function add(a, b) {
  return a + b;
}

// Get the two arguments from the command line
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Call the add function with the parsed arguments and print the result
console.log(add(num1, num2));