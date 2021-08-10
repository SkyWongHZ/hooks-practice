<!--
 * @Author: Sky
 * @Date: 2021-08-09 11:24:36
 * @Description:react-hooks技术分享
-->
###大纲
1. 与class组件,函数组件的区别
2. hooks各api使用
3.  模拟生命周期
4.  自定义hooks


1 与class组件,函数组件的区别
1.1 class组件有setState操作,内部修改state状态
1.2 函数式组件没有内部setState操作
衍生:hooks正好是两者结合,写法简洁,函数式写法,又有内部state操作


2 各api使用
useState  定义内部state变化
useEffect 操作副作用  ***数组里边是浅比较***
useRef  取ref真实dom节点
useMemno useCallback 用于更新优化操作
useContext 顶层共享一些值,和react中的context类似
useImperativeHandle  暴露一些子组件的方法给父组件用,一般与forWardRef结合使用
***思考点:历史原因  class组件与hooks共存***
useLayoutEffect  useDebugValue 
useLayoutEffect是同步的,useEffect是同步的  
useDebugValue基本不太用

3 模拟生命周期0.
componentDidMount
componenDidUpdate
componentWillUnmount

4 自定义hooks
明确输入什么,输出什么


