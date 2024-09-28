import React, { useState, useEffect } from 'react';

function GetMovieData({ movie }) {
  const [data, setData] = useState('ankit');

  useEffect(() => {
    if (movie) {
      fetch(`http://www.omdbapi.com/?apikey=17f8307a&t=${movie}`)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data.Title); // Log the data to see the structure
          
          if (data.Response === "True") {
            setData(data); // Set data only if the response is successful
          } else {
            setData("ankit"); // Set data to null if the movie is not found
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setData("ankit"); // Set data to null in case of an error
        });
    }
  }, [movie]);

  return data;
}



export default GetMovieData;
