import React, { useState } from 'react'
import './app.css'
function Calculator() {
const [data ,setData] = useState("")
const getvalue = (event) =>{
console.log(event.target.value)
setData(data.concat(event.target.value))
}
const calculation =() =>{
setData(eval(data).toString())
}
const back =() =>{
setData(data.slice(0,-1))
}
const clear = () =>{
setData("")
}
return (
    <div className='container'>
<div>
    <input placeholder='0' value={data} />
</div>
<br />
<button onClick={getvalue} value="(">(</button>
    <button onClick={getvalue} value=")">)</button>
        <button onClick={getvalue} value="%">%</button>
            <button onClick={clear} >AC</button>

                <button onClick={getvalue} value="7">7</button>
                    <button onClick={getvalue} value="8">8</button>
                        <button onClick={getvalue} value="9">9</button>
                            <button onClick={getvalue} value="*">*</button>
                                <button onClick={getvalue} value="4">4</button>
                                    <button onClick={getvalue} value="5">5</button>
                                        <button onClick={getvalue} value="6">6</button>
                                            <button onClick={getvalue} value="-">-</button>
                                                <button onClick={getvalue} value="1">1</button>
                                                    <button onClick={getvalue} value="2">2</button>
                                                        <button onClick={getvalue} value="3">3</button>
                                                            <button onClick={getvalue} value="+">+</button>

                                                            <button onClick={getvalue} value="0">0</button>
                                                    <button onClick={back}>Back</button>
                                                        <button onClick={calculation}>=</button>
                                                            <button onClick={getvalue} value="/">/</button>
    </div>
)
}

export default Calculator