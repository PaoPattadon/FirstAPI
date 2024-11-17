const express = require('express')
const app = express()
const port = 3000


const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jubjub',
  password: 'jubmeng',
  database: 'studentdb'
})

connection.connect()
if (connection) {console.log("Connection success");}
else {console.log("Failed");}

// app.get('/allstudent', (req, res) => {
//     connection.query('SELECT * from student', (err, rows, fields) => {
//         if (err) throw err
//         res.send(rows)
//     })
// });

// app.get('/Clear', (req, res) => {
//     connection.query('DELETE from student', (err, rows, fields) => {
//         if (err) throw err
//         res.send("Clear all DB success")
//     })
// });
//test2
//test

app.get('/find_by_id', (req, res) => {
    let id = req.query.id;
    let query = 'SELECT * from student WHERE id='+id;
    console.log(query);
    
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/add_std', (req, res) => {
    let name = req.query.name;
    let surname = req.query.surname;
    let id = req.query.id;
    let query = `INSERT INTO student(name, surname, id) 
                VALUES ('${name}','${surname}','${id}')`;
    console.log(query);
    
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
