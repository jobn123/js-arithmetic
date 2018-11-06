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

-----------------------------------------------------------------------------
十四、XSS是什么说一下？
XSS攻击，通常指黑客通过“HTML注入”篡改了网页，插入了恶意的脚本，从而在用户浏览网页时，控制用户浏览器的一种攻击
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
在业界目前防御 CSRF 攻击主要有三种策略：验证 HTTP Referer 字段；在请求地址中添加 token 并验证；在 HTTP 头中自定义属性并验证。下面就分别对这三种策略进行详细介绍。

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
etState 是个异步 API，只有同步代码运行完毕才会执行。setState 异步的原因我认为在于，setState 可能会导致 DOM 的重绘，如果调用一次就马上去进行重绘，那么调用多次就会造成不必要的性能损失。设计成异步的话，就可以将多次调用放入一个队列中，在恰当的时候统一进行更新过程。

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

二十三、响应式正方形



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

二十五、节流函数怎么写？
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

闭包
闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。
function A() {
  let a = 1
  function B() {
      console.log(a)
  }
  return B
}


基本数据类型和引⽤类型在存储上的差别
前者存储在栈上，后者存储在堆上

Service worker
Service workers 本质上充当Web应用程序与浏览器之间的代理服务器
目前该技术通常用来做缓存文件，提高首屏速度，可以试着来实现这个功能。


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


Babel 原理
本质就是编译器，当代码转为字符串生成 AST，对 AST 进行转变最后再生成新的代码

分为三步：词法分析生成 Token，语法分析生成 AST，遍历 AST，根据插件变换相应的节点，最后把 AST 转换为代码

https