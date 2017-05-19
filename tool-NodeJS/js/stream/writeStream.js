var fs = require("fs");
var data = "开飞机的舒克~";

// 创建可以写入的流，写到output.txt
var writeStream = fs.createWriteStream('write.txt');

// 使用utf8编码写入数据
writeStream.write(data, 'UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件   ——> finish, error
writeStream.on("finish", function(){
	console.log("写入完成。");
});

writeStream.on('error', function(err){
	console.log(err);
});

console.log("程序执行完毕");


