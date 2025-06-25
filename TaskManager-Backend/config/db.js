const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',      
    password:'',     
    database: 'task_manager',
  });

module.exports = db;

