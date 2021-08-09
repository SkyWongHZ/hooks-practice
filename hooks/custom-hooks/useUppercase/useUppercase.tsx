/*
 * @Author: Sky
 * @Date: 2021-07-22 20:25:45
 * @Description: 
 */
import React, { useState, useEffect,useMemo } from 'react'


export default (list:Array<any>) => {
    const [arr, setArr] = useState(list)
    useMemo(()=>{
        const newArr = arr.map(item => {
            console.log(111);
            return item.toUpperCase()
        })
        setArr(newArr)
    },[])
  
    return arr
   
}
