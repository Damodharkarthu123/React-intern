import React from 'react'
import TestComp from './TestComp'

const Mango=()=>{
    return(
        <h1> Mangoes are Sweet </h1>
    )
}
const Fruits=()=>{
    return(
        <h1> Bananas</h1>
    )
}

function Reverse() {
  return (
    <div> Reverse
        <Mango />
        <Fruits />
        <TestComp />
        </div>
  )
}

export default Reverse


