"use client" 
import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
// import { alertService } from 'services'

const HeroSection = () => {
  return (
    <section id="home" className="hover:bg-blue-100">
      <div className="flex  flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className=" bg-blue-600 text-white flex text-center rounded cursor-pointer border-solid border-2 bg-blue border-indigo-600 w-40 h-10 mr-20 items-center justify-center">
          
          <a className="max-w-xs bg-red transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" onClick={() => alert( "Thank You for Downloading!")} href="/cv.pdf" download="cv">Download CV</a>

          {/* <p className="max-w-xs bg-red transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">Download Resume</p> */}
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m NeerajKumar!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-red-300">
              Software Developer{" "}
            </span>
            based in Mumbai, India. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 cursor-pointer py-3 bg-pink-600 rounded shadow hover:bg-pink-700 hover:bg-blue-700  "
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            My Projects
          </Link>
          
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
