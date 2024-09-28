import React, { useEffect, useState } from 'react'

function Stop() {
    const [time , setTime] = useState(0)
    const [runing , setRuning] = useState(false)
    useEffect(()=>{
    let interval;
    if(runing){
        interval = setInterval(()=>{
            setTime((prevTime)=> prevTime + 10)
        },10)
    }else if(!runing){
    clearInterval(interval)
    }
    return  () => clearInterval(interval)
    },[runing])
  return (
    <div>
    <h1>Stopwatch</h1>
    <div>
        <span>{("0" +  Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" +  Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" +  ((time/10)%100))}</span>
    </div>
    <div>
    {runing ? 
        (    
        <button onClick={()=>{setRuning(false)}}>Stop</button>
        
        ) : (
            <button onClick={()=>{setRuning(true)}}>Start</button>
        )
        }
    
        <button onClick={()=>{setTime(0)}}>Reset</button>
    </div>
    </div>
  )
}

export default Stop