var http = require("http");

//匿名函数调用
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write("Hello World!");
	response.end();
}).listen(8888);
