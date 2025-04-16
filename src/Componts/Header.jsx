import React from 'react'
import { Menu ,X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isopen,setisOpen]=useState(false)

  return (
    <div className='relative p-2 m-2 shadow-lg md:m-4  md:flex justify-center'>
        <div className='md:hidden z-50 relative'>
            <button onClick={()=>setisOpen(!isopen)}>
                {isopen ? <X size={40} />:<Menu size={40} />}
            </button>
        </div>
        <div  className={`absolute z-40 md:static top-0 left-0 w-full md:w-auto text-xs md:text-xl transition-all duration-300 shadow-md md:shadow-none ${isopen ? 'block' : 'hidden'}  bg-[#1d232a] md:bg-transparent md:flex`}  >
        <ul className=' flex flex-col md:flex-row justify-between md:space-x-6 p-4    md:bg-transparent m-4 md:m-0 md:p-0 text-gray-300 text-lg font-bold' >
            <li className="p-2 m-2 hover:bg-white hover:text-black rounded-3xl " onClick={()=>setisOpen(false)}><Link to="/about">About</Link></li>
            <li className="p-2 m-2 hover:bg-white hover:text-black rounded-3xl " onClick={()=>setisOpen(false)}><Link to="/projects">Projects</Link></li>
            <li className="p-2 m-2 hover:bg-white hover:text-black rounded-3xl " onClick={()=>setisOpen(false)}><Link to='/contact'>Contact Me</Link></li>
        </ul>
      { /* <div className='p-10 md:p-2 md:m-2'>
            <label className="toggle text-base-content">
                <input type="checkbox" value="" className="theme-controller" />
                <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
            </label>
        </div> */}

        </div>
       
        
      
    </div>
  )
}
