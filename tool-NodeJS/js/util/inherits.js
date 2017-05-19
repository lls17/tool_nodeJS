var util = require("util");

function Base(){
	this.name = "Base";
	this.base = 1991;
	this.sayHello = function(){
		console.log("Hello," + this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub(){
	this.name = "Sub";
}

//继承——只有原型中的方法被继承，而构造函数中的属性和方法均未被继承
util.inherits(Sub, Base);

var oBase = new Base();
oBase.showName(); //Base
oBase.sayHello(); //Hello,Base
console.log(oBase); //Base { name: 'Base', base: 1991, sayHello: [Function] }

var oSub = new Sub();  
oSub.showName(); //Sub
//oSub.sayHello();  //Error
console.log(oSub); //Sub { name: 'Sub' }



