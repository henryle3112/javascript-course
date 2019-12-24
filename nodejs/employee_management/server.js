// express
// mysql
// body-parser
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    port: 3306,
    database: "employee_management"
});

app.get('/employees', (req, res) => {
    // const employees = [
    //     {
    //         id: 1,
    //         name: 'David',
    //         age: 18,
    //         salary: 500
    //     },
    //     {
    //         id: 2,
    //         name: 'Jack',
    //         age: 18,
    //         salary: 600
    //     },
    //     {
    //         id: 1,
    //         name: 'Helios',
    //         age: 18,
    //         salary: 700
    //     }
    // ];

    let sqlGetEmployees = 'SELECT * FROM employee';

    dbConnect.query(sqlGetEmployees, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });

    // res.send(employees);
})

app.get("/employees/:id", (req, res) => {
    const selectedEmployeeId = req.params.id;
    const sqlGetEmployeeById = `SELECT * FROM employee WHERE id = ${selectedEmployeeId}`;
    dbConnect.query(sqlGetEmployeeById, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
});

app.post('/employees', (req, res) => {
    // res.send(req.body);
    const sqlAddEmployee = `INSERT INTO employee (name, age, salary) VALUES ?`;
    const newEmployee = [
        [
            req.body.name,
            req.body.age,
            req.body.salary
        ]
    ]
    dbConnect.query(sqlAddEmployee, [newEmployee], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

app.put('/employees', () => {
    console.log('update employee');
});

app.delete('/employees', () => {
    console.log('delete employee');
})

dbConnect.connect(err => {
    if (err) throw err;
    console.log(`Database was connected`);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})