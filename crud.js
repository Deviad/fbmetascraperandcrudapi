/**
 * Created by Davide Pugliese on 25/02/17.
 */


var mysql = require('mysql');

var crud  = function () {


    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'whatever',
        password: 'XXXXXXXXXXXXXXXXXXXXXX'
    });

    connection.connect();


    connection.query('INSERT INTO Users SET example1 = ?, example2 = ?, example3 = ? WHERE id = ?', [msg, parentId, theEvent, user, 0, 0], function (error, results, fields) {
        if (error) throw error;

    });

    connection.end();

};
module.exports = crud;