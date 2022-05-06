###react
1. UI框架：antd、material;状态管理器redux;脚手架：create-react-app
* 非全局安装react脚手架：npx create-react-app appName 
2. 组件分为函数式组件和class组件。
* 函数时组件只能通过return返回一个组件，组件名必须大写。无状态，直接调用
* class组件通过用render取return一个组件，有状态，先实例化组件在使用
* react组件只能有一个根节点，可使用div或者Fragment进行包裹多个组件
* 动态创建元素
```
React.createElement(
 type,
 [props],
 [...children] )
 ```
 * 要想获取自定义内的组件，需要使用props.children进行访问
 * 使用prop-types检查props，需要先安装 npm i prop-types -S
 3. 组件的声明周期：初始化、运行中、销毁、错误处理
4. react hooks
* useState:让函数组件拥有自己的组件state。使用方法：const [state,setState] = useState(初始值)
* useEffect:类似于componentDidMount或者componentDidUpdate
* useContext可以帮助我们跨越组件层级直接传递变量，实现数据共享。
+ 只能在函数组件中调用Hook函数，并且Hook函数不能循环、条件或嵌套函数中使用
5. 组件通信：react提供createContext的provider和Consumer结合使用，实现跨域组件间的通信（及非父子组件）
6. Hoc(高阶组件)：向函数传递一个组件，并返回一个新的组件
7. redux的核心createStore，通过不同类型来判断执行，reducer必须为一个纯函数,去改变state值。（要先接收action和state值）
8. 