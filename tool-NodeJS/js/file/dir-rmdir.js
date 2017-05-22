var fs = require("fs");

console.log("准备删除目录 /tmp/forRM");
fs.rmdir("tmp/test/forRM", function(err){
	if(err){
		return console.error(err);
	}
	
	console.log("重新读取目录tmp:");
	fs.readdir("tmp", function(err, files){
		if(err){
			return console.error(err);
		}
		files.forEach(function(item){
			console.log(item);
		});
	})
});
