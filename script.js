function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

function sendMessage() {
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('user-input');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  displayMessage('User', message);

  // Collect data and send to Discord webhook
  sendToWebhook(name, email, message);

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

function sendToWebhook(name, email, message) {
  const webhookUrl = "https://discord.com/api/webhooks/1115368177979904140/zfci8BYck_FyrFtm-MZ_4-ot3WiDvXJg7gcFDG0xyUka7EcAIYLu6RgdaYVD-Fnbtvog";

  const requestData = {
    username: "Algo-AI",
    avatar_url: "https://cdn.discordapp.com/attachments/1115370154642124961/1115370214859739146/8t4kj4LS_400x400_1.jpg", // Optional: Customize the bot's avatar
    content: `New Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  })
    .then(function(response) {
      console.log("Message sent to Discord webhook:", response);
    })
    .catch(function(error) {
      console.error("Failed to send message to Discord webhook:", error);
    });
}
