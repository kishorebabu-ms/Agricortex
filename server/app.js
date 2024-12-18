const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Dummy user data for demonstration purposes (replace with actual user data from your database)
const users = [
  {  name: 'user1',mail:'Kishoreselvarajan57@gmail.com', password: '1234', role: 'Farmer' },
  
];

app.use(bodyParser.json());
app.use(cors());

app.post('/log', (req, res) => {
  const { name, password } = req.body;

  // Find the user with the given name and password
  const user = users.find(u => u.name === name && u.password === password);

  if (user) {
    // If user is found, return the user data
    res.status(200).json({ user });
  } else {
    // If user is not found, return 401 Unauthorized
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/reg', (req, res) => {
    const { name, mail, password, role } = req.body;
  
    // Check if user already exists
    const existingUser = users.find(user => user.name === name || user.mail === mail);
    if (existingUser) {
      // If user already exists, return 409 Conflict
      res.status(409).json({ message: 'User already present. Please choose a different name or email.' });
    } else {
      // If user does not exist, add the user to the array
      const newUser = { name, mail, password, role };
      users.push(newUser);
      // Simulate saving user data to a database
      // Replace this with actual database operations in a real-world scenario
      console.log('New user registered:', newUser);
      // Return 201 Created
      res.status(201).json({ message: 'User registered successfully' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
