const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(require('cors')());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'MH18AS7369',
    database: 'blog_database'
});

// Connect 
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Fetch 
app.get('/posts', (req, res) => {
    const query = 'SELECT * FROM posts ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching posts:', err);
            res.status(500).send('Server error');
        } else {
            res.status(200).json(results);
        }
    });
});

// Fetch a specific blog post by ID
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM posts WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching the post:', err);
            res.status(500).send('Server error');
        } else if (results.length === 0) {
            res.status(404).send('Post not found');
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
