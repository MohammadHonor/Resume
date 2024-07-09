import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaLinkedin } from "react-icons/fa";

import { LuTwitter } from "react-icons/lu";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[794px] h-[1123px] border
     border-blue-700 p-2'>
      <div className=" flex gap-2  border-b-2 pb-2  border-blue-600 ">
        <b className='flex  w-40 justify-center items-center text-4xl border-blue-600 border-r-4'>MS</b>
        <div className='flex flex-col justify-center items-center pt-2'>
          <b className='text-4xl'>Mohammad Sharuf Ali</b>
          <ul className='flex  list-disc gap-6 pl-10'>
            <li>8115716390</li>
            <li>md.sharufali987@gmail.com</li>
            <li>Padrauna , India 274304</li>
          </ul>
        </div>
      </div>

      <div className=" flex  border-b-2 p-2 border-blue-600 ">
        <b className='flex border w-40 justify-center pt-2 bg-lime-100'>Summary</b>
        <div className='flex flex-col pl-10 pt-2'>
        Enthusiastic MERN stack engineer with a strong background <br/>
        in building and maintaining web applications using MongoDB,<br/> 
        Express.js, React, and Node.js. Proficient in front-end and back-end <br/>
        development, with expertise in JavaScript, HTML, CSS, and related <br/>
        technologies. Skilled in database management and creating fast, <br/>
        scalable, and user-friendly web applications.
         
        </div>
      </div>

      <div className=" flex   gap-2 border-b-2 p-2 border-blue-600 ">
        <b className='flex border w-40 justify-center pt-2 bg-lime-100'>Project</b>
        <div className='flex flex-col pt-2 pl-10 pb-2'>
           <ol className='list-disc flex flex-col gap-4'>
            <li>
              <b>E-Voting System</b>
               - Using react,express,mongoose,atlas mongodb --
               <a href="" className='border-2 border-green-500 pl-2 pr-2 rounded justify-center items-center'>Go</a>
               <p>Description :: Choose your candidate very easily from home</p>
               </li>
              
              <li>
               <b>Portfolio website</b>
               - Using React js,express,mongoose,MongoDB Tailwindcss --
               <a href="" className='border-2 border-green-500 pl-2 pr-2 rounded justify-center items-center'>Go</a>
               <p>Description :: My Portfolio website</p>
               </li> 
               {/* <li>
              <b>E-Commerce Website</b>
               - Using Java Spring Boot Mysql Tailwindcss --
               <a href="" className='border-2 border-green-500 pl-2 pr-2 rounded justify-center items-center'>Go</a>
               <p>Description :: Order your clothes</p>
               </li>  */}
               
               {/* <li>
              <b>IP Subnet Calculator</b>
               - Using React,mongodb,express,nodejs --
               <a href="" className='border-2 border-green-500 pl-2 pr-2 rounded justify-center items-center'>Go</a>
               <p>Description :: Calculate the Subnet of Class based IP Address</p>
               </li>  */}
            </ol>
        </div>
      </div>

      <div className=" flex   gap-2 border-b-2 p-2 border-blue-600 ">
        <b className='flex border w-40 justify-center pt-2 bg-lime-100'>Skill</b>
        <div className='flex flex-row gap-40 pt-2 pl-10 pb-2'>
           <ol className='list-disc flex flex-col gap-4'>
           <li>Java</li>
          {/* // <li>Spring Boot</li> */}
           <li>Mysql</li>
           <li>Git Command</li>
           <li>JavaScipt</li>
           <li>Basic Python</li>
           <li>HTML5</li>
           
            </ol>
            <ol className='list-disc flex flex-col gap-4'>
           <li>React</li>
           <li>Express</li>
           <li>NodeJs</li>
           <li>Atlas Mongodb</li>
           <li>Mongoose</li>
           <li>Tailwindcss</li>
           <li>CSS</li>
            </ol>  
        </div>
      </div>

      <div className=" flex   gap-2 border-b-2 p-2 border-blue-600 ">
        <b className='flex border w-40 justify-center pt-2 bg-lime-100'>Education</b>
        <div className='flex flex-row gap-40 pt-2 pl-10 pb-2'>
           <ol className='list-disc flex flex-col gap-4'>
           <li>
            <b>Computer Engineering with Artificial Intelligence and Machine learning
            </b>
           </li>
           <p>RD Engineering College Duhai,Ghaziabad </p>
           <p>From AKTU University</p>
            </ol>  
        </div>
      </div>

      <div className=" flex   gap-2 border-b-2 p-2 border-blue-600 ">
        <b className='flex border w-40 justify-center pt-2 bg-lime-100'>Language</b>
        <div className='flex flex-row gap-40 pt-2 pl-10 pb-2'>
           <ol className='list-disc flex flex-col gap-4'>
           <li>English</li>
           <li>Hindi</li>
            </ol>  
        </div>
      </div>

      <div className=" flex   gap-2 border-b-2 p-2 border-blue-600 ">
        <b className='flex border w-40 justify-center pt-2 bg-lime-100'>Social Media</b>
        <div className='flex flex-row gap-40 pt-2 pl-10 pb-2'>
           <ol className=' flex flex-col gap-4'>
          <li className='flex gap-2'>
            <FaLinkedin className='text-2xl'/>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
            https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit
            </a>
            </li>
            <li className='flex gap-2'>
            <LuTwitter className='text-2xl'/>
            <a href="">Twitter</a>
            </li>
            </ol>  
        </div>
      </div>
    </div>
  )
}

export default App
