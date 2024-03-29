const jokes = [
	['What did 0 say to 8?', 'Nice belt.'],
	['If the internet is a boat, where would they park it?', 'Google doc.'],
];
let jokeIndex = 0;

const chatContent = document.querySelector('.chat-content');

const jokeButton = document.getElementById('requestJokeButton');

appendBotMessage(
	'Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.'
);

function appendBotMessage(messageText) {
	const messageDiv = document.createElement('div');
	messageDiv.className = 'message bot-message';
	chatContent.appendChild(messageDiv);

	const avatar = document.createElement('div');
	avatar.className = 'fas fa-robot message-avatar';
	messageDiv.appendChild(avatar);

	const contentDiv = document.createElement('div');
	contentDiv.className = 'message-content';
	contentDiv.textContent = messageText;
	messageDiv.appendChild(contentDiv);
}

function requestJoke() {
	appendUserMessage();
	if (jokeIndex >= jokes.length) {
		appendBotMessage("Sorry, I'm out of jokes for now!");
		return;
	}
	jokeButton.style.display = 'none';

	setTimeout(function () {
		appendBotMessage('Ok, got one.');
	}, 1000);

	// Tell joke
	setTimeout(function () {
		appendBotMessage(jokes[jokeIndex][0]);
	}, 2500);

	// Tell joke's punchline
	setTimeout(function () {
		appendBotMessage(jokes[jokeIndex][1]);
		jokeButton.style.display = 'inline-block';
		jokeIndex += 1;
	}, 4000);
}

function appendUserMessage() {
	const messageDiv = document.createElement('div');
	messageDiv.className = 'message user-message';
	chatContent.appendChild(messageDiv);

	const avatar = document.createElement('div');
	avatar.className = 'fas fa-smile message-avatar';
	messageDiv.appendChild(avatar);

	const contentDiv = document.createElement('div');
	contentDiv.className = 'message-content';
	contentDiv.textContent = 'Tell me a joke!';
	messageDiv.appendChild(contentDiv);
}
