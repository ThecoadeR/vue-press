# 浏览器相关机制

- ## DOCTYPE 是什么以及作用

```html
<!DOCTYPE html>
```

在说 DOCTYPE 之前呢 还是有一个概念要先阐述一下 就是`DTD(Document type defintion)` 文档类型定义 DTD 是一系列的语法规则 用来定义 XML 或者 HTML 的文件类型 浏览器会使用它来判断文档类型 决定使用何种协议来解析以及切换浏览器模式

定义看起来挺高大尚甚至有点复杂 其实说人话 就是 DTD 用于告诉浏览器这是啥文档 让浏览器知道用什么模板去解析 有点类似于大家平时生活里用导航去到某一个地方 DTD 就是你输入的地点 浏览器则对应导航软件

`DOCTYPE`:用来声明文档类型和 DTD 规范的,一个主要的用途就便是文件的合法性验证 如果文件代码不合法 那么浏览器解析便会出一些差错

说人话就是 DOCTYPE 通知浏览器当前的文档是包含了哪个文档类型(DTD)

- ## 浏览器的渲染过程
- HTML -> 转为 DOM Tree
- Style -> 转为 CSS Tree
- Layout 通过 CSS Tree 精确计算屏幕上每个 dom 的位置 大小 颜色之类
- DOM Tree + CSS Tree -> 转为 Render Tree 这个 Render Tree 也就是 Dom Tree 和 CSS Tree 结合起来的 Tree
- Painting -> 浏览器开始通过上面的这些进行渲染

* Display -> 显示成像

* ## 重排(Reflow)
* 什么是重排: DOM 结构中的各个元素都有自己的盒子模型 这些都需要浏览器根据各种样式来计算并根据结果将元素放到它该出现的位置 这个过程就是重排 简单点一句话概括就是 浏览器绘制 DOM 的过程 就是重排
* 触发 Reflow 的情况
  * 增加、删除、修改DOM节点时 会导致重排或者重绘
  * 当移动Dom的位置 或者有动画的情况
  * 当修改CSS样式的时候
  * 当触发浏览器的Resize或者是Scroll
  * 修改网页的默认字体 (特别不推荐页面渲染完以后 修改网页的字体)
* ## 重绘(Repaint)
* 什么是重绘: 当各种盒子的位置、大小以及其他属性都确定以后 浏览器把元素按照各自特性绘制 这个过程就是重绘 概括一下就是 页面要呈现的内容 统统都已经画在屏幕上了
* 触发Repaint的情况:
  * DOM改动
  * CSS改动
  * 其实就是 页面显示的内容如果发生变化 一定就会触发浏览器的重绘

## 提升页面性能的方法
* 资源压缩合并 减少Http请求
* 非核心代码异步加载 -> 异步加载的方式 -> 异步加载的区别
  * #### 异步加载的方式
  1. 动态脚本加载
  ```js
  var scprit = document.createElement('script')
  scrpit.type = 'text/javascript'
  document.body.apped(script)
  ```
  2. defer
  在```script```标签上添加这个属性
  3. async
  同上

  * #### 异步加载的区别
  1.  ```defer```是在HTML解析完之后才执行 如果是多个 按照加载顺序依次执行
  2.  ```async```是在加载完之后立即执行 如果是多个 执行顺序和加载顺序无关
* 利用浏览器缓存 -> 缓存的分类 -> 缓存的原理
  * #### 缓存的分类
  * ##### 概念: 缓存 => 各资源文件在浏览器中的备份 其实就可以理解成 资源文件存在了本地 直接从本地读取 而不是再次请求 
  1. 强缓存 (览器不会询问 而是直接就用)
  ```
  // http-header中的两个字段 一个是过期时间 这个是服务器的绝对时间
  Expiress Expires:Thu, 9 Jul 2019 20:26:30 GMT
  // 另一个是相对时间 也就是客户端在1000秒之内不会再请求服务器 
  Cache-Control Cache-Control:max-age=1000
  ```
  2. 协商缓存 (浏览器发现本地有文件 但是不确定是否使用 需要询问服务器)
  ```
  Last-Modified
  If-Modified-Since
  Etag
  If-None-Match
  ```
* 使用CDN
* 预解析DNS
```html
// 大部分的浏览器在http协议下 默认开启预解析 但是在https协议下不会
<link rel="dns-prefetch" href="//host_name_to_prefetch.com">
// 强制打开预解析
<meta http-equiv="x-dns-prefetch-control" content="on">
```
