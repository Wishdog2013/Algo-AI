// JavaScript code for Algo-AI

// Array to store the collected questions and answers
let collectedData = [];

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

function toggleDataCollection() {
  const toggleButton = document.getElementById('toggle-data-button');
  const isCollectingData = toggleButton.classList.contains('active');
  
  if (isCollectingData) {
    // Stop collecting data
    toggleButton.classList.remove('active');
    toggleButton.textContent = 'Start Data Collection';
    toggleButton.style.backgroundColor = '';
    saveDataToFile();
  } else {
    // Start collecting data
    toggleButton.classList.add('active');
    toggleButton.textContent = 'Stop Data Collection';
    toggleButton.style.backgroundColor = '#ff4c4c';
    collectedData = [];
  }
}

function sendMessage() {
  const inputElement = document.getElementById('user-input');
  const message = inputElement.value;
  inputElement.value = '';
  displayMessage('User', message);
  
  if (toggleButton.classList.contains('active')) {
    // Collect question and answer
    const qaPair = { question: message, answer: '' };
    collectedData.push(qaPair);
  }
  
  const output = simpleAI(message);
  displayMessage('Algo', output);
  
  if (toggleButton.classList.contains('active')) {
    // Collect answer
    collectedData[collectedData.length - 1].answer = output;
  }
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
    "make an issue to add a response if you'd like to!"
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

function saveDataToFile() {
  const dataString = JSON.stringify(collectedData, null, 2);
  const blob = new Blob([dataString], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'collected_data.txt';
  downloadLink.click();
  URL.revokeObjectURL(url);
}
