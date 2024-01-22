
      
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeedb",
    port: 3306
}); 

// Attempt to connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Handle disconnect event
// connection.on('error', (err) => {
//     console.error('Database error:', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//         console.log('Attempting to reconnect to the database...');
//         connection.connect();
//     } else {
//         throw err;
//     }
// });

module.exports = {sql:connection};


