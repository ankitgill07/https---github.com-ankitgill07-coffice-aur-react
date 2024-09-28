import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Countery from './components/countery/countery.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Countery/>
  </StrictMode>,
)
