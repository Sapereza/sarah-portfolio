import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-red-500 via-red-500 to-slate-300">
        
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-7xl text-white font-bold">
                    I'm a Web Developer
                </h1>
                <p className="text-white py-4 max-w-md">
                    I like to work on web applications using React and Tailwind CSS.
                </p>
                <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 shadow drop-shadow-md cursor-pointer active:shadow-inner active:shadow-black/50 active:duration-200">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight size={25} className="ml-1" />
                        </span>
                        
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className="rounded-full mx-auto w-2/3 md:w-2/3"/>
            </div>

        </div>

    </div>
 
  );
};

export default Home;