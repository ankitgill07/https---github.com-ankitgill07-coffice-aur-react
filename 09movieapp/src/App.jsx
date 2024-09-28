import { useState } from 'react';
import GetMovieData from './hooks/Movie';
function App() {
  const [movies, setMovie] = useState("");
  const [input, setInput] = useState("");
  const movieData = GetMovieData(movies);

  const handleSearch = () => {
    setMovie(input);
    console.log(movieData);
    
  };

  return (
    <div className='w-screen h-screen grid items-center justify-center'>
      <input
        className='outline-none border border-black rounded p-1 w-[537px]'
        type="text"
        placeholder='Enter movie title'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}
        className='bg-blue-600 w-[60px] bg-blue-500 text-white p-2'
  
      >
        Search
      </button>

      {movieData && (
        <div className="cards" id="cards1">
          <article className="information card bg-white w-[328px] h-auto p-4 my-[9.27px] mx-0 shadow-md">
            <div className="imageContainer w-[320px] h-[272.25px]">
              <img className="productImage w-[320px] h-[268.25px]" src={movieData.avatar_url} alt={movieData.name} />
            </div>
            <h1 className="productName text-[32px] font-semibold font-sans">{movieData.name}</h1>
            <p className="productDescription text-[18px] text-[black] font-sans font-light leading-[23px] mt-3">
              {movieData.Plot}
            </p>
            <div className="productPriceElement flex gap-5 mt-[22px]">
              <p className="productPrice text-[22px] font-light text-[#1e1f23]">{movieData.public_repos}</p>
              <p className="productActualPrice text-[22px] font-light text-[#1e1f23]">{movieData.bio}</p>
            </div>
            <div className="productStockElement flex gap-5 mt-[20px]">
              <p className="productProperty text-[16px] font-semibold text-[black]">Director:</p>
              <p className="productStock text-[16px] font-light text-[#1e1f23]">{movieData.login}</p>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}




export default App
