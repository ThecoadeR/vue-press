(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{202:function(v,_,t){v.exports=t.p+"assets/img/scavenge.a746b22e.jpeg"},224:function(v,_,t){"use strict";t.r(_);var e=t(28),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"v8垃圾回收机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8垃圾回收机制"}},[v._v("#")]),v._v(" V8垃圾回收机制")]),v._v(" "),e("h2",{attrs:{id:"开始前的名词解释环节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始前的名词解释环节"}},[v._v("#")]),v._v(" 开始前的名词解释环节")]),v._v(" "),e("h3",{attrs:{id:"代际假说和分代收集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代际假说和分代收集"}},[v._v("#")]),v._v(" 代际假说和分代收集")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("首先明确一点 "),e("code",[v._v("代际假说")]),v._v("是一个非常关键的概念 它是垃圾回收策略的相关基础")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("代际假说")]),v._v("有两个特点")]),v._v(" "),e("ul",[e("li",[e("ol",[e("li",[v._v("大部分对象在内存中的存活时间非常短 简单来说就是 对象一经内存分配 很快就会无法访问")])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[v._v("可以持续访问的对象(不死的对象) 存活时间较长")])])])])])]),v._v(" "),e("p",[v._v("口头描述是不是感觉比较生涩难以理解 但是没关系 我们先记住这两个特点 并且我们基于这两个特点 来一起看看 V8是如何实现垃圾回收机制的")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("新生代")]),v._v(" 和 "),e("code",[v._v("老生代")])]),v._v(" "),e("ul",[e("li",[e("ol",[e("li",[v._v("新生代 用于存放在内存中存活时间比较短的对象")])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[v._v("老生代 用于存放在内存中存活时间比较长代对象")])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[v._v("同时 V8基于"),e("code",[v._v("新生代")]),v._v(" 对应一个"),e("code",[v._v("副垃圾回收器")]),v._v(" 而"),e("code",[v._v("老生代")]),v._v("对应一个"),e("code",[v._v("主垃圾回收器")])])])])])]),v._v(" "),e("li",[e("p",[v._v("垃圾回收的执行流程")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("不论主垃圾回收器还是副垃圾回收器 他们都有一个"),e("code",[v._v("统一的执行过程")])])]),v._v(" "),e("li",[e("ol",[e("li",[v._v("标记"),e("code",[v._v("活动对象")]),v._v("和"),e("code",[v._v("非活动对象")]),v._v("  前者的名词解释其实就是 "),e("code",[v._v("还在使用的对象")]),v._v(" 后者的名词解释就是 "),e("code",[v._v("可以进行垃圾回收的对象")])])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[v._v("对于"),e("code",[v._v("非活动对象")]),v._v("所占据对内存 进行一次回收 (垃圾清理)")])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[v._v("内存整理 我们都知道内存是一块"),e("code",[v._v("连续的分配空间")]),v._v(" 当多次进行垃圾回收以后 这块连续的内存空间会被变得不连续 那么就会产生"),e("code",[v._v("内存碎片")]),v._v(" 不过这一步并不是必须的 同时在上文提到的"),e("code",[v._v("副垃圾回收器")]),v._v("并不会产生内存碎片")])])])])]),v._v(" "),e("li",[e("p",[v._v("有了上述的名词解释基础以后 我们一起来看看副垃圾回收器是如何工作的吧")])])]),v._v(" "),e("h3",{attrs:{id:"副垃圾回收器工作流-scavenge算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#副垃圾回收器工作流-scavenge算法"}},[v._v("#")]),v._v(" 副垃圾回收器工作流(scavenge算法)")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("基于"),e("code",[v._v("scavenge算法")]),v._v(" 副垃圾回收器把新生区对半分为了 "),e("code",[v._v("对象空间")]),v._v("和"),e("code",[v._v("空闲空间")]),v._v(" 而所有的新对象都会被添加到"),e("code",[v._v("对象空间")]),v._v("里 同时 当对象空间快被"),e("code",[v._v("填满")]),v._v("的时候就会出发垃圾回收的前置条件")])]),v._v(" "),e("li",[e("h3",{attrs:{id:"回收过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回收过程"}},[v._v("#")]),v._v(" 回收过程")]),v._v(" "),e("ul",[e("li",[e("ol",[e("li",[v._v("标记活动对象和非活动对象")])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[e("code",[v._v("活动对象")]),v._v("复制到空闲区域中 同时"),e("code",[v._v("有序排列")]),v._v("所有的存活对象 这里的有序排列正好解释了为什么副垃圾回收器不会产生"),e("code",[v._v("内存碎片")]),e("br"),v._v("\n("),e("code",[v._v("一块连续的内存空间被分割以后就会产生内存碎片 而副垃圾回收器在复制完活动对象以后 对所有的对象进行了一次排序 那么内存会重新归于连续状态")]),v._v(")")])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[v._v("对"),e("code",[v._v("空闲区域")]),v._v("和"),e("code",[v._v("对象区域")]),v._v("做一次角色翻转 也就是两者角色兑换 也正是因为这个机制 在新生区中 这两个区域可以"),e("code",[v._v("无限次使用")]),v._v(" 脑补一下翻转过程 翻转以后此时的"),e("code",[v._v("空闲区域")]),v._v("被"),e("code",[v._v("非活动对象填充")]),v._v(" "),e("code",[v._v("对象区域")]),v._v("仅剩下"),e("code",[v._v("活动对象")]),v._v(" 所以 也就完成了垃圾回收")])])]),v._v(" "),e("li",[e("ol",{attrs:{start:"4"}},[e("li",[v._v("翻转以后即完成垃圾回收")])])])]),v._v(" "),e("p",[v._v("具体的回收过程 可以参考下图\n"),e("img",{attrs:{src:t(202),alt:"副垃圾器回收流程"}})])])])])}),[],!1,null,null,null);_.default=a.exports}}]);