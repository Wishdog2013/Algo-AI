// Define a function that takes an input and returns an output
function simpleAI(input) {
  // Define your algorithm logic here
  if (input.toLowerCase().includes('hello')) {
    return 'Hi there!';
  } else if (input.toLowerCase().includes('how are you')) {
    return 'I am an AI, so I do not have feelings, but thanks for asking!';
  } else if (input.toLowerCase().includes('bye')) {
    return 'Goodbye!';
  } else {
    return 'I am sorry, I did not understand that.';
  }
}

// Get user input and interact with the AI
function chatWithAI() {
  const input = prompt('You: ');
  const output = simpleAI(input);
  displayMessage('AI:', output);
}

// Display the message in the chat window
function displayMessage(sender, message) {
  const chatContainer = document.getElementById('chat-container');
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}</strong>: ${message}`;
  chatContainer.appendChild(messageElement);
}

// Call the function to start the interaction
chatWithAI();
