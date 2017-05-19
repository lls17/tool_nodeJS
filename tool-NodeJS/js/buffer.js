// Buffer是node的内部类，类数组

// 1-有3种声明方式
// 方法一、长度为10字节
var buf1 = new Buffer(10);
// 方法二、数组声明
var buf2 = new Buffer([2,4,6,8]);
// 方法三、字符创
var buf3 = new Buffer("Hello Buffer", "utf-8");
console.log(buf1);  //<Buffer 38 e5 20 22 cb 01 00 00 80 e4>
console.log(buf2);  //<Buffer 02 04 06 08>
console.log(buf3);  //<Buffer 48 65 6c 6c 6f 20 42 75 66 66 65 72>


// 2-写入内存
var len = buf3.write("Hello");
console.log("写入字节数 : "+  len);  //5

// 3-从缓存区读取
console.log("读取toString：" + buf3.toString()); // Hello Buffer

// 4-将Buffer转为JSON对象
console.log("转为JSON对象：" + buf3.toJSON());
//{ type: 'Buffer',
// data: [ 72, 101, 108, 108, 111, 32, 66, 117, 102, 102, 101, 114 ] }

// 5-合并缓存
var bufTemp = Buffer.concat( [buf2, buf3] );
console.log(bufTemp.toString());

// 6-缓存比较
var result = buf2.compare(buf3);
if(result < 0) {
    console.log(buf2 + " 在 " + buf3 + "之前");
}else if(result == 0){
    console.log(buf2 + " 与 " + buf3 + "相同");
}else {
    console.log(buf2 + " 在 " + buf3 + "之后");
}

// 7-缓存拷贝
var buf4 = new Buffer("ABC");
var buf5 = new Buffer(buf4.length);
buf4.copy(buf5);
console.log(buf5.toString()); //ABC

var buf6 = buf4;
console.log(buf6.toString()); //ABC

// 8-缓存剪切
var buf7 = buf3.slice(2,5);
console.log(buf7.toString()); //llo

// 9-缓存长度
var len = buf7.length;
console.log(buf7.toString() + "的长度为：" + len);


