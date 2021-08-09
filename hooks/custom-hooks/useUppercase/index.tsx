/*
 * @Author: Sky
 * @Date: 2021-07-22 20:24:55
 * @Description: 讲数组转化为大写,并输出
 */
import useUppercase from "./useUppercase"

export default()=>{
    const list=['a','b','c']
    const arr= useUppercase(list)
    return(
        <>
            { arr?.map(item=><div key={JSON.stringify(item)}>{item}</div>)}
        </>
       
    )
}

