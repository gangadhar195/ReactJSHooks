import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeButton = () => {
    const {them,toggleThem} = useContext(ThemeContext)
  return (
    <div>
      <button onClick={toggleThem}>
        Switch {them==="light"?"dark":"light"} mode
      </button>
    </div>
  )
}

export default ThemeButton;
