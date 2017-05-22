var fs = require("fs");

fs.stat("../arti.js", function(err, stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log("读取文件成功！");
	
	//文件类型检查
	console.log("是否为文件(isFile)：" + stats.isFile());
	console.log("是否为目录(isDirectory)：" + stats.isDirectory());
});
