import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({children})=>{
const [them,setThem] = useState("light")

const toggleThem = ()=>{
    setThem((prevThem)=>{prevThem=="light"?"dark":"light"})
}
return(

    <ThemeContext.Provider value={{them,toggleThem}}>
        {children}
    </ThemeContext.Provider>
);
}

export {ThemeProvider};