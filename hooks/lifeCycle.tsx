/*
 * @Author: Sky
 * @Date: 2021-07-10 16:06:53
 * @Description: 
 */

import React,{useState,memo,useRef,useEffect,useLayoutEffect} from 'react'

const Page = () => {
	const [count, setCount] = useState(0)
	
	// 只有componentdidUpdate  没有componentDidMount
	// useEffect(() => {
	// 	if(!ref.current){
	// 		ref.current=true
	// 		console.log('didmount');
			
	// 	}else{
	// 		add()
	// 		console.log('didupdate');
			
	// 	}
	// },[])
	const add=()=>{
		setCount(count+1)
	}
	return (
		<>
			<div>生命周期</div>
			<button onClick={add}>+</button>
			<Child  count={count}/>

		</>
	)
}
let Child = (props = {}) => {

	const ref=useRef(true)
	useEffect(()=>{
		console.log(`子组件count:${props.count}`);
		if(!ref.current){
			ref.current=true
			console.log('didmount');
			
		}else{
			console.log('didupdate');
			
		}
	})
	
	return (
		<div>count:{props.count}</div>
	)
}


export default Page