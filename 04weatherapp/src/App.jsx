
import { useState } from 'react'
import './App.css'
import GetWeather from './coustemHooks/data'
function App() {
const [city, setCity] = useState("")
const [input , setInput] = useState("")
const cityData = GetWeather(city)
const showData = () => {
  setCity(input)
}
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
      <div className='bg-white w-[600px] flex flex-col items-center'>
        <div className='flex'>
          <input
            className='outline-none border border-black rounded p-1 w-[537px]'
            type="text"
            placeholder='Enter GitHub username'
            value={input}
            onChange={(e) => setInput(e.target.value)} 
          />
          <button
            className='bg-blue-600 w-[60px] text-white p-2'
            onClick={showData}
          >
            Search
          </button>
        </div>
        {cityData && (
          <div className='mt-4'>
            <img className='w-[200px] h-[200px]' src={cityData.Poster} alt="" />
            <h1>{cityData.Title || "No name available"}</h1>
            <p>{cityData.Year || "No location available"}</p>
            <p>{cityData.Plot || "No bio available"}</p>
            <p>{cityData.Actors || "No location available"}</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
