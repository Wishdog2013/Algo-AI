function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

function sendMessage() {
  const inputElement = document.getElementById('user-input');
  const message = inputElement.value;
  inputElement.value = '';
  displayMessage('User', message);
  const output = simpleAI(message);
  displayMessage('Algo', output);
}

function displayMessage(sender, message) {
  const chatContainer = document.getElementById('chat-container');
  chatContainer.style.display = 'block';
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender.toLowerCase() + '-message');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatContainer.appendChild(messageElement);
}

function simpleAI(input) {
  const responses = [
    "I'm not sure I understand.",
    "Have a good day!",
    "That's interesting. Tell me more.",
    "I'm sorry, I don't have the answer to that.",
    "Let me think about it for a moment.",
    "I appreciate your input.",
    "make a issue to add a response if you'd like to!"
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
