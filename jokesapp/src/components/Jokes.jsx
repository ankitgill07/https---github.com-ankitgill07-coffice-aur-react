import React, { useEffect, useState } from 'react'
import './joke.css'
import { data } from 'autoprefixer';
function Jokes() {
const [joke, setJoke] = useState({});
useEffect(()=>{
const getJokes = async () => {
const url = await fetch (`https://official-joke-api.appspot.com/random_joke`);
const data = await url.json();
console.log(data);
setJoke(data);
}
getJokes()
},[]) 
const moreJoke = () => {
    console.log('Fetching a new joke...');
getJokes()
}
return (
    <div className='container'>
        <div className="jokes-section">
   
         <div className="jokes">
            <p>{joke.setup}</p><br />
            <p>{joke.punchline}</p><br />
            <p>🤪 🤪 🤪 </p>
        </div>
        <button onClick={moreJoke} className='btns'>Get joke</button>
        </div>
    </div>
  )
}

export default Jokes