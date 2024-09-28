
import './App.css'
import About from './components/about';
import Conents from './components/conents';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route  path="/"  element={<Home/>}/>
    <Route path="/about" exact element={<About/>} /> 
    <Route path="/conents" exact element={<Conents/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
