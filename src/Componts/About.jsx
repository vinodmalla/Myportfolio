import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { SiExpress } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

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
         Full Stack MERN Developer with 2+ years of experience at HCL Technologies designing scalable web applications using React.js, Node.js, Express.js, and MongoDB. Built and deployed a production matchmaking platform on AWS EC2 with real-time
WebSocket chat, Razorpay payment integration, and JWT authentication serving live users at 99.5% uptime. Expertise in REST API
design, Redux state management, Tailwind CSS, and automated testing (Jest, React Testing Library) with 85% code coverage
across 12+ Agile sprint cycles.
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
         < li><SiTypescript className="text-yellow-400 mx-auto" size={60} /><p className="mt-2">TypeScript</p></li>
          <li><FaReact className="text-blue-400 mx-auto" size={60} /><p className="mt-2">React JS</p></li>
          <li><SiRedux className="text-purple-400 mx-auto" size={60} /><p className="mt-2">Redux JS</p></li>
          <li><FaPython className="text-blue-400 mx-auto" size={60} /><p className="mt-2">Python</p></li>
             <li><FaNodeJs className="text-blue-400 mx-auto" size={60} /><p className="mt-2">Node JS</p></li>
                <li><SiMongodb className="text-blue-400 mx-auto" size={60} /><p className="mt-2">MongoDB</p></li>
                   <li><SiMysql className="text-blue-400 mx-auto" size={60} /><p className="mt-2">MySQL</p></li>
                    <li><SiExpress className="text-blue-400 mx-auto" size={60} /><p className="mt-2">Express JS</p></li>
                     <li> <FaAws className="text-blue-400 mx-auto" size={60} /><p className="mt-2">Amazon AWS EC2</p></li>
                      <li> <FaGit className="text-blue-400 mx-auto" size={60} /><p className="mt-2">Git</p></li>
                       <li> <FaGithub className="text-blue-400 mx-auto" size={60} /><p className="mt-2">Github</p></li>

        </ul>
      </div>

      <hr className="my-8 border-slate-300" />

      {/* Experience */}
      <div>
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Experience</h2>
        <div className="flex flex-col text-xl sm:flex-row sm:justify-between font-semibold m-4">
          <p>Software Engineer at HCL Tech</p>
          <span className="text-lg font-light">Nov 2023 - Present</span>
        </div>
        <div className='ml-12'>
          <li>
            Delivered 10+ scalable full-stack features using React.js and Node.js/Express.js across 5+ application modules, supporting a growing user base.
          </li>
          <li>Built and maintained 15+ secure RESTful APIs, implementing middleware for authentication, validation, and error handling, achieving 99% production uptime.</li>
          <li>Implemented JWT-based authentication with role-based access control (RBAC), securing access for 500+ users across 3 roles.</li>
          <li>Developed 20+ reusable UI components using React.js and Tailwind CSS, improving code maintainability by 30% and accelerating frontend development.</li>
          <li>Optimized MongoDB queries and indexing, reducing API response time by 25% and enhancing overall application performance.</li>
          <li>Resolved 50+ production issues across frontend and backend, reducing user-facing defects by 40% within 6 months.</li>
          <li>Wrote 100+ unit and integration tests using Jest and React Testing Library, achieving 85% code coverage and reducing regression bugs by 35%.</li>
          <li>Actively contributed to Agile sprint planning, code reviews, and cross-team collaboration, ensuring 95% on-time delivery across 12+ sprint cycles.</li>
    </div>
      </div>

      <hr className="my-8 border-slate-300" />
      <div>
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Coding Profile</h2>
           <div className="flex flex-col sm:flex-row sm:justify-between font-semibold m-4">
          <p className='font-extralight'><span className='font-bold' >LeetCode </span>: 400+ problems solved — Data Structures and Algorithms (DSA)</p>
          <span className="text-sm font-light text-blue-400"><a href='https://leetcode.com/u/mallavinod95/' target='_blank'>Profile</a></span>
        </div>
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
