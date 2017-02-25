/**
 * Created by Davide Pugliese on 25/02/17.
 */


var mysql = require('mysql');

var crud  = function () {


    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'alumni',
        password: '8YPHFxmsWz2QY28H'
    });

    connection.connect();





    connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
        if (err) throw err;

        console.log('The solution is: ', rows[0].solution);
    });

    connection.end();

};
module.exports = crud;