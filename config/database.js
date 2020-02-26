const mysql = require('mysql');


const dbCon = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB
});

dbCon.connect((err) => {
    if (err) throw err;
    console.log('connected');
})

module.exports = dbCon;