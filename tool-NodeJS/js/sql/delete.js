var mysql = require("mysql");

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '',
	database : 'test'
});

connection.connect();

var sql = "DELETE FROM jd.friends WHERE id = 3";

connection.query(sql, function(err, result){
	if(err){
    	console.log('[DELETE ERROR] - ',err.message);
		return;
    }        

	console.log('--------------------------DELETE----------------------------');
   	console.log('DELETE affectedRows',result.affectedRows);
});
