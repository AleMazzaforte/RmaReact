require('dotenv').config(); // Cargar el archivo .env

const mysql = require('mysql2');

const poolConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    queueLimit: 0
});


module.exports = {
    conn: poolConnection.promise(),
    
}
