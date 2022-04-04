const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host: 'sistemas.cltyrw3mbzls.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    port: "3306",
    database: 'sistemas'
});

sqlConnecion.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
