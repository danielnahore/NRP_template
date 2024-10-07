const express = require('express');
// const path = require('path');
// const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// // Enable CORS to allow requests from React
// app.use(cors());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API route example
app.get('/api', (req, res) => {
    res.json({ message: 'My name is Daniel Kralik.' });
});

// PostgreSQL pool connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Simple route to fetch users from PostgreSQL
app.get('/api/users', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// // The catch-all route to serve React's index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});