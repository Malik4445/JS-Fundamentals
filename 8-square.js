 const sizeArg = process.argv[2];
const size = parseInt(sizeArg);

if (isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}