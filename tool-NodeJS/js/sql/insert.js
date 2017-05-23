var mysql = require("mysql");

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	port : '3306',
	database : 'test'
});

connection.connect();

var sql = "INSERT INTO jd.friends VALUES (3, 'Song', 1)";
//新增
connection.query(sql, function(err, result){
	if(err){
		return console.log('[INSERT ERROR] - ',err.message);
	}
	console.log('---------------Insert----------------------------');
    console.log(result);
})
