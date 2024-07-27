// Import the mysql2 module to interact with a MySQL database.
const mysql = require('mysql2')

// Create a connection pool to the MySQL database using the createPool method.
// The pool object manages multiple connections to improve performance and handle multiple concurrent requests.
const pool = mysql.createPool({
    host: process.env.DB_HOST, // The hostname of the database server (e.g., 'localhost' or a remote server address).
    user: process.env.DB_USERNAME, // The username used to authenticate with the MySQL database.
    password: process.env.DB_PASSWORD, // The password used to authenticate with the MySQL database.
    database: process.env.DB_DBNAME, // The name of the specific database to use.
    waitForConnections: true, // Determines if the pool should queue connection requests when all connections are in use.
    connectionLimit: 10, // The maximum number of connections allowed in the pool.
    queueLimit: 0 // The maximum number of connection requests the pool will queue. 0 means no limit.
});

// Get a connection from the pool to test if the connection is successful.
pool.getConnection((err, conn) => {
    // If there is an error in getting the connection, log the error.
    if(err) console.log(err)
    // If no error occurs, log a success message.
    console.log("Connected successfully")
    // Release the connection back to the pool after use.
    if (conn) conn.release();
})

// Export the pool object with promise support, allowing the use of promises instead of callbacks for async operations.
module.exports = pool
