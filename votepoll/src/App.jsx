import { useState } from 'react'
import './App.css'

function App() {
  const [polls , setPolls] = useState(0);
const [secrondPolls ,setSecondPolls] = useState(0);
const [threePolls , setThreePolls] = useState(0)
const vote = () =>{
    setPolls(polls+1)
}
const newPolls = () =>{
  setSecondPolls(secrondPolls+1)
}
const Polls = () =>{
  setThreePolls(threePolls+1)
}
return (
    <>
    <div className='w-full h-screen grid place-content-center gap'>
     <div className='grid gap-8'>
       <h1 className='text-center mb-3 font-bold text-2xl text-green-500'>Vote Polls App</h1>
      <div className='w-96 h-12 border-solid border-2 border-black flex items-center justify-center'>
       <div className='flex items-center gap-32'>
        <p  className='font-medium text-lg'>{polls}</p>
        <img className='w-12' src="https://logos-world.net/wp-content/uploads/2022/06/BJP-Symbol.png" alt="" />
     <button onClick={vote} className='text-xl font-medium'>Click</button>
       </div>
      </div>
      <div className='w-96 h-12 border-solid border-2 border-black flex items-center justify-center'>
       <div className='flex items-center gap-32'>
        <p className='font-medium text-lg'>{secrondPolls}</p>
        <img className='w-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian_National_Congress_logo.svg/2048px-Indian_National_Congress_logo.svg.png" alt="" />
     <button onClick={newPolls} className='text-xl font-medium'>Click</button>
       </div>
      </div>
      <div className='w-96 h-12 border-solid border-2 border-black flex items-center justify-center'>
       <div className='flex items-center gap-32'>
        <p className='font-medium text-lg'>{threePolls}</p>
        <img className='w-9' src="https://play-lh.googleusercontent.com/NX3awlUIn86OFM-P6361L28anWxnHurhLCBPB6tvcp3f2wW_p1IJ9N26EWRZgDlOOk0" alt="" />
     <button onClick={Polls} className='text-xl font-medium'>Click</button>
       </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default App
