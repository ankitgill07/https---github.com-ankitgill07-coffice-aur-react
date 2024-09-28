import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext';
import { useContext } from 'react';
function Login() {
const [username , setUsername] = useState('');
const [password, setPassword] = useState('');
const {setUser} = useContext(UserContext)
const handleSumbit = (e) =>{
  e.preventDefault()
setUser({username,password})
}
 
  return (
    <div>
        <h1>Login</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='username'/>
        {" "}
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='password'/>
        <button onClick={handleSumbit}>Sumbit</button>
    </div>
  )
}

export default Login