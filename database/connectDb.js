const mysql = require("mysql2");

const connection = mysql.createPool({
    host: "127.0.0.1",
    database: "ars-media",
    user: "root",
    password: ""
}).promise();

module.exports = connection;