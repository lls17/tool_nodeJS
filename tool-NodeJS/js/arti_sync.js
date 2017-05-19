//加载fs模块 —— 文件读取
var fs = require("fs");

//异步读取数据
var data = fs.readFileSync('arti.txt');

console.log(data.toString());
console.log("--执行END--");
