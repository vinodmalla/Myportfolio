import './App.css'
import About from './Componts/About'
import Header from './Componts/Header'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import Home from './Componts/Home'
import Project from './Componts/Project'
import Contact from './Componts/Contact'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);



  return (
    < >
    
       <Header />
       <Outlet />
    </>
  )
}

export default App

export const approuter=createBrowserRouter([
  {
    path:"",
    element:<App  />,
    children:[
      {
        path:"/",
         element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/projects",
        element:<Project />
      },
      {
        path:"/contact",
        element:<Contact />
      }
    ]

  }
])
