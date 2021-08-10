/*
 * @Author: Sky
 * @Date: 2021-07-10 14:49:59
 * @Description: useMeno使用
 */

// import React,{useState,memo,useCallback} from 'react'
// import {Button} from 'antd'

/**
 * @description: meno使用方式
 * @param {*}
 * @return {*}
 */
// const Page=()=>{
//     const [count, setCount] = useState(0)
//     return(
//         <div>
//             <p>count:{count}</p>
//             <Button onClick={()=>setCount(count+1)}>+</Button>
//             <Child/>
//         </div>
//     )
// }

// let Child=()=>{
//     console.log('子组件');
//     return(
//         <div>
//             这是一个子组件
//         </div>
//     )
// }
// Child=memo(Child)
// export default Page


import React, { useState,memo } from 'react';


export default (props = {}) => {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const handleSetStep = () => {
        setStep(step + 1);
    }

    const handleSetCount = () => {
        setCount(count + 1);   }

    const handleCalNumber = () => {
        setNumber(count + step);
    }


    return (
        <div>
            <button onClick={handleSetStep}>step is : {step} </button>
            <button onClick={handleSetCount}>count is : {count} </button>
            <button onClick={handleCalNumber}>numberis : {number} </button>
            <hr />
            <Child step={step} count={count} number={number} /> <hr />
            {/* <ChildMemo step={step} count={count} number={number} /> */}
        </div>
    );
}

const Child=(props={})=>{
    console.log(`--- re-render ---`);
            return (
                <div>
                    {/* <p>step is : {props.step}</p> */}
                    {/* <p>count is : {props.count}</p> */}
                    <p>number is : {props.number}</p>
                </div>
            );
}



// let ChildMemo=(props={}) => {
   
//     console.log(`--- memo re-render ---`);
//     return (
//         <div>
//             {/* <p>step is : {props.step}</p> */}
//             {/* <p>count is : {props.count}</p> */}
//             <p>number is : {props.number}</p>
//         </div>
//     );
// };
// const isEqual = (prevProps, nextProps) => {
//     if (prevProps.number !== nextProps.number) {
//         return false;
//     }
//     return true;
// }

// ChildMemo=memo(ChildMemo,isEqual)

