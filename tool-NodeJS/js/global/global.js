//1、__filename 表示当前正在执行的脚本的文件名
console.log(__filename);

//2、__dirname 表示当前执行脚本所在的目录
console.log(__dirname);

function printHello(){
	console.log("Hello~");
}
// 3、setTimeout(fn, ms)
var t = setTimeout(printHello, 1000);

// 4、clearTimeout(t)
clearTimeout(t);

var t1 = setInterval(function(){
	console.log("world");
}, 1000);
clearInterval(t1);