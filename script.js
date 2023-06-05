// Define a function that takes an input and returns an output
function simpleAI(input) {
  // Define your algorithm logic here
  if (input === 'hello') {
    return 'Hi there!';
  } else if (input === 'bye') {
    return 'Goodbye!';
  } else {
    return 'I do not understand.';
  }
}

// Get user input and interact with the AI
function getUserInput() {
  const input = prompt('Enter your message:');
  const output = simpleAI(input);
  alert(output);
}

// Call the function to start the interaction
getUserInput();
