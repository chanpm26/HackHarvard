const express = require('express');
const mysql = require('mysql');
const crypto = require('crypto');
const path = require('path');

const app = express();

// Connect to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    database: 'users'
});

// Create database if it doesn't exist
const setupDatabase = () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(15) NOT NULL UNIQUE,
            password VARCHAR(60) NOT NULL
        );
    `;

    connection.query(createTableQuery, (error, results) => {
        if (error) {
            console.error("Error setting up database:", error);
            return;
        }
        console.log("Database setup or verified.");
    });
};

// Connect to database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
    setupDatabase();
});

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes for register and login
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';

    connection.query(query, [username, hashedPassword], (error, results) => {
        if (error) {
            console.error("Error registering user:", error);
            return res.status(500).send("Error registering user.");
        }
        res.send("User registered successfully!");
    });
});

// Login route is similar to register route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    connection.query(query, [username, hashedPassword], (error, results) => {
        if (error) {
            console.error("Error during login:", error);
            return res.status(500).send("Error during login.");
        }

        if (results.length > 0) {
            res.json({ message: "Login successful!", user: results[0] });
        } else {
            res.json({ message: "Invalid username or password." });
        }
        
    });
});

// Start server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Serve static files (HTML, JS, CSS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
