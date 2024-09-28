import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './coustem/props'


function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline text-center'>Hello Tailwante</h1>
      <Chai username="ankit" btns="started"/>
      <Chai username="hello" />
    </>
  )
}

export default App
