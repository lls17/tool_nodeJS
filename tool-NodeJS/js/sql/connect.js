var mysql = require("mysql");

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'test'
});

connection.connect();

connection.query('SELECT 1+1 AS solution', function(err, results, fields){
	if(err){
		console.error(err);
	}
	console.log("The solution is: ", results[0].solution);
});
