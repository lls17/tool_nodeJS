//1、加载http模块
var http = require("http");

//2、创建服务器，监听端口
http.createServer(function(request, response){
	
	// 发送 HTTP 头部
	// HTTP状态值  200：OK
	// 内容类型  text/plain
	response.writeHead(200, {'Content-Type':'text/plain'});
	
	// 发送响应数据
	response.end('hello world!\n');
}).listen(8888);

//终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
