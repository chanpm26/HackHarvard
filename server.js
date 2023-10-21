const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const crypto = require('crypto');

const app = express();

// Connect to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    database: 'users'
});

// Create the database if it doesn't already exist
const setupDatabase = () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(15) NOT NULL UNIQUE,
            password VARCHAR(256) NOT NULL
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

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
    setupDatabase();
});

// Middleware to parse the request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes for our API
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';

    connection.query(query, [username, hashedPassword], (error, results) => {
        if (error) {
            console.error("Error registering user:", error);
            return res.sendStatus(500);
        }
        res.send("User registered successfully!");
    });
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    connection.query(query, [username, hashedPassword], (error, results) => {
        if (error) {
            console.error("Error during login:", error);
            return res.sendStatus(500);
        }
        if (results.length > 0) {
            res.send("Login successful!");
        } else {
            res.send("Invalid username or password.");
        }
    });
});

// Start the server and what port its on.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
