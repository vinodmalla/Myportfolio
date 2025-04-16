import React from 'react'
import logo from "../myprofile.jpg"
import { DownloadIcon } from 'lucide-react'
import { FaReact } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center text-center md:m-6 md:px-4'>
    <div>
      <img className='w-40 md:w-96 px-4 rounded-2xl mx-auto' src={logo} alt="profile" />
    </div>
    <div className='m-8 md:ml-12 text-center md:text-left'>
      <h1 className='px-4 text-xl md:text-4xl font-bold leading-relaxed'>
        <FaReact className="text-blue-400 inline animate-pulse" /><br/>
        Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-pulse">Vinodkumar M</span><br />
        A passionate React.js Developer
      </h1>
      <p className='px-4 md:px-12 text-base md:text-lg font-light mt-4'>
        I build fast, functional, and user-friendly web apps using the power of React ⚛️<br />
        I focus on functionality and deliver seamless experiences with clean, efficient code. 💻<br />
        Always learning, always building, always pushing the limits of what’s possible on the web.
      </p>
      <div className='flex justify-center md:justify-start mt-6'>
        <a href='/Vinod_React_resume.pdf' download>
          <button className='px-4 md:px-10 py-2 flex items-center gap-2 text-white font-bold border border-pink-500 w-full md:w-56 rounded-2xl hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
            Download CV <DownloadIcon className='text-white animate-bounce' />
          </button>
        </a>
      </div>
    </div>
  </div>
  
  )
}
