// Create a new project folder and initialize a new Node.js application.

//mkdir node-rest-api
//cd node-rest-api
//npm init -y

// Install the Express framework and other dependencies.

//npm install express body-parser

// Import the necessary modules.

const express = require('express');
const bodyParser = require('body-parser');

// Define a route that listens to requests.

const app = express();
app.use(bodyParser.json());

// Define an endpoint.

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if the user exists.

  if (username === 'johndoe' && password === 'password') {
    // If the user exists, return a success message.
    res.json({
      success: true,
      message: 'You are logged in.'
    });
  } else {
    // If the user does not exist, return an error message.
    res.json({
      success: false,
      message: 'Invalid username or password.'
    });
  }
});

// Write the code for the login and logout endpoints.

app.post('/logout', (req, res) => {
  // Remove the user's session data.
  req.session.destroy();

  // Redirect the user to the home page.
  res.redirect('/');
});

// Test the API.

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
