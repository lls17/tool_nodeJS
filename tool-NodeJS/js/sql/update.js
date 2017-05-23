var mysql = require("mysql");

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '',
	database : 'test'
});

connection.connect();

var sql = "UPDATE jd.friends SET name=? , sex=? WHERE id=?";
var params = ['MomSong', 0, 1];

//更新
connection.query(sql, params, function(err, result){
	if(err){
		return console.log('[UPDATE ERROR] - ',err.message);
	}
	console.log('---------------Update----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
});
