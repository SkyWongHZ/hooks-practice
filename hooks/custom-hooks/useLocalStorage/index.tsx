/*
 * @Author: Sky
 * @Date: 2021-07-10 17:22:14
 * @Description: 
 */
import React, { useState,useEffect } from 'react'

import useLocalStorage from './useLocalStorage'

// Usage
export default function Component() {
	// const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true)
	// const toggleTheme = () => {
	//   setDarkTheme(prevValue => !prevValue)
	// }
	const [theme, setTheme] = useState(true)

	// useEffect(() => {
	// 	handleStorage()
	// 	// return () => {
	// 	// 	localStorage.removeItem('theme')
	// 	// }
	// }, [])


	const toggleTheme=()=>{
		setTheme(val=>!val)
		handleStorage()
	}

	const handleStorage=()=>{
		localStorage.setItem('theme',theme)
	}
	
	return (
		// <button onClick={toggleTheme}>
		//   {`The current theme is ${isDarkTheme ? `dark` : `light`}`}
		// </button>

		<button onClick={toggleTheme}>
			{`The current theme is ${theme ? `dark` : `light`}`}
		</button>
	)
}
