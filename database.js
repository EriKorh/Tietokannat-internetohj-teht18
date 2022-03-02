const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test_db2'
});
module.exports = connection;