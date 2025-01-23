import React from 'react'

const ReactReduce = () => {
    let arr = [1,2,3,4,5];
    const result = arr.reduce((accum,curre)=>accum*curre)

  return (
    <div>
      <h5>Array Multiplication Using Reduce Function</h5>
      <p>{
        result
        }</p>
    </div>
  )
}

export default ReactReduce
