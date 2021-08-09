/*
 * @Author: Sky
 * @Date: 2021-07-22 17:55:47
 * @Description: 
 */

import React,{useEffect} from 'react'

export default(title:string)=>{
    
    useEffect(() => {
       document.write=title
    }, [])
}