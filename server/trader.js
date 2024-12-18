const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Example in-memory database
let users = [];

// Endpoint for submitting the form
app.post('/submit-form', (req, res) => {
  const { name, mobile, email, shopName, userType } = req.body;

  // Check if the user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // If user doesn't exist, add to the database
  users.push({ name, mobile, email, shopName, userType });
  console.log('User added:', { name, mobile, email, shopName, userType });

  // Respond with success status
  res.status(201).json({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

