// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS to allow requests from React
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Sample API route
app.get('/api/message', (req, res) => {
    res.json({ message: 'My name is Daniel.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});