/*
 * @Author: Sky
 * @Date: 2021-08-09 14:13:25
 * @Description: useLayoutEffect
 */

import React, { useEffect, useLayoutEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (count === 0) {
        const randomNum = 10 + Math.random()*200
        setCount(10 + Math.random()*200);
      }
    }, [count]);
  
    return (
        <div onClick={() => setCount(0)}>{count}</div>
    );
  }
  


export default App;