var fs = require("fs");

//创建一个可读流
var readStream = fs.createReadStream('../arti.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('out.txt');

//管道读写操作
//读取arti.txt文件内容，并将内容写到output.txt文件中
readStream.pipe(writeStream);

console.log("程序执行完毕");
