const mysql = require('mysql2');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'german',
    connectionLimit: 10,
    queueLimit: 0
  });
  
  module.exports = db.promise();