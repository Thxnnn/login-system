const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
// var bodyParser = require('body-parser')
const app = express();
const bcrypt = require('bcrypt');

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_system'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.post('/signup', async (req, res) => {
    const data = req.body;
    const { username, password, confirmPassword } = req.body;
    console.log(data)
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }


    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        db.query(sql, [username, hashedPassword], (err, result) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
            console.log("Data inserted successfully");
            res.status(200).json({ message: "Signup successful" });
        });
    } catch (error) {
        console.error("Error hashing password:", error);
        res.status(500).json({ error: "Internal server error" });
    }

})

app.post('/signin', (req,res) => {
    // res.statusCode(200)

    console.log(req.body)
    const { username, password } = req.body;

    try {
        // Retrieve the user from the database based on the username
        const sql = "SELECT * FROM users WHERE username = ?";
        db.query(sql, [username], (err, results) => {
            if (err) {
                console.error("Error retrieving user:", err);
                return res.status(500).json({ error: "Internal server error" });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: "Invalid username or password" });
            }

            // Compare the provided password with the hashed password from the database
            const user = results[0];
            const passwordMatch = bcrypt.compare(password, user.password);
            console.log("pass db : ",user.password)
            // console.log(hashedPassword)
            console.log(passwordMatch)

            if (!passwordMatch) {
                return res.status(401).json({ error: "Invalid username or password" });
            }

            // If the password matches, the user is authenticated
            res.status(200).json({ message: "Login successful" });
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));