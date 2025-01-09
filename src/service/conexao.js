const mysql = require('mysql2/promise.js');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'tiago_leads',
  password: '1234',
  database: 'leads_db',
});

module.exports = pool;
