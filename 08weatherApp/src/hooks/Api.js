import React, { useEffect, useState } from "react";

function Githubuser(user) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://www.omdbapi.com/?apikey=17f8307a&t=${user}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [user]);

  return data; 
}
export default Githubuser;