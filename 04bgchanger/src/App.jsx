import React, { useState } from 'react';



function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      { "Add content or interactive elements here "}
    </div>
  );
}

export default App;
