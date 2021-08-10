/*
 * @Author: Sky
 * @Date: 2021-07-09 16:22:39
 * @Description: 
 */


import React, { useRef,useEffect,useState ,useImperativeHandle,forwardRef} from 'react'
import { Input, Button,Modal } from 'antd'

// interface textInputProps {
//     current:any
//     focus:()=>void
//     ref:any
// }

export default () => {
    const modalRef = useRef(null)
    const click=()=>{
        // const a=modalRef.current
        // console.log('a',a);
        console.log('modalRef:',modalRef.current);
        
        modalRef.current&&modalRef.current.changeVisible()
        
    }
    return (
        <div>
            <ShowModal ref={modalRef}/>
            <Button onClick={click}>点击</Button>
        </div>
    )
}

let ShowModal=(props,ref)=>{
   
    const [visible, setVisible] = useState(false)
    // useImperativeHandle(ref, () => ({
    //     // changeVal 就是暴露给父组件的方法
    //     // handleOk,
    //     // handleCancel,
    //     changeVisible
    // }));
    useImperativeHandle(ref,()=>({
        changeVisible
    }))


    const changeVisible=()=>{
        setVisible(val=>!val)
    }
    const handleOk=()=>{
       setVisible(true)
    }
    const handleCancel=()=>{
        setVisible(false)
    }
    return(
        <Modal title="Basic Modal"  visible={visible} onOk={changeVisible} onCancel={changeVisible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
}
ShowModal =forwardRef(ShowModal)

