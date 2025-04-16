import './App.css'
import About from './Componts/About'
import Header from './Componts/Header'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import Home from './Componts/Home'
import Project from './Componts/Project'
import Contact from './Componts/Contact'

function App() {


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
    element:<App />,
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
