//加载fs模块 —— 文件读取
var fs = require("fs");

//读取数据
fs.readFile("arti.txt", function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
})

console.log("--执行END--");
