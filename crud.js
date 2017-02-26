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


    connection.query('INSERT INTO Discussion SET message = ?, parent_id = ?, the_ = ? WHERE id = ?', [msg, parentId, theEvent, user, 0, 0], function (error, results, fields) {
        if (error) throw error;

    });

    connection.end();

};
module.exports = crud;