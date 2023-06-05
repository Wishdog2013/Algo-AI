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
