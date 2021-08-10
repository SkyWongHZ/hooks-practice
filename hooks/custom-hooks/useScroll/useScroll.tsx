/*
 * @Author: Sky
 * @Date: 2021-07-22 19:25:13
 * @Description: 自定义scroll
 */
import React, { useState, useEffect } from "react"


export default (element: any) => {
    const [pos, setPos] = useState([0, 0])
    
    const handleScroll = () => {
        const x=document.documentElement.scrollLeft
        const y=document.documentElement.scrollTop
        setPos([x,y])
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false)
        return () => {
           window.removeEventListener('scroll', handleScroll, false)
        }
    }, [])
    return pos

}







