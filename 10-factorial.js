// Define the recursive factorial function
function factorial(n) {
  // Base case 1: Factorial of NaN is 1 (as per requirement).
  // This also handles cases where no argument is provided or it's not a number.
  if (isNaN(n)) {
    return 1;
  }

  // Base case 2: Factorial of 0 or 1 is 1 (standard definition).
  // Also handles negative numbers by returning 1 to prevent infinite recursion,
  // aligning with the "Factorial of NaN is 1" rule for non-standard inputs.
  if (n <= 1) {
    return 1;
  }

  // Recursive step: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Get the first argument and parse it as an integer
const num = parseInt(process.argv[2]);

// Call the factorial function and print the result
console.log(factorial(num));