import React, { useEffect, useState } from 'react'
import './App.css'
function About() {
const [data, setData] = useState(null);
const [input , setInput] = useState("")
const [shouldFetch, setShouldFetch] = useState(false); // New state to trigger fetch

useEffect(() => {
  const getMovie = async () => {
    if (shouldFetch && input) { // Only fetch when shouldFetch is true and input is not empty
      const url = await fetch(`http://www.omdbapi.com/?apikey=17f8307a&t=${input}`);
      const data = await url.json();
      setData(data);
      console.log(data);
      setShouldFetch(false); // Reset shouldFetch after fetching data
    }
  };
  getMovie();
}, [shouldFetch, input]); // Runs when shouldFetch or input changes

const searchData = () => {
  setShouldFetch(true); // Trigger the fetch on button click
};

  return (
    <div className='conatiner'>
    <div className="input-section">
      <input value={input}  onChange={(e) => setInput(e.target.value)}  type="text" placeholder='movie name ' />
      <button className='search' onClick={searchData}>Search</button>
    </div>
    <div className="result">
          <div className="content">
          <div className="images">
            <img src={data?.Poster} alt="" />
          </div>
          <div className="text">
         <div className="name">
         <p>{data?.Title}</p>
         </div>
            <p>Rating: <span>{data?.imdbRating}</span></p>
            <p>Realease Date: <span>{data?.Released}</span></p>
            <p>Actor : <span>{data?.Actors}</span></p> 
          </div>
        </div>
    </div>
    </div>
  )
}

export default About