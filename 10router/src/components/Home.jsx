import React, { useState } from 'react';
import './App.css';

function Home() {
  const [theme, setTheme] = useState({ backgroundColor: '#ffffff' }); // Initially white background

  const setColor = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === '#000000' ? '#ffffff' : '#000000',
    }));
  };

  return (
    <>
      <div style={theme} className='container'>
        <button onClick={setColor}>Toggle Background</button>
      </div>
    </>
  );
}


export default Home