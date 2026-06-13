require("dotenv").config();

const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql2")
const connect = express()
connect.use(cors({
    origin: "*"
}))
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({ extended: true }))
let databaseconnection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

console.log("HOST:", process.env.MYSQL_HOST);
console.log("DB:", process.env.MYSQL_DATABASE);

databaseconnection.query("SELECT 1", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("database connected");
    }
});

connect.get("/", (req, res) => {
    res.send("Learner Backend Running");
});

// insert data in enroll_now table from enroll
connect.post('/enroll', (request, response) => {
    let { fname, lname, email, phoneno, selectcourse, education, experience, motivate, learn } = request.body
    let sql = 'insert into enroll_now(fname,lname,email,phoneno,selectcourse,education,experience,motivate,learn) values(?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [fname, lname, email, phoneno, selectcourse, education, experience, motivate, learn], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log(" data added ok")
        }
    })
})

// enroll_now all data
connect.get('/enrolldetails', (request, response) => {
    let sql = 'select * from enroll_now'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})

// Single enrolldetails
connect.get('/singleenroll/:id', (request, response) => {
    let { id } = request.params
    let sql = 'select * from enroll_now where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})

// update enroll details
connect.put('/enrollupdate/:id', (request, response) => {
    let { id } = request.params
    let { fname, lname, email, phoneno, selectcourse, education, experience, motivate, learn } = request.body
    let sql = 'update enroll_now set fname=?,lname=?,email=?,phoneno=?,selectcourse=?,education=?,experience=?,motivate=?,learn=? where id=?'
    databaseconnection.query(sql, [fname, lname, email, phoneno, selectcourse, education, experience, motivate, learn, id], (error, result) => {
        if (error) {
            response.send({ "status": "not_updated" })
            console.log(error)
        }
        else {
            response.send({ "status": "success", "id": id })
            console.log("ok")
        }
    })
})

// delete the enroll
connect.post('/delete', (request, response) => {
    let id = request.body.id
    let sql = 'delete from enroll_now where id=?'
    databaseconnection.query(sql, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "deleted" })
            console.log("ok")
        }
    })
})

// database connection
const PORT = process.env.PORT || 5831;

connect.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`);
})