const express = require('express');
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
// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Register a new user in the database
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

// Login route for the user
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
            res.send("Login successful!");
        } else {
            res.send("Invalid username or password.");
        }
    });
});

// Start the server on Port 3000, Can change if needed
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
