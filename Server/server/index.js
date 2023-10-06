const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');



const storeEx = express();

storeEx.use(cors());
storeEx.use(bodyParser.json());
storeEx.use(express.json());
storeEx.use(bodyParser.urlencoded({ extended: true }));
storeEx.use(express.static('public'));

const localdb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Inte6net@123",
    database: "final_project"
});

localdb.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("DB connected!");
    }
});


storeEx.post('/register', (request, response) => {
    const { username, email, password, ph_no, role } = request.body;
    const insertquery = 'INSERT INTO users (username, email, password, ph_no, role) VALUES (?, ?, ?, ?, ?)';
    localdb.query(insertquery, [username, email, password, ph_no, role], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            response.send({ "status": "success" });
            console.log("Data inserted successfully");
        }
    });
});

storeEx.post('/login', (request, response) => {
    const { email, password } = request.body
    let loginquery = 'select * from users where email=?'
    localdb.query(loginquery, [email], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        } else if (result.length > 0) {
            let dbusername = result[0].email
            let dbpassword = result[0].password
            let id = result[0].id
            let role = result[0].role
            console.log(dbusername)
            console.log(dbpassword) 

            if (dbusername === email && dbpassword === password) {
                response.send({ "status": "success", "id": id, "role": role })
            } else {
                response.send({ "status": "invalid" })
            }
        } else {
            response.send({ "status": "empty_set" })
        }
    })
})


storeEx.get('/getone/:id', (request, response) => {
    let { id } = request.params;
    let getonequerry = 'select * from users where id=?';
    localdb.query(getonequerry, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            response.send(result);
            console.log(result);
        }
    });
});


storeEx.post('/getonee/:id', (request, response) => {
    let { id } = request.params;
    console.log(id);
    let getonequerry = 'select * from employee where id=?';
    localdb.query(getonequerry, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            response.send({ "status": "success" });
            console.log(result);
        }
    });
});

//profile
storeEx.post('/getoneee/:id', (request, response) => {
    let { id } = request.params;
    console.log(id);
    let getonequerry = 'select * from users where id=?';
    localdb.query(getonequerry, [id], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            response.send({ "status": "success" });
            console.log(result);
        }
    });
});



storeEx.get("/", (req, res) => {
    const getquerry = "select * from employee";
    localdb.query(getquerry, (error, data) => {
        if (error) return res.json("error");
        return res.json(data);
    })
})


//for getall
//for getall
storeEx.get('/getall', (request, response) => { // Switched request and response
    let selectquery = 'SELECT *  FROM employee';
    localdb.query(selectquery, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        } else {
            response.send(result)
        }
    })
})          

storeEx.put('/update/:id', (request, response) => {
    let { id } = request.params
    let { name, email, password, salary, address } = request.body
    const updateQuery = 'update employee set name=?, email=?, password=?, salary=?, address=? where id=?';
        localdb.query(updateQuery, [name, email, password, salary, address,id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})


//for delete employee
// Handle the POST request for deleting data
storeEx.post('/delete', (request, response) => {
    let  id = request.body.id;
    // console.log(id.id)
    let deleteQuery = "delete from employee where id=?";
    localdb.query(deleteQuery, [id], (error, result) => {
        if (error) {
            // console.error(error);
            response.send({ "status": "error" });
        } else {
            console.log(result);
            response.send({ "status": "success" });
        }
    });
});






//for add employee
storeEx.post('/create', (request, response) => {
    const { name, email, password, salary, address } = request.body;
    const addquery = 'INSERT INTO employee (name,email,password,salary,address) VALUES (?, ?, ?, ?, ?)';
    localdb.query(addquery, [name, email, password, salary, address], (error, result) => {
        if (error) {
            response.send({ "status": "error" });
            console.log(error);
        } else {
            response.send({ "status": "success" });
            console.log("Data inserted successfully");
        }
    });
});


storeEx.get('/api/total-employees', (req, res) => {
    const getCountQuery = 'SELECT COUNT(*) AS total_employees FROM employee';
  
    localdb.query(getCountQuery, (error, result) => {
      if (error) {
        console.error("Error fetching total employee count:", error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        const totalEmployees = result[0].total_employees;
        res.json({ totalEmployees });
      }
    });
  });
  
storeEx.get('/api/total-count', (req, res) => {
    const getCountQuery = 'SELECT COUNT(*) AS total_employees FROM employee';
  
    localdb.query(getCountQuery, (error, result) => {
      if (error) {
        console.error("Error fetching total employee count:", error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        const totalEmployees = result[0].total_employees;
        res.json({ totalEmployees });
      }
    });
  });

storeEx.listen(3050, () => {
    console.log("Your server is running on port 3050");
});
