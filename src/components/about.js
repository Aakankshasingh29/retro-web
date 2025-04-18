import React from "react";
import Crossy from "../assests/crossy.jpg"
import hayday from "../assests/hayday.jpg"
import doodle from "../assests/doodle.jpg"
import feeding from "../assests/feeding.jpg"
import machine from "../assests/machine.jpg"

const About = () =>{
    return(
      <>
        <div className="container mx-auto bg-gray-800 px-4 p-4 rounded-xl ">
            <h1 className="text-5xl font-bold  text-center p-8 mb-px text-white  font-serif  ">About Us</h1>
            <p className="font-medium text-center text-white mb-2 font-serif">We’re an optimistic and gratitude-filled group of remote workers scattered around <br></br>the world and dedicated to creating a product our customers will use and love.</p>
            <div className="flex flex-col items-center p-8  " >
            <button type="button" class="py-2.5 px-5 flex me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-teal-600 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 " >Learn More About Us<svg class="w-6 h-6 align-middle  text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>

            </button>

            </div>
            <div className="container mx-auto">
            <section class="bg-zinc-50 overflow-hidden">
 <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
  <div class="flex flex-col sm:flex-row mx-auto">
   <a href="#">
    <img src={Crossy} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
   <a href="#_">
    <img src={doodle} class="rounded-xl  -rotate-10 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> 
   </a>
   
   <a href="#_"> <img src= {hayday} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
   <a href="#_"> <img src={feeding} class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
  
  </div> 
  
 </div>
</section>

 </div>



 </div>

<div className="container mx-auto ">
  <div className="text  text-center text-red-400 mb-2 font-serif">
      <h1 className="text-2xl p-8  font-semibold  subpixel-antialiased" >Dynamic content that players love to play across their favorite channels </h1>
      <p className="text-4xl p-8  font-semibold  subpixel-antialiased"> It's all about</p>
       <p className="text-6xl p-8 text-red-800 font-semibold  subpixel-antialiased"> Games </p>



  </div>

</div>

</>
      
            

    )

}
export default About