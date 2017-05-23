http://www.runoob.com/nodejs/nodejs-tutorial.html

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

---

#一、简介

##1、使用的版本

我们可以使用以下命令来查看当前的 Node 版本：

	$ node -v
	v7.5.0

##2、脚本模式

实例

	console.log("Hello World");

保存该文件，文件名为 helloworld.js， 并通过 node命令来执行：
	
	> node helloworld.js
程序执行后，正常的话，就会在终端输出 Hello World。

##3、交互模式
打开终端，键入node进入命令交互模式，可以输入一条代码语句后立即执行并显示结果，例如：

	$ node
	> console.log('Hello World!');
	Hello World!

#二、安装与配置
[32 位安装包下载地址](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x86.msi)

[64 位安装包下载地址](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi)

#三、Node.js创建第一个应用

如果我们使用PHP来编写后端的代码时，需要Apache 或者 Nginx 的HTTP 服务器，并配上 mod_php5 模块和php-cgi。

从这个角度看，整个"接收 HTTP 请求并提供 Web 页面"的需求根本不需要 PHP 来处理。
不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。事实上，我们的 Web 应用以及对应的 Web 服务器基本上是一样的。

在我们创建 Node.js 第一个 "Hello, World!" 应用前，让我们先了解下 Node.js 应用是由哪几部分组成的：

+ **引入 required 模块**：我们可以使用 **require** 指令来载入 Node.js 模块。
+ **创建服务器**：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
+ **接收请求与响应请求** 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

##1、步骤一、引入 required 模块

我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http，实例如下:

	var http = require("http");

##2、步骤二、创建服务器

接下来我们使用 **http.createServer()** 方法创建服务器，并使用 **listen 方法绑定 8888 端口**。 函数通过 **request, response** 参数来接收和响应数据。
实例如下，在你项目的根目录下创建一个叫 server.js 的文件，并写入以下代码：

	var http = require('http');

	http.createServer(function (request, response) {

		// 发送 HTTP 头部 
		// HTTP 状态值: 200 : OK
		// 内容类型: text/plain
		response.writeHead(200, {'Content-Type': 'text/plain'});

		// 发送响应数据 "Hello World"
		response.end('Hello World\n');
	}).listen(8888);

	//终端打印如下信息
	console.log('Server running at http://127.0.0.1:8888/');
以上代码我们完成了一个可以工作的 HTTP 服务器。

使用 node 命令执行以上的代码：

	> node server.js
	Server running at http://127.0.0.1:8888/

接下来，打开浏览器访问 http://127.0.0.1:8888/，你会看到一个写着 "Hello World"的网页。

##3、分析Node.js 的 HTTP 服务器
+ 第一行请求（require）Node.js 自带的 **http 模块**，并且把它赋值给 http 变量。
+ 接下来我们调用 http 模块提供的函数： **createServer** 。这个函数会返回 一个对象，这个对象有一个叫做 **listen** 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。

#四、NPM 使用介绍
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

+ 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
+ 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
+ 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

	> npm -v
	4.1.2

 Window 系统使用以下命令安装升级：
	
	npm install npm -g
使用淘宝镜像的命令：

	cnpm install npm -g	

##1、使用 npm 命令安装模块
npm 安装 Node.js 模块语法格式如下：

	> npm install <Module Name>
	
以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:
	
	> npm install express
安装好之后，express 包就放在了工程目录下的 **node_modules** 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。

	var express = require('express');

##2、全局安装与本地安装
npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

	npm install express          # 本地安装
	npm install express -g       # 全局安装

	如果出现以下错误：
	npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
	解决办法为：
	> npm config set proxy null

##3、本地安装
1. 将安装包放在 **./node_modules** 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
2. 可以通过 require() 来引入本地安装的包。

##4、全局安装
1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
2. 可以直接在命令行里使用。

如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link。
接下来我们使用全局方式安装 express

	> npm install express -g

##5、查看安装信息
你可以使用以下命令来查看所有全局安装的模块：

	> npm list -g
如果要查看某个模块的版本号，可以使用命令如下：

	> npm list grunt

##6、使用 package.json
package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json属性说明

+ **name** - 包名。
+ **version** - 包的版本号。
+ **description** - 包的描述。
+ **homepage** - 包的官网 url 。
+ **author** - 包的作者姓名。
+ **contributors** - 包的其他贡献者姓名。
+ **dependencies** - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
+ **repository** - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
+ **main** - main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。
+ **keywords** - 关键字

##7、卸载模块
我们可以使用以下命令来卸载 Node.js 模块。

	> npm uninstall express
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：

	> npm ls
##8、更新模块
我们可以使用以下命令更新模块：

	> npm update express
	
##9、搜索模块
使用以下来搜索模块：

	> npm search express

##10、创建模块
创建模块**npm init**，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。

	> npm init
	This utility will walk you through creating a package.json file.
	It only covers the most common items, and tries to guess sensible defaults.

	See `npm help json` for definitive documentation on these fields
	and exactly what they do.

	Use `npm install <pkg> --save` afterwards to install a package and
	save it as a dependency in the package.json file.

	Press ^C at any time to quit.
	name: (node_modules) runoob                   # 模块名
	version: (1.0.0) 
	description: Node.js 测试模块(www.runoob.com)  # 描述
	entry point: (index.js) 
	test command: make test
	git repository: https://github.com/runoob/runoob.git  # Github 地址
	keywords: 
	author: 
	license: (ISC) 
	About to write to ……/node_modules/package.json:      # 生成地址
	
	{
  		"name": "runoob",
  		"version": "1.0.0",
  		"description": "Node.js 测试模块(www.runoob.com)",
  		……
	}

	Is this ok? (yes) yes

以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。
接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：

	> npm adduser
	Username: mcmohd
	Password:
	Email: (this IS public) mcmohd@gmail.com
接下来我们就用以下命令来发布模块：

	> npm publish
如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装。

##11、版本号
使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。
语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

+ 如果只是修复bug，需要更新Z位。
+ 如果是新增了功能，但是向下兼容，需要更新Y位。
+ 如果有大变动，向下不兼容，需要更新X位。

版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。

##12、NPM 常用命令
除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。
除了可以在npmjs.org/doc/查看官方文档外，这里再介绍一些NPM常用命令。

+ NPM提供了很多命令，例如**install**和**publish**，使用**npm help**可查看所有命令。
+ 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
+ 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
+ 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
+ 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
+ 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
+ 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

##13、使用淘宝 NPM 镜像
大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

	> npm install -g cnpm --registry=https://registry.npm.taobao.org
这样就可以使用 cnpm 命令来安装模块了：

	> cnpm install [name]

#五、Node.js REPL(交互式解释器)
Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。

Node 自带了交互式解释器，可以执行以下任务：

+ **读取** - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
+ **执行** - 执行输入的数据结构
+ **打印** - 输出结果
+ **循环** - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。

Node 的交互式解释器可以很好的调试 Javascript 代码。


我们可以输入以下命令来启动 Node 的终端：

	> node

##1、简单的表达式运算
接下来让我们在 Node.js REPL 的命令行窗口中执行简单的数学运算：

	$ node
	> 1 +4
	5
	> 5 / 2
	2.5

##2、使用变量
你可以将数据存储在变量中，并在你需要的时候使用它。
变量声明需要使用 var 关键字，如果没有使用 var 关键字变量会直接打印出来。
使用 var 关键字的变量可以使用 console.log() 来输出变量。
	
	$ node
	> x = 10
	10
	> var y = 10
	undefined
	> x + y
	20
	> console.log("Hello World")
	Hello World
	undefined

##3、多行表达式
Node REPL 支持输入多行表达式，这就有点类似 JavaScript。接下来让我们来执行一个 **do-while** 循环：

	$ node
	> var x = 0
	undefined
	> do {
	... x++;
	... console.log("x: " + x);
	... } while ( x < 5 );
	x: 1
	x: 2
	x: 3
	x: 4
	x: 5
	undefined

... 三个点的符号是系统自动生成的，你回车换行后即可。Node 会自动检测是否为连续的表达式。

##4、下划线(_)变量
你可以使用下划线(_)获取表达式的运算结果：

	$ node
	> var x = 10
	undefined
	> var y = 20
	undefined
	> x + y
	30
	> var sum = _
	undefined
	> console.log(sum)
	30
	undefined

##5、REPL 命令
+ **ctrl + c** - 退出当前终端。
+ **ctrl + c 按下两次** - 退出 Node REPL。
+ **ctrl + d** - 退出 Node REPL.
+ **向上/向下** 键 - 查看输入的历史命令
+ **tab 键** - 列出当前命令
+ **.help** - 列出使用命令
+ **.break** - 退出多行表达式
+ **.clear** - 退出多行表达式
+ **.save filename** - 保存当前的 Node REPL 会话到指定文件
+ **.load filename** - 载入当前 Node REPL 会话的文件内容。

##6、停止 REPL
前面我们已经提到按下两次 ctrl + c 键就能退出 REPL:

	$ node
	>
	(^C again to quit)

#六、Node.js 回调函数
**Node.js 异步编程的直接体现就是回调。**

**异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。**

回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

##1、阻塞代码实例

创建一个文件 input.txt ，内容如下：
	
	菜鸟教程官网地址：www.runoob.com
创建 main.js 文件, 代码如下：

	var fs = require("fs");
	var data = fs.readFileSync('input.txt');

	console.log(data.toString());
	console.log("程序执行结束!");
以上代码执行结果如下：

	$ node main.js
	菜鸟教程官网地址：www.runoob.com
	程序执行结束!

##2、非阻塞代码实例
创建一个文件 input.txt ，内容如下：

	菜鸟教程官网地址：www.runoob.com
创建 main.js 文件, 代码如下：

	var fs = require("fs");

	fs.readFile('input.txt', function (err, data) {
    	if (err) return console.error(err);
	    console.log(data.toString());
	});

	console.log("程序执行结束!");
以上代码执行结果如下：

	$ node main.js
	程序执行结束!
	菜鸟教程官网地址：www.runoob.com

以上两个实例我们了解了阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行完程序。 第二个实例我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。

因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。

#七、Node.js 事件循环
Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。

**Node.js 的每一个 API 都是异步的**，并作为一个独立线程运行，使用异步函数调用，并处理并发。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。

##1、事件驱动程序
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

![描述](http://www.runoob.com/wp-content/uploads/2015/09/event_loop.jpg)

整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

	// 引入 events 模块
	var events = require('events');
	// 创建 eventEmitter 对象
	var eventEmitter = new events.EventEmitter();
以下程序绑定事件处理程序：

	// 绑定事件及事件的处理程序
	eventEmitter.on('eventName', eventHandler);
我们可以通过程序触发事件：

	// 触发事件
	eventEmitter.emit('eventName');

##2、实例
创建 main.js 文件，代码如下所示：

	// 引入 events 模块
	var events = require('events');
	// 创建 eventEmitter 对象
	var eventEmitter = new events.EventEmitter();

	// 创建事件处理程序
	var connectHandler = function connected() {
   		console.log('连接成功。');
  
   	// 触发 data_received 事件 
   		eventEmitter.emit('data_received');
	}

	// 绑定 connection 事件处理程序
	eventEmitter.on('connection', connectHandler);
 
	// 使用匿名函数绑定 data_received 事件
	eventEmitter.on('data_received', function(){
   		console.log('数据接收成功。');
	});

	// 触发 connection 事件 
	eventEmitter.emit('connection');

	console.log("程序执行完毕。");
接下来让我们执行以上代码：

	$ node main.js
	连接成功。
	数据接收成功。
	程序执行完毕。

##3、Node 应用程序是如何工作的？
在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

接下来让我们来重新看下前面的实例，创建一个 input.txt ,文件内容如下：

	菜鸟教程官网地址：www.runoob.com
创建 main.js 文件，代码如下：

	var fs = require("fs");

	fs.readFile('input.txt', function (err, data) {
   		if (err){
      		console.log(err.stack);
      		return;
   		}
   		console.log(data.toString());
	});
	console.log("程序执行完毕");
以上程序中 fs.readFile() 是异步函数用于读取文件。 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。

如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。

执行以上代码，执行结果如下：

	程序执行完毕
	菜鸟教程官网地址：www.runoob.com
接下来我们删除 input.txt 文件，执行结果如下所示：
	
	程序执行完毕
	Error: ENOENT, open 'input.txt'
因为文件 input.txt 不存在，所以输出了错误信息。

#八、Node.js EventEmitter
Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

Node.js里面的许多对象都会分发事件：一个**net.Server**对象会在每次有新连接时分发一个事件， 一个**fs.readStream**对象会在文件被打开的时候发出一个事件。 **所有这些产生事件的对象都是 events.EventEmitter 的实例。**

##1、EventEmitter 类
**events 模块只提供了一个对象： events.EventEmitter**。EventEmitter 的核心就是**事件触发**与**事件监听器**功能的封装。

你可以通过require("events");来访问该模块。

	// 引入 events 模块
	var events = require('events');
	// 创建 eventEmitter 对象
	var eventEmitter = new events.EventEmitter();
EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。
下面我们用一个简单的例子说明 EventEmitter 的用法：

	//event.js 文件
	var EventEmitter = require('events').EventEmitter; 
	var event = new EventEmitter(); 
	event.on('some_event', function() { 
		console.log('some_event 事件触发'); 
	}); 
	setTimeout(function() { 
		event.emit('some_event'); 
	}, 1000);
执行结果如下：
	
运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。 

	$ node event.js 
	some_event 事件触发
EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
让我们以下面的例子解释这个过程：

	//event.js 文件
	var events = require('events'); 
	var emitter = new events.EventEmitter(); 
	emitter.on('someEvent', function(arg1, arg2) { 
		console.log('listener1', arg1, arg2); 
	}); 
	emitter.on('someEvent', function(arg1, arg2) { 
		console.log('listener2', arg1, arg2); 
	}); 
	emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

执行以上代码，运行的结果如下：

	$ node event.js 
	listener1 arg1 参数 arg2 参数
	listener2 arg1 参数 arg2 参数 

以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。

运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。

EventEmitter 提供了多个属性，如 **on** 和 **emit**。**on** 函数用于绑定事件函数，**emit** 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。

##2、方法
1、**addListener(event, listener)** 
>为指定事件添加一个监听器到监听器数组的尾部。

2、**on(event, listener)**

>为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。

	server.on('connection', function (stream) {
 		console.log('someone connected!');
	});
3、**once(event, listener)**
>为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

	server.once('connection', function (stream) {
  		console.log('Ah, we have our first user!');
	});
4、**removeListener(event, listener)**
>移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
它接受两个参数，第一个是事件名称，第二个是回调函数名称。

	var callback = function(stream) {
  		console.log('someone connected!');
	};
	server.on('connection', callback);
	// ...
	server.removeListener('connection', callback);
5、**removeAllListeners([event])**
>移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

6、**setMaxListeners(n)**
>默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。

7、**listeners(event)**
>返回指定事件的监听器数组。

8、**emit(event, [arg1], [arg2], [...])**
>按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

##3、类方法
**listenerCount(emitter, event)**
>返回指定事件的监听器数量。

##4、事件
1、**newListener**

+ event - 字符串，事件名称
+ listener - 处理事件函数
>该事件在添加新监听器时被触发。

2、**removeListener**

+ event - 字符串，事件名称
+ listener - 处理事件函数
>从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。

##5、实例
以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用。

创建 main.js 文件，代码如下：

	var events = require('events');
	var eventEmitter = new events.EventEmitter();

	// 监听器 #1
	var listener1 = function listener1() {
   		console.log('监听器 listener1 执行。');
	}

	// 监听器 #2
	var listener2 = function listener2() {
  		console.log('监听器 listener2 执行。');
	}

	// 绑定 connection 事件，处理函数为 listener1 
	eventEmitter.addListener('connection', listener1);

	// 绑定 connection 事件，处理函数为 listener2
	eventEmitter.on('connection', listener2);

	var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
	console.log(eventListeners + " 个监听器监听连接事件。");

	// 处理 connection 事件 
	eventEmitter.emit('connection');

	// 移除监绑定的 listener1 函数
	eventEmitter.removeListener('connection', listener1);
	console.log("listener1 不再受监听。");

	// 触发连接事件
	eventEmitter.emit('connection');

	eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
	console.log(eventListeners + " 个监听器监听连接事件。");

	console.log("程序执行完毕。");
以上代码，执行结果如下所示：

	$ node main.js
	2 个监听器监听连接事件。
	监听器 listener1 执行。
	监听器 listener2 执行。
	listener1 不再受监听。
	监听器 listener2 执行。
	1 个监听器监听连接事件。
	程序执行完毕。

#6、error 事件
EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

当 error 被触发时，EventEmitter 规定如果没有响应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

	var events = require('events'); 
	var emitter = new events.EventEmitter(); 
	emitter.emit('error'); 
运行时会显示以下错误：

	node.js:201 
	throw e; // process.nextTick error, or 'error' event on first tick 
	^ 
	Error: Uncaught, unspecified 'error' event. 
	at EventEmitter.emit (events.js:50:15) 
	at Object.<anonymous> (/home/byvoid/error.js:5:9) 
	at Module._compile (module.js:441:26) 
	at Object..js (module.js:459:10) 
	at Module.load (module.js:348:31) 
	at Function._load (module.js:308:12) 
	at Array.0 (module.js:479:10) 
	at EventEmitter._tickCallback (node.js:192:40) 

#7、继承 EventEmitter
大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

为什么要这样做呢？原因有两点：

+ 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
+ 其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

#九、Node.js Buffer(缓冲区)
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP（Transmission Control Protocol 传输控制协议）流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 **Buffer 类**，该类用来创建一个专门存放二进制数据的缓存区。

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。**一个 Buffer 类似于一个整数数组**，但它对应于 V8 堆内存之外的一块原始内存。

##1、创建 Buffer 类
Node Buffer 类可以通过多种方式来创建。

###方法 1
创建长度为 10 字节的 Buffer 实例：
	
	var buf = new Buffer(10);
###方法 2
通过给定的数组创建 Buffer 实例：

	var buf = new Buffer([10, 20, 30, 40, 50]);
###方法 3
通过一个字符串来创建 Buffer 实例：

	var buf = new Buffer("www.runoob.com", "utf-8");
utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

##2、写入缓冲区write
###语法
写入 Node 缓冲区的语法如下所示：
	
	var len = buf.write(string[, offset[, length]][, encoding])
###参数
+ **string** - 写入缓冲区的字符串。
+ **offset** - 缓冲区开始写入的索引值，默认为 0 。
+ **length** - 写入的字节数，默认为 buffer.length
+ **encoding** - 使用的编码。默认为 'utf8' 。
###返回值
返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

##2-1、实例
	buf = new Buffer(256);
	len = buf.write("www.runoob.com");

	console.log("写入字节数 : "+  len);
执行以上代码，输出结果为：
	
	$node main.js
	写入字节数 : 14

##3、从缓冲区读取数据write
###语法
读取 Node 缓冲区数据的语法如下所示：

	buf.toString([encoding[, start[, end]]])
###参数
+ encoding - 使用的编码。默认为 'utf8' 。
+ start - 指定开始读取的索引位置，默认为 0。
+ end - 结束位置，默认为缓冲区的末尾。
###返回值
解码缓冲区数据并使用指定的编码返回字符串。

##3-1、实例
	buf = new Buffer(26);
	for (var i = 0 ; i < 26 ; i++) {
  		buf[i] = i + 97;
	}

	console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
	console.log( buf.toString('ascii',0,5));   // 输出: abcde
	console.log( buf.toString('utf8',0,5));    // 输出: abcde
	console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
执行以上代码，输出结果为：

	$ node main.js
	abcdefghijklmnopqrstuvwxyz
	abcde
	abcde
	abcde

##4、将 Buffer 转换为 JSON 对象 toJSON
###语法
将 Node Buffer 转换为 JSON 对象的函数语法格式如下：

	buf.toJSON()；  // 返回 JSON 对象。
###实例
	var buf = new Buffer('www.runoob.com');
	var json = buf.toJSON(buf);

	console.log(json);
执行以上代码，输出结果为：

	[ 119, 119, 119, 46, 114, 117, 110, 111, 111, 98, 46, 99, 111, 109 ]

##5、缓冲区合并 concat
###语法
Node 缓冲区合并的语法如下所示：

	Buffer.concat(list[, totalLength])
###参数
+ list - 用于合并的 Buffer 对象数组列表。
+ totalLength - 指定合并后Buffer对象的总长度。
###返回值
返回一个多个成员合并的新 Buffer 对象。
###实例
	var buffer1 = new Buffer('菜鸟教程 ');
	var buffer2 = new Buffer('www.runoob.com');
	var buffer3 = Buffer.concat([buffer1,buffer2]);
	console.log("buffer3 内容: " + buffer3.toString());
执行以上代码，输出结果为：
	
	buffer3 内容: 菜鸟教程 www.runoob.com

##6、缓冲区比较 compare
###语法
Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：

	buf.compare(otherBuffer);
###参数
+ otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
###返回值
返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
###实例
	var buffer1 = new Buffer('ABC');
	var buffer2 = new Buffer('ABCD');
	var result = buffer1.compare(buffer2);

	if(result < 0) {
   		console.log(buffer1 + " 在 " + buffer2 + "之前");
	}else if(result == 0){
   		console.log(buffer1 + " 与 " + buffer2 + "相同");
	}else {
   		console.log(buffer1 + " 在 " + buffer2 + "之后");
	}
执行以上代码，输出结果为：
	
	ABC在ABCD之前

##7、拷贝缓冲区 copy
###语法
Node 缓冲区拷贝语法如下所示：
	buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
###参数
+ targetBuffer - 要拷贝的 Buffer 对象。
+ targetStart - 数字, 可选, 默认: 0
+ sourceStart - 数字, 可选, 默认: 0
+ sourceEnd - 数字, 可选, 默认: buffer.length
###返回值
没有返回值。
###实例
	var buffer1 = new Buffer('ABC');
	// 拷贝一个缓冲区
	var buffer2 = new Buffer(3);
	buffer1.copy(buffer2);
	console.log("buffer2 content: " + buffer2.toString());
执行以上代码，输出结果为：
	
	buffer2 content: ABC

##8、缓冲区裁剪 slice
Node 缓冲区裁剪语法如下所示：
	
	buf.slice([start[, end]])
###参数
+ start - 数字, 可选, 默认: 0
+ end - 数字, 可选, 默认: buffer.length
###返回值
返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
###实例
	var buffer1 = new Buffer('runoob');
	// 剪切缓冲区
	var buffer2 = buffer1.slice(0,2);
	console.log("buffer2 content: " + buffer2.toString());
执行以上代码，输出结果为：
	
	buffer2 content: ru

##9、缓冲区长度
###语法
Node 缓冲区长度计算语法如下所示：

	buf.length;
###返回值
返回 Buffer 对象所占据的内存长度。
###实例
	var buffer = new Buffer('www.runoob.com');
	//  缓冲区长度
	console.log("buffer length: " + buffer.length);
执行以上代码，输出结果为：
	
	buffer length: 14

#十、Node.js Stream(流)
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

Node.js，Stream 有四种流类型：

+ Readable - 可读操作。
+ Writable - 可写操作。
+ Duplex - 可读可写操作.
+ Transform - 操作被写入数据，然后读出结果。

**所有的 Stream 对象都是 EventEmitter 的实例。**常用的事件有：

+ data - 当有数据可读时触发。
+ end - 没有更多的数据可读时触发。
+ error - 在接收和写入过程中发生错误时触发。
+ finish - 所有数据已被写入到底层系统时触发。

##1、从流中读取数据
创建 input.txt 文件，内容如下：

	菜鸟教程官网地址：www.runoob.com
创建 main.js 文件, 代码如下：

	var fs = require("fs");
	var data = '';

	// 创建可读流
	var readerStream = fs.createReadStream('input.txt');

	// 设置编码为 utf8。
	readerStream.setEncoding('UTF8');

	// 处理流事件 --> data, end, and error
	readerStream.on('data', function(chunk) {
   		data += chunk;
	});

	readerStream.on('end',function(){
   		console.log(data);
	});

	readerStream.on('error', function(err){
   		console.log(err.stack);
	});

	console.log("程序执行完毕");
以上代码执行结果如下：

	程序执行完毕
	菜鸟教程官网地址：www.runoob.com

##2、写入流
创建 main.js 文件, 代码如下：

	var fs = require("fs");
	var data = '菜鸟教程官网地址：www.runoob.com';

	// 创建一个可以写入的流，写入到文件 output.txt 中
	var writerStream = fs.createWriteStream('output.txt');

	// 使用 utf8 编码写入数据
	writerStream.write(data,'UTF8');

	// 标记文件末尾
	writerStream.end();

	// 处理流事件 --> finish, error
	writerStream.on('finish', function() {
    	console.log("写入完成。");
	});

	writerStream.on('error', function(err){
   		console.log(err.stack);
	});

	console.log("程序执行完毕");
以上程序会将 data 变量的数据写入到 output.txt 文件中。代码执行结果如下：

	$ node main.js 
	程序执行完毕
	写入完成。
查看 output.txt 文件的内容：

	$ cat output.txt 
	菜鸟教程官网地址：www.runoob.com

##3、管道流
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

![形象图](http://www.runoob.com/wp-content/uploads/2015/09/bVcla61)

如上面的图片所示，我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。设置 input.txt 文件内容如下：

	菜鸟教程官网地址：www.runoob.com
	管道流操作实例

创建 main.js 文件, 代码如下：

	var fs = require("fs");

	// 创建一个可读流
	var readerStream = fs.createReadStream('input.txt');

	// 创建一个可写流
	var writerStream = fs.createWriteStream('output.txt');

	// 管道读写操作
	// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
	readerStream.pipe(writerStream);

	console.log("程序执行完毕");
代码执行结果如下：

	$ node main.js 
	程序执行完毕
查看 output.txt 文件的内容：
	$ cat output.txt 
	菜鸟教程官网地址：www.runoob.com
	管道流操作实例

##4、链式流
链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
接下来我们就是用管道和链式来压缩和解压文件。

创建 compress.js 文件, 代码如下：

	var fs = require("fs");
	var zlib = require('zlib');

	// 压缩 input.txt 文件为 input.txt.gz
	fs.createReadStream('input.txt')
  	.pipe(zlib.createGzip())
  	.pipe(fs.createWriteStream('input.txt.gz'));
  
	console.log("文件压缩完成。");
代码执行结果如下：

	$ node compress.js 
	文件压缩完成。

执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。

接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：

	var fs = require("fs");
	var zlib = require('zlib');

	// 解压 input.txt.gz 文件为 input.txt
	fs.createReadStream('input.txt.gz')
		.pipe(zlib.createGunzip())
	    .pipe(fs.createWriteStream('input.txt'));
  
	console.log("文件解压完成。");
代码执行结果如下：

	$ node decompress.js 
	文件解压完成。

#十一、Node.js模块系统
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
##1、创建模块
在 Node.js 中，创建一个模块非常简单，如下我们创建一个 'main.js' 文件，代码如下:

	var hello = require('./hello');
	hello.world();
以上实例中，代码 require('./hello') 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）。

Node.js 提供了**exports** 和 **require** 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

接下来我们就来创建hello.js文件，代码如下：

	exports.world = function() {
  		console.log('Hello World');
	}
在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访问接口，在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。

有时候我们只是想把一个对象封装到模块中，格式如下：

	module.exports = function() {
  		// ...
	}
例如:

	//hello.js 
	function Hello() { 
		var name; 
		this.setName = function(thyName) { 
			name = thyName; 
		}; 
		this.sayHello = function() { 
			console.log('Hello ' + name); 
		}; 
	}; 
	module.exports = Hello;
这样就可以直接获得这个对象了：

	//main.js 
	var Hello = require('./hello'); 
	hello = new Hello(); 
	hello.setName('BYVoid'); 
	hello.sayHello(); 
模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

#十二、Node.js 函数
在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

Node.js中函数的使用与Javascript类似，举例来说，你可以这样做：

	function say(word) {
  		console.log(word);
	}

	function execute(someFunction, value) {
  		someFunction(value);
	}

	execute(say, "Hello");
以上代码中，我们把 say 函数作为execute函数的第一个变量进行了传递。这里返回的不是 say 的返回值，而是 say 本身！

这样一来， say 就变成了execute 中的本地变量 someFunction ，execute可以通过调用 someFunction() （带括号的形式）来使用 say 函数。

当然，因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。

##1、匿名函数
我们可以把一个函数作为变量传递。但是我们不一定要绕这个"先定义，再传递"的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数：
	
	function execute(someFunction, value) {
  		someFunction(value);
	}

	execute(function(word){ console.log(word) }, "Hello");
我们在 execute 接受第一个参数的地方直接定义了我们准备传递给 execute 的函数。
用这种方式，我们甚至不用给这个函数起名字，这也是为什么它被叫做匿名函数 。

##2、函数传递是如何让HTTP服务器工作的
带着这些知识，我们再来看看我们简约而不简单的HTTP服务器：

	var http = require("http");

	http.createServer(function(request, response) {
  		response.writeHead(200, {"Content-Type": "text/plain"});
  		response.write("Hello World");
  		response.end();
	}).listen(8888);
现在它看上去应该清晰了很多：我们向 createServer 函数传递了一个匿名函数。

用这样的代码也可以达到同样的目的：

	var http = require("http");

	function onRequest(request, response) {
  		response.writeHead(200, {"Content-Type": "text/plain"});
  		response.write("Hello World");
  		response.end();
	}
	http.createServer(onRequest).listen(8888);

#十三、Node.js 路由
我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码。

因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。

我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是**url**和**querystring**模块。
<pre>
                   url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]
</pre>
当然我们也可以用querystring模块来解析POST请求体中的参数，稍后会有演示。

现在我们来给onRequest()函数加上一些逻辑，用来找出浏览器请求的URL路径：

	var http = require("http");
	var url = require("url");

	function start() {
  		function onRequest(request, response) {
    		var pathname = url.parse(request.url).pathname;
    		console.log("Request for " + pathname + " received.");
    		response.writeHead(200, {"Content-Type": "text/plain"});
    		response.write("Hello World");
    		response.end();
  		}

  		http.createServer(onRequest).listen(8888);
  		console.log("Server has started.");
	}

	exports.start = start;
好了，我们的应用现在可以通过请求的URL路径来区别不同请求了--这使我们得以使用路由（还未完成）来将请求以URL路径为基准映射到处理程序上。

在我们所要构建的应用中，这意味着来自/start和/upload的请求可以使用不同的代码来处理。稍后我们将看到这些内容是如何整合到一起的。

现在我们可以来编写路由了，建立一个名为 router.js 的文件，添加以下内容：

	function route(pathname) {
  		console.log("About to route a request for " + pathname);
	}
	exports.route = route;
如你所见，这段代码什么也没干，不过对于现在来说这是应该的。在添加更多的逻辑以前，我们先来看看如何把路由和服务器整合起来。

我们的服务器应当知道路由的存在并加以有效利用。我们当然可以通过硬编码的方式将这一依赖项绑定到服务器上，但是其它语言的编程经验告诉我们这会是一件非常痛苦的事，因此我们将使用依赖注入的方式较松散地添加路由模块。

首先，我们来扩展一下服务器的start()函数，以便将路由函数作为参数传递过去，server.js 文件代码如下

	var http = require("http");
	var url = require("url");

	function start(route) {
  		function onRequest(request, response) {
    		var pathname = url.parse(request.url).pathname;
    		console.log("Request for " + pathname + " received.");

    		route(pathname);

    		response.writeHead(200, {"Content-Type": "text/plain"});
    		response.write("Hello World");
    		response.end();
  		}
	
  		http.createServer(onRequest).listen(8888);
  		console.log("Server has started.");
	}

	exports.start = start;

同时，我们会相应扩展index.js，使得路由函数可以被注入到服务器中：

	var server = require("./server");
	var router = require("./router");

	server.start(router.route);

在这里，我们传递的函数依旧什么也没做。

如果现在启动应用（node index.js，始终记得这个命令行），随后请求一个URL，你将会看到应用输出相应的信息，这表明我们的HTTP服务器已经在使用路由模块了，并会将请求的路径传递给路由：

	$ node index.js
	Server has started.
以上输出已经去掉了比较烦人的/favicon.ico请求相关的部分。

#十四、Node.js 全局对象
**JavaScript 中有一个特殊的对象，称为全局对象（Global Object）**，它及其所有属性都可以在程序的任何地方访问，即全局变量。

**在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。**

在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

##1、全局对象与全局变量
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条件的变量是全局变量：

+ 在最外层定义的变量；
+ 全局对象的属性；
+ 隐式定义的变量（未定义直接赋值的变量）。

当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。

**注意**： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。

##2、__filename
__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

创建文件 main.js ，代码如下所示：

	// 输出全局变量 __filename 的值
	console.log( __filename );
执行 main.js 文件，代码如下所示:
	
	$ node main.js
	/web/com/runoob/nodejs/main.js

##3、__dirname
__dirname 表示当前执行脚本所在的目录。创建文件 main.js ，代码如下所示：

	// 输出全局变量 __dirname 的值
	console.log( __dirname );
执行 main.js 文件，代码如下所示:

	$ node main.js
	/web/com/runoob/nodejs

##4、setTimeout(cb, ms)
setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。返回一个代表定时器的句柄值。

###实例
创建文件 main.js ，代码如下所示：

	function printHello(){
   		console.log( "Hello, World!");
	}
	// 两秒后执行以上函数
	setTimeout(printHello, 2000);
执行 main.js 文件，代码如下所示:

	$ node main.js
	Hello, World!

##5、clearTimeout(t)
clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
###实例
创建文件 main.js ，代码如下所示：

	function printHello(){
   		console.log( "Hello, World!");
	}
	// 两秒后执行以上函数
	var t = setTimeout(printHello, 2000);

	// 清除定时器
	clearTimeout(t);
执行 main.js 文件，代码如下所示:

	$ node main.js

##6、setInterval(cb, ms)
**setInterval(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。

返回一个代表定时器的句柄值。可以使用 **clearInterval(t)** 函数来清除定时器。

setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
###实例
创建文件 main.js ，代码如下所示：

	function printHello(){
   		console.log( "Hello, World!");
	}
	// 两秒后执行以上函数
	setInterval(printHello, 2000);
执行 main.js 文件，代码如下所示:

	$ node main.js Hello, World! Hello, World!……
以上程序每隔两秒就会输出一次"Hello, World!"，且会永久执行下去，直到你按下 ctrl + c 按钮。

##7、console

##8、progress
process 是一个全局变量，即 global 对象的属性。

它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。

#十五、Node.js 常用工具
util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能过于精简的不足。

##1、util.inherits 原型继承
util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。

JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过**原型复制**来实现的。

在这里我们只介绍util.inherits 的用法，示例如下：

	var util = require('util'); 
	function Base() { 
		this.name = 'base'; 
		this.base = 1991; 
		this.sayHello = function() { 
			console.log('Hello ' + this.name); 
		}; 
	} 
	Base.prototype.showName = function() { 
		console.log(this.name);
	}; 

	function Sub() { 
		this.name = 'sub'; 
	} 
	util.inherits(Sub, Base); 
	var objBase = new Base(); 
	objBase.showName(); 
	objBase.sayHello(); 
	console.log(objBase); 
	var objSub = new Sub(); 
	objSub.showName(); 
	//objSub.sayHello(); 
	console.log(objSub); 

我们定义了一个基础对象Base 和一个继承自Base 的Sub，Base 有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承。运行结果如下：

	base 
	Hello base 
	{ name: 'base', base: 1991, sayHello: [Function] } 
	sub 
	{ name: 'sub' }

注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属性和 sayHello 函数都没有被 Sub 继承。

同时，在原型中定义的属性不会被console.log 作为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会看到：

	node.js:201 
	throw e; // process.nextTick error, or 'error' event on first tick 
	^ 
	TypeError: Object #&lt;Sub&gt; has no method 'sayHello' 
	at Object.&lt;anonymous&gt; (/home/byvoid/utilinherits.js:29:8) 
	at Module._compile (module.js:441:26) 
	at Object..js (module.js:459:10) 
	at Module.load (module.js:348:31) 
	at Function._load (module.js:308:12) 
	at Array.0 (module.js:479:10) 
	at EventEmitter._tickCallback (node.js:192:40) 

##2、util.inspect
util.inspect(object,[showHidden],[depth],[colors]) 是一个**将任意对象转换为字符串的方法，通常用于调试和错误输出。**它至少接受一个参数 object，即要转换的对象。

showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。

depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。 

如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮的效果。

特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对象定义了toString 方法也不会调用。

	var util = require('util'); 
	function Person() { 
		this.name = 'byvoid'; 
		this.toString = function() { 
			return this.name; 
		}; 
	} 
	var obj = new Person(); 
	console.log(util.inspect(obj)); 
	console.log(util.inspect(obj, true)); 
运行结果是：

	Person { name: 'byvoid', toString: [Function] }
	Person {
  		name: 'byvoid',
  		toString: 
   			{ [Function]
     			[length]: 0,
     			[name]: '',
     			[arguments]: null,
     			[caller]: null,
     			[prototype]: { [constructor]: [Circular] } } }

##3、util.isArray(object)
如果给定的参数 "object" 是一个数组返回true，否则返回false。

	var util = require('util');

	util.isArray([])  // true
	util.isArray(new Array)  // true
	util.isArray({})  // false	

##4、util.isRegExp(object)
如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

	var util = require('util');

	util.isRegExp(/some regexp/)  // true
	util.isRegExp(new RegExp('another regexp'))  // true
	util.isRegExp({})  // false

##5、util.isDate(object)
如果给定的参数 "object" 是一个日期返回true，否则返回false。

	var util = require('util');

	util.isDate(new Date())  // true
	util.isDate(Date())  // false (without 'new' returns a String)
	util.isDate({})  // false
##6、util.isError(object)
如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

	var util = require('util');

	util.isError(new Error())  // true
	util.isError(new TypeError())  // true
	util.isError({ name: 'Error', message: 'an error occurred' })  // false

#十六、Node.js 文件系统
Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入**文件系统模块(fs)**语法如下所示：

	var fs = require("fs")
##1、异步和同步
**Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。**

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

建议大家是用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
###实例
创建 input.txt 文件，内容如下：
	
	菜鸟教程官网地址：www.runoob.com
	文件读取实例

创建 file.js 文件, 代码如下：

	var fs = require("fs");

	// 异步读取
	fs.readFile('input.txt', function (err, data) {
   		if (err) {
       		return console.error(err);
   		}
   		console.log("异步读取: " + data.toString());
	});

	// 同步读取
	var data = fs.readFileSync('input.txt');
	console.log("同步读取: " + data.toString());

	console.log("程序执行完毕。");
以上代码执行结果如下：

	$ node file.js 
	同步读取: 菜鸟教程官网地址：www.runoob.com
	文件读取实例

	程序执行完毕。
	异步读取: 菜鸟教程官网地址：www.runoob.com
	文件读取实例

##2、打开文件
以下为在异步模式下打开文件的语法格式：

	fs.open(path, flags[, mode], callback)
###参数使用说明如下：

+ path - 文件的路径。
+ flags - 文件打开的行为。具体值详见下文。
+ mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
+ callback - 回调函数，带有两个参数如：callback(err, fd)。

###实例
接下来我们创建 file.js 文件，并打开 input.txt 文件进行读写，代码如下所示：

	var fs = require("fs");

	// 异步打开文件
	console.log("准备打开文件！");
	fs.open('input.txt', 'r+', function(err, fd) {
   		if (err) {
       		return console.error(err);
   		}
  		console.log("文件打开成功！");     
	});
以上代码执行结果如下：
	
	$ node file.js 
	准备打开文件！
	文件打开成功！

##3、获取文件信息
以下为通过异步模式获取文件信息的语法格式：

	fs.stat(path, callback)
###参数

+ path - 文件路径。
+ callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。

fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：

	var fs = require('fs');

	fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
	    console.log(stats.isFile()); 		//true
	});

###stats类中的方法有：

+ **stats.isFile()**	  如果是文件返回 true，否则返回 false。
+ **stats.isDirectory()**	如果是目录返回 true，否则返回 false。
+ **stats.isBlockDevice()**	如果是块设备返回 true，否则返回 false。
+ **stats.isCharacterDevice()**	如果是字符设备返回 true，否则返回 false。
+ **stats.isSymbolicLink()**	如果是软链接返回 true，否则返回 false。
+ **stats.isFIFO()**	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
+ **stats.isSocket()**	如果是 Socket 返回 true，否则返回 false。

###实例
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");

	console.log("准备打开文件！");
	fs.stat('input.txt', function (err, stats) {
   		if (err) {
       		return console.error(err);
   		}
   		console.log(stats);
   		console.log("读取文件信息成功！");
   
   		// 检测文件类型
   		console.log("是否为文件(isFile) ? " + stats.isFile());
   		console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
	});
以上代码执行结果如下：

	$ node file.js 
	准备打开文件！
	{ dev: 16777220,
  		mode: 33188,
  		nlink: 1,
  		uid: 501,
  		gid: 20,
  		rdev: 0,
  		blksize: 4096,
  		ino: 40333161,
  		size: 61,
  		blocks: 8,
  		atime: Mon Sep 07 2015 17:43:55 GMT+0800 (CST),
  		mtime: Mon Sep 07 2015 17:22:35 GMT+0800 (CST),
  		ctime: Mon Sep 07 2015 17:22:35 GMT+0800 (CST) }
	读取文件信息成功！
	是否为文件(isFile) ? true
	是否为目录(isDirectory) ? false

##4、写入文件
以下为异步模式下写入文件的语法格式：

	fs.writeFile(file, data[, options], callback)
**如果文件存在，该方法写入的内容会覆盖旧的文件内容。**
###参数

+ file - 文件名或文件描述符。
+ data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
+ options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
+ callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
###实例
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");

	console.log("准备写入文件");
	fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
   		if (err) {
       		return console.error(err);
   		}
   		console.log("数据写入成功！");
   		console.log("--------我是分割线-------------")
   		console.log("读取写入的数据！");
   		fs.readFile('input.txt', function (err, data) {
      		if (err) {
         		return console.error(err);
      		}
      		console.log("异步读取文件数据: " + data.toString());
   		});
	});
以上代码执行结果如下：

	$ node file.js 
	准备写入文件
	数据写入成功！
	--------我是分割线-------------
	读取写入的数据！
	异步读取文件数据: 我是通过写入的文件内容

##5、读取文件
以下为异步模式下读取文件的语法格式：

	fs.read(fd, buffer, offset, length, position, callback)
该方法使用了文件描述符来读取文件。
###参数
+ fd - 通过 fs.open() 方法返回的文件描述符。
+ buffer - 数据写入的缓冲区。
+ offset - 缓冲区写入的写入偏移量。
+ length - 要从文件中读取的字节数。
+ position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
+ callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
###实例
input.txt 文件内容为：

	菜鸟教程官网地址：www.runoob.com
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");
	var buf = new Buffer(1024);

	console.log("准备打开已存在的文件！");
	fs.open('input.txt', 'r+', function(err, fd) {
   		if (err) {
       		return console.error(err);
   		}
   		console.log("文件打开成功！");
   		console.log("准备读取文件：");
   		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      		if (err){
         		console.log(err);
      		}
      		console.log(bytes + "  字节被读取");
      
      		// 仅输出读取的字节
      		if(bytes > 0){
         		console.log(buf.slice(0, bytes).toString());
      		}
   		});
	});
以上代码执行结果如下：

	$ node file.js 
	准备打开已存在的文件！
	文件打开成功！
	准备读取文件：
	42  字节被读取
	菜鸟教程官网地址：www.runoob.com

##6、关闭文件
以下为异步模式下关闭文件的语法格式：

	fs.close(fd, callback)
该方法使用了文件描述符来读取文件。
###参数
+ fd - 通过 fs.open() 方法返回的文件描述符。
+ callback - 回调函数，没有参数。
###实例
input.txt 文件内容为：

	菜鸟教程官网地址：www.runoob.com
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");
	var buf = new Buffer(1024);

	console.log("准备打开文件！");
	fs.open('input.txt', 'r+', function(err, fd) {
   		if (err) {
       		return console.error(err);
   		}
   		console.log("文件打开成功！");
   		console.log("准备读取文件！");
   		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      		if (err){
         		console.log(err);
      		}

      		// 仅输出读取的字节
      		if(bytes > 0){
         		console.log(buf.slice(0, bytes).toString());
      		}

      		// 关闭文件
      		fs.close(fd, function(err){
         		if (err){
            		console.log(err);
         		} 
         		console.log("文件关闭成功");
      		});
   		});
	});
以上代码执行结果如下：

	$ node file.js 
	准备打开文件！
	文件打开成功！
	准备读取文件！
	菜鸟教程官网地址：www.runoob.com
	文件关闭成功

##7、截取文件
以下为异步模式下截取文件的语法格式：

	fs.ftruncate(fd, len, callback)
该方法使用了文件描述符来读取文件。
###参数
+ fd - 通过 fs.open() 方法返回的文件描述符。
+ len - 文件内容截取的长度。
+ callback - 回调函数，没有参数。
###实例
input.txt 文件内容为：

	site:www.runoob.com
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");
	var buf = new Buffer(1024);

	console.log("准备打开文件！");
	fs.open('input.txt', 'r+', function(err, fd) {
   		if (err) {
       		return console.error(err);
   		}
   		console.log("文件打开成功！");
   		console.log("截取10字节后的文件内容。");
   
   		// 截取文件
   		fs.ftruncate(fd, 10, function(err){
      		if (err){
         		console.log(err);
      		} 
      		console.log("文件截取成功。");
      		console.log("读取相同的文件"); 
      		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         		if (err){
            		console.log(err);
         		}

		        // 仅输出读取的字节
         		if(bytes > 0){
            		console.log(buf.slice(0, bytes).toString());
         		}	

	           // 关闭文件
         		fs.close(fd, function(err){
            		if (err){
               			console.log(err);
            		} 
            		console.log("文件关闭成功！");
         		});
      		});
   		});
	});
以上代码执行结果如下：

	$ node file.js 
	准备打开文件！
	文件打开成功！
	截取10字节后的文件内容。
	文件截取成功。
	读取相同的文件
	site:www.r
	文件关闭成功

##8、删除文件
以下为删除文件的语法格式：

	fs.unlink(path, callback)
###参数
+ path - 文件路径。
+ callback - 回调函数，没有参数。
###实例
input.txt 文件内容为：

	site:www.runoob.com
接下来我们创建 file.js 文件，代码如下所示：
	var fs = require("fs");

	console.log("准备删除文件！");
	fs.unlink('input.txt', function(err) {
   		if (err) {
       		return console.error(err);
   		}
   		console.log("文件删除成功！");
	});
以上代码执行结果如下：
	
	$ node file.js 
	准备删除文件！
	文件删除成功！
	再去查看 input.txt 文件，发现已经不存在了。

##9、创建目录
以下为创建目录的语法格式：

	fs.mkdir(path[, mode], callback)
###参数
+ path - 文件路径。
+ mode - 设置目录权限，默认为 0777。
+ callback - 回调函数，没有参数。
###实例
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");

	console.log("创建目录 /tmp/test/");
	fs.mkdir("/tmp/test/",function(err){
   		if (err) {
       		return console.error(err);
   		}
   		console.log("目录创建成功。");
	});
以上代码执行结果如下：

	$ node file.js 
	创建目录 /tmp/test/
	目录创建成功。

##10、读取目录
以下为读取目录的语法格式：

	fs.readdir(path, callback)
###参数
+ path - 文件路径。
+ callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。
###实例
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");

	console.log("查看 /tmp 目录");
	fs.readdir("/tmp/",function(err, files){
   		if (err) {
       		return console.error(err);
   		}
   		files.forEach( function (file){
       		console.log( file );
   		});
	});
以上代码执行结果如下：

	$ node file.js 
	查看 /tmp 目录
	input.out
	output.out
	test
	test.txt

##11、删除目录
以下为删除目录的语法格式：

	fs.rmdir(path, callback)
###参数
+ path - 文件路径。
+ callback - 回调函数，没有参数。
###实例
接下来我们创建 file.js 文件，代码如下所示：

	var fs = require("fs");
	// 执行前创建一个空的 /tmp/test 目录
	
	console.log("准备删除目录 /tmp/test");
	fs.rmdir("/tmp/test",function(err){
   		if (err) {
       		return console.error(err);
   		}
   		console.log("读取 /tmp 目录");
   		fs.readdir("/tmp/",function(err, files){
      		if (err) {
          		return console.error(err);
      		}
      		files.forEach( function (file){
          		console.log( file );
      		});
   		});
	});
以上代码执行结果如下：

	$ node file.js 
	准备删除目录 /tmp/test
	读取 /tmp 目录
	……

#十七、Node.js GET/POST请求
在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。

表单提交到服务器一般都使用 GET/POST 请求。本章节我们将为大家介绍 Node.js GET/POST请求。
###获取GET请求内容
由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。

node.js 中 url 模块中的 parse 函数提供了这个功能。
###实例
	var http = require('http');
	var url = require('url');
	var util = require('util');
 
	http.createServer(function(req, res){
	    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	    res.end(util.inspect(url.parse(req.url, true)));
	}).listen(3000);

##1、获取 URL 的参数
我们可以使用 url.parse 方法来解析 URL 中的参数，代码如下：

	var http = require('http');
	var url = require('url');
	var util = require('util');
 
	http.createServer(function(req, res){
    	res.writeHead(200, {'Content-Type': 'text/plain'});
 
	    // 解析 url 参数
    	var params = url.parse(req.url, true).query;
    	res.write("网站名：" + params.name);
    	res.write("\n");
    	res.write("网站 URL：" + params.url);
    	res.end();
 
	}).listen(3000);
在浏览器中访问 http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com

##2、获取 POST 请求内容
POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。

比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所有node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。
基本语法结构说明

	var http = require('http');
	var querystring = require('querystring');
 
	http.createServer(function(req, res){
	    // 定义了一个post变量，用于暂存请求体的信息
    	var post = '';     
 
    	// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    	req.on('data', function(chunk){    
        	post += chunk;
    	});
 
    	// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
   		req.on('end', function(){    
        	post = querystring.parse(post);
        	res.end(util.inspect(post));
    	});
	}).listen(3000);
以下实例表单通过 POST 提交并输出数据：

	var http = require('http');
	var querystring = require('querystring');
 
	var postHTML = 
 	 '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>
	<body>
		<form method="post">
			网站名： <input name="name"><br>	
			网站 URL： <input name="url"><br>
			<input type="submit">
		</form>
	</body></html>';
 
	http.createServer(function (req, res) {
  		var body = "";
  		req.on('data', function (chunk) {
    		body += chunk;
  		});
  		req.on('end', function () {
    		// 解析参数
    		body = querystring.parse(body);
		    // 设置响应头部信息及编码
		    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    		if(body.name && body.url) { // 输出提交的数据
        		res.write("网站名：" + body.name);
        		res.write("<br>");
       			res.write("网站 URL：" + body.url);
    		} else {  // 输出表单
        		res.write(postHTML);
    		}
    		res.end();
  		});
	}).listen(3000);

#十八、Node.js Web 模块
##1、什么是 Web 服务器？
Web服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，Web服务器的基本功能就是提供Web信息浏览服务。它只需支持**HTTP协议、HTML文档格式及URL**，与客户端的网络浏览器配合。

大多数 web 服务器都支持服务端的脚本语言（php、python、ruby）等，并通过脚本语言从数据库获取数据，将结果返回给客户端浏览器。

目前最主流的三个Web服务器是Apache、Nginx、IIS。
##2、Web 应用架构
![结构图](http://www.runoob.com/wp-content/uploads/2015/09/web_architecture.jpg)

+ **Client** - 客户端，一般指浏览器，浏览器可以通过 HTTP 协议向服务器请求数据。
+ **Server** - 服务端，一般指 Web 服务器，可以接收客户端请求，并向客户端发送响应数据。
+ **Business** - 业务层， 通过 Web 服务器处理应用程序，如与数据库交互，逻辑运算，调用外部程序等。
+ **Data** - 数据层，一般由数据库组成。

##3、使用 Node 创建 Web 服务器
Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端，使用 HTTP 服务器或客户端功能必须调用 http 模块，代码如下：

	var http = require('http');
以下是演示一个最基本的 HTTP 服务器架构（使用8081端口），创建 server.js 文件，代码如下所示：

	var http = require('http');
	var fs = require('fs');
	var url = require('url');

	// 创建服务器
	http.createServer( function (request, response) {  
   		// 解析请求，包括文件名
   		var pathname = url.parse(request.url).pathname;
   
   		// 输出请求的文件名
   		console.log("Request for " + pathname + " received.");
   
   		// 从文件系统中读取请求的文件内容
   		fs.readFile(pathname.substr(1), function (err, data) {
      		if (err) {
         		console.log(err);
         		// HTTP 状态码: 404 : NOT FOUND
         		// Content Type: text/plain
         		response.writeHead(404, {'Content-Type': 'text/html'});
      		}else{	         
         		// HTTP 状态码: 200 : OK
         		// Content Type: text/plain
         		response.writeHead(200, {'Content-Type': 'text/html'});	
         
         		// 响应文件内容
         		response.write(data.toString());		
      		}
      		//  发送响应数据
      		response.end();
   		});   
	}).listen(8081);

	// 控制台会输出以下信息
	console.log('Server running at http://127.0.0.1:8081/');
接下来我们在该目录下创建一个 index.htm 文件，代码如下：

	<html>
		<head>
			<title>Sample Page</title>
		</head>
		<body>
			Hello World!
		</body>
	</html>
执行 server.js 文件：

	$ node server.js
	Server running at http://127.0.0.1:8081/

接着我们在浏览器中打开地址：http://127.0.0.1:8081/index.htm

##4、使用 Node 创建 Web 客户端
Node 创建 Web 客户端需要引入 http 模块，创建 client.js 文件，代码如下所示：

	var http = require('http');

	// 用于请求的选项
	var options = {
   		host: 'localhost',
   		port: '8081',
   		path: '/index.htm'  
	};

	// 处理响应的回调函数
	var callback = function(response){
   		// 不断更新数据
   		var body = '';
   		response.on('data', function(data) {
      		body += data;
   		});
   
   		response.on('end', function() {
	      	// 数据接收完成
      		console.log(body);
   		});
	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();
新开一个终端，执行 client.js 文件，输出结果如下：

	$ node client.js
	<html>
		<head>
			<title>Sample Page</title>
		</head>
		<body>
			Hello World!
		</body>
	</html>
执行 server.js 的控制台输出信息如下：

	Server running at http://127.0.0.1:8081/
	Request for /index.htm received.   # 客户端请求信息

#十九、Node.js Express 框架
##1、Express 简介
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。
###Express 框架核心特性：

+ 可以设置中间件来响应 HTTP 请求。
+ 定义了路由表用于执行不同的 HTTP 请求动作。
+ 可以通过向模板传递参数来动态渲染 HTML 页面。

##2、安装 Express
安装 Express 并将其保存到依赖列表中：

	$ cnpm install express --save
以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。以下几个重要的模块是需要与 express 框架一起安装的：

+ **body-parser** - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
+ **cookie-parser** - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
+ **multer** - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

安装

	$ cnpm install body-parser --save
	$ cnpm install cookie-parser --save
	$ cnpm install multer --save
安装完后，我们可以查看下 express 使用的版本号：

	$ cnpm list express
	/data/www/node
	└── express@4.15.2  -> /Users/tianqixin/www/node/node_modules/.4.15.2@express

##3、第一个 Express 框架实例
接下来我们使用 Express 框架来输出 "Hello World"。

以下实例中我们引入了 express 模块，并在客户端发起请求后，响应 "Hello World" 字符串。

创建 express_demo.js 文件，代码如下所示：

	//express_demo.js 文件
	var express = require('express');
	var app = express();
 
	app.get('/', function (req, res) {
   		res.send('Hello World');
	});
 
	var server = app.listen(8081, function () {
 
  		var host = server.address().address
  		var port = server.address().port
 
  		console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
	})
执行以上代码：

	$ node express_demo.js 
	应用实例，访问地址为 http://0.0.0.0:8081

##4、请求和响应
Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。

	app.get('/', function (req, res) {
   		// --
	})
###request 和 response 对象的具体介绍：
**Request 对象** - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

+ req.app：当callback为外部文件时，用req.app访问express的实例
+ req.baseUrl：获取路由当前安装的URL路径
+ req.body / req.cookies：获得「请求主体」/ Cookies
+ req.fresh / req.stale：判断请求是否还「新鲜」
+ req.hostname / req.ip：获取主机名和IP地址
+ req.originalUrl：获取原始请求URL
+ req.params：获取路由的parameters
+ req.path：获取请求路径
+ req.protocol：获取协议类型
+ req.query：获取URL的查询参数串
+ req.route：获取当前匹配的路由
+ req.subdomains：获取子域名
+ req.accepts()：检查可接受的请求的文档类型
+ req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
+ req.get()：获取指定的HTTP请求头
+ req.is()：判断请求头Content-Type的MIME类型

**Response 对象** - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

+ res.app：同req.app一样
+ res.append()：追加指定HTTP头
+ res.set()在res.append()后将重置之前设置的头
+ res.cookie(name，value [，option])：设置Cookie
+ opition: domain / expires / httpOnly / maxAge / path / secure / signed
+ res.clearCookie()：清除Cookie
+ res.download()：传送指定路径的文件
+ res.get()：返回指定的HTTP头
+ res.json()：传送JSON响应
+ res.jsonp()：传送JSONP响应
+ res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
+ res.redirect()：设置响应的Location HTTP头，并且设置状态码302
+ res.send()：传送HTTP响应
+ res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
+ res.set()：设置HTTP头，传入object可以一次设置多个头
+ res.status()：设置HTTP状态码
+ res.type()：设置Content-Type的MIME类型

##5、路由
我们已经了解了 HTTP 请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。

在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。

接下来我们扩展 Hello World，添加一些功能来处理更多类型的 HTTP 请求。

创建 express_demo2.js 文件，代码如下所示：

	var express = require('express');
	var app = express();
 
	//  主页输出 "Hello World"
	app.get('/', function (req, res) {
   		console.log("主页 GET 请求");
   		res.send('Hello GET');
	});
 
	//  POST 请求
	app.post('/', function (req, res) {
   		console.log("主页 POST 请求");
   		res.send('Hello POST');
	});
 
	//  /del_user 页面响应
	app.get('/del_user', function (req, res) {
   		console.log("/del_user 响应 DELETE 请求");
   		res.send('删除页面');
	});
 
	//  /list_user 页面 GET 请求
	app.get('/list_user', function (req, res) {
   		console.log("/list_user GET 请求");
   		res.send('用户列表页面');
	});
 
	// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
	app.get('/ab*cd', function(req, res) {   
   		console.log("/ab*cd GET 请求");
   		res.send('正则匹配');
	});
 
	var server = app.listen(8081, function () {
		var host = server.address().address
  		var port = server.address().port
 
		console.log("应用实例，访问地址为 http://%s:%s", host, port)
	});
执行以上代码：

	$ node express_demo2.js 
	应用实例，访问地址为 http://0.0.0.0:8081

##6、静态文件
Express 提供了内置的中间件 **express.static** 来设置静态文件如：图片， CSS, JavaScript 等。

你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：

	app.use(express.static('public'));
我们可以到 public/images 目录下放些图片，如下所示：

	node_modules
	server.js
	public/
	public/images
	public/images/logo.png
让我们再修改下 "Hello World" 应用添加处理静态文件的功能。创建 express_demo3.js 文件，代码如下所示：

	var express = require('express');
	var app = express();
 
	app.use(express.static('public'));
 
	app.get('/', function (req, res) {
	   res.send('Hello World');
	});
 
	var server = app.listen(8081, function () {
  		var host = server.address().address
  		var port = server.address().port
 
  		console.log("应用实例，访问地址为 http://%s:%s", host, port)
	});
执行以上代码：

	$ node express_demo3.js 
	应用实例，访问地址为 http://0.0.0.0:8081
在浏览器中访问 http://127.0.0.1:8081/images/logo.png（本实例采用了菜鸟教程的logo）

##7、GET 方法
以下实例演示了在表单中通过 GET 方法提交两个参数，我们可以使用 server.js 文件内的 process_get 路由器来处理输入：index.htm 文件代码：

	<html>
		<body>
			<form action="http://127.0.0.1:8081/process_get" method="GET">
				First Name: <input type="text" name="first_name">  <br>
				Last Name: <input type="text" name="last_name">
				<input type="submit" value="Submit">
			</form>
		</body>
	</html>

server.js 文件代码：

	var express = require('express');
	var app = express();
 
	app.use(express.static('public'));
 
	app.get('/index.htm', function (req, res) {
		res.sendFile( __dirname + "/" + "index.htm" );
	})；
 
	app.get('/process_get', function (req, res) {
 
   		// 输出 JSON 格式
   		response = {
       		first_name:req.query.first_name,
       		last_name:req.query.last_name
   		};
   		console.log(response);
   		res.end(JSON.stringify(response));
	})；
 
	var server = app.listen(8081, function () {
 
  		var host = server.address().address
  		var port = server.address().port
 
  		console.log("应用实例，访问地址为 http://%s:%s", host, port)
	})；
执行以上代码：

	node server.js 
	应用实例，访问地址为 http://0.0.0.0:8081
浏览器访问 http://127.0.0.1:8081/index.htm

##8、POST 方法
以下实例演示了在表单中通过 POST 方法提交两个参数，我们可以使用 server.js 文件内的 **process_post** 路由器来处理输入：index.htm 文件代码：

	<html>
		<body>
			<form action="http://127.0.0.1:8081/process_post" method="POST">
				First Name: <input type="text" name="first_name">  <br>
				Last Name: <input type="text" name="last_name">
				<input type="submit" value="Submit">
			</form>
		</body>
	</html>

server.js 文件代码：

	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
 
	// 创建 application/x-www-form-urlencoded 编码解析
	var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
	app.use(express.static('public'));
 
	app.get('/index.htm', function (req, res) {
   		res.sendFile( __dirname + "/" + "index.htm" );
	})；
 
	app.post('/process_post', urlencodedParser, function (req, res) {
 
   		// 输出 JSON 格式
   		response = {
       		first_name:req.body.first_name,
       		last_name:req.body.last_name
   		};
   		console.log(response);
   		res.end(JSON.stringify(response));
	});
 
	var server = app.listen(8081, function () {
		var host = server.address().address
  		var port = server.address().port
 
  		console.log("应用实例，访问地址为 http://%s:%s", host, port)
	})
执行以上代码：

	$ node server.js
	应用实例，访问地址为 http://0.0.0.0:8081
浏览器访问 http://127.0.0.1:8081/index.htm

##9、文件上传
以下我们创建一个用于上传文件的表单，使用 POST 方法，表单 enctype 属性设置为 multipart/form-data。index.htm 文件代码：

	<html>
		<head>
			<title>文件上传表单</title>
		</head>
		<body>
			<h3>文件上传：</h3>
			选择一个文件上传: <br />
			<form action="/file_upload" method="post" enctype="multipart/form-data">
				<input type="file" name="image" size="50" />
				<br />
				<input type="submit" value="上传文件" />
			</form>
		</body>
	</html>

server.js 文件代码：

	var express = require('express');
	var app = express();
	var fs = require("fs");

	var bodyParser = require('body-parser');
	var multer  = require('multer');

	app.use(express.static('public'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(multer({ dest: '/tmp/'}).array('image'));

	app.get('/index.htm', function (req, res) {
			res.sendFile( __dirname + "/" + "index.htm" );
	});

	app.post('/file_upload', function (req, res) {
    	console.log(req.files[0]);  // 上传的文件信息

		var des_file = __dirname + "/" + req.files[0].originalname;
		fs.readFile( req.files[0].path, function (err, data) {
			fs.writeFile(des_file, data, function (err) {
	 			if( err ){
	      			console.log( err );
	 			}else{
	       			response = {
	           			message:'File uploaded successfully', 
	           			filename:req.files[0].originalname
	      			};
	  			}
	  			console.log( response );
	  			res.end( JSON.stringify( response ) );
			});
		});
	})

	var server = app.listen(8081, function () {
	  	var host = server.address().address
			var port = server.address().port

		console.log("应用实例，访问地址为 http://%s:%s", host, port)
	});
执行以上代码：

	$ node server.js 
	应用实例，访问地址为 http://0.0.0.0:8081
浏览器访问 http://127.0.0.1:8081/index.htm

##10、Cookie 管理
我们可以使用中间件向 Node.js 服务器发送 cookie 信息，以下代码输出了客户端发送的 cookie 信息：

	// express_cookie.js 文件
	var express = require('express')
	var cookieParser = require('cookie-parser')
 
	var app = express()
	app.use(cookieParser())
 
	app.get('/', function(req, res) {
  		console.log("Cookies: ", req.cookies)
	})；
 
	app.listen(8081)
执行以上代码：

	$ node express_cookie.js 
现在你可以访问 http://127.0.0.1:8081 并查看终端信息的输出

#二十、Node.js 多进程
我们都知道 **Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发**，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

每个子进程总是带有三个流对象：**child.stdin, child.stdout 和child.stderr**。他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。

Node 提供了 child_process 模块来创建子进程，方法有：

+ **exec** - child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
+ **spawn** - child_process.spawn 使用指定的命令行参数创建新进程。
+ **fork** - child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork('./son.js') 相当于 spawn('node', ['./son.js']) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。

#二十一、Node.js 连接 MySQL
本章节我们将为大家介绍如何使用 Node.js 来连接 MySQL，并对数据库进行操作。

本教程使用到的 Websites 表 SQL 文件：websites.sql。
###安装驱动
本教程使用了淘宝定制的 cnpm 命令进行安装：

	$ cnpm install mysql
###连接数据库
在以下实例中修改根据你的实际配置修改数据库用户名、及密码及数据库名：

test.js 文件代码：

	var mysql = require('mysql');
	var connection = mysql.createConnection({
  		host     : 'localhost',
  		user     : 'root',
  		password : '123456',
  		database : 'test'
	});
 
	connection.connect();
 
	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  		if (error) throw error;
  		console.log('The solution is: ', results[0].solution);
	});
执行以下命令输出就结果为：

	$ node test.js
	The solution is: 2

##1、数据库操作( CURD )
在进行数据库操作前，你需要将本站提供的 Websites 表 SQL 文件websites.sql 导入到你的 MySQL 数据库中。

本教程测试的 MySQL 用户名为 root，密码为 123456，数据库为 test，你需要根据自己配置情况修改。

##2、查询数据
将上面我们提供的 SQL 文件导入数据库后，执行以下代码即可查询出数据：

	var mysql  = require('mysql');  
	 
	var connection = mysql.createConnection({     
	  host     : 'localhost',       
	  user     : 'root',              
	  password : '123456',       
	  port: '3306',                   
	  database: 'test', 
	}); 
	 
	connection.connect();
	 
	var  sql = 'SELECT * FROM websites';
	//查
	connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('---------------SELECT----------------------------');
       console.log(result);
	});
 
	connection.end();
执行以下命令输出就结果为：

	$ node test.js
	--------------------------SELECT----------------------------
	[ RowDataPacket {
	    id: 1,
	    name: 'Google',
	    url: 'https://www.google.cm/',
	    alexa: 1,
    	country: 'USA' },
  	RowDataPacket {
	    id: 2,
	    name: '淘宝',
	    url: 'https://www.taobao.com/',
    	alexa: 13,
    	country: 'CN' },
  	RowDataPacket {
	    id: 3,
	    name: '菜鸟教程',
    	url: 'http://www.runoob.com/',
    	alexa: 4689,
    	country: 'CN' } ]

##3、插入数据
我们可以向数据表 websties 插入数据：
###插入数据

	var mysql  = require('mysql');  
	var connection = mysql.createConnection({     
  		host     : 'localhost',       
  		user     : 'root',              
  		password : '123456',       
  		port: '3306',                   
  		database: 'test', 
	}); 
 
	connection.connect();
 
	var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
	var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
	//增
	connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
    	     console.log('[INSERT ERROR] - ',err.message);
    	     return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
});
 
	connection.end();
执行以下命令输出就结果为：

	$ node test.js

##4、更新数据
我们也可以对数据库的数据进行修改：

	var mysql  = require('mysql');  
 
	var connection = mysql.createConnection({     
  		host     : 'localhost',       
  		user     : 'root',              
  		password : '123456',       
  		port: '3306',                   
  		database: 'test', 
	}); 
 
	connection.connect();
 
	var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
	var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
	//改
	connection.query(modSql,modSqlParams,function (err, result) {
   		if(err){
        	console.log('[UPDATE ERROR] - ',err.message);
         	return;
   		}        
  		console.log('--------------------------UPDATE----------------------------');
		console.log('UPDATE affectedRows',result.affectedRows);
	});
 
	connection.end();
执行以下命令输出就结果为：

	--------------------------UPDATE----------------------------
	UPDATE affectedRows 1
##5、删除数据
我们可以使用以下代码来删除 id 为 6 的数据:

	var mysql  = require('mysql');  
 
	var connection = mysql.createConnection({     
  		host     : 'localhost',       
  		user     : 'root',              
  		password : '123456',       
  		port: '3306',                   
  		database: 'test', 
	}); 
 
	connection.connect();
 
	var delSql = 'DELETE FROM websites where id=6';
	//删
	connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
	});
 
	connection.end();
执行以下命令输出就结果为：

	--------------------------DELETE----------------------------
	DELETE affectedRows 1