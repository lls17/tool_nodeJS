var events = require("events");
var emitter = new events.EventEmitter();
//emitter.emit('error');

//监听器1
function listener1(){
	console.log("监听 1 开始..");
}

//监听器2
function listener2(){
	console.log("监听 2 开始..");
}

//两种方式绑定监听
emitter.on("connect", listener1);
emitter.addListener("connect", listener1);

//获取监听数量
var listenCount = events.EventEmitter.listenerCount(emitter, 'connect');
console.log(listenCount + " 个监听器监听连接事件。");

//触发绑定事件
emitter.emit("connect");

//解绑
emitter.removeListener("connect", listener1);

listenCount = events.EventEmitter.listenerCount(emitter, 'connect');
console.log(listenCount + " 个监听器监听连接事件。");

emitter.emit('connect');
