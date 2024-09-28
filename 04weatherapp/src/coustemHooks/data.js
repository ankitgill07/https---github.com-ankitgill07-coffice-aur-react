import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function GetWeather (cityValue) {
    const [weather ,setWeather] = useState({})

 useEffect(()=>{
    if(cityValue){
    fetch(`http://www.omdbapi.com/?apikey=17f8307a&t=${cityValue}`)
    .then((res) => res.json())
    .then((data)=>{
        setWeather(data)
    })
    .catch(()=> console.error('Error fetching data:', error))
    }
 },[cityValue])
 return weather
}

export default GetWeather