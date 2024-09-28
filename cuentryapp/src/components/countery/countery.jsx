import React from 'react'
import './countery.css'
import { useEffect } from 'react'
import { useState } from 'react'
function Countery() {
const [countery , setCountery] = useState([])
const [loading , setLoading] = useState(true)
useEffect(()=>{
    const getCounery = async () => {
    const url = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await url.json()
    console.log(data);
    setCountery(data)
    setLoading(false)
    }
    getCounery()
},[])


  return (
    <div className='container'>
         <h1 className='title'>Countery Ditaley</h1>
    <div className="result">
        {countery.map((counetry)=>(
            <div className="contents">
            <div className="images-box">
                <img src={counetry.flags.svg} alt="" />
            </div>
            <div className="text-box">
            <p>Name: {counetry.name.common}</p><br />
            <p>Capital:{counetry.capital ? counetry.capital[0] : 'N/A'}</p><br />
            <p>Population:{counetry.population.toLocaleString()}</p>
            </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Countery