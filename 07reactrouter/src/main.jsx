import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/homes/home.jsx'
import About from './components/About/About.jsx'
import Content from './components/Content/Content.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>

      },
      {
        path: "content",
        element: <Content/>
        
      },
      {
        path: "user/:userid",
        element: <User/>
        
      },
      {
        path: "github",
        element: <Github/>
        
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
