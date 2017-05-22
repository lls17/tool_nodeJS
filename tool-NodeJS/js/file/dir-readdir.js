var fs = require("fs");

console.log("查看/tmp目录:");
fs.readdir("tmp", function(err, files){
	if(err){
		return console.error(err);
	}
	files.forEach(function(item){
		console.log(item);
	})
});
