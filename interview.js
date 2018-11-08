一、行标签都有哪些？特点？
  1.每一个快属性标签都是从新的一行开始，而且之后的元素也都会从新的一行开始
      （因为每一个块属性标签都会直接占据一整行的内容，导致下面的内容也只能从新的一行开始）
    2.块属性标签都是可以设置宽度、高度，行高，距顶部距离，距底部距离
    3.块属性标签的宽度假如不做设置，会直接默认为父元素宽度的100%
    4.块属性标签是可以直接嵌套的
    5.p标签中不能嵌套div标签
    块标签有
    <div>、<p>、<h1>…<h6>、<ol>、<ul>、<li>、<address>、<blockquote>、<form>
  行内标签
  1.行属性标签它和其它标签处在同一行内
  2.行属性标签无法设置宽度，高度 行高 距顶部距离 距底部距离
  3.行属性标签的宽度是直接由内部的文字或者图片等内容撑开的
  4.行属性标签内部不能嵌套行属性标签（a链接内不能嵌套其他链接）
  行内标签有
  <a>、<span>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>

----------------------------------------------------------------------------
二、img标签的用法
  <img src="img/fishing.jpg" alt="Mr Green's Fish Emporium" width="100%"></img>
  alt是提供替代图片的信息，使屏幕阅读器能获取关于图片的信息，即对图片作简要说明，这不会影响图片显示
  width和height是图片的宽度和高度（若指定width="100%"，表示不管图片尺寸，将图片设置为浏览器宽度的100%，自动按照比例确定图片高度）

----------------------------------------------------------------------------
三、请描述一下cookies，sessionStorage和localStorage的区别？
1、cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。
2、存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
3、数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。
4、作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

-----------------------------------------------------------------------------
四、针对移动浏览器端开发页面，不期望用户放大屏幕，且要求“视口（viewport）”宽度等于屏幕宽度，视口高度等于设备高度，如何设置？
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximun-scale=1, user-scale=no"></meta>

-----------------------------------------------------------------------------
五、data-id取值
var myDiv = document.querySelector('#my-div');

myDiv.dataset.info // "some info here"
myDiv.dataset.otherInfo

$(this).data("id")

-----------------------------------------------------------------------------
六。什么是浏览器的标准模式（standards mode）和怪异模式（quirks mode）?
W3C标准推出以后，浏览器都开始采纳新标准，但存在一个问题就是如何保证旧的网页还能继续浏览，在标准出来以前，很多页面都是根据旧的渲染方法编写的，如果用的标准来渲染，将导致页面显示异常。为保持浏览器渲染的兼容性，使以前的页面能够正常浏览，浏览器都保留了旧的渲染方法（如：微软的IE）。这样浏览器渲染上就产生了Quircks mode和Standars mode，两种渲染方法共存在一个浏览器上。

如何判定是标准还是怪异：

执行以下代码
alert(window.top.document.compatMode) ;

-----------------------------------------------------------------------------
七： BFC(Block Formatting Context)是什么？有哪些应用？
浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为“visiable”的块级盒子，都会为他们的内容创建新的BFC（块级格式上下文）。
BFC就是一种布局方式，在这种布局方式下，盒子们自所在的containing block顶部一个接一个垂直排列，水平方向上撑满整个宽度（除非内部盒子自己建立了新的BFC）。两个相邻的BFC之间的距离由margin决定。在同一个BFC内部，两个垂直方向相邻的块级元素的margin会发生“塌陷”。

触发BFC：

float属性不为none
overflow不为visible(可以是hidden、scroll、auto)
position为absolute或fixed
display为inline-block、table-cell、table-caption
应用：
1.解决margin叠加问题。
2. 清除内部浮动。
3. 创建自适应两栏布局。

-----------------------------------------------------------------------------
八、函数中的arguments是什么？是数组吗？若不是，如何将它转化为真正的数组？
arguments是一个内置对象，所有函数都具有属于自己的arguments对象，它包含了函数的所有参数，可以通过使用arguments对象让函数能够调用数量不定的参数。
arguments不是数组，但是它具有length属性，不从prototype继承，实际上是一个对象，可以通过var args = Array.prototype.slice.call(arguments); 把它转为数组。

-----------------------------------------------------------------------------
九、列举JavaScript中typeof操作符的可能结果，如何区分：{}和[]类型？
类型	结果
Undefined	"undefined"
Null	“object”
Boolean	"boolean"
Number	"number"
String	“string”
Symbol	"symbol"
函数	"function"
NAN	"undefined"
任何其他对象	"object"

区分{ }和[ ]

isArray、 isntanceof、Object.prototype.toString.call([ ]); 

-----------------------------------------------------------------------------
十：Function中的call、apply、bind的区别是什么？请针对每一个写出一个代码示例。
它们都是用来改变函数的this对象的指向，不同的是bind返回对应函数，便于后面调用，call、bind是立即调用。

-----------------------------------------------------------------------------
十一、 Bom是什么？列举你知道的Bom对象。
BOM是browser object model的缩写，简称浏览器对象模型 ，提供了独立于内容而与浏览器窗口进行交互的对象

1、window对象 ，是JS的最顶层对象，其他的BOM对象都是window对象的属性；
2、document对象，文档对象；
3、location对象，浏览器当前URL信息；
4、navigator对象，浏览器本身信息；
5、screen对象，客户端屏幕信息；
6、history对象，浏览器访问历史信息；

-----------------------------------------------------------------------------
十二、了解过hybrid通信的实现原理么
JSBridge就是定义Native和JS的通信,Native只通过一个固定的桥对象调用JS,JS也只通过固定的桥对象调用Native,基本原理是:
H5->通过某种方式触发一个url->Native捕获到url,进行分析->原生做处理->Native调用H5的JSBridge对象传递回调

-----------------------------------------------------------------------------
十三、解释一下盒模型宽高值的计算方式，边界塌陷，负值作用，box-sizing概念。

margin：外边距。它包括margin-top、margin-right、margin-buttom、margin-left。margin的最基本用途就是控制元素周围空间的间隔,它永远是透明的。
border：边框。它包括border-top、border-right、border-buttom、border-left。
padding：内边距。它包括padding-top、padding-right、padding-buttom、padding-left。padding是用来使元素与内容有一定的间隔。
content。

标准盒子模型的盒子宽度：左右border+左右padding+width
IE盒子模型的盒子宽度：width
在CSS3中引入了box-sizing属性，box-sizing:content-box;表示标准的盒子模型，box-sizing:border-box表示的是IE盒子模型
最后，前面我们还提到了，box-sizing:padding-box,这个属性值的宽度包含了左右padding+width
也很好理解性记忆，包含什么，width就从什么开始算起。

-----------------------------------------------------------------------------
十四、XSS是什么说一下？
XSS攻击，跨站脚本攻击通常指黑客通过“HTML注入”篡改了网页，插入了恶意的脚本，从而在用户浏览网页时，控制用户浏览器的一种攻击
实施XSS攻击需要具备两个条件：
1、需要向web页面注入恶意html代码；
2、这些恶意代码能够被浏览器成功的执行。

总结XSS作用：
     1.可以获得cookie
     2.仿造get、post请求做一些动作
     3.获得用户的IP
     4.识别用户软件、浏览器
     5.通过钓鱼也可以骗到用户的用户名和密码这样
     防范手法如下：
1. 防堵跨站漏洞，阻止攻击者利用在被攻击网站上发布跨站攻击语句不可以信任用户提交的任何内容，首先代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击。
2. Cookie 防盗
首先，避免直接在cookie 中泄露用户隐私，例如email、密码等等。

其次，通过使cookie 和系统ip 绑定来降低cookie 泄露后的危险。这样攻击者得到的cookie 没有实际价值，不可能拿来重放。
3. 尽量采用POST 而非GET 提交表单
POST 操作不可能绕开javascript 的使用，这会给攻击者增加难度，减少可利用的跨站漏洞。

-----------------------------------------------------------------------------
十五、CSRF了解吗？
CSRF（Cross Site Request Forgery, 跨站域请求伪造）是一种网络的攻击方式。

在业界目前防御 CSRF 攻击主要有三种策略：
验证 HTTP Referer 字段；
在请求地址中添加 token 并验证；
在 HTTP 头中自定义属性并验证。下面就分别对这三种策略进行详细介绍。

-----------------------------------------------------------------------------
十四、跨域
首先什么是跨域，简单地理解就是因为JavaScript同源策略的限制，a.com 域名下的js无法操作b.com或是c.a.com域名下的对象。更详细的说明可以看下表：

域名、端口。协议不同都存在跨域。

解决跨域
jsonp
首先前端先设置好回调函数，并将其作为 url 的参数。
服务端接收到请求后，通过该参数获得回调函数名，并将数据放在参数中将其返回
收到结果后因为是 script 标签，所以浏览器会当做是脚本进行运行，从而达到跨域获取数据的目的。
缺点：
缺点：
它支持 GET 请求而不支持 POST 等其它类行的 HTTP 请求。
它只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面或 iframe 之间进行数据通信的问题
cors,
script

-----------------------------------------------------------------------------
十五、cookie是什么，怎么存储。
document.cookie = "test1=newCookie; domain=.google.com.hk; max-age=3600; secure"
document.cookie = "test1=newCookie; path=/webhp; max-age=3600; secure"

cookie的删除其实特别简单，也是对此cookie重新赋值，上面介绍expries和max-age时也有提到，将expries设为一个过去的时间或将max-age设为0，都可以删除cookie。同时也要特别注意此cookie的domain、path要与原来保持一致。

安全性：由于cookie在HTTP中是明文传递的，其中包含的数据都可以被他人访问，可能会被篡改、盗用。
大小限制：cookie的大小限制在4KB左右，若要做大量存储显然不是理想的选择。
增加流量：cookie每次请求都会被自动添加到Request Header中，无形中增加了流量。cookie信息越大，对服务器请求的时间也越长。

https://juejin.im/entry/5abb480b6fb9a028d93734f5

-----------------------------------------------------------------------------
十六、用过NodeJS的EventEmitter模块吗，它是怎么实现功能的，步骤是什么？
事件驱动、emit 触发.on 监听
Node.js 有一个，叫做 util 的库，它有一个方法： inherits，实现对象之间原型继承的函数。我们可以很轻松的通过它让一个类继承另一个类（准确的说不能叫类）：

//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() {
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 
-----------------------------------------------------------------------------
十七、React 和 Vue 对比

React 和 Vue 有许多相似之处，它们都有：

使用 Virtual DOM
Virtual DOM是一个映射真实DOM的JavaScript对象，如果需要改变任何元素的状态，那么是先在Virtual DOM上进行改变，而不是直接改变真实的DOM。当有变化产生时，一个新的Virtual DOM对象会被创建并计算新旧Virtual DOM之间的差别。之后这些差别会应用在真实的DOM上。
提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。
将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库

JSX vs Templates
在 React 中，所有的组件的渲染功能都依靠 JSX。JSX 是使用 XML 语法编写 JavaScript 的一种语法糖。

使用 JSX 的渲染函数有下面这些优势：
你可以使用完整的编程语言 JavaScript 功能来构建你的视图页面。比如你可以使用临时变量、JS 自带的流程控制、以及直接引用当前 JS 作用域中的值等等。

开发工具对 JSX 的支持相比于现有可用的其他 Vue 模板还是比较先进的 (比如，linting、类型检查、编辑器的自动完成)。
事实上 Vue 也提供了渲染函数，甚至支持 JSX。然而，我们默认推荐的还是模板。任何合乎规范的 HTML 都是合法的 Vue 模板，这也带来了一些特有的优势：

对于很多习惯了 HTML 的开发者来说，模板比起 JSX 读写起来更自然。这里当然有主观偏好的成分，但如果这种区别会导致开发效率的提升，那么它就有客观的价值存在。
基于 HTML 的模板使得将已有的应用逐步迁移到 Vue 更为容易。
这也使得设计师和新人开发者更容易理解和参与到项目中。
你甚至可以使用其他模板预处理器，比如 Pug 来书写 Vue 的模板。
而对于React而言，每当应用的状态被改变时，全部子组件都会重新渲染。当然，这可以通过shouldComponentUpdate这个生命周期方法来进行控制，但Vue将此视为默认的优化。

状态管理
react this.setState()  Vue this.data
setState 是个异步 API，只有同步代码运行完毕才会执行。setState 异步的原因我认为在于，setState 可能会导致 DOM 的重绘，如果调用一次就马上去进行重绘，那么调用多次就会造成不必要的性能损失。设计成异步的话，就可以将多次调用放入一个队列中，在恰当的时候统一进行更新过程。

props 
都有自己的构建工具、
组件化

-----------------------------------------------------------------------------
十八、react怎样提高性能。
缩短SCU方法的执行时间(或者不执行)。
没必要的渲染，SCU应该返回false。
shouldComponentUpdate

React特色工具：Perf
Perf最核心的方法莫过于Perf.printWasted(measurements)了，该方法会列出那些没必要的组件渲染。

-----------------------------------------------------------------------------

十九 、react dom diff 原理是什么 。
React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；
React 通过分层求异的策略，对 tree diff 进行算法优化；
React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；
React 通过设置唯一 key的策略，对 element diff 进行算法优化；
建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；
建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。

-----------------------------------------------------------------------------

二十、react生命周期。
componentWillMount()
render
componentdidmount
运行中阶段
componentwillreceviepros()
shouldComponentUpdate
componentWillUpdate
componentdidupdate()
销毁阶段
componentwillunmount()

-----------------------------------------------------------------------------
二十一、JS中prototype、proto、super分别是什么？
每个函数都有 prototype 属性，除了 Function.prototype.bind()，该属性指向原型。
每个对象都有 __proto__ 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 _proto_ 来访问。
对象可以通过 __proto__ 来寻找不属于该对象的属性，__proto__ 将对象连接起来组成了原型链。
构造函数来定义对象的属性
-----------------------------------------------------------------------------
二十二、倒计时
var t = 10;  
//显示倒数秒数  
function showTime(){  
    t -= 1;  
    document.getElementById('showtimes').innerHTML= t;  
    if(t==0){  
        location.href='error404.asp';  
    }  
    //每秒执行一次,showTime()  
    setTimeout("showTime()",1000);  
}  
//执行showTime()  
showTime(); 

-----------------------------------------------------------------------------
二十三、响应式正方形
width: 50%;
height: 50vw;
-----------------------------------------------------------------------------
二十四、promise、setTimeout、async/await的执行顺序。

队列任务优先级：promise.Trick()>promise的回调>setTimeout>setImmediate

async function async1(){
   console.log('async1 start');
    await async2();
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start');
setTimeout(function(){
    console.log('setTimeout')
},0);
async1();
new Promise(function(resolve){
    console.log('promise1');
    resolve();
}).then(function(){
    console.log('promise2')
});
console.log('script end')    

script start
async1 start
async2
promise1
script end
promise2
async1 end
setTimeout

-----------------------------------------------------------------------------
二十五、节流函数怎么写？

防抖和节流的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，且每次触发函数的间隔小于wait，防抖的情况下只会调用一次，而节流的 情况会每隔一定时间（参数wait）调用函数。
// func是用户传入需要防抖的函数
// wait是等待时间
const debounce = (func, wait = 50) => {
  // 缓存一个定时器id
  let timer = 0
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

-----------------------------------------------------------------------------
手写bind函数

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

手写call
Function.prototype.myCall = function (context) {
  var context = context || window
  // 给 context 添加一个属性
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args)
  // 删除 fn
  delete context.fn
  return result
}

如何实现一个 apply 函数
Function.prototype.myApply = function (context) {
  var context = context || window
  context.fn = this

  var result
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}

-----------------------------------------------------------------------------
闭包
闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。
function A() {
  let a = 1
  function B() {
      console.log(a)
  }
  return B
}

-----------------------------------------------------------------------------
基本数据类型和引⽤类型在存储上的差别
前者存储在栈上，后者存储在堆上

-----------------------------------------------------------------------------
Service worker
Service workers 本质上充当Web应用程序与浏览器之间的代理服务器
目前该技术通常用来做缓存文件，提高首屏速度，可以试着来实现这个功能。

-----------------------------------------------------------------------------
浏览器缓存
通常浏览器缓存策略分为两种：强缓存和协商缓存。
实现强缓存可以通过两种响应头实现：Expires 和 Cache-Control 。
强缓存表示在缓存期间不需要请求，state code 为 200

Cache-Control 出现于 HTTP / 1.1，优先级高于 Expires 。
该属性表示资源会在 30 秒后过期，需要再次请求

如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 304。
协商缓存需要客户端和服务端共同实现，和强缓存一样，也有两种实现方式。

Last-Modified 和 If-Modified-Since
Last-Modified 表示本地文件最后修改日期，If-Modified-Since 会将 Last-Modified 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。
但是如果在本地打开缓存文件，就会造成 Last-Modified 被修改，所以在 HTTP / 1.1 出现了 ETag 。
ETag 和 If-None-Match
ETag 类似于文件指纹，If-None-Match 会将当前 ETag 发送给服务器，询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。并且 ETag 优先级比 Last-Modified 高。

-----------------------------------------------------------------------------
Babel 原理
本质就是编译器，当代码转为字符串生成 AST，对 AST 进行转变最后再生成新的代码

分为三步：词法分析生成 Token，语法分析生成 AST，遍历 AST，根据插件变换相应的节点，最后把 AST 转换为代码

-----------------------------------------------------------------------------
get post 区别
GET后退按钮/刷新无害，POST数据会被重新提交（浏览器应该告知用户数据会被重新提交）。GET书签可收藏，POST为书签不可收藏。GET能被缓存，POST不能缓存 。GET编码类型application/x-www-form-url，POST编码类型encodedapplication/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。GET历史参数保留在浏览器历史中。POST参数不会保存在浏览器历史中。GET对数据长度有限制，当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。POST无限制。GET只允许 ASCII 字符。POST没有限制。也允许二进制数据。与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。GET的数据在 URL 中对所有人都是可见的。POST的数据不会显示在 URL 中

-----------------------------------------------------------------------------
进程与线程的区别。然后问进程间通信，问内存的管理方式，分页和分段
进程和线程的主要差别在于它们是不同的操作系统资源管理方式。进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响，而线程只是一个进程中的不同执行路径。线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间，一个线程死掉就等于整个进程死掉，所以多进程的程序要比多线程的程序健壮，但在进程切换时，耗费资源较大，效率要差一些。但对于一些要求同时进行并且又要共享某些变量的并发操作，只能用线程，不能用进程。

1) 简而言之,一个程序至少有一个进程,一个进程至少有一个线程.
2) 线程的划分尺度小于进程，使得多线程程序的并发性高。
3) 另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。
4) 线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。
5) 从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。

-----------------------------------------------------------------------------
小结TCP与UDP的区别：
TCP（Transmission Control Protocol，传输控制协议）是面向连接的协议，也就是说，在收发数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来，其中的过程非常复杂，只简单的描述下这三次对话的简单过程：主机A向主机B发出连接请求数据包：“我想给你发数据，可以吗？”，这是第一次对话；主机B向主机A发送同意连接和要求同步（同步就是两台主机一个在发送，一个在接收，协调工作）的数据包：“可以，你什么时候发？”，这是第二次对话；主机A再发出一个数据包确认主机B的要求同步：“我现在就发，你接着吧！”，这是第三次对话。三次“对话”的目的是使数据包的发送和接收同步，经过三次“对话”之后，主机A才向主机B正式发送数据。
1.基于连接与无连接；
2.对系统资源的要求（TCP较多，UDP少）；
3.UDP程序结构较简单；
4.流模式与数据报模式 ；
5.TCP保证数据正确性，UDP可能丢包，TCP保证数据顺序，UDP不保证。

-----------------------------------------------------------------------------
css 权重
!important>行内样式>ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器
!important 优先级最高，但也会被权重高的important所覆盖
行内样式总会覆盖外部样式表的任何样式(除了!important)
单独使用一个选择器的时候，不能跨等级使css规则生效
如果两个权重不同的选择器作用在同一元素上，权重值高的css规则生效
如果两个相同权重的选择器作用在同一元素上：以后面出现的选择器为最后规则.
权重相同时，与元素距离近的选择器生效

-----------------------------------------------------------------------------
CSS值的解析过程



-----------------------------------------------------------------------------
http 与 https
https就是套在SSL/TLS内的http，也就是安全的http
通信内容的保密
通信双方身份的真实
通信内容的完整

http 请求 过程

1、首先 Chrome 搜索自身的 DNS 缓存。(如果 DNS 缓存中找到百度的 IP 地址，就跳过了接下来查找 IP 地址步骤，直接访问该 IP 地址。)
2、搜索操作系统自身的 DNS 缓存。(浏览器没有找到缓存或者缓存已经失效)
3、读取硬盘中的 host 文件，里面记录着域名到 IP 地址的映射关系，Mac 电脑中位于 /etc/hosts。(如果前1.2步骤都没有找到)
4、浏览器向宽带运营商服务器或者域名服务器发起一个 DNS 解析请求，这里服务器有两种方式解析请求，这在稍后会讲到，之后浏览器获得了百度首页的 IP 地址。
5、拿到 IP 地址后，浏览器就向该 IP 所在的服务器建立 TCP 连接(即三次握手)。
6、连接建立起来之后，浏览器就可以向服务器发起 HTTP 请求了。(这里比如访问百度首页，就向服务器发起 HTTP 中的 GET 请求)
7、服务器接受到这个请求后，根据路径参数，经过后台一些处理之后，把处理后的结果返回给浏览器，如果是百度首页，就可以把完整的 HTML 页面代码返回给浏览器。
8、浏览器拿到了百度首页的完整 HTML 页面代码，内核和 JS 引擎就会解析和渲染这个页面，里面的 9、JS，CSS，图片等静态资源也通过一个个 HTTP 请求进行加载。
9、浏览器根据拿到的资源对页面进行渲染，最终把完整的页面呈现给用户。
10、如果浏览器没有后续的请求，那么就会跟服务器端发起 TCP 断开(即四次挥手)。

HTTPS加密过程
1、客户端发起HTTPS请求
这个没什么好说的，就是用户在浏览器里输入一个HTTPS网址，然后连接到服务端的443端口。
2、服务端的配置
采用HTTPS协议的服务器必须要有一套数字证书，可以自己制作，也可以向组织申请。区别就是自己颁发的证书需要客户端验证通过，才可以继续访问，而使用受信任的公司申请的证书则不会弹出提示页面。这套证书其实就是一对公钥和私钥。如果对公钥不太理解，可以想象成一把钥匙和一个锁头，只是世界上只有你一个人有这把钥匙，你可以把锁头给别人，别人可以用这个锁把重要的东西锁起来，然后发给你，因为只有你一个人有这把钥匙，所以只有你才能看到被这把锁锁起来的东西。
3、传送证书
这个证书其实就是公钥，只是包含了很多信息，如证书的颁发机构，过期时间等等。
4、客户端解析证书
这部分工作是由客户端的SSL/TLS来完成的，首先会验证公钥是否有效，比如颁发机构，过期时间等等，如果发现异常，则会弹出一个警示框，提示证书存在的问题。如果证书没有问题，那么就生成一个***随机值***。然后用证书（也就是公钥）对这个随机值进行加密。就好像上面说的，把随机值用锁头锁起来，这样除非有钥匙，不然看不到被锁住的内容。
5、传送加密信息
这部分传送的是用证书加密后的随机值，目的是让服务端得到这个随机值，以后客户端和服务端的通信就可以通过这个随机值来进行加密解密了。
6、服务端解密信息
服务端用私钥解密后，得到了客户端传过来的随机值，然后把内容通过该随机值进行对称加密，将信息和私钥通过某种算法混合在一起，这样除非知道私钥，不然无法获取内容，而正好客户端和服务端都知道这个私钥，所以只要加密算法够彪悍，私钥够复杂，数据就够安全。
7、传输加密后的信息
这部分信息就是服务端用私钥加密后的信息，可以在客户端用随机值解密还原。
8、客户端解密信息
客户端用之前生产的私钥解密服务端传过来的信息，于是获取了解密后的内容。整个过程第三方即使监听到了数据，也束手无策。

TLS
其实TLS就是从SSL发展而来的，

TLS主要提供三个基本服务
加密
身份验证，也可以叫证书验证吧~
消息完整性校验

-----------------------------------------------------------------------------
HTTP 常用返回码
2XX 成功
200 OK，表示从客户端发来的请求在服务器端被正确处理
204 No content，表示请求成功，但响应报文不含实体的主体部分
205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容
206 Partial Content，进行范围请求

3XX 重定向

301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
302 found，临时性重定向，表示资源临时被分配了新的 URL
303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源
304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求

4XX 客户端错误

400 bad request，请求报文存在语法错误
401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
403 forbidden，表示对请求资源的访问被服务器拒绝
404 not found，表示在服务器上没有找到请求的资源

5XX 服务器错误

500 internal sever error，表示服务器端在执行请求时发生了错误
501 Not Implemented，表示服务器不支持当前请求所需要的某个功能
503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

-----------------------------------------------------------------------------
js的new操作符做了哪些事情
new 操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象。

-----------------------------------------------------------------------------
js的各种位置，比如clientHeight,scrollHeight,offsetHeight ,以及scrollTop, offsetTop,clientTop的区别？
clientHeight：表示的是可视区域的高度，不包含border和滚动条
offsetHeight：表示可视区域的高度，包含了border和滚动条
scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
clientTop：表示边框border的厚度，在未指定的情况下一般为0
scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

-----------------------------------------------------------------------------
3.js怎么控制一次加载一张图片，加载完后再加载下一张
var obj=new Image();
obj.src="http://www.phpernote.com/uploadfiles/editor/201107240502201179.jpg";
obj.onload=function(){
alert('图片的宽度为：'+obj.width+'；图片的高度为：'+obj.height);
document.getElementById("mypic").innnerHTML="<img src='"+this.src+"' />";
}

onreadystatechange if(this.readyState=="complete")

-----------------------------------------------------------------------------
如何实现sleep的效果
function sleep(ms){
  var temple = new Promise(
  (resolve)=>{
  console.log(111);setTimeout(resolve,ms)
  });
  return temple
}
sleep(500).then(function(){
   //console.log(222)
})
//先输出了111，延迟500ms后输出222


Function.__proto__==Object.prototype //false
Function.__proto__==Function.prototype//true

-----------------------------------------------------------------------------
实现简单的Event模块的emit和on方法

function Events(){
this.on=function(eventName,callBack){
  if(!this.handles){
    this.handles={};
  }
  if(!this.handles[eventName]){
    this.handles[eventName]=[];
  }
  this.handles[eventName].push(callBack);
}
this.emit=function(eventName,obj){
   if(this.handles[eventName]){
     for(var i=0;o<this.handles[eventName].length;i++){
       this.handles[eventName][i](obj);
     }
   }
}
return this;
}

-----------------------------------------------------------------------------
5.HTTP请求的方式，HEAD方式
head：类似于get请求，只不过返回的响应中没有具体的内容，用户获取报头
options：允许客户端查看服务器的性能，比如说服务器支持的请求方式等等。

-----------------------------------------------------------------------------
fetch发送2次请求的原因
fetch发送post请求的时候，总是发送2次，第一次状态码是204，第二次才成功？
原因很简单，因为你用fetch的post请求的时候，导致fetch 第一次发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。

-----------------------------------------------------------------------------
iframe是什么？有什么缺点？

会阻塞主页面的onload事件
搜索引擎无法解读这种页面，不利于SEO
iframe和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能。

-----------------------------------------------------------------------------
Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

Doctype声明于文档最前面，告诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。
严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。
混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。


link标签和import标签的区别
-----------------------------------------------------------------------------
link属于html标签，而@import是css提供的
页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。
link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。
link方式样式的权重高于@import的。

-----------------------------------------------------------------------------
transition和animation的区别
Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。

-----------------------------------------------------------------------------
Flex布局
简单的分为容器属性和元素属性
容器的属性：

flex-direction：决定主轴的方向（即子item的排列方法）
.box {
flex-direction: row | row-reverse | column | column-reverse;
}
flex-wrap：决定换行规则
.box{
flex-wrap: nowrap | wrap | wrap-reverse;
}
flex-flow：
.box {
flex-flow:  || ;
}
justify-content：对其方式，水平主轴对齐方式
align-items：对齐方式，竖直轴线方向

项目的属性（元素的属性）：

order属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为0
flex-grow属性：定义项目的放大比例，即使存在空间，也不会放大
flex-shrink属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个item的flow-shrink为0，则为不缩小
flex-basis属性：定义了在分配多余的空间，项目占据的空间。
flex：是flex-grow和flex-shrink、flex-basis的简写，默认值为0 1 auto。
align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖align-items，默认属性为auto，表示继承父元素的align-items

-----------------------------------------------------------------------------
垂直居中的方法

margin:auto法

margin负值法

flex;

-----------------------------------------------------------------------------
关于js动画和css3动画的差异性
功能涵盖面，js比css大
实现/重构难度不一，CSS3比js更加简单，性能跳优方向固定
对帧速表现不好的低版本浏览器，css3可以做到自然降级
css动画有天然事件支持
css3有兼容性问题

为何使用 redux 、 mobx
某一个状态需要在多个组件间共享（访问，更新）；
某组件内交互需要触发其他组件的状态更新；

状态管理
统一维护管理应用状态；
某一状态只有一个可信数据来源（通常命名为store，指状态容器）；
操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）；
支持将store与React组件连接，如react-redux，mobx-react；通常使用状态管理库后，我们将React组件从业务上划分为两类：

容器组件（Container Components）：负责处理具体业务和状态数据，将业务或状态处理函数传入展示型组件；
展示型组件（Presentation Components）：负责展示视图，视图交互回调内调用传入的处理函数；

redux
Action：一个JavaScript对象，描述动作相关信息，主要包含type属性和payload属性：

type：action 类型；
payload：负载数据；
Reducer：定义应用状态如何响应不同动作（action），如何更新状态；
Store：管理action和reducer及其关系的对象，主要提供以下功能：
维护应用状态并支持访问状态（getState()）；
支持监听action的分发，更新状态（dispatch(action)）；
支持订阅store的变更（subscribe(listener)）；

异步流：由于Redux所有对store状态的变更，都应该通过action触发，异步任务（通常都是业务或获取数据任务）也不例外，而为了不将业务或数据相关的任务混入React组件中，就需要使用其他框架配合管理异步任务流程，如redux-thunk，redux-saga等；


mobx-react和react-redux
使用Redux和React应用连接时，需要使用react-redux提供的Provider和connect：

Provider：负责将Store注入React应用；
connect：负责将store state注入容器组件，并选择特定状态作为容器组件props传递；

对于Mobx而言，同样需要两个步骤：

Provider：使用mobx-react提供的Provider将所有stores注入应用；
使用inject将特定store注入某组件，store可以传递状态或action；然后使用observer保证组件能响应store中的可观察对象（observable）变更，即store更新，组件视图响应式更新。


Flux 单项数据流
用户访问 view 
view  出发 action 
Dispatcher 收到 action 要求 store更新
store 更新 出发 change事件
view 收到 chenge 事件更新页面

react性能优化方案
（1）重写shouldComponentUpdate来避免不必要的dom操作。
（2）使用 production 版本的react.js。
（3）使用key来帮助React识别列表中所有子组件的最小变化

为什么虚拟dom会提高性能?

虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。具体实现步骤如下：用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。

、react组件的划分业务组件技术组件？
根据组件的职责通常把组件分为UI组件和容器组件。
UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
两者通过React-Redux 提供connect方法联系起来。

redux有什么缺点
1.一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。2.当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的shouldComponentUpdate进行判断。

redux中间件
中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。常见的中间件：redux-logger：提供日志输出redux-thunk：处理异步操作redux-promise：处理异步操作，actionCreator的返回值是promise


redux数据的基本流程，
简单的说就是view dispatch一个action后，
通过对应reducer处理，然后更新store
，最终views根据store数据的改变重新渲染界面。


描述一下JS 的new操作符具体做了什么
首先，当JavaScript引擎执行new操作时，会马上开辟一个块内存，创建一个空对象（并将this指向这个对象）。

然而，给这个空对象添加了一个叫__proto__的属性，而且这个__proto__指向Foo()的prototype对象。换句话说，就是__proto__ = prototype;

简述document和window两个对象区别
window
1.window对象表示浏览器中打开的窗口。
2.window对象可以省略，如:
alert() 等价于 window.alert()

document
1.document对象是window对象的一部分。如：
document.body 等价于 window.document.body
2.浏览器的html文档成为document对象。

从一个无序，不相等的数组中，选取N个数，使其和为M实现算法

######
因为我们只想要一个三角形，如果把其他三个三角形的颜色变白，那就只剩下一个，等等，如果背景颜色不是白色呢？css中有这样一个属性，transparent，背景透明。这样便可以达到我们的目的了。
#triangle03{
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-top: 50px solid blue;
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
手写ajax
window.jQuery.ajax = function ({url,method,body,headers}) {
    //之前代码返回值是 undefined，我们return一个Promise
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest()
    //初始化请求
    request.open(method, url)
    for (let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // successFn 就由 resove 代替了
                resolve.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                // failFn 就由 reject 代替了
                reject.call(undefined, request)
            }
        }
    }
    request.send(body)
    })
}


Promise 三种状态
对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。

怎么判断页面是否加载完成？
Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。
DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。 

重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
回流是布局或者几何属性需要改变就称为回流

改变 window 大小
改变字体
添加或删除样式
文字改变
定位或者浮动
盒模型


设计模式
单例，
工厂，
发布订阅

加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
工厂模式
class Man {
  constructor(name) {
    this.name = name
  }
  alertName() {
    alert(this.name)
  }
}

class Factory {
  static create(name) {
    return new Man(name)
  }
}

Factory.create('yck').alertName()


单例模式
class Singleton {
  constructor() {
    this.instance = null
  }

  getInstance() {
    return function() {
      if(this.instance)  {
        return this.instance
      }

      return new Singleton()
    }
  }
}

Singleton.getInstance = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new Singleton()
    }
    return instance
  }
})()

let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()
console.log(s1 === s2) // true


所有的对象，除了 Date 型别，都是先调用 valueOf，Date 则是先调用 toString
valueOf()：返回最适合该对象类型的原始值；
toString(): 将该对象的原始值以字符串形式返回