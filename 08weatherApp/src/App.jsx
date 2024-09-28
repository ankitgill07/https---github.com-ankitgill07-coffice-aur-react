import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Githubuser from './hooks/Api'

function App() {
  const [users, setUsers] = useState("");
  const [input, setInput] = useState("");
  const usersData = Githubuser(users);

  const handleSearch = () => {
    // This will trigger the useEffect in Githubuser hook
    setUsers(input);
    setInput(input = "")
  };
  return (
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
            className='bg-blue-600 w-[60px] bg-blue-500 text-white p-2'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {usersData && (
          <div className='mt-4'>
            <img className='w-[200px] h-[200px]' src={usersData.Poster} alt="" />
            <h1>{usersData.Title || "No name available"}</h1>
            <p>{usersData.Year || "No location available"}</p>
            <p>{usersData.Plot || "No bio available"}</p>
            <p>{usersData.Actors || "No location available"}</p>
          </div>
        )}
      </div>
    </div>
)
}

export default App
