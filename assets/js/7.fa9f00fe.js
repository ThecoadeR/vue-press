(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{218:function(t,s,a){t.exports=a.p+"assets/img/redux.4f09784d.jpg"},219:function(t,s,a){t.exports=a.p+"assets/img/demo.f7b66080.gif"},236:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"redux工作流解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux工作流解析"}},[t._v("#")]),t._v(" Redux工作流解析")]),t._v(" "),e("h2",{attrs:{id:"redux是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redux是什么"}},[t._v("#")]),t._v(" Redux是什么")]),t._v(" "),e("p",[t._v("假设我们的业务有三个嵌套的组件ABC 组件A想要传值给组件C 要先传递给组件B 交由B传递给C 在没有引入"),e("code",[t._v("Redux")]),t._v("的时候 我们只能通过这种原始的方法来传递 这时候 我们再假设 如果有一个 公共管理数据状态的地方 我们每次传递值或者修改值 都从这个地方获取 那不论业务多复杂 组件嵌套多深 我们都可以很方便的直接从这个管理仓库里 获取到我们需要的数据 这就是"),e("code",[t._v("Redux")]),t._v("  一个 "),e("code",[t._v("数据层")]),t._v("的框架 或者说是一个 "),e("code",[t._v("状态容器")])]),t._v(" "),e("h2",{attrs:{id:"了解redux工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解redux工作流"}},[t._v("#")]),t._v(" 了解Redux工作流")]),t._v(" "),e("p",[e("img",{attrs:{src:a(218),alt:""}})]),t._v(" "),e("p",[t._v("这张图非常清晰的描述了 "),e("code",[t._v("Redux")]),t._v("的工作流程 光看这一张图可能会有一点晦涩难懂 但是我们可以换个说法 把整个工作流程想像成一个借书的过程")]),t._v(" "),e("p",[t._v("一个人来图书馆借书 他需要说一句话告诉管理员 要借什么书 管理员要根据他提供的信息 找到对应的书籍 然后拿给他 想象过这个过程以后 再来看这个过程")]),t._v(" "),e("p",[t._v("首先 "),e("code",[t._v("React Component")]),t._v("这个组件就是需要借书的人 同时"),e("code",[t._v("Store")]),t._v("就是这个图书馆的管理员 他需要告诉管理员 他要借什么书 那么这个"),e("code",[t._v("Action Creators")]),t._v("就是记录这个信息 并且告知管理员 同时管理员接收到这个信息以后 他需要查询管理手册 找到对应书籍 这个手册就对应"),e("code",[t._v("Reducers")])]),t._v(" "),e("p",[t._v("对应到实际开发到业务逻辑里 其实就是 "),e("code",[t._v("View")]),t._v(" 创建了一个"),e("code",[t._v("action")]),t._v(" 通过"),e("code",[t._v("dispatch")]),t._v("派发到"),e("code",[t._v("Store")]),t._v(" 然后"),e("code",[t._v("Store")]),t._v("会自动转发到"),e("code",[t._v("Reducers")]),t._v(" 那么Reduces就可以接收到这个action 同时根据action来处理业务逻辑 并返回给"),e("code",[t._v("Store")]),t._v(" 那么接下来一起来看代码是如何实现的吧")]),t._v(" "),e("h2",{attrs:{id:"使用redux完成todolist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用redux完成todolist"}},[t._v("#")]),t._v(" 使用Redux完成TodoList")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("由于讲述的是Redux 所以掠过了基础的React组件部分")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(219),alt:""}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("安装Redux "),e("code",[t._v("npm install redux --save")])])]),t._v(" "),e("li",[e("p",[t._v("再一次回想流程 我们需要一个Store(图书馆管理员) 在src目录下新建一个Store文件夹 并创建"),e("code",[t._v("index.js")]),t._v("生成"),e("code",[t._v("Store")]),t._v(" 接收一个"),e("code",[t._v("reducer")]),t._v("参数(对应图书馆管理员的管理手册) 有了手册才可以找到对应书籍对吧～")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createStore "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" reducer "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./reducer.js'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Store "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("creaeStore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("上面已经提到了我们需要一个"),e("code",[t._v("reducer")]),t._v(" 所以 我们新建一个"),e("code",[t._v("reducer.js")]),t._v(" 同时需要注意的是"),e("code",[t._v("reducer.js")]),t._v("是一个纯函数 上文已经提到过 这个文件是一个管理手册 也就说 存放了书籍的具体信息"),e("code",[t._v("(需要被管理的数据)")]),t._v("以及如何处理书籍"),e("code",[t._v("(业务逻辑)")])])]),t._v(" "),e("li",[e("p",[t._v("reducer可以接收两个参数 一个是"),e("code",[t._v("action")]),t._v(" 一个是"),e("code",[t._v("state")]),t._v(" 默认情况下 同时可以定义一组需要被统一管理的数据 把这个需要被管理的数据赋值给state 至于"),e("code",[t._v("action")]),t._v("我们一会儿再聊")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reducer.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  inputValue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  list"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reducer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" originData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("在组件内部引入"),e("code",[t._v("Store")]),t._v(" 同时store提供了"),e("code",[t._v("getState()")]),t._v("这个API 可以让我们获取定义好的state 既然获取了数据 那么如果修改了数据 我们也是需要让组件知道的 所以需要使用store提供给我们的另一个API "),e("code",[t._v("subscribe")]),t._v(" 这里定义的"),e("code",[t._v("handleStoreChange")]),t._v("其实只做一件事 也就是再次重新获取state")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取store里的数据")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Store/'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取数据 ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件订阅store")]),t._v("\n    store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleStoreChange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleStoreChange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("执行到上面那一步我们就可以在我们的业务组件中使用"),e("code",[t._v("redux")]),t._v("了 在对应业务组件中引入这个"),e("code",[t._v("Store")]),t._v(" 同时我们再次回顾上问中的Redux工作流的那张图 当有了管理员"),e("code",[t._v("(store)")]),t._v(" 并且有了管理手册以后"),e("code",[t._v("(reducer)")]),t._v("以后 我们现在只差一步了 也就是告诉管理员 我们需要借什么书"),e("code",[t._v("(操作什么数据)")]),t._v(" 也就是组件向"),e("code",[t._v("Store")]),t._v("派发一个"),e("code",[t._v("action")]),t._v("的过程")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件派发action")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件对应的绑定事件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleValueChange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个action type表示要做啥 value 表示需要传递的值")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" action "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change_input_value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//store接收到事件以后 需要转发给reducers 交由reducers处理")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[e("p",[t._v("当代码写到这里 回头再去看一次上文提到的比喻 看看发生了什么 首先 借书人"),e("code",[t._v("view/React Component")]),t._v("通过一句话"),e("code",[t._v("action")]),t._v("告诉了管理员"),e("code",[t._v("Store")]),t._v("要借什么书 这个时候 管理员需要查阅手册 来返回对应的书"),e("code",[t._v("newState")]),t._v(" 所以我们回到reducer里看看 该怎么实现需求")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("还记得之前定义"),e("code",[t._v("reducer.js")]),t._v("的时候 reducer函数接收的参数里有"),e("code",[t._v("action")]),t._v("么 这个"),e("code",[t._v("action")]),t._v("其实就是"),e("code",[t._v("store")]),t._v("自动转发给"),e("code",[t._v("reducer")]),t._v("的 所以我们可以在"),e("code",[t._v("reducer")]),t._v("里拿到对应的"),e("code",[t._v("action")]),t._v(" 并且根据action定义的type不同 处理不同的业务逻辑")])]),t._v(" "),e("li",[e("p",[t._v("同时我们还需要注意一点 在Redux之中 真正可以修改的数据的 其实只有Store 并不是修改的方法写在reducer里 reducer就可以修改数据 所以我们需要一个返回一个新值给到Store")])])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  inputValue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  list"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//reducer.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" originData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change_input_value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个新的state")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newState "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  newState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputValue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newState  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store会接收到这个newState 并且会把原有数据替换成该数据 真正有权修改数据的还是Store本身")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n")])])]),e("ul",[e("li",[e("p",[t._v("写到这里 其实我们就完成了redux的初步使用 以及完整的讲解了redux的工作流程 完成了TodoList的第一个功能 顺利输入内容")])]),t._v(" "),e("li",[e("p",[t._v("TodoList里剩下的两个功能就是 点击添加的时候 展示区域显示输入的值 以及在展示区域点击对应项 则可以删除对应项 其实也就是继续在组件内的对应函数里创建不同的action 并且在reducer里对对应的action进行处理即可")])]),t._v(" "),e("li",[e("p",[t._v("待优化的点 可以创建"),e("code",[t._v("action creators")]),t._v(" 统一管理action的创建 以及 "),e("code",[t._v("actionTypes")]),t._v("的定义 减少因为定义type时发生的拼写错误")])])]),t._v(" "),e("h2",{attrs:{id:"加油-💯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加油-💯"}},[t._v("#")]),t._v(" 加油 💯")])])}),[],!1,null,null,null);s.default=n.exports}}]);