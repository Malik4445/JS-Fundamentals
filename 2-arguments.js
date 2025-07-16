const args = process.argv.length - 2; // Subtract 2 for 'node' and the script file itself

if (args === 0) {
  console.log("No argument");
} else if (args === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}