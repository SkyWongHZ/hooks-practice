/*
 * @Author: Sky
 * @Date: 2021-07-09 15:34:43
 * @Description: 
 */
import React, { useState ,useEffect,useRef,useContext} from 'react'
import { Button } from 'antd'
import { render } from 'react-dom'
import { ReactNode } from 'react';

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  

const ThemeContext=React.createContext(themes)
export  default ()=>{
    return(
        <ThemeContext.Provider value={themes}>
            <Toolbar></Toolbar>
        </ThemeContext.Provider>
    )
}

function Toolbar(params:ReactNode) {
    return(
        <ThemeButton></ThemeButton>
    )
}


function ThemeButton(params:ReactNode) {
    const theme = useContext(ThemeContext)
    console.log('theme123',theme);
    
    return <Button >button</Button>

}