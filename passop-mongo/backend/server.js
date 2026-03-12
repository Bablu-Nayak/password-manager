const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql2')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

// App
const app = express()
const port = 3000

// Middleware
app.use(bodyparser.json())
app.use(cors())

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root@1527",
    database: "passop_db"
})

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err)
    } else {
        console.log("Connected to MySQL Database")
    }
})


// Get all passwords
app.get('/', (req, res) => {

    const sql = "SELECT * FROM passwords"

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Database error")
        } else {
            res.json(result)
        }
    })
})


// Save a password
app.post('/', (req, res) => {

    const { site, username, password } = req.body

    const sql = "INSERT INTO passwords (site, username, password) VALUES (?, ?, ?)"

    db.query(sql, [site, username, password], (err, result) => {

        if (err) {
            console.log(err)
            res.status(500).send("Database error")
        } else {
            res.send({ success: true, result: result })
        }

    })

})


// Delete password by id
app.delete('/', (req, res) => {

    const { id } = req.body

    const sql = "DELETE FROM passwords WHERE id = ?"

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.log(err)
            res.status(500).send("Database error")
        } else {
            res.send({ success: true, result: result })
        }

    })

})


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})