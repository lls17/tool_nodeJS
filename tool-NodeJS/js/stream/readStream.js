var fs = require("fs");
var data = '';

// 创建可读流
var readStream = fs.createReadStream("../arti.txt");

// 设置编码
readStream.setEncoding("UTF8");

// 处理流事件 ——> data, end, error
readStream.on('data', function(result){
	data += result;
});

readStream.on('end', function(){
	console.log(data);
});

readStream.on('error', function(err){
	console.log(err);
});

console.log("程序执行完毕");
