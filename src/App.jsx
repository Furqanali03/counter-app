import { useState } from 'react'
import './App.css'

function App() {
  //num variable
  const [num , setNum] = useState(0)

  // add number function
  const addNum = () => {
    setNum(num + 1)
  }

  // remove number function
  const removeNum = () => {
    if (num > 0) {
      
      setNum(num - 1)
    }
  }

  // reset number function
  const resetNum = () => {
    setNum(0)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {num}</h2>
      <button onClick={addNum} className='button green'>+</button>
      <button onClick={removeNum} className='button'>-</button>
      <button onClick={resetNum} className='button blue'>reset</button>
    </>
  )
}

export default App
