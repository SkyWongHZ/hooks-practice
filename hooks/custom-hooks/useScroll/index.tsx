/*
 * @Author: Sky
 * @Date: 2021-07-22 19:25:13
 * @Description: 自定义scroll
 */
import React, { useRef } from "react"
import useScroll from "./useScroll"

export default () => {
    const scrollRef=useRef(null)
    const [x,y]= useScroll(scrollRef)
    console.log(x,y);
    
    return(
        <div style={{width:2000,height:2000,backgroundColor:'green'}} ref={scrollRef}>
            <p>{x} {y}</p>
        </div>
    )

}







