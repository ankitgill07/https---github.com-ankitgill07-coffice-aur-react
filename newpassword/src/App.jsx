import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number , setNumber] = useState(false);
  const [charAllow , setCharAllow] = useState(false);
   const [password , setPassword] = useState("");
   const paswordRef = useRef(null)

   const passwordgenerator = useCallback(()=>{
    let pass = "";
    let stree = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) stree += "0123456789";
    if(charAllow) stree += "%^&*()_$#@!~"
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * stree.length)
      pass += stree.charAt(char);
      setPassword(pass)
    }
   },[length, number , charAllow ,setPassword])


const copyPassword  = useCallback(()=>{
  paswordRef.current?.select()
  window.navigator.clipboard.writeText()
},[password])


   useEffect(()=>{
    passwordgenerator()
   },[length,number,charAllow,passwordgenerator
   ])
  return (
    <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} length   className="outline-none w-full py-1 px-3" placeholder='password' readOnly ref={paswordRef}/>
        <button  onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
        </div>
        <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input onChange={(e) =>setLength(e.target.value)} type="range"  className="cursor-pointer" min={6} max={20} value={length} />
          <label>Length: {length}</label>
    
          </div>
          <div className="flex items-center gap-x-1">
            <input onChange={() => setNumber((prev) => !prev)} type="checkbox" checked={number} id='numberInput'/>
            <label  htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input onChange={() => setCharAllow((prev) => !prev)}  type="checkbox" checked={charAllow}    id="characterInput" />
              <label htmlFor="characterInput">Characters</label>
              </div>
          </div>
        </div>
    </>
  )
}

export default App
