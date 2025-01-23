import React from 'react'

const ReactReduce = () => {
    let arr = [1,2,3,4,5];
    const result = arr.reduce((accum,curre)=>accum*curre)
    const mul = arr.map((item)=>item*2);

  return (
    <div>
        <h5>Array Element</h5>
      <p>{
        arr.map((item)=>item + "  ")
        }</p>
      <h5>Array Multiplication Using Reduce Function</h5>
      <p>{
        result
        }</p>
        <h5>Array Multiply each item Using Map Function</h5>
      <p>{
        mul.map((item)=>item + "  ")
        }</p>
    </div>
  )
}

export default ReactReduce
