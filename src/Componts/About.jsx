import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export default function About() {
  return (
    <div className="m-4 sm:m-6 md:mx-auto   max-w-6xl mx-6">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl text-center font-extrabold">
        ABOUT <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">Me</span>
      </h1>

      {/* About Info */}
      <div className="mt-6">
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Information About Me</h2>
        <p className="text-center text-base  sm:text-lg leading-relaxed">
          Hey there! I'm M Vinodkumar, a React.js Developer at HCLTech with 1+ year of experience. ⚛️💻<br />
          I bring ideas to life using ReactJS, JavaScript, APIs, HTML, CSS, and a dash of TailwindCSS! 💻✨
        </p>
      </div>

      <hr className="my-8 border-slate-300" />

      {/* Skills Section */}
      <div>
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-6">My Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          <li><FaHtml5 className="text-orange-400 mx-auto" size={60} /><p className="mt-2">HTML</p></li>
          <li><RiTailwindCssFill className="text-blue-300 mx-auto" size={60} /><p className="mt-2">Tailwind CSS</p></li>
          <li><TbBrandJavascript className="text-yellow-400 mx-auto" size={60} /><p className="mt-2">JavaScript</p></li>
          <li><FaReact className="text-blue-400 mx-auto" size={60} /><p className="mt-2">React JS</p></li>
          <li><SiRedux className="text-purple-400 mx-auto" size={60} /><p className="mt-2">Redux JS</p></li>
          <li><FaPython className="text-blue-400 mx-auto" size={60} /><p className="mt-2">Python</p></li>
        </ul>
      </div>

      <hr className="my-8 border-slate-300" />

      {/* Experience */}
      <div>
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Experience</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between font-semibold m-4">
          <p>Software Engineer at HCL Tech</p>
          <span className="text-sm font-light">Nov 2023 - Present</span>
        </div>
        <p className=" text-sm sm:text-base px-4 text-center">
          As a React.js Developer at HCLTech with over 1+ year of experience, I designed and developed responsive UI components to enhance user experience and application performance. I consistently wrote clean, modular, and reusable code, improving overall maintainability and scalability. By identifying and resolving bugs efficiently, I ensured seamless functionality and high-quality deliverables. I also collaborated closely with designers and backend developers to streamline workflows and deliver projects within deadlines.
        </p>
      </div>

      <hr className="my-8 border-slate-300" />

      {/* Education */}
      <div>
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Education</h2>
        
        <div className="flex flex-col sm:flex-row sm:justify-between font-semibold m-4">
          <p className='font-bold'>B.Tech in Electrical and Electronics Engineering</p>
          <span className="text-sm font-light">Aug 2019 - Apr 2023</span>
        </div>
        <p className=" sm:text-base px-4 font-light text-sm leading-snug">Vignan Institute of Information and Technology</p>

        <div className="flex flex-col sm:flex-row sm:justify-between font-semibold m-4">
          <p className='font-bold'>Intermediate in MPC</p>
          <span className="text-sm font-light">2017 - 2019</span>
        </div>
        <p className="text-sm sm:text-base font-light px-4 ">Sri Chaitanya Junior College</p>

        <div className="flex flex-col sm:flex-row sm:justify-between font-semibold m-4">
          <p className='font-bold'>SSC (10th)</p>
          <span className="text-sm font-light">2017</span>
        </div>
        <p className="text-sm sm:text-base px-4 font-light text-justify">D P N Z P High School</p>
      </div>
    </div>
  );
}
