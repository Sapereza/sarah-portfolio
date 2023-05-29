import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {HiArrowNarrowRight} from "react-icons/hi";
import { useState, useEffect } from "react";

const Home = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [
        "Web Developer",
        "Designer",
        "Creator",
        "Streamer",
    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-red-500 via-red-500 to-slate-300">
        
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-28">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
                    I'm a {text}
                </h1>
                <p className="text-white py-4 max-w-md">
                    I like to work on web applications using React and Tailwind CSS.
                </p>
                <div>
                    <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 shadow drop-shadow-md cursor-pointer active:shadow-inner active:shadow-black/50 duration-200 
                    ">
                        Portfolio
                        <span className="duration-300">
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