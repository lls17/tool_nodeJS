var fs = require("fs");
var zlib = require("zlib");

//压缩
fs.createReadStream('../arti.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('arti.txt.gz'));
	
console.log("文件压缩完成");
