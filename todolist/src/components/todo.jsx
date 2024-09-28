import React, { useState } from 'react'
import './app.css'
function Todo() {
    const [initial , setInitial] = useState()
    const [data , setData] = useState([])
    const getInput = (e) =>{
    console.log(e.target.value);
    setInitial(e.target.value)
    }
    const getData = () => {
    console.log(initial);
    let store = [...data , initial]
    setData(store)
    setInitial("")
    }
    const deleteTask = (index) =>{
        console.log(index);
        let filterData = data.filter((curElement , id)=>{
         return id != index
        })
        setData(filterData)
    }
  return (
   <>
<div className="container">
    <div className="inputTask">
        <input type="text" placeholder='enter your task' value={initial} onChange={getInput}/>
        <button onClick={getData}>Add</button>
    </div>
    {data.map((curtValue , index) =>{
return(
    <>
    <div className='taskData'>
        <p>{curtValue}</p>
        <i id='deleteIcon' onClick={()=>deleteTask(index)} class="fa-solid fa-trash"></i>
    </div>
    </>
)
    })}
</div>
   </>
  )
}

export default Todo