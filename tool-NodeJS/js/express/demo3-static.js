var express = require("express");
var app = express();

//静态文件(访问路径无需在URL上体现)
app.use(express.static("public"));

app.get("/", function(req, res){
	res.send("Hello World!");
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
