import React from 'react'
import foodapp from '../foodappp.png'
import netflix from '../Netflix.png'
import ECommerce from '../ecommercee.png'
import portfolio from '../portfolio.png'
import { FaGithub } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";


export default function Project() {
  return (
    <div className='m-4'>
      <h1 className='text-center text-xl font-semibold '>Here is some of the work I have done using React.</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-30 p-4 md:p-8 '>
        <div className=' relative group w-full h-full bg-gray-800 rounded-2xl overflow-hidden  shadow-lg  '>
             <img src={foodapp} alt='foodapp' className='w-40 h-48 object-scale-down mx-auto ' />
             <h3  className='text-center text-xl p-2 font-semibold'>Food App</h3>
             <p className='px-4 mb-4 text-sm text-center'>A fully responsive food delivery app integrating Swiggyʼs live API! 🚀 Built from scratch using React, this projectfocuses on performance optimization, seamless navigation, and a smooth user experience.</p>
             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl flex items-center justify-center space-x-4">
              <a href='https://github.com/vinodmalla/Foodapp' target='_blank' className='hover:bg-stone-400 rounded-3xl' ><FaGithub size={40} /></a>
              <a href='https://foodappvinod.vercel.app/' target='_blank'className='hover:bg-stone-400 rounded-3xl' ><CgMediaLive size={40} /></a>
             </div>
        </div>
        <div  className='relative group w-full h-full bg-gray-800 rounded-xl  shadow-lg '>
        <img src={netflix} alt='netflix' className='text-center w-40 h-48  object-scale-down mx-auto' />
    
            <h3 className='text-center p-2 text-xl font-semibold'>Netflix GenAI</h3>
            <p className='px-4 mb-4 text-sm text-center '>Developed Netflix GenAI using TMDB API and Gemini AI for personalized movie recommendations. Enabled real-time data fetching and dynamic movie exploration for a seamless user experience.</p>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl flex items-center justify-center space-x-4">
              <a href='https://github.com/vinodmalla/Gen_netflix' target='_blank' className='hover:bg-stone-400 rounded-3xl'><FaGithub size={40} /></a>
              <a href='https://gen-netflix.vercel.app/' target='_blank'className='hover:bg-stone-400 rounded-3xl' ><CgMediaLive size={40} /></a>
             </div>
        </div>
        <div className='relative group w-full h-full bg-gray-800 rounded-xl  shadow-lg'>
        <img src={ECommerce} alt='ecommerce' className='w-48 h-48 object-scale-down mx-auto ' />
       
            <h3 className='text-center mb-2 text-xl font-semibold'>ECommerce Product Listing Page</h3>
            <p className='px-4 mb-4 text-sm text-center '>Built a dynamic e-commerce product listing page with search, filter, and sort using React and Context API. Integrated global cart state, React Router, and responsive UI with Tailwind CSS for a smooth user experience.</p>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl flex items-center justify-center space-x-4">
              <a href='hhttps://github.com/vinodmalla/E-Commerce-Product-Listing-Page' target='_blank' className='hover:bg-stone-400 rounded-3xl' ><FaGithub size={40} /></a>
              <a href='https://e-commerce-product-listing-page-pied.vercel.app/' target='_blank' className='hover:bg-stone-400 rounded-3xl' ><CgMediaLive size={40} /></a>
             </div>

        </div>
        <div className='relative group w-full h-full bg-gray-800 rounded-xl shadow-lg'>
        <img src={portfolio} alt='portfolio' className='w-48 h-48 object-scale-down mx-auto ' />
       
            <h3 className='text-center mb-2 text-xl font-semibold'>My Portfolio</h3>
            <p className='px-4 mb-4 text-sm text-center'>Created a personal portfolio using React and Tailwind CSS to showcase projects and skills. Implemented smooth navigation with React Router and ensured a responsive, modern design for all devices.</p>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl flex items-center justify-center space-x-4">
              <a href='https://github.com/vinodmalla/Foodapp' target='_blank' className='hover:bg-stone-400 rounded-3xl' ><FaGithub size={40} /></a>
              <a href='https://foodappvinod.vercel.app/' target='_blank' className='hover:bg-stone-400 rounded-3xl' ><CgMediaLive size={40} /></a>
             </div>

        </div>
    </div>
    </div>
      
  )
}
