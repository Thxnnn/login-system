const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
// var bodyParser = require('body-parser')
const app = express();

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


app.post('/signup', (req, res) => {
    const data = req.body;
    const { username, password, confirmPassword } = req.body;
    console.log(data)
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        console.log("Data inserted successfully");
        res.status(200).json({ message: "Signup successful" });
    });

})

app.post('/signin', (req,res) => {
    res.statusCode(200)
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));