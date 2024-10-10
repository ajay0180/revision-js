const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question('Please enter something: ', (answer) => {
  console.log(`You entered: ${answer}`);
  
  // Close the input stream
  rl.close();
});
