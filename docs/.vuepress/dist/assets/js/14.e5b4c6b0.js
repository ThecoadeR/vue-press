(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{226:function(t,e,v){"use strict";v.r(e);var s=v(28),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"vue过渡动画原理解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue过渡动画原理解析"}},[t._v("#")]),t._v(" Vue过渡动画原理解析")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("求求你们别学了 学不动了")]),t._v(" "),v("p",[t._v("来自低端码畜的无能狂怒(其实主要目的是想试试看容器..)")])]),t._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("在日常开发中 动画是必不可少的一部分 不仅能让元素直接的切换显得更加自然 同时也能极大的增强用户体验 因此 在Vue之中也提供了非常强大的关于动画这方面的支持 Vue不仅支持用CSS来写一些过渡效果 同时也是支持JS的 不过在这个文章中讲述的都是如何利用CSS来实现过渡动画、keyframes动画以及实现的原理")]),t._v(" "),v("h2",{attrs:{id:"过渡动画实现的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过渡动画实现的原理"}},[t._v("#")]),t._v(" 过渡动画实现的原理")]),t._v(" "),v("p",[t._v("1.首先最基础的一点在于 如果你想要在"),v("code",[t._v("单元素/单个组件")]),t._v("之中实现过渡动画 那么 你需要在元素/组件所在的HTML标签之外包裹一层  "),v("code",[t._v("<transition>")]),t._v("标签")]),t._v(" "),v("p",[t._v("2.当"),v("code",[t._v("元素/组件")]),t._v("被"),v("code",[t._v("<transition>")]),t._v("标签包裹了以后 那么Vue会自动的为我们构建一个动画流程 具体的流程会在下文提到 因此先记住这句话就行啦 也就是说 如果你在"),v("code",[t._v("<style>")]),t._v("标签中添加了一些样式的话Vue会自动的在某个时间节点给元素或者组件添加、删除对应的样式")]),t._v(" "),v("p",[t._v("3.上面提到了当"),v("code",[t._v("元素/组件")]),t._v("被"),v("code",[t._v("<transition>")]),t._v("标签包裹的时候Vue会自动的构建动画流程 也就是自动的在某个时间节点添加/删除对应的CSS类名 Vue其实提供了6个对应的类名 这里借助官网的一张图来罗列"),v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/4/16776ee0c46d8618?w=1216&h=924&f=png&s=306037",alt:"添加的类名"}}),t._v("\n光这样看官网文字的解释可能感觉还不够清楚 所以这里我们借助一张图来帮助我们更好的理解这些CSS类名分别在什么时候被添加、移除")]),t._v(" "),v("p",[t._v("4 各个类名添加删除的时间\n4.1\n"),v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/4/16776ee0c4b52b11?w=1240&h=605&f=png&s=70468",alt:"入场动画流程"}}),t._v("\n我们假设黑色横线作为动画的整个流程 红点为动画开始的瞬间 那么 当我们用  "),v("code",[t._v("<transition>")]),t._v("标签包裹了"),v("code",[t._v("元素/组件")]),t._v("的时候 Vue会在动画即将开始还没开始的时候添加两个CSS类名 分别是"),v("code",[t._v("v-enter/v-enter-to")]),t._v("当动画开始的瞬间"),v("code",[t._v("v-enter")]),t._v("被自动的移除 而"),v("code",[t._v("v-enter-active")]),t._v("这个class会一直存在于整个动画过程中 直到动画结束的时候跟"),v("code",[t._v("v-enter/v-enter-to")]),t._v("一起被自动删除")]),t._v(" "),v("p",[t._v("4.2\n"),v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/4/16776ee0c6595422?w=1240&h=582&f=png&s=76042",alt:"退场动画流程"}}),t._v("\n我们同样还是假设黑色横线作为动画的整个流程 那么在这里可以看到"),v("code",[t._v("v-leave")]),t._v("会在动画还没有开始的时候被添加上去 当动画开始的瞬间"),v("code",[t._v("v-leave")]),t._v("被移除 "),v("code",[t._v("v-leave-to")]),t._v("被添加 而"),v("code",[t._v("v-leave-active")]),t._v("会一直存在于整个动画过程中 直到动画结束的时候跟"),v("code",[t._v("v-leave/v-leave-to")]),t._v("一起被移除")]),t._v(" "),v("p",[t._v("###Coding\n当有了这些理论知识以后 就可以动手写一个非常简单的demo了 假设现在有一个需求 页面上某个元素 通过按钮来控制隐藏和显示 同时这个隐藏和显示的过程中 有一个透明度由0-1的渐变过程")]),t._v(" "),v("h2",{attrs:{id:"思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),v("p",[t._v("通过"),v("code",[t._v("v-if")]),t._v("控制元素的显示 同时利用"),v("code",[t._v("<transition>")]),t._v("标签包裹元素实现透明度变化的过渡过程")]),t._v(" "),v("p",[t._v("1.先搭建基本页面以及通过按钮点击事件控制元素的隐藏与显示"),v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/4/16776ee0e8e53fe6?w=1240&h=789&f=png&s=241116",alt:"页面以及业务逻辑"}})]),t._v(" "),v("p",[t._v("2.既然已知vue会在元素被"),v("code",[t._v("<transition>")]),t._v("包裹以后自动添加类名 那就在"),v("code",[t._v("<style>")]),t._v("标签里写上对应的样式效果")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v("<style>\n\t\t.v-enter,\n\t\t.v-leave-to")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter-active,\n\t\t.v-leave-active")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 3s"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n</style>\n")])])]),v("p",[t._v("这里需要理解的一点在于 上文已经提到 当进场动画触发的时候 "),v("code",[t._v("v-enter")]),t._v("会立马被移除 因此在样式里把opacity写成0 也就是说 原本页面上没有显示但是即将要显示这个元素的时候 opacity会变为1 而"),v("code",[t._v("v-enter-active")]),t._v("全程都在监听transition:opacity的变化 如果变化了 就让效果在3秒内结束 反之退场动画也是同样的 "),v("code",[t._v("v-leave-to")]),t._v("会在动画执行的时候被添加 这个时候 "),v("code",[t._v("v-leave-active")]),t._v("感知到了transition:opacity的变化 会在3秒内做出对应的改变 最终代码运行结果如下\n"),v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/4/16776ee0e8c3e424?w=540&h=336&f=gif&s=65203",alt:"代码运行结果"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);