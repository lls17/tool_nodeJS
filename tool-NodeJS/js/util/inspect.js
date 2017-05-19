var util = require("util");

function Person(){
	this.name = "LLS";
	this.toString = function(){
		return this.name;
	};
}

var obj = new Person();
console.log(obj.toString()); //LLS
console.log(util.inspect(obj)); //Person { name: 'LLS', toString: [Function] }
console.log(util.inspect(obj, true));
//Person {
//name: 'LLS',
//toString:
// { [Function]
//   [length]: 0,
//   [name]: '',
//   [arguments]: null,
//   [caller]: null,
//   [prototype]: { [constructor]: [Circular] } } }
