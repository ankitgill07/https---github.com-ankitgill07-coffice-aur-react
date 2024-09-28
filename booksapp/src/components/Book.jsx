import React, { useEffect, useState } from 'react'
import './book.css'
function Book() {
const [books , setBooks] = useState([]);
const [inputs , setInput] = useState();
useEffect(()=>{
const geBooks = async () =>{
const url = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputs}`)
const respo = await url.json()
const result =respo.items
console.log(result);
setBooks(result)
}
geBooks()
},[]) 

const getInput = (event) => {
  setInput(event.target.value);
}
const handleButtonClick = () => {
  console.log('Input value:', inputs);

};

  return (
    <div className='cantainer'>
      <header className='head-section'>
        <div className="top-main">
            <div className="top-logo">
            <img src="https://github.com/prabinmagar/booklib-app-using-react-js-and-openlib-api/blob/master/src/images/logo.png?raw=true" alt="" /> 
            <h1>BOOKHUB</h1>
            </div>
            <div className='home-top'>
                <span>HOME</span>
                <span>ABOUT</span>
            </div>
        </div>
      </header>
      <main>
        <div className='main-section'>
            <div className="finder">
                <img src="https://github.com/prabinmagar/booklib-app-using-react-js-and-openlib-api/blob/master/src/images/library-img.jpg?raw=true" alt="" />
            </div>
            <div className="search-section">
             <div className="text-section">
                <h1>Find Your Book of Choice.</h1>
             </div>
              <div className="result">        
                 <div className="contant">                        
                        <div className="text">              
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet est facilis doloribus veritatis earum inventore et illo ea ullam veniam obcaecati modi distinctio voluptates corrupti quidem facere, libero nisi?</span>
     </div>         
      </div> 
      <div className="input-section">       
              <input  onChange={getInput} value={inputs} type="text" placeholder='The lost world...' />         
              <button onClick={handleButtonClick} className="search"><i class="fa-solid fa-magnifying-glass"></i></button>       
              </div>   
      </div>
            </div>
            <div className="data-section">
                <div className="all-results">
               {books.map((data)=>(
                    <div className="books-content">
                    <div className="images-div">
                        <img src={data?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                    </div>
                    <div className="ditaley">
                        <h3>{data?.volumeInfo?.title}</h3>
                        <h4>Author:   <span>{data?.volumeInfo?.authors?.[0]}</span></h4>
                        <h4>Price:   <span>{data?.volumeInfo?.pageCount}</span></h4>
                        <h4>PublishedDate:    <span>{data?.volumeInfo?.publishedDate}</span></h4>
                    </div>
                </div>
               ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Book