/*
 * @Author: Sky
 * @Date: 2021-07-01 10:10:14
 * @Description: 
 */
import React, { useState ,useEffect,useRef, useLayoutEffect} from 'react'
import { Button } from 'antd'

export default (params: React.ReactNode) => {
  const [count, setCount] = useState(0)
  const timeRef = useRef()
  useEffect(()=>{
    // 定时器用法
    // timeRef.current=timer()
    return ()=>{
      // timeRef.current&&clearInterval(timeRef.current)
    }
  },[])

  useLayoutEffect(()=>{
    // 定时器用法
    // timeRef.current=timer()
    return ()=>{
      // timeRef.current&&clearInterval(timeRef.current)
    }
  },[])
  const timer=()=>{
    setInterval(()=>{
      setCount(count=>count+1,)
      console.log(`count`,count);
      
    },1000)
  }
  const add=()=>{
    setCount(count=>count+1)
  }
  const minus=()=>{
    setCount(count=>count-1)
  }
  return (
    <>
      <div>
        <Button onClick={add}>+</Button>
        <Button onClick={minus}>-</Button>
      </div>
      <div>{count}</div>
    </>

  )
}