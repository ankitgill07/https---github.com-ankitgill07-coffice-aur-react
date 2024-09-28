import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Todo from './components/todo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Todo/>
  </StrictMode>,
)
