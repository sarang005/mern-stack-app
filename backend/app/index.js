// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port the server will listen on
const port = 5500;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and have it listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});