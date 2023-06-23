document.getElementById("mode-toggle").addEventListener("change", function() {
  console.log("Change event triggered");
  document.body.classList.toggle("dark-mode");
  console.log("Body class toggled");
  if (document.body.classList.contains("dark-mode")) {
    console.log("Body has dark-mode class");
    document.getElementById("mode-toggle").checked = true;
  } else {
    console.log("Body does not have dark-mode class");
    document.getElementById("mode-toggle").checked = false;
  }
});

// Function to send user message and receive the response
function sendMessage() {
  var userInput = document.getElementById('userInput').value;

  // Display the user message in the chatbox
  displayMessage(userInput, 'user');

  // Create a request object
  var request = {
    question: userInput
  };
  // Handle the chat request and get the response
  var response = handleChatRequest(request);

  // Display the answer in the chatbox
  displayMessage(response.answer, 'bot');

  // Clear the user input field
  document.getElementById('userInput').value = '';
}
   // Define a function to handle the chat request
function handleChatRequest(request) {
  // Get the user's question from the request
  var userQuestion = request.question;

  // Process the user's question and generate an answer
  var answer = generateAnswer(userQuestion);

  // Return the answer in the response
  return {
    answer: answer
  };
}


// Example function to generate an answer based on the user's question
function generateAnswer(question) {
  // Add custom question and answer logic here
  if (question === 'What is your favorite color?') {
    return 'My favorite color is yellow.';
  }
  if (question === 'Who is your owner') {
    return 'Our owner is name is Ayan Singh.';
  }
  if (question === 'who is your owner') {
    return 'Our owner is name is Ayan Singh.';
  }
  if (question === 'Hi') {
    return 'Welcome To 8D Audio Music Production Official Website.';
  }
  if (question === 'hi') {
    return 'Welcome To 8D Audio Music Production Official Website.';
  }
  if (question === 'hello') {
    return 'Welcome To 8D Audio Music Production Official Website.';
  }
  if (question === 'Hello') {
    return 'Welcome To 8D Audio Music Production Official Website.';
  }
  if (question === 'Tell me about the comapny') {
    return '8D Audio Music Production is one of the biggest music label. Started by Ayan Singh. All the rights reserved ©️ from T-Series, Zee Music Company and DJ NYK... For the business enquiry - 8dmusicproductionr@gmail.com';
  }
  if (question === 'Give me the contact information') {
    return 'For the business enquiry - 8dmusicproductionr@gmail.com';
  }
  if (question === 'Tell me about the contact information') {
    return 'For the business enquiry - 8dmusicproductionr@gmail.com';
  }
  if (question === 'How old are you') {
    return 'I am smaller than you.';
  }
  if (question === 'What is your youtube channel name') {
    return 'Our YouTube Channel Name is 8D Audio Music Production.';
  }
  if (question === 'What is your Youtube channel name') {
    return 'Our YouTube Channel Name is 8D Audio Music Production.';
  }
  if (question === 'Bye') {
    return 'Bye See you again.';
  }
  if (question === 'Byee') {
    return 'Bye See you again.';
  }
  if (question === 'Who has created you') {
    return 'The team 8D Audio Music Production has created me.';
  }
  if (question === 'Thanks for your support') {
    return 'I am grateful to help you.';
  }
  if (question === 'Thanks for your help') {
    return 'I am grateful to help you.';
  }
  if (question === 'Thank You') {
    return 'I am grateful to help you.';
  }
  if (question === 'Thanks you') {
    return 'I am grateful to help you';
  }
  if (question === 'Thanks my dear') {
    return 'I am grateful to help you.';
  }
  if (question === 'thank you') {
    return 'I am grateful to help you.';
  }
  if (question === 'Thanks') {
    return 'I am grateful to help you.';
  }
  if (question === 'thanks') {
    return 'I am grateful to help you.';
  }
  if (question === 'Thank You my dear') {
    return 'I am grateful to help you.';
  }
  if (question === 'Thank you my dear') {
    return 'I am grateful to help you.';
  }
  if (question === 'What is your age') {
    return 'I am smaller than you.';
  }
  if (question === 'Today is my birthday') {
    return 'Happy Birthday My Dear User God Gives You a Long Life🎂🎉.';
  }
  if (question === 'Today is my happy birthday') {
    return 'Happy Birthday My Dear User God Gives You a Long Life🎂🎉.';
  }
  if (question === 'When is your birthday') {
    return 'I have born on 23rd of June 2023🎉.';
  }
  if (question === 'Tell me the name of  your latest video') {
    return 'Jai Shri Ram';
  }
  if (question === 'Tell me the name of  your latest releases') {
    return 'Jai Shri Ram.';
  }
  if (question === 'bye') {
    return 'Bye see you again.';
  }
  if (question === 'What is my name') {
    return 'Your Name is User.';
  }
  if (question === 'what is my name') {
    return 'Your Name is User.';
  }
  if (question === 'who are you') {
    return 'My Name is Byte how can you i help you .';
  }
  if (question === 'Who are you') {
    return 'My Name is Byte how can you i help you .';
  }
 if (question === 'What is your name'){
  return 'My Name is Byte'
 }
 if (question === 'What is your Name'){
  return 'My Name is Byte'
 }
  // Default answer if no match is found
  return "I'm sorry, I don't have an answer for that question,Our team is working on it.";
}

// Function to send user message and receive the response
function sendMessage() {
  var userInput = document.getElementById('userInput').value;

  // Create a request object
  var request = {
    question: userInput
  };
  

  // Handle the chat request and get the response
  var response = handleChatRequest(request);

  // Display the answer in the chatbox
  displayMessage(response.answer, 'bot');

  // Clear the user input field
  document.getElementById('userInput').value = '';
}

// Function to display the message in the chatbox
function displayMessage(message, sender) {
  var chatBody = document.getElementById('chatBody');
  var messageElement = document.createElement('div');
  messageElement.classList.add('message-container');
  messageElement.classList.add(sender === 'user' ? 'user' : 'bot');
  var paragraphElement = document.createElement('p');
  paragraphElement.textContent = message;
  messageElement.appendChild(paragraphElement);
  chatBody.appendChild(messageElement);
}

// Function to toggle the chatbox visibility
function toggleChatbox() {
  var chatContainer = document.getElementById('chatContainer');
  chatContainer.classList.toggle('open');
}