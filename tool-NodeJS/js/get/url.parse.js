var http = require("http");
var url = require("url");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	//解析URL参数
	var params = url.parse(req.url, true).query;
	console.log(params);
	res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}).listen(3333);
