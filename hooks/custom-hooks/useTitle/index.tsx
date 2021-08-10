/*
 * @Author: Sky
 * @Date: 2021-07-22 17:31:56
 * @Description: 
 */
import { useEffect } from 'react'
import useTitle  from './useTitle'

export default()=>{
    useTitle('五常')
    
    return(
        <>
            <title>仓前</title>
            <p>这是一段内容</p>
            {/* <button onClick={onChange}>改变文本</button> */}
        </>
    )
}
