const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS to allow requests from React
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/client/dist')));

// API route example
app.get('/api', (req, res) => {
    res.json({ message: 'My name is Daniel Kralik.' });
});

// The catch-all route to serve React's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/client/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});