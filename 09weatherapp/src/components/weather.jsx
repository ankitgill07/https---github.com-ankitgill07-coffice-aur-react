import React, { useEffect, useState } from 'react'

function Weather() {

const [weather ,setWeather] = useState('');
const [input , SetInput] = useState('');
const [fetchData , setFetchData] = useState(false);
const key = `26f79abb5067ccde7276ca0fd13724ca`
useEffect(()=>{
const getWeather = async () =>{
const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`)
const data = await url.json();
console.log(data);
setWeather(data)
setFetchData(false)
}
getWeather()
},[fetchData])


const showData = () =>{
setFetchData(true)
}

  return (
    <div className='h-screen bg-purple-200 grid place-content-center '>
      <div className='w-80 h-auto bg-blue-700  rounded-lg text-center'>
      <div className='mt-9 mb-9 w-full'>
        <input value={input} onChange={(e)=>SetInput(e.target.value)} className='w-56 h-10 rounded-3xl pl-5 text-base font-semibold placeholder:text-gray-500 border-none outline-none bg-sky-50' type="text" placeholder='Search' />
        <button onClick={showData} className='pt-2 pb-2 pl-3 pr-3 ml-2 rounded-full bg-sky-50 '><i className="fa-solid fa-magnifying-glass p-0"></i></button>
      </div>
      <div className='w-20 h-20 m-auto'>
        <img src="https://cdn-icons-png.flaticon.com/512/3222/3222800.png" alt="" />
      </div>
      <div className='m-8'>
        <h1 className='text-6xl font-semibold text-white pb-2'>{weather?.main?.temp ? (weather.main.temp - 273.15).toFixed(2) : ''}</h1>
        <h3 className='text-4xl font-normal text-white'>{weather?.name}</h3>
      </div>

      <div className='w-30 h-30 flex gap-2 items-center pb-8'>

    <div className='w-14 h-14 pl-4 '>
    <img className="filter invert"  src="https://static.thenounproject.com/png/985548-200.png" alt="" />
    </div>
    <div className='grid text-left'>
        <span className='text-lg text-white'>{weather?.main?.humidity}%</span>
        <span className='text-lg text-white'>Humidity</span>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Weather