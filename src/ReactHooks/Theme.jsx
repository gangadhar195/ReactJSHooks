import React from 'react'
import React from 'react'
import UseEffect from './ReactHooks/UseEffect'
import UseState from './ReactHooks/UseState'
import { ThemeProvider } from './ReactHooks/ThemeContext'
import ThemeButton from './ReactHooks/ThemeButton'

const Theme = () => {
  return (
   
      <ThemeProvider>
      <div>
        <h1>Welcome to the Theme Swither App</h1>
        <ThemeButton/>
      </div>
    </ThemeProvider>
  //   <div>
  //     {/* <UseEffect/> */}
  //     {/* <UseState/> */}
      
  //   </div>
   
  )
}

export default Theme
