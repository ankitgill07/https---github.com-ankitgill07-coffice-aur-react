import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Jokes from './components/Jokes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Jokes/>
  </StrictMode>,
)
