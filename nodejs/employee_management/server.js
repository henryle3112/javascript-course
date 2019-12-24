// express
// mysql
// body-parser
const express = require('express');
const mysql = require('mysql');

const PORT = 3000;

const app = express();

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    port: 3306,
    database: "employee_management"
});

app.get('/employees', () => {
    console.log('list of employees');
})

app.post('/employees', () => {
    console.log('add new employee');
})

dbConnect.connect(err => {
    if (err) throw err;
    console.log(`Database was connected`);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})
