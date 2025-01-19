import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [second,setSecond] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSecond(prev=>prev+1)
        },1000)

        return () => clearInterval();
    },[])
  return (
    <div>
      <h1>Timmer</h1>
      <h3>Second : {second}</h3>
    </div>
  )
}

export default UseEffect
