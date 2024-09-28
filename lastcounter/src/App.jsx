import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function incrseValue () {
if(count < 20){
  setCount(count + 1)
}else{
  setCount(count)
}
}
function discreValue () {
  if(count === 0){
    setCount(count )
  }else{
    setCount(count - 1)
  }
  }
  return (
    <>
     <h1>counter Value {count}</h1>
     <button onClick={incrseValue}>Up</button>
     <button onClick={discreValue}>down</button>
    </>
  )
}

export default App
